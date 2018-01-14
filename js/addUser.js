// $(document).ready(function() {
/**************for teacher ***********/
function t_send() {
	const tUserName=document.getElementById("t_userName").value;
	const tEmail=document.getElementById('t_email').value;
	const tPass=document.getElementById('t_pass').value;
	const tClass=document.getElementById('t_class').value;
	const tSection=document.getElementById('t_section').value;

	if (tUserName=="")
		alert("please fill the user name");
	else if (tEmail=="")
		alert("please fill the Email");
	else if (tPass=="")
		alert("please fill the password");
	else if (tClass=="")
		alert("please fill the tClass");
	else if (tSection=="")
		alert("please fill the section");
	else{

	const ref=firebase.database().ref("users/Teacher/"+tClass+"/"+tSection);

		var data={
			name:document.getElementById("t_userName").value,
			email:document.getElementById("t_email").value,
			password:document.getElementById("t_pass").value
		};

		ref.push().set(data);
		alert("We have added Teacher");
		
	}	

	document.getElementById("t_userName").value="";
	document.getElementById('t_email').value="";
	document.getElementById('t_pass').value="";
	document.getElementById('t_class').value="";
	document.getElementById('t_section').value="";
	
}



function p_send() {


	const pUserName=document.getElementById("p_userName").value;
	const pEmail=document.getElementById('p_email').value;
	const pPass=document.getElementById('p_pass').value;
	const pClass=document.getElementById('p_class').value;
	const pSection=document.getElementById('p_section').value;

	if (pUserName=="")
		alert("please fill the user name");
	else if (pEmail=="")
		alert("please fill the Email");
	else if (pPass=="")
		alert("please fill the password");
	else if (pClass=="")
		alert("please fill the tClass");
	else if (pSection=="")
		alert("please fill the section");
	else{

	const ref=firebase.database().ref("users/Parent/"+pClass+"/"+pSection);

		var data={
			name:document.getElementById("p_userName").value,
			email:document.getElementById("p_email").value,
			password:document.getElementById("p_pass").value
		};

		ref.push().set(data);
		alert("We have added Parent");
	}	

	document.getElementById("p_userName").value="";
	document.getElementById('p_email').value="";
	document.getElementById('p_pass').value="";
	document.getElementById('p_class').value="";
	document.getElementById('p_section').value="";
	
}



// function load() {
	
//  var temp=document.getElementById("apk").value="http://localhost/ogcs/app-debug.apk";


// }

/***************************************add teacher end ****************************************/




