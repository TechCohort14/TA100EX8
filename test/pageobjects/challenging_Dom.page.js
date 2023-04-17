import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChallDomPage extends Page {

/**
     * define selectors using getter methods
     */
//Define selector for link at bottom of page
get link () {
    return $('#page-footer > div > div > a');
}
//Define selector for part link at bottom of page
get partLink () {
    return $('*=Selenium');
}
get appText (){
    return $('//tbody/tr[1]/td[2]')
}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('challenging_dom');
    }
}

export default new ChallDomPage();