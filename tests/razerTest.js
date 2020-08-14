var razer ={}
var filterAssets = require('../assets/razerAsset') 
var dropArray = [
    '@dropScreenSize',
    '@dropScreenType',
    '@dropRefresh',
    '@dropProcessor',
    '@dropGraphics',
    '@dropStorage',
    '@dropMemory',
    '@dropColor',
]
var arraySize = [
    //Screen Size in inches
    "15 inch","17 inch","13 inch" 
]
var arrayType = [   
    //Screen Type
    /*first place in the array is a skip that occurs 
    during the popup interruption. Will cause error at
    the end. Please ignore*/
    '',"Full HD","4K Touch","OLED 4K","OLED 4K Touch" 
]
var arrayRefresh = [
    //Refresh Rate
    "60Hz","300Hz","144Hz","120Hz","240Hz"
]
//Processor filter selectors refused to comply.
var arrayProcessor = [
    //Processor
    "10th Gen Intel® Core™ i7","9th Gen Intel® Core™ i7"
]
var arrayGraphics = [
    //Graphics
    "GeForce RTX 2070 Max-Q","GeForce RTX 2080 Super Max-Q","GeForce GTX 1650 Ti Max-Q","GeForce GTX 1660 Ti",
    "GeForce RTX 2060","GeForce RTX 2070 Super Max-Q","GeForce RTX 2080 Max-Q","Quadro RTX 5000"
]
var arrayStorage = [
    //Storage
    "512 SSD","1TB SSD","256 SSD"
]
var arrayMemory = [
    //Memory
    "16GB" ,"32GB"
]
var arrayColor = [
    //Color
    "Black ",
    "Mercury"
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
            .loadProductPage()
            var count = 0
            filterAssets(razer, arraySize, dropArray[count])
            count++
            filterAssets(razer, arrayType, dropArray[count])
            count++
            filterAssets(razer, arrayRefresh, dropArray[count])
            count++
            filterAssets(razer, arrayProcessor, dropArray[count])
            count++
            filterAssets(razer, arrayGraphics, dropArray[count])
            count++
            filterAssets(razer, arrayStorage, dropArray[count])
            count++
            filterAssets(razer, arrayMemory, dropArray[count])
            count++
            filterAssets(razer, arrayColor, dropArray[count])
    },
    // 'Test Multiple Filters of Different Sections': browser => {
    //     razer

    // },


}