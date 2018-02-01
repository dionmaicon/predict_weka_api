'use strict';
module.exports = (app) => {
  var j48Controller = require('../controllers/j48Controller');
  app.route('/j48')
    .get(j48Controller.get_status_server)
    .post(j48Controller.realize_prediction_with_model);
  app.route( '/j48/:historyId')
    .get(j48Controller.read_a_history)
    .put(j48Controller.update_a_history)
    .delete(j48Controller.delete_a_history);
};
