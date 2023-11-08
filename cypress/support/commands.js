Cypress.Commands.add("createUser", () => {
  cy.request("POST", "https://petstore.swagger.io/v2/user", {
    id: 500,
    username: "first",
    firstName: "Sergei",
    lastName: "Sergeev",
    email: "Ser@yandex.ru",
    password: "Som500abb",
    phone: "+79999999999",
    userStatus: 0,
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      code: 200,
      type: "unknown",
      message: "500",
    });
  });
});
