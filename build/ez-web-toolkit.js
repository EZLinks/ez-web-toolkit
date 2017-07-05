(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ez-web-toolkit"] = factory();
	else
		root["ez-web-toolkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * problem result
 */
var ProblemResult = (function () {
    function ProblemResult() {
    }
    return ProblemResult;
}());
exports.ProblemResult = ProblemResult;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import * as BaseClasses from './baseClasses/index';
//import * as Components from './components/index';
var Constants = __webpack_require__(2);
exports.Constants = Constants;
var Enums = __webpack_require__(5);
exports.Enums = Enums;
var Exceptions = __webpack_require__(10);
exports.Exceptions = Exceptions;
var Models = __webpack_require__(12);
exports.Models = Models;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eventConsts_1 = __webpack_require__(3);
exports.EventConsts = eventConsts_1.EventConsts;
var typeConsts_1 = __webpack_require__(4);
exports.TypeConsts = typeConsts_1.TypeConsts;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The event constants.
 */
var EventConsts = (function () {
    function EventConsts() {
    }
    /**
     * The reload grid event name.
     */
    EventConsts.reloadGridEvent = 'reloadGrid';
    return EventConsts;
}());
exports.EventConsts = EventConsts;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * type constants.
 */
var TypeConsts = (function () {
    function TypeConsts() {
    }
    /**
     * The empty guid value.
     */
    TypeConsts.emptyGuid = '00000000-0000-0000-0000-000000000000';
    return TypeConsts;
}());
exports.TypeConsts = TypeConsts;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorState_1 = __webpack_require__(6);
exports.EditorState = editorState_1.EditorState;
var errorResponseType_1 = __webpack_require__(7);
exports.ErrorResponseType = errorResponseType_1.ErrorResponseType;
var httpStatusCode_1 = __webpack_require__(8);
exports.HttpStatusCode = httpStatusCode_1.HttpStatusCode;
var managerState_1 = __webpack_require__(9);
exports.ManagerState = managerState_1.ManagerState;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The state of the editor component.
 */
var EditorState;
(function (EditorState) {
    /**
     * Adding a new item.
     */
    EditorState[EditorState["Add"] = 0] = "Add";
    /**
     * Editing an existing item.
     */
    EditorState[EditorState["Edit"] = 1] = "Edit";
})(EditorState = exports.EditorState || (exports.EditorState = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error response types.
 */
var ErrorResponseType;
(function (ErrorResponseType) {
    ErrorResponseType[ErrorResponseType["ConnectionLost"] = 0] = "ConnectionLost";
    ErrorResponseType[ErrorResponseType["ProblemResult"] = 1] = "ProblemResult";
    ErrorResponseType[ErrorResponseType["ValidationProblemResult"] = 2] = "ValidationProblemResult";
})(ErrorResponseType = exports.ErrorResponseType || (exports.ErrorResponseType = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Http status code.
 */
var HttpStatusCode;
(function (HttpStatusCode) {
    //
    // Summary:
    //     Equivalent to HTTP status 100. System.Net.HttpStatusCode.Continue indicates that
    //     the client can continue with its request.
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    //
    // Summary:
    //     Equivalent to HTTP status 101. System.Net.HttpStatusCode.SwitchingProtocols indicates
    //     that the protocol version or protocol is being changed.
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    //
    // Summary:
    //     Equivalent to HTTP status 200. System.Net.HttpStatusCode.OK indicates that the
    //     request succeeded and that the requested information is in the response. This
    //     is the most common status code to receive.
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    //
    // Summary:
    //     Equivalent to HTTP status 201. System.Net.HttpStatusCode.Created indicates that
    //     the request resulted in a new resource created before the response was sent.
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    //
    // Summary:
    //     Equivalent to HTTP status 202. System.Net.HttpStatusCode.Accepted indicates that
    //     the request has been accepted for further processing.
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    //
    // Summary:
    //     Equivalent to HTTP status 203. System.Net.HttpStatusCode.NonAuthoritativeInformation
    //     indicates that the returned metainformation is from a cached copy instead of
    //     the origin server and therefore may be incorrect.
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    //
    // Summary:
    //     Equivalent to HTTP status 204. System.Net.HttpStatusCode.NoContent indicates
    //     that the request has been successfully processed and that the response is intentionally
    //     blank.
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    //
    // Summary:
    //     Equivalent to HTTP status 205. System.Net.HttpStatusCode.ResetContent indicates
    //     that the client should reset (not reload) the current resource.
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    //
    // Summary:
    //     Equivalent to HTTP status 206. System.Net.HttpStatusCode.PartialContent indicates
    //     that the response is a partial response as requested by a GET request that includes
    //     a byte range.
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    //
    // Summary:
    //     Equivalent to HTTP status 300. System.Net.HttpStatusCode.MultipleChoices indicates
    //     that the requested information has multiple representations. The default action
    //     is to treat this status as a redirect and follow the contents of the Location
    //     header associated with this response.
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    //
    // Summary:
    //     Equivalent to HTTP status 300. System.Net.HttpStatusCode.Ambiguous indicates
    //     that the requested information has multiple representations. The default action
    //     is to treat this status as a redirect and follow the contents of the Location
    //     header associated with this response.
    HttpStatusCode[HttpStatusCode["Ambiguous"] = 300] = "Ambiguous";
    //
    // Summary:
    //     Equivalent to HTTP status 301. System.Net.HttpStatusCode.MovedPermanently indicates
    //     that the requested information has been moved to the URI specified in the Location
    //     header. The default action when this status is received is to follow the Location
    //     header associated with the response.
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    //
    // Summary:
    //     Equivalent to HTTP status 301. System.Net.HttpStatusCode.Moved indicates that
    //     the requested information has been moved to the URI specified in the Location
    //     header. The default action when this status is received is to follow the Location
    //     header associated with the response. When the original request method was POST,
    //     the redirected request will use the GET method.
    HttpStatusCode[HttpStatusCode["Moved"] = 301] = "Moved";
    //
    // Summary:
    //     Equivalent to HTTP status 302. System.Net.HttpStatusCode.Found indicates that
    //     the requested information is located at the URI specified in the Location header.
    //     The default action when this status is received is to follow the Location header
    //     associated with the response. When the original request method was POST, the
    //     redirected request will use the GET method.
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    //
    // Summary:
    //     Equivalent to HTTP status 302. System.Net.HttpStatusCode.Redirect indicates that
    //     the requested information is located at the URI specified in the Location header.
    //     The default action when this status is received is to follow the Location header
    //     associated with the response. When the original request method was POST, the
    //     redirected request will use the GET method.
    HttpStatusCode[HttpStatusCode["Redirect"] = 302] = "Redirect";
    //
    // Summary:
    //     Equivalent to HTTP status 303. System.Net.HttpStatusCode.SeeOther automatically
    //     redirects the client to the URI specified in the Location header as the result
    //     of a POST. The request to the resource specified by the Location header will
    //     be made with a GET.
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    //
    // Summary:
    //     Equivalent to HTTP status 303. System.Net.HttpStatusCode.RedirectMethod automatically
    //     redirects the client to the URI specified in the Location header as the result
    //     of a POST. The request to the resource specified by the Location header will
    //     be made with a GET.
    HttpStatusCode[HttpStatusCode["RedirectMethod"] = 303] = "RedirectMethod";
    //
    // Summary:
    //     Equivalent to HTTP status 304. System.Net.HttpStatusCode.NotModified indicates
    //     that the client's cached copy is up to date. The contents of the resource are
    //     not transferred.
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    //
    // Summary:
    //     Equivalent to HTTP status 305. System.Net.HttpStatusCode.UseProxy indicates that
    //     the request should use the proxy server at the URI specified in the Location
    //     header.
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    //
    // Summary:
    //     Equivalent to HTTP status 306. System.Net.HttpStatusCode.Unused is a proposed
    //     extension to the HTTP/1.1 specification that is not fully specified.
    HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
    //
    // Summary:
    //     Equivalent to HTTP status 307. System.Net.HttpStatusCode.TemporaryRedirect indicates
    //     that the request information is located at the URI specified in the Location
    //     header. The default action when this status is received is to follow the Location
    //     header associated with the response. When the original request method was POST,
    //     the redirected request will also use the POST method.
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    //
    // Summary:
    //     Equivalent to HTTP status 307. System.Net.HttpStatusCode.RedirectKeepVerb indicates
    //     that the request information is located at the URI specified in the Location
    //     header. The default action when this status is received is to follow the Location
    //     header associated with the response. When the original request method was POST,
    //     the redirected request will also use the POST method.
    HttpStatusCode[HttpStatusCode["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
    //
    // Summary:
    //     Equivalent to HTTP status 400. System.Net.HttpStatusCode.BadRequest indicates
    //     that the request could not be understood by the server. System.Net.HttpStatusCode.BadRequest
    //     is sent when no other error is applicable, or if the exact error is unknown or
    //     does not have its own error code.
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    //
    // Summary:
    //     Equivalent to HTTP status 401. System.Net.HttpStatusCode.Unauthorized indicates
    //     that the requested resource requires authentication. The WWW-Authenticate header
    //     contains the details of how to perform the authentication.
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    //
    // Summary:
    //     Equivalent to HTTP status 402. System.Net.HttpStatusCode.PaymentRequired is reserved
    //     for future use.
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    //
    // Summary:
    //     Equivalent to HTTP status 403. System.Net.HttpStatusCode.Forbidden indicates
    //     that the server refuses to fulfill the request.
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    //
    // Summary:
    //     Equivalent to HTTP status 404. System.Net.HttpStatusCode.NotFound indicates that
    //     the requested resource does not exist on the server.
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    //
    // Summary:
    //     Equivalent to HTTP status 405. System.Net.HttpStatusCode.MethodNotAllowed indicates
    //     that the request method (POST or GET) is not allowed on the requested resource.
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    //
    // Summary:
    //     Equivalent to HTTP status 406. System.Net.HttpStatusCode.NotAcceptable indicates
    //     that the client has indicated with Accept headers that it will not accept any
    //     of the available representations of the resource.
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    //
    // Summary:
    //     Equivalent to HTTP status 407. System.Net.HttpStatusCode.ProxyAuthenticationRequired
    //     indicates that the requested proxy requires authentication. The Proxy-authenticate
    //     header contains the details of how to perform the authentication.
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    //
    // Summary:
    //     Equivalent to HTTP status 408. System.Net.HttpStatusCode.RequestTimeout indicates
    //     that the client did not send a request within the time the server was expecting
    //     the request.
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    //
    // Summary:
    //     Equivalent to HTTP status 409. System.Net.HttpStatusCode.Conflict indicates that
    //     the request could not be carried out because of a conflict on the server.
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    //
    // Summary:
    //     Equivalent to HTTP status 410. System.Net.HttpStatusCode.Gone indicates that
    //     the requested resource is no longer available.
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    //
    // Summary:
    //     Equivalent to HTTP status 411. System.Net.HttpStatusCode.LengthRequired indicates
    //     that the required Content-length header is missing.
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    //
    // Summary:
    //     Equivalent to HTTP status 412. System.Net.HttpStatusCode.PreconditionFailed indicates
    //     that a condition set for this request failed, and the request cannot be carried
    //     out. Conditions are set with conditional request headers like If-Match, If-None-Match,
    //     or If-Unmodified-Since.
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    //
    // Summary:
    //     Equivalent to HTTP status 413. System.Net.HttpStatusCode.RequestEntityTooLarge
    //     indicates that the request is too large for the server to process.
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    //
    // Summary:
    //     Equivalent to HTTP status 414. System.Net.HttpStatusCode.RequestUriTooLong indicates
    //     that the URI is too long.
    HttpStatusCode[HttpStatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    //
    // Summary:
    //     Equivalent to HTTP status 415. System.Net.HttpStatusCode.UnsupportedMediaType
    //     indicates that the request is an unsupported type.
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    //
    // Summary:
    //     Equivalent to HTTP status 416. System.Net.HttpStatusCode.RequestedRangeNotSatisfiable
    //     indicates that the range of data requested from the resource cannot be returned,
    //     either because the beginning of the range is before the beginning of the resource,
    //     or the end of the range is after the end of the resource.
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    //
    // Summary:
    //     Equivalent to HTTP status 417. System.Net.HttpStatusCode.ExpectationFailed indicates
    //     that an expectation given in an Expect header could not be met by the server.
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    //
    // Summary:
    //     Equivalent to HTTP status 426. System.Net.HttpStatusCode.UpgradeRequired indicates
    //     that the client should switch to a different protocol such as TLS/1.0.
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    //
    // Summary:
    //     Equivalent to HTTP status 500. System.Net.HttpStatusCode.InternalServerError
    //     indicates that a generic error has occurred on the server.
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    //
    // Summary:
    //     Equivalent to HTTP status 501. System.Net.HttpStatusCode.NotImplemented indicates
    //     that the server does not support the requested function.
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    //
    // Summary:
    //     Equivalent to HTTP status 502. System.Net.HttpStatusCode.BadGateway indicates
    //     that an intermediate proxy server received a bad response from another proxy
    //     or the origin server.
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    //
    // Summary:
    //     Equivalent to HTTP status 503. System.Net.HttpStatusCode.ServiceUnavailable indicates
    //     that the server is temporarily unavailable, usually due to high load or maintenance.
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    //
    // Summary:
    //     Equivalent to HTTP status 504. System.Net.HttpStatusCode.GatewayTimeout indicates
    //     that an intermediate proxy server timed out while waiting for a response from
    //     another proxy or the origin server.
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    //
    // Summary:
    //     Equivalent to HTTP status 505. System.Net.HttpStatusCode.HttpVersionNotSupported
    //     indicates that the requested HTTP version is not supported by the server.
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The state of the manager component.
 */
var ManagerState;
(function (ManagerState) {
    /**
     * Display the lookup grid.
     */
    ManagerState[ManagerState["Lookup"] = 0] = "Lookup";
    /**
     * Display the editor.
     */
    ManagerState[ManagerState["Editor"] = 1] = "Editor";
})(ManagerState = exports.ManagerState || (exports.ManagerState = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responseError_1 = __webpack_require__(11);
exports.ResponseError = responseError_1.ResponseError;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Response error exception.
 */
var ResponseError = (function (_super) {
    __extends(ResponseError, _super);
    /**
     * Creates a new response error.
     * @param message
     * @param data
     */
    function ResponseError(type, message, data) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.data = data;
        return _this;
    }
    return ResponseError;
}(Error));
exports.ResponseError = ResponseError;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestOptions_1 = __webpack_require__(13);
exports.RequestOptions = requestOptions_1.RequestOptions;
var problemResult_1 = __webpack_require__(0);
exports.ProblemResult = problemResult_1.ProblemResult;
var validationProblemResult_1 = __webpack_require__(14);
exports.ValidationProblemResult = validationProblemResult_1.ValidationProblemResult;
var uiGridRequest_1 = __webpack_require__(15);
exports.UiGridRequest = uiGridRequest_1.UiGridRequest;
var uiGridResult_1 = __webpack_require__(16);
exports.UiGridResult = uiGridResult_1.UiGridResult;
var errorBlock_1 = __webpack_require__(17);
exports.ErrorBlockModel = errorBlock_1.ErrorBlockModel;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The request options to be passed to the api service request function.
 */
var RequestOptions = (function () {
    // TODO: Reverse order of url, string params.
    function RequestOptions(url, method, baseUrl) {
        if (baseUrl === void 0) { baseUrl = './'; }
        this.url = baseUrl.concat(url);
        this.method = method;
        this.rethrow = true;
    }
    return RequestOptions;
}());
exports.RequestOptions = RequestOptions;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var problemResult_1 = __webpack_require__(0);
/**
 * validaiton problem result.
 */
var ValidationProblemResult = (function (_super) {
    __extends(ValidationProblemResult, _super);
    function ValidationProblemResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationProblemResult;
}(problemResult_1.ProblemResult));
exports.ValidationProblemResult = ValidationProblemResult;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * the grid request model.
 */
var UiGridRequest = (function () {
    function UiGridRequest() {
    }
    return UiGridRequest;
}());
exports.UiGridRequest = UiGridRequest;
/**
 * sort request model.
 */
var SortRequest = (function () {
    function SortRequest() {
    }
    return SortRequest;
}());
exports.SortRequest = SortRequest;
/**
 * filter request.
 */
var FilterRequest = (function () {
    function FilterRequest() {
    }
    return FilterRequest;
}());
exports.FilterRequest = FilterRequest;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UiGridResult = (function () {
    function UiGridResult() {
    }
    return UiGridResult;
}());
exports.UiGridResult = UiGridResult;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * the error block model.
 */
var ErrorBlockModel = (function () {
    function ErrorBlockModel() {
    }
    return ErrorBlockModel;
}());
exports.ErrorBlockModel = ErrorBlockModel;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ez-web-toolkit.js.map