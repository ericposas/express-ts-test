/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/items.ts":
/*!*******************************!*\
  !*** ./src/handlers/items.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\nexports.default = {\n    getItems: function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var mongoClient, result, err_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 3, , 4]);\n                        mongoClient = new mongodb_1.MongoClient(index_1.mongoConnectionString, index_1.mongoOptions);\n                        return [4 /*yield*/, mongoClient.connect()];\n                    case 1:\n                        _a.sent();\n                        return [4 /*yield*/, mongoClient.db('express-app').collection('items').find().toArray()];\n                    case 2:\n                        result = _a.sent();\n                        res.statusCode = 200;\n                        res.json({ message: 'here are your query results', result: result });\n                        mongoClient.close();\n                        return [3 /*break*/, 4];\n                    case 3:\n                        err_1 = _a.sent();\n                        throw new mongodb_1.MongoError(err_1);\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    },\n    postItem: function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var app, _a, name_1, cost, mongoClient, findResult, err_2;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        if (!(req.body.name && req.body.cost)) return [3 /*break*/, 7];\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 5, , 6]);\n                        app = req.app, _a = req.body, name_1 = _a.name, cost = _a.cost;\n                        mongoClient = new mongodb_1.MongoClient(index_1.mongoConnectionString, index_1.mongoOptions);\n                        return [4 /*yield*/, mongoClient.connect()];\n                    case 2:\n                        _b.sent();\n                        return [4 /*yield*/, mongoClient.db('express-app').collection('items').insertOne({ name: name_1, cost: cost })];\n                    case 3:\n                        _b.sent();\n                        return [4 /*yield*/, mongoClient.db('express-app').collection('items').find().toArray()];\n                    case 4:\n                        findResult = _b.sent();\n                        res.statusCode = 201;\n                        res.json({ message: 'post was successful', result: findResult });\n                        mongoClient.close();\n                        return [3 /*break*/, 6];\n                    case 5:\n                        err_2 = _b.sent();\n                        throw new mongodb_1.MongoError(err_2);\n                    case 6: return [3 /*break*/, 8];\n                    case 7:\n                        res.statusCode = 400;\n                        res.json({\n                            message: 'body params not included'\n                        });\n                        _b.label = 8;\n                    case 8: return [2 /*return*/];\n                }\n            });\n        });\n    }\n};\n\n\n//# sourceURL=webpack://express-ts-test/./src/handlers/items.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nexports.__esModule = true;\nexports.mongoOptions = exports.mongoConnectionString = void 0;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nvar _a = process.env, DB_USER = _a.DB_USER, DB_PWD = _a.DB_PWD, DB_NAME = _a.DB_NAME, DB_URI = _a.DB_URI, PORT = _a.PORT;\nexports.mongoConnectionString = \"mongodb+srv://\" + DB_USER + \":\" + DB_PWD + \"@\" + DB_URI + \"/\" + DB_NAME + \"?retryWrites=true&w=majority\";\nexports.mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };\nvar app = express();\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(routes_1.routes);\napp.get('/', function (req, res) {\n    res.send({\n        message: 'testing..',\n    });\n});\nif (__webpack_require__.c[__webpack_require__.s] === module) { // true if file is executed\n    app.listen(PORT, function () {\n        console.log(\"server started at localhost: \" + PORT);\n    });\n}\nexports.default = app;\n\n\n//# sourceURL=webpack://express-ts-test/./src/index.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.routes = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar items_1 = __webpack_require__(/*! ./handlers/items */ \"./src/handlers/items.ts\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nvar routes = express_1.Router();\nexports.routes = routes;\nroutes\n    .route('/items')\n    .get(items_1[\"default\"].getItems)\n    .post(items_1[\"default\"].postItem);\n\n\n//# sourceURL=webpack://express-ts-test/./src/routes.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ 	
/******/ })()
;