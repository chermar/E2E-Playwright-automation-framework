import{Page} from "@playwright/test";

import HomePage from "./HomePage";

 export default class LoginPage
{
    private readonly usernameInputSelector = '#username';
    private readonly passwordInputSelector = '#password';
    private readonly loginButtonSelect = '#Login';

    constructor(private page :Page)
    {

    }

    async navigateToLoginPage()
    {
        await this.page.goto("/");
    }

    async fillUserName(username:string)
    {
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    async fillPassword(password:string)
    {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }
    async clickLoginButton()
    {
        await this.page.locator(this.loginButtonSelect)
        .click()
        .catch((error)=>
            {
                console.log(`Error clicking login button :${error}`);
                throw error;
            });

            const homepage = new HomePage(this.page);
            return homepage;

    }

}