/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')
      .get('h1')
      .should('contain.text', 'conduit');

    cy.contains('Sign in')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.contains('a', 'Need an account?')
    .should('exist');
    
    cy.get(':nth-child(1) > .form-control')
      .type('testUser77@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('123qwe!!');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'testUser77');
  });
}); 
