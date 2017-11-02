$(document).ready(function(){
	$('#sugarEaten').html($.cookie("sugar"));
		$('#sugar').click(function() {
			var num_eaten = parseInt($('#sugarEaten').text());
			var new_num_eaten = num_eaten + 1;
			$('#sugarEaten').html(new_num_eaten);
			$.cookie("sugar", new_num_eaten); 
		});
		$('#clearCookies').click(function(){
			$.removeCookie("sugar");
			location.reload();
	});
	$('#chocoEaten').html($.cookie("choco"));
		$('#choco').click(function() {
			var num_eaten = parseInt($('#chocoEaten').text());
			var new_num_eaten = num_eaten + 1;
			$('#chocoEaten').html(new_num_eaten);
			$.cookie("choco", new_num_eaten); 
		});
		$('#clearCookies').click(function(){
			$.removeCookie("choco");
			location.reload();
	});
	$('#lemonEaten').html($.cookie("lemon"));
		$('#lemon').click(function() {
			var num_eaten = parseInt($('#lemonEaten').text());
			var new_num_eaten = num_eaten + 1;
			$('#lemonEaten').html(new_num_eaten);
			$.cookie("lemon", new_num_eaten); 
		});
		$('#clearCookies').click(function(){
			$.removeCookie("lemon");
			location.reload();
	});
});