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

# Requirements of the test case

Scenario: 
As a user I want to make a purchase in Amazon web. 

Expected result: 
Find an article, go to the article page, add it to the cart and validate the cart (Buying the product is obviously not required).

# How to run this test

Download this repo and open it in `Visual Studio Code` as the IDE that I recommend using.

After Opening VS Code, go to `File > Open Folder` and select the folder where everything is extracted.

![vscode opened](/img/vscode_opened.jpg)

## NPM Installation

To use Terminal inside VS Code, simply press `CTRL + '` (it's usually the key before 1) in your keyboard.
Run `npm install`  (or `npm i` for the short version) to install the dev dependencies.

![NPM installation](/img/vscode_npm_install.jpg)

## Installing Cypress

Install Cypress with `npm install cypress --save-dev` from your terminal.

![cypress install](/img/vscode_cypress_install.jpg)

## Running Cypress

Run Cypress with the following command: `npx cypress open` or through a script that I created `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

![cypress run](/img/vscode_running_cypress.jpg)

In the GUI mode, Cypress will ask you which type of testing you'll be running, select `E2E Testing`.

![This is the first window you'll see](/img/cypress_e2e.jpg)

Then, you'll have three options of browsers in which you'll be running the tests. `Chrome` is the one recommended.

## You're one click away

Here is the first window you'll see. In it, just click on the spec `testing_amazon.cy.js` and it all the start running.

![Click on the highlighted spec](/img/cypress_first_window_1.jpg)

Here's an example of how the suite runs:

![Here's the automation tests running](/img/cypress_run.gif) 

# Video
Please check the a high-res video recorded in the [video](https://github.com/mcello23/cypress-amazon/blob/master/cypress/videos/) folder, in which you can see the suite running and making it's assertions.

# Explaining the test suite

## Using beforeEach() function

The suite is composed of two test cases in which, before each test is run, it executes the command: 
**beforeEach(function()**

This makes that the following commands are run before each test case, such as:

cy.visit('https://www.amazon.es/') 
> It will always visit the Amazon Spain webpage before a test case
    
cy.get('#sp-cc-rejectall-container').click() 
> It will always click on the `continue without accepting cookies` for better visualization of the tests.

## First test case - Verifies the title of the Webpage
it('Verifies the title of the Webpage', function() {

cy.title().should('be.equal', 'Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.')
> After visiting the peage with the beforeEach() function, I validate that Amazon.es is the correct website we're located, which it works through the `.should('be.equal')` function

## Second test case - Searches for a Nespresso product and adds it to the cart:

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

cy.get('h1').contains('Cesta')
> And this is the most important, being the assertion in which validates the behaviour so far. I make Cypress check the `h1` element, which conatins `Cart` written and then the test passes.

## Third test case - Searches for a sepecific Nespresso SNE900 product and adds it to the cart:

it('Searches for a specific Nespresso SNE900 product, adds it to the cart and validates it', function() {
> It enters Amazon.es with the beforeEach() function

cy.get('#twotabsearchtextbox').type('NESPRESSO SNE900')
> Here, it finds the search bar and clicks on it and writes `NESPRESSO SNE900`.

cy.get('#nav-search-submit-button').click() 
> It looks for the search icon and clicks on it

cy.get('[data-asin="B08LDSF6XP"] > .sg-col-inner > .s-widget-container > .s-card-container > :nth-child(1) > .puis-padding-left-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
> Since there's 23 results, I tell cypress to click on the model of the coffee machine by the ID that I've passed on

cy.get('#add-to-cart-button').click()
> It looks for the `Add to cart` button and clicks on it

cy.get('#attachSiNoCoverage').click()
> It looks for the `No, thank you` in the Extra Warranty slider and clicks on it

cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
> It looks for the `View this in cart` button and clicks on it
  
cy.get('.a-color-base > .a-truncate > .a-truncate-cut').contains('NESPRESSO SNE900')
> Here the assertion is slightly different than in the last test case, it looks `NESPRESSO SNE900` is in the child element inside the cart. It finds it and it passes the test.

## A screenshot of all the tests executed and passed

![Suite working](/img/suite_passed.gif) 

# Check out the code!
Please check the [code](https://github.com/mcello23/cypress-amazon/blob/master/cypress/e2e/testing_amazon.cy.js) itself in my repo to see it better structured and all.

# Last comments
Please, any doubts just contact me at `marceloadsc@gmail.com` or if you want me to explain and show the suite running directly in my PC, I'll gladly do it in a video call.

# Thank you!
![Boom!](/img/drop_the_mic.gif) 
