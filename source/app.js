var React = require('react');
var ReactDOM = require('react-dom');

var h1 = React.createElement("h1", {className: "header"}, "This is React");
var p = React.createElement("p", {className: "content"}, "And that's how it works.");

var listOfItems = React.createElement("ul", {className: "list-of-items"}, 
                    React.createElement("li", {className: "item-1"}, "Item 1"), 
                    React.createElement("li", {className: "item-2"}, "Item 2"), 
                    React.createElement("li", {className: "item-3"}, "Item 3"), 
                    React.createElement("li", {className: "item-4"}, "Item 4")
		  );

var reactFragment = [h1, p, listOfItems];
var section = React.createElement('section', { className: 'container', 
    key: 'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));
