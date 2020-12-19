'use strict';

var mongoose = require('mongoose'),
    Isp = mongoose.model('ISP');

exports.list_all_isp = function(req,res) {
    console.log('sass')
    Isp.find({}, function(err, isp){
        if (err)
            
            res.send(err);
        res.json(isp);
    })
}


exports.create_an_isp = function(req, res){
    var new_isp = new Isp(req.body);
    console.log(req.body)
    new_isp.save(function(err, isp){
        if (err)
         res.send(err);
        res.json(isp);
    })
}


exports.read_an_isp = function(req, res){
    Isp.findById(req.params.ispId, function(err, isp){
        if (err)
         res.send(err);
        res.json(isp)
    })
}


exports.update_an_isp = function(req, res){
    Isp.findOneAndUpdate({ _id: req.params.ispId }, req.body, {new: true}, function(err, isp){
        if (err)
            res.send(err);
        res.json(isp);
    })
}



exports.delete_an_isp = function (req, res){
   Isp.remove({
       _id: req.params.ispId
   },
   function(err,isp){
       if(err)
        res.send(err);
        res.json({ message: "ISP deleted"})
   })

}