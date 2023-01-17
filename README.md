# Welcome!

Thank you for checking out this ~~small~~ yet effective automation test using Cypress. 
The objective here is a test stablished by Wordline of developing, running and asserting a test inside Amazon webpage.
The test was made in **JavaScript**.

# Pre-Requirements

You`ll need to have and install:

- [Node.js](https://nodejs.org/en/) 
- [Google Chrome](https://www.google.com/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/) or any other IDE of your preference. 

> **Obs.:** At installing Node.js, npm is installed toghether.

## NPM Installation

To use Terminal inside VS Code, simply press `CTRL + '` (it's usually the key before 1) in your keyboard.
Run `npm install`  (or `npm i` for the short version) to install the dev dependencies.
## Desktop

Run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

# Requirements of the test case

Scenario: 
As a user I want to make a purchase in Amazon web. 

Expected result: 
Find an article, go to the article page, add it to the cart and validate the cart (Buying the product is obviously not required).

# How to run this test

Download this repo and open it in `Visual Studio Code` as the IDE which I recommend using.

After Opening VS Code, go to `File > Open Folder` and select the folder where everything is extracted.

## Installing Cypress

Install Cypress with `npm install cypress --save-dev` from your terminal.

## Running Cypress

Run Cypress with the following command: `npx cypress open`.
In the GUI mode, Cypress will ask you which type of testing you'll be running, select `E2E Testing`.
Then, you'll have three options of browsers in which you'll be running the tests. `Chrome` is the one recommended.

## You're one click away

Here is the first window you'll see. In it, just click on the spec `testing_amazon.cy.js` and it all the start running.

![This is the first window you'll see](/img/cypress_first_window_1.jpg)

Here's a video example of how the suite runs:

![Here's the automation tests running](/img/cypress_run.gif) 

## Explaining the test suite

The suite is composed of two test cases in which, before each test is run, it executes the command: 
**beforeEach(function()**

This makes that the following commands are run before each test case, such as:

cy.visit('https://www.amazon.es/') 
> It will always visit the Amazon Spain webpage before a test case
    
cy.get('#sp-cc-rejectall-container').click() 
> This one clicks on the `continue without accepting cookies` for better visualiztion of the tests.

**First test case - Verifies the title of the Webpage**:
it('Verifies the title of the Webpage', function() {

cy.visit('https://www.amazon.es/')
> Here, Cypress visits Amazon.es

cy.title().should('be.equal', 'Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.')
> And then, I validate that Amazon.es is the correct website we're located, which it works through the `.should('be.equal')` function

**Second test case - Searches for a Nespresso product and adds it to the cart**:

it('Searches for a Nespresso product and adds it to the cart', function() {
> It enters Amazon.es with the beforeEach() function

cy.get('#twotabsearchtextbox').type('Cafetera Nespresso') 
> Here, I selected the search box element and make it type `Cafetera Nespresso`

cy.get('#nav-search-submit-button').click()
> After it writes, I make it search for it

cy.get('[data-asin="B00G5YOVZA"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').scrollIntoView().click()
> Here, it's really interesting that I'm telling Cypress to find a specific Nespresso through it's data id, which it finds scrolling down through the `scrollIntoView()` and then clicks it

cy.get('#add-to-cart-button-ubb').click()
> After entering the product, I search the `Add to cart` and click on it

cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
> Then, I go to `View on Cart`.

//Assertion
cy.get('h1').contains('Cesta')
> And this is the most important, being the assertion in which validates the behaviour so far. I make Cypress check the `h1` element, which conatins `Cart` written and then the test passes.

# Video
Please check the video recorded in the `/video/` folder, which conatins a high-res video of the suite running and making it's assertions.

## Last comments
Please, any doubts just contact me at `marcelodsc@gmail.com` or if you want me to explain and show the suite running directly in my PC, I'll gladly do it in a video call.

# Thank you!
![Boom!](/img/drop_the_mic.gif) 
