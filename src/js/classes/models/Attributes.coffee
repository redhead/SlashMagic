
class Attributes
	@names:
		sil: 'Síla'
		obr: 'Obratnost'
		zrc: 'Zručnost'
		vol: 'Vůle'
		int: 'Inteligence'
		chr: 'Charisma'
		vel: 'Velikost'
		hmt: 'Hmotnost'
		vys: 'Výška'

		odl: 'Odolnost'
		vdr: 'Výdrž'
		rch: 'Rychlost'
		sms: 'Smysly'
		
		krs: 'Krása'
		nbz: 'Nebezpečnost'
		dst: 'Důstojnost'
		
		boj: 'Boj'
		utok: 'Útok'
		strelba: 'Střelba'
		obrana: 'Obrana'


	formulas:
		odl: 'sil'
		vdr: '(sil+vol)/2'
		rch: '(sil+obr)/2'
		sms: 'zrc'
		
		krs: '(obr+zrc)/2+chr/2'
		nbz: '(sil+vol)/2+chr/2'
		dst: '(int+vol)/2+chr/2'
		
		#boj: depends on profession
		utok: 'obr/2:d'
		strelba: 'zrc/2:d'
		obrana: 'obr/2:n'


	constructor: (@character, @baseAttributes) ->
		@formulas['boj'] = Professions.combatFormulas[@character.profession]
		
		@otherAttributes = {}
		@otherAttributes[name] = Parser.parse(formula) for name, formula of @formulas


	getRaw: (name) ->
		return @baseAttributes[name] ? 0

	setRaw: (name, value) ->
		if @baseAttributes[name]?
			@baseAttributes[name] = value


	corrAttr: (name) ->
		attr = 0
		
		if @baseAttributes[name]?
			attr = @baseAttributes[name]
		
		else if @otherAttributes[name]?
			attr = @otherAttributes[name].interpret(@character)
		
		attr += @character._getCorrectionSum(name)
		return attr


	attrs: ->
		obj = {}
		obj[name] = @corrAttr(name) for name of @baseAttributes
		obj[name] = @corrAttr(name) for name of @otherAttributes
		return obj


	@getBaseAttrs: (attrName) ->
		return [ 'sil', 'obr', 'zrc', 'vol', 'int', 'chr' ]


	toPlainObject: ->
		return @baseAttributes
