var razerCommands ={
    //Custom command that adds a filter
    clickFilter: function(filterName) {
        this.api.useXpath()
        this.click(`//span/span[text()="${filterName}"]`)
        this.waitForElementVisible(`//mat-chip/span[text()="${filterName}"]`)
        this.api.useCss()
        return this
    },
    //Custom command to check products match filter
    filterMatch: function(arrayName, filterName) {
        this.arrayName.forEach(product => {
            this.assert.containsText(product, filterName)
        }) 
    },
    //Custom command to verify that filters were cleared.
    filtersCleared: function() {
        this.click('@clearBtn')
        this.assert.containsText('@productNumber', '17 products')
        return this
    }
}

module.exports = {
    url: 'https://www.razer.com/shop/pc/gaming-laptop',
    commands: [razerCommands],
    elements: {
        titleElement: '[alt="Razer Logo"]',
        clearBtn: {
            selector: '//a[contains(text(),"Clear All")]',
            locateStrategy: 'xpath'
        },
        closeBtn: {
            selector: '//mat-icon[contains(text(),"close")]',
            locateStrategy: 'xpath'
        },
        productNumber: {
            selector: '//div[3]/p',
            locateStrategy: 'xpath'
        },
        

    }
}