const checkApiKey = (req, res, next) => {
    const apiKey = req.query.api_key;
  
    if (!apiKey || apiKey !== '1111') {
      return res.status(403).send( '403 Forbidden' );
    }

    next();
};


module.exports ={
    checkApiKey: checkApiKey
};