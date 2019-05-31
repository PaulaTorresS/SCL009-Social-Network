<<<<<<< HEAD
import { logoutMessage, user } from './logout.js'
logoutMessage();
console.log(user);
=======
export const signIn = (email,pass) => {
  const auth = firebase.auth();
  // sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e=> console.log(e.message))
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
>>>>>>> 7a317156bb5cb30ee46831b368488608da43cb93
