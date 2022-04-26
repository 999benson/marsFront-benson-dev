//users can save favorite photos
describe("renders the photos page and saves to favorites page", () => {
  it("Lets users select rover and camera option and select favorite photos to save to album", function () {
    cy.visit("http://localhost:9080/");
    cy.get("#home").click();
    cy.get(":nth-child(1) > .btn").click();
    cy.get(":nth-child(2) > .btn").click();
    cy.get("#flexCheckDisabled").check();
    cy.get(
      ":nth-child(2) > :nth-child(1) > .form-check > .form-check-input"
    ).check();
    cy.get(".form-control").clear();
    cy.get(".form-control").type("15");
    cy.get("#submitBtn").click();
    cy.get(
      ":nth-child(1) > :nth-child(1) > .card-body > .cardlink > .hearbtn > .heart"
    ).click();
    cy.get(
      ":nth-child(1) > :nth-child(2) > .card-body > .cardlink > .hearbtn > .heart"
    ).click();
    cy.get(":nth-child(2) > a > #myfave").click();
  });
});
