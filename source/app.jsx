var React = require('react');
var ReactDOM = require('react-dom');

var h1 = <h1 className="header">This is React</h1>;
var p = <p className="content">And that's how it works.</p>;

var listOfItems = <ul className="list-of-items">
                    <li className="item-1">Item 1</li>
                    <li className="item-2">Item 2</li>
                    <li className="item-3">Item 3</li>
                    <li className="item-4">Item 4</li>
		  </ul>;

var reactFragment = [h1, p, listOfItems];
var section = React.createElement('section', { className: 'container', 
    key: 'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));
