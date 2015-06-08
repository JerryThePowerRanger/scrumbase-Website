$(function(){
	var i = 1;
	$("body").keypress(function(event){
			$(document.getElementsByTagName("object")[0]).css("visbility", "visible");
		if(i < 1){
			i = 1;
		}else if(i >= document.getElementsByTagName("object").length){
			i = document.getElementsByTagName("object").length-1;
		}
		if(i < document.getElementsByTagName("object").length){

			// SHIFT + F => 70
			if(event.which === 97){
				$(document.getElementsByTagName("object")[i]).css("visbility", "visible");
				i++;
			}

			// SHIFT + A
			if(event.which === 65){					
				$(document.getElementsByTagName("object")[i]).css("visbility", "hidden");
				i--;
			}
		}
	});
	
});