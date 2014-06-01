
LevelUpController = ($scope, $modalInstance, character) ->
	mainAttrs = Professions.getMainAttrs(character.profession)
	
	getMains = ->
		mains = []
		
		for attr in mainAttrs
			mains.push
				attr: attr
				label: Attributes.names[attr]
		
		return mains


	getSecondaries = ->
		secondaries = []
		
		for attr in Attributes.getBaseAttrs() when attr not in mainAttrs
			secondaries.push
				attr: attr
				label: Attributes.names[attr]
				used: attr in character.leveledUpAttributes
		
		return secondaries


	getSkillOptions = ->
		skillMap = Skills.getAllAsMap()

		for skill in character.skills
			skillOpt = skillMap[skill.name]

			skillOpt.disabled = skill.level is 3

			points = ''
			for i in [1..skill.level]
				points += '\u2022 '

			skillOpt.label = points + skill.name

		skillOptions = []

		for skillName, skillOpt of skillMap
			skillOpt.label ?= skillOpt.name
			skillOptions.push(skillOpt)

		return skillOptions
		

	$scope.mains = getMains()
	$scope.secondaries = getSecondaries()
	$scope.skillOptions = [getSkillOptions(), getSkillOptions()]


	switchWith = (arr) ->
		return (newSkill, oldSkill)->
			for skill in $scope.skillOptions[arr] 
				if skill.name is newSkill
					skill.disabled = true
				if skill.name is oldSkill
					skill.disabled = false

	$scope.$watch 'levelUp.skills[0]', switchWith(1), true
	$scope.$watch 'levelUp.skills[1]', switchWith(0), true

	if character.leveledUpAttributes.length > 0
		selectedMain = main.attr for main in $scope.mains when main.attr not in character.leveledUpAttributes

	$scope.levelUp = 
		main: selectedMain ? null
		secondary: null
		skills: []

	$scope.isOk = ->
		return $scope.levelUp.main? and $scope.levelUp.secondary?

	$scope.ok = ->
		$modalInstance.close
			attributes: [$scope.levelUp.main, $scope.levelUp.secondary]
			skills: $scope.levelUp.skills
			
	$scope.cancel = ->
		$modalInstance.dismiss('cancel')