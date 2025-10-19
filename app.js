 
const firebaseConfig = {
  apiKey: "AIzaSyDCdRi82kD5QbW1MH5hlT-2v0uFnbtsbuc",
  authDomain: "fir-prpject-bf0dd.firebaseapp.com",
  projectId: "fir-prpject-bf0dd",
  storageBucket: "fir-prpject-bf0dd.firebasestorage.app",
  messagingSenderId: "1000643466441",
  appId: "1:1000643466441:web:962ea75e47d530bd632918",
  measurementId: "G-7YZGF3SR2T"
};

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const status = document.getElementById('status');

    function signUp() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          status.innerText = " Sign Up Successful: " + userCredential.user.email;
          
        })
        .catch(error => {
          status.innerText = " Error: " + error.message;
        });
    }

    function signIn() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          status.innerText = "Signed In: " + userCredential.user.email;
         window.location.href = "home.html";

        })
        .catch(error => {
          status.innerText = " Error: " + error.message;
        });
    }

    function signOut() {
      auth.signOut()
        .then(() => {
        
             window.location.href = "signin.html";
        })
        .catch(error => {
          status.innerText = " Error: " + error.message;
        });
    }