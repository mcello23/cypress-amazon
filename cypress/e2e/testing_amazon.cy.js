describe('Amazon', function() {
   beforeEach(function() {
    //Visits the Amazon Spain webpage:
    cy.visit('https://www.amazon.es/')
    //Clicks on the continue without accepting cookies for better visualiztion of the exercise:
    cy.get('#sp-cc-rejectall-container').click()
  })
  it('Verifies the title of the Webpage', function() {
    cy.visit('https://www.amazon.es/')
    cy.title().should('be.equal', 'Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.') //Assertion of the Amazon webpage by it's title, not the h1, the <head></head>
})
  it('Searches for a Nespresso product and adds it to the cart', function() {

    cy.get('#twotabsearchtextbox').type('Cafetera Nespresso') //Here, it finds the search bar and clicks on it and writes 'Cafetera Nespresso'
    cy.get('#nav-search-submit-button').click() //It looks for the search icon and clicks on it
    cy.get('[data-asin="B00G5YOVZA"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').scrollIntoView().click() //Here I'm telling Cypress to look for a specific coffee manchine by it's ID, and it scrolls down until it finds and then clicks on it
    cy.get('#add-to-cart-button-ubb').click() //It looks for the 'Add to cart' button and clicks on it
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click() //It looks for the 'View this in cart' button and clicks on it
    //Assertion
    cy.get('h1').contains('Cesta') //And finally the assertion, when we enter the 'Cart' page, there's an element called 'Cesta' in the page, which it looks for it by it's ID and it verifies that it contains the text 'Cesta' and it assures that it passes.
  })
  //Here, I want to do the same test case in a different way
  it.only('Searches for a specific Nespresso SNE900 product, adds it to the cart and validates it', function() {

    cy.get('#twotabsearchtextbox').type('NESPRESSO SNE900') //Here, it finds the search bar and clicks on it and writes 'NESPRESSO SNE900'
    cy.get('#nav-search-submit-button').click() //It looks for the search icon and clicks on it
    cy.get('[data-asin="B08LDSF6XP"] > .sg-col-inner > .s-widget-container > .s-card-container > :nth-child(1) > .puis-padding-left-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click() //Since there's 23 results, I tell cypress to click on the model of the coffee machine by the ID that I've passed on
    cy.get('#add-to-cart-button').click() //It looks for the 'Add to cart' button and clicks on it
    cy.get('#attachSiNoCoverage').click() //It looks for the 'No, thank you' in the Extra Warranty slider and clicks on it
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click() //It looks for the 'View this in cart' button and clicks on it
    //Assertion
    cy.get('.a-color-base > .a-truncate > .a-truncate-cut').contains('NESPRESSO SNE900') //Here the assertion is slightly different than in the last test case, it looks 'NESPRESSO SNE900' is in the child element inside the cart. It finds it and it passes the test.
  })

  })