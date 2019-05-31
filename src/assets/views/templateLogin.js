import { signIn, authGoogle } from "./../js/auth.js";
import { templateHome } from "./templateHome.js";

export const templateLogin = () =>{

	document.getElementById('root').innerHTML =
		 /*html*/ `
		<div class="row">
			<div class="col-12"><input  id="txtEmail" type="email" placeholder="email"></div>
			<div class="col-12"><input type="password" placeholder="contraseña" id="txtPassword"></div>
			<div class="col-12"><input type="button" id="logIn" value="Iniciar sesión"></div>
			<div class="col-12"><input type="button" id="logInGoogle" value="Acceder con Google"></div>
			<div class="col-12"><input type="button" id="signUp" value="Registrarse"></div>
		</div>

		`;
	
	document.getElementById('logIn').addEventListener('click', () => {
		let email = document.getElementById('txtEmail').value;
		let pass = document.getElementById('txtPassword').value;
		let userSignIn = signIn(email,pass);
		templateHome();
		window.location.hash = '#/home';
	});

	 document.getElementById('logInGoogle').addEventListener('click',()=>{
        authGoogle();
        templateHome();
		window.location.hash = '#/home';
	});
}

