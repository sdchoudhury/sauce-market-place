class CartPage {

  clickCheckout(){

    return cy.get("#checkout",{timeout: 10000});

  }

  verifyProduct(item){

    return cy.contains(item,{timeout: 10000});

  }

  cartData ={
    bagPack : "Sauce Labs Backpack",
    jacket : "Sauce Labs Fleece Jacket"
  }

}

export default CartPage