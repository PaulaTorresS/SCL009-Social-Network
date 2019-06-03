import { validateEmail } from "../js/validation.js";

export const templateRegister = () => {
	document.getElementById('root').innerHTML = `
	<header id="templatelogin">
			<div class="logo row">
				<div class="col-12"> 
					<center>
						<img src="assets/img/mamasabe.png" alt="logo">
				   	</center>
				</div>
			</div>
		</header>
	<div class="row">											
	<div class="col-12"><input  id="signup-email" type="email" placeholder="email"></div>
	<p class="col-12 error" id="email-error"></p>
	<div class="col-12"><input type="password" placeholder="contraseña" id="signup-pass"></div>
	<p class="col-12 error" id="pass-error"></p>
	<div class="col-12"><input type="password" placeholder="confirma contraseña" id="signup-confirm"></div>
	<div class="col-12"><input  id="user-name" type="text" placeholder="nombre"></div>
	<div class="col-12"><input  id="user-lastname" type="text" placeholder="apellido"></div>
	<div class="col-12"><input  id="child-name" type="text" placeholder="nombre de hij@"></div>
	<button id="submit">Enviar</button>
	</div>
												`
	document.getElementById('submit').addEventListener('click', ()=>{
		let newUserEmail = document.getElementById('signup-email').value;
		let newUserPass = document.getElementById('signup-pass').value;
		let newUserPassConfirm = document.getElementById('signup-confirm').value;
		let userName = document.getElementById('user-name').value;
		let userLastName = document.getElementById('user-lastname').value;
		let childName = document.getElementById('child-name').value;
           //validacion de dom:
           if(newUserPass !== newUserPassConfirm){
           	document.getElementById('pass-error').style.display = "block";
           	document.getElementById('pass-error').innerHTML = `Contraseñas no coinciden!`;
           	document.getElementById('signup-pass').innerHTML = '';
           	document.getElementById('signup-confirm').innerHTML ='';
           }else{
           	document.getElementById('pass-error').style.display = "none";
           }

         //   if(newUserEmail==="" || !validateEmail(newUserEmail)){
        	// document.getElementById('email-error').style.display = "block";
         //    document.getElementById('email-error').innerHTML=`Debes ingresar un correo válido.`;
	        // }else{
	        // 	document.getElementById('email-error').style.display = "none";
	        //     document.getElementById('email-error').innerHTML='';
	        // }
	        
	        // if(newUserPass ==="" || newUserPass.length<6){
	        // 	document.getElementById('pass-error').style.display = "block";
	        //     document.getElementById('pass-error').innerHTML=`Debes ingresar una contraseña con minimo 6 caracteres.`;
	        // }else{
	        // 	document.getElementById('pass-error').style.display = "none";
	        //     document.getElementById('pass-error').innerHTML='';
	        // }



		firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPass).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

	})											
}