import { signIn, authGoogle } from "./../js/auth.js";
//import { templateHome } from "./templateHome.js";
import { validateEmailSignIn } from "../js/validation.js";
import { templateRegister } from "./templateRegister.js" 

export const templateLogin = () =>{

	document.getElementById('root').innerHTML =
		 /*html*/ `
		<header id="templatelogin">
			<div class="logo row">
				<div class="col-12"> 
					<center>
						<img src="assets/img/mamasabe.png" alt="logo">
				   	</center>
				</div>
			</div>
		</header>
		<div class="row templatelogin">
			<div class="col-12"><input  id="txtEmail" type="email" placeholder="email"></div>
			<p class="col-12 error" id="emailerror"></p>
			<div class="col-12"><input type="password" placeholder="contraseña" id="txtPassword"></div>
			<p class="col-12 error" id="passerror"></p>
			<div class="col-12"><input type="button" id="logIn" value="Iniciar sesión"></div>
			<div class="col-12"><input type="button" id="logInGoogle" value="Acceder con Google"></div>
			<div class="col-12"><input type="button" id="signUp" value="Registrarse"></div>
		</div>

		`;
	
	document.getElementById('logIn').addEventListener('click', () => {
		let email = document.getElementById('txtEmail').value;
		let pass = document.getElementById('txtPassword').value;
		signIn(email,pass);
		 /*IMPRESION VÁLIDACIONES EN EL DOM*/
		const emailerror = document.getElementById('emailerror');
		const passerror = document.getElementById('passerror');
        if(email==="" || !validateEmailSignIn(email)){
        	emailerror.style.display = "block";
            emailerror.innerHTML=`Debes ingresar un correo válido.`;
        }else{
        	emailerror.style.display = "none";
            emailerror.innerHTML='';
        }
        
        if(pass==="" || pass.length<6){
        	passerror.style.display = "block";
            passerror.innerHTML=`Debes ingresar una contraseña con minimo 6 caracteres.`;
        }else{
        	passerror.style.display = "none";
            passerror.innerHTML='';
        }

        // if(userSignIn==="OK"){
        //     console.log("usuario Ok");
        // } else {
        //     console.log(userSignIn);
        // }
	});

	 document.getElementById('logInGoogle').addEventListener('click',()=>{
        authGoogle();

	});
	  document.getElementById('signUp').addEventListener('click', ()=>{
	  	templateRegister();
	  	window.location.hash = '#/register';

	});
}

