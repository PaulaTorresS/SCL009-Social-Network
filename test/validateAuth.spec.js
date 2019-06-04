import { validateEmail, validateNewUser } from "./../src/assets/js/validation.js";

describe("validateEmail",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmail('¢∞correoinvalido###')).toBe(false);
    })
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmail('correo_valido@gmail.com')).toBe(true);
    })
})


describe("validateNewUser", ()=>{
	it('deberia retornar false si uno de los parametros esta string vacio',()=>{
		expect(validateNewUser('test@test.com','')).toBe(false);
	})
	it('deberia retornar false si longitud de contraseña es menor a 6', ()=>{
		expect(validateNewUser('test@test.com','abc1')).toBe(false);
	})
	it('deberia retornar true si todos parametros estan validos',()=>{
		expect(validateNewUser('test@test.com','password')).toBe(true);
	})

})

