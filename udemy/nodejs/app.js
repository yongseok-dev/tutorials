const path = require('path')
const express = require('express')

const db = require('./util/database')

const app = express()
const product = require('./controllers/shop')
db.execute('SELECT * FROM products')
    .then((resurt)=>{
        console.log(resurt[0],resurt[1]);
    })
    .catch((err)=>{
        console.log(err);
    })

app.get('/',product.getIndex)
app.get('/save',product.postAddProduct)

app.listen(3000)