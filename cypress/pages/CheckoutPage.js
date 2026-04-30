class CheckoutPage {

  enterFirstName(fname){

    cy.get("#first-name").type(fname)

  }

  enterLastName(lname){

    cy.get("#last-name").type(lname)

  }

  enterPostalCode(code){

    cy.get("#postal-code").type(code)

  }

  clickContinue(){

    cy.get("#continue").click()

  }

}

export default CheckoutPage