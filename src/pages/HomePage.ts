import{Page,expect} from '@playwright/test';
 
export default class HomePage
{    
    private readonly seriveTitleLocator ='Service';
    
    constructor(private page:Page)
    {

    }

    async expectServiceTittleToBeVisiable()
    {
        await expect(this.page.getByTitle(this.seriveTitleLocator)).toBeVisible({timeout:15000});
    }
}