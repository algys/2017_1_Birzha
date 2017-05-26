/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseView = function () {
    function BaseView(node) {
        _classCallCheck(this, BaseView);

        this.node = node;
        this.node.hidden = true;
    }

    /**
     * Метод показывает view
     */


    _createClass(BaseView, [{
        key: "show",
        value: function show() {
            this.node.hidden = false;
            this.node.style.display = "contents";
        }
    }, {
        key: "hide",
        value: function hide() {
            this.node.hidden = true;
            // this.node.style.display = "none";
        }
    }]);

    return BaseView;
}();

exports.default = BaseView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function () {
    function Button(options) {
        _classCallCheck(this, Button);

        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement('button');
    }

    _createClass(Button, [{
        key: 'setAttrs',
        value: function setAttrs(attrs) {
            var _this = this;

            Object.keys(attrs).forEach(function (name) {
                _this.el.setAttribute(name, attrs[name]);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.innerHTML = this.text;
            this.el.classList.add('button');
            this.setAttrs(this.attrs);
            return this;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.el.outerHTML;
        }
    }, {
        key: 'getText',
        value: function getText() {
            var text = this.text;
            return text;
        }
    }]);

    return Button;
}();

exports.default = Button;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tower = function () {
    function Tower(world, pointX, pointY, typeOfTower, units) {
        _classCallCheck(this, Tower);

        this.world = world;
        this.pointX = pointX; // TODO to normal
        this.pointY = pointY;

        var pxPoint = this.world.area.getPixelPoint(pointX, pointY);
        this.realX = pxPoint.x;
        this.realY = pxPoint.y;

        this.typeOfTower = typeOfTower;
        this.userColor = null;

        this.cache = null;

        this.units = units;

        this._parentNode = null;
        this._client_id = null;
    }

    _createClass(Tower, [{
        key: "changeUnits",
        value: function changeUnits(units) {
            this.units = units;
            this.cache.text.text = units;
            this.world.update();
        }
    }, {
        key: "refreshTower",
        value: function refreshTower(towerType, newUnits, client_id) {
            this.world.map.removeChild(this.cache.circle);
            this.world.map.removeChild(this.cache.text);

            this.cache = null; // TODO maybe some remove?

            this.typeOfTower = towerType;
            this.units = newUnits;
            this._parentNode = null;
            this._client_id = client_id;
        }
    }, {
        key: "decUnits",
        value: function decUnits(value) {
            this.units -= value;
        }
    }, {
        key: "setPerforming",
        value: function setPerforming(flag) {

            if (this.cache === null) return;

            var style = this.getStyle();
            if (flag) Tower.setShapeTower(this.cache.circle.graphics, style.color, true);else {
                Tower.setShapeTower(this.cache.circle.graphics, style.color, style.fill);
            }
        }
    }, {
        key: "getStyle",
        value: function getStyle() {
            var color = null;
            var fill = null;

            switch (this.typeOfTower) {
                case towerType.DEFAULT:
                    color = this.userColor;
                    fill = false;
                    break;
                case towerType.BONUS:
                    color = "#cccccc";
                    fill = true;
                    break;
                case towerType.ENEMY:
                    color = this.userColor;
                    fill = false;
                    break;
                default:
                    console.log("wtf!!");
                    return;
            }

            return {
                color: color,
                fill: fill
            };
        }
    }, {
        key: "draw",
        value: function draw() {
            var style = this.getStyle();
            this.drawStandartImpl(style.color, style.fill);
        }
    }, {
        key: "setRealCoordinates",
        value: function setRealCoordinates(x, y) {
            var pxPoint = this.world.area.getPixelPoint(x, y);
            this.realX = pxPoint.x;
            this.realY = pxPoint.y;
        }
    }, {
        key: "setCell",
        value: function setCell(pointX, pointY) {
            this.pointX = pointX;
            this.pointY = pointY;
        }
    }, {
        key: "setTextCoordinates",
        value: function setTextCoordinates(x, y) {
            if (this.cache == null) return;

            this.cache.text.x = x;
            this.cache.text.y = y;

            if (this.units) this.cache.text.text = this.units;
        }
    }, {
        key: "setTowerCoordinates",
        value: function setTowerCoordinates(x, y) {
            if (this.cache === null) return;

            this.cache.circle.x = x;
            this.cache.circle.y = y;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            if (this.cache) {
                this.world.map.removeChild(this.cache.circle);
                this.world.map.removeChild(this.cache.text);
                this.world.area.markSelectedCell(this.pointX, this.pointY, false);
                this.world.removeTowerFromMap({ x: this.pointX, y: this.pointY });
            }
        }
    }, {
        key: "drawStandartImpl",
        value: function drawStandartImpl(color, fill) {
            if (this.cache === null) {
                this.cache = {};

                var shape = new createjs.Shape();
                Tower.setShapeTower(shape.graphics, color, fill);

                this.cache.circle = shape;

                this.cache.text = new createjs.Text(this.units, "20px Arial", "#ff7700");
                this.cache.text.textBaseline = "middle";
                this.cache.text.textAlign = "center";

                this.setTextCoordinates(this.realX, this.realY);
                this.setTowerCoordinates(this.realX, this.realY);

                this.world.appendOnMap(this.cache.circle);
                this.world.appendOnMap(this.cache.text);
            }

            this.setTextCoordinates(this.realX, this.realY);
            this.setTowerCoordinates(this.realX, this.realY);
            this.world.update();
        }
    }, {
        key: "setUserColor",
        value: function setUserColor(color) {
            this.userColor = color;
        }
    }, {
        key: "parentNode",
        get: function get() {
            return this._parentNode;
        },
        set: function set(value) {
            this._parentNode = value;
        }
    }, {
        key: "client_id",
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            this._client_id = value;
        }
    }, {
        key: "point",
        get: function get() {
            return {
                x: this.pointX,
                y: this.pointY
            };
        }
    }], [{
        key: "setShapeTower",
        value: function setShapeTower(graphics, color, fill) {
            if (fill) graphics.clear().beginFill(color).drawCircle(0, 0, conf.radiusTower);else graphics.clear().setStrokeStyle(3).beginStroke(color).drawCircle(0, 0, conf.radiusTower);
        }
    }]);

    return Tower;
}();

exports.default = Tower;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router(node) {
        _classCallCheck(this, Router);

        this.node = node;
        this.routes = {};
    }

    _createClass(Router, [{
        key: 'register',
        value: function register(route, view) {
            this.routes[route] = view;
        }
    }, {
        key: '_getViewByRoute',
        value: function _getViewByRoute(href) {
            return this.routes[href];
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            for (var index in this.routes) {
                this.routes[index].hide();
            }

            delete this.routes;
        }
    }, {
        key: 'setRouterPack',
        value: function setRouterPack(pack) {
            this.destruct();

            this.routes = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = pack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var viewController = _step.value;

                    this.register(viewController.path, viewController.generator());
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'updateNewPackToIndex',
        value: function updateNewPackToIndex(pack) {
            this.setRouterPack(pack);

            this.currentView = this._getViewByRoute('/');
            this.startPage('/');
        }
    }, {
        key: 'onRouteChange',
        value: function onRouteChange(event) {
            if (!event.target instanceof HTMLAnchorElement) {
                return;
            }

            var nextHref = event.target.getAttribute('href');
            if (nextHref && this.go(nextHref)) event.preventDefault();
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            this.node.addEventListener('click', function (event) {
                return _this.onRouteChange(event);
            });

            this.currentView = this._getViewByRoute(location.pathname);
        }
    }, {
        key: 'go',
        value: function go(path) {
            if (path === '') path = '/';

            if (path === '/back') {
                window.history.back();
                return true;
            }

            var view = this._getViewByRoute(path);

            if (!path) view = this._getViewByRoute('/'); // TODO 404

            if (!view) {
                view = this.routes['/'];
                location.pathname = '/';
                path = '/';
            }

            if (this.currentView === view) {
                return true;
            }

            view.show();
            var back = location.pathname;
            if (back != path) {
                window.history.pushState(null, '', path);
            }
            if (this.currentView) {
                this.currentView.hide();
            }

            this.currentView = view;
            return true;
        }
    }, {
        key: 'startPage',
        value: function startPage(url) {
            var view = this._getViewByRoute(url);
            if (!view) {
                view = this.routes['/'];
                location.pathname = '/';
                url = '/';
            }
            view.show();

            window.history.pushState(null, '', url);

            window.onpopstate = function (event) {
                console.log(location.pathname);
                this.go(location.pathname);
            }.bind(this);
        }
    }]);

    return Router;
}();

var routerInstance = exports.routerInstance = new Router(window.document.documentElement);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.setOnlyBar = setOnlyBar;
exports.setCookiesAndBar = setCookiesAndBar;
exports.isLogin = isLogin;
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires === "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function setLoginCookies(flag, name) {
    setCookie('logged', flag);
    setCookie('login', name);
}

function setOnlyBar() {
    var title = document.getElementById('registered');
    if (title) title.textContent = getCookie('login');
}

function setCookiesAndBar(authFlag, name) {
    name = name || 'Guest';

    setLoginCookies(authFlag, name);

    if (authFlag) setOnlyBar();else setLoginCookies(authFlag, name);
}

function isLogin() {
    var status = getCookie('logged');
    if (status == "true") {
        console.log("Already login!");
        return true;
    } else console.log("Need login!");

    return false;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
    function GameObject(world, clientId, nickName) {
        _classCallCheck(this, GameObject);

        this.world = world;
        this.pid = clientId;
        this.nickName = nickName;
    }

    _createClass(GameObject, [{
        key: "drawObject",
        value: function drawObject() {
            console.log("Draw NoObject!");
        }
    }, {
        key: "animation",
        value: function animation(dx, dy) {
            console.log("Animate NoObject!");
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graph_tree = __webpack_require__(7);

var _graph_tree2 = _interopRequireDefault(_graph_tree);

var _user_action = __webpack_require__(28);

var _user_action2 = _interopRequireDefault(_user_action);

var _user_interface = __webpack_require__(29);

var _user_interface2 = _interopRequireDefault(_user_interface);

var _game_object = __webpack_require__(5);

var _game_object2 = _interopRequireDefault(_game_object);

var _tower = __webpack_require__(2);

var _tower2 = _interopRequireDefault(_tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_GameObject) {
    _inherits(User, _GameObject);

    function User(connection, world, info) {
        _classCallCheck(this, User);

        var point = {
            x: info.beginX,
            y: info.beginY
        };
        var clientId = info.id;
        var userNick = info.nickname;
        var units = info.units;

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, world, clientId, userNick));

        _this.color = info.color;
        _this.arrayMap = world.arrayMap;
        _this.userInterface = new _user_interface2.default(world, {
            "getRealPosition": _this.myRealPosition.bind(_this),
            "addTower": _this.addNewTower.bind(_this),
            "setCurrentNode": _this.setCurrentNode.bind(_this),
            "getClientId": function getClientId() {
                return _this.pid;
            },
            "getPerforming": function getPerforming() {
                return _this.performing;
            },
            "getMyColor": function getMyColor() {
                return _this.color;
            },
            "getTower": function getTower() {
                return _this.currentNode.data;
            }
        }, point);

        _this.userAction = new _user_action2.default(connection);

        console.log("My nick: " + userNick);

        /*** Events ***/
        // connection.eventListen(DATATYPE_HELLO, (json) => {
        //     console.log("My nick: " + json["nickname"]);
        // });
        /**************/

        _this.myGraph = new _graph_tree2.default(world, _this.color);

        var tower = _this.generateMyTower(point, units);

        _this.mainNode = _this.myGraph.addNewVertexToCurrent(tower);
        _this.setTowerNode(tower, _this.mainNode);

        _this.currentNode = _this.mainNode;
        _this.world.addTowerToMap(point, tower);

        _this.drawObject();

        //update camera
        _this.world.area.markSelectedCell(point.x, point.y, true);
        var pxPoint = _this.world.area.getPixelPoint(point.x, point.y);
        _this.world.setOffsetForCenter(pxPoint.x, pxPoint.y);
        _this.world.area.world.stage.update();
        _this.world.update();
        scrollTo(0, 0);
        return _this;
    }

    _createClass(User, [{
        key: 'setPerforming',
        value: function setPerforming(flag) {
            this.performing = flag;
            this.myGraph.shapes.forEach(function (val, item) {
                item.setPerforming(flag);
            });
        }
    }, {
        key: 'setTowerNode',
        value: function setTowerNode(tower, node) {
            tower.parentNode = node;
        }

        /* this function returns CURRENT NODE */

    }, {
        key: 'playerMoveFree',
        value: function playerMoveFree(fromNode, newPoint, unitsCount) {
            fromNode.data.units -= unitsCount;

            var tower = this.generateMyTower(newPoint, unitsCount);
            this.world.addTowerToMap(newPoint, tower);

            /* action */
            this.userAction.createTown(fromNode.data.point, newPoint, unitsCount);

            var newNode = this.myGraph.addNewVertexToCurrent(tower);
            this.setTowerNode(tower, newNode);
            return newNode;
        }
    }, {
        key: 'playerMoveBonus',
        value: function playerMoveBonus(fromNode, bonusTower, unitsCount) {
            fromNode.data.units -= unitsCount;
            var newUnits = bonusTower.units + unitsCount;

            /* make from bonus to user */
            bonusTower.refreshTower(towerType.DEFAULT, newUnits, this.pid);
            bonusTower.setUserColor(this.color);
            /***************************/

            /* action */
            this.userAction.createTown(fromNode.data.point, bonusTower.point, unitsCount);

            var newNode = this.myGraph.addNewVertexToCurrent(bonusTower);
            this.setTowerNode(bonusTower, newNode);
            return newNode;
        }
    }, {
        key: 'playerMoveLink',
        value: function playerMoveLink(fromNode, toNode, unitsCount) {
            fromNode.data.units -= unitsCount;
            toNode.data.units += unitsCount;
            this.userAction.createTown(fromNode.data.point, toNode.data.point, unitsCount);
        }
    }, {
        key: 'playerMoveFight',
        value: function playerMoveFight(userNode, enemyNode, unitsCount) {
            this.waitNode = userNode;
            this.waitUnits = unitsCount;
            this.userAction.createTown(userNode.data.point, enemyNode.data.point, unitsCount);
        }
    }, {
        key: 'addNewTower',
        value: function addNewTower(pointNewTower, units) {
            var placeTower = this.getFromMap(pointNewTower);
            this.setPerforming(false); // TODO if error
            if (!placeTower) {
                this.currentNode = this.playerMoveFree(this.currentNode, pointNewTower, units);
            } else {
                // TODO work fight
                if (placeTower.typeOfTower === towerType.DEFAULT) {
                    this.playerMoveLink(this.currentNode, placeTower.parentNode, units);
                } else if (placeTower.typeOfTower === towerType.ENEMY) {
                    this.playerMoveFight(this.currentNode, placeTower.parentNode, units);
                } else {
                    this.currentNode = this.playerMoveBonus(this.currentNode, placeTower, units);
                }
            }
            this.drawObject();
        }
    }, {
        key: 'setCurrentNode',
        value: function setCurrentNode(pointCurrentTower) {
            var tower = this.world.getTowerFromMap(pointCurrentTower);
            if (tower.client_id === this.pid) {
                if (tower.parentNode === null) alert("wtf!");
                this.currentNode = tower.parentNode;
                this.myGraph.setCurrentVertex(tower.parentNode);
            }
        }
    }, {
        key: 'createVertextData',
        value: function createVertextData(position, units) {
            if ((typeof position === 'undefined' ? 'undefined' : _typeof(position)) !== "object") return null;

            position["units"] = units;
            return position;
        }
    }, {
        key: 'newBonus',
        value: function newBonus(position) {}
    }, {
        key: 'myRealPosition',
        value: function myRealPosition() {
            return { x: this.currentNode.data.realX, y: this.currentNode.data.realY };
        }
    }, {
        key: 'drawObject',
        value: function drawObject() {
            this.myGraph.showNodes();
            this.world.update();
        }
    }, {
        key: 'generateMyTower',
        value: function generateMyTower(point, units) {
            var tower = new _tower2.default(this.world, point.x, point.y, towerType.DEFAULT, units);
            tower.setUserColor(this.color);
            tower.client_id = this.pid;
            return tower;
        }
    }, {
        key: 'getFromMap',
        value: function getFromMap(point) {
            var r = this.world.arrayMap[point.x][point.y];
            if (!r) return null;
            return r;
        }
    }, {
        key: 'removeLink',
        value: function removeLink(point1, point2) {
            this.myGraph.removeLink(point1, point2);
            this.drawObject();
        }
    }, {
        key: 'createLink',
        value: function createLink(from, to) {
            this.myGraph.addNewLink(from.parentNode, to.parentNode);
            this.drawObject();
        }
    }, {
        key: 'removeNode',
        value: function removeNode(point) {
            this.myGraph.removeNode(point);
            this.setCurrentNode(this.myGraph.getTree.rootNode.data.point);
            this.userInterface.currentPos = this.currentNode.data.point;
            this.drawObject();
        }
    }, {
        key: 'acceptMove',
        value: function acceptMove(json) {
            var _this2 = this;

            var result = json["result"];
            if (result === "ACCEPT_LOSE") {}

            var newNodes = json["newNodes"];

            var myNewNode = newNodes.find(function (item) {
                return item.pid === _this2.pid;
            });

            if (myNewNode) {
                if (!this.waitNode || !this.waitUnits) return;

                var fromNode = this.waitNode;
                var unitsCount = this.waitUnits;
                var newUnits = myNewNode.value;
                var newPoint = {
                    x: myNewNode.x,
                    y: myNewNode.y
                };
                fromNode.data.units -= unitsCount;

                var tower = this.generateMyTower(newPoint, newUnits);
                this.world.addTowerToMap(newPoint, tower);

                var newNode = this.myGraph.addNewVertexByNode(tower, fromNode);
                this.setTowerNode(tower, newNode);
            }

            this.drawObject();
            this.waitUnits = null;
            this.waitNode = null;
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            delete this.userInterface;
            delete this.userAction;
        }
    }]);

    return User;
}(_game_object2.default);

exports.default = User;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tree = __webpack_require__(30);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphTree = function () {
    function GraphTree(map, color) {
        _classCallCheck(this, GraphTree);

        this.world = map;

        this.tree = new _tree2.default();
        this.currentVertex = null;

        this.shapes = new Map();
        this.graphLine = null;
        this.lineColor = color;
    }

    _createClass(GraphTree, [{
        key: 'addNewVertexToCurrent',
        value: function addNewVertexToCurrent(data) {
            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }
    }, {
        key: 'addNewVertexByNode',
        value: function addNewVertexByNode(data, node) {
            return this.tree.addNode(data, node);
        }
    }, {
        key: 'setCurrentVertex',
        value: function setCurrentVertex(current) {
            this.currentVertex = current;
            return this.currentVertex;
        }
    }, {
        key: 'goFromCurrentVertex',
        value: function goFromCurrentVertex(node) {
            node.nextNode.push(this.currentVertex);
            return node;
        }
    }, {
        key: 'addNewLink',
        value: function addNewLink(from, to) {
            this.tree.addLink(from, to);
        }
    }, {
        key: 'addNewNode',
        value: function addNewNode(data) {
            return this.tree.addNode(data, null);
        }
    }, {
        key: 'removeNode',
        value: function removeNode(point) {
            var removedTower = this.world.getTowerFromMap(point);
            this.tree.removeNode(removedTower.parentNode);
            removedTower.destruct();
        }
    }, {
        key: 'removeLink',
        value: function removeLink(point1, point2) {
            var removedTower1 = this.world.getTowerFromMap(point1);
            var removedTower2 = this.world.getTowerFromMap(point2);
            this.tree.removeLink(removedTower1.parentNode, removedTower2.parentNode);
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            this.world.stage.removeChild(this.graphLine);
            this.graphLine.graphics.clear();
            console.log(this.shapes);
            this.shapes.forEach(function (value, key) {
                key.destruct();
            });
        }
    }, {
        key: 'setNode',
        value: function setNode(tower) {
            var coordinatesX = tower.pointX,
                coordinatesY = tower.pointY;

            if (!this.shapes.has(tower)) {
                this.shapes.set(tower, 1 /* default */);
            }
            tower.setRealCoordinates(coordinatesX, coordinatesY);
            tower.draw();
        }
    }, {
        key: 'showNodes',
        value: function showNodes() {
            var currentNode = this.tree.rootNode;
            var marker = new Set();

            this.graphLine = this.graphLine || this.world.newLine(this.lineColor);
            this.graphLine.graphics.clear();
            this.graphLine.graphics.setStrokeStyle(3).beginStroke(this.lineColor);

            this.go = function (current, marker) {
                var _this = this;

                if (current === null) {
                    return;
                }
                marker.add(current);
                this.setNode(current.data);
                current.nextNode.forEach(function (item) {
                    if (!marker.has(item)) {
                        _this.drawWireBetweenTowers(current.data.point, item.data.point);
                        _this.go(item, marker);
                    } else {
                        _this.drawWireBetweenTowers(current.data.point, item.data.point);
                    }
                });
            };
            this.go.bind(this)(currentNode, marker);

            this.graphLine.graphics.endStroke();
        }
    }, {
        key: 'drawWireBetweenTowers',
        value: function drawWireBetweenTowers(to, from, anim) {
            to = this.world.area.getPixelPoint(to.x, to.y);
            from = this.world.area.getPixelPoint(from.x, from.y);
            var x = to.x,
                y = to.y;
            var l = Math.sqrt((x - from.x) ** 2 + (y - from.y) ** 2);

            var byLine = function byLine(lamda) {
                return { x: (from.x + lamda * x) / (1 + lamda), y: (from.y + lamda * y) / (1 + lamda) };
            };

            var radius = conf.radiusTower + conf.betweenTowersPadding;
            var lamda = (l - radius) / radius;

            var fromPoint = byLine(1 / lamda);
            var toPoint = byLine(lamda);

            this.graphLine.graphics.moveTo(fromPoint.x, fromPoint.y);
            this.graphLine.graphics.lineTo(toPoint.x, toPoint.y);
            this.graphLine.graphics.moveTo(x, y);
        }
    }, {
        key: 'getTree',
        get: function get() {
            return this.tree;
        }
    }, {
        key: 'getCurrentVertex',
        get: function get() {
            return this.currentVertex;
        }
    }]);

    return GraphTree;
}();

exports.default = GraphTree;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePage = function () {
    function BasePage(world) {
        _classCallCheck(this, BasePage);

        this.world = world;
    }

    _createClass(BasePage, [{
        key: "startPage",
        value: function startPage(resource) {}
    }, {
        key: "stopPage",
        value: function stopPage() {}
    }]);

    return BasePage;
}();

exports.default = BasePage;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

var Request = function () {
    function Request(server) {
        _classCallCheck(this, Request);

        this.server = server;
        this.funcs = [];

        this.baseCatch = function (error) {
            console.log('[FAIL] ', error);
        };

        this.json = null;
    }

    _createClass(Request, [{
        key: 'addResponse',
        value: function addResponse(_func) {
            this.funcs.push(_func);
            return this;
        }
    }, {
        key: 'addJson',
        value: function addJson(_params) {
            this.json = JSON.stringify(_params);
            return this;
        }
    }, {
        key: 'error',
        value: function error(_errorCallback) {
            this.baseCatch = _errorCallback;
            return this;
        }
    }, {
        key: 'request',
        value: function request(path, data) {
            data = data || {};

            if (!(data['method'] && data['method'] in ALLOWED_METHODS)) data['method'] = data['method'] || 'GET';

            data['headers'] = data['headers'] || { "Content-Type": "application/json" };
            data['credentials'] = 'include';
            data['mode'] = data['mode'] || 'CORS';
            data['cache'] = data['cache'] || 'default';

            if (this.json != "null") data['body'] = this.json;

            var fetchPromise = fetch(this.server + path, data);

            var me = this;
            this.funcs.map(function (el, index) {
                fetchPromise.then(el);
            });

            fetchPromise.catch(me.baseCatch); // TODO catch
        }
    }]);

    return Request;
}();

exports.default = Request;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(42);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function () {
    function About() {
        _classCallCheck(this, About);

        this.about = (0, _template2.default)();
    }

    _createClass(About, [{
        key: 'getElement',
        value: function getElement() {
            return this.about;
        }
    }]);

    return About;
}();

exports.default = About;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.mainConfiguration = {
    debugMode: false,
    needAppCache: false,

    roomTypes: [2, 3, 4, 5],
    roomPrefix: "Required ? more player", /* ? ~ number of current count */
    roomPrefixEmpty: "Room is empty",
    roomDeclaration: "Fight vs ? players",
    quickStart: "Choose best room for me!",

    pingPongTime: 100000,

    pushNotifyDelay: 2000,
    pushNotifyDelta: 100
};

window.DATATYPE_ROOMINFO = "DATATYPE_ROOMINFO";
window.DATATYPE_PLAYERMOVE = "DATATYPE_PLAYERMOVE";
window.DATATYPE_NEWBONUS = "DATATYPE_NEWBONUS";
window.DATATYPE_ERROR = "DATATYPE_ERROR";
window.DATATYPE_HELLO = "DATATYPE_HELLO";
window.DATATYPE_ROOM_DESTRUCT = "DATATYPE_ROOM_DESTRUCTION";
window.DATATYPE_PLAYER_DISCONNECT = "DATATYPE_PLAYER_DISCONNECT";
window.DATATYPE_ROOMMANAGER_UPDATE = "DATATYPE_ROOMMANAGER_UPDATE";
window.DATATYPE_YOU_WIN = "DATATYPE_YOU_WIN";

window.ACTION_GIVE_ME_ROOM = "ACTION_GIVE_ME_ROOM";
window.ACTION_GAME_MOVE = "ACTION_GAME_MOVE";
window.ACTION_PING = "ACTION_PING";
window.ACTION_EXIT_ROOM = "ACTION_EXIT_ROOM";

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.STATUS_CREATING = "STATUS_CREATING";
window.STATUS_PLAYING = "STATUS_PLAYING";
window.STATUS_READY = "STATUS_READY";

window.conf = {
    ip: [{ prefixSocket: "ws://", prefix: "http://", host: "172.16.84.20", port: ":8081", path: "/game " }, { prefixSocket: "ws://", prefix: "http://", host: "192.168.1.102", port: ":8081", path: "/game" }, { prefixSocket: "ws://", prefix: "http://", host: "172.16.90.25", port: ":8081", path: "/game" }, { prefixSocket: "ws://", prefix: "http://", host: "172.20.10.4", port: ":8081", path: "/game" }, { prefixSocket: "ws://", prefix: "http://", host: "localhost", port: ":8081", path: "/game" }, { prefixSocket: "wss://", prefix: "https://", host: "cyclic-server.herokuapp.com", port: "", path: "/game" }, { prefixSocket: "ws://", prefix: "http://", host: "172.16.94.65", port: ":8081", path: "/game" }],
    baseIP: 5,

    countUsersInRoom: 2,

    // UI
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 0,
    paddingHintX: 40,
    paddingHintY: 40

};

window.defaultServer = conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api';

window.towerType = {
    DEFAULT: 0,
    BONUS: 1,
    ENEMY: 2
};

window.userColors = {
    0: "red",
    1: "green",
    2: "blue",
    3: "yellow"
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mainPack = exports.loginPack = undefined;

var _menuView = __webpack_require__(47);

var _menuView2 = _interopRequireDefault(_menuView);

var _loginView = __webpack_require__(46);

var _loginView2 = _interopRequireDefault(_loginView);

var _registrationView = __webpack_require__(48);

var _registrationView2 = _interopRequireDefault(_registrationView);

var _leaderboardView = __webpack_require__(45);

var _leaderboardView2 = _interopRequireDefault(_leaderboardView);

var _gameView = __webpack_require__(44);

var _gameView2 = _interopRequireDefault(_gameView);

var _aboutView = __webpack_require__(43);

var _aboutView2 = _interopRequireDefault(_aboutView);

var _auth = __webpack_require__(14);

var _auth2 = _interopRequireDefault(_auth);

var _util = __webpack_require__(4);

var _router = __webpack_require__(3);

var _forms = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = new _auth2.default();

function registrationCall(event) {
    event.preventDefault();

    var ifError = function ifError(error) {
        document.getElementById("registration_warning").innerHTML = error;
    };

    ifError("");

    var regData = _forms.registrationForm.getFormData();
    if (regData['password'] !== regData['password_repeat']) {
        ifError("Password is not equals!");
        return;
    }

    delete regData['password_repeat'];

    auth.register(regData, function () {
        console.log("Success login !");_router.routerInstance.go("/login");
    }, function () {
        console.log("Fail login !");
    });
}

function loginCall(event) {
    event.preventDefault();

    // TODO make error
    var ifError = function ifError(error) {
        document.getElementById("login_warning").innerHTML = error;
    };
    /* clear error */
    ifError("");

    var loginData = _forms.loginForm.getFormData();

    auth.auth(loginData, function () {
        auth.getMe(function (user) {
            console.log("Success login !");
            _router.routerInstance.updateNewPackToIndex(mainPack);

            (0, _util.setCookiesAndBar)(true, user.login);
        }, function () {
            ifError("Wrong login or password!");console.log("cannot login in getMe!");
        });
    }, function () {
        ifError("No connection to server");console.log("Fail login !");
    });
}
function logoutCall(event) {
    event.preventDefault();

    (0, _util.setCookiesAndBar)(false);
    _router.routerInstance.updateNewPackToIndex(loginPack);

    auth.logout(function () {
        console.log("success logout");
    }, function () {
        console.log("Error, logout!");
    });
}

function registrationControllerGenerator(root) {
    var registration = document.querySelector('#registration');
    registration.appendChild(_forms.registrationForm.el);

    return new _registrationView2.default(root);
}

function menuControllerGenerator(root) {
    var menu = document.querySelector('#menu');
    menu.appendChild(_forms.menuForm.el);

    var btnLogout = document.getElementById("logoutPressed");
    btnLogout.onclick = logoutCall;

    return new _menuView2.default(root);
}

function loginControllerGenerator(root) {
    var login = document.querySelector('#login');

    login.appendChild(_forms.loginForm.el);

    _forms.loginForm.on('submit', loginCall);
    _forms.registrationForm.on('submit', registrationCall);

    return new _loginView2.default(root);
}

var menuController = function menuController() {
    return menuControllerGenerator(document.querySelector('.menu-view'));
};
var loginController = function loginController() {
    return loginControllerGenerator(document.querySelector('.login-view'));
};
var registrationController = function registrationController() {
    return registrationControllerGenerator(document.querySelector('.registration-view'));
};

var aboutController = function aboutController() {
    return new _aboutView2.default(document.querySelector('.about-view'));
};
var leaderBoardController = function leaderBoardController() {
    return new _leaderboardView2.default(document.querySelector('.leaderboard-view'));
};
var gameController = function gameController() {
    return new _gameView2.default(document.querySelector('.game-view'));
};

var loginPack = exports.loginPack = [{ path: '/', generator: loginController }, { path: '/login', generator: loginController }, { path: '/register', generator: registrationController }, { path: '/about', generator: aboutController }];

var mainPack = exports.mainPack = [{ path: '/', generator: menuController }, { path: '/leaderboard', generator: leaderBoardController }, { path: '/game', generator: gameController }, { path: '/about', generator: aboutController }];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by algys on 04.05.17.
 */

var load = function load() {
    navigator.serviceWorker.register('/app_cache.js').then(function (registration) {
        // при удачной регистрации имеем объект типа ServiceWorkerRegistration
        console.log('ServiceWorker registration', registration);
        // строкой ниже можно прекратить работу serviceWorker’а
        //registration.unregister();
    }).catch(function (err) {
        throw new Error('ServiceWorker error: ' + err);
    });
};

exports.default = load;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by algys on 13.04.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _request = __webpack_require__(9);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
    function Auth() {
        _classCallCheck(this, Auth);

        this.logged = false;
    }

    _createClass(Auth, [{
        key: 'getMe',
        value: function getMe(success, error) {
            new _request2.default(conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api').addResponse(function (response) {
                console.log(response);
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    error();
                    return;
                }
                response.json().then(function (data) {
                    success(data);
                });
            }.bind(this)).addJson(null).error(function (err) {
                console.log("[ERROR] Error response in login");
            }).request("/user", {
                method: 'GET'
            });
        }
    }, {
        key: 'auth',
        value: function auth(data, success, error) {
            var status = false;
            new _request2.default(conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api').addResponse(function (response) {
                console.log(response);
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    error();
                    return;
                }
                this.logged = true;
                success();
            }.bind(this)).addJson(data).error(function (err) {
                console.log("[ERROR] Error response in login");
                error();
            }.bind(this)).request('/login', {
                method: 'POST'
            });

            return status;
        }
    }, {
        key: 'checkAuth',
        value: function checkAuth(success, error) {
            var status = false;
            if (this.logged) {
                success();
                return true;
            }
            new _request2.default(conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api').addResponse(function (response) {
                console.log(response);
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    error();
                    return;
                }
                this.logged = true;
                success();
            }.bind(this)).addJson(null).error(function (err) {
                console.log("[ERROR] Error response in login");
                error();
            }.bind(this)).request('/login', {
                method: 'GET'
            });

            return status;
        }
    }, {
        key: 'register',
        value: function register(data, success, error) {
            var status = false;
            new _request2.default(conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api').addResponse(function (response) {
                console.log(response);
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    error();
                    return;
                }
                success();
            }.bind(this)).addJson(data).error(function (err) {
                console.log("[ERROR] Error response in register");
                error();
            }.bind(this)).request('/user', {
                method: 'PUT'
            });
            return status;
        }
    }, {
        key: 'logout',
        value: function logout(success, error) {
            new _request2.default(conf.ip[conf.baseIP].prefix + conf.ip[conf.baseIP].host + conf.ip[conf.baseIP].port + '/api').addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    error();
                    return;
                }
                this.logged = false;
                success();
            }.bind(this)).addJson(null).error(function (err) {
                console.log("[ERROR] Error response in logout");
                error();
            }).request("/login", {
                method: 'DELETE'
            });
        }
    }, {
        key: 'isAuth',
        value: function isAuth() {
            return this.logged;
        }
    }]);

    return Auth;
}();

exports.default = Auth;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginForm = function () {

    /**
     * Конструктор класса Form
     */
    function LoginForm() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, LoginForm);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Вернуть поля формы
         * @return {string}
         */

    }, {
        key: '_getFields',
        value: function _getFields() {
            var _data$fields = this.data.fields,
                fields = _data$fields === undefined ? [] : _data$fields;


            return fields.map(function (field) {
                return '<div class="login-form"><input type="' + field.type + '" name="' + field.name + '" placeholder="' + field.placeholder + '" class="form-control login-form__input"></div>';
            }).join(' ');
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <div class="col-md-3"></div>\n                <form class="form-horizontal col-md-6 login-form">\n                <h1>' + (this.data.title || '') + '</h1>\n                <div class="form-group form-input">\n                    ' + this._getFields() + '\n                </div>\n                <div class="js-controls">\n                </div>\n                <div class="create_new_account_link" style="margin-top: 10px;" id="RegisterPageId" >\n                    <a href="/register">\n                        Create new account\n                     </a>\n                 </div>\n                 <div id="login_warning" style="color: red;"></div>\n                </form>\n            <div class="col-md-3"></div>\n        ';
        }
    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }

        /**
         * Взять данные формы
         * @return {object}
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            var form = this.el.querySelector('form');
            var elements = form.elements;
            var fields = {};

            Object.keys(elements).forEach(function (element) {
                var name = elements[element].name;
                var value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }
    }, {
        key: 'getControlls',
        value: function getControlls() {
            return this.data.controls;
        }
    }]);

    return LoginForm;
}();

exports.default = LoginForm;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {

    /**
     * Конструктор класса Form
     */
    function Menu() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, Menu);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <form class="form-horizontal col-md-6">\n                <div class="js-controls">\n                </div>\n            </form>\n        ';
        }

        /**
         * Вставить управляющие элементы в форму
         */

    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }
    }]);

    return Menu;
}();

exports.default = Menu;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegistrationForm = function () {

    /**
     * Конструктор класса Form
     */
    function RegistrationForm() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, RegistrationForm);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Вернуть поля формы
         * @return {string}
         */

    }, {
        key: '_getFields',
        value: function _getFields() {
            var _data$fields = this.data.fields,
                fields = _data$fields === undefined ? [] : _data$fields;


            return fields.map(function (field) {
                return '<div class="registration-form"><input type="' + field.type + '" name="' + field.name + '" placeholder="' + field.placeholder + '" class="form-control registration-form__input"></div>';
            }).join(' ');
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <form class="form-horizontal col-md-6">\n                <h1>' + (this.data.title || '') + '</h1>\n                <div class="form-group form-input">\n                    ' + this._getFields() + '\n                </div>\n                <div class="js-controls">\n                </div>\n                <div id="BackButton" style="padding-top: 20px;">\n                    <a href="/login">Back</a>\n                </div>\n                <div style="color: red;" id="registration_warning"></div>\n            </form>\n        ';
        }

        /**
         * Вставить управляющие элементы в форму
         */

    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }

        /**
         * Взять данные формы
         * @return {object}
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            var form = this.el.querySelector('form');
            var elements = form.elements;
            var fields = {};

            Object.keys(elements).forEach(function (element) {
                var name = elements[element].name;
                var value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }
    }, {
        key: 'getControlls',
        value: function getControlls() {
            return this.data.controls;
        }
    }]);

    return RegistrationForm;
}();

exports.default = RegistrationForm;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registrationForm = exports.loginForm = exports.menuForm = undefined;

var _login = __webpack_require__(15);

var _login2 = _interopRequireDefault(_login);

var _menu = __webpack_require__(16);

var _menu2 = _interopRequireDefault(_menu);

var _registration = __webpack_require__(17);

var _registration2 = _interopRequireDefault(_registration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuForm = exports.menuForm = new _menu2.default({
    el: document.createElement('div'),
    data: {
        controls: [{
            text: 'Play',
            attrs: {
                type: 'click',
                class: 'btn btn-success btn-block',
                id: 'playPressed',
                href: '/game'
            }
        }, {
            text: 'LeaderBoard',
            attrs: {
                type: 'click',
                class: 'btn btn-info btn-block',
                id: 'leaderboardPressed',
                href: '/leaderboard'
            }
        }, {
            text: 'Logout',
            attrs: {
                type: 'submit',
                class: 'btn btn-danger btn-block',
                id: 'logoutPressed'
            }
        }]
    }
});

var loginForm = exports.loginForm = new _login2.default({
    el: document.createElement('div'),
    data: {
        title: 'Login',
        fields: [{
            name: 'login',
            type: 'text',
            placeholder: 'Login'
        }, {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        }],
        controls: [{
            text: 'Login',
            attrs: {
                type: 'submit',
                class: 'btn btn-default login-form__button login-form__button_red'
            }
        }]
    }
});

var registrationForm = exports.registrationForm = new _registration2.default({
    el: document.createElement('div'),
    data: {
        title: 'Registration',
        fields: [{
            name: 'login',
            type: 'text',
            placeholder: 'Login'
        }, {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        }, {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        }, {
            name: 'password_repeat',
            type: 'password',
            placeholder: 'Repeat'
        }],
        controls: [{
            text: 'Register',
            attrs: {
                type: 'submit',
                class: 'btn btn-default registration-form__button registration-form__button_red'
            }
        }]
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by algys on 18.04.17.
 */

var MenuBoard = function () {
    function MenuBoard() {
        _classCallCheck(this, MenuBoard);

        this.menuBoard = document.createElement("div");
        this.menuBoard.className = "MenuBoard";
        this.menuBoard.id = "board";

        this.buttonHome = document.createElement("div");
        this.buttonHome.id = "home";
        this.buttonHome.className = "fa fa-times fa-3x";

        this.menuBoard.appendChild(this.buttonHome);
        document.body.appendChild(this.menuBoard);

        this.scores = new Map();
    }

    _createClass(MenuBoard, [{
        key: "addExitListener",
        value: function addExitListener(callback) {
            if (!this.exitListener) this.buttonHome.addEventListener("click", function (event) {
                callback();
            });
            this.exitListener = callback;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            document.body.removeChild(this.menuBoard);
        }
    }]);

    return MenuBoard;
}();

exports.default = MenuBoard;
/**
 * Created by algys on 18.04.17.
 */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotifyBoard = function () {
    function NotifyBoard() {
        _classCallCheck(this, NotifyBoard);

        this.notifyBoard = document.createElement("div");
        this.notifyBoard.className = "CyclicNotifyBoard";
        this.notifyBoard.id = "cyclic-notify";

        document.body.appendChild(this.notifyBoard);
        this.notifyArray = [];

        this.hide();
        this.isPush = false;
    }

    _createClass(NotifyBoard, [{
        key: "pushNotify",
        value: function pushNotify(push) {
            var _this = this;

            if (this.isPush) {
                this.notifyArray.push(push);
                return;
            }

            var text = push["text"];
            var header = "";
            if ("header" in push) header = push["header"];

            /* show */
            this.notifyBoard.style.display = "block";
            this.notifyBoard.textContent = header + text;

            this.isPush = true;
            setTimeout(function () {
                _this.hide();
            }, mainConfiguration.pushNotifyDelay);
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this2 = this;

            this.notifyBoard.style.display = "none";

            if (this.notifyArray.length > 0) {
                setTimeout(function () {
                    _this2.isPush = false;
                    var newPush = _this2.notifyArray.pop();
                    _this2.pushNotify(newPush);
                }, mainConfiguration.pushNotifyDelta);
            } else {
                this.isPush = false;
            }
        }
    }]);

    return NotifyBoard;
}();

exports.default = NotifyBoard;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _roombase = __webpack_require__(41);

var _roombase2 = _interopRequireDefault(_roombase);

var _room = __webpack_require__(40);

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformBoard = function () {
    function PerformBoard(root, callback) {
        var _this = this;

        _classCallCheck(this, PerformBoard);

        root.innerHTML = (0, _roombase2.default)({
            quickStart: mainConfiguration.quickStart
        });
        this.root = root;

        this.board = document.getElementById("cyclic-rooms-container");

        mainConfiguration.roomTypes.forEach(function (roomCount) {
            var tempDiv = document.createElement('template');
            tempDiv.innerHTML = (0, _room2.default)({
                count: roomCount,
                countText: mainConfiguration.roomPrefixEmpty,
                roomText: mainConfiguration.roomDeclaration.replace("?", roomCount)
            });

            var finalDiv = tempDiv.content.firstChild;

            finalDiv.countPlayers = roomCount;
            finalDiv.onclick = _this.wrapperClick.bind(_this);
            finalDiv.setAttribute("num", roomCount);

            _this.board.appendChild(finalDiv);
        });

        this.callback = callback;
        document.getElementById("cyclic-rooms-button-quick").onclick = function () {
            _this.callback(null);
        };
    }

    _createClass(PerformBoard, [{
        key: "wrapperClick",
        value: function wrapperClick(event) {
            var count = event.target.getAttribute("num");
            this.callback(count);
        }
    }, {
        key: "update",
        value: function update(statusArray) {
            var childs = this.board.childNodes;
            childs.forEach(function (obj, index) {
                var nowStatus = statusArray[index];

                var count = obj.getAttribute("num");
                if (count === nowStatus["capacity"]) alert("wtf! please sync room server and client");

                var getNumField = document.getElementById("cyclic-menu-room-count-" + count);
                if (getNumField) {
                    if (nowStatus["queue"] === 0) {
                        getNumField.innerHTML = mainConfiguration.roomPrefixEmpty;
                    } else {
                        getNumField.innerHTML = mainConfiguration.roomPrefix.replace("?", count - nowStatus["queue"]);
                    }
                }
            });
        }
    }, {
        key: "destruct",
        value: function destruct() {
            /* delete */
            this.root.innerHTML = "";
        }
    }]);

    return PerformBoard;
}();

exports.default = PerformBoard;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoreBoard = function () {
    function ScoreBoard() {
        _classCallCheck(this, ScoreBoard);

        // TODO get connection
        this.scoreBoard = document.createElement("div");
        this.scoreBoard.className = "ScoreBoard";
        this.scoreBoard.id = "board";

        var scoreBoardTitle = document.createElement("div");
        scoreBoardTitle.id = "title";
        scoreBoardTitle.textContent = "ScoreBoard";

        var separatorUnderTitle = document.createElement("div");
        separatorUnderTitle.id = "separator";

        this.scoreBoard.appendChild(scoreBoardTitle);
        this.scoreBoard.appendChild(separatorUnderTitle);
        document.body.appendChild(this.scoreBoard);

        this.scores = new Map();
    }

    _createClass(ScoreBoard, [{
        key: "addPlayerToScoreBoard",
        value: function addPlayerToScoreBoard(nickname, score) {
            var scoreBoardLine = document.createElement("div");
            scoreBoardLine.id = "line";

            var score_el = document.createElement("div");
            score_el.className = "score-value";
            score_el.textContent = score;

            var nickname_el = document.createElement("div");
            nickname_el.className = "score-nickname";
            nickname_el.textContent = nickname;

            var number_el = document.createElement("div");
            number_el.className = "score-number";
            number_el.textContent = this.scores.size + 1 + ".";

            scoreBoardLine.appendChild(number_el);
            scoreBoardLine.appendChild(nickname_el);
            scoreBoardLine.appendChild(score_el);

            this.scoreBoard.appendChild(scoreBoardLine);
            this.scores.set(nickname, scoreBoardLine);
        }
    }, {
        key: "clear",
        value: function clear() {
            var _this = this;

            this.scores.forEach(function (line) {
                _this.scoreBoard.removeChild(line);
            });
            this.scores.clear();
        }
    }, {
        key: "changeValue",
        value: function changeValue(nickname, newScore) {
            if (!(nickname in this.scores)) {
                return false;
            }

            var scoreBoardLine = this.scores.get(nickname);
            var score = scoreBoardLine.getElementsByClassName("score-value")[0];
            if (!score) return false;

            score.textContent = newScore;
            return true;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            document.body.removeChild(this.scoreBoard);
        }
    }]);

    return ScoreBoard;
}();

exports.default = ScoreBoard;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by algys on 19.04.17.
 */

/**
 * Created by algys on 18.04.17.
 */

var ZoomBoard = function () {
    function ZoomBoard() {
        _classCallCheck(this, ZoomBoard);

        this.menuBoard = document.createElement("div");
        this.menuBoard.className = "ZoomBoard";
        this.menuBoard.id = "board";

        var buttonPlus = document.createElement("div");
        buttonPlus.id = "plus";
        buttonPlus.className = "fa fa-plus fa-3x";

        var buttonMinus = document.createElement("div");
        buttonMinus.id = "minus";
        buttonMinus.className = "fa fa-minus fa-3x";

        this.menuBoard.appendChild(buttonPlus);
        this.menuBoard.appendChild(buttonMinus);
        document.body.appendChild(this.menuBoard);

        this.scores = new Map();
    }

    _createClass(ZoomBoard, [{
        key: "destruct",
        value: function destruct() {
            document.body.removeChild(this.menuBoard);
        }
    }]);

    return ZoomBoard;
}();

exports.default = ZoomBoard;
/**
 * Created by algys on 18.04.17.
 */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _score_board = __webpack_require__(22);

var _score_board2 = _interopRequireDefault(_score_board);

var _menu_board = __webpack_require__(19);

var _menu_board2 = _interopRequireDefault(_menu_board);

var _zoom_board = __webpack_require__(23);

var _zoom_board2 = _interopRequireDefault(_zoom_board);

var _notify_board = __webpack_require__(20);

var _notify_board2 = _interopRequireDefault(_notify_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameControls = function () {
    function GameControls() {
        _classCallCheck(this, GameControls);

        this.scoreBoard = new _score_board2.default();
        this.menuBoard = new _menu_board2.default();
        this.zoomBoard = new _zoom_board2.default();

        this.notifyBoard = new _notify_board2.default();
    }

    /**
     * @param push - example { text: [MAIN_TEXT], header: [HEADER] }
     */


    _createClass(GameControls, [{
        key: 'pushNotify',
        value: function pushNotify(push) {
            this.notifyBoard.pushNotify(push);
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            this.scoreBoard.destruct();
            this.menuBoard.destruct();
            this.zoomBoard.destruct();
            this.notifyBoard.hide();
        }
    }]);

    return GameControls;
}();

exports.default = GameControls;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function () {
    function Area(elementDOM) {
        _classCallCheck(this, Area);

        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas-area";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 0;
        this.canvas.style.left = "0px";
        this.offset = {
            x: 0,
            y: 0
        };
        this.rectSize = conf.rectSize;
        this.borderSize = conf.borderSize;
        this.worldSizeH = 20;
        this.worldSizeW = 20;

        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = document.documentElement.clientWidth;

        elementDOM.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas.id);
        this.world = new createjs.Container();
        this.stage.addChild(this.world);
        createjs.Touch.enable(this.world);
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.initArea();
        this.stage.update();
        this.zoom = 1;
    }

    _createClass(Area, [{
        key: "initArea",
        value: function initArea() {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            var xCount = document.documentElement.clientWidth / this.rectSize | 0;
            var yCount = document.documentElement.clientHeight / this.rectSize | 0;
            this.fullSize = {
                x: this.rectSize * this.worldSizeW,
                y: this.rectSize * this.worldSizeH
            };

            this.cells = [];

            for (var i = 0; i < this.worldSizeH; i++) {
                var t = [];
                for (var j = 0; j < this.worldSizeW; j++) {
                    var cell = new createjs.Shape();
                    cell.graphics.setStrokeStyle(this.borderSize).beginStroke("#fffbf7").drawRect(j * rectSize + borderSize / 2, i * rectSize + borderSize / 2, rectSize, rectSize).endStroke().beginFill("#dbffd0").drawRect(j * rectSize + borderSize, i * rectSize + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
                    if (j < xCount + 5 && i < yCount + 5) {
                        cell.visible = true;
                    } else {
                        cell.visible = false;
                    }
                    t.push(cell);
                    this.world.addChildAt(cell);
                }
                this.cells.push(t);
            }

            this.rowEnds = {
                start: 0,
                end: yCount + 5
            };
            this.columnEnds = {
                start: 0,
                end: xCount + 5
            };
        }
    }, {
        key: "getExactPosition",
        value: function getExactPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            cx *= this.rectSize;
            cy *= this.rectSize;
            cx += this.rectSize / 2 | 0;
            cy += this.rectSize / 2 | 0;
            cx += this.borderSize / 2;
            cy += this.borderSize / 2;
            return { x: cx, y: cy };
        }
    }, {
        key: "getCellPosition",
        value: function getCellPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            return { x: cx, y: cy };
        }
    }, {
        key: "getPixelPoint",
        value: function getPixelPoint(x, y) {
            var px = x * this.rectSize + (this.rectSize + this.borderSize) / 2;
            var py = y * this.rectSize + (this.rectSize + this.borderSize) / 2;
            return { x: px, y: py };
        }
    }, {
        key: "markSelectedCell",
        value: function markSelectedCell(x, y, status) {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            var cell = new createjs.Shape();
            if (status) cell.graphics.beginFill("#beffb1").drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();else cell.graphics.beginFill("#dbffd0").drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();

            this.world.addChild(cell);
            this.stage.update();
        }
    }, {
        key: "markCurrentCell",
        value: function markCurrentCell(x, y, type) {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            var color = "#ffa895";
            switch (type) {
                case 0:
                    color = "#beffb1";
                    break;
                case 1:
                    color = "#ffa895";
                    break;
            }
            if (this.currentCell) {
                this.world.removeChild(this.currentCell);
            }
            this.currentCell = new createjs.Shape();
            this.currentCell.graphics.beginFill(color).drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
            this.world.addChild(this.currentCell);
            this.stage.update();
        }
    }, {
        key: "setVisibles",
        value: function setVisibles(x, y) {
            var xCount = (document.documentElement.clientWidth / this.rectSize / 2 | 0) + 5;
            var yCount = (document.documentElement.clientHeight / this.rectSize / 2 | 0) + 5;

            if (x - xCount > 0) this.columnEnds.start = x - xCount;else this.columnEnds.start = 0;

            if (x + xCount < this.worldSizeW) this.columnEnds.end = x + xCount;else this.columnEnds.end = this.worldSizeW;

            if (y - yCount > 0) this.rowEnds.start = y - yCount;else this.rowEnds.start = 0;

            if (y + yCount < this.worldSizeH) this.rowEnds.end = y + yCount;else this.rowEnds.end = this.worldSizeH;

            for (var i = 0; i < this.worldSizeH; i++) {
                for (var j = 0; j < this.worldSizeW; j++) {
                    if (i < this.rowEnds.start || i > this.rowEnds.end + 1) this.cells[i][j].visible = false;else if (j < this.columnEnds.start || j > this.columnEnds.end + 1) {
                        this.cells[i][j].visible = false;
                    } else this.cells[i][j].visible = true;
                }
            }
        }
    }, {
        key: "setOffset",
        value: function setOffset(x, y) {
            this.offset.x = x;
            this.offset.y = y;
            this.world.setTransform(x, y);
            this.stage.update();
        }
    }, {
        key: "getRelativeCoord",
        value: function getRelativeCoord(x, y) {
            return { x: x - this.offset.x, y: y - this.offset.y };
        }
    }, {
        key: "update",
        value: function update() {
            this.world.stage.update();
        }
    }, {
        key: "setSize",
        value: function setSize(height, width) {
            height = height || this.canvas.height / this.rectSize + 1;
            width = width || this.canvas.width / this.rectSize + 1;
            this.worldSizeH = height;
            this.worldSizeW = width;
        }
    }, {
        key: "reconfigure",
        value: function reconfigure() {
            this.world.removeAllChildren();
            this.initArea();
        }
    }]);

    return Area;
}();

exports.default = Area;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
    function World(elementDOM, area) {
        _classCallCheck(this, World);

        this.canvas = document.createElement("canvas");

        this.canvas.id = "canvas-game";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 1;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.background = "transparent";
        this.canvas.style.left = "0px";

        this.canvas.height = area.canvas.height;
        this.canvas.width = area.canvas.width;
        this.canvas.style.top = area.canvas.style.top;
        this.canvas.style.left = area.canvas.style.left;
        this.offset = {
            x: 0,
            y: 0
        };

        elementDOM.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas.id);
        this.map = new createjs.Container();
        this.stage.addChild(this.map);

        createjs.Touch.enable(this.map);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.clientHeight = document.documentElement.clientHeight;
        this.clientWidth = document.documentElement.clientWidth;
        this.area = area;

        this.arrayMap = [];
        for (var i = 0; i < this.area.rectSize; i++) {
            this.arrayMap.push(new Array(this.area.rectSize));
        }
        this.zoom = this.area.zoom;
        this.elemDOM = elementDOM;
    }

    _createClass(World, [{
        key: "update",
        value: function update() {
            this.stage.update();
        }
    }, {
        key: "setCallBack",
        value: function setCallBack(event, func) {
            this.map.on(event, func);
        }
    }, {
        key: "appendOnMap",
        value: function appendOnMap(child) {
            this.map.addChild(child); // TODO normal coor
        }

        /** Fabric draw **/

    }, {
        key: "newShape",
        value: function newShape(position, radius, color, visible) {
            var circle = new createjs.Shape();
            circle.visibility = visible || true;

            var pos = position || { x: 0, y: 0 };

            circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
            this.map.addChild(circle);
            return circle;
        }
    }, {
        key: "newLine",
        value: function newLine(color, visible) {
            var line = new createjs.Shape();
            line.graphics.setStrokeStyle(3);
            line.visibility = visible || true;

            this.map.addChild(line);
            return line;
        }
    }, {
        key: "newImage",
        value: function newImage(file, visible) {
            var image = new createjs.Bitmap(file);

            this.map.addChild(image);
            return image;
        }
    }, {
        key: "setOffset",
        value: function setOffset(x, y) {
            this.offset.x = x;
            this.offset.y = y;
            this.map.setTransform(x, y);
            this.area.setOffset(x, y);
        }
    }, {
        key: "getRelativeCoord",
        value: function getRelativeCoord(x, y) {
            return { x: x - this.offset.x, y: y - this.offset.y };
        }
    }, {
        key: "setOffsetForCenter",
        value: function setOffsetForCenter(x, y) {
            this.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));
            this.area.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));

            var cellPoint = this.area.getCellPosition(x, y);
            this.area.setVisibles(cellPoint.x, cellPoint.y);
        }
    }, {
        key: "setZoom",
        value: function setZoom(zoom) {
            this.map.scaleX = this.map.scaleY = zoom;
            this.area.world.scaleX = this.area.world.scaleY = zoom;
            this.stage.update();
            this.area.stage.update();
            this.zoom = zoom;
            this.area.zoom = zoom;
        }
    }, {
        key: "addTowerToMap",
        value: function addTowerToMap(point, tower) {
            this.arrayMap[point.x][point.y] = tower;
        }
    }, {
        key: "getTowerFromMap",
        value: function getTowerFromMap(point) {
            return this.arrayMap[point.x][point.y];
        }
    }, {
        key: "removeTowerFromMap",
        value: function removeTowerFromMap(point) {
            delete this.arrayMap[point.x][point.y];
            this.arrayMap[point.x][point.y] = null;
            this.area.markSelectedCell(point.x, point.y, false);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.map.removeAllChildren();
            this.area.setSize();
            this.area.reconfigure();
            this.update();
            this.arrayMap = [];
        }
    }, {
        key: "reconfigure",
        value: function reconfigure() {
            this.area.reconfigure();
            this.arrayMap = [];
            for (var i = 0; i < this.area.worldSizeH; i++) {
                this.arrayMap.push(new Array(this.area.worldSizeW));
            }
            this.update();
        }
    }, {
        key: "basicCenter",
        get: function get() {
            return { x: this.map.canvas.width / 2, y: this.map.canvas.height / 2 };
        }
    }, {
        key: "getWidth",
        get: function get() {
            return this.width;
        }
    }, {
        key: "getHeight",
        get: function get() {
            return this.height;
        }
    }]);

    return World;
}();

exports.default = World;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_object = __webpack_require__(5);

var _game_object2 = _interopRequireDefault(_game_object);

var _graph_tree = __webpack_require__(7);

var _graph_tree2 = _interopRequireDefault(_graph_tree);

var _tower = __webpack_require__(2);

var _tower2 = _interopRequireDefault(_tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
example info: {"nickname":"Nick2696","id":5784,"units":0,"beginX":50,"beginY":95,"readyForGameStart":true}
 */

var Enemy = function (_GameObject) {
    _inherits(Enemy, _GameObject);

    function Enemy(connection, world, info) {
        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, world, info.id, info.nickname));

        var point = { x: info.beginX, y: info.beginY };

        _this.color = info.color;

        _this.connection = connection;

        _this.enemyGraph = new _graph_tree2.default(world, _this.color);
        var tower = _this.generateEnemyTower(point, info.units);

        _this.world.addTowerToMap(point, tower);

        _this.drawObject();
        return _this;
    }

    _createClass(Enemy, [{
        key: 'drawObject',
        value: function drawObject() {
            this.enemyGraph.showNodes();
            this.world.update();
        }
    }, {
        key: 'animation',
        value: function animation(dx, dy) {}
    }, {
        key: 'generateEnemyTower',
        value: function generateEnemyTower(point, units) {
            var tower = new _tower2.default(this.world, point.x, point.y, towerType.ENEMY, units);
            tower.client_id = this.pid;
            tower.setUserColor(this.color);

            tower.draw();

            tower.parentNode = this.enemyGraph.addNewNode(tower);

            return tower;
        }
    }, {
        key: 'addNewTower',
        value: function addNewTower(newNodeInfo) {
            var point = {
                x: newNodeInfo.x,
                y: newNodeInfo.y
            };
            var unitsCount = newNodeInfo.value;
            if (this.world.getTowerFromMap(point)) {
                var to = this.world.getTowerFromMap(point);
                to.destruct();
            }

            var tower = this.generateEnemyTower(point, unitsCount);

            this.world.addTowerToMap(point, tower);
            this.drawObject();
        }
    }, {
        key: 'setPerforming',
        value: function setPerforming(flag) {
            this.enemyGraph.shapes.forEach(function (val, item) {
                item.setPerforming(flag);
            });
        }
    }, {
        key: 'createLink',
        value: function createLink(from, to) {
            this.enemyGraph.addNewLink(from.parentNode, to.parentNode);
            this.drawObject();
        }
    }, {
        key: 'removeNode',
        value: function removeNode(point) {
            this.enemyGraph.removeNode(point);
            this.drawObject();
        }
    }, {
        key: 'removeLink',
        value: function removeLink(point1, point2) {
            this.enemyGraph.removeLink(point1, point2);
            this.drawObject();
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.enemyGraph.destruct();
        }
    }]);

    return Enemy;
}(_game_object2.default);

exports.default = Enemy;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserAction = function () {
    function UserAction(connection) {
        _classCallCheck(this, UserAction);

        this.connection = connection;
    }

    /**
     *
     * @param world
     * @param from
     * @param to
     * @param unitCounts ~ int
     */


    _createClass(UserAction, [{
        key: "createTown",
        value: function createTown(from, to, unitCounts) {
            if (!this.connection) return;

            this.connection.send(ACTION_GAME_MOVE, {
                move: {
                    xfrom: from.x,
                    yfrom: from.y,
                    xto: to.x,
                    yto: to.y,
                    unitsCount: unitCounts
                }
            });
        }
    }, {
        key: "setStop",
        value: function setStop(world) {}
    }]);

    return UserAction;
}();

exports.default = UserAction;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STATE_BEGIN = 0,
    STATE_FLY = 1,
    STATE_CHOOSE_NODE = 2,
    STATE_DO_STEP = 3,
    STATE_CHECK_STEP = 4,
    STATE_CHOOSE_UNITS = 5;

var UserScroll = function () {
    function UserScroll(world) {
        _classCallCheck(this, UserScroll);

        this.world = world;

        this.point = { x: 0, y: 0 };
        // this._line = this.world.newLine("red");

        this._text = new createjs.Text(this.units, "25px Arial", "#ff7700");
        this._text.textBaseline = "middle";
        this._text.textAlign = "center";
        this.world.map.addChild(this._text);

        this.hide();
    }

    _createClass(UserScroll, [{
        key: "setPosition",
        value: function setPosition(x, y) {
            this.point.x = x + conf.paddingHintX;
            this.point.y = y - conf.paddingHintY;
        }
    }, {
        key: "show",
        value: function show(units) {
            this.hidden = false;
            this._text.visible = true;
            this.drawPercent(units);
        }
    }, {
        key: "hide",
        value: function hide() {
            this.hidden = true;
            this._text.visible = false;
            // this._line.graphics.clear();

            this.world.update();
        }
    }, {
        key: "drawPercent",
        value: function drawPercent(units) {
            if (this.hidden) return;

            this._text.text = units;
            this._text.x = this.point.x;
            this._text.y = this.point.y;

            // this._line.graphics.clear();
            // this._line.graphics.beginStroke("#00ffff");
            //
            // this._line.graphics.moveTo(this.point.x, this.point.y);
            // this._line.graphics.lineTo(this.point.x, this.point.y - percent);
            //
            // this._line.graphics.endStroke();
            this.world.update();
        }
    }, {
        key: "destruct",
        value: function destruct() {
            this.world.stage.removeChild(this._text);
        }
    }]);

    return UserScroll;
}();

var UserInterface = function () {
    function UserInterface(world, packCallback, startPos) {
        var _this = this;

        _classCallCheck(this, UserInterface);

        this.world = world; // get area
        document.addEventListener("mousemove", this.eventManager.bind(this));
        document.addEventListener("mouseup", this.eventManager.bind(this));
        document.addEventListener("mousedown", this.eventManager.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.world.canvas.addEventListener("click", this.eventManager.bind(this));

        this.packCallback = packCallback;
        this.startPos = startPos;

        this.world.update();
        this.world.area.world.stage.update();

        this.last_mv = { x: 0, y: 0 };

        this.pointerLockStatus = false;
        document.addEventListener("pointerlockchange", function () {
            if (document.pointerLockElement) {
                _this.pointerLockStatus = true;
            } else {
                _this.pointerLockStatus = false;
            }
        }, false);

        this.currentPos = this.startPos;
        this.color = this.packCallback["getMyColor"]();

        this.makeState(STATE_BEGIN, null);
        this.scrollBar = new UserScroll(this.world);
    }

    _createClass(UserInterface, [{
        key: "makeState",
        value: function makeState(typeState, data) {
            this.currentMode = {
                typeState: typeState,
                data: data
            };
        }
    }, {
        key: "eventMove",
        value: function eventMove(event) {
            var pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
            this.last_mv = this.last_mv || { x: 0, y: 0 };

            var mv = {
                x: this.last_mv.x - event.movementX,
                y: this.last_mv.y - event.movementY
            };
            if (pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.world.area.fullSize.x - 1) return;
            if (pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.world.area.fullSize.y - 1) return;

            var cellPos = this.world.area.getCellPosition(pxPoint.x - mv.x, pxPoint.y - mv.y);

            this.probablyCircle.x = pxPoint.x - mv.x;
            this.probablyCircle.y = pxPoint.y - mv.y;

            this.probablyLine.graphics.clear();
            if (this.currentMode.typeState === STATE_DO_STEP) {
                if (!this.checkCellForVertex(cellPos)) {
                    this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
                } else this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);

                this.probablyLine.graphics.setStrokeStyle(1).beginStroke(this.color);
                this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);
                this.probablyLine.graphics.lineTo(this.probablyCircle.x, this.probablyCircle.y);
                this.probablyLine.graphics.endStroke();
            } else if (this.currentMode === STATE_CHOOSE_NODE) {
                if (this.world.arrayMap[cellPos.x][cellPos.y]) {
                    if (this.world.arrayMap[cellPos.x][cellPos.y].client_id !== this.packCallback['getClientId']()) {
                        this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
                    }
                    this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);
                } else this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
            }
            this.last_mv.x = mv.x;
            this.last_mv.y = mv.y;

            this.world.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
            this.world.update(); // TODO tick
        }
    }, {
        key: "checkCellForVertex",
        value: function checkCellForVertex(cellPos) {
            if (Math.abs(cellPos.x - this.currentPos.x) > 2) {
                this.makeState(STATE_DO_STEP);
                return false;
            }
            if (Math.abs(cellPos.y - this.currentPos.y) > 2) {
                this.makeState(STATE_DO_STEP);
                return false;
            }
            if (Math.abs(cellPos.x - this.currentPos.x) * Math.abs(cellPos.y - this.currentPos.y) === 2 * 2) {
                this.makeState(STATE_DO_STEP);
                return false;
            }
            return true;
        }
    }, {
        key: "putNewVertex",
        value: function putNewVertex(newPoint, units) {
            console.log("choose units: " + units);
            if (units < 1 || units > this.currentMode.data.currentTower.units - 1) return;
            if (!this.packCallback["getPerforming"]()) return;

            var newX = newPoint.x,
                newY = newPoint.y;
            var newPos = this.world.area.getCellPosition(newX, newY);
            if (!this.checkCellForVertex(newPos)) {
                return;
            }

            if (this.currentPos.x === newPos.x && this.currentPos.y === newPos.y) {
                return;
            }

            this.packCallback["addTower"](newPos, units);
            this.world.area.markSelectedCell(newPos.x, newPos.y, true);

            this.world.update();

            this.last_mv.x = 0;
            this.last_mv.y = 0;
            this.currentPos = newPos;
        }
    }, {
        key: "chooseNewVertex",
        value: function chooseNewVertex() {
            var newX = this.probablyCircle.x,
                newY = this.probablyCircle.y;
            var newPos = this.world.area.getCellPosition(newX, newY);
            if (this.world.arrayMap[newPos.x][newPos.y]) {
                if (this.world.arrayMap[newPos.x][newPos.y].client_id !== this.packCallback['getClientId']()) {
                    return;
                }
            } else return;
            this.currentPos = newPos;
            this.probablyCircle.x = newX;
            this.probablyCircle.y = newY;
            this.packCallback['setCurrentNode'](newPos);

            this.world.area.markSelectedCell(newPos.x, newPos.y, true);

            this.world.update();

            this.last_mv.x = 0;
            this.last_mv.y = 0;
        }
    }, {
        key: "getCurrentMousePosition",
        value: function getCurrentMousePosition() {
            var pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
            return {
                x: pxPoint.x - this.last_mv.x,
                y: pxPoint.y - this.last_mv.y
            };
        }
    }, {
        key: "eventManager",
        value: function eventManager(event) {
            if (event.type === 'click' && event.which === 1 && this.pointerLockStatus === false) {
                this.makeState(STATE_CHOOSE_NODE, null);
                this.world.canvas.requestPointerLock();
                return;
            }

            if (event.type === 'click' && event.which === 1 && this.packCallback["getPerforming"]()) {

                if (this.currentMode.typeState === STATE_CHOOSE_NODE) {
                    this.makeState(STATE_DO_STEP, null);
                    this.chooseNewVertex(event);
                    return;
                }

                // if (this.currentMode.typeState === STATE_DO_STEP) {
                //     this.makeState(STATE_CHECK_STEP, null);
                //     this.putNewVertex(event);
                //     return;
                // }
            }

            if (event.type === 'click' && event.which === 3 && this.currentMode.typeState === STATE_DO_STEP) {
                this.makeState(STATE_CHOOSE_NODE, null);
                this.probablyLine.graphics.clear();
            }

            if (this.pointerLockStatus) if (event.type === 'mousemove') {
                this.eventMove(event); // PASS STATE_CHOOSE_NODE AND STATE_DO_STEP, STATE_CHOOSE_UNITS

                if (this.currentMode.typeState === STATE_CHOOSE_UNITS) {
                    var realPoint = this.getCurrentMousePosition();
                    this.scrollBar.setPosition(realPoint.x, realPoint.y);
                    // let unitsFromthis.currentMode.data.currentTower.units;
                    var lastY = this.currentMode.data.wasRealPosition.y;
                    var nowY = this.getCurrentMousePosition().y;
                    var percent = Math.max(Math.min(lastY - nowY + 50, 100), 0);
                    var units = this.currentMode.data.currentTower.units;
                    var newUnits = parseInt(units * percent / 100);

                    this.currentMode.data.finalUnits = newUnits;
                    this.scrollBar.drawPercent(newUnits);
                }
            } else if (event.type === 'mousedown' && this.currentMode.typeState === STATE_DO_STEP) {

                var newX = this.probablyCircle.x,
                    newY = this.probablyCircle.y;
                var newPos = this.world.area.getCellPosition(newX, newY);
                if (!this.checkCellForVertex(newPos)) return;

                this.world.area.markSelectedCell(newPos.x, newPos.y);

                var _realPoint = this.getCurrentMousePosition();
                this.scrollBar.setPosition(_realPoint.x, _realPoint.y);
                this.scrollBar.show();

                var tower = this.packCallback['getTower']();
                this.makeState(STATE_CHOOSE_UNITS, {
                    currentTower: tower,
                    wasRealPosition: _realPoint,
                    finalUnits: parseInt(tower.units / 2)
                });
            } else if (event.type === 'mouseup' && this.currentMode.typeState === STATE_CHOOSE_UNITS) {
                this.putNewVertex(this.currentMode.data.wasRealPosition, this.currentMode.data.finalUnits);

                this.scrollBar.hide();

                this.makeState(STATE_CHOOSE_NODE, null);
                // TODO draw scroll
            }
        }
    }, {
        key: "closeManager",
        value: function closeManager(event) {
            if (this.currentMode === 'chooseunits') {
                console.log("up");
            }
        }
    }]);

    return UserInterface;
}();

exports.default = UserInterface;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Cyclic graph */

var Tree = function () {
    function Tree() {
        _classCallCheck(this, Tree);

        this.rootNode = null;
    }

    _createClass(Tree, [{
        key: "addNode",
        value: function addNode(data, parent) {
            var newNode = new NodeImpl(data);
            if (!this.rootNode) {
                this.rootNode = newNode;
            }
            if (parent) this.addLink(newNode, parent);
            return newNode;
        }
    }, {
        key: "addLink",
        value: function addLink(to, from) {
            to.nextNode.push(from);
            from.nextNode.push(to);
        }
    }, {
        key: "removeLink",
        value: function removeLink(node1, node2) {
            node1.nextNode = node1.nextNode.filter(function (item) {
                return item.data.pointX !== node2.data.pointX || item.data.pointY !== node2.data.pointY;
            });
            node2.nextNode = node2.nextNode.filter(function (item) {
                return item.data.pointX !== node1.data.pointX || item.data.pointY !== node1.data.pointY;
            });
        }
    }, {
        key: "removeNode",
        value: function removeNode(removedNode) {
            removedNode.nextNode.forEach(function (adjNode, i) {
                removedNode.nextNode[i].nextNode = adjNode.nextNode.filter(function (item) {
                    return item.data.pointX !== removedNode.data.pointX || item.data.pointY !== removedNode.data.pointY;
                });
            });
        }
    }, {
        key: "root",
        get: function get() {
            return this.rootNode;
        }
    }]);

    return Tree;
}();

function NodeImpl(data) {
    this.nextNode = [];
    this.data = data;
}

NodeImpl.prototype.addNode = function (node) {
    this.nextNode.push(node);
    return this.nextNode;
};

exports.default = Tree;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debugGame = exports.startGame = undefined;

var _area = __webpack_require__(25);

var _area2 = _interopRequireDefault(_area);

var _world = __webpack_require__(26);

var _world2 = _interopRequireDefault(_world);

var _loader = __webpack_require__(37);

var _loader2 = _interopRequireDefault(_loader);

var _menu_page = __webpack_require__(32);

var _menu_page2 = _interopRequireDefault(_menu_page);

var _play_page = __webpack_require__(33);

var _play_page2 = _interopRequireDefault(_play_page);

var _connection = __webpack_require__(34);

var _connection2 = _interopRequireDefault(_connection);

var _room = __webpack_require__(35);

var _room2 = _interopRequireDefault(_room);

var _user = __webpack_require__(6);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* add for debug */

function loadResourse(callback) {
    var needFilesForProjectManifest = [{ id: "playButton", src: "./img/play.png" }];

    new _loader2.default(needFilesForProjectManifest, callback);
}

function startGame(elementDOM) {
    var connectionService = null;
    var room = null;

    var iAmReady = function iAmReady(countChoose) {
        if (room === null) {
            alert("room ~ null");
            return;
        }

        room.iAmReady(countChoose);
    };

    var area = new _area2.default(elementDOM);
    var world = new _world2.default(elementDOM, area);

    // No connection
    var menuPage = new _menu_page2.default(world, iAmReady);

    var startConnect = function startConnect(result) {
        connectionService = new _connection2.default(function (status) {
            if (status === RES_ERROR) {
                alert("error connect server!"); // error
                return;
            }
            connectionService.createPingPong();
            var playPage = new _play_page2.default(world, connectionService, null); // TODO loading

            var ifstop = function ifstop() {
                /* stop */
                menuPage.startPage();
            };

            connectionService.addEventListen(DATATYPE_HELLO, function (json) {
                var id = json["id"];
                var nickname = json["nickname"];

                if (id === null || nickname === null) {
                    alert("error");
                    return;
                }

                console.log("start after hello");
                menuPage.startPage(result);
                menuPage.startRoomChoose(connectionService);

                room = new _room2.default(connectionService, menuPage, id, nickname, function (room, height, width) {
                    area.setSize(height, width);
                    world.reconfigure();
                    menuPage.stopPage(); // destruct room choose
                    playPage.startPage(room);
                });
            });
        });
    };

    loadResourse(function (result) {
        console.log(result);
        startConnect(result);
    });
}

function debugGame(elementDOM) {
    var connectionService = null;
    var room = null;

    var area = new _area2.default(elementDOM);
    var world = new _world2.default(elementDOM, area);

    var iAmReady = function iAmReady() {
        menuPage.stopPage();
        var user = new _user2.default(null, world, {
            beginX: 10, beginY: 10, id: 1,
            nickname: "noname", units: 100,
            color: "green"
        });

        user.setPerforming(true);

        new _play_page2.default(world, null).startPage(null);
    };

    var menuPage = new _menu_page2.default(world, iAmReady);

    loadResourse(function (result) {
        console.log(result);
        menuPage.startPage(result);
    });
}

exports.startGame = startGame;
exports.debugGame = debugGame;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base_page = __webpack_require__(8);

var _base_page2 = _interopRequireDefault(_base_page);

var _performBoard = __webpack_require__(21);

var _performBoard2 = _interopRequireDefault(_performBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuPage = function (_BasePage) {
    _inherits(MenuPage, _BasePage);

    function MenuPage(world, callBackIfRun) {
        _classCallCheck(this, MenuPage);

        var _this = _possibleConstructorReturn(this, (MenuPage.__proto__ || Object.getPrototypeOf(MenuPage)).call(this, world));

        _this.callbackIfRun = callBackIfRun;

        _this.children = [];

        _this.buttonMenu = null;
        _this.roomBoard = null; /* choose room */
        _this.listeners = [];
        return _this;
    }

    _createClass(MenuPage, [{
        key: 'startPage',
        value: function startPage(resource) {
            var _this2 = this;

            resource = resource || this.resource;
            this.resource = resource;
            this.stoped = false;
            var cellCenter = this.world.area.getExactPosition(this.world.area.fullSize.x / 2, this.world.area.fullSize.y / 2);
            var cenX = cellCenter.x,
                cenY = cellCenter.y;
            this.world.setOffsetForCenter(cenX, cenY);
            scrollTo(0, 0);
            document.body.style.overflow = "hidden";

            this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
            this.buttonMenu.x = cenX;
            this.buttonMenu.y = cenY;
            this.buttonMenu.regX = this.buttonMenu.image.width / 2;
            this.buttonMenu.regY = this.buttonMenu.image.height / 2;

            this.world.update();
            this.world.area.update();

            this.buttonAnimate = function (event) {
                this.buttonMenu.rotation += 2;
                this.world.update();
            };

            var onClickRun = function onClickRun(event) {
                _this2.callbackIfRun();
            };

            this.buttonMenu.on('click', onClickRun.bind(this));
        }
    }, {
        key: 'startRoomChoose',
        value: function startRoomChoose(connection) {
            var _this3 = this;

            connection = connection || this.connection;
            this.connection = connection;
            this.roomBoard = new _performBoard2.default(document.getElementById("push-container"), this.chooseRoomByClient.bind(this));

            this.listeners.push({
                method: DATATYPE_ROOMMANAGER_UPDATE,
                id: connection.addEventListen(DATATYPE_ROOMMANAGER_UPDATE, function (json) {
                    /* update room status */
                    if (_this3.stoped) {
                        _this3.startPage();
                        _this3.startRoomChoose();
                    }
                    _this3.roomBoard.update(json["freerooms"]);
                })
            });
        }
    }, {
        key: 'chooseRoomByClient',
        value: function chooseRoomByClient(chooseCount) {
            this.roomBoard.destruct();
            this.callbackIfRun(chooseCount);
        }
    }, {
        key: 'stopPage',
        value: function stopPage() {
            this.roomBoard.destruct();
            this.world.map.removeChild(this.buttonMenu);
            //    this.removeAllListeners();
            this.stoped = true;
            this.world.update();
        }
    }, {
        key: 'setEnableRotation',
        value: function setEnableRotation(flag) {
            if (flag) {
                if (createjs.Ticker.hasEventListener("tick")) return;

                createjs.Ticker.addEventListener("tick", this.buttonAnimate.bind(this));
                createjs.Ticker.setInterval(10);
                createjs.Ticker.setFPS(60);
            } else {
                createjs.Ticker.removeAllEventListeners();
                createjs.Ticker.paused = true;
            }
            this.world.update();
        }
    }, {
        key: 'removeAllListeners',
        value: function removeAllListeners() {
            var _this4 = this;

            if (this.connection) this.listeners.forEach(function (item) {
                _this4.connection.deleteListenIndex(item);
            });
            this.listeners = [];
        }
    }]);

    return MenuPage;
}(_base_page2.default);

exports.default = MenuPage;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(6);

var _user2 = _interopRequireDefault(_user);

var _tower = __webpack_require__(2);

var _tower2 = _interopRequireDefault(_tower);

var _gameControls = __webpack_require__(24);

var _gameControls2 = _interopRequireDefault(_gameControls);

var _base_page = __webpack_require__(8);

var _base_page2 = _interopRequireDefault(_base_page);

var _enemy = __webpack_require__(27);

var _enemy2 = _interopRequireDefault(_enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPage = function (_BasePage) {
    _inherits(PlayPage, _BasePage);

    function PlayPage(world, connection) {
        _classCallCheck(this, PlayPage);

        var _this = _possibleConstructorReturn(this, (PlayPage.__proto__ || Object.getPrototypeOf(PlayPage)).call(this, world));

        _this.enemiesData = [];
        _this.enemiesObject = {};

        _this.user = null;

        _this.connection = connection;

        _this.nowPerforming = null;
        _this.listeners = [];
        return _this;
    }

    _createClass(PlayPage, [{
        key: 'splitUsers',
        value: function splitUsers(array, meId) {
            var me = null;
            for (var user in array) {
                array[user].color = window.userColors[user % 4];
                this.controls.scoreBoard.addPlayerToScoreBoard(array[user].nickname, array[user].units);
                if (array[user].id === meId) {
                    me = array[user];
                } else {
                    this.enemiesData.push(array[user]);
                }
            }
            return me;
        }
    }, {
        key: 'startPage',
        value: function startPage(room) {
            var _this2 = this;

            this.room = room;
            this.enemiesObject = [];
            this.user = null;
            this.controls = this.controls || new _gameControls2.default();
            this.controls.pushNotify({ text: "Start Game !" });
            this.controls.menuBoard.addExitListener(function () {
                _this2.connection.send(ACTION_EXIT_ROOM);
                _this2.stopPage();
            });
            //   debugger;
            var lastScores = null;

            var perfomingPlayer = room.pid;

            var meData = this.splitUsers(room.players, room.meId);
            this.user = new _user2.default(this.connection, this.world, meData);

            if (perfomingPlayer === room.meId) {
                this.nowPerforming = this.user;
                this.user.setPerforming(true);
            }

            for (var index in this.enemiesData) {
                var enemyData = this.enemiesData[index];
                this.enemiesObject[enemyData.id] = new _enemy2.default(this.connection, this.world, enemyData);
                if (enemyData.id === perfomingPlayer) {
                    this.nowPerforming = this.enemiesObject[enemyData.id];
                    this.enemiesObject[enemyData.id].setPerforming(true);
                }
            }

            this.listeners.push({
                method: DATATYPE_NEWBONUS,
                id: this.connection.addEventListen(DATATYPE_NEWBONUS, function (json) {
                    var bonuses = json["bonuses"];
                    bonuses.forEach(function (item) {
                        var x = item.x;
                        var y = item.y;
                        var value = item.value;
                        if (_this2.world.getTowerFromMap({ x: x, y: y })) {
                            return;
                        }
                        var bonus = new _tower2.default(_this2.world, x, y, towerType.BONUS, value, null);
                        _this2.world.addTowerToMap({ x: x, y: y }, bonus);
                        bonus.draw();
                    });
                })
            });

            this.listeners.push({
                method: DATATYPE_PLAYER_DISCONNECT,
                id: this.connection.addEventListen(DATATYPE_PLAYER_DISCONNECT, function (json) {
                    var pid = json["pid"];
                    var nextpid = json["giveMoveToPid"];
                    _this2.enemiesObject[pid].removeAll();
                    delete _this2.enemiesObject[pid];
                    _this2.nowPerforming.setPerforming(false);
                    if (nextpid === _this2.user.pid) _this2.nowPerforming = _this2.user;else _this2.nowPerforming = _this2.enemiesObject[nextpid];
                    _this2.nowPerforming.setPerforming(true);
                    _this2.controls.pushNotify({ text: "Now playing " + _this2.nowPerforming.nickName + " !" });
                })
            });

            this.listeners.push({
                method: DATATYPE_YOU_WIN,
                id: this.connection.addEventListen(DATATYPE_YOU_WIN, function () {
                    _this2.stopPage();
                })
            });

            /* code for algys */
            this.listeners.push({
                method: DATATYPE_PLAYERMOVE,
                id: this.connection.addEventListen(DATATYPE_PLAYERMOVE, function (json) {
                    var nextpid = json["nextpid"];
                    var pid = json["pid"];
                    var result = json["result"];

                    _this2.nowPerforming.setPerforming(false);
                    if (nextpid === _this2.user.pid) _this2.nowPerforming = _this2.user;else _this2.nowPerforming = _this2.enemiesObject[nextpid];

                    console.log("Draw !");

                    var valueUpdates = json["valueUpdate"];
                    var newNodes = json["newNodes"];
                    var newLinks = json["newLinks"];
                    var removedNodes = json["removedNodes"];
                    var removedLinks = json["removedLinks"];
                    var scores = json["scores"];
                    var deadPid = json["deadpid"];

                    //   debugger;

                    if (deadPid) {
                        if (deadPid !== _this2.user.pid) {
                            _this2.enemiesObject[deadPid].removeAll();
                            delete _this2.enemiesObject[deadPid];
                        } else {
                            _this2.stopPage();
                            return;
                        }
                    }

                    if (removedLinks) {
                        removedLinks.forEach(function (removedLink) {
                            var from = removedLink["l"];
                            var to = removedLink["r"];
                            var fromTower = _this2.world.getTowerFromMap(from);
                            var toTower = _this2.world.getTowerFromMap(to);
                            var pid = fromTower.client_id;
                            if (pid !== _this2.user.pid) _this2.enemiesObject[pid].removeLink(fromTower.point, toTower.point);else _this2.user.removeLink(fromTower.point, toTower.point);
                        });
                    }

                    if (removedNodes) {
                        removedNodes.forEach(function (removedNode) {
                            var pid = _this2.world.getTowerFromMap(removedNode).client_id;
                            if (pid === _this2.user.pid) _this2.user.removeNode(removedNode);else _this2.enemiesObject[pid].removeNode(removedNode);
                        });
                    }

                    if (newNodes) {
                        newNodes.forEach(function (newNode) {
                            var pid = newNode["pid"];
                            if (pid !== _this2.user.pid) {
                                _this2.enemiesObject[pid].addNewTower(newNode);
                            }
                        });
                    }

                    if (valueUpdates) {
                        valueUpdates.forEach(function (update) {
                            var point = {
                                x: update["x"],
                                y: update["y"]
                            };
                            var newUnits = update["value"];
                            var tower = _this2.world.getTowerFromMap(point);
                            var pid = tower.client_id;
                            if (pid !== _this2.user.pid) _this2.world.getTowerFromMap(point).changeUnits(newUnits);
                        });
                    }

                    if (pid === _this2.user.pid) if (result === "ACCEPT_WIN" || result === "ACCEPT_LOSE") _this2.user.acceptMove(json);

                    if (newLinks) {
                        newLinks.forEach(function (newLink) {
                            var from = newLink["l"];
                            var to = newLink["r"];
                            var fromTower = _this2.world.getTowerFromMap(from);
                            var toTower = _this2.world.getTowerFromMap(to);
                            var pid = fromTower.client_id;
                            if (pid !== _this2.user.pid) _this2.enemiesObject[pid].createLink(fromTower, toTower);else _this2.user.createLink(fromTower, toTower);
                        });
                    }

                    if (scores) {
                        if (JSON.stringify(lastScores) !== JSON.stringify(scores)) {
                            _this2.controls.scoreBoard.clear();
                            scores.forEach(function (score) {
                                var nickname = void 0;
                                if (score.pid === _this2.user.pid) nickname = _this2.user.nickName;else nickname = _this2.enemiesObject[score.pid].nickName;
                                _this2.controls.scoreBoard.addPlayerToScoreBoard(nickname, score.score);
                            });
                        }
                    }

                    _this2.nowPerforming.setPerforming(true);
                    _this2.controls.pushNotify({ text: "Now playing " + _this2.nowPerforming.nickName + " !" });
                    _this2.world.update();
                })
            });

            this.listeners.push({
                method: DATATYPE_ROOM_DESTRUCT,
                id: this.connection.addEventListen(DATATYPE_ROOM_DESTRUCT, function (json) {
                    alert("Room is destructed !");
                    _this2.stopPage();
                })
            });

            /* was kicked */
            this.listeners.push({
                method: DATATYPE_ERROR,
                id: this.connection.addEventListen(DATATYPE_ERROR, function (json) {
                    alert("You was kicked!");
                    _this2.stopPage();
                })
            });

            /* event status server and pid*/
            this.listeners.push({
                method: DATATYPE_ROOMINFO,
                id: this.connection.addEventListen(DATATYPE_ROOMINFO, function (json) {
                    var status = json["status"];
                    _this2.world.area.setSize(json["fieldHeight"], json["fieldWidth"]);
                    if (status === STATUS_PLAYING && "pid" in json) {
                        var pid = json["pid"];

                        if (pid === _this2.user.pid) {
                            _this2.nowPerforming = _this2.user;
                        } else if (pid in _this2.enemiesObject) {
                            _this2.nowPerforming = _this2.enemiesObject[pid];
                        }
                        _this2.nowPerforming.setPerforming(true);
                        _this2.world.update();
                    } else {
                        alert("wtf!!!!");
                    }
                })
            });

            window.onbeforeunload = function () {
                _this2.connection.disconnect();
            };
        }
    }, {
        key: 'removeAllListeners',
        value: function removeAllListeners() {
            var _this3 = this;

            if (this.connection) this.listeners.forEach(function (item) {
                _this3.connection.deleteListenIndex(item.method, item.id);
            });
            this.listeners = [];
        }
    }, {
        key: 'stopPage',
        value: function stopPage() {
            this.world.map.removeAllChildren();
            this.world.update();
            this.world.clear();
            this.controls.destruct();
            this.removeAllListeners();
            this.user.destruct();
            delete this.user;
            delete this.enemiesObject;
            this.user = null;
            this.enemiesObject = [];
            this.enemiesData = [];
            //this.connection.send(ACTION_EXIT_ROOM);

            document.exitPointerLock();
        }
    }]);

    return PlayPage;
}(_base_page2.default);

exports.default = PlayPage;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = __webpack_require__(36);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function () {
    function Connection(finishConnect) {
        _classCallCheck(this, Connection);

        this.socket = new _server2.default(Connection.parseHost(conf.ip[conf.baseIP]), finishConnect);
        this.socket.onMessage = this.onMessage.bind(this);

        this.eventMessage = null;
        this.methodMap = {};

        this.pinger = null;
        this.destructEvents = [];
    }

    _createClass(Connection, [{
        key: "createPingPong",
        value: function createPingPong() {
            var _this = this;

            if (!this.pinger) {
                this.pinger = setInterval(function () {
                    _this.send(ACTION_PING);
                }, mainConfiguration.pingPongTime);
            }
        }
    }, {
        key: "removePingPong",
        value: function removePingPong() {
            if (this.pinger) clearInterval(this.pinger);
        }
    }, {
        key: "addEventListenDestroy",
        value: function addEventListenDestroy(event) {
            this.destructEvents.push(event);
        }
    }, {
        key: "addEventListen",
        value: function addEventListen(nameMethod, callback) {
            if (!(nameMethod in this.methodMap)) {
                this.methodMap[nameMethod] = [];
            }

            return this.methodMap[nameMethod].push(callback) - 1;
        }

        // TODO

    }, {
        key: "deleteListen",
        value: function deleteListen(nameMethod) {
            for (var i in this.methodMap[nameMethod]) {
                delete this.methodMap[nameMethod][i];
            }
        }
    }, {
        key: "deleteListenIndex",
        value: function deleteListenIndex(nameMethod, id) {
            debugger;
            if (nameMethod in this.methodMap) {
                this.methodMap[nameMethod].splice(id, 1);
                console.log(this.methodMap[nameMethod]);
                return true;
            }

            console.log("wtf!");
            return false;
        }
    }, {
        key: "onMessage",
        value: function onMessage(json) {
            console.log("Get json: " + JSON.stringify(json));
            if (json["datatype"] in this.methodMap) {
                this.methodMap[json["datatype"]].map(function (func) {
                    return func(json);
                });
            }
        }
    }, {
        key: "send",
        value: function send(action, json) {
            json = json || {};
            json.action = action;
            this.socket.sendData(json);
        }
    }, {
        key: "disconnect",
        value: function disconnect() {
            this.socket.disconnect();
        }
    }], [{
        key: "parseHost",
        value: function parseHost(ip) {
            return conf.ip[conf.baseIP].prefixSocket + ip.host + ip.port + ip.path;
        }
    }]);

    return Connection;
}();

exports.default = Connection;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Room = function () {
    function Room(connection, waitPage, id, nickName, runGame) {
        var _this = this;

        _classCallCheck(this, Room);

        this.meId = id;
        this.meNickName = nickName;

        this.players = new Array(conf.countUsersInRoom);

        this.roomId = -1;
        this.pid = -1;

        this.runGame = runGame;
        this.waitPage = waitPage;

        this.connection = connection;

        this.connection.addEventListen(DATATYPE_ROOMINFO, function (json) {
            var roomId = json["roomID"];
            var status = json["status"];
            var players = json["players"];
            var pID = json["pid"];
            _this.players = players;

            if (status === STATUS_PLAYING) {
                _this.pid = pID;

                _this.runGame(_this, json["fieldHeight"], json["fieldWidth"]);

                _this.waitPage.setEnableRotation(false);
            }

            console.log("Get [room.js]: " + roomId);
        });
    }

    _createClass(Room, [{
        key: "deleteListenRoomInfo",
        value: function deleteListenRoomInfo() {
            this.connection.deleteListen(DATATYPE_ROOMINFO);
        }
    }, {
        key: "iAmReady",
        value: function iAmReady(countChoose) {
            // TODO update api
            this.connection.send(ACTION_GIVE_ME_ROOM, countChoose ? { "roomCapacity": countChoose } : {});

            this.waitPage.setEnableRotation(true);
        }
    }, {
        key: "addUser",
        value: function addUser(id, nickName) {
            this.usersNames.push({
                id: id,
                nickName: nickName
            });
        }
    }]);

    return Room;
}();

exports.default = Room;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerConnect = function () {
    /**
     * @param server as string
     * @param opened
     */
    function ServerConnect(server, opened) {
        _classCallCheck(this, ServerConnect);

        this.statusServer = false; // TODO change

        this.socket = new WebSocket(server);

        this.opened = opened;

        this.socket.onopen = function () {
            opened(RES_OK);
        };

        this.socket.onerror = function () {
            opened(RES_ERROR);
        };
    }

    /**
     * @param json_data as Object
     * @param callback  as function
     */


    _createClass(ServerConnect, [{
        key: "sendData",
        value: function sendData(json_data) {
            var needSend = ServerConnect.toJson(json_data);
            console.log("Send: " + needSend);
            this.socket.send(needSend);
        }
    }, {
        key: "disconnect",
        value: function disconnect() {
            this.socket.close();
        }

        /**
         * @param func as function(event)
         */

    }, {
        key: "onMessage",
        set: function set(func) {
            this.socket.onmessage = function (event) {
                func(ServerConnect.fromJson(event.data));
            };
        }
    }], [{
        key: "toJson",
        value: function toJson(obj) {
            return JSON.stringify(obj);
        }
    }, {
        key: "fromJson",
        value: function fromJson(text) {
            return JSON.parse(text);
        }
    }]);

    return ServerConnect;
}();

exports.default = ServerConnect;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader(srcManifest, callback) {
        _classCallCheck(this, Loader);

        this.queue = new createjs.LoadQueue(true);
        this.queue.loadManifest(srcManifest);
        this.queue.on("complete", this.handleLoadAllFile.bind(this));

        this.fromCallback = callback;
    }

    _createClass(Loader, [{
        key: "handleLoadAllFile",
        value: function handleLoadAllFile(event) {
            // Example work with queue
            /* queue.getResult(Name) */
            // TODO check errors

            this.fromCallback(this.queue);
        }
    }]);

    return Loader;
}();

exports.default = Loader;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _router = __webpack_require__(3);

var _about = __webpack_require__(10);

var _about2 = _interopRequireDefault(_about);

var _worker_loader = __webpack_require__(13);

var _worker_loader2 = _interopRequireDefault(_worker_loader);

var _util = __webpack_require__(4);

var _controller = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var url = window.location.pathname;

    if (mainConfiguration.needAppCache) (0, _worker_loader2.default)();

    if ((0, _util.isLogin)()) {
        (0, _util.setOnlyBar)();
        _router.routerInstance.setRouterPack(_controller.mainPack);
    } else _router.routerInstance.setRouterPack(_controller.loginPack);

    /* static text */
    var aboutPage = document.getElementById('about');
    var about = new _about2.default();
    aboutPage.innerHTML = about.getElement();

    /* start clickable all objects !!! */
    _router.routerInstance.start();
    _router.routerInstance.startPage(url);
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;function highscore(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;;var locals_for_with = locals || {};(function (load, users) {
    if (load) {
      pug_html = pug_html + "<div class=\"cyclic-loader\"></div>";
    } else {
      pug_html = pug_html + "<div class=\"inner cover\"><h1 class=\"cover-heading\">Leaderboard</h1><div class=\"col-md-3\"></div><div class=\"col-md-6\"><table class=\"table table-bordered table-condensed Leader-table\"><thead><tr><th>Nickname</th><th>Score</th></tr></thead><tbody>";
      // iterate users
      ;(function () {
        var $$obj = users;
        if ('number' == typeof $$obj.length) {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var user = $$obj[pug_index0];
            pug_html = pug_html + "<tr><td>" + pug_escape(null == (pug_interp = user["nick"]) ? "" : pug_interp) + "</td><td>" + pug_escape(null == (pug_interp = user["highscore"]) ? "" : pug_interp) + "</td></tr>";
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var user = $$obj[pug_index0];
            pug_html = pug_html + "<tr><td>" + pug_escape(null == (pug_interp = user["nick"]) ? "" : pug_interp) + "</td><td>" + pug_escape(null == (pug_interp = user["highscore"]) ? "" : pug_interp) + "</td></tr>";
          }
        }
      }).call(this);

      pug_html = pug_html + "</tbody></table></div><div class=\"col-md-3\"></div></div>";
    }
  }).call(this, "load" in locals_for_with ? locals_for_with.load : typeof load !== "undefined" ? load : undefined, "users" in locals_for_with ? locals_for_with.users : typeof users !== "undefined" ? users : undefined);;return pug_html;
}
exports.default = highscore;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function pug_attr(t, e, n, f) {
  return e !== !1 && null != e && (e || "class" !== t && "style" !== t) ? e === !0 ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || e.indexOf('"') === -1) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : "";
}
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;function room(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;;var locals_for_with = locals || {};(function (count, countText, roomText) {
    pug_html = pug_html + "<div class=\"cyclic-menu-room\"><div class=\"cyclic-menu-room-title\">" + pug_escape(null == (pug_interp = roomText) ? "" : pug_interp) + "</div><div" + (" class=\"cyclic-menu-room-count\"" + pug_attr("id", "cyclic-menu-room-count-" + count, true, false)) + ">" + pug_escape(null == (pug_interp = countText) ? "" : pug_interp) + "</div></div>";
  }).call(this, "count" in locals_for_with ? locals_for_with.count : typeof count !== "undefined" ? count : undefined, "countText" in locals_for_with ? locals_for_with.countText : typeof countText !== "undefined" ? countText : undefined, "roomText" in locals_for_with ? locals_for_with.roomText : typeof roomText !== "undefined" ? roomText : undefined);;return pug_html;
}
exports.default = room;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;function roombase(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;;var locals_for_with = locals || {};(function (quickStart) {
    pug_html = pug_html + "<div class=\"div-center\"><div id=\"cyclic-rooms\"><div id=\"cyclic-rooms-container\"></div><div class=\"cyclic-rooms-buttons\"><button type=\"button\" id=\"cyclic-rooms-button-quick\"> " + pug_escape(null == (pug_interp = quickStart) ? "" : pug_interp) + "</button></div></div></div>";
  }).call(this, "quickStart" in locals_for_with ? locals_for_with.quickStart : typeof quickStart !== "undefined" ? quickStart : undefined);;return pug_html;
}
exports.default = roombase;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function template(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;pug_html = pug_html + "<h1 class=\"cover-heading\">About</h1><p class=\"lead\">Acyclic is a very interesting game, but we still have to do a lot of work to make it work.Now you can see only this sample text and some other pages in this promo site.</p><div style=\"margin-top: 10px;\"><h3><a href=\"/back\">back</a></h3></div>";;return pug_html;
}
exports.default = template;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutView = function (_BaseView) {
  _inherits(AboutView, _BaseView);

  function AboutView() {
    _classCallCheck(this, AboutView);

    return _possibleConstructorReturn(this, (AboutView.__proto__ || Object.getPrototypeOf(AboutView)).apply(this, arguments));
  }

  return AboutView;
}(_baseView2.default);

exports.default = AboutView;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

var _init = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameView = function (_BaseView) {
    _inherits(GameView, _BaseView);

    function GameView(node) {
        _classCallCheck(this, GameView);

        var _this = _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this, node));

        _this.pushContainer = document.getElementById("push-container");
        return _this;
    }

    _createClass(GameView, [{
        key: 'show',
        value: function show() {
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'show', this).call(this);
            var div = document.getElementById("site-interface");
            div.style.visibility = 'hidden';
            this.pushContainer.style.visibility = 'visible';

            if (!mainConfiguration.debugMode) (0, _init.startGame)(this.node);else (0, _init.debugGame)(this.node);
        }
    }, {
        key: 'hide',
        value: function hide() {
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'hide', this).call(this);

            debugger;
            this.pushContainer.style.visibility = 'hidden';
            var div = document.getElementById("site-interface");
            div.style.visibility = "visible";
        }
    }]);

    return GameView;
}(_baseView2.default);

exports.default = GameView;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

var _highscore = __webpack_require__(39);

var _highscore2 = _interopRequireDefault(_highscore);

var _request = __webpack_require__(9);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderBoardView = function (_BaseView) {
    _inherits(LeaderBoardView, _BaseView);

    function LeaderBoardView() {
        _classCallCheck(this, LeaderBoardView);

        return _possibleConstructorReturn(this, (LeaderBoardView.__proto__ || Object.getPrototypeOf(LeaderBoardView)).apply(this, arguments));
    }

    _createClass(LeaderBoardView, [{
        key: 'updateLeaderBoard',
        value: function updateLeaderBoard(response) {
            var _this2 = this;

            if (response.status != 200) {
                alert("wtf!");
                return;
            }

            console.log("lol");
            response.json().then(function (json) {
                console.log(json);
                _this2.node.innerHTML = (0, _highscore2.default)({ users: json["scoreBoard"] });
            });
        }
    }, {
        key: 'show',
        value: function show() {
            new _request2.default(defaultServer).addResponse(this.updateLeaderBoard.bind(this)).request('/scoreboard?page=1');

            this.node.innerHTML = (0, _highscore2.default)({ load: true });

            this.node.hidden = false;
            this.node.style.display = "contents";
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.node.hidden = true;
            //this.node.style.display = "none";
        }
    }]);

    return LeaderBoardView;
}(_baseView2.default);

exports.default = LeaderBoardView;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginView = function (_BaseView) {
  _inherits(LoginView, _BaseView);

  function LoginView() {
    _classCallCheck(this, LoginView);

    return _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).apply(this, arguments));
  }

  return LoginView;
}(_baseView2.default);

exports.default = LoginView;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuView = function (_BaseView) {
  _inherits(MenuView, _BaseView);

  function MenuView() {
    _classCallCheck(this, MenuView);

    return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).apply(this, arguments));
  }

  return MenuView;
}(_baseView2.default);

exports.default = MenuView;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationView = function (_BaseView) {
  _inherits(RegistrationView, _BaseView);

  function RegistrationView() {
    _classCallCheck(this, RegistrationView);

    return _possibleConstructorReturn(this, (RegistrationView.__proto__ || Object.getPrototypeOf(RegistrationView)).apply(this, arguments));
  }

  return RegistrationView;
}(_baseView2.default);

exports.default = RegistrationView;

/***/ })
/******/ ]);