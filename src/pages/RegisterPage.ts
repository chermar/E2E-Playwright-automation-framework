
// pages/RegisterPage.ts
import { Page, expect ,Locator} from '@playwright/test';
import LoginPage from './LoginPage';



export default class RegisterPage {
  constructor(private readonly page: Page) {}

  
  // Helper to find inputs by the `name` attribute
  private byName(name: string): Locator {
    return this.page.locator(`[name="${name}"]`);
  }


  private get registerButton() {
    return this.page.getByRole('button', { name: 'Register' });
  }
   private get registerLink() {
    return this.page.getByRole('link', { name: 'Register' });
  }
  private get successMessage() {
    return this.page.getByText('Your account was created successfully', { exact: false });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async RegisterFormOpen()
  {
   await this.registerLink.click();
  }
  async fillForm(data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
    ssn: string;
    username: string;
    password: string;
  
  }): Promise<void> {
    await this.byName('customer.firstName').fill(data.firstName);
    await this.byName('customer.lastName').fill(data.lastName);
    await this.byName('customer.address.street').fill(data.address);
    await this.byName('customer.address.city').fill(data.city);
    await this.byName('customer.address.state').fill(data.state);
    await this.byName('customer.address.zipCode').fill(data.zipCode);
    if (data.phone) await this.byName('customer.phoneNumber').fill(data.phone);
    await this.byName('customer.ssn').fill(data.ssn);
    await this.byName('customer.username').fill(data.username);
    await this.byName('customer.password').fill(data.password);
    await this.byName('repeatedPassword').fill(data.password);
    
  }

  
  async submit(): Promise<LoginPage> {
    try{
    await this.registerButton.click()
     await expect(this.successMessage).toBeVisible();
    return new LoginPage(this.page)
  }
    catch(err)
      {
        throw new Error(`Register submission failed: ${err}`);
      };
   
  }

  // async submitAndGoToLogin(): Promise<LoginPage> {
  //   await this.submit();
  //   await this.page.getByRole('link', { name: 'Log Out' }).click();
  //   await this.page.getByRole('link', { name: 'Log In' }).click();
  //   return new LoginPage(this.page);
  // }
}
