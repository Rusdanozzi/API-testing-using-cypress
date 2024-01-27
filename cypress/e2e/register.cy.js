import { ROUTES } from "../const/routes";

describe('register feature', () => {
    let randomStrings = Math.random().toString(36).substring(7);
    it('success register', () => {
        cy.request({
            method: 'POST',
            url: ROUTES.register,
            body: {
                email: `paimin${randomStrings}@gmail.com`,
                password: randomStrings,
                name: randomStrings
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal('berhasil');
            expect(response.body.status).to.equal('SUCCESS_REGISTER');
            expect(response.body.message).to.equal('created user!');
        })
    });

    it('failed register using invalid email', () => {
        cy.request({
            method: 'POST',
            url: ROUTES.register,
            body: {
                email: `@gmail.com`,
                password: randomStrings,
                name: randomStrings
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(420);
            expect(response.body.data).to.equal('Email tidak valid');
            expect(response.body.status).to.equal('FAILED_REGISTER');
            expect(response.body.message).to.equal('Cek kembali email anda');
        });
    });
})