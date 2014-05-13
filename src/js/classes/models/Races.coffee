
class Races
	@names: [
		'Člověk'
		'Horal'
		'Elf'
		'Zelený elf'
		'Temný elf'
		'Trpaslík'
		'Horský trpaslík'
		'Hobit'
		'Kroll'
		'Divoký kroll'
		'Skřet'
		'Skurut'
		'Goblin'
	]

	@_attrs:
		'Člověk':
			vys: 180
			hmt: 6
			vel: 0
			sil: 0, obr: 0, zrc: 0, vol: 0, int: 0, chr: 0
		'Horal':
			vys: 180
			hmt: 6
			vel: 0
			sil: 1, obr: 0, zrc: 0, vol: 1, int: -1, chr: -1
		'Elf':
			vys: 160
			hmt: 2
			vel: -1
			sil: -1, obr: 1, zrc: 1, vol: -2, int: 1, chr: 1
		'Zelený elf':
			vys: 160
			hmt: 2
			vel: -1
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 1, chr: 1
		'Temný elf':
			vys: 160
			hmt: 2
			vel: -1
			sil: 0, obr: 0, zrc: 0, vol: 0, int: 1, chr: 0
		'Trpaslík':
			vys: 140
			hmt: 5
			vel: 0
			sil: 1, obr: -1, zrc: 0, vol: 2, int: -1, chr: -2
		'Horský trpaslík':
			vys: 140
			hmt: 5
			vel: 0
			sil: 2, obr: -1, zrc: 0, vol: 2, int: -2, chr: -2
		'Hobit':
			vys: 110
			hmt: 0
			vel: -2
			sil: -3, obr: 1, zrc: 1, vol: 0, int: -1, chr: 2
		'Kroll':
			vys: 220
			hmt: 12
			vel: 3
			sil: 3, obr: -2, zrc: -1, vol: 1, int: -3, chr: -1
		'Divoký kroll':
			vys: 220
			hmt: 12
			vel: 3
			sil: 3, obr: -1, zrc: -2, vol: 2, int: -3, chr: -2
		'Skřet':
			vys: 160
			hmt: 4
			vel: -1
			sil: 0, obr: 2, zrc: 0, vol: -1, int: 0, chr: -2
		'Skurut':
			vys: 180
			hmt: 7
			vel: 1
			sil: 1, obr: 1, zrc: -1, vol: 0, int: 0, chr: -2
		'Goblin':
			vys: 150
			hmt: 2
			vel: -1
			sil: -1, obr: 2, zrc: 1, vol: -2, int: 0, chr: -1

	@_genderCorrections:
		'Člověk':
			sil: -1, obr: 0, zrc: 0, vol: 0, int: 0, chr: 1
		'Horal':
			sil: -1, obr: 0, zrc: 0, vol: 0, int: 0, chr: 1
		'Elf':
			sil: -1, obr: 0, zrc: 1, vol: 0, int: -1, chr: 1
		'Zelený elf':
			sil: -1, obr: 0, zrc: 1, vol: 0, int: -1, chr: 1
		'Temný elf':
			sil: -1, obr: 0, zrc: 1, vol: 0, int: -1, chr: 1
		'Trpaslík':
			sil: 0, obr: 0, zrc: -1, vol: 0, int: 1, chr: 0
		'Horský trpaslík':
			sil: 0, obr: 0, zrc: -1, vol: 0, int: 1, chr: 0
		'Hobit':
			sil: -1, obr: 1, zrc: -1, vol: 0, int: 0, chr: 1
		'Kroll':
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 0, chr: 1
		'Divoký kroll':
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 0, chr: 1
		'Skřet':
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 0, chr: 1
		'Skurut':
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 0, chr: 1
		'Goblin':
			sil: -1, obr: 1, zrc: 0, vol: -1, int: 0, chr: 1

	@_raceCorrections:
		'Elf':
			odl: -1
		'Zelený elf':
			odl: -1
		'Temný elf':
			odl: -1
		'Trpaslík':
			odl: 1, sms: -1
		'Horský trpaslík':
			odl: 1, sms: -1
		'Hobit':
			boj: -1, rch: -1
		'Kroll':
			boj: 1, rch: -1
		'Divoký kroll':
			boj: 1, rch: -1
		'Skřet':
			sms: 1
		'Skurut':
			sms: 1
		'Goblin':
			sms: 1

	@getAttrs: (race) ->
		angular.copy @_attrs[race]

	@getGenderCorrections: (race) ->
		angular.copy @_genderCorrections[race]

	@getRaceCorrections: (race) ->
		corrections = {}
		corrections[attrName] = [
				value: value
				cause: 'za rasu'
			] for attrName, value of @_raceCorrections[race]
		
		return corrections
