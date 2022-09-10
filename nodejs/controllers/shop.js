const Product = require("../models/product")

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
    .then(([rows,fieldData])=>{
        console.log(rows);
        res.send(`ab${JSON.stringify(rows)}`)
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(null, 1,2,3,4)
    product.save()
    .then(()=>{
        console.log('insert');
        res.redirect('/')
    })
    .catch(err => {
        console.log(err);
    })
    
}