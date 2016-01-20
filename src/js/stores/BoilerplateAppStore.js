var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/BoilerplateAppConstants');
var _ = require('lodash');

// Define initial data points
var _data = {};

function setData(data){
  _data = data;
}


// Extend Cart Store with EventEmitter to add eventing capabilities
var Store = _.extend({}, EventEmitter.prototype, {

  getData: function(){
    return _data;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
Dispatcher.register(function(payload) {
  var action = payload.action;
  var text;
  console.log(action);
  switch(action.actionType) {
    case Constants.LOAD_SAMPLE:
      setData(action.data)
      break;
    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;
