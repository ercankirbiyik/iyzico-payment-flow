import basePage from './BasePage';

class PaymentPage {

    static clickPayButton = () => {
        basePage.clickElement('iyz-payment-button');
    }

    static fillPaymentForm = (cardDetails) => {
        basePage.clickAndType('#ccname', cardDetails.name);
        basePage.clickAndType('#ccnumber', cardDetails.number);
        basePage.clickAndType('#ccexp', cardDetails.expiry);
        basePage.clickAndType('#cccvc', cardDetails.cvc);
    }

    static verifyPaymentSuccessMessage = (message) => {
        basePage.verifyMessage('[class="page-title"]', message);
    }
}

export default PaymentPage;