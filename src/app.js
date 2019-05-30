// de Gelen
 window.load;
 document.getElementById("logInGoogle").addEventListener("click", () =>{
    authGoogle();
  })
  const authGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
  }
  const authentication = (provider) => {
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

//de maria

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
// añadir evento login
btnLogin.addEventListener('click', e=>{
// obtener email y pass
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
// sign in
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e=> console.log(e.message))
});
// añadir evento sign up
btnSignUp.addEventListener('click', e => {
  // obtener email y pass
  //TODO: comprobar que email sea real
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
//Sign in
const promise = auth.createUserWithEmailAndPassword(email, pass);
promise.catch(e=> console.log(e.message))
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
})

//Añadir un listener en tiempo real
firebase.auth().onAuthStateChanged( firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser);
    btnLogout.classList.remove('hide')
  } else{
    console.log('no logeado');
    btnLogout.classList.add('hide');
  }
})

