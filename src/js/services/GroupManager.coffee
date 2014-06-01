
GroupManager = ($scope, characterStorage) ->

	groups = {};
	names = storage.getSavedCharacterNames()

	for name in names
		char = storage.getCharacter(name)
		
		if !groups[char.group]
			groups[char.group] = []

		groups[char.group].push(char)

	for name of groups
		groups[name] = new Group(groups[name])

	return {
		groups: groups
	}