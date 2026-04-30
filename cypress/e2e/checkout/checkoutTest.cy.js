import LoginPage from "../../pages/LoginPage"
import InventoryPage from "../../pages/InventoryPage"
import CartPage from "../../pages/CartPage"
import CheckoutPage from "../../pages/CheckoutPage"
import SideNavPage from "../../pages/SideNavPage"

describe("SauceDemo Checkout Test", () => {

  const login = new LoginPage()
  const inventory = new InventoryPage()
  const cart = new CartPage()
  const checkout = new CheckoutPage()
  const sidenav = new SideNavPage()

  beforeEach(() => {

    cy.fixture("userData").then((data) => {

      cy.visit("/")

      login.enterUsername(data.username)
      login.enterPassword(data.password)
      login.clickLogin()
      

    })

  })

  it("Verify Side Nav Menu",() => {
    

    sidenav.getHamBurgerMenu().click();
    sidenav.getAboutLink().should("be.visible");
    sidenav.getLogoutLink().should("be.visible");
    sidenav.getResetAppStateLink().should("be.visible");
    sidenav.getCloseMenuBtn().click();
})


  it("Verify user can complete checkout of a Backpack", () => {

    cy.fixture("userData").then((data) => {

      inventory.addBackpackToCart()

      inventory.goToCart()

      cart.verifyProduct(cart.cartData.bagPack).should("be.visible");

      cart.clickCheckout().click();

      checkout.enterFirstName(data.firstName)
      checkout.enterLastName(data.lastName)
      checkout.enterPostalCode(data.postalCode)

      checkout.clickContinue({force: true})

      cy.contains("Checkout: Overview").should("be.visible")
      sidenav.getHamBurgerMenu().click();
      sidenav.getLogoutLink().click();

    })

  })

  it("Verify user can complete checkout of a Jacket", () => {
      
        cy.fixture("userData").then((data) => {

      inventory.addJacketToCart().click()

      inventory.goToCart()

      cart.verifyProduct(cart.cartData.jacket).should("be.visible");

      cart.clickCheckout().click();

      checkout.enterFirstName(data.firstName)
      checkout.enterLastName(data.lastName)
      checkout.enterPostalCode(data.postalCode)

      checkout.clickContinue({force: true})

      cy.contains("Checkout: Overview").should("be.visible")
      sidenav.getHamBurgerMenu().click();
      sidenav.getLogoutLink().click();

    })

  })


})