
EquipmentController = ($scope, $modal, confirm, growler) ->
	$scope.addNewItem = ->
		dialog = $modal.open
			templateUrl: 'partials/itemListModal.html'
			controller: 'ItemListController'
			resolve:
				confirmCallback: -> 
					return (result, success, reject) ->
						if result.pay and $scope.character.gold < result.totalPrice
							confirmPrice(result, success, reject)
						else
							success()

		confirmPrice = (result, success, reject) ->
			confirm.show(
				'Nedostatek peněz', 
				'Postava nemá dostatek peněz k zaplacení předmětu. Chcete zaplatit'
				[
					{
						caption: 'Zaplatit'
						action: success
					},
					{
						caption: 'Nezaplatit'
						action: -> 
							result.pay = false
							success()
					},
					{
						caption: 'Storno'
						action: reject
					}
				]
			)

		dialog.result.then (result) ->
			if result.pay
				if $scope.character.gold < result.totalPrice
					$scope.character.gold = 0
				else
					$scope.character.gold -= result.totalPrice


			console.log(result)
			$scope.character.items.push(result.item)


	$scope.removeItem = (itemIdx) ->
		confirm.show(
			'Odstranit předmět?',
			"Chcete odstranit záznam s předmětem '" + $scope.character.items[itemIdx].name + "'?",
			[
				{
					caption: 'Odstranit'
					className: 'btn-danger'
					action: -> $scope.character.items.splice(itemIdx, 1)
				},
				{
					caption: 'Storno'
					action: ->
				}
			]
		)


	$scope.increase = (itemIdx) ->
		$scope.character.items[itemIdx].count++


	$scope.decrease = (itemIdx) ->
		item = $scope.character.items[itemIdx]
		if item.count > 1
			item.count--
		else
			$scope.removeItem(itemIdx)


	$scope.getLoad = ->
		load = 0
		load += item.weight * item.count for item in $scope.character.items
		return load


	$scope.getMaxLoad = ->
		max = $scope.character.corrAttr('maxNaklad')
		return WeightTable.getWeight(max)

	$scope.$watch 'character.items', (->
		load = $scope.getLoad()

		bonus = WeightTable.getBonus(load)
		missingStrength = bonus - $scope.character.corrAttr('sil')

		$scope.loadLabel = getLoadLabel(missingStrength)
		$scope.loadPenalty = getLoadPenalty(missingStrength)

		if load > $scope.getMaxLoad()
			growler.error
				title: 'Příliš velký náklad!'
				message: 'Postava má příliš velký náklad a nemůže se skoro hýbat.'
	), true

	getLoadLabel = (missingStrength) ->
		athletLevel = $scope.character.getSkill('Atletika').level

		labels =
			0: 'žádné' 
			6: 'mírné'
			12: 'střední'
			17: 'velké'
			21: 'extrémní'

		for offset, label of labels
			if missingStrength <= parseInt(offset) + athletLevel
				return label

	getLoadPenalty = (missingStrength) ->
		penalty = Math.round(missingStrength / 2)
		if penalty >= 0
			return -penalty
		else
			return 0
