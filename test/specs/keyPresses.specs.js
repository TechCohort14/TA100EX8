import KeyPressesPage from '../pageobjects/keyPresses.page.js';

describe('My Key Press application', () => {
    it('Should display the letter A when entered into the input', async () => {
        //Start by navigating to page
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('A');
        //It will only show that last key that was entered 
        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: A');
        //optional viewing of browser    
        await browser.pause(2000);    
    });
    it('Should display the letter B when entered into the input', async () => {
       //Start by navigating to page
        await KeyPressesPage.open();
        
        await KeyPressesPage.pressAkey('B');
        //It will only show that last key that was entered
        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: B');
         //optional viewing of browser    
        await browser.pause(2000);    
    });    
});
