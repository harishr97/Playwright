export class LoginPage {
    constructor(page) {
        this.page = page
        this.username=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.loginbtn=page.locator('//input[@id="login"]')
    }
    async visitURL(){
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async goToURL(){
        await this.page.goto('www.google.com')
    }
    async enterUserName(uname){
        await this.username.fill(uname)
    }
    async enterPassword(pwd){
        await this.password.fill(pwd)
    }
    async ClickLogin(){
        await this.loginbtn.click()
    }
}