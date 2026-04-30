class InventoryPage {

  addBackpackToCart(){

    cy.get("#add-to-cart-sauce-labs-backpack").click()

  }

  addJacketToCart(){

    return cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]',{timeout: 10000})

  }

  goToCart(){

    cy.get(".shopping_cart_link").click()

  }

}

export default InventoryPage