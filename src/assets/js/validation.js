
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
//Función que valida el correo
export const validateEmail = (newUserEmail)=>{
  /*expresión regular que simula el patron de búsqueda del correo electrónico*/
  let regEx = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return regEx.test(newUserEmail);
}


export const validateNewUser = (newUserEmail,newUserPass) => {
  if(newUserEmail ==="" || newUserPass ==="" || newUserPass.length<6 || !validateEmail(newUserEmail)){
    return false;
  }else{
    return true;
  }
}