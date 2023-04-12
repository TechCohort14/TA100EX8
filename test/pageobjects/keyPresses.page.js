import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KeyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */
    //Select the 
    get keyPressInput() {
        return $('#target');
     }
    //This lets you know what was entered via "keyboard"
    get keyPressResult() {
        return $('#result');
    }
    // This allows you to input keyboard values 
    async pressAkey (input) {
        await this.keyPressInput.setValue(input);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('key_presses');
    }
}

export default new KeyPressesPage();