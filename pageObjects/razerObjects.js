var razerCommands ={
    loadProductPage: function() {
        this.click('@agreeBtn')
        this.click('@navProducts1')
        this.click('@navProducts2')
        this.waitForElementVisible('@shopPageTitle')
        this.click('@shopLaptops')
        return this
    },
    clickDrop: function(dropFilterName,) {
        this.api.useXpath()
        this.click(`//span[contains(text(),"${dropFilterName}")]`)
        this.pause(500)  
        return this  
    },
    //Custom command that adds a filter
    clickFilter: function(filterName) {
        var self = this
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
        closeBtn: {
            selector: '//mat-icon[contains(text(),"close")]',
            locateStrategy: 'xpath'
        },
        popUpClose: '.icon-close',     
    }
}