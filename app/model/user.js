var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var DealerSchema=new Schema({
    // LoginUserName:{type:String,required:true,unique:true},
    // FirstName:{type:String,required:true},
    // LastName:{type:String,required:true},
    // DealerCode:{type:String,require:true},
    // Town:{type:String,required:true},
    // Territory:{type:String,required:true},
    // Area:{type:String,required:true}
    
},
{
        collection:'doc_users',
    }
);

module.exports = mongoose.model('Dealer', DealerSchema);    


var TechniSchema =new Schema({
    AadharCardNo:{type:String,required:true},
    TechnicianName:{type:String,required:true},
    DateOfBirth:{type:Date,required:true},
    PhoneNumber:{type:String,required:true},
    EmailAddress:{type:String,required:true},
    Address:{type:String,required:true},
    TechnicianEmpCode:{type:String,required:true},
    Experience:{type:String,required:true},
    Designation:{type:String,required:true},
    DateOfJoining:{type:Date,required:true},
    TechinicianPhoto:{type:String,required:true},
},

{
    collection:'doc_Technician',
}
);
module.exports=mongoose.model('techni',TechniSchema);