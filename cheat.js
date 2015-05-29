function find(){
	var element = $(this);
	function checkSpan(){
		var spans = element.find('span');
		var colors = [];
		var index = 0;
		$.each(spans,function(i,val){
			var color = $(val).css('background-color');
			if(colors.length == 0){
				colors.push(color);
				index = i;
				return true;
			}
			if(colors.length == 1 && i ==1){
				if($.inArray(color,colors) === -1){
					var color1 = element.find('span').eq(2).css('background-color');
					if(color == color1){
						index = 0;
						return false;
					}else{
						index=1;
						return false;
					}
				}
			}
			if($.inArray(color,colors) === -1){
				index = i;
				return false;
			}

		});
		return index;
	}
	setTimeout(function(){
		var index = checkSpan();
		element.find('span').eq(index).trigger('click');
	},1000);
}



$('#box').bind("DOMSubtreeModified",find);
