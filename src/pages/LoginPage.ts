import { Page ,Locator} from '@playwright/test';
import logger from '../utils/LoggerUtil';


export default class LoginPage
{
    private readonly usernameInputSelector = 'username';
    private readonly passwordInputSelector = 'password';
    private readonly loginButtonSelect = 'Log In';
    constructor(private readonly page:Page)
    {

    }
  // Helper to find inputs by the `name` attribute
    private byName(name:string): Locator
    {
        return this.page.locator(`[name="${name}"]`)
    }

    private loginButton()
    {
      return  this.page.getByRole('button',{name:this.loginButtonSelect});
        
    }
    private logOutbutton()
    {
        return this.page.getByRole('link',{name:"Log Out"});
    }

    async Clicklogout()
    {
        await this.logOutbutton().click();
    }
    async openPage()
    {
        await this.page.goto('/');
        logger.info("Navigate to login.saleforce.com");
    }

    async fillUsername(username:string)
    {
        await this.byName(this.usernameInputSelector).fill(username);
        logger.info("Filled Username");
    }
    async fillPassword(password:string)
    {
        await this.byName(this.passwordInputSelector).fill(password);
        logger.info("Filled Password");
    }

    async clickLoginBUtton()
    { await Promise.all([

        this.page.waitForLoadState('domcontentloaded'),
        this.loginButton().click(),
        logger.info("Click on Login button")
        
     ]);
        
    }
}

