class SideNavPage{


    getHamBurgerMenu(){
        return cy.get('[id="react-burger-menu-btn"]',{timeout: 10000})
    }

    getAboutLink(){
        return cy.get('[data-test="about-sidebar-link"]',{timeout: 10000})
    }

    getLogoutLink(){
        return cy.get('[data-test="logout-sidebar-link"]',{timeout: 10000})
    }

    getResetAppStateLink(){

        return cy.get('[data-test="reset-sidebar-link"]',{timeout: 10000})
    }

    getCloseMenuBtn(){

        return cy.get('[id="react-burger-cross-btn"]',{timeout: 10000})
    }

    testData = {
    label : "Sauce AI for Test Authoring: Move from intent to execution in minutes."
  };

}

export default SideNavPage