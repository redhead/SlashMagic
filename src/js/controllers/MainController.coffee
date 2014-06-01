
MainController = ($scope, $rootScope, Character, growler, $timeout, $modal, characterStorage, $state) ->
	pages = 
		'main.attributes': 	'Vlastnosti'
		'main.combat': 		'Boj'
		'main.travel': 		'Na cesty'
		'main.equipment': 	'Výbava'
		'main.skills': 		'Dovednosti'
	
	$scope.tabs = []

	for state, heading of pages
		$scope.tabs.push(state: state, heading: heading, active: false)

	$scope.go = (state) ->
		$state.go(state)

	$scope.isTabActive = (state) ->
		return $state.is(state)

	$scope.$on '$stateChangeSuccess', ->
		tab.active = $state.is(tab.state) for tab in $scope.tabs

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

	$scope.createCharacter = ->
		dialog = $modal.open
			templateUrl: 'partials/createCharacterForms.html',
			controller: 'NewCharacterController'

		dialog.result.then (newChar) ->
			characterStorage.putLast newChar
			$scope.character = newChar
			growler.success
				title: 'Postava vytvořena'
				message: "Postava #{newChar.name} vytvořena a uložena"


	$scope.openLevelUpDialog = ->
		dialog = $modal.open
			templateUrl: 'partials/levelUpModal.html',
			controller: 'LevelUpController'
			resolve:
				character: -> $scope.character

		dialog.result.then (result) ->
			$scope.character.levelUp(result)
			
