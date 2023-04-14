import CheckBoxPage from '../pageobjects/checkBoxes.page.js'

describe('My Check Boxes application', () => {
    it('Should check box 1', async () => {
        //Start by navigating to page        
        await CheckBoxPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        
        //Get check box 1 and click on it
        await (CheckBoxPage).checkBox1.click();

        //What is the value True or False?
        console.log("TRUE OR FALSE? LINE 14 OF CODE", await (CheckBoxPage).checkBox1.isSelected());
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);

    })

    it('Should check box 2', async () => {
        //Start by navigating to page        
        await CheckBoxPage.open();  
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        //Get check box 2 and click on it
        await (CheckBoxPage).checkBox2.click();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);

    })
})

