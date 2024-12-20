class BasePage {
	static visitURL(url) {
		BasePage.checkQueryIsLoaded();
		cy.visit(url);
		cy.reload();
		cy.log('Visiting ' + url);
	}

	static clickElement(selector) {
		cy.get(selector).click();
		cy.log('Element ' + selector + ' is clicked');
	}

	static checkElementVisible(selector) {
		cy.get(selector).should('be.visible');
		cy.log('Element ' + selector + ' is visible');
	}

	static clickAndType(selector, text) {
		cy.get(selector).type(text);
		cy.log('Typed ' + text + ' in ' + selector);
	}

	static verifyMessage(selector, message) {
		cy.get(selector).should('contain', message);
		cy.log('Message ' + message + ' is verified');
	}

	static checkQueryIsLoaded() {
		cy.window().then((win) => {
			if (!win.$) {
				throw new Error('jQuery is not loaded');
			}
		});
	}

}

export default BasePage;


