const { faker } = require("@faker-js/faker");

describe('Template Spec', async () => {
  it('Verifies if properties containing tags are updated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit('https://investors.sprinklr.com/');
    cy.get('[class="btn-wrapper"]', { timeout: 120000 }).click();
    cy.get('[id="first_name"]', { timeout: 120000 }).click();
    cy.get('[id="first_name"]').type("yash");
    cy.get('[id="last_name"]', { timeout: 120000 }).click();
    cy.get('[id="last_name"]').type("ahlawat");
    cy.get('[id="email"]', { timeout: 120000 }).click();
    cy.get('[id="email"]').type("yash.ahlawat@sprinklr.com");
    cy.get('[class="btn dropdown-toggle main-select"]', { timeout: 120000 }).click();
    
    cy.get('[id="bs-select-1"]', { timeout: 120000 }).click({ force: true });

    cy.contains('[role="listbox"] .dropdown-item', 'Portfolio Manager').click({ force: true });
    cy.get('[class="btn spr_ir_submit"]', { timeout: 120000 }).click();
  });
});
