
CharacterService = ($scope, currentCharacter) ->
	return {
		currentCharacter: currentCharacter || null

		openCharacters: []


		open: (character) ->
			@currentCharacter = character
			$scope.$broadcast('characters.updated')


		close: (character) ->
			@openCharacters = @openCharacters.filter((c) -> c isnt character)
			$scope.$broadcast('characters.updated')
	}