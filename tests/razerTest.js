var razer ={}
//var required = require('../assets/razerAsset') 
var nameArray = [
    //Screen Size in inches
    "15","17","13",   
    //Screen Type
    "Full HD","OLED 4K","OLED 4K Touch",
    //Refresh Rate
    "60Hz","144Hz","300Hz","240Hz",
    //Processor
    "10th","9th", //10 and 11
    //Graphics
    "Geforce RTX 2070","Geforce RTX 2080 Super","Geforce GTX 1650 Ti","Geforce GTX 1660 Ti",
    "Geforce RTX 2060","Geforce RTX 2070 Super","Geforce RTX 2080","Quadro RTX 5000",
    //Storage
    "512","1TB","256",
    //Memory
    "16GB","32GB",
    //Color
    "Black","Mercury" //25 and 26
]
module.exports = {
    beforeEach: browser => {
        razer = browser.page.razerObjects()
        razer.navigate()
            .waitForElementVisible('@titleElement')
    },
    after: browser => {
        razer.end()
    },
    'Test Each Individual Filter': browser => {
        razer

    },
    'Test Multiple Filters of Different Sections': browser => {
        razer

    },


}