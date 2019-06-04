import { validateEmail, validateNewUser } from "./../src/assets/js/validation.js";

describe("validateEmail",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmail('¢∞correoinvalido###')).toBe(false);
    })
})
describe("validateEmail",()=>{
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmail('correo_valido@gmail.com')).toBe(true);
    })
})

describe("validateNewUser", ()=>{
	it('deberia retornar false si uno de los parametros esta string vacio',()=>{
		expect(validateNewUser('test@test.com','')).toBe(false);
	})
})
describe("validateNewUser", ()=>{
	it('deberia retornar true si todos parametros estan validos',()=>{
		expect(validateNewUser('test@test.com','password')).toBe(true);
	})
})