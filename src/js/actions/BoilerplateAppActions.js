var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/BoilerplateAppConstants');

var Actions = {
  loadSample: function(data){
    Dispatcher.handleAction({
      actionType: Constants.LOAD_SAMPLE,
      data: data
    })
  },
};

module.exports = Actions;
