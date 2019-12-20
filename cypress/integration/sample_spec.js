describe("My First Test", () => {
  it("Visits the kitchen sink", () => {
    cy.visit("https://google.com");
    cy.pause();
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
