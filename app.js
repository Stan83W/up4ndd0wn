$(document).on("mousemove", function (event) {
	$("img.up").css("width", event.pageX)
	$("img.up").css("height", event.pageY)

	$("img.and").css("width", $(window).width() - event.pageX)
	$("img.and").css("height", event.pageY)

	
	$("img.down").css("height", $(window).height() - event.pageY)

})