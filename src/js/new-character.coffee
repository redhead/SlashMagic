
NewCharacterController = ($scope, $modalInstance, $timeout) ->
	$scope.cancel = ->
		$modalInstance.dismiss('cancel')

	$scope.races = Races.names
	$scope.professions = Professions.names
	
	$scope.pages = [ 
		'Základní',
		'Vlastnosti',
		'Zázemí',
		'Dovednosti'
	]

	$scope.part = 0

	$scope.model = 
		uniqueness: 2
		skillPoints: 
			physical: 0
			psychic: 0
			combined: 0

	$scope.newCharacter = 
		name: ''
		male: true
		race: $scope.races[0]
		profession: $scope.professions[0]
		attributes: {}
		skills: []
		gold: 0

	$scope.saveAndShow = ->
		newChar = $scope.newCharacter
		newChar.corrections = Races.getRaceCorrections(newChar.race)
		
		charObj = new Character(newChar)

		$modalInstance.close(charObj)

	$scope.goto = (part) ->
		$scope.part = part

	reset = ->
		$scope.$broadcast('reset')

	$scope.$watch 'newCharacter.race', reset
	$scope.$watch 'newCharacter.profession', reset
	$scope.$watch 'newCharacter.male', reset
	$scope.$watch 'model.uniqueness', reset
	$scope.$watch 'model.skillPoints',
		->
			$scope.$broadcast 'resetSkillPoints'
		true

	$timeout (-> reset()), 1000



NewCharacterAttrsController = ($scope) ->
	resetAttrs = ->
		$scope.allocated = {}
		$scope.max = {}
		$scope.remaining = {}
		$scope.useGenderCorrections = !$scope.newCharacter.male
		$scope.newCharacter.attributes = Races.getAttrs($scope.newCharacter.race)
		$scope.remainingMain = $scope.model.uniqueness
		$scope.remainingSecondary = $scope.model.uniqueness * 2
		$scope.mainAttrs = Professions.getMainAttrs($scope.newCharacter.profession)
		$scope.random = false

		$scope.allocated[name] = 0 for name of $scope.newCharacter.attributes 
		$scope.max[name] = value + 3 for name, value of $scope.newCharacter.attributes
		$scope.max[name] = value + $scope.model.uniqueness for name, value of $scope.newCharacter.attributes when !$scope.isMainAttr name

		for name in $scope.mainAttrs
			$scope.newCharacter.attributes[name] += 1
		
		computeRemaining()

	$scope.isMainAttr = (attrName) ->
		return true for name in $scope.mainAttrs when name == attrName
		return false

	$scope.getBaseAttrs = ->
		return Attributes.getBaseAttrs()

	$scope.getLongName = (attrShort) ->
		return Attributes.names[attrShort]

	$scope.increase = (attrName) ->
		if $scope.newCharacter.attributes[attrName] + 1 <= $scope.max[attrName]
			if $scope.isMainAttr attrName
				return if $scope.remainingMain == 0
				$scope.remainingMain--
			else
				return if $scope.remainingSecondary == 0
				$scope.remainingSecondary--
			$scope.allocated[attrName]++
			$scope.newCharacter.attributes[attrName]++
			computeRemaining()

	$scope.decrease = (attrName) ->
		if $scope.allocated[attrName] - 1 >= 0
			if $scope.isMainAttr attrName
				$scope.remainingMain++
			else
				$scope.remainingSecondary++
			$scope.allocated[attrName]--
			$scope.newCharacter.attributes[attrName]--
			computeRemaining()

	computeRemaining = ->
		main = $scope.remainingMain
		sec = Math.min $scope.remainingSecondary, $scope.model.uniqueness
		for attrName, allocated of $scope.allocated
			if $scope.isMainAttr attrName
				val = Math.min main, $scope.model.uniqueness - allocated, $scope.max[attrName] - $scope.newCharacter.attributes[attrName]
				$scope.remaining[attrName] = val
			else
				$scope.remaining[attrName] = Math.min sec, $scope.model.uniqueness - allocated

	$scope.makeRandom = ->
		isRandom = $scope.random
		resetAttrs()
		$scope.random = isRandom
		
		values =
			3: [0,1,1,2,2,3]
			2: [0,0,1,1,2,2]
			1: [0,0,0,1,1,1]
	
		for attrName in Attributes.getBaseAttrs()
			index = Math.floor (Math.random() * 6)
			increment = values[$scope.model.uniqueness][index]
			$scope.newCharacter.attributes[attrName] = Math.min $scope.newCharacter.attributes[attrName] + increment, $scope.max[attrName]

	$scope.clearRandom = ->
		resetAttrs()

	$scope.$on 'reset', ->
		resetAttrs()

	$scope.$watch 'useGenderCorrections', (newUse, oldUse) ->
		return if $scope.newCharacter.male
		for name, value of Races.getGenderCorrections($scope.newCharacter.race)
			$scope.newCharacter.attributes[name] += if newUse then value else -value
			$scope.max[name] += if newUse then value else -value

	resetAttrs()



NewCharacterBackgroundController = ($scope) ->
	$scope.types = [ 'ancestry', 'wealth', 'skills' ]
	
	$scope.names =
		ancestry: 'Původ'
		wealth: 'Majetek'
		skills: 'Dovednosti'
	
	$scope.ancestries = [ 
		'Nalezenec', 'Sirotek', 'Z neúplné rodiny', 'Z pochybné rodiny', 'Ze slušné rodiny',
		'Z dobré rodiny', 'Z velmi dobré a vlivné rodiny', 'Šlechtic', 'Šlechtic z dobrého rodu', 
	]
	
	$scope.wealths = [ 
		1, 3, 10, 30, 100, 300, 1000, 3000, 10000
	]

	reset = ->
		$scope.total = (4 - $scope.model.uniqueness) * 5
		$scope.remaining = {}
		$scope.allocated = 
			ancestry: 0
			wealth: 0
			skills: 0
		$scope.professionSkillPoints = Professions.getSkillPoints($scope.newCharacter.profession)
		
		$scope.model.skillPoints.physical = $scope.professionSkillPoints.physical[0]
		$scope.model.skillPoints.psychic = $scope.professionSkillPoints.psychic[0]
		$scope.model.skillPoints.combined = $scope.professionSkillPoints.combined[0]

		computeRemaining()

	$scope.increase = (type) ->
		if $scope.remaining[type] > 0
			$scope.allocated[type]++
			$scope.total--
			computeRemaining()

	$scope.decrease = (type) ->
		if $scope.allocated[type] > 0
			$scope.allocated[type]--
			$scope.total++
			computeRemaining()

	computeRemaining = ->
		ancestry = $scope.allocated.ancestry
		wealth = $scope.allocated.wealth
		skills = $scope.allocated.skills

		$scope.remaining.ancestry = Math.min $scope.total, 8 - ancestry
		$scope.remaining.wealth = Math.min $scope.total, 8 - wealth, ancestry + 3 - wealth
		$scope.remaining.skills = Math.min $scope.total, 8 - skills, ancestry + 3 - skills

		if $scope.remaining.wealth < 0
			$scope.remaining.wealth = 0
			$scope.allocated.wealth--
			$scope.total++
		if $scope.remaining.skills < 0
			$scope.remaining.skills = 0
			$scope.allocated.skills--
			$scope.total++
		
		$scope.model.skillPoints.physical = $scope.professionSkillPoints.physical[$scope.allocated.skills]
		$scope.model.skillPoints.psychic = $scope.professionSkillPoints.psychic[$scope.allocated.skills]
		$scope.model.skillPoints.combined = $scope.professionSkillPoints.combined[$scope.allocated.skills]

		$scope.newCharacter.gold = $scope.wealths[$scope.allocated.wealth]

	$scope.$on 'reset', ->
		reset()



NewCharacterSkillsController = ($scope) ->
	$scope.skillsList = Skills.getAll()

	reset = ->
		$scope.selectedType = 'physical'
		$scope.remaining = angular.copy $scope.model.skillPoints

	$scope.increase = (skillName, type) ->
		return if $scope.remaining[type] == 0

		for skill in $scope.newCharacter.skills when skill.name is skillName
			if skill.level < 3
				skill.level++
				$scope.remaining[type]--
			return
		
		$scope.remaining[type]--
		$scope.newCharacter.skills.push
			name: skillName
			level: 1

	$scope.decrease = (skillName, type) ->
		for skill, i in $scope.newCharacter.skills when skill.name is skillName
			if skill.level > 0
				skill.level--
				$scope.remaining[type]++
				if skill.level is 0
					$scope.newCharacter.skills.splice i, 1
			return

	$scope.getLevel = (skillName) ->
		for skill, i in $scope.newCharacter.skills when skill.name is skillName
			return skill.level


	$scope.$on 'resetSkillPoints', reset