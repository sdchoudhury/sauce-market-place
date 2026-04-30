class LoginPage{

username="#user-name"
password="#password"
loginBtn="#login-button"

enterUsername(username){

cy.get(this.username).type(username)

}

enterPassword(password){

cy.get(this.password).type(password)

}

clickLogin(){

cy.get(this.loginBtn).click()

}

login(username,password){

this.enterUsername(username)
this.enterPassword(password)
this.clickLogin()

}

}

export default LoginPage