var Techuser=require('./model/user');
module.exports=function(router){
       router.post('/api/TechniData', function (req, res) {
  console.log(req.body);
    Techuser.create(req.body, function(err, doc) {
    res.json(doc);
  });
});

}