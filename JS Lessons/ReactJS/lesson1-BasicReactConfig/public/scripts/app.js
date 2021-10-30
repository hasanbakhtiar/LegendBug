"use strict";

var root = document.querySelector('#root');
var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    'color': 'red'
  }
}, "Hello React"));
ReactDOM.render(temp, root);
