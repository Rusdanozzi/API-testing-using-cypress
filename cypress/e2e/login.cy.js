import { ROUTES } from "../const/routes";
import { INVALID_PASSWORD, VALID_USER } from "../data/login.data";

describe('Login feature', () => {
    it('success login using valid user', () => {
        cy.request({
            method: 'POST',
            url: ROUTES.login,
            body: {
                email: VALID_USER.email,
                password: VALID_USER.password
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal('Welcome paimin rajin');
            expect(response.body.message).to.equal('Anda Berhasil Login');
            expect(response.body.status).to.equal('SUCCESS_LOGIN');
        })
    });

    it('failed login using invalid password', () => {
        cy.request({
            method: 'POST',
            url: ROUTES.login,
            body: {
                email: INVALID_PASSWORD.email,
                password: INVALID_PASSWORD.password,
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal("User's not found");
            expect(response.body.message).to.equal('Email atau Password Anda Salah');
            expect(response.body.status).to.equal('FAILED_LOGIN');
        })

    });
})
