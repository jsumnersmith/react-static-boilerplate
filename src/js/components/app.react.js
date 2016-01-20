var React = require('react');

// Define main Controller View
var App = React.createClass({

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="rb-app rt-grid">
        <div className="rb-col-12">
          <p>My App</p>
        </div>
      </div>
  	);
  }
});

module.exports = App;
