import { validateEmail, validateUser } from "./../src/assets/js/validation.js";

describe("validateEmail",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmail('¢∞correoinvalido###')).toBe(false);
    })
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmail('correo_valido@gmail.com')).toBe(true);
    })
})


describe("validateUser", () =>{
	it('deberia retornar false si uno de los parametros esta string vacio', ()=>{
		expect(validateUser('test@test.com','')).toBe(false);
	})
	it('deberia retornar false si longitud de contraseña es menor a 6', ()=>{
		expect(validateUser('test@test.com','abc1')).toBe(false);
	})
	it('deberia retornar true si todos parametros estan validos',()=>{
		expect(validateUser('test@test.com','password')).toBe(true);
	})
})