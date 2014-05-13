
class Professions
	@names: [
		'Bojovník'
		'Zloděj'
		'Hraničář'
		'Čaroděj'
		'Theurg'
		'Kněz'
	]

	@_mainAttrs:
		'Bojovník': ['sil', 'obr']
		'Zloděj': 	['obr', 'zrc']
		'Hraničář': ['zrc', 'sil']
		'Čaroděj': 	['vol', 'int']
		'Theurg': 	['int', 'chr']
		'Kněz': 	['chr', 'vol']

	@_skillPoints:
		'Bojovník':
			physical:	[2,3,4,4,5,6,8,10,12]
			psychic:	[0,0,0,1,1,2,2,3,4]
			combined:	[1,1,1,2,3,3,4,5,6]
		'Zloděj':
			physical:	[1,2,2,3,4,5,6,8,9]
			psychic:	[1,1,1,2,2,2,3,4,6]
			combined:	[1,1,2,2,3,4,5,6,7]
		'Hraničář':
			physical:	[2,2,3,3,4,5,6,8,10]
			psychic:	[0,0,0,1,1,1,2,3,4]
			combined:	[1,2,2,3,4,5,6,7,8]
		'Čaroděj':
			physical:	[0,1,1,2,2,3,4,5,6]
			psychic:	[3,3,4,4,5,6,7,9,11]
			combined:	[0,0,0,1,2,2,3,4,4]
		'Theurg':
			physical:	[0,0,0,1,1,2,2,3,4]
			psychic:	[2,3,4,4,5,6,8,10,12]
			combined:	[1,1,1,2,3,3,4,5,6]
		'Kněz':
			physical:	[0,0,1,1,2,2,3,4,5]
			psychic:	[1,2,2,3,3,4,5,7,9]
			combined:	[2,2,2,3,4,5,6,7,8]

	@combatFormulas:
		'Bojovník':		'obr'
		'Zloděj':		'(zrc+obr)/2'
		'Hraničář':		'(zrc+obr)/2'
		'Čaroděj':		'(int+obr)/2'
		'Theurg':		'(int+obr)/2'
		'Kněz':			'(chr+obr)/2'

	@getMainAttrs: (profession) ->
		@_mainAttrs[profession]

	@getSkillPoints: (profession) ->
		angular.copy @_skillPoints[profession]
