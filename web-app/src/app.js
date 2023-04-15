const express = require('express');
const bodyParser = require('body-parser'); 

module.exports = function (
    {
        image
    }
) { 

    const app = express(); 
    app.use(bodyParser.json());

    app.use('/image', image);

    app.get('/', function (req, res) { 
        res.status(200).json({name: "alaa"})
    })

    app.get('/position', function(req, res){
        res.status(200).json( { 
            longitude: "11.232.445.34",
            latitude: "232.22.545.2"
        })
    })
    return app; 

}
