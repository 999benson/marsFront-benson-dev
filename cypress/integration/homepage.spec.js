//test to check if landing page renders
describe("renders the landing page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
  });
});
