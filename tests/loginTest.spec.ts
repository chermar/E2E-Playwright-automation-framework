import {test,expect} from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';



test("Testing ",async({page})=>
    {
       const loginpage = new LoginPage(page);
      await loginpage.openPage();
     await loginpage.fillUsername(process.env.userid!);     
     await loginpage.fillPassword(process.env.password!);
      await loginpage.clickLoginBUtton();
      await expect(page.locator('p.smallText')).toContainText('Welcome');
    console.log(process.env.userid);
    console.log(process.env.password);

    });

