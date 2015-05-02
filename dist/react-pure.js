(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactPure"] = factory(require("react"));
	else
		root["ReactPure"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _Button = __webpack_require__(1);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Cell = __webpack_require__(2);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Menu = __webpack_require__(3);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(4);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Table = __webpack_require__(5);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	exports['default'] = { Button: _Button2['default'], Cell: _Cell2['default'], Menu: _Menu2['default'], MenuItem: _MenuItem2['default'], Table: _Table2['default'] };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _React = __webpack_require__(6);
	
	var _React2 = _interopRequireDefault(_React);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var PureButton = (function (_React$Component) {
	    function PureButton() {
	        _classCallCheck(this, PureButton);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(PureButton, _React$Component);
	
	    _createClass(PureButton, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var href = _props.href;
	            var active = _props.active;
	            var disabled = _props.disabled;
	            var primary = _props.primary;
	
	            var props = _objectWithoutProperties(_props, ['className', 'href', 'active', 'disabled', 'primary']);
	
	            var cls = _classNames2['default']('pure-button', className, active && 'pure-button-active', disabled && 'pure-button-disabled', primary && 'pure-button-primary');
	
	            return href ? _React2['default'].createElement('a', _extends({ href: href, className: cls }, props)) : _React2['default'].createElement('button', _extends({ className: cls, disabled: disabled }, props));
	        }
	    }]);
	
	    return PureButton;
	})(_React2['default'].Component);
	
	exports['default'] = PureButton;
	
	PureButton.propTypes = {
	    active: _React2['default'].PropTypes.bool,
	    disabled: _React2['default'].PropTypes.bool,
	    primary: _React2['default'].PropTypes.bool
	};
	
	PureButton.defaultProps = {
	    active: false,
	    disabled: false,
	    primary: false
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _React = __webpack_require__(6);
	
	var _React2 = _interopRequireDefault(_React);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var normalizeSize = function normalizeSize() {
	    var s = arguments[0] === undefined ? '' : arguments[0];
	    return s.toString().replace('/', '-');
	};
	
	var PureCell = (function (_React$Component) {
	    function PureCell() {
	        _classCallCheck(this, PureCell);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(PureCell, _React$Component);
	
	    _createClass(PureCell, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var size = _props.size;
	            var sm = _props.sm;
	            var md = _props.md;
	            var lg = _props.lg;
	            var xl = _props.xl;
	
	            var props = _objectWithoutProperties(_props, ['className', 'size', 'sm', 'md', 'lg', 'xl']);
	
	            var cls = _classNames2['default']('pure-u-' + normalizeSize(size), sm && 'pure-u-sm-' + normalizeSize(sm), md && 'pure-u-md-' + normalizeSize(md), lg && 'pure-u-lg-' + normalizeSize(lg), xl && 'pure-u-xl-' + normalizeSize(xl), className);
	
	            return _React2['default'].createElement('div', _extends({ className: cls }, props));
	        }
	    }]);
	
	    return PureCell;
	})(_React2['default'].Component);
	
	exports['default'] = PureCell;
	
	PureCell.propTypes = {
	    size: _React2['default'].PropTypes.string,
	    sm: _React2['default'].PropTypes.string,
	    md: _React2['default'].PropTypes.string,
	    lg: _React2['default'].PropTypes.string,
	    xl: _React2['default'].PropTypes.string
	};
	
	PureCell.defaultProps = {
	    size: '1'
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _React = __webpack_require__(6);
	
	var _React2 = _interopRequireDefault(_React);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var PureMenu = (function (_React$Component) {
	    function PureMenu() {
	        _classCallCheck(this, PureMenu);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(PureMenu, _React$Component);
	
	    _createClass(PureMenu, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var horizontal = _props.horizontal;
	            var scrollable = _props.scrollable;
	
	            var props = _objectWithoutProperties(_props, ['className', 'horizontal', 'scrollable']);
	
	            var cls = _classNames2['default']('pure-menu', className, horizontal && 'pure-menu-horizontal', scrollable && 'pure-menu-scrollable');
	
	            return _React2['default'].createElement('div', _extends({ className: cls }, props));
	        }
	    }]);
	
	    return PureMenu;
	})(_React2['default'].Component);
	
	exports['default'] = PureMenu;
	
	PureMenu.propTypes = {
	    horizontal: _React2['default'].PropTypes.bool,
	    scrollable: _React2['default'].PropTypes.bool
	};
	
	PureMenu.defaultProps = {
	    horizontal: false,
	    scrollable: false
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _React = __webpack_require__(6);
	
	var _React2 = _interopRequireDefault(_React);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var PureMenuItem = (function (_React$Component) {
	    function PureMenuItem() {
	        _classCallCheck(this, PureMenuItem);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(PureMenuItem, _React$Component);
	
	    _createClass(PureMenuItem, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var allowHover = _props.allowHover;
	            var className = _props.className;
	            var disabled = _props.disabled;
	            var hasChildren = _props.hasChildren;
	            var selected = _props.selected;
	
	            var props = _objectWithoutProperties(_props, ['allowHover', 'className', 'disabled', 'hasChildren', 'selected']);
	
	            var cls = _classNames2['default']('pure-menu-item', className, allowHover && 'pure-menu-allow-hover', disabled && 'pure-menu-disabled', hasChildren && 'pure-menu-has-children', selected && 'pure-menu-selected');
	
	            return _React2['default'].createElement('li', _extends({ className: cls }, props));
	        }
	    }]);
	
	    return PureMenuItem;
	})(_React2['default'].Component);
	
	exports['default'] = PureMenuItem;
	
	PureMenuItem.propType = {
	    allowHover: _React2['default'].PropTypes.bool,
	    disabled: _React2['default'].PropTypes.bool,
	    hasChildren: _React2['default'].PropTypes.bool,
	    selected: _React2['default'].PropTypes.bool
	};
	
	PureMenuItem.defaultProps = {
	    allowHover: false,
	    disabled: false,
	    hasChildren: false,
	    selected: false
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _React = __webpack_require__(6);
	
	var _React2 = _interopRequireDefault(_React);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var PureTable = (function (_React$Component) {
	    function PureTable() {
	        _classCallCheck(this, PureTable);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(PureTable, _React$Component);
	
	    _createClass(PureTable, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var bordered = _props.bordered;
	            var horizontal = _props.horizontal;
	            var striped = _props.striped;
	
	            var props = _objectWithoutProperties(_props, ['className', 'bordered', 'horizontal', 'striped']);
	
	            var cls = _classNames2['default']('pure-table', className, bordered && 'pure-table-bordered', horizontal && 'pure-table-horizontal', striped && 'pure-table-striped');
	
	            return _React2['default'].createElement('table', _extends({ className: cls }, props));
	        }
	    }]);
	
	    return PureTable;
	})(_React2['default'].Component);
	
	exports['default'] = PureTable;
	
	PureTable.propTypes = {
	    bordered: _React2['default'].PropTypes.bool,
	    horizontal: _React2['default'].PropTypes.bool,
	    striped: _React2['default'].PropTypes.bool
	};
	
	PureTable.defaultProps = {
	    bordered: false,
	    horizontal: false,
	    striped: false
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
	
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-pure.js.map