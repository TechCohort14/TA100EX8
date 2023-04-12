import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckBoxPage extends Page {

/**
     * define selectors using getter methods
     */
        //This is using the copy selector 
    get checkBox1 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(1)');
        }
        //This is using the copy xPath /html/body/div[2]/div/div/form/input[2] 
        //it was abbreviated to //form/input[2] 
    get checkBox2 () {
        return $('//form/input[2]');
        }

     /**
     * overwrite specific options to adapt it to page object this will tell it where to navigate
     */
     open () {
        return super.open('checkboxes');
    }
}

export default new CheckBoxPage();