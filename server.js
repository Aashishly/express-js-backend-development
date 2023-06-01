const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080;
const mainRouter = require('./routes/index');
const productRouter = require('./routes/products');
const ErrorHandler = require('./errors/ErrorHandler');

app.set('view engine', 'ejs');

// app.set('views', path.resolve(__dirname) + '/templates');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(mainRouter);
app.use(productRouter);

app.use((req, res, next) => {
    return res.json({Message: "page not found!"})
});


app.use((err, req, res, next) => {
    if(err instanceof ErrorHandler){

        res.status(err.status).json({
            error: {
                message: err.message,
                status: err.status
            }
        })
    }
    else{
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`)
});