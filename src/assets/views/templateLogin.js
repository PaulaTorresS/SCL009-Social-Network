import { signIn, authGoogle } from "./../js/auth.js";
import { templateHome } from "./templateHome.js";
import { validateEmailSignIn } from "../js/validation.js";

export const templateLogin = () =>{

	document.getElementById('root').innerHTML =
		 /*html*/ `
		<div class="row">
			
			<div class="col-12"><input  id="txtEmail" type="email" placeholder="email"></div>
			<div class="col-12"><p id="emailerror"></p></div>
			<div class="col-12"><input type="password" placeholder="contraseña" id="txtPassword"></div>
			<div class="col-12"><p id="passerror"></p></div>
			<div class="col-12"><input type="button" id="logIn" value="Iniciar sesión"></div>
			<div class="col-12"><input type="button" id="logInGoogle" value="Acceder con Google"></div>
			<div class="col-12"><input type="button" id="signUp" value="Registrarse"></div>
		</div>

		`;
	
	document.getElementById('logIn').addEventListener('click', () => {
		let email = document.getElementById('txtEmail').value;
		let pass = document.getElementById('txtPassword').value;
		let userSignIn = signIn(email,pass);
		 /*IMPRESION VÁLIDACIONES EN EL DOM*/
        if(email==="" || !validateEmailSignIn(email)){
            document.getElementById('emailerror').innerHTML=`Debes ingresar un correo válido.`;
        }else{
            document.getElementById('emailerror').innerHTML='';
        }
        
        if(pass==="" || pass.length<6){
            document.getElementById('passerror').innerHTML=`Debes ingresar una contraseña con minimo 6 caracteres.`;
        }else{
            document.getElementById('passerror').innerHTML='';
        }

        if(userSignIn==="OK"){
            console.log("usuario Ok");
        } else {
            console.log(userSignIn);
        }
	});

	 document.getElementById('logInGoogle').addEventListener('click',()=>{
        authGoogle();

	});
}

