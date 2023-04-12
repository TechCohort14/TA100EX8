import CheckBoxPage from '../pageobjects/checkBoxes.page.js'

describe('My Check Boxes application', () => {
    it('Should check each box', async () => {
        //Start by navigatig to page        
        await CheckBoxPage.open();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        //Get check box 1 and click on it
        await (CheckBoxPage).checkBox1.click();
        //get the current true is selected; false is not selected
        let chkBox1Sel = await $("#checkboxes > input[type=checkbox]:nth-child(1)"); 
        //What is the value True or False?
        console.log("TRUE OR FALSE?", await chkBox1Sel.isSelected());
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);
        //Get check box 2 and click on it
        await (CheckBoxPage).checkBox2.click();
        //OPTIONAL: pause the screen so you can see what is happening
        await browser.pause(2000);

    })
})

