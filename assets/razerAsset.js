/* This asset file is for choosing a filter and
verifying that it is filtering out the product page 
to only have the specific product with its specifications */

module.exports = (pageObject, objectName) => {
    pageObject
        .clickFilter(objectName)
        
}