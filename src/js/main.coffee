
module = angular.module 'app', ['ui.bootstrap', 'ui.router', 'localytics.directives']


module.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
	$locationProvider.html5Mode(false)
	$urlRouterProvider.otherwise('/')

	# URL and state configuration
	$stateProvider
		.state 'main', { url: '/', templateUrl: 'partials/main.html' }
		.state 'main.attributes', { url: 'vlastnosti', templateUrl: 'partials/tabs/attributes.html' }
		.state 'main.combat', { url: 'boj', templateUrl: 'partials/tabs/combat.html' }
		.state 'main.travel', { url: 'na-cesty', templateUrl: 'partials/tabs/travel.html' }
		.state 'main.equipment', { url: 'vybava', templateUrl: 'partials/tabs/equipment.html'}
		.state 'main.skills', { url: 'dovednosti', templateUrl: 'partials/tabs/skills.html'}


# online/offline state in Angular
module.run ($rootScope, $timeout, $state, $stateParams) ->
	window.addEventListener 'online', ->
		$rootScope.$broadcast('app.online')
	
	window.addEventListener 'offline', ->
		$rootScope.$broadcast('app.offline')

	$timeout (->
			status = if navigator.onLine then 'app.online' else 'app.offline'
			$rootScope.$broadcast(status)
		), 0


# renders gender icon according to character.male property
module.directive 'genderIcon', ->
	restrict: 'EA'
	scope:
		character: '='
	replace: true
	template:
		'<span class="gender"></span>'
	link: ($scope, $el, $attrs) ->
		char = if $scope.character.male then '♂' else '♀'
		$el.html(char);



# renders correct czech word for gold according to the count of gold coins
module.directive 'gold', ->
	restrict: 'EA'
	scope:
		count: '='
	replace: true
	template:
		'<span><ng:pluralize count="count" when="when" /></span>'
	compile: ->
		pre: ($scope) ->
			$scope.when =
				'0': '0 zlatých'
				'1': '{{count|number}} zlatý'
				'few': '{{count|number}} zlaté'
				'other': '{{count|number}} zlatých'



# links the attribute to show and position a popup with detailed information
attrPopupLinker = ($scope, el, attrs) ->
	$scope.attrName = attrs.name

	$el = $(el)

	$el.on 'mouseenter', ->
		$scope.$apply ->
			$scope.$emit 'showAttrTooltipRise', $scope.attr

		$popup = $('#attr-popup')

		$popup.show()

		pos = $el.offset()
		pos.width = $el[0].offsetWidth
		pos.height = $el[0].offsetHeight

		actualWidth = $popup[0].offsetWidth
		actualHeight = $popup[0].offsetHeight

		$popup.css
			top: pos.top - actualHeight
			left: pos.left + pos.width / 2 - actualWidth / 2

	$el.on 'mouseleave', ->
		$('#attr-popup').hide()

# attribute row directive
module.directive 'attrRow', ->
	restrict: 'A'
	scope: true
	replace: true
	isolate: false
	template:
		'<div class="row">' + 
			'<div class="col-xs-9">{{attributes.names[attr]}}</div>' + 
			'<div class="col-xs-3">{{character.corrAttr(attr) | attr}}</div>' +
		'</div>'
	link: attrPopupLinker

# attribute filter showing + or - characters for attributes and bonuses
module.directive 'attr', ->
	restrict: 'E'
	scope: true
	replace: true
	isolate: false
	template:
		'<span>{{character.corrAttr(attrName) | attr}}</span>'
	link: attrPopupLinker



# directive to render progress bars for damage and fatigue state
module.directive 'damageFatigueBars', ->
	restrict: 'EA'
	scope: true
	templateUrl: 'partials/damageFatigueBars.html'
	controller: 'DamageFatigueController'
	link: ($scope, el, attrs, controller) ->
		$scope.type = attrs.type



module.directive 'autofocus', ->
	restrict: 'A'
	link: ($scope, el) ->
		$(el).focus()



module.service 'Character', ['$rootScope', 'characterStorage', 
	($rootScope, characterStorage) ->
		return CharacterService($rootScope, characterStorage.getLast())
]



# confirm service that shows bootstrap dialog with confirm message and buttons
module.service 'confirm', ['$modal'
	($modal) ->
		return {
			show: (leadText, text, buttons, callback) ->
				$modal.open
					templateUrl: 'partials/confirm.html'
					controller: 'ConfirmModalController'
					resolve: {
						leadText: -> leadText
						text: -> text
						buttons: -> buttons
					}
		}
]



#module.service 'GroupManager', ['characterStorage'
#	(characterStorage) ->
#		return new GroupManager(characterStorage)
#]



module.filter 'attr', ->
	(input) -> if input > 0 then '+' + input else input



module.filter 'attrLong', ->
	(input) -> Attributes.names[input]



module.filter 'formula', ->
	(formula) ->
		return if not formula?
		return formula unless m = formula.match /:(d|n)$/

		formula = formula.substring 0, formula.length - 2
		return formula + (if m[1] is 'n' then " (nahoru)" else " (dolů)")
	


module.factory 'storage', ->
	return new Storage


# storage for character
module.factory 'characterStorage', (storage) ->
	return new CharacterStorage(storage)


# growler
module.factory 'growler', (storage) ->
	show = (message, type) ->
		options = 
			ele: 'body'
			align: 'right'
			offset:
				from: 'bottom'
				amount: 20
			type: type

		if typeof message isnt 'string'
			message = "<h4>#{message.title}</h4>#{message.message}"
		else
			message = "#{message}"

		$.bootstrapGrowl(message, options)

	return {
		success: (message) -> show(message, 'success')
		error: (message) -> show(message, 'danger')
		danger: (message) -> show(message, 'danger')
		info: (message) -> show(message, 'info')
	}


