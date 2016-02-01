var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  render: function() {
    if (this.props.isHidden) {
      return null;
    }
    var header = this.props.tweets.length + ' Latest tweets';
    return React.createElement('h1', { className: 'header' }, header);
  }
});

var reactComponentElement = React.createElement(ReactClass, {isHidden: false, tweets: ['one','two']});
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
