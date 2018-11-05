$(document).ready(function() {
	var me="non";
	$("div.item_Header").hover(function() {
	$(this).css({color:'#F9AE46'});
	}, function() {
		$(this).css("color","#0000007a");
	}
	);

	$("div.item_Variable").hover(function() {
	$(this).css({color:'#F9AE46'});
	}, function() {
		$(this).css("color","#0000007a");
	}
	);
});
