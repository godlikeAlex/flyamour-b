(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module');

console.log('admin run');

},{"./module":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var second = function() {
//   console.log('works Second module!');
// };
// var first = function() {
//   console.log('works Second module!!!');
// };

// module.exports = {
//   func1: first,
//   func2: second
// };

var sum = function sum(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

var square = function square(b) {
  return b * b;
};

var variable = 8;

/**
 * 
 * 
 * @class MyClass
 */

var MyClass = function () {
  function MyClass(credentials) {
    _classCallCheck(this, MyClass);

    this.name = credentials.name;
    this.enrollmentNo = credentials.enrollmentNo;
  }

  _createClass(MyClass, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return MyClass;
}();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}]},{},[1])

//# sourceMappingURL=maps/admin.js.map
