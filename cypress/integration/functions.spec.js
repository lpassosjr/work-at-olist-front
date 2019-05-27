describe('End to End test', function() {
    it("should complete the form send flow", function() {
        const typeName = 'Fulano da Silva',
            typeEmail = 'email@gmail.com',
            typePassword = '1Aqwert';
        cy.visit('http://127.0.0.1:8080')
        cy.get('#fullName')
            .type(typeName)
            .should('have.value', typeName)
            .should('have.class', 'filled')
        cy.get('#email')
            .type(typeEmail)
            .should('have.value', typeEmail)
            .should('have.class', 'filled')
        cy.get('#password')
            .type(typePassword)
            .should('have.value', typePassword)
        cy.get('#reentryPassword')
            .type(typePassword)
            .should('have.value', typePassword)
        cy.get('#loginButton')
            .should('not.be.disabled')
            .click()
            .wait(1500)
    })
    it("shouldn't complete the form send flow", function(){
        const typeName = ' ',
        typeEmail = 'email+gmail.c',
        typePassword = 'Aqwert',
        typeRePassword = '1qwert';
        cy.visit('http://127.0.0.1:8080')
        cy.get('#fullName')
        .type(typeName)
        .should('have.value', typeName)
        .should('have.class', 'error')
        cy.get('#email')
        .type(typeEmail)
        .should('have.value', typeEmail)
        .should('have.class', 'error')
        cy.get('#password')
        .type(typePassword)
        .should('have.value', typePassword)
        .should('have.class', 'error')
        cy.get('#reentryPassword')
        .type(typeRePassword)
        .should('have.value', typeRePassword)
        .should('have.class', 'error')
        cy.get('#loginButton')
        .should('be.disabled')
        .wait(500)
    })
    it("should test the strengh password", function(){
        cy.visit('http://127.0.0.1:8080')
        cy.get('#password')
            .type('1')
            .get('.oneCondition')
            .get('#number').should('have.class', 'filled')
        cy.get('#password')
            .type('18A')
            .get('.twoCondition')
            .get('#number').should('have.class', 'filled')
            .get('#uppercase').should('have.class', 'filled')
        cy.get('#password')
            .type('18Anht')
            .get('.threeCondition')
            .get('#number').should('have.class', 'filled')
            .get('#uppercase').should('have.class', 'filled')
            .get('#characters').should('have.class', 'filled')
            .wait(500)
        
    })
    it("should test the API response", function(){
        cy.request(
            'POST', 
            'https://python-olist-api.herokuapp.com/signup', 
            { 
                typeName : 'Fulano da Silva',
                typeEmail : 'email@gmail.com',
                typePassword : '1Aqwert',
            })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })
  })