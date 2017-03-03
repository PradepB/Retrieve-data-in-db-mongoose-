    var express  = require('express');
    var app      = express();                    
    var mongoose = require('mongoose');           
    var morgan   = require('morgan');                
    var bodyParser = require('body-parser');        
    var path        =require('path');
    var router      =express.Router();
    var port        = process.env.PORT || 8000;         
    var techRoute   =require('./app/techroute')(router);

    app.use(express.static(__dirname + '/public'));                 
    app.use(morgan('dev'));                                        
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                   
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use('/techroute', techRoute);

    
    require('./app/routes.js')(app);
   // var tech=require('./app/techroute.js')(tech);


    mongoose.connect('mongodb://localhost:27017/tvs',function(err){
if(err){
     console.log('error to connecet database'+err);
}else{
    console.log('Database connected success');
}
});
 
app.get('*',function(req,res){
    res.sendfile(path.join(__dirname + '/public/js/index.html'));
})
    app.listen(port);
    console.log("App listening on port : " + port);


