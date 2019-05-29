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


  // const logIn = () => {
    
  //   document.getElementById('root').innerHTML = 
  //   `<div class="form col-4 col-6-sm">
  //     <form action="">
  //         email 
  //       <br>
  //       <input type="email">
  //       <br>
  //         contraseña 
  //       <br>
  //       <input type="password">
  //       <br>
  //       <input type="submit" value="entrar">
  //     </form>
  //   </div>`
  // }
  // document.getElementById('logIn').addEventListener('click', () => {
  //   logIn();
  // });
  //obtener elementos
// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnSignUp = document.getElementById('btnSignUp');
// const btnLogout = document.getElementById('btnLogout');
// // añadir evento login
// btnLogin.addEventListener('click', e=>{
// // obtener email y pass
// const email = txtEmail.value;
// const pass = txtPassword.value;
// const auth = firebase.auth();
// // sign in
// const promise = auth.signInWithEmailAndPassword(email, pass);
// promise.catch(e=> console.log(e.message))
// });