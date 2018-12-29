const db = require("../models"); //importing models 


// exporting the entire module
// defining methods
module.exports = {

  findAll: function(req,res){
    db.rsvp
    .find(req.query)

  }

}

