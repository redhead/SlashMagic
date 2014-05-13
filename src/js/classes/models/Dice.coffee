
class Dice

	@_roll6: ->
		return Math.floor((Math.random() * 6) + 1);

	@roll2k6: ->
		x = @_roll6() + @_roll6()
		
		switch x
			when 2	then x-- while @_roll6() <= 3
			when 12 then x++ while @_roll6() >= 4
		
		return x

	@rollDamageFatiguePenalty: (vol) ->
		rolled = vol + Dice.roll2k6()

		if rolled < 5
			newPenalty = -3
		
		if 5 <= rolled < 10
			newPenalty = -2
		
		if 10 <= rolled < 15
			newPenalty = -1
		
		if rolled >= 15
			newPenalty = 0

		return [newPenalty, rolled]
