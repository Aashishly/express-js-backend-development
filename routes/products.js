const router = require('express').Router();
const ErrorHandler = require('../errors/ErrorHandler');
const apiKeyMiddleWare = require('../middlewares/apiKey');
let products = require('../productData');

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'My Product Page',
    });
});

router.get('/api/products', (req, res) => {
    res.json(products)
});

router.post('/api/products', apiKeyMiddleWare, (req, res, next) => {

    // try{
    //     console.log(city)
    // } catch(err){
    //     throw new Error('yeh kya kar raha h bhai!');
    // }

    const {name, price} = req.body;

    if(!name || !price){
        next(ErrorHandler.validationError('Name and Price fields are required!'));
        // throw new Error('All fields are required');
        // return res.status(422).json({error: 'All fields are required.'})
    }

    const newProduct = {
        id: new Date().getTime().toString(),
        name,
        price,
    }

    products.push(newProduct);
    res.json(newProduct);
});

router.delete('/api/products/:productID', (req, res) => {
    products = products.filter((product)=>req.params.productID !== product.id);
    res.json(products)
});

module.exports = router;