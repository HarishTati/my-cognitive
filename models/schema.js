var mongoose = require('mongoose');
var user=mongoose.Schema({
  firstname: {
      type: String,
      required: true
  },

  

  email: {
      type: String,
      required: true
  },

  password: {
      type: String,
      required: true
  },
  number: {
      type: String,
      required: true
  },
})
var users=module.exports=mongoose.model('userdb',user);
module.exports.adduser=function(data,callback){
  users.create(data,callback);
}
module.exports.validate=function(data,callback){
  users.find(data,callback);
}
