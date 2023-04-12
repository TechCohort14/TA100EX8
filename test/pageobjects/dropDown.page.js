import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropDownPage extends Page {

/**
     * define selectors using getter methods
     */
    //Since its a drop down you first have to open the options. 
    get dDownOptions () {
        return $('#dropdown')
    }

        //This is using the copy selector 
    get dropDown1 () {
        return $('#dropdown > option:nth-child(2)');
        }
        //This is using the copy FULL xPath /html/body/div[2]/div/div/select/option[3]
        // //*[@id="dropdown"]/option[3] 
        //it was abbreviated to //select/option[3] 
    get dropDown2 () {
        return $('//select/option[3]');
        }

     /**
     * overwrite specific options to adapt it to page object this will tell it where to navigate
     */
     open () {
        return super.open('dropdown');
    }
}

export default new DropDownPage();