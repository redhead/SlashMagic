
module = angular.module 'app', ['ui.directives']


module.run ($rootScope, $timeout) ->
	window.addEventListener 'online', ->
		$rootScope.$broadcast('app.online')
	
	window.addEventListener 'offline', ->
		$rootScope.$broadcast('app.offline')

	$timeout (->
			status = if navigator.onLine then 'app.online' else 'app.offline'
			$rootScope.$broadcast(status)
		), 0


module.directive 'genderIcon', ->
	restrict: 'EA'
	scope:
		character: '='
	replace: true
	template:
		'<span class="gender"></span>'
	link: ($scope, $el, $attrs) ->
		char = if $scope.character.male then '♂' else '♀'
		$el.html(char);



module.directive 'gold', ->
	restrict: 'EA'
	scope:
		count: '='
	replace: true
	template:
		'<span><ng:pluralize count="count" when="when" /></span>'
	compile: ->
		pre: ($scope) ->
			$scope.when =
				'0': '0 zlatých'
				'1': '{{count|number}} zlatý'
				'few': '{{count|number}} zlaté'
				'other': '{{count|number}} zlatých'



attrPopupLinker = ($scope, el, attrs) ->
	$scope.attrName = attrs.name

	$el = $(el)
	$popup = $('#attr-popup')

	$el.on 'mouseenter', ->
		$scope.$apply ->
			$scope.$emit 'showAttrTooltipRise', $scope.attr

		$popup.show()

		pos = $el.offset()
		pos.width = $el[0].offsetWidth
		pos.height = $el[0].offsetHeight

		actualWidth = $popup[0].offsetWidth
		actualHeight = $popup[0].offsetHeight

		$popup.css
			top: pos.top - actualHeight
			left: pos.left + pos.width / 2 - actualWidth / 2

	$el.on 'mouseleave', ->
		$popup.hide()

module.directive 'attrRow', ->
	restrict: 'A'
	scope: true
	replace: true
	isolate: false
	template:
		'<tr>' + 
			'<td>{{attributes.names[attr]}}</td>' + 
			'<td>{{character.corrAttr(attr) | attr}}</td>' +
		'</tr>'
	link: attrPopupLinker

module.directive 'attr', ->
	restrict: 'E'
	scope: true
	replace: true
	isolate: false
	template:
		'<span>{{character.corrAttr(attrName) | attr}}</span>'
	link: attrPopupLinker



module.directive 'damageFatigueBars', ->
	restrict: 'EA'
	scope: true
	templateUrl: 'damageFatigueBars.html'
	controller: 'DamageFatigueController'
	link: ($scope, el, attrs, controller) ->
		$scope.type = attrs.type



module.service 'Character', ['$rootScope', 'characterStorage', 
	($rootScope, characterStorage) ->
		return CharacterService($rootScope, characterStorage.getLast())
]



module.service 'GroupManager', ['characterStorage'
	(characterStorage) ->
		return new GroupManager(characterStorage)
]



module.filter 'attr', ->
	(input) -> if input > 0 then '+' + input else input



module.filter 'attrLong', ->
	(input) -> Attributes.names[input]



module.filter 'formula', ->
	(formula) ->
		return if not formula?
		return formula unless m = formula.match /:(d|n)$/

		formula = formula.substring 0, formula.length - 2
		return formula + (if m[1] is 'n' then " (nahoru)" else " (dolů)")
	


module.factory 'storage', ->
	return new Storage


module.factory 'characterStorage', (storage) ->
	return new CharacterStorage(storage)


module.factory 'growler', (storage) ->
	show = (message, type) ->
		options = 
			ele: 'body'
			align: 'right'
			offset:
				from: 'bottom'
				amount: 20
			type: type

		if typeof message isnt 'string'
			message = "<h4>#{message.title}</h4>#{message.message}"
		else
			message = "#{message}"

		$.bootstrapGrowl(message, options)

	return {
		success: (message) -> show(message, 'success')
		error: (message) -> show(message, 'error')
		info: (message) -> show(message, 'info')
	}


