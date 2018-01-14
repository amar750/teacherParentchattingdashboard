	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNaPRpx3k45BNrl6hoWlhEZXB1MeaF98c",
    authDomain: "ogcswebapp.firebaseapp.com",
    databaseURL: "https://ogcswebapp.firebaseio.com",
    projectId: "ogcswebapp",
    storageBucket: "ogcswebapp.appspot.com",
    messagingSenderId: "448516086510"
  };
  firebase.initializeApp(config);



// firebase.auth().onAuthStateChanged(e=>{

// 	if(e){
// 		window.location="dashboard.html";
// 	}
// });