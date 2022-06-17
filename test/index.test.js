import request from "supertest";
import app from '../src/app';

describe('GET /registro', () => {
    test('(Codigo 200) comprobando que la peticion si es existente y si es de tipo GET', async () => {
        const response = await request(app).get("/registro").send();
        expect(response.statusCode).toBe(200);
    });

    test('(Codigo 200) comprobando que el id en el json de la peticion no tenga un valor distinto a 1', async () => {
        const response = await request(app).get("/registro").send();
        expect(response.body.id).toEqual(1);
    });
    
    test('(Codigo 200) verificando que el nombre de usuario no sea null', async () => {
        const response = await request(app).get("/registro").send();
        expect(response.body.user).not.toBeNull();
    });

});

describe('GET /login', () => {
    test('(Codigo 200) comprobando que la peticion si es existente y si es de tipo GET', async () => {
        const response = await request(app).get("/login").send();
        expect(response.statusCode).toBe(200);
    });

    test('(Codigo 200) verificando que el valor de password de usuario no sea null', async () => {
        const response = await request(app).get("/login").send();
        expect(response.body.password).not.toBeNull();
    });

    test('(Codigo 200) verificando que el email sea \"usac@gmail.com\"', async () => {
        const response = await request(app).get("/login").send();
        expect(response.body.email).toMatch("usac@gmail.com");
    });
});


describe('GET /asing', () => {
    test('(Codigo 200) comprobando que la peticion si es existente y si es de tipo GET', async () => {
        const response = await request(app).get("/asing").send();
        expect(response.statusCode).toBe(200);
    });

    test('(Codigo 200) comprobando que la informacion contenga el curso \"analisis1\"', async () => {
        const response = await request(app).get("/asing").send();
        expect(response.body.class_c).toContain("analisis1");
    });

    test('(Codigo 200) comprobando que la seccion asignada no sea la seccion \"A\"', async () => {
        const response = await request(app).get("/asing").send();
        expect(response.body.seccion).not.toBe("A");
    });
});