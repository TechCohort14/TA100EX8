import AddElementPage from '../pageobjects/addElement.page.js'


describe('My Add and Delete Elements application', () => {
    it('Should Add 5 Elements and check', async () => {
        //Open Page
        await AddElementPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(1000);
        //Get element you want to click on
        await AddElementPage.addElem.click();
        await browser.pause(1000);
        //Click on it 4 more times - Add 5 elements.
        await AddElementPage.addElem.click();
        await AddElementPage.addElem.click();
        await AddElementPage.addElem.click();
        await AddElementPage.addElem.click();
        await browser.pause(1000);  
        //Verify that 5 elements have been added to the page.
        await expect(AddElementPage.delElemButtonCount).toBeElementsArrayOfSize(5);
    })
    it('Should delete 2 Elements and check that 3 remain', async () => {  
    //Try to delete the 5th and 4th element
        await AddElementPage.deleteElem5.click();
        await AddElementPage.deleteElem4.click();
        await browser.pause(3000);
        //Verify that 3 elements are remaining.
        
        await expect(AddElementPage.delElemButtonCount).toBeElementsArrayOfSize(3);
        await browser.pause(3000);
    })
})

//other solution: 
// const numElem = await $$('div[id="elements"] button')
// then check the array size
// await expect(numElem).toBeElementsArrayOfSize(3);