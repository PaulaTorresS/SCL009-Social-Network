import { validateEmail, validateUser, validateNewUser } from "./../src/assets/js/validation.js";

describe("validateEmail",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmail('¢∞correoinvalido###')).toBe(false);
    })
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmail('correo_valido@gmail.com')).toBe(true);
    })
})


describe("validateUser", () =>{
	it('deberia retornar false si por lo menos uno de los parametros esta string vacio', ()=>{
		expect(validateUser('test@test.com','')).toBe(false);
		expect(validateUser('','password')).toBe(false);
	})
	it('deberia retornar false si longitud de contraseña es menor a 6', ()=>{
		expect(validateUser('test@test.com','abc1')).toBe(false);
	})
	it('deberia retornar true si todos parametros estan validos',()=>{
		expect(validateUser('test@test.com','password')).toBe(true);
	})
})
describe("validateNewUser", () =>{
	it('debería retornar false si por lo menos uno de los cinco parametros es un string vacio', () =>{
		expect(validateNewUser('email@email.com','','name','lastname','childname')).toBe(false);
		expect(validateNewUser('','password','name','lastname','childname')).toBe(false);
		expect(validateNewUser('email@email.com','password','','lastname','childname')).toBe(false);
		expect(validateNewUser('email@email.com','password','name','','childname')).toBe(false);
		expect(validateNewUser('email@email.com','password','name','lastname','')).toBe(false);
	})
	it('deberia retornar false si longitud de contraseña es menor a 6', ()=>{
		expect(validateNewUser('email@email.com','pass','name','lastname','childname')).toBe(false);
	})
	it('deberia retornar true si todos los parametros estan validos', () =>{
		expect(validateNewUser('email@email.com','password','name','lastname','childname')).toBe(true);
	})
})