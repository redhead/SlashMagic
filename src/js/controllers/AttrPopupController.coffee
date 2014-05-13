
AttrPopupController = ($scope, $filter) ->
	$scope.attrName = ''
	$scope.formula = ''
	$scope.corrections = []

	$scope.$on 'showAttrTooltipFall', (event, attrName) ->
		$scope.attrName = attrName
		$scope.formula = $filter('formula')($scope.character.attributes.formulas[attrName])
		$scope.corrections = $scope.character.corrections[attrName]