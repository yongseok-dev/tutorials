const db = require('../util/database')
module.exports = class Product{
    constructor(id, title, imageUrl, description, price){
        this.id = id
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save(){
        let sql = `INSERT INTO products 
                (title, imageUrl, description, price) VALUES (?, ?, ?, ?)`
        let values = [this.title, this.imageUrl, this.description, this.price]
        return db.execute(sql,values)
    }
    
    static deletById(id){
        
    }
    
    static fetchAll(){
        return db.execute('SELECT * FROM products')
    }
    
    static findById(id){
        
    }
}