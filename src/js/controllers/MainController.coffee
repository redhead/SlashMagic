
MainController = ($scope, $rootScope, Character, growler, $timeout) ->
	$scope.character = Character.currentCharacter

	$scope.attributes = Attributes
	
	$scope.$on 'showAttrTooltipRise', (event, attrName) ->
		$scope.$broadcast('showAttrTooltipFall', attrName)

	$scope.alert = (msg) ->
		alert msg

	$scope.log = (msg) ->
		console.log msg

	$timeout (-> $scope.$broadcast('armorChanged')), 50

	notifyOnline = false

	$rootScope.$on 'app.online', ->
		return if not notifyOnline
		growler.success
			title: 'Připojeno!'
			message: 'Připojení k internetu bylo obnoveno'

	$rootScope.$on 'app.offline', ->
		notifyOnline.true
		growler.error
			title: 'Připojení selhalo!'
			message: 'Používá se lokální úložiště'