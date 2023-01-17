describe('Amazon', function() {
   beforeEach(function() {
    //Visits the Amazon Spain webpage:
    cy.visit('https://www.amazon.es/')
    //Clicks on the continue without accepting cookies for better visualiztion of the exercise:
    cy.get('#sp-cc-rejectall-container').click()
  })
  it('Verifies the title of the Webpage', function() {
    cy.visit('https://www.amazon.es/')
    cy.title().should('be.equal', 'Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.')
})
  it('Searches for a Nespresso product and adds it to the cart', function() {

    cy.get('#twotabsearchtextbox').type('Cafetera Nespresso')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B00G5YOVZA"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').scrollIntoView().click()
    cy.get('#add-to-cart-button-ubb').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    //Assertion
    cy.get('h1').contains('Cesta')
  })
  })