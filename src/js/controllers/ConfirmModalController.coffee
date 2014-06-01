
ConfirmModalController = ($scope, $modalInstance, leadText, text, buttons) ->
	$scope.leadText = leadText
	$scope.text = text
	$scope.buttons = buttons
	
	$scope.buttonClick = (button) ->
		button.action()
		$modalInstance.close()
