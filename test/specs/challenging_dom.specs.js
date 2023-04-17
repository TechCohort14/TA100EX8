import ChallDomPage from '../pageobjects/challenging_Dom.page.js'


describe('My ChallDom application', () => {
    it('Check if link exists towards bottom of page an is clickable', async () => {
        //Open Page
        await ChallDomPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(1000);
        //Get element and check if you can click on it       
        await expect(ChallDomPage.link).toBeClickable();
        //Has and 'href' pointing to correct URL
        await expect(ChallDomPage.link).toHaveAttribute('href', 'http://elementalselenium.com/')
        //Just Check to see if it exists on the page
        await expect(ChallDomPage.link).toExist();
        await browser.pause(2000);
    })
    it('Should check PARTIAL Selenium link towards bottom of page', async () => {
        //Open Page
        await ChallDomPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(1000);
        //Get element you want to click on
        //await (ChallDomPage).partLink.click();
        await expect(ChallDomPage.partLink).toExist();
        //await expect(ChallDomPage.partLink).toHaveText()
        await browser.pause(2000);
    })
    it('Should check text for Aperian0', async () => {
        //Open Page
        await ChallDomPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(1000);
        //Get element you want to check that is exists
        await expect(ChallDomPage.appText).toExist();
        await expect(ChallDomPage.appText).toHaveText('Apeirian0');
        await browser.pause(2000);
    })


})


