//Main bootstrapping file.
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.react');
var BoilerplateAppApi = require('./data/BoilerplateAppApi');

//Initially, load any data here.
BoilerplateAppApi.load(function(data){
  console.log(data);
});

ReactDOM.render(
  <App />,
  document.getElementById('app-mount')
);
