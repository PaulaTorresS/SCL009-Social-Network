//import { signIn, authGoogle } from "./../js/auth.js";
//import { templateHome } from "./templateHome.js";
//import { validateEmailSignIn } from "../js/validation.js";
import { templateRegister } from "./templateRegister.js" 

export const templateLogin = () =>{

	document.getElementById('root').innerHTML =
		 /*html*/ `
		<header id="templatelogin">
			<div class="logo row">
				<div class="col-12"> 
					<center>
						<img src="assets/img/mama-sabe2.png" alt="logo">
				   	</center>
				</div>
			</div>
		</header>
		<div class="row templatelogin">
			<p class="col-12 msge" id="msge1">Si tienes cuenta accede aquí:</p>
			<div class="col-12">
				<input  id="txt-email" type="email" placeholder="email">
			</div>
			<p class="col-12 error" id="emailerror"></p>
			<div class="col-12">
				<input type="password" placeholder="contraseña" id="txt-pass">
			</div>
			<p class="col-12 error" id="passerror"></p>
			<div class="col-12 btn"><input type="button" id="logIn" value="Iniciar sesión"></div>
			<div class="col-12 btn"><input type="button" id="logInGoogle" value="Acceder con Google"></div>
			<div class="col-12 btn"><input type="button" id="signUp" value="Registrarse"></div>
		</div>

		`;
	
	// document.getElementById('logIn').addEventListener('click', () => {
	// 	let email = document.getElementById('txtEmail').value;
	// 	let pass = document.getElementById('txtPassword').value;
	// 	signIn(email,pass);
	// 	 /*validacio en dom*/
	// 	const emailerror = document.getElementById('emailerror');
	// 	const passerror = document.getElementById('passerror');
 //        if(email==="" || !validateEmailSignIn(email)){
 //        	emailerror.style.display = "block";
 //            emailerror.innerHTML=`Debes ingresar un correo válido.`;
 //        }else{
 //        	emailerror.style.display = "none";
 //            emailerror.innerHTML='';
 //        }
        
 //        if(pass==="" || pass.length<6){
 //        	passerror.style.display = "block";
 //            passerror.innerHTML=`Debes ingresar una contraseña con minimo 6 caracteres.`;
 //        }else{
 //        	passerror.style.display = "none";
 //            passerror.innerHTML='';
 //        }

       
	// });

	//  document.getElementById('logInGoogle').addEventListener('click',()=>{
 //        authGoogle();

	// });
	  document.getElementById('sign-up').addEventListener('click', ()=>{
	  	templateRegister();
	  	window.location.hash = '#/register';

	});
}

