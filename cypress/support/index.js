import './e2e'
import 'cypress-cucumber-preprocessor/steps'
import '../e2e/pages/step_definitions/paymentFlowSteps'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    if (err.message.includes('$ is not a function')) {
        return false;
    }
});

// Hook to run after all tests
after(() => {
    // Navigate to a blank page to simulate closing the window
    cy.visit('about:blank');
    cy.log('Navigated to a blank page after all tests');
});