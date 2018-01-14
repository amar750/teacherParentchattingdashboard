$(document).ready(function() {

	
	$('ul li').fadeOut(8000,function(){
		
		firebase.auth().onAuthStateChanged(user=>{
			if(user){
				
				$('#spinner').css('display','block');
				$('#form').css('display','none');
				window.location.href="admin.html";
			}
			else
				window.location.href="login.html";

		});

	});

	



// function preventBack() {

// 	window.history.forward();

// }
// setTimeout("preventBack()",0);
// window.onunload()=function() {null};


});

