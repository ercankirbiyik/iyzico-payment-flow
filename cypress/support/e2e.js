// Import commands.js using ES2015 syntax:
import './commands'

// Import Cucumber steps
import 'cypress-cucumber-preprocessor/steps'

// Import step definitions
import '../e2e/pages/step_definitions/paymentFlowSteps'

// Alternatively you can use CommonJS syntax:
// require('./commands') 