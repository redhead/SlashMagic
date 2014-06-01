
class DamageTable

	@table:
		'-20': 0
		'-19': 0
		'-18': 0
		'-17': 0
		'-16': 0
		'-15': 0
		'-14': 0
		'-13': 0
		'-12': 0
		'-11': 0
		'-10': 1
		'-9': 1
		'-8': 1
		'-7': 1
		'-6': 2
		'-5': 2
		'-4': 2
		'-3': 2
		'-2': 3
		'-1': 3
		'0': 3
		'1': 4
		'2': 4
		'3': 5
		'4': 5
		'5': 6
		'6': 6
		'7': 7
		'8': 8
		'9': 9
		'10': 10
		'11': 11
		'12': 12
		'13': 14
		'14': 16
		'15': 18
		'16': 20
		'17': 22
		'18': 25
		'19': 28
		'20': 32
		'21': 36
		'22': 40
		'23': 45
		'24': 50
		'25': 56
		'26': 63
		'27': 70
		'28': 80
		'29': 90
		'30': 100
		'31': 110
		'32': 120
		'33': 140
		'34': 160
		'35': 180
		'36': 200
		'37': 220
		'38': 250
		'39': 280
		'40': 320
		'41': 360
		'42': 400
		'43': 450
		'44': 500
		'45': 560
		'46': 630
		'47': 700
		'48': 800
		'49': 900
		'50': 1000
		'51': 1100
		'52': 1200
		'53': 1400
		'54': 1600
		'55': 1800
		'56': 2000
		'57': 2200
		'58': 2500
		'59': 2800
		'60': 3200
		'61': 3600
		'62': 4000
		'63': 4500
		'64': 5000
		'65': 5600
		'66': 6300
		'67': 7000
		'68': 8000
		'69': 9000
		'70': 10000
		'71': 11000
		'72': 12000
		'73': 14000
		'74': 16000
		'75': 18000
		'76': 20000
		'77': 22000
		'78': 25000
		'79': 28000

	@getPoints: (bonus) ->
		return @table["#{bonus}"]
