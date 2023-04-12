import DropDownPage from '../pageobjects/dropDown.page.js'

describe('My Drop Down application', () => {
    it('Should check for drop down 1', async () => {
        //Start by navigatig to page        
        await DropDownPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        //Have to open the options in order to select
        await (DropDownPage).dDownOptions.click();
        //Once options are open click on option 1
        await (DropDownPage).dropDown1.click();
        await browser.pause(2000);
        await expect(DropDownPage.dropDown1).toBeSelected()
        await expect(DropDownPage.dropDown1).toHaveTextContaining(
            'Option 1')
        


    })
    it('Should check for drop down 2', async () => {
        //Start by navigatig to page        
        await DropDownPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        //Have to open the options in order to select
        await (DropDownPage).dDownOptions.click();
        //Once options are open click on option 1
        await (DropDownPage).dropDown2.click();
        await browser.pause(2000);
        await expect(DropDownPage.dropDown2).toHaveTextContaining(
            'Option 2')
        await browser.pause(2000);

    })

})
