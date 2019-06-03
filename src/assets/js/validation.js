
/*2)Validaciones de la función signIn();*/

/*a)Función que valida que el usuario no puede tener input vacios,
para los parametros definidos en el flujo de la aplicación*/
export const validateSignIn = (email,pass) => {
  if(email === ""|| pass ==="" || pass.length<6 || !validateEmail(email)){
    return false;
  }else{
    return true;
  }
}
/*b)Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
// export const validateEmail = (emailNewUser)=>{
//   expresión regular que simula el patron de búsqueda del correo electrónico
//   let pattern = /\S+@\S+\.\S+/;
//   return pattern.test(emailNewUser);
// }

/*b)Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
export const validateEmailSignIn = (email)=>{
  //expresión regular que simula el patron de búsqueda del correo electrónico
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}