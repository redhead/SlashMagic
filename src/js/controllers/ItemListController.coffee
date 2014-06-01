
ItemListController = ($scope, $modalInstance, confirmCallback) ->
	$scope.items = (SM.database.items[itemName] for itemName of SM.database.items)
	$scope.selectedItem = null

	$scope.model = 
		price: 0
		count: 1
		payForItem: false
		userItemName: ''

	$scope.select = (item) ->
		$scope.model.price = item.price
		$scope.selectedItem = item

	$scope.ok = ->
		result =
			item:
				name: 	$scope.model.userItemName || $scope.selectedItem.name
				weight: $scope.selectedItem.weight
				price: 	$scope.model.price
				count: 	$scope.model.count
			pay: $scope.model.payForItem
			totalPrice: $scope.model.count * $scope.model.price
		
		confirmCallback(
			result,
			-> $modalInstance.close(result),
			-> # reject = do nothing
		)

	$scope.close = ->
		$modalInstance.dismiss('close')
