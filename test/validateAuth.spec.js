import { validateEmail } from "./../src/assets/js/validation.js";

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