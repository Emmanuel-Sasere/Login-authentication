// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyDI1zFNIqfNOHWC69s8NBZsSjGIwFePU-I",
    authDomain: "authentication-6c26f.firebaseapp.com",
    projectId: "authentication-6c26f",
    storageBucket: "authentication-6c26f.appspot.com",
    messagingSenderId: "762499727432",
    appId: "1:762499727432:web:f86b302b79b9816de1d87d"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        // signed in 
        var user = userCredential.user;
        console.log("user, user.mail");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
    });
});



//Signin Function
let signInButton = document.getElementById("signin");

signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("signin click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        location.reload();
        // sign in 
        var user = userCredential.user;
        console.log("user, user.mail");
        window.location = "home.html";
    })
    
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
    });
});

//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
