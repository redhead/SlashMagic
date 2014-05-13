

Interpreter = 
	interpret: (expression, context) ->
		ast = Parser.parse(expression)
		return ast.interpret(context)



Parser = 
	isOperator: (c) ->
		return c.match(/\+|-|\*|\//) != null

	createAST: (queue, rounding) ->
		t = queue.pop()
		if !isNaN t
			new Constant t
		else if Parser.isOperator t
			right = Parser.createAST queue, rounding
			left = Parser.createAST queue, rounding
			switch t
				when '+'
					new Plus left, right
				when '-'
					new Minus left, right
				when '*'
					new Times left, right
				when '/'
					new Divide left, right, rounding
		else
			new Variable t

	parse: (expression) ->
		# fixme unary minus
		
		rounding = null
		if (m = expression.match(/:(n|d)$/)) != null
			rounding = m[1]
			expression = expression.substring 0, expression.length - 2


		t = null

		prec =
			'*': 3
			'/': 3
			'+': 2
			'-': 2
			'-': 2
			'(': 1
			')': 1

		last = (array) ->
			return array[array.length - 1] if array.length
			return null

		token = ->
			return false unless expression.length
			c = expression[0]
			if Parser.isOperator(c) or c is '(' or c is ')'
				t = c
			else
				m = expression.match /^[a-zA-Z0-9]+/
				if m?
					t = m[0]
				else
					throw "Chyba ve vzorci"
			expression = expression.substring t.length
			return true

		stack = []
		outputQ = []
		
		while token()
			if !isNaN t
				outputQ.push parseInt(t)
			
			else if Parser.isOperator t
				while stack.length
					o2 = last(stack)
					if prec[t] <= prec[o2]
						stack.pop()
						outputQ.push o2
					else
						break
				stack.push t
			
			else if t is '('
				stack.push t
			
			else if t is ')'
				ok = false
				while stack.length
					lastToken = last(stack)
					if lastToken is '('
						ok = true
						break
					else
						stack.pop()
						outputQ.push lastToken
				
				if not ok
					throw "Špatně uzávorkovaný výraz"

				stack.pop()
			
			else
				outputQ.push t

		while stack.length > 0
			lastToken = stack.pop()
			if lastToken is '(' or lastToken is ')'
				throw "Špatně uzávorkovaný výraz"

			outputQ.push lastToken		

		return Parser.createAST outputQ, rounding



class Constant
	constructor: (@val) ->
	interpret: (context) -> @val

class Variable
	constructor: (@varName) ->
	interpret: (context) -> context.corrAttr(@varName)

class Plus
	constructor: (@leftExpr, @rightExpr) ->
	interpret: (context) ->
		@leftExpr.interpret(context) + @rightExpr.interpret(context)

class UniPlus
	constructor: (@expr) ->
	interpret: (context) ->
		0 + @expr.interpret(context)

class Minus
	constructor: (@leftExpr, @rightExpr) ->
	interpret: (context) ->
		@leftExpr.interpret(context) - @rightExpr.interpret(context)

class UniMinus
	constructor: (@leftExpr, @rightExpr) ->
	interpret: (context) ->
		0 - @rightExpr.interpret(context)

class Times
	constructor: (@leftExpr, @rightExpr) ->
	interpret: (context) ->
		@leftExpr.interpret(context) * @rightExpr.interpret(context)

class Divide
	constructor: (@leftExpr, @rightExpr, @rounding) ->
	interpret: (context) ->
		result = @leftExpr.interpret(context) / @rightExpr.interpret(context)
		
		if @rounding is 'd'
			return Math.floor result
		else if @rounding is 'n'
			return Math.ceil result
		else
			return Math.round result