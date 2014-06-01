
SkillController = ($scope) ->
	$scope.$watch('character.skills', (-> updateSkillModel()), true)

	$scope.skills = {}

	updateSkillModel = ->
		skillMap = Skills.getAllAsMap()

		$scope.skills = 
			physical: []
			psychic: []
			combined: []

		for skill in $scope.character.skills
			s = skillMap[skill.name]
			s.level = skill.level
			$scope.skills[s.type].push(s)

	updateSkillModel()
