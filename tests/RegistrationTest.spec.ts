import { test,expect } from '@playwright/test';
import RegisterPage from '../src/pages/RegisterPage';
import testdata from "../src/testdata/registrationData.json";
import { randomThreeDigits } from "../src/utils/commonfuncation";


for(const details of testdata){
test("Testing Regisgter Page", async ({ page }) => {

const registerpage = new RegisterPage(page);    


    const username = `johan_ra_${randomThreeDigits()}`; 


    await registerpage.open();
    await registerpage.RegisterFormOpen();
    await registerpage.fillForm({
        firstName: details.firstName,
        lastName: details.lastName,
        address: details.address,
        city: details.city,
        state: details.state,
        zipCode: details.zipCode,
        phone: details.phone,     // optional in your type; you can omit if not needed
        ssn: details.ssn,
        username: username,
        password:details.password,
    });
    console.log(username);
    const log = await registerpage.submit();


          await log.Clicklogout();
          await log.openPage();
         await log.fillUsername(username);     
         await log.fillPassword(details.password);
          await log.clickLoginBUtton();
          await expect(page.locator('p.smallText')).toContainText('Welcome');

    


});

}


