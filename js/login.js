$(document).ready(function() {
	
	var email_text=document.getElementById('email');
	var password_text=document.getElementById('password');
	var resetEmail_text=document.getElementById('resetEmail');
	var btn_login=document.getElementById('btn_login');
	var btn_forgot=document.getElementById('btn_forgot');
	var btn_reset=document.getElementById('btn_reset');

	var auth=firebase.auth();
	// console.log(auth);

	btn_login.addEventListener('click',function() {
		
		var email=email_text.value;
		var pass=password_text.value;

		if (email=="" && pass=="") {
			alert("fill out all credentials.");
			return;
		}

		// auth.signInWithEmailAndPassword(email,pass).catch(e=>console.log(e.message));
		if (email!=="ogcs.firebase@gmail.com") {
			alert("wrong admin email entered..");
			return;
		}
		if (email==="ogcs.firebase@gmail.com" && pass!="") {

			auth.signInWithEmailAndPassword(email,pass).catch(e=>console.log(e.message));

		}

	});


/**/
	// var email=email_text.value;
	// var password=password_text.value;

	// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
 //  .then(function() {
 //    return firebase.auth().signInWithEmailAndPassword(email, password);
 //  })
 //  .catch(function(error) {
 //    var errorCode = error.code;
 //    var errorMessage = error.message;
 //  });




	//reset the password
	btn_reset.addEventListener('click',function() {
		var resetEmail=resetEmail_text.value;
		firebase.auth().sendPasswordResetEmail(resetEmail).then(function() {
        	alert('Password Reset Email Sent!');
        	document.getElementById('resetEmail').value="";
        }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
	});



	// realtime auth change
	auth.onAuthStateChanged(user=>{
		if(user.uid=='D5xSV84eoTQNloRKfdXoUJDylLp2'){
			window.location.href="admin.html";
		}
		else
			console.log("Sign Out");
	});




// function preventBack() {

// 	window.history.forward();

// }
// setTimeout("preventBack()",0);
// window.onunload()=function() {null};

});