
$ ->
	$('#createCharacterModal').on 'show', ->
		setTimeout((->$('#createCharacterModal').find('input').first().focus()), 200)


	$body = $('body')
		.on('show', '.modal', -> $body.addClass('modal-open'))
		.on('hide', '.modal', -> $body.removeClass('modal-open'))