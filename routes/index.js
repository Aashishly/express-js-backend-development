const router = require('express').Router();
const apiKeyMiddleWare = require('../middlewares/apiKey');


// router.use(apiKeyMiddleWare)

router.get((req, res) => {
    res.render('index', {
        title: 'My Home-Page'
    })
});

router.get('/',(req, res) => {
    res.render('index', {
        title: 'My Home-Page',
    })
});

router.get('/about',(req, res) => {
    res.render('about', {
        title: 'My About-Page',
    })
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'My Contact-Page',
    })
});

// router.get('/api/products', apiKeyMiddleWare, (req, res) =>{
//     res.json([
//         {
//             id: '1',
//             name: 'Chrome'
//         },
//         {
//             id: '2',
//             name: 'Firefox'
//         },
//     ])
// })

module.exports = router;