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
// // añadir evento sign up
// btnSignUp.addEventListener('click', e => {
//   // obtener email y pass
//   //TODO: comprobar que email sea real
// const email = txtEmail.value;
// const pass = txtPassword.value;
// const auth = firebase.auth();
// //Sign in
// const promise = auth.createUserWithEmailAndPassword(email, pass);
// promise.catch(e=> console.log(e.message))
// });

// btnLogout.addEventListener('click', e => {
//   firebase.auth().signOut();
// })

// //Añadir un listener en tiempo real
// firebase.auth().onAuthStateChanged( firebaseUser =>{
//   if(firebaseUser){
//     console.log(firebaseUser);
//     btnLogout.classList.remove('hide')
//   } else{
//     console.log('no logeado');
//     btnLogout.classList.add('hide');
//   }
// })
//llamado a las rutas
//Archivo base que comunica a todas las cosas

//1. Llamado a la inicialización de la ruta (route) y llamado al template de inicio (templateSignIn)

import { initRoute } from './route.js';
//import { observer } from './assets/js/auth.js'
import { firebaseInit } from './assets/js/firebaseInit.js';


const init = () => {
	
    firebaseInit();
    initRoute();       
}


window.addEventListener('load', init);
