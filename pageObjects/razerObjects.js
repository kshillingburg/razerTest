var razerCommands ={
    loadProductPage: function() {
        this.click('@agreeBtn')
        this.click('@navProducts1')
        this.click('@navProducts2')
        this.waitForElementVisible('@shopPageTitle')
        this.click('@shopLaptops')
        return this
    },
    //Custom command that adds a filter
    clickFilter: function(dropFilterName,filterName) {
        var self = this
        this.click(dropFilterName)
        this.pause(500)
        this.api.useXpath()
        this.click(`//span[contains(text(),"${filterName}")]`) 
        this.api.useCss()    
        this.pause(3000)
        this.api.element("css selector",'.modal-content', function(visible) {       
            /* During the first few filterings there is a 
            popup that blocks the page, this will cause an 
            error message in the code, but it is unavoidable.*/ 
            if(visible.status ===0) {
                self.click('i.icon-close')
                self.pause(500)
            } 
            else {
                if(filterName=== "Black "){
                    filterName = "Black"
                    self.api.useXpath()
                    self.waitForElementVisible(`//mat-chip/span[(text()="${filterName}")]`)
                    self.api.useCss()
                }
                else {
                    self.api.useXpath()
                    self.waitForElementVisible(`//mat-chip/span[(text()="${filterName}")]`)
                    self.api.useCss()
                }
            }
        })
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
    url: 'https://www.razer.com/',
    commands: [razerCommands],
    elements: {
        titleElement: '[alt="Razer Logo"]',
        agreeBtn: '.button-primary-outline-green',
        navProducts1: {
            selector:'//span[contains(text(), "Products")]',
            locateStrategy: 'xpath'
        },
        navProducts2: {
            selector: '//span[contains(text(),"PC Accessories")]',
            locateStrategy: 'xpath'
        },
        shopPageTitle: {
            selector: '//h1[contains(text(),"PC")]',
            locateStrategy: 'xpath'
        },
        shopLaptops: '[href="/shop/pc/gaming-laptops"]',
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
        popUpClose: '.icon-close',
        //Filter drop down titles
        dropScreenSize: {
            selector: '//span[contains(text(), "Screen Size")]',
            locateStrategy: 'xpath'
        },
        dropScreenType: {
            selector: '//span[contains(text(), "Screen Type")]',
            locateStrategy: 'xpath'
        },
        dropRefresh: {
            selector: '//span[contains(text(), "Refresh Rate")]',
            locateStrategy: 'xpath'
        },
        dropProcessor: {
            selector: '//span[contains(text(), "Processor")]',
            locateStrategy: 'xpath'
        },
        dropGraphics: {
            selector: '//span[contains(text(), "Graphics")]',
            locateStrategy: 'xpath'
        },
        dropStorage: {
            selector: '//span[contains(text(), "Storage")]',
            locateStrategy: 'xpath'
        },
        dropMemory: {
            selector: '//span[contains(text(), "Memory")]',
            locateStrategy: 'xpath'
        },
        dropColor: {
            selector: '//span[contains(text(), "Color")]',
            locateStrategy: 'xpath'
        },
        

    }
}