'use strict';
module.exports = function(app){
    var ispList = require('../controllers/ispListController');


    app.route('/isp')
    .get(ispList.list_all_isp)
    .post(ispList.create_an_isp);


    app.route('/isp/:ispId')
     .get(ispList.read_an_isp)
     .put(ispList.update_an_isp)
     .delete(ispList.delete_an_isp)

}