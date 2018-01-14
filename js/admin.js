var openLog=document.getElementById('openLog');
openLog.addEventListener('click',function() {
	
	$('#logout').fadeIn();
	$('#openLog').hide();
});


	document.getElementById('logout').addEventListener('click',function() {
		
		firebase.auth().signOut().catch(e=>console.log(e.message));
	});

	

	document.body.addEventListener('click',bodyFun, true);
	function bodyFun() {
	
	$('#logout').fadeOut(1100);
	$('#openLog').show(500);
	document.getElementById("side_navbar").style.width = "0";

	}

	// $('body').click(function() {
		
	// document.getElementById('logout').style.display="none";

	// })


firebase.auth().onAuthStateChanged(user=>{
	if(user)
	{	
		console.log('Sign In');
		// // console.log(user.uid);
		// // console.log(user);
		// document.getElementById('getEmail').innerHTML=user.email;
		// // document.getElementById('getEmail1').innerHTML=user.email;
	}
	else
	{
		window.location.href="index.html";
	}
});


function openNav() {
    document.getElementById("side_navbar").style.width = "250px";
}

function closeNav() {
    document.getElementById("side_navbar").style.width = "0";
}

