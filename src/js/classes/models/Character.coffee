
class Character

	constructor: (character) ->
		@name = character.name
		@profession = character.profession
		@race = character.race
		@male = character.male
		@background = character.background ? ""

		@gold = character.gold ? 0
		
		@attributes = new Attributes this, character.attributes
		@corrections = character.corrections ? []

		@damage = character.damage ? 0
		@fatigue = character.fatigue ? 0

		@penalties = character.penalties ? {
			damage: 0
			fatigue: 0
		}

		@armor = character.armor ? 'Beze zbroje'
		@helmet = character.helmet ? 'Bez pokrývky hlavy'

	attr: (attrName, value) ->
		if arguments.length is 2
			@attributes.setRaw attrName, value
		else
			@attributes.getRaw attrName

	corrAttr: (attrName) ->
		@attributes.corrAttr(attrName)

	_getCorrectionSum: (attrName) ->
		sum = 0
		sum += corr.value for corr in @corrections[attrName] ? []
		return sum

	attrs: ->
		@attributes.attrs()

	toPlainObject: ->
		obj = {}
		obj[name] = value for name, value of this when typeof value isnt 'function'
		obj.attributes = @attributes.toPlainObject()
		obj.corrections = @corrections
		return obj
