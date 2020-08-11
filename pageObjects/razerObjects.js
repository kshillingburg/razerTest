var razerCommands ={
    clickFilter: function(filterName) {
        this.api.useXpath()
        this.click(`//span/span[text()="${filterName}"]`)
        this.waitForElementVisible(`//mat-chip/span[text()="${filterName}"]`)
        this.api.useCss()
        return this
    },
    closeFilter: function(num) {
        this.api.useXpath()
        this.click('//mat-icon[contains(text(),"close")]')[num]
        this.api.useCss()
        return this
    }
}

module.exports = {
    url: 'https://www.razer.com/shop/pc/gaming-laptop',
    commands: [razerCommands],
    elements: {
        clearBtn: {
            selector: ('//a[contains(text(),"Clear All")]'),
            locateStrategy: 'xpath'
        },
        

    }
}