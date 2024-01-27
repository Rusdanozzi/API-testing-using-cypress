import { ROUTES } from "../const/routes";

describe('Get List User', () => {
    it('successfully get list user', () => {
        cy.request({
            method: 'GET',
            url: ROUTES.listUser,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('List of registered users');
            expect(response.body.status).to.equal('SUCCESS_USER_LIST');
        })
    });
    it('should successfully get list user with params username', () => {
        cy.request({
            method: 'GET',
            url: `${ROUTES.listUser}?username=paijo`
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('List of registered users');
            expect(response.body.status).to.equal('SUCCESS_USER_LIST');
        });
    })
})