const ErrorHandler = require("../errors/ErrorHandler");

function apiKey(req, res, next){
    const api_key = '1234567';
    console.log(req.query.api_key);

    if(req.query.api_key && req.query.api_key === api_key){

        next();
    }
    else{
        next(ErrorHandler.forbiddenError('API key is not valid!'))
        // res.json({message : 'Not Available'}); 
    }
}


module.exports = apiKey;