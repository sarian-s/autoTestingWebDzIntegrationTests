describe("user API", () => {
  it("should create user", () => {
    cy.createUser();
  });

  it("should update user", () => {
    cy.createUser();
    cy.request("PUT", "https://petstore.swagger.io/v2/user/firstUser", {
      id: 500,
      username: "first",
      firstName: "Sergei",
      lastName: "Sergeev",
      email: "Ser@yandex.ru",
      password: "Som500abb",
      phone: "+79999999999",
      userStatus: 0,
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "500",
      });
    });
  });
  it("should delete user", () => {
    cy.createUser();
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/first", {
      username: "first",
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "first",
      });
    });
  });
});
