
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {

        clearSessionStorage(): Chainable<any>

    }
}
