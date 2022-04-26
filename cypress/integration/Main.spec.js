//test to check if users are taken to homepage upon clicking the rotating mars sphere
//and if rovers can be clicked and cameras selected
describe("renders homepage and interaction with homepage", () => {
  it("allows homepage routing and rendering upon clicking the rotating mars sphere rovers, and selection of rovers and cameras", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get("canvas").click();
    cy.get(":nth-child(1) > .btn").click();
    cy.get(":nth-child(2) > .btn").click();
    cy.get("#flexCheckDisabled").check();
    cy.get(
      ":nth-child(3) > :nth-child(2) > .form-check > .form-check-input"
    ).check();
    cy.get(
      ":nth-child(3) > :nth-child(1) > .form-check > .form-check-input"
    ).check();
    cy.get(
      ":nth-child(2) > :nth-child(1) > .form-check > .form-check-input"
    ).check();
    /* ==== End Cypress Studio ==== */
  });
  it("allows sol day input and updating input event target value", () => {
    cy.visit("/Home");
    cy.get(".form-control").clear();
    cy.get(".form-control").type("55");
  });

  it("allows search after user selects rover options, camera options, and sol day input", () => {
    cy.visit("/Home");
    cy.get(":nth-child(1) > .btn").click();
    cy.get(":nth-child(2) > .btn").click();
    cy.get("#flexCheckDisabled").check();
    cy.get(
      ":nth-child(3) > :nth-child(2) > .form-check > .form-check-input"
    ).check();
    cy.get(
      ":nth-child(3) > :nth-child(1) > .form-check > .form-check-input"
    ).check();
    cy.get(".form-control").clear();
    cy.get(".form-control").type("60");
    cy.get("#submitBtn").click();
  });
});
