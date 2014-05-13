
DamageFatigueController = ($scope, $attrs, growler) ->
	$scope.isRollEnabled =
		damage: false
		fatigue: false
	
	$scope.isLower =
		damage: false
		fatigue: false

	$scope.getLimit = (type) ->
		attr = if type is 'damage' then 'odl' else 'vdr'
		value = $scope.character.corrAttr attr
		return DamageTable.getPoints(value + 10)

	$scope.getPercent = (type, bar) ->
		limit = $scope.getLimit(type)
		points = $scope.character[type]
		
		val = Math.max((bar - 1) * limit, Math.min(bar * limit, points))
		return Math.round((val - (bar - 1) * limit) * 100 / limit)

	$scope.rollPenalty = (type) ->
		return if not $scope.isRollEnabled[type]

		actualPenalty = $scope.character.penalties[type]

		vol = $scope.character.corrAttr 'vol'
		[newPenalty, rolled] = Dice.rollDamageFatiguePenalty vol
		
		message = "Padlo #{rolled}, "

		if $scope.isLower[type] and newPenalty > actualPenalty
			$scope.character.penalties[type] = newPenalty
			message += "postih se snižuje na #{newPenalty}."
		
		else if not $scope.isLower[type] and newPenalty < actualPenalty
			$scope.character.penalties[type] = newPenalty
			message += "postih se zvyšuje na #{newPenalty}."
		
		else
			message += "postih zůstává na #{actualPenalty}."
		
		growler.info
			title: 'Hod na postih'
			message: message
			
		$scope.isRollEnabled[type] = false


	valueChanged = (type, newVal, oldVal) ->
		if type is 'damage'
			message = 'Postih za zranění byl zrušen, zranění jsou lehká.'
			cause = 'Postava měla rozsáhlá zranění a zemřela!'
		else
			message = 'Postih za únavu byl zrušen, únava je lehká.'
			cause = 'Postava dosáhla maximální únavy a zemřela!'

		if newVal is $scope.getLimit(type) * 3
			growler.error
				title: 'Postava zemřela!'
				message: cause

		if newVal < $scope.getLimit('damage')
			if $scope.character.penalties[type] isnt 0
				growler.info
					title: 'Zrušen postih'
					message: message
			$scope.character.penalties[type] = 0
			$scope.isRollEnabled[type] = false
		else
			$scope.isLower[type] = newVal < oldVal
			$scope.isRollEnabled[type] = true


	$scope.$watch "character.#{$attrs.type}", (newVal, oldVal) ->
		valueChanged $attrs.type, newVal, oldVal

