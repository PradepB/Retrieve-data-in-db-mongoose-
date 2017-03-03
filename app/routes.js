var User = require('./model/user');

module.exports=function(app){
        app.get('/api/usersData', function(req, res) {        
        User.find(function(err, users) {            
            if (err)
                res.send(err)

            res.json(users);
        });
    });
};


