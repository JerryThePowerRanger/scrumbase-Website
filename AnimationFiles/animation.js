$(function(){
	var i = 1;
	$(document.getElementsByTagName("object")[0]).css("display", "inline");
	$("body").keypress(function(event){
		if(i < 1){
			i = 1;
		}else if(i >= document.getElementsByTagName("object").length){
			i = document.getElementsByTagName("object").length-1;
		}
		if(i < document.getElementsByTagName("object").length){

			// SHIFT + F
			if(event.which === 70){
				$(document.getElementsByTagName("object")[i]).css("display", "inline");
				i++;
			}

			// SHIFT + A
			if(event.which === 65){					
				$(document.getElementsByTagName("object")[i]).css("display", "none");
				i--;
			}
		}
	});
	
});