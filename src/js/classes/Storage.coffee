
class Storage
	put: (key, value) ->
		json = JSON.stringify(JSON.decycle(value))
		localStorage.setItem(key, json)
	

	get: (key, value) ->
		json = localStorage.getItem(key)
		return JSON.retrocycle(JSON.parse(json))



class CharacterStorage
	constructor: (@storage) ->

	putLast: (character) ->
		obj = character.toPlainObject()
		@storage.put('last', obj)
	

	getLast: ->
		obj = @storage.get('last')
		if obj 
			return new Character obj
		else
			return null