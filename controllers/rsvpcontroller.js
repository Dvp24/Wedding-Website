const db = require("../models"); //importing models 


// exporting the entire module
// defining methods
module.exports = {

  findAll: function(req,res){
    db.rsvp
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

}


