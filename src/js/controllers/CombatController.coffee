
CombatController = ($scope) ->

	$scope.$on 'armorChanged', ->
		$scope.armor = SM.database.armors[$scope.character.armor]
		$scope.armor.name = $scope.character.armor

		$scope.helmet = SM.database.helmets[$scope.character.helmet]
		$scope.helmet.name = $scope.character.helmet
