/// <reference types="cypress" />

describe('Fetch products from API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('should display a list of products', () => {
    cy.get('.css-jadj83').should(
      'contain',
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
  });

  it('should display a list of products from mock', () => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', {
      fixture: 'products.json',
    });

    cy.get('.css-jadj83').should(
      'contain',
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
  });
});
