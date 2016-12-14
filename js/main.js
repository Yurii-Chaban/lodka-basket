$(document).ready(function() {
	/* Instantiating iziModal */

	$("#modal-custom").iziModal({
		overlayClose: false,
		width: 841,
		autoOpen: false,
		overlayColor: 'rgba(0, 0, 0, 0.6)',
		onOpened: function() {
			console.log('onOpened');
		},
		onClosed: function() {
			console.log('onClosed');  
		}
	});
	$(document).on('click', '.trigger-custom', function (event) {
		event.preventDefault();
		$('#modal-custom').iziModal('open');
	});

	/* JS inside the modal */

	$("#modal-custom").on('click', '.submit', function(event) {
		event.preventDefault();

    var fx = "wobble",  //wobble shake
    $modal = $(this).closest('.iziModal');

    if( !$modal.hasClass(fx) ){
    	$modal.addClass(fx);
    	setTimeout(function(){
    		$modal.removeClass(fx);
    	}, 1500);
    }
  });

});
// counter
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});