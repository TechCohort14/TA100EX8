import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddElementPage extends Page {

/**
     * define selectors using getter methods
     */
        //This is using the copy selector to get the first AddElement
        
    get addElem () {
        return $('#content > div > button');
        }
    // Delete can only be done after adding an element
       //#elements > button:nth-child(5)
    
    get deleteElem () {
        return $(`div[id="elements"] button`);
        } 
    // You could delete a particluar button    
    // get deleteElem4 () {
    //     return $(`#elements > button:nth-child(4)`);
    //     }
    //Get the Array of Buttons    
    get delElemButtonCount () {
            //$$ returns an array
            return $$(`div[id="elements"] button`);
            }      
                
     /**
     * overwrite specific options to adapt it to page object this will tell it where to navigate
     */
     open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddElementPage();

//Possible solutions
// get deleteElem (nth) {
    //     return $(`#elements > button:nth-child(${nth})`);
    //     } 
// Improving code? Since you have several childs, try to pass a variable to determine which you will delete
