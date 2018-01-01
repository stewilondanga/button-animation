$('a').mouseover(function(){
  $('span:first-child').hide();
});
$('a').mouseleave(function(){
  $('span:first-child').fadeIn(400);
});

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
