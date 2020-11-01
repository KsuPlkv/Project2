$(document).ready(function() {
	$(".act_1").click(function(){
		$('#t_1').removeClass('hidden');
		$('#t_2').addClass('hidden');
	});
		$(".act_2").click(function(){
		$('#t_2').removeClass('hidden');
		$('#t_1').addClass('hidden');
	});
});