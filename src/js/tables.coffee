
class WeightTable

	@table: [
		0.1,
		0.11,
		0.12,
		0.14,
		0.16,
		0.18,
		0.2,
		0.22,
		0.25,
		0.28,
		0.32,
		0.36,
		0.4,
		0.45,
		0.5,
		0.56,
		0.63,
		0.7,
		0.8,
		0.9,
		1,
		1.1,
		1.2,
		1.4,
		1.6,
		1.8,
		2,
		2.2,
		2.5,
		2.8,
		3.2,
		3.6,
		4,
		4.5,
		5,
		5.6,
		6.3,
		7,
		8,
		9,
		10,
		11,
		12,
		14,
		16,
		18,
		20,
		22,
		25,
		28,
		32,
		36,
		40,
		45,
		50,
		56,
		63,
		70,
		8,
		90,
		100,
		110,
		120,
		140,
		160,
		180,
		200,
		220,
		250,
		280,
		320,
		360,
		400,
		450,
		500,
		560,
		630,
		700,
		800,
		900,
		1000,
		1200,
		1400,
		1600,
		1800,
		2000,
		2200,
		2200,
		2500,
		2800,
		3200,
		2600,
		4000,
		4500,
		5000,
		5600,
		6300,
		7000,
		8000,
		9000]

	@getWeight: (bonus) ->
		idx = bonus + 40

		if idx < 0
			return @table[0]
		
		if idx >= @table.length
			return @table[@table.length - 1]
		
		return @table[idx]

	@getBonus: (weight) ->
		for w, i in @table
			bonus = i - 40

			if w == weight
				return bonus

			if w > weight
				if i > 0
					w2 = @table[i - 1]
					middle = (w + w2) / 2
					if weight < middle
						return bonus - 1
					else
						return bonus
				else
					return bonus







