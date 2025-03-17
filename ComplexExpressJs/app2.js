const express = require('express')
const app = express();



// app2.js
const { products } = require('./data');  // Destructuring to only get products


//start a server

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products"> products</a>');
});




//Route for /api/products  to return all the products

app.get('/api/products',(req,res) =>
{
    res.json(products); // show all the products for /api/products
}
)

//TO dwell indvidual products

app.get('/api/products/:id', (req,res) =>{
    const {id} = req.params;
    const fetched_product = products.find(product => product.id === Number(id));
    {
        if (!fetched_product)
        {
                return res.status(404).json(
                    {
                        error:'Product not found'
                    }
                )
        }
        return res.json(fetched_product);
    }
})

app.listen(5000, () => {
    console.log('Server is starting at 5000!!!!');
});