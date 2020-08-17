var razer ={}
var filterAssets = require('../assets/razerAsset') 
var dropArray = [
    {"drop": 'Screen Size',
    "filters": ["15 inch","17 inch","13 inch"]},
    {"drop":'Screen Type',
    "filters": ['',"Full HD","4K Touch","OLED 4K","OLED 4K Touch"]},
    {'drop': 'Refresh Rate',
    "filters": ["60Hz","300Hz","144Hz","120Hz","240Hz"]},
    {"drop": 'Processor',
    "filters": ["10th Gen Intel® Core™ i7","9th Gen Intel® Core™ i7"]},
    {"drop":'Graphics',
    "filters": ["GeForce RTX 2070 Max-Q","GeForce RTX 2080 Super Max-Q","GeForce GTX 1650 Ti Max-Q","GeForce GTX 1660 Ti","GeForce RTX 2060","GeForce RTX 2070 Super Max-Q","Quadro RTX 5000"]},
    {"drop": 'Storage',
    "filters": ["512 SSD","1TB SSD","256 SSD"]},
    {"drop": 'Memory',
    "filters": ["16GB" ,"32GB"]},
    {"drop":'Color',
    "filters": ["Black ","Mercury"]},
    {"drop": 'Keyboard Type',
    "filters": ["Per key RGB","Single-zone RGB"]},
    {"drop": 'Studio Edition',
    "filters": ["Studio Edition - No","Studio Edition - Yes"]}
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
            filterAssets(razer,dropArray)
            
    }
}