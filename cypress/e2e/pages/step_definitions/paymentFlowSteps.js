import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PaymentPage from '../PaymentPage'
import BasePage from '../BasePage';

Given('I am on the iyzico demo page', () => {
    cy.wait(1000);
    BasePage.visitURL('https://www.iyzico.com/demo/');
});

When('I click on the second product', () => {
    BasePage.clickElement('.product:nth-child(2)');
});

When('I click add to cart button', () => {
    BasePage.clickElement('button[name="add-to-cart"]');
});

When('I click on the show basket icon', () => {
    BasePage.clickElement('.cart-icon');
});

When('I click on the go to payment button', () => {
    BasePage.clickElement('[class="checkout-button button alt wc-forward"]');
    BasePage.checkElementVisible('[class="wc_payment_methods payment_methods methods"]');
});

When('I select pay with debit or credit card payment option', () => {
    BasePage.clickElement('label[for="payment_method_iyzico"]');
});

When('I click on the place order button', () => {
    BasePage.clickElement('#place_order');
});

When('I fill payment form with test card details', () => {
    PaymentPage.fillPaymentForm({
        name: 'ERCAN KIRBIYIK',
        number: '1234 5678 9101 1234',
        expiry: '12/30',
        cvc: '123'
    },);
});

When('I click on the pay button', () => {
    PaymentPage.clickPayButton();
});

Then('I should see the payment page', () => {
    BasePage.checkElementVisible('[class="wc_payment"]')
});

Then('I should see confirmation {string} message', (message) => {
    PaymentPage.verifyPaymentSuccessMessage(message);
});
