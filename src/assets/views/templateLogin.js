import { signIn, authGoogle } from "./../js/auth.js";
import { templateWall } from "./templateWall.js";
import { validateEmail } from "../js/validation.js";
import { templateRegister } from "./templateRegister.js" 

export const templateLogin = () =>{

	document.getElementById('root').innerHTML =
		 /*html*/ `
		<header id="templatelogin">
			<div class="logo row">
				<div class="col-12"> 
					<center>
<<<<<<< HEAD
						<img src="assets/img/logo-mama-sabe.png" alt="Logo Mama Sabe">
=======
						<img src="assets/img/mama-sabe2.png" alt="logo">
>>>>>>> 7e4b11503e70c8cb792c3fef26c95b8602a66983
				   	</center>
				</div>
			</div>
		</header>
		<div class="row templatelogin">
<<<<<<< HEAD
			<div class="col-12">
				<p class="col-12" id=""><strong>Accede con tu Cuenta</strong></p>	
				<input  id="txtEmail" type="email" placeholder="email">
=======
			<p class="col-12 msge" id="msge1">Si tienes cuenta accede aquí:</p>
			<div class="col-12">
				<input  id="txt-email" type="email" placeholder="email">
>>>>>>> 7e4b11503e70c8cb792c3fef26c95b8602a66983
			</div>
			<p class="col-12 error" id="emailerror"></p>
			<div class="col-12">
				<input type="password" placeholder="contraseña" id="txt-pass">
			</div>
			<p class="col-12 error" id="passerror"></p>
<<<<<<< HEAD
			<div class="col-12"><input type="button" id="logIn" value="Iniciar sesión"></div>
			<div class="col-12"><input type="button" id="logInGoogle" value="Acceder con Google"></div>
			<br>
			<div class="col-12">
			<p class="col-12" id=""><i>¿Aun no tienes Cuenta?</i></p>
				<input type="button" id="signUp" value="Registrarse">
=======
			<div class="col-12">	
				<input type="button" id="login" value="Iniciar sesión">
			</div>
			<p class="col-12 msge" id="msge2">Acceso con cuenta Google:</p>
			<div class="col-12">
				<input type="button" id="login-google" value="Acceder con Google">
			</div>
			<p class="col-12 msge" id="msge3">Todavía no tienes cuenta?</p>
			<div class="col-12">
				<input type="button" id="sign-up" value="Registrarse">
>>>>>>> 7e4b11503e70c8cb792c3fef26c95b8602a66983
			</div>
		</div>

		`;
	
	document.getElementById('login').addEventListener('click', () => {
		let userEmail = document.getElementById('txt-email').value;
		let userPass = document.getElementById('txt-pass').value;
		
		 /*validacio en dom*/
		const emailerror = document.getElementById('emailerror');
		const passerror = document.getElementById('passerror');
        if(userEmail==="" || !validateEmail(userEmail)){
        	emailerror.style.display = "block";
            emailerror.innerHTML="Debes ingresar un correo válido.";
        }else{
        	emailerror.style.display = "none";
            emailerror.innerHTML='';
             if(userPass==="" || userPass.length<6){
	        	passerror.style.display = "block";
	            passerror.innerHTML=`Debes ingresar una contraseña con minimo 6 caracteres.`;
	        }else{
	        	passerror.style.display = "none";
	            passerror.innerHTML='';
	            signIn(userEmail,userPass);
	        }
        }
        
       
		
       
	});

	 document.getElementById('login-google').addEventListener('click',()=>{
        authGoogle();
       
	});
	  document.getElementById('sign-up').addEventListener('click', ()=>{
	  	templateRegister();
	  	window.location.hash = '#/register';

	});
}

