import { validateSignIn } from './validation.js';


export const signIn = (email,pass) => {
  if(validateSignIn(email,pass)){
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email,pass)
    .then(()=>{
      alert("Has iniciado sesión con exito");
      window.location.hash='#/home';
    })
    .catch((error)=>{
       // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
    })
  }else{
     alert ("Error en el ingreso del usuario");
  }
}


export const authGoogle = () => {
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
      alert("Has iniciado sesión con exito");
      window.location.hash='#/home';
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


/*Función Observador, que verifica que el usuario se encuentra logueado*/
export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
     
    } else {
      console.log('no existe usuario activo');
      window.location.hash="";
    }
  });
}

/*Función signOut(), que sirve para que cuando el usuario cierre sesión, lo dirigia a la pantalla de inicio*/

export const signOut = () =>{
  firebase.auth().signOut()
  .then(function() {
    alert("Has cerrado tu sesión en MamaSabe");
    window.location.hash='';
  }).catch(function(error) {
    // An error happened.
  });
}

// firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
//  .then(function() {
//    // The link was successfully sent. Inform the user.
//    // Save the email locally so you don't need to ask the user for it again
//    // if they open the link on the same device.
//    window.localStorage.setItem('emailForSignIn', email);
//  })
//  .catch(function(error) {
//    // Some error occurred, you can inspect the code: error.code
//  });