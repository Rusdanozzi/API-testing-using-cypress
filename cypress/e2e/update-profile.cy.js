import { ROUTES } from "../const/routes";
import { VALID_USER } from "../data/login.data";

describe('Update profile', () => {
    let accessToken;

    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: ROUTES.login,
            body: {
                email: VALID_USER.email,
                password: VALID_USER.password
            },
        }).then((response) => {
            accessToken = response.body.credentials.access_token;
        })
    });

    it.only('should successfully update profile', () => {
        cy.request({
            method: 'PUT',
            url: ROUTES.updateProfil,
            body: {
                name: "paimin"
            },
            headers: {
                Authorization: accessToken
            }
        }
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal('Username Anda menjadi paimin');
            expect(response.body.status).to.equal('SUCCESS_UPDATE_PROFILE');
            expect(response.body.message).to.equal('Berhasil Perbarui Profile');

        });
    });



})