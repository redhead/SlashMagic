
class Character

	constructor: (character) ->
		@name = 		character.name
		@profession = 	character.profession
		@race = 		character.race
		@male = 		character.male
		@background = 	character.background 	? ""
		@skills = 		character.skills 		? []
		@level = 		character.level 		? 1
		@experience = 	character.experience 	? 0

		@items = 		character.items 		? []

		@gold = 		character.gold 			? 0
		
		@attributes = 	new Attributes(this, character.attributes)
		@corrections = 	character.corrections 	? []

		@leveledUpAttributes = character.leveledUpAttributes ? {}

		@damage = 		character.damage 		? 0
		@fatigue = 		character.fatigue 		? 0

		@penalties = character.penalties ? {
			damage: 0
			fatigue: 0
		}

		@armor = 		character.armor 		? 'Beze zbroje'
		@helmet = 		character.helmet 		? 'Bez pokrývky hlavy'


	attr: (attrName, value) ->
		if arguments.length is 2
			@attributes.setRaw(attrName, value)
		else
			@attributes.getRaw(attrName)


	corrAttr: (attrName) ->
		@attributes.corrAttr(attrName)


	_getCorrectionSum: (attrName) ->
		sum = 0
		sum += corr.value for corr in @corrections[attrName] ? []
		return sum


	attrs: ->
		@attributes.attrs()


	getSkill: (skillName) ->
		for skill in @skills when skill.name is skillName
			return skill

		return { name: skillName, level: 0 }


	getExperienceNeeded: ->
		return DamageTable.getPoints(@level + 15)


	levelUp: (props) ->
		@leveledUpAttributes = props.attributes

		for attr in props.attributes
			@attr(attr, @attr(attr) + 1)

		leveledSkills = []
		
		for skill in @skills when skill.name in props.skills
			skill.level += 1
			leveledSkills.push skill.name

		for skillName in props.skills when skillName not in leveledSkills
			@skills.push { name: skillName, level: 1 }

		@experience = @experience - @getExperienceNeeded()
		@level += 1


	toPlainObject: ->
		obj = {}
		obj[name] = value for name, value of this when typeof value isnt 'function'
		obj.attributes = @attributes.toPlainObject()
		obj.corrections = @corrections
		return obj
