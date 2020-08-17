/* This asset file is for choosing a filter and
verifying that it is filtering out the product page 
to only have the specific product with its specifications */

module.exports = (pageObject, arrayName) => {
    arrayName.forEach(item => {
        for(let i = 0; i < item.filters.length; i++) {
            pageObject
                .pause(500)
                .clickDrop(item.drop)
                .clickFilter(item.filters[i])
                .click('@closeBtn')
                .pause(500)  
            }

    })
}