(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("angular"), require("angular-typescript-validation"), require("moment"), require("toastr"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "angular", "angular-typescript-validation", "moment", "toastr"], factory);
	else if(typeof exports === 'object')
		exports["ez-web-toolkit"] = factory(require("lodash"), require("jquery"), require("angular"), require("angular-typescript-validation"), require("moment"), require("toastr"));
	else
		root["ez-web-toolkit"] = factory(root["lodash"], root["jquery"], root["angular"], root["angular-typescript-validation"], root["moment"], root["toastr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_77__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.baseClasses
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var BaseComponent = (function () {
    /**
     * @class toolkit.baseClasses.BaseComponent
     * @classdesc Automatically handles the scope destroy callbacks and watches.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {Function} additionalDestruction Callback which would be called on scope destroy.
     */
    function BaseComponent($scope, additionalDestruction) {
        var _this = this;
        this.unwatchArray = new Array();
        this.destroy = function () {
            if (_this.unwatchArray) {
                _.forEach(_this.unwatchArray, function (unwatch) {
                    unwatch();
                });
            }
            if (additionalDestruction) {
                additionalDestruction();
            }
        };
        $scope.$on('$destroy', this.destroy);
    }
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.enums.EditorState
* @classdesc States of editor.
*/
var EditorState;
(function (EditorState) {
    /**
     * The add state.
     * @member {number} toolkit.enums.EditorState#Add
     */
    EditorState[EditorState["Add"] = 0] = "Add";
    /**
     * The edit state.
     * @member {number} toolkit.enums.EditorState#Edit
     */
    EditorState[EditorState["Edit"] = 1] = "Edit";
})(EditorState = exports.EditorState || (exports.EditorState = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.constants.EventConsts
* @classdesc An event constants.
*/
var EventConsts = (function () {
    function EventConsts() {
    }
    /**
     * The reload grid event name.
     * @member {string} toolkit.constants.EventConsts#reloadGridEvent
     */
    EventConsts.reloadGridEvent = 'reloadGrid';
    return EventConsts;
}());
exports.EventConsts = EventConsts;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
/**
 * @namespace toolkit.baseClasses
 */
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
var baseComponent_1 = __webpack_require__(1);
var BaseModalController = (function (_super) {
    __extends(BaseModalController, _super);
    //#region Constructor
    /**
     * @class toolkit.baseClasses.BaseModalController
     * @extends BaseComponent
     * @classdesc Methods for manage modals.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {IModalService} modalService The modal service.
     */
    function BaseModalController($scope, modalService) {
        var _this = _super.call(this, $scope) || this;
        _this.$scope = $scope;
        _this.modalService = modalService;
        //#endregion
        //#region Functions
        _this.modalVisibilityUpdated = function (val, old) {
            if (val !== old) {
                val ? _this.modalService.show(_this)
                    : _this.modalService.hide(_this);
            }
        };
        return _this;
    }
    BaseModalController.prototype.$onInit = function () {
        var _this = this;
        this.$scope.$watch(function () { return _this.isVisible; }, this.modalVisibilityUpdated);
        // https://gist.github.com/gordonbrander/2230317
        this.id = Math.random().toString(36).substr(2, 9);
        this.unwatchArray.push(function () {
            _this.modalService.hide(_this);
            if ($("#" + _this.id).modal) {
                $("#" + _this.id).modal('hide');
            }
            $("#" + _this.id).remove();
        });
    };
    BaseModalController.prototype.toggleModalVisibility = function (val) {
        this.isVisible = val;
        this.isModalVisible = val;
    };
    BaseModalController.prototype.toggleDomExistence = function (val) {
        this.isInDom = val;
    };
    return BaseModalController;
}(baseComponent_1.BaseComponent));
exports.BaseModalController = BaseModalController;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.constants.TypeConsts
* @classdesc The type constants.
*/
var TypeConsts = (function () {
    function TypeConsts() {
    }
    /**
     * The empty guid constant.
     * @member {string} toolkit.constants.TypeConsts#emptyGuid
     */
    TypeConsts.emptyGuid = '00000000-0000-0000-0000-000000000000';
    return TypeConsts;
}());
exports.TypeConsts = TypeConsts;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("angular");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.baseClasses
 */
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
var baseComponent_1 = __webpack_require__(1);
var eventConsts_1 = __webpack_require__(3);
var BaseLookupController = (function (_super) {
    __extends(BaseLookupController, _super);
    //#endregion
    //#region Constructor
    /**
     * @class toolkit.baseClasses.BaseLookupController<T extends Object>
     * @extends BaseComponent
     * @abstract
     * @classdesc Methods for handling an angular ng-grid component.
     * @param {ng.IScope} $scope Scope of the component.
     */
    function BaseLookupController($scope) {
        var _this = _super.call(this, $scope) || this;
        _this.$scope = $scope;
        $scope.rowDblClick = function (row) { return _this.onDoubleClickEvent(row.entity); };
        $scope.$on(eventConsts_1.EventConsts.reloadGridEvent, function () {
            _this.reloadGrid();
        });
        return _this;
    }
    /**
     * Calls an onDoubleClick callback and assigns the selected item.
     * @method toolkit.baseClasses.BaseLookupController#onDoubleClickEvent
     */
    BaseLookupController.prototype.onDoubleClickEvent = function (selectedItem) {
        this.selectedItem = selectedItem;
        if (this.onDoubleClick) {
            this.onDoubleClick();
        }
    };
    return BaseLookupController;
}(baseComponent_1.BaseComponent));
exports.BaseLookupController = BaseLookupController;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.baseClasses
 */
Object.defineProperty(exports, "__esModule", { value: true });
var managerState_1 = __webpack_require__(10);
var editorState_1 = __webpack_require__(2);
var BaseManagerController = (function () {
    /**
     * @class toolkit.baseClasses.BaseManagerController<T extends Object>
     * @abstract
     * @classdesc Methods for manager page where user can delete/create/edit items from grid.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     */
    function BaseManagerController($scope, $timeout, notificationService) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.notificationService = notificationService;
        this.ManagerState = managerState_1.ManagerState;
        this.EditorState = editorState_1.EditorState;
        this.clearSelected();
        this.state = managerState_1.ManagerState.Lookup;
    }
    Object.defineProperty(BaseManagerController.prototype, "state", {
        get: function () {
            return this.managerState;
        },
        /**
         * Needs to be set in a timeout so the page updates accordingly.
         */
        set: function (val) {
            var _this = this;
            this.$timeout(function () {
                _this.managerState = val;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Switches to add editor state and editor manager state.
     * @method toolkit.baseClasses.BaseManagerController#newItem
     */
    BaseManagerController.prototype.newItem = function () {
        this.selectedItem = this.prepareNewItem();
        this.editorState = editorState_1.EditorState.Add;
        this.state = managerState_1.ManagerState.Editor;
    };
    /**
     * Edit the selected item - retrieve the selected item then load the editor page.
     * @method toolkit.baseClasses.BaseManagerController#editItem
     * @returns {Promise<any>} A promise to the result of retrieving the item
     * and moving to the editor page.
     */
    BaseManagerController.prototype.editItem = function () {
        var _this = this;
        if (!this.isRequestRunning
            && this.selectedItem !== null) {
            this.isRequestRunning = true;
            return this.getItem()
                .then(function (resp) {
                _this.selectedItem = resp;
                _this.editorState = editorState_1.EditorState.Edit;
                _this.state = managerState_1.ManagerState.Editor;
            })
                .catch(function () {
                // Do nothing, error was already notified in apiService
            })
                .then(function () {
                _this.$timeout(function () {
                    _this.isRequestRunning = false;
                });
            });
        }
    };
    /**
     * Clears the selected item.
     * @method toolkit.baseClasses.BaseManagerController#clearSelected
     */
    BaseManagerController.prototype.clearSelected = function () {
        this.selectedItem = null;
    };
    /**
     * Callback executes when add/edit editor is closing.
     * @method toolkit.baseClasses.BaseManagerController#closeEditor
     */
    BaseManagerController.prototype.closeEditor = function () {
        this.clearSelected();
        this.state = managerState_1.ManagerState.Lookup;
    };
    return BaseManagerController;
}());
exports.BaseManagerController = BaseManagerController;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.enums.ManagerState
* @classdesc States for manager.
*/
var ManagerState;
(function (ManagerState) {
    /**
     * Shows the lookup grid.
     * @member {number} toolkit.enums.ManagerState#Lookup
     */
    ManagerState[ManagerState["Lookup"] = 0] = "Lookup";
    /**
     * Shows the editor.
     * @member {number} toolkit.enums.ManagerState#Editor
     */
    ManagerState[ManagerState["Editor"] = 1] = "Editor";
})(ManagerState = exports.ManagerState || (exports.ManagerState = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.enums.ErrorResponseType
* @classdesc An error reponses.
*/
var ErrorResponseType;
(function (ErrorResponseType) {
    /**
     * The connection lost.
     * @member {number} toolkit.enums.ErrorResponseType#ConnectionLost
     */
    ErrorResponseType[ErrorResponseType["ConnectionLost"] = 0] = "ConnectionLost";
    /**
     * The result has a problem.
     * @member {number} toolkit.enums.ErrorResponseType#ProblemResult
     */
    ErrorResponseType[ErrorResponseType["ProblemResult"] = 1] = "ProblemResult";
    /**
     * The result has validation problem.
     * @member {number} toolkit.enums.ErrorResponseType#ValidationProblemResult
     */
    ErrorResponseType[ErrorResponseType["ValidationProblemResult"] = 2] = "ValidationProblemResult";
})(ErrorResponseType = exports.ErrorResponseType || (exports.ErrorResponseType = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.enums.HttpStatusCode
* @classdesc Enumeration of http status codes.
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.exceptions
 */
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
* @class toolkit.exceptions.ResponseError
* @classdesc Occurs on response error.
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.models.RequestOptions
* @classdesc The request options to be passed to the api service request function.
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class toolkit.models.ProblemResult
 * @classdesc The problem result.
 */
var ProblemResult = (function () {
    function ProblemResult() {
    }
    return ProblemResult;
}());
exports.ProblemResult = ProblemResult;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.models.UiGridRequest
* @classdesc Request with filterin for angular ui grid.
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * the persistent message class.
 */
var PersistentMessage = (function () {
    function PersistentMessage() {
    }
    return PersistentMessage;
}());
exports.PersistentMessage = PersistentMessage;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseClasses = __webpack_require__(19);
exports.BaseClasses = BaseClasses;
var Components = __webpack_require__(24);
exports.Components = Components;
var Constants = __webpack_require__(61);
exports.Constants = Constants;
var Enums = __webpack_require__(66);
exports.Enums = Enums;
var Exceptions = __webpack_require__(67);
exports.Exceptions = Exceptions;
var Models = __webpack_require__(68);
exports.Models = Models;
var Services = __webpack_require__(72);
exports.Services = Services;
var Directives = __webpack_require__(83);
exports.Directives = Directives;
var Utils = __webpack_require__(85);
exports.Utils = Utils;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(1);
exports.BaseComponent = baseComponent_1.BaseComponent;
var baseEditorController_1 = __webpack_require__(20);
exports.BaseEditorController = baseEditorController_1.BaseEditorController;
var baseLookupController_1 = __webpack_require__(8);
exports.BaseLookupController = baseLookupController_1.BaseLookupController;
var baseManagerController_1 = __webpack_require__(9);
exports.BaseManagerController = baseManagerController_1.BaseManagerController;
var baseManagerDeletableController_1 = __webpack_require__(23);
exports.BaseManagerDeletableController = baseManagerDeletableController_1.BaseManagerDeletableController;
var baseModalController_1 = __webpack_require__(4);
exports.BaseModalController = baseModalController_1.BaseModalController;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.baseClasses
 */
Object.defineProperty(exports, "__esModule", { value: true });
var angular_typescript_validation_1 = __webpack_require__(21);
var editorState_1 = __webpack_require__(2);
var validationProcessor_1 = __webpack_require__(22);
var BaseEditorController = (function () {
    /**
     * @class toolkit.baseClasses.BaseEditorController<T extends Object>
     * @implements IValidatableController
     * @classdesc Provides methods for validating request before server call, the editor states.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimeoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     * @param {IValidator} validator Validator for item which should be edited.
     */
    function BaseEditorController($scope, $timeout, notificationService, validator) {
        this.$timeout = $timeout;
        this.notificationService = notificationService;
        /**
         * Whether to clear item on close or not. Close occurs automatically after success submit.
         * @member {boolean} toolkit.baseClasses.BaseEditorController#clearItemOnClose
         */
        this.clearItemOnClose = true;
        this.showMessageOnSuccess = true;
        this.successMessage = 'Successfully saved.';
        this.validationService = new angular_typescript_validation_1.ValidationService(this, $scope);
        this.rulesCustomizer = validator.rulesCustomizer;
        this.isRequestRunning = null;
        this.isValidationRequestRunning = false;
    }
    Object.defineProperty(BaseEditorController.prototype, "model", {
        /**
         * Obsolete. Do not use this property. Returns item.
         * @member {T} toolkit.baseClasses.BaseEditorController#model
         */
        get: function () {
            return this.item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEditorController.prototype, "isRequestRunning", {
        /**
         * Checks if request for validating or edit item is currently running.
         * @member {boolean} toolkit.baseClasses.BaseEditorController#isRequestRunning
         */
        get: function () {
            return this.isReqRunning || this.isValidationRequestRunning;
        },
        set: function (val) {
            var _this = this;
            this.$timeout(function () {
                _this.isReqRunning = val;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the editor. Clears item on close by default and calls onClose callback.
     * @method toolkit.baseClasses.BaseEditorController#close
     */
    BaseEditorController.prototype.close = function () {
        if (this.clearItemOnClose) {
            this.clearItem();
        }
        if (this.onClose) {
            this.onClose();
        }
    };
    /**
     * Occurs on response success. Could be overriden.
     * @method toolkit.baseClasses.BaseEditorController#onResponseSuccess
     * @param {any} response The response from the server.
     */
    BaseEditorController.prototype.onResponseSuccess = function (response) {
        // could be overriden
    };
    BaseEditorController.prototype.handleWarnResponse = function (response) {
        if (response.hasWarning) {
            this.notificationService.warn(response.detail);
        }
        else {
            this.notificationService.success(this.successMessage);
        }
    };
    /**
     * Notifies user about success save. Could be overriden to provide different notification.
     * @method toolkit.baseClasses.BaseEditorController#successNotification
     */
    BaseEditorController.prototype.successNotification = function () {
        if (this.showMessageOnSuccess) {
            this.notificationService.success(this.successMessage);
        }
    };
    /**
     * Method is called after validation is occured, if false the do not call the save method.
     * @method toolkit.baseClasses.BaseEditorController#afterValidation
     * @param {boolean} validationResult The validation result.
     */
    BaseEditorController.prototype.afterValidation = function (validationResult) {
        return true;
    };
    /**
     * Validates an item, in case of success, makes request to server in order to save item.
     * @method toolkit.baseClasses.BaseEditorController#submit
     */
    BaseEditorController.prototype.submit = function () {
        var _this = this;
        if (!this.item) {
            this.item = {};
        }
        if (this.isValidationRequestRunning) {
            return;
        }
        this.isValidationRequestRunning = true;
        this.validationService.validate(this.item).then(function (result) {
            _this.$timeout(function () {
                _this.isValidationRequestRunning = false;
            });
            if (!_this.afterValidation(result)) {
                return;
            }
            if (result) {
                if (!_this.isReqRunning) {
                    _this.isRequestRunning = true;
                    _this.save()
                        .then(function (response) {
                        _this.successNotification();
                        _this.onResponseSuccess(response);
                        _this.close();
                    })
                        .catch(function (reject) {
                        if (reject && reject.data) {
                            validationProcessor_1.ValidationProcessor.processValidationServerResponse(reject.data, function (fieldName, errorMessage) { return _this.validationService.addServerError(fieldName, errorMessage); });
                        }
                    })
                        .then(function () {
                        _this.isRequestRunning = false;
                    });
                }
            }
        });
    };
    /**
     * Whether editor is in add state.
     * @method toolkit.baseClasses.BaseEditorController#isInAddState
     */
    BaseEditorController.prototype.isInAddState = function () {
        return this.state === editorState_1.EditorState.Add;
    };
    /**
     * Whether editor is in edit state.
     * @method toolkit.baseClasses.BaseEditorController#isInEditState
     */
    BaseEditorController.prototype.isInEditState = function () {
        return this.state === editorState_1.EditorState.Edit;
    };
    /**
     * Nulls an item.
     * @method toolkit.baseClasses.BaseEditorController#clearItem
     */
    BaseEditorController.prototype.clearItem = function () {
        this.item = null;
    };
    return BaseEditorController;
}());
exports.BaseEditorController = BaseEditorController;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("angular-typescript-validation");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.services.ValidationProcessor
* @classdesc Methods for porocessing our validation response.
*/
var ValidationProcessor = (function () {
    function ValidationProcessor() {
    }
    /**
     * handles the validation server response.
     */
    ValidationProcessor.processValidationServerResponse = function (responseData, errorHandler) {
        if (!this.isValidationResultResponse(responseData)) {
            return;
        }
        for (var fieldName in responseData.errors) {
            if (responseData.errors.hasOwnProperty(fieldName)) {
                var errorMessages = responseData.errors[fieldName];
                for (var i = 0; i < errorMessages.length; i++) {
                    errorHandler(fieldName, errorMessages[i]);
                }
            }
        }
    };
    /**
     * checks if response is validationResult
     */
    ValidationProcessor.isValidationResultResponse = function (data) {
        if (data && data.hasServerValidationErrors === true) {
            return true;
        }
        return false;
    };
    return ValidationProcessor;
}());
exports.ValidationProcessor = ValidationProcessor;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.baseClasses
 */
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
var baseManagerController_1 = __webpack_require__(9);
var eventConsts_1 = __webpack_require__(3);
/**
 * @class toolkit.baseClasses.BaseManagerDeletableController<T extends Object>
 * @abstract
 * @extends BaseManagerController
 * @classdesc Methods for manager and extra methods for deleting an item.
 */
var BaseManagerDeletableController = (function (_super) {
    __extends(BaseManagerDeletableController, _super);
    function BaseManagerDeletableController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deletes an item.
     * @method toolkit.baseClasses.BaseManagerDeletableController#deleteItem
     */
    BaseManagerDeletableController.prototype.deleteItem = function () {
        var _this = this;
        if (!this.isDeleteRequestRunning) {
            this.isDeleteRequestRunning = true;
            return this.deleteRequest()
                .then(function (resp) {
                _this.notificationService.success('Item deleted.');
                _this.$scope.$broadcast(eventConsts_1.EventConsts.reloadGridEvent);
                _this.isDeleteItemPromptVisible = false;
            })
                .catch(function (reject) {
                _this.handleDeleteError(reject);
            })
                .then(function () {
                _this.$timeout(function () {
                    _this.isDeleteRequestRunning = false;
                });
            });
        }
    };
    /**
     * Delete error handling. Could be overriden.
     * @param {any} reject The sever side data.
     * @method toolkit.baseClasses.BaseManagerDeletableController#handleDeleteError
     */
    BaseManagerDeletableController.prototype.handleDeleteError = function (reject) {
        // could be overriden
    };
    /**
     * Toggles the delete prompt.
     * @param {boolean} value Yes or no.
     * @method toolkit.baseClasses.BaseManagerDeletableController#toggleDeleteItemPrompt
     */
    BaseManagerDeletableController.prototype.toggleDeleteItemPrompt = function (value) {
        this.isDeleteItemPromptVisible = value;
    };
    return BaseManagerDeletableController;
}(baseManagerController_1.BaseManagerController));
exports.BaseManagerDeletableController = BaseManagerDeletableController;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(25);
var confirmDialog_1 = __webpack_require__(30);
exports.ConfirmDialog = confirmDialog_1.ConfirmDialog;
var datePicker_1 = __webpack_require__(32);
exports.DatePicker = datePicker_1.DatePicker;
var timePicker_1 = __webpack_require__(40);
exports.TimePicker = timePicker_1.TimePicker;
var errorBlock_1 = __webpack_require__(43);
exports.ErrorBlock = errorBlock_1.ErrorBlock;
var ezGrid_1 = __webpack_require__(45);
exports.EzGrid = ezGrid_1.EzGrid;
var ezModal_1 = __webpack_require__(47);
exports.EzModal = ezModal_1.EzModal;
var ezModalTransclude_1 = __webpack_require__(49);
exports.EzModalTransclude = ezModalTransclude_1.EzModalTransclude;
var singleLookup_1 = __webpack_require__(51);
exports.SingleLookup = singleLookup_1.SingleLookup;
var singleLookupTransclude_1 = __webpack_require__(53);
exports.SingleLookupTransclude = singleLookupTransclude_1.SingleLookupTransclude;
var uploadImage_1 = __webpack_require__(55);
exports.UploadImage = uploadImage_1.UploadImage;
var notificationViewer_1 = __webpack_require__(57);
exports.NotificationViewer = notificationViewer_1.NotificationViewer;
var colorPicker_1 = __webpack_require__(59);
exports.ColorPicker = colorPicker_1.ColorPicker;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(28)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ".confirm-dialog .content {\n  text-align: center;\n  font-size: 1.4em;\n  margin: 0 auto;\n  vertical-align: middle; }\n  .confirm-dialog .content .emphasis {\n    font-weight: bolder;\n    padding: 7px 0;\n    margin-top: 10px;\n    font-size: 110%; }\n\n.confirm-dialog .actions input {\n  margin: auto 5px !important; }\n\n/*\r\n * The underscore in the file name prevents the compiler from generating\r\n * a css file from this scss file. This file should not contain any styling -\r\n * only variables to be used elsewhere.\r\n */\ndate-picker .form-control {\n  padding-right: 0 !important;\n  height: 40px !important;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\ndate-picker .calendar-button + input[type=\"text\"] {\n  width: 110px; }\n\ndate-picker ul {\n  list-style-type: none; }\n\ndate-picker .text-center {\n  text-align: center; }\n\ndate-picker .pull-left {\n  float: left !important; }\n\ndate-picker .pull-right {\n  float: right !important; }\n\ndate-picker .dropdown-menu li {\n  list-style: none; }\n\ndate-picker .dropdown-menu {\n  position: absolute !important;\n  z-index: 1000;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  border-radius: 4px;\n  background-clip: padding-box; }\n\ndate-picker button.ui.primaryButton.button.primary {\n  color: #eee; }\n\ndate-picker button.ui.primary.attached.label.icon.button.calendar-button {\n  width: auto !important; }\n\ndate-picker date-picker td,\ndate-picker div.uib-datepicker td,\ndate-picker uib-daypicker td {\n  margin: 5px 5px;\n  padding: 7px 5px;\n  border-top: 1px solid #666666; }\n\ndate-picker uib-datepicker-popup-wrap table:focus {\n  outline: -webkit-focus-ring-color 0 !important;\n  outline: 0 !important; }\n\ndate-picker uib-datepicker-popup-wrap th {\n  padding-bottom: 5px; }\n\ndate-picker div.uib-datepicker tr:nth-child(2) th {\n  padding-top: 5px; }\n\ndate-picker div.uib-datepicker td {\n  border-top: none !important; }\n\ndate-picker div.uib-datepicker button.ui.button.small span {\n  padding: .25em; }\n\ndate-picker div.uib-datepicker button.ui.button.small {\n  padding-left: 1.25em;\n  padding-right: 1.25em; }\n\ndate-picker div.uib-datepicker button.text-muted {\n  background: #c0c1c2; }\n\ndate-picker div.uib-datepicker button.text-muted:hover {\n  background-color: silver !important;\n  background-color: rgba(192, 192, 192, 0.6) !important; }\n\ndate-picker div.uib-datepicker button.ui.primary.attached.label.icon.button.calendar-button {\n  width: auto !important; }\n\ndate-picker div.uib-datepicker button.ui.button.small span {\n  padding: .2em .5em; }\n\ndate-picker div.uib-datepicker button.ui.button.small.active {\n  color: #eeeeee !important; }\n\ndate-picker div.uib-datepicker button.ui.button.small.today span {\n  border: 2px solid #7d7d7d;\n  border-radius: 50%; }\n\ndate-picker div.uib-datepicker div.uib-datepicker tr:nth-child(2) th {\n  padding-top: 5px; }\n\ndate-picker div.uib-datepicker div.uib-datepicker td {\n  border-top: none !important; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small span {\n  padding: .25em; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small {\n  padding-left: 1.25em;\n  padding-right: 1.25em; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.text-muted {\n  background: #c0c1c2; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.text-muted:hover {\n  background-color: silver !important;\n  background-color: rgba(192, 192, 192, 0.6) !important; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.text-muted span {\n  color: #7d7d7d;\n  color: rgba(125, 125, 125, 0.6); }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.text-muted:hover span {\n  color: black;\n  color: rgba(0, 0, 0, 0.6); }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small span {\n  padding: .2em .5em; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small.active {\n  color: #fff !important;\n  background: RGBA(33, 133, 208, 1) !important;\n  border: 1px solid RGBA(33, 133, 208, 1); }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small.active span {\n  border: 2px solid #fff;\n  border-radius: 50%; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small.today {\n  background: #fff !important;\n  border: 1px solid RGBA(33, 133, 208, 1); }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small.today span {\n  background: #fff;\n  color: #666;\n  border-radius: 50%; }\n\ndate-picker div.uib-datepicker div.uib-datepicker button.ui.button.small.today.active span {\n  border: 2px solid RGBA(33, 133, 208, 1); }\n\nez-grid .noItemsMessage {\n  border-radius: 0px !important;\n  height: 21px !important;\n  padding: 16px 24px 16px 24px !important;\n  font-size: 12px !important;\n  margin-left: 1px !important;\n  margin-right: 1px !important; }\n\nez-grid .noItemsInfoContainer {\n  height: 55px !important; }\n\nez-grid .gridErrBtn {\n  margin-top: 10px !important; }\n\nez-grid .gridErrMessage {\n  border-radius: 0px;\n  display: table-cell !important;\n  vertical-align: middle; }\n\nez-grid .gridErrContainer {\n  display: table !important; }\n\nez-grid .ui-grid input.ui-grid-pager-control-input {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  -webkit-appearance: none;\n  user-select: none;\n  pointer-events: none;\n  width: auto;\n  height: auto;\n  padding: 7px; }\n\nez-grid .ui-grid-viewport, ez-grid .ui-grid-canvas {\n  height: auto !important; }\n\nez-grid .ui-grid-pager-panel {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin: auto; }\n\nsingle-lookup input.action.input {\n  max-height: 40px; }\n\nsingle-lookup-transclude input.action.input {\n  max-height: 40px; }\n\n.extra-actions {\n  display: inline-block !important; }\n\nupload-image img {\n  height: 150px !important;\n  width: 150px !important; }\n\nupload-image .image-uploader-container {\n  height: 180px !important;\n  width: 180px !important; }\n\n.colorpicker {\n  background-color: white; }\n  .colorpicker button {\n    float: right;\n    border: 0;\n    background-color: white;\n    padding: 0;\n    font-size: x-large;\n    cursor: pointer; }\n  .colorpicker .ui.labeled.button {\n    width: 100%; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(29);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * the confirm dialog component.
 */
var ConfirmDialog = (function () {
    /**
     * inits component.
     */
    function ConfirmDialog() {
        this.controller = ConfirmDialogController;
        this.controllerAs = 'cd';
        this.templateUrl = __webpack_require__(31);
        this.bindings = {
            title: '@cdTitle',
            body: '@cdBody',
            callout: '@cdCallout',
            onOk: '&cdOnOk',
            onCancel: '&cdOnCancel',
            loader: '=cdLoader',
            visible: '=cdVisible',
            errorBlock: '=cdError'
        };
    }
    return ConfirmDialog;
}());
exports.ConfirmDialog = ConfirmDialog;
/**
 * @class toolkit.components.ConfirmDialogController
 * @classdesc Methods for showing confirm dialog popup.
 */
var ConfirmDialogController = (function () {
    function ConfirmDialogController() {
        var _this = this;
        /**
         * Hides the error block on popup hide.
         * @method toolkit.baseClasses.ConfirmDialogController#onHidden
         */
        this.onHidden = function () {
            if (_this.errorBlock) {
                _this.errorBlock.showError = false;
            }
        };
    }
    return ConfirmDialogController;
}());
exports.ConfirmDialogController = ConfirmDialogController;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/confirmDialog/confirmDialog.html';
var html = "<ez-modal\r\n    em-class-name=\"confirm-dialog\"\r\n    em-header-text=\"{{cd.title}}\"\r\n    em-primary-button-text=\"Confirm\"\r\n    em-secondary-button-text=\"Cancel\"\r\n    em-is-visible=\"cd.visible\"\r\n    em-on-approve=\"cd.onOk()\"\r\n    em-on-deny=\"cd.onCancel()\"\r\n    em-is-loader-visible=\"cd.loader\"\r\n    em-on-hidden=\"cd.onHidden()\">\r\n\r\n    <div ng-bind=\"cd.body\"></div>\r\n    <div ng-if=\"cd.callout\" class=\"emphasis\" ng-bind=\"cd.callout\"></div>\r\n\r\n    <error-block class=\"margin-t10 dblock\" eb-error=\"cd.errorBlock\"></error-block>\r\n\r\n</ez-modal>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
var popupTemplate = __webpack_require__(33);
var datePickerTemplate = __webpack_require__(34);
/** These are required in this manner as angular bootstrap does not allow changing the day, month and year templates with easily defined variables (scoping is an issue)
 * Requiring the needed files and setting the relative url allows the datepicker to use template-url="*.html"
 */
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
var moment = __webpack_require__(38);
var DatePicker = (function () {
    function DatePicker() {
        this.templateUrl = __webpack_require__(39);
        this.controller = DatePickerController;
        this.controllerAs = 'dp';
        this.bindings = {
            date: '=date',
            onDateChange: '&onDateChange',
            depth: '=?depth',
            depthMin: '=?depthMin',
            format: '=?format ',
            placement: '@placement',
            isFluent: '<fluent'
        };
    }
    return DatePicker;
}());
exports.DatePicker = DatePicker;
/**
 * @class toolkit.components.DatePickerController
 * @classdesc Methods for showing date picker component.
 */
var DatePickerController = (function () {
    function DatePickerController() {
        this.status = {
            opened: false
        };
        this.dateOptions = {
            formatDay: 'd',
            formatYear: 'yy',
            startingDay: 0,
            showWeeks: false
        };
        this.modelOptions = {
            timezone: moment().format('Z')
        };
        this.maxDate = moment().add(5, 'years').toDate();
        this.popupTemplate = popupTemplate;
        this.datePickerTemplate = datePickerTemplate;
    }
    DatePickerController.prototype.$onInit = function () {
        if (this.depth === undefined) {
            this.depth = 'day';
        }
        if (this.depthMin === undefined) {
            this.depthMin = 'day';
        }
        if (this.format === undefined) {
            this.format = 'mediumDate';
        }
        if (!this.placement) {
            this.placement = 'auto';
        }
        this.dateOptions.datepickerMode = this.depth;
        this.dateOptions.minMode = this.depthMin;
    };
    /**
     * Toggles the calendar on/off when it is off/on.
     *
     * @param {any} $event
     *
     * @memberOf datePickerController
     */
    DatePickerController.prototype.toggleCalendar = function ($event) {
        this.status.opened = !this.status.opened;
    };
    /**
     * Toggles the min date between null and today's date;
     *
     *
     * @memberOf DaySelectorController
     */
    DatePickerController.prototype.toggleMin = function () {
        this.minDate = this.minDate ? null : moment().toDate();
    };
    return DatePickerController;
}());
exports.DatePickerController = DatePickerController;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/datePicker/template/datepicker/popup.html';
var html = "<ul class=\"uib-datepicker-popup dropdown-menu ui uib-position-measure clearing segment\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\r\n    <li ng-transclude></li>\r\n    <li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\r\n        <span class=\"pull-left\">\r\n            <button type=\"button\" class=\"ui primaryButton button primary\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">\r\n                <span ng-bind=\"getText('current')\"></span>\r\n            </button>\r\n        </span>\r\n        <button type=\"button\" class=\"ui secondaryButton button pull-right\" ng-click=\"close($event)\">\r\n            <span ng-bind=\"getText('close')\"></span>\r\n        </button>\r\n    </li>\r\n</ul>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/datePicker/template/datepicker/datepicker.html';
var html = "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\r\n  <div uib-daypicker ng-switch-when=\"day\" tabindex=\"0\" template-url=\"day.html\"></div>\r\n  <div uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\" template-url=\"month.html\"></div>\r\n  <div uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\" template-url=\"year.html\"></div>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var path = 'day.html';
var html = "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r\n  <thead>\r\n    <tr>\r\n      <th><button type=\"button\" class=\"ui button small pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon chevron left\"></i></button></th>\r\n      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"ui button small\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong><span ng-bind=\"title\"></span></strong></button></th>\r\n      <th><button type=\"button\" class=\"ui button small pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon chevron right\"></i></button></th>\r\n    </tr>\r\n    <tr>\r\n      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\r\n      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\"><span ng-bind=\"label.abbr\"></span></small></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr ng-repeat=\"row in rows track by $index\">\r\n      <td ng-if=\"showWeeks\" class=\"text-center\"><em><span ng-bind=\"weekNumbers[$index]\"></span></em></td>\r\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\r\n        <button type=\"button\" style=\"min-width:100%;\" class=\"ui button small\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt), today: dt.current, 'text-muted': dt.secondary }\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\" ng-bind=\"dt.label\"></span></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var path = 'month.html';
var html = "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r\n  <thead style=\"padding-bottom:1px;\">\r\n    <tr>\r\n      <th><button type=\"button\" class=\"ui button small\" ng-click=\"move(-1)\" tabindex=\"-1\" style=\"width:100%\"><i class=\"icon chevron left\"></i></button></th>\r\n      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"ui button small\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%\"><strong><span ng-bind=\"title\"></span></strong></button></th>\r\n      <th><button type=\"button\" class=\"ui button small\" ng-click=\"move(1)\" tabindex=\"-1\" style=\"width:100%\"><i class=\"icon chevron right\"></i></button></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr ng-repeat=\"row in rows track by $index\">\r\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\r\n        <button type=\"button\" style=\"min-width:100%;\" class=\"ui button small\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\" ng-bind=\"dt.label\"></span></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var path = 'year.html';
var html = "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r\n  <thead>\r\n    <tr>\r\n      <th><button type=\"button\" class=\"ui button pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon chevron left\"></i></button></th>\r\n      <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"ui button\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong><span ng-bind=\"title\"></span></strong></button></th>\r\n      <th><button type=\"button\" class=\"ui button pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon chevron right\"></i></button></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr ng-repeat=\"row in rows track by $index\">\r\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\">\r\n        <button type=\"button\" style=\"min-width:100%;\" class=\"ui button\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\" ng-bind=\"dt.label\"></span></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/datePicker/datePicker.html';
var html = "<div class=\"ui action input\" ng-class=\"::{ 'fluid' : dp.isFluent }\">\r\n    <input type=\"text\" class=\"form-control\"\r\n            uib-datepicker-popup=\"{{::dp.format}}\"\r\n            ng-model=\"dp.date\"\r\n            ng-model-options=\"dp.modelOptions\"\r\n            ng-click=\"dp.toggleCalendar($event)\"\r\n            datepicker-popup=\"{{::dp.format}}\"\r\n            datepicker-popup-template-url=\"{{::dp.popupTemplate}}\"\r\n            datepicker-template-url=\"{{::dp.datePickerTemplate}}\"\r\n            is-open=\"dp.status.opened\"\r\n            min-date=\"dp.minDate\"\r\n            max-date=\"dp.maxDate\"\r\n            datepicker-options=\"dp.dateOptions\"\r\n            on-open-focus=\"false\"\r\n            popup-placement=\"{{::dp.placement}}\"\r\n            ng-required=\"true\"\r\n            readonly=\"readonly\"\r\n            close-text=\"Close\"\r\n            current-text=\"Today\"/>\r\n    <button class=\"ui icon button\" ng-click=\"dp.toggleCalendar($event)\">\r\n        <i class=\"calendar icon\"></i>\r\n    </button>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(41);
var TimePicker = (function () {
    function TimePicker() {
        this.templateUrl = __webpack_require__(42);
        this.controller = TimePickerController;
        this.controllerAs = 'tp';
        this.bindings = {
            time: '=time',
            hStep: '=?hStep',
            mStep: '=?mStep',
            isMeridian: '=?isMeridian'
        };
    }
    return TimePicker;
}());
exports.TimePicker = TimePicker;
/**
 * @class toolkit.components.TimePickerController
 * @classdesc Methods for showing the time picker component.
 */
var TimePickerController = (function () {
    function TimePickerController() {
    }
    TimePickerController.prototype.$onInit = function () {
        if (this.hStep === undefined) {
            this.hStep = 1;
        }
        if (this.mStep === undefined) {
            this.mStep = 5;
        }
        if (this.isMeridian === undefined) {
            this.isMeridian = true;
        }
    };
    /**
     * Fires when the date changes. Not yet used.
     *
     * @memberOf TimePickerController
     */
    TimePickerController.prototype.changed = function () {
    };
    return TimePickerController;
}());
exports.TimePickerController = TimePickerController;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var path = 'timepicker.html';
var html = "<table>\r\n    <!-- Up button row -->\r\n    <tr>\r\n        <td>\r\n            <button \r\n                class=\"ui fluid basic icon button\"\r\n                ng-click=\"incrementHours()\">\r\n                <i class=\"angle up icon\"></i>\r\n            </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n            <button \r\n                class=\"ui fluid basic icon button\"\r\n                ng-click=\"incrementMinutes()\">\r\n                <i class=\"angle up icon\"></i>\r\n            </button>\r\n        </td>\r\n    </tr>\r\n    <!-- Time row -->\r\n    <tr>\r\n        <td class=\"form-group uib-time hours\">\r\n            <input \r\n                type=\"text\" \r\n                placeholder=\"HH\" \r\n                ng-model=\"hours\" \r\n                ng-change=\"updateHours()\" \r\n                class=\"form-control text-center ng-pristine ng-valid ng-valid-hours ng-empty ng-valid-maxlength ng-touched\" \r\n                ng-readonly=\"::readonlyInput\" \r\n                maxlength=\"2\" \r\n                tabindex=\"0\" \r\n                ng-disabled=\"noIncrementHours()\" \r\n                ng-blur=\"blur()\">\r\n        </td>\r\n        <td class=\"uib-separator\">:</td>\r\n        <td class=\"form-group uib-time minutes\">\r\n            <input \r\n                type=\"text\" \r\n                placeholder=\"MM\" \r\n                ng-model=\"minutes\" \r\n                ng-change=\"updateMinutes()\" \r\n                class=\"form-control text-center ng-pristine ng-untouched ng-valid ng-valid-minutes ng-empty ng-valid-maxlength\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"0\" ng-disabled=\"noIncrementMinutes()\" \r\n                ng-blur=\"blur()\">\r\n        </td>\r\n        <td ng-if=\"showMeridian\" class=\"meridian-column\">\r\n            <button \r\n                class=\"ui fluid basic button\"\r\n                ng-click=\"toggleMeridian()\"\r\n                ng-disabled=\"noToggleMeridian()\">\r\n                {{meridian}}\r\n            </button>\r\n        </td>\r\n    </tr>\r\n    <!-- Down button row -->\r\n    <tr>\r\n        <td>\r\n            <button \r\n                class=\"ui fluid basic icon button\"\r\n                ng-click=\"decrementHours()\">\r\n                <i class=\"angle down icon\"></i>\r\n            </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n            <button \r\n                class=\"ui fluid basic icon button\"\r\n                ng-click=\"decrementMinutes()\">\r\n                <i class=\"angle down icon\"></i>\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</tabl>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/timePicker/timePicker.html';
var html = "<div \r\n    uib-timepicker \r\n    ng-model=\"tp.time\" \r\n    ng-change=\"tp.changed()\" \r\n    hour-step=\"tp.hStep\" \r\n    minute-step=\"tp.mStep\" \r\n    show-meridian=\"tp.isMeridian\"\r\n    template-url=\"timepicker.html\">\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorBlock = (function () {
    /**
     * inits component.
     */
    function ErrorBlock() {
        this.controller = ErrorBlockController;
        this.controllerAs = 'eb';
        this.templateUrl = __webpack_require__(44);
        this.bindings = {
            errorBlock: '=ebError'
        };
    }
    return ErrorBlock;
}());
exports.ErrorBlock = ErrorBlock;
/**
 * @class toolkit.components.ErrorBlockController
 * @classdesc Methods for showing errors in popup.
 */
var ErrorBlockController = (function () {
    function ErrorBlockController() {
    }
    Object.defineProperty(ErrorBlockController.prototype, "showError", {
        get: function () {
            return this.errorBlock && this.errorBlock.showError;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorBlockController;
}());
exports.ErrorBlockController = ErrorBlockController;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/errorBlock/errorBlock.html';
var html = "<div ng-if=\"eb.showError\" class=\"ui negative message\">\r\n    <div class=\"header\">\r\n        {{eb.errorBlock.errorTitle}}\r\n    </div>\r\n    <p>\r\n        {{eb.errorBlock.errorMessage}}\r\n    </p>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
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
var baseLookupController_1 = __webpack_require__(8);
var EzGrid = (function () {
    function EzGrid() {
        this.templateUrl = __webpack_require__(46);
        this.controller = EzGridController;
        this.controllerAs = 'eg';
        this.bindings = {
            // The grid column definitions.
            gridColumns: '=egGridColumns',
            // The selected item - corresponds with the selected row on the grid.
            selectedItem: '=egSelectedItem',
            /**
             * Retrieve the items to display in the grid.
             * @param {UiGridRequest} request - The ui grid request containing
             *  the sorting, filtering and paging information.
             * @returns {UiGridResult<T>} - The ui grid result containing the
             *  retrieved items and count of total items.
             */
            getItems: '&egGetItems',
            /**
             * Executed when a grid item is double-clicked. The selected item is
             * set before this callback function is executed.
             */
            onDoubleClick: '&egOnDoubleClick',
            /**
             * The name of the model's id field.
             *
             * @type {string}
             */
            itemIdField: '=egItemIdField'
        };
    }
    return EzGrid;
}());
exports.EzGrid = EzGrid;
/**
 * @class toolkit.components.EzGridController
 * @classdesc A grid component.
 */
var EzGridController = (function (_super) {
    __extends(EzGridController, _super);
    function EzGridController($scope, uiGridService) {
        var _this = _super.call(this, $scope) || this;
        _this.uiGridService = uiGridService;
        return _this;
    }
    //#endregion
    //#region onInit
    EzGridController.prototype.$onInit = function () {
        var _this = this;
        this.gridOptions = this.uiGridService.initPagedGridOptions(this, this.gridColumns);
        this.filterRequest = this.uiGridService.initFilterRequest(this.gridOptions);
        this.reloadGrid();
        this.unwatchArray.push(function () { return _this.uiGridService.destroyGrid(_this); });
    };
    //#endregion
    //#region Functions
    EzGridController.prototype.reloadGrid = function () {
        return this.uiGridService.doSearch(this, false);
    };
    /**
     * Is the grid actually empty? Ensure there is no request currently running
     * and that the grid data is empty.
     */
    EzGridController.prototype.hasNoItems = function () {
        return !this.isRequestError
            && !this.isRequestRunning
            && this.gridOptions
            && this.gridOptions.data
            && this.gridOptions.data.length === 0;
    };
    //#region Constructor
    EzGridController.$inject = [
        '$scope',
        'uiGridService'
    ];
    return EzGridController;
}(baseLookupController_1.BaseLookupController));
exports.EzGridController = EzGridController;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/ezGrid/ezGrid.html';
var html = "<div ui-grid=\"eg.gridOptions\" ui-grid-selection ui-grid-pagination>\r\n\r\n    <div class=\"ui active inverted dimmer part-loader\" ng-if=\"eg.isRequestRunning\">\r\n        <div class=\"ui large text loader sr-only\"><span>Loading..</span></div>\r\n    </div>\r\n    <div ng-if=\"eg.isRequestError\" class=\"ui active inverted dimmer part-loader gridErrContainer\">\r\n        <div class=\"ui error message gridErrMessage\">\r\n            <div class=\"header\">An error occurred, please try again</div>\r\n            <button type=\"button\" class=\"ui basic icon button gridErrBtn\" ng-click=\"eg.reloadGrid()\"><i class=\"refresh icon\"></i> Reload Data</button>\r\n        </div>\r\n    </div>\r\n    <div ng-show=\"eg.hasNoItems()\" class=\"ui active inverted dimmer part-loader noItemsInfoContainer\">\r\n        <div class=\"ui info message noItemsMessage\">\r\n            <div class=\"header\">No items found.</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
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
var baseModalController_1 = __webpack_require__(4);
var EzModal = (function () {
    function EzModal() {
        this.templateUrl = __webpack_require__(48);
        this.controller = EzModalController;
        this.controllerAs = 'em';
        this.bindings = {
            // The text to be displayed in the modal header.
            headerText: '@emHeaderText',
            // The text to be displayed in the primary button.
            primaryButtonText: '@emPrimaryButtonText',
            // The text to be displayed in the secondary button.
            secondaryButtonText: '@emSecondaryButtonText',
            // The class name to apply to the modal. Because all modals are set
            // as detachable, using the component name as the top-level css
            // selector does not work. The class name allows for styling to be
            // applied to the specific modal.
            className: '@emClassName',
            // Is the modal visible? Two-way bound to allow for the child to
            // update the parent with the status of the modal.
            isVisible: '=emIsVisible',
            // Is the loader visible? Allow the parent to show or hide the
            // loader animation while performing async actions for the modal.
            isLoaderVisible: '=emIsLoaderVisible',
            // Does the modal have a child component that is also a modal?
            hasInnerModal: '<emHasInnerModal',
            /**
             * Executed when the primary button is selected. The positive callback.
             */
            onApprove: '&emOnApprove',
            /**
             * Executed when the secondary button is selected. The negative callback.
             */
            onDeny: '&emOnDeny',
            /**
             * Executed when the modal is shown/opened.
             */
            onShow: '&emOnShow',
            /**
             * Executed when the modal is hidden/closed.
             */
            onHidden: '&emOnHidden',
            // if set to true, does not open other previous modals when being closed
            closeLast: '=?emCloseLast'
        };
        this.transclude = true;
    }
    return EzModal;
}());
exports.EzModal = EzModal;
/**
 * @class toolkit.components.EzModalController
 * @classdesc A modal component.
 */
var EzModalController = (function (_super) {
    __extends(EzModalController, _super);
    function EzModalController($scope, $timeout, modalService) {
        var _this = _super.call(this, $scope, modalService) || this;
        _this.$timeout = $timeout;
        //#endregion
        //#region Functions
        _this.onHideCallback = function () {
            if (_this.onHidden) {
                _this.onHidden();
            }
            // timeout needed because callback fires from sm-modal scope
            _this.$timeout(function () {
                _this.isShown = false;
            });
        };
        _this.onVisibleCallback = function () {
            // timeout needed because callback fires from sm-modal scope
            _this.$timeout(function () {
                _this.isShown = true;
            });
        };
        _this.onPrimaryButtonClick = function () {
            _this.onApprove();
        };
        _this.onSecondaryButtonClick = function () {
            _this.isVisible = false;
            // If user clicks on Cancel before modal finishes its show animation, it will not show up again any more
            // even though isModalVisible is set to true
            if (!_this.isShown) {
                return;
            }
            if (_this.onDeny) {
                // this timeout is needed to ensure the modal stack is in the correct state.
                // if this timeout is not here the modal stack may contain a window that should be closed but will open it.
                _this.$timeout(function () {
                    _this.onDeny();
                });
            }
            _this.toggleModalVisibility(false);
        };
        return _this;
    }
    //#endregion
    //#region Constructor
    EzModalController.$inject = [
        '$scope',
        '$timeout',
        'modalService'
    ];
    return EzModalController;
}(baseModalController_1.BaseModalController));
exports.EzModalController = EzModalController;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/ezModal/ezModal.html';
var html = "<sm-modal\r\n    class=\"{{em.className}}\"\r\n    ng-class=\"{ 'data-is-active' : em.isShown, 'data-is-hidden' : !em.isShown }\"\r\n    id=\"{{em.id}}\"\r\n    visible=\"em.isModalVisible\"\r\n    on-show=\"em.onShow\"\r\n    on-hidden=\"em.onHideCallback\"\r\n    on-visible=\"em.onVisibleCallback\"\r\n    settings=\"{\r\n        transition: 'scale',\r\n        closable: false,\r\n        detachable: true,\r\n        observeChanges: true,\r\n        blurring: false\r\n    }\">\r\n\r\n    <div class=\"ui active inverted dimmer part-loader\" ng-if=\"em.isLoaderVisible\">\r\n        <div class=\"ui large text loader\"><span>Loading...</span></div>\r\n    </div>\r\n\r\n    <div class=\"header\">{{ em.headerText }}</div>\r\n    <div ng-if=\"em.isInDom\" class=\"content\" ng-transclude></div>\r\n\r\n    <div class=\"ui actions-row actions\">\r\n        <div class=\"ui basic button\" ng-if=\"em.secondaryButtonText\" data-ng-click=\"em.onSecondaryButtonClick()\">{{ em.secondaryButtonText }}</div>\r\n         <div class=\"ui primary button\" ng-if=\"em.primaryButtonText\" data-ng-click=\"em.onPrimaryButtonClick()\">{{ em.primaryButtonText }}</div>\r\n    </div>\r\n</sm-modal>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
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
var baseModalController_1 = __webpack_require__(4);
var EzModalTransclude = (function () {
    function EzModalTransclude() {
        this.templateUrl = __webpack_require__(50);
        this.controller = EzModalTranscludeController;
        this.controllerAs = 'em';
        this.bindings = {
            // The text to be displayed in the modal header.
            headerText: '@emHeaderText',
            // The text to be displayed in the primary button.
            primaryButtonText: '@emPrimaryButtonText',
            // The text to be displayed in the secondary button.
            secondaryButtonText: '@emSecondaryButtonText',
            // The class name to apply to the modal. Because all modals are set
            // as detachable, using the component name as the top-level css
            // selector does not work. The class name allows for styling to be
            // applied to the specific modal.
            className: '@emClassName',
            // Is the modal visible? Two-way bound to allow for the child to
            // update the parent with the status of the modal.
            isVisible: '=emIsVisible',
            // Is the loader visible? Allow the parent to show or hide the
            // loader animation while performing async actions for the modal.
            isLoaderVisible: '=emIsLoaderVisible',
            // Does the modal have a child component that is also a modal?
            hasInnerModal: '<emHasInnerModal',
            /**
             * Executed when the primary button is selected. The positive callback.
             */
            onApprove: '&emOnApprove',
            /**
             * Executed when the secondary button is selected. The negative callback.
             */
            onDeny: '&emOnDeny',
            /**
             * Executed when the modal is shown/opened.
             */
            onShow: '&emOnShow',
            /**
             * Executed when the modal is hidden/closed.
             */
            onHidden: '&emOnHidden',
            // if set to true, does not open other previous modals when being closed
            closeLast: '=?emCloseLast'
        };
        this.transclude = {
            content: 'contentSlot',
            actions: '?extraActionsSlot'
        };
    }
    return EzModalTransclude;
}());
exports.EzModalTransclude = EzModalTransclude;
/**
 * @class toolkit.components.EzModalController
 * @classdesc A modal component.
 */
var EzModalTranscludeController = (function (_super) {
    __extends(EzModalTranscludeController, _super);
    function EzModalTranscludeController($scope, $timeout, modalService) {
        var _this = _super.call(this, $scope, modalService) || this;
        _this.$timeout = $timeout;
        //#endregion
        //#region Functions
        _this.onHideCallback = function () {
            if (_this.onHidden) {
                _this.onHidden();
            }
            // timeout needed because callback fires from sm-modal scope
            _this.$timeout(function () {
                _this.isShown = false;
            });
        };
        _this.onVisibleCallback = function () {
            // timeout needed because callback fires from sm-modal scope
            _this.$timeout(function () {
                _this.isShown = true;
            });
        };
        _this.onPrimaryButtonClick = function () {
            _this.onApprove();
        };
        _this.onSecondaryButtonClick = function () {
            _this.isVisible = false;
            // If user clicks on Cancel before modal finishes its show animation, it will not show up again any more
            // even though isModalVisible is set to true
            if (!_this.isShown) {
                return;
            }
            if (_this.onDeny) {
                // this timeout is needed to ensure the modal stack is in the correct state.
                // if this timeout is not here the modal stack may contain a window that should be closed but will open it.
                _this.$timeout(function () {
                    _this.onDeny();
                });
            }
            _this.toggleModalVisibility(false);
        };
        return _this;
    }
    //#endregion
    //#region Constructor
    EzModalTranscludeController.$inject = [
        '$scope',
        '$timeout',
        'modalService'
    ];
    return EzModalTranscludeController;
}(baseModalController_1.BaseModalController));
exports.EzModalTranscludeController = EzModalTranscludeController;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/ezModalTransclude/ezModalTransclude.html';
var html = "<sm-modal\r\n    class=\"{{em.className}}\"\r\n    ng-class=\"{ 'data-is-active' : em.isShown, 'data-is-hidden' : !em.isShown }\"\r\n    id=\"{{em.id}}\"\r\n    visible=\"em.isModalVisible\"\r\n    on-show=\"em.onShow\"\r\n    on-hidden=\"em.onHideCallback\"\r\n    on-visible=\"em.onVisibleCallback\"\r\n    settings=\"{\r\n        transition: 'scale',\r\n        closable: false,\r\n        detachable: true,\r\n        observeChanges: true,\r\n        blurring: false\r\n    }\">\r\n\r\n    <div class=\"ui active inverted dimmer part-loader\" ng-if=\"em.isLoaderVisible\">\r\n        <div class=\"ui large text loader\"><span>Loading...</span></div>\r\n    </div>\r\n\r\n    <div class=\"header\">{{ em.headerText }}</div>\r\n    <div ng-if=\"em.isInDom\" class=\"content\" ng-transclude=\"content\"></div>\r\n\r\n    <div class=\"ui actions-row actions\">\r\n\r\n        <div class=\"extra-actions\" ng-transclude=\"actions\"></div>\r\n        <div class=\"ui basic button\" ng-if=\"em.secondaryButtonText\" data-ng-click=\"em.onSecondaryButtonClick()\">{{ em.secondaryButtonText }}</div>\r\n        <div class=\"ui primary button\" ng-if=\"em.primaryButtonText\" data-ng-click=\"em.onPrimaryButtonClick()\">{{ em.primaryButtonText }}</div>\r\n    </div>\r\n</sm-modal>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
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
var _ = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var typeConsts_1 = __webpack_require__(6);
var SingleLookup = (function () {
    function SingleLookup() {
        this.templateUrl = __webpack_require__(52);
        this.controller = SingleLookupController;
        this.controllerAs = 'sl';
        this.bindings = {
            // The function to request lookup data, passed with 'request' as a parameter
            getData: '&getData',
            // The function to get the initial item by ID
            getSingle: '&getSingle',
            // The columns to display in the grid in the format
            // [{ displayName: 'Last Name', name: 'lastName', width: '30%'}]
            gridColumns: '<gridColumns',
            // If true, the button to clear the lookup is hidden.
            isRequired: '<?isRequired',
            // The html template to display in the textbox
            // example: name + ' - ' + number
            itemTemplate: '@itemTemplate',
            // The callback function that returns the selected items id, passed with 'result' as a parameter
            // (result will be the id of the selected item)
            resultCallback: '&resultCallback',
            // occurs before popup is being opened
            beforePopupOpen: '&beforePopupOpen',
            // The id to use as the current selected item
            selectedId: '<selectedId',
            // The title for the lookup window
            title: '@title',
            // The input placeholder text
            placeholder: '@placeholder',
            // The name of the property on the item that contains the unique
            //  identifier (probably 'id')
            itemIdField: '<?itemIdField',
            /**
             * whether to show loading spinner or not
             */
            requestRunning: '=?isRequestRunning',
            /**
             * whether to lookup modal is visible or not
             */
            isModalVisible: '=?isModalVisible',
            // if set to true, does not open other previous modals when being closed
            closeLast: '=?closeLast'
        };
    }
    return SingleLookup;
}());
exports.SingleLookup = SingleLookup;
/**
 * @class toolkit.components.SingleLookupController
 * @classdesc A single lookup component.
 */
var SingleLookupController = (function (_super) {
    __extends(SingleLookupController, _super);
    function SingleLookupController($scope, $timeout, notificationService, customUiGridConstants, uiGridConstants) {
        var _this = _super.call(this, $scope) || this;
        _this.$scope = $scope;
        _this.$timeout = $timeout;
        _this.notificationService = notificationService;
        _this.customUiGridConstants = customUiGridConstants;
        _this.uiGridConstants = uiGridConstants;
        _this.commonGridColumnOptions = {
            enableFiltering: true,
            filter: {
                condition: _this.uiGridConstants.filter.STARTS_WITH,
                placeholder: 'starts with',
                disableCancelFilterButton: true
            },
            filterHeaderTemplate: _this.customUiGridConstants.filterHeaderTemplate,
            headerCellTemplate: _this.customUiGridConstants.headerCellTemplate,
            sort: { direction: 'asc' }
        };
        /**
         * The function called when the user clicks the ok button.
         * Return false to keep the window open.
         */
        _this.onApprove = function () {
            if (!_this.selectedItem) {
                _this.notificationService.error('Please make a selection.');
                return false;
            }
            _this.updateItemDisplay();
            _this.isModalVisible = false;
        };
        /**
         * The function called when the user clicks the cancel button.
         */
        _this.onDeny = function () {
            _this.selectedItem = _.cloneDeep(_this.originalItem);
        };
        /**
         * The function called when the modal window is done closing.
         */
        _this.onHidden = function () {
            _this.resultCallback({ result: _this.selectedItem ? _this.selectedItem : { id: typeConsts_1.TypeConsts.emptyGuid } });
            _this.originalItem = null;
        };
        /**
         * Watch function to check if the selected id has changed
         */
        _this.selectedIdChanged = function (newValue, oldValue) {
            // Check if the value that has been changed is equal to the currently selected item's id, if they
            // are the same we do not need to do the refresh. The id's would not match if you are re-using a component
            // for multiple purposes and need to refresh the display on the lookup.
            if (newValue !== oldValue && (_this.selectedItem === null || _this.selectedItem.id !== newValue)) {
                _this.refreshSelectedId();
            }
        };
        _this.isModalVisible = false;
        _this.unwatchArray.push(_this.$scope.$watch(function () { return _this.selectedId; }, _this.selectedIdChanged));
        return _this;
    }
    /**
     * Initialization function to get everything setup.
     */
    SingleLookupController.prototype.$onInit = function () {
        var _this = this;
        // Merge the columns passed in with the common properties
        _.forEach(this.gridColumns, function (col) {
            // Use cloneDeep to prevent the same filter being used multiple times.
            var c = Object.assign({}, _.cloneDeep(_this.commonGridColumnOptions), col);
            Object.assign(col, c);
        });
        // Find the item to display if the id is given
        this.refreshSelectedId();
    };
    /**
     * Clears the selected item.
     */
    SingleLookupController.prototype.clearItem = function () {
        this.itemDisplay = '';
        this.selectedId = typeConsts_1.TypeConsts.emptyGuid;
        this.selectedItem = null;
        this.originalItem = null;
        this.resultCallback({ result: { id: typeConsts_1.TypeConsts.emptyGuid } });
    };
    /**
     * Gets all the items filtered, sorted and paged.
     */
    SingleLookupController.prototype.getItems = function (request) {
        return this.getData({ request: request });
    };
    /**
     * Opens the editor when an item is double clicked.
     */
    SingleLookupController.prototype.onDoubleClickEvent = function () {
        this.updateItemDisplay();
        this.isModalVisible = false;
    };
    /**
     * Function to open the modal window.
     */
    SingleLookupController.prototype.openModal = function () {
        if (this.beforePopupOpen) {
            var result = this.beforePopupOpen();
            if (result === false) {
                return;
            }
        }
        this.isModalVisible = true;
        if (this.selectedItem) {
            this.originalItem = _.cloneDeep(this.selectedItem);
        }
    };
    /**
     * Function to refresh the currently selected item
     */
    SingleLookupController.prototype.refreshSelectedId = function () {
        var _this = this;
        if (this.selectedId && this.selectedId !== typeConsts_1.TypeConsts.emptyGuid) {
            this.isDataLoading = true;
            this.getSingle({ id: this.selectedId })
                .then(function (result) {
                _this.$timeout(function () {
                    _this.selectedItem = result;
                    _this.updateItemDisplay();
                });
            }).catch(function () {
                // nothing to do
            }).then(function () {
                _this.$timeout(function () {
                    _this.isDataLoading = false;
                });
            });
        }
        else {
            this.itemDisplay = '';
            this.selectedItem = null;
            this.originalItem = null;
        }
    };
    SingleLookupController.prototype.updateItemDisplay = function () {
        this.itemDisplay = this.$scope.$eval(this.itemTemplate, this.selectedItem);
    };
    SingleLookupController.prototype.getLoadingClass = function () {
        if (this.isDataLoading) {
            return 'loading';
        }
        return '';
    };
    SingleLookupController.$inject = [
        '$scope',
        '$timeout',
        'notificationService',
        'customUiGridConstants',
        'uiGridConstants'
    ];
    return SingleLookupController;
}(baseComponent_1.BaseComponent));
exports.SingleLookupController = SingleLookupController;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/singleLookup/singleLookup.html';
var html = "<div class=\"ui action input\">\r\n    <input type=\"text\" ng-model=\"sl.itemDisplay\" placeholder=\"{{ sl.placeholder }}\" readonly />\r\n    <button class=\"ui icon button {{ sl.getLoadingClass() }}\" ng-click=\"sl.openModal()\">\r\n        <i class=\"search icon\"></i>\r\n    </button>\r\n    <button ng-if=\"!sl.isRequired\" class=\"ui icon button {{ sl.getLoadingClass() }}\" ng-click=\"sl.clearItem()\">\r\n        <i class=\"remove icon\"></i>\r\n    </button>\r\n</div>\r\n\r\n<ez-modal class=\"small\"\r\n          em-header-text=\"{{ sl.title }}\"\r\n          em-primary-button-text=\"Select\"\r\n          em-secondary-button-text=\"Cancel\"\r\n          em-is-visible=\"sl.isModalVisible\"\r\n          em-on-deny=\"sl.onDeny()\"\r\n          em-on-hidden=\"sl.onHidden()\"\r\n          em-on-approve=\"sl.onApprove()\"\r\n          em-close-last=\"sl.closeLast\">\r\n\r\n        <div class=\"ui active inverted dimmer part-loader\" ng-if=\"sl.requestRunning\">\r\n            <div class=\"ui large text loader sr-only\"><span>Loading...</span></div>\r\n        </div>\r\n\r\n        <ez-grid eg-grid-columns=\"sl.gridColumns\"\r\n                 eg-selected-item=\"sl.selectedItem\"\r\n                 eg-get-items=\"sl.getItems(request)\"\r\n                 eg-on-double-click=\"sl.onDoubleClickEvent()\"\r\n                 eg-item-id-field=\"sl.itemIdField\">\r\n        </ez-grid>\r\n\r\n</ez-modal>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
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
var _ = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var typeConsts_1 = __webpack_require__(6);
var SingleLookupTransclude = (function () {
    function SingleLookupTransclude() {
        this.templateUrl = __webpack_require__(54);
        this.controller = SingleLookupTranscludeController;
        this.controllerAs = 'sl';
        this.bindings = {
            // The function to request lookup data, passed with 'request' as a parameter
            getData: '&getData',
            // The function to get the initial item by ID
            getSingle: '&getSingle',
            // The columns to display in the grid in the format
            // [{ displayName: 'Last Name', name: 'lastName', width: '30%'}]
            gridColumns: '<gridColumns',
            // If true, the button to clear the lookup is hidden.
            isRequired: '<?isRequired',
            // The html template to display in the textbox
            // example: name + ' - ' + number
            itemTemplate: '@itemTemplate',
            // The callback function that returns the selected items id, passed with 'result' as a parameter
            // (result will be the id of the selected item)
            resultCallback: '&resultCallback',
            // occurs before popup is being opened
            beforePopupOpen: '&beforePopupOpen',
            // The id to use as the current selected item
            selectedId: '<selectedId',
            // The title for the lookup window
            title: '@title',
            // The input placeholder text
            placeholder: '@placeholder',
            // The name of the property on the item that contains the unique
            //  identifier (probably 'id')
            itemIdField: '<?itemIdField',
            /**
             * whether to show loading spinner or not
             */
            requestRunning: '=?isRequestRunning',
            /**
             * whether to lookup modal is visible or not
             */
            isModalVisible: '=?isModalVisible',
            // if set to true, does not open other previous modals when being closed
            closeLast: '=?closeLast'
        };
        this.transclude = {
            actions: '?extraActionsSlot'
        };
    }
    return SingleLookupTransclude;
}());
exports.SingleLookupTransclude = SingleLookupTransclude;
/**
 * @class toolkit.components.SingleLookupController
 * @classdesc A single lookup component.
 */
var SingleLookupTranscludeController = (function (_super) {
    __extends(SingleLookupTranscludeController, _super);
    function SingleLookupTranscludeController($scope, $timeout, notificationService, customUiGridConstants, uiGridConstants) {
        var _this = _super.call(this, $scope) || this;
        _this.$scope = $scope;
        _this.$timeout = $timeout;
        _this.notificationService = notificationService;
        _this.customUiGridConstants = customUiGridConstants;
        _this.uiGridConstants = uiGridConstants;
        _this.commonGridColumnOptions = {
            enableFiltering: true,
            filter: {
                condition: _this.uiGridConstants.filter.STARTS_WITH,
                placeholder: 'starts with',
                disableCancelFilterButton: true
            },
            filterHeaderTemplate: _this.customUiGridConstants.filterHeaderTemplate,
            headerCellTemplate: _this.customUiGridConstants.headerCellTemplate,
            sort: { direction: 'asc' }
        };
        /**
         * The function called when the user clicks the ok button.
         * Return false to keep the window open.
         */
        _this.onApprove = function () {
            if (!_this.selectedItem) {
                _this.notificationService.error('Please make a selection.');
                return false;
            }
            _this.updateItemDisplay();
            _this.isModalVisible = false;
        };
        /**
         * The function called when the user clicks the cancel button.
         */
        _this.onDeny = function () {
            _this.selectedItem = _.cloneDeep(_this.originalItem);
        };
        /**
         * The function called when the modal window is done closing.
         */
        _this.onHidden = function () {
            _this.resultCallback({ result: _this.selectedItem ? _this.selectedItem : { id: typeConsts_1.TypeConsts.emptyGuid } });
            _this.originalItem = null;
        };
        /**
         * Watch function to check if the selected id has changed
         */
        _this.selectedIdChanged = function (newValue, oldValue) {
            // Check if the value that has been changed is equal to the currently selected item's id, if they
            // are the same we do not need to do the refresh. The id's would not match if you are re-using a component
            // for multiple purposes and need to refresh the display on the lookup.
            if (newValue !== oldValue && (_this.selectedItem === null || _this.selectedItem.id !== newValue)) {
                _this.refreshSelectedId();
            }
        };
        _this.isModalVisible = false;
        _this.unwatchArray.push(_this.$scope.$watch(function () { return _this.selectedId; }, _this.selectedIdChanged));
        return _this;
    }
    /**
     * Initialization function to get everything setup.
     */
    SingleLookupTranscludeController.prototype.$onInit = function () {
        var _this = this;
        // Merge the columns passed in with the common properties
        _.forEach(this.gridColumns, function (col) {
            // Use cloneDeep to prevent the same filter being used multiple times.
            var c = Object.assign({}, _.cloneDeep(_this.commonGridColumnOptions), col);
            Object.assign(col, c);
        });
        // Find the item to display if the id is given
        this.refreshSelectedId();
    };
    /**
     * Clears the selected item.
     */
    SingleLookupTranscludeController.prototype.clearItem = function () {
        this.itemDisplay = '';
        this.selectedId = typeConsts_1.TypeConsts.emptyGuid;
        this.selectedItem = null;
        this.originalItem = null;
        this.resultCallback({ result: { id: typeConsts_1.TypeConsts.emptyGuid } });
    };
    /**
     * Gets all the items filtered, sorted and paged.
     */
    SingleLookupTranscludeController.prototype.getItems = function (request) {
        return this.getData({ request: request });
    };
    /**
     * Opens the editor when an item is double clicked.
     */
    SingleLookupTranscludeController.prototype.onDoubleClickEvent = function () {
        this.updateItemDisplay();
        this.isModalVisible = false;
    };
    /**
     * Function to open the modal window.
     */
    SingleLookupTranscludeController.prototype.openModal = function () {
        if (this.beforePopupOpen) {
            var result = this.beforePopupOpen();
            if (result === false) {
                return;
            }
        }
        this.isModalVisible = true;
        if (this.selectedItem) {
            this.originalItem = _.cloneDeep(this.selectedItem);
        }
    };
    /**
     * Function to refresh the currently selected item
     */
    SingleLookupTranscludeController.prototype.refreshSelectedId = function () {
        var _this = this;
        if (this.selectedId && this.selectedId !== typeConsts_1.TypeConsts.emptyGuid) {
            this.isDataLoading = true;
            this.getSingle({ id: this.selectedId })
                .then(function (result) {
                _this.$timeout(function () {
                    _this.selectedItem = result;
                    _this.updateItemDisplay();
                });
            }).catch(function () {
                // nothing to do
            }).then(function () {
                _this.$timeout(function () {
                    _this.isDataLoading = false;
                });
            });
        }
        else {
            this.itemDisplay = '';
            this.selectedItem = null;
            this.originalItem = null;
        }
    };
    SingleLookupTranscludeController.prototype.updateItemDisplay = function () {
        this.itemDisplay = this.$scope.$eval(this.itemTemplate, this.selectedItem);
    };
    SingleLookupTranscludeController.prototype.getLoadingClass = function () {
        if (this.isDataLoading) {
            return 'loading';
        }
        return '';
    };
    SingleLookupTranscludeController.$inject = [
        '$scope',
        '$timeout',
        'notificationService',
        'customUiGridConstants',
        'uiGridConstants'
    ];
    return SingleLookupTranscludeController;
}(baseComponent_1.BaseComponent));
exports.SingleLookupTranscludeController = SingleLookupTranscludeController;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/singleLookupTransclude/singleLookupTransclude.html';
var html = "<div class=\"ui action input\">\r\n    <input type=\"text\" ng-model=\"sl.itemDisplay\" placeholder=\"{{ sl.placeholder }}\" readonly />\r\n    <button class=\"ui icon button {{ sl.getLoadingClass() }}\" ng-click=\"sl.openModal()\">\r\n        <i class=\"search icon\"></i>\r\n    </button>\r\n    <button ng-if=\"!sl.isRequired\" class=\"ui icon button {{ sl.getLoadingClass() }}\" ng-click=\"sl.clearItem()\">\r\n        <i class=\"remove icon\"></i>\r\n    </button>\r\n</div>\r\n\r\n<ez-modal-transclude class=\"small\"\r\n          em-header-text=\"{{ sl.title }}\"\r\n          em-primary-button-text=\"Select\"\r\n          em-secondary-button-text=\"Cancel\"\r\n          em-is-visible=\"sl.isModalVisible\"\r\n          em-on-deny=\"sl.onDeny()\"\r\n          em-on-hidden=\"sl.onHidden()\"\r\n          em-on-approve=\"sl.onApprove()\"\r\n          em-close-last=\"sl.closeLast\">\r\n\r\n          <content-slot>\r\n\r\n                <div class=\"ui active inverted dimmer part-loader\" ng-if=\"sl.requestRunning\">\r\n                    <div class=\"ui large text loader sr-only\"><span>Loading...</span></div>\r\n                </div>\r\n\r\n                <ez-grid eg-grid-columns=\"sl.gridColumns\"\r\n                    eg-selected-item=\"sl.selectedItem\"\r\n                    eg-get-items=\"sl.getItems(request)\"\r\n                    eg-on-double-click=\"sl.onDoubleClickEvent()\"\r\n                    eg-item-id-field=\"sl.itemIdField\">\r\n                </ez-grid>\r\n        </content-slot>\r\n        \r\n        <extra-actions-slot ng-transclude=\"actions\">            \r\n        </extra-actions-slot>\r\n\r\n</ez-modal-transclude>\r\n\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The upload image component.
 */
var UploadImage = (function () {
    /**
     * inits component.
     */
    function UploadImage() {
        this.templateUrl = __webpack_require__(56);
        this.controller = UploadImageController;
        this.controllerAs = 'ui';
        this.bindings = {
            imageRequest: '&uiImageUploadRequest',
            existingImageSrc: '=uiExistingImageSrc'
        };
    }
    return UploadImage;
}());
exports.UploadImage = UploadImage;
/**
 * @class toolkit.components.UploadImageController
 * @classdesc An image uploader component.
 */
var UploadImageController = (function () {
    /**
     * inits controller.
     * @param $timeout
     */
    function UploadImageController($scope, notificationService) {
        this.$scope = $scope;
        this.notificationService = notificationService;
    }
    Object.defineProperty(UploadImageController.prototype, "imageSrc", {
        /**
         * gets the image source.
         * @returns {string}
         */
        get: function () {
            return this.existingImageSrc;
        },
        enumerable: true,
        configurable: true
    });
    // occurs on image being selected
    UploadImageController.prototype.onImageSelect = function (file) {
        var _this = this;
        if (!file || this.isRequestRunning) {
            return;
        }
        this.isRequestRunning = true;
        this.imageRequest({ file: file })
            .catch(function () {
            // nothing needs to be done
        })
            .then(function () {
            _this.$scope.$apply(function () {
                _this.isRequestRunning = false;
                // Add a random query string to the image source url to
                // force a reload.
                var time = new Date().getTime().toString();
                _this.existingImageSrc = String.prototype.concat(_this.existingImageSrc, '&cb=', time);
            });
        });
    };
    UploadImageController.$inject = [
        '$scope',
        'notificationService'
    ];
    return UploadImageController;
}());
exports.UploadImageController = UploadImageController;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/uploadImage/uploadImage.html';
var html = "<div class=\"ui segment image-uploader-container\">\r\n\r\n    <div class=\"ui active inverted dimmer part-loader\" ng-if=\"ui.isRequestRunning\">\r\n        <div class=\"ui large text loader\"><span>Loading..</span></div>\r\n    </div>\r\n\r\n    <img ng-if=\"!ui.hasExistingImage\" class=\"ui small rounded image\"\r\n         ngf-select=\"ui.onImageSelect($file)\"\r\n         ngf-pattern=\"'image/*'\"\r\n         ngf-accept=\"'image/*'\"\r\n         ng-src=\"{{ui.imageSrc}}\">\r\n\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationViewer = (function () {
    function NotificationViewer() {
        this.templateUrl = __webpack_require__(58);
        this.controller = NotificationViewerController;
        this.controllerAs = 'nv';
        this.bindings = {};
    }
    return NotificationViewer;
}());
exports.NotificationViewer = NotificationViewer;
var NotificationViewerController = (function () {
    function NotificationViewerController(service) {
        this.service = service;
    }
    Object.defineProperty(NotificationViewerController.prototype, "items", {
        //#region Properties
        get: function () {
            return this.service.items();
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region Functions
    NotificationViewerController.prototype.dismiss = function (item) {
        this.service.dismiss(item);
    };
    //#endregion
    //#region Constructor
    NotificationViewerController.$inject = ['persistentNotificationService'];
    return NotificationViewerController;
}());
exports.NotificationViewerController = NotificationViewerController;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/notificationViewer/notificationViewer.html';
var html = "<div ng-repeat=\"item in nv.items\" class=\"ui {{ item.type }} message\">\r\n    <i class=\"close icon\" ng-click=\"nv.dismiss(item)\"></i>\r\n    <div>\r\n        {{ item.message }}\r\n    </div>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.components
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ColorPicker = (function () {
    function ColorPicker() {
        this.templateUrl = __webpack_require__(60);
        this.controller = ColorPickerController;
        this.controllerAs = 'cp';
        this.bindings = {
            color: '=color',
            text: '<?text'
        };
    }
    return ColorPicker;
}());
exports.ColorPicker = ColorPicker;
/**
 * @class toolkit.components.ColorPickerController
 * @classdesc Methods for showing the color picker component.
 * @requires {@link https://github.com/buberdds/angular-bootstrap-colorpicker | angular-bootstrap-colorpicker }
 */
var ColorPickerController = (function () {
    function ColorPickerController() {
    }
    ColorPickerController.prototype.$onInit = function () {
        if (this.text === undefined || this.text === null || this.text.length === 0) {
            this.text = 'Pick a color';
        }
    };
    return ColorPickerController;
}());
exports.ColorPickerController = ColorPickerController;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/components/colorPicker/colorPicker.html';
var html = "<div class=\"ui labeled button\">\r\n        <button \r\n        class=\"ui fluid basic button\"\r\n        colorpicker type=\"button\" \r\n        colorpicker-position=\"top\" \r\n        ng-model=\"cp.color\">\r\n        {{cp.text}}\r\n    </button>\r\n    <a class=\"ui basic left pointing label\" ng-style=\"{'background-color': cp.color}\"></a>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var customUiGridConstants_1 = __webpack_require__(62);
exports.CustomUiGridConstants = customUiGridConstants_1.CustomUiGridConstants;
var eventConsts_1 = __webpack_require__(3);
exports.EventConsts = eventConsts_1.EventConsts;
var typeConsts_1 = __webpack_require__(6);
exports.TypeConsts = typeConsts_1.TypeConsts;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.constants.CustomUiGridConstants
* @classdesc An angular ui-grid constants.
*/
var CustomUiGridConstants = (function () {
    function CustomUiGridConstants() {
    }
    Object.defineProperty(CustomUiGridConstants, "Default", {
        get: function () {
            return {
                debounceDelay: 400,
                headerCellTemplate: __webpack_require__(63),
                filterHeaderTemplate: __webpack_require__(64),
                cellTemplate: __webpack_require__(65)
            };
        },
        enumerable: true,
        configurable: true
    });
    return CustomUiGridConstants;
}());
exports.CustomUiGridConstants = CustomUiGridConstants;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/templates/ui-grid/ui-grid-search-header.html';
var html = "<style>\r\n    .ui-grid-filter-input {\r\n        display: inline-block;\r\n        position: relative;\r\n        height: 25px !important;\r\n        width: 0 auto;\r\n        min-width: 75% !important;\r\n        width: 100%;\r\n        padding: 0px;\r\n    }\r\n</style>\r\n\r\n<div ng-class=\"{ 'sortable': sortable }\">\r\n    <div class=\"ui-grid-cell-contents\" col-index=\"renderIndex\" title=\"TOOLTIP\">\r\n        <span ng-bind=\"col.displayName CUSTOM_FILTERS\"></span>\r\n\r\n        <span ui-grid-visible=\"col.sort.direction\" ng-class=\"{ 'ui-grid-icon-up-dir': col.sort.direction == asc, 'ui-grid-icon-down-dir': col.sort.direction == desc, 'ui-grid-icon-blank': !col.sort.direction }\">\r\n            &nbsp;\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\">\r\n        <i class=\"ui-grid-icon-angle-down\">&nbsp;</i>\r\n    </div>\r\n\r\n    <div ui-grid-filter=\"\"></div>\r\n\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/templates/ui-grid/ui-grid-filter.html';
var html = "<div class=\"ui-grid-filter-container\"\r\n    ng-repeat=\"colFilter in col.filters\"\r\n    ng-class=\"{'ui-grid-filter-cancel-button-hidden' : colFilter.disableCancelFilterButton === true }\">\r\n    <div ng-if=\"colFilter.type !== 'select'\">\r\n        <div class=\"ui small icon input ui-grid-filter-input\">\r\n            <input type=\"text\"\r\n                class=\"ui-grid-filter-input-{{$index}}\"\r\n                ng-model=\"colFilter.term\"\r\n                ng-attr-placeholder=\"{{colFilter.placeholder || ''}}\"\r\n                aria-label=\"{{colFilter.ariaLabel || aria.defaultFilterLabel}}\" />\r\n\r\n            <i class=\"search icon\"></i>\r\n        </div>\r\n\r\n        <div role=\"button\"\r\n            class=\"ui-grid-filter-button\"\r\n            ng-click=\"removeFilter(colFilter, $index)\"\r\n            ng-if=\"!colFilter.disableCancelFilterButton\"\r\n            ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\"\r\n            ng-show=\"colFilter.term !== undefined && colFilter.term !== null && colFilter.term !== ''\">\r\n            <i class=\"ui-grid-icon-cancel\"\r\n                ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;\r\n            </i>\r\n        </div>\r\n    </div>\r\n\r\n    <div ng-if=\"colFilter.type === 'select'\">\r\n        <select class=\"ui-grid-filter-select ui-grid-filter-input-{{$index}}\"\r\n            ng-model=\"colFilter.term\"\r\n            aria-label=\"{{colFilter.ariaLabel || ''}}\"\r\n            ng-options=\"option.value as option.label for option in colFilter.selectOptions\">\r\n            <option value=\"\" disabled selected ng-bind=\"colFilter.placeholder || 'Select an option'\"></option>\r\n        </select>\r\n\r\n        <div role=\"button\"\r\n            class=\"ui-grid-filter-button-select\"\r\n            ng-click=\"removeFilter(colFilter, $index)\"\r\n            ng-if=\"!colFilter.disableCancelFilterButton\"\r\n            ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\"\r\n            ng-show=\"colFilter.term !== undefined && colFilter.term != null\">\r\n            <i class=\"ui-grid-icon-cancel\"\r\n                ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var path = 'C:/programming/work/gitlab/ez-web-toolkit/src/templates/ui-grid/ui-grid-centered-cell.html';
var html = "<div class=\"ui-grid-cell-contents\" style=\"line-height:{{ grid.options.rowHeight - 10 }}px\" title=\"TOOLTIP\" ng-bind=\"COL_FIELD CUSTOM_FILTERS\"></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorState_1 = __webpack_require__(2);
exports.EditorState = editorState_1.EditorState;
var errorResponseType_1 = __webpack_require__(11);
exports.ErrorResponseType = errorResponseType_1.ErrorResponseType;
var httpStatusCode_1 = __webpack_require__(12);
exports.HttpStatusCode = httpStatusCode_1.HttpStatusCode;
var managerState_1 = __webpack_require__(10);
exports.ManagerState = managerState_1.ManagerState;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responseError_1 = __webpack_require__(13);
exports.ResponseError = responseError_1.ResponseError;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestOptions_1 = __webpack_require__(14);
exports.RequestOptions = requestOptions_1.RequestOptions;
var problemResult_1 = __webpack_require__(15);
exports.ProblemResult = problemResult_1.ProblemResult;
var validationProblemResult_1 = __webpack_require__(69);
exports.ValidationProblemResult = validationProblemResult_1.ValidationProblemResult;
var uiGridRequest_1 = __webpack_require__(16);
exports.UiGridRequest = uiGridRequest_1.UiGridRequest;
var uiGridResult_1 = __webpack_require__(70);
exports.UiGridResult = uiGridResult_1.UiGridResult;
var errorBlock_1 = __webpack_require__(71);
exports.ErrorBlockModel = errorBlock_1.ErrorBlockModel;
var persistentMessage_1 = __webpack_require__(17);
exports.PersistentMessage = persistentMessage_1.PersistentMessage;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
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
var problemResult_1 = __webpack_require__(15);
/**
* @class toolkit.models.ValidationProblemResult
* @classdesc The validation problem result.
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.models.UiGridResult<T>
* @classdesc The result of angular ui grid request.
*/
var UiGridResult = (function () {
    function UiGridResult() {
    }
    return UiGridResult;
}());
exports.UiGridResult = UiGridResult;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.models
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.models.ErrorBlockModel
* @classdesc The error model for error block component.
*/
var ErrorBlockModel = (function () {
    function ErrorBlockModel() {
    }
    return ErrorBlockModel;
}());
exports.ErrorBlockModel = ErrorBlockModel;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responseHandlers_1 = __webpack_require__(73);
exports.ResponseHandlers = responseHandlers_1.ResponseHandlers;
var apiService_1 = __webpack_require__(74);
exports.ApiService = apiService_1.ApiService;
var modalService_1 = __webpack_require__(75);
exports.ModalService = modalService_1.ModalService;
var notificationService_1 = __webpack_require__(76);
exports.NotificationService = notificationService_1.NotificationService;
var processingService_1 = __webpack_require__(78);
exports.ProcessingService = processingService_1.ProcessingService;
var serverValidationService_1 = __webpack_require__(79);
exports.ServerValidationService = serverValidationService_1.ServerValidationService;
var serviceRequestProcessor_1 = __webpack_require__(80);
exports.ServiceRequestProcessor = serviceRequestProcessor_1.ServiceRequestProcessor;
var uiGridService_1 = __webpack_require__(81);
exports.UiGridService = uiGridService_1.UiGridService;
var persistentNotificationService_1 = __webpack_require__(82);
exports.PersistentNotificationService = persistentNotificationService_1.PersistentNotificationService;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorResponseType_1 = __webpack_require__(11);
var httpStatusCode_1 = __webpack_require__(12);
var responseError_1 = __webpack_require__(13);
var successStatusCodes = [
    httpStatusCode_1.HttpStatusCode.OK,
    httpStatusCode_1.HttpStatusCode.Created,
    httpStatusCode_1.HttpStatusCode.NoContent
];
/**
 * Generic response handlers.
 */
var ResponseHandlers = (function () {
    function ResponseHandlers(notification) {
        this.notification = notification;
    }
    /**
     * Notifies and throws a generic error message.
     *
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    ResponseHandlers.prototype.error = function (rethrow, hideErrorMessage) {
        if (rethrow === void 0) { rethrow = true; }
        if (hideErrorMessage === void 0) { hideErrorMessage = false; }
        var message = 'An error occurred.';
        if (!hideErrorMessage) {
            this.notification.error(message);
        }
        if (rethrow) {
            throw new responseError_1.ResponseError(errorResponseType_1.ErrorResponseType.ConnectionLost, message);
        }
    };
    /**
     * Handles error in response.
     *
     * makes notification with detail taken from json and throws ResponseError
     * with the type of data and data itself
     *
     * @param {any} jsonData - The json data object.
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    ResponseHandlers.prototype.handleProblem = function (jsonData, rethrow, hideErrorMessage) {
        if (rethrow === void 0) { rethrow = true; }
        if (hideErrorMessage === void 0) { hideErrorMessage = false; }
        var message = jsonData.detail;
        if (message) {
            if (!hideErrorMessage) {
                this.notification.error(message);
            }
        }
        else {
            this.error(rethrow, hideErrorMessage);
        }
        var errorResponseType = this.getErrorResponseType(jsonData);
        if (rethrow) {
            throw new responseError_1.ResponseError(errorResponseType, message, jsonData);
        }
    };
    /**
     * Checks if response is success.
     *
     * @param {HttpStatusCode} statusCode - The http status code.
     * @returns {boolean} Whether or not the status code is a success response.
     */
    ResponseHandlers.prototype.isSuccessResponse = function (statusCode) {
        return successStatusCodes.includes(statusCode);
    };
    /**
     * Gets response data typed from json data.
     *
     * @param {any} jsonData - The json data object.
     * @returns {ErrorResponseType} The error response type.
     */
    ResponseHandlers.prototype.getErrorResponseType = function (jsonData) {
        if (jsonData.detail) {
            if (jsonData.hasServerValidationErrors) {
                return errorResponseType_1.ErrorResponseType.ValidationProblemResult;
            }
            return errorResponseType_1.ErrorResponseType.ProblemResult;
        }
        return errorResponseType_1.ErrorResponseType.ConnectionLost;
    };
    ResponseHandlers.$inject = [
        'notificationService'
    ];
    return ResponseHandlers;
}());
exports.ResponseHandlers = ResponseHandlers;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(7);
var requestOptions_1 = __webpack_require__(14);
var ApiService = (function () {
    function ApiService($http, responseHandlers) {
        this.$http = $http;
        this.responseHandlers = responseHandlers;
    }
    ApiService.prototype.req = function (method, url, data) {
        var opts = new requestOptions_1.RequestOptions(url, method);
        opts.headers = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        if (data) {
            opts.data = data;
        }
        return this.request(opts);
    };
    ApiService.prototype.upload = function (method, url, file, data) {
        var opts = new requestOptions_1.RequestOptions(url, method);
        opts.headers = {
            // NOTE: Content type must be undefined for this to work. It is set
            // automagically.
            'Content-Type': undefined
        };
        if (data) {
            opts.data = data;
        }
        // transforms request data to the form data request with key/value pairs
        opts.transformRequest = function (requestData, headersGetter) {
            var formData = new FormData();
            if (requestData) {
                angular.forEach(requestData, function (value, key) {
                    formData.append(key.toString(), value);
                });
            }
            formData.append('file', file);
            return formData;
        };
        return this.request(opts);
    };
    ApiService.prototype.urlEncoded = function (method, url, data) {
        var opts = new requestOptions_1.RequestOptions(url, method);
        opts.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        if (data) {
            opts.data = data;
        }
        // transforms request data to the form data request with key/value pairs
        opts.transformRequest = function (requestData, headersGetter) {
            var dataStr = '';
            if (requestData) {
                angular.forEach(requestData, function (value, key) {
                    if (dataStr) {
                        dataStr += '&';
                    }
                    dataStr += key + "=" + encodeURIComponent(value);
                });
            }
            return dataStr;
        };
        return this.request(opts);
    };
    ApiService.prototype.request = function (opts) {
        var _this = this;
        var ngPromise = this.$http(opts)
            .catch(function (err) {
            // If a response was received and it contains some useful information.
            if (err.data) {
                _this.responseHandlers.handleProblem(err.data, opts.rethrow, opts.hideErrorMessage);
            }
            else {
                _this.responseHandlers.error(opts.rethrow, opts.hideErrorMessage);
            }
        })
            .then(function (res) {
            // Need to check if res is defined.
            if (res) {
                return res.data;
            }
        });
        return Promise.resolve(ngPromise);
    };
    ApiService.$inject = [
        '$http',
        'responseHandlers'
    ];
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var ModalService = (function () {
    function ModalService($timeout) {
        this.$timeout = $timeout;
        this.stack = [];
    }
    //#endregion
    //#region Functions
    ModalService.prototype.show = function (modal) {
        // If the modal is not already in the stack...
        if (!_.find(this.stack, function (element) { return element === modal; })) {
            // If there is already another modal displayed...
            if (this.stack.length > 0) {
                // Set the currently shown modal to the prevModal
                var prevModal = this.stack[this.stack.length - 1];
                modal.previousModal = prevModal;
            }
            // Add the modal to the stack.
            this.stack.push(modal);
            // If the modal has a parent modal, hide the parent modal (but do
            // not remove it from the DOM).
            if (modal.previousModal) {
                this.$timeout(function () {
                    modal.previousModal.toggleModalVisibility(false);
                });
            }
        }
        // The modal is already in the stack and just needs to be displayed again.
        this.showModal(modal);
    };
    ModalService.prototype.hide = function (modal) {
        // if it is the last survived modal, then 
        // kill all other modals
        if (modal.closeLast) {
            this.stack = [];
            modal.previousModal = null;
        }
        // Hide the modal.
        this.hideModal(modal);
        // If the modal has a parent modal...
        if (!this.hasPreviousLink(modal)) {
            if (modal.previousModal) {
                var prevModal = modal.previousModal;
                // Now that the modal is closed, show its parent modal.
                this.showModal(prevModal);
                modal.previousModal = null;
            }
            // Remove the modal from the stack.
            _.remove(this.stack, function (element) {
                return element === modal;
            });
        }
    };
    ModalService.prototype.showModal = function (modal) {
        // Add the modal to the DOM and enable its visibility.
        var timeout = ModalService.modalAnimationTimeout;
        // If we have only one modal in stack - show it immediately - first time any modal is opened.
        if (this.stack.length === 1) {
            timeout = 0;
        }
        this.$timeout(function () {
            modal.toggleDomExistence(true);
            modal.toggleModalVisibility(true);
        }, timeout);
    };
    ModalService.prototype.hideModal = function (modal) {
        var hasPreviousLink = this.hasPreviousLink(modal);
        // Disable the modal visibility.
        this.$timeout(function () {
            modal.toggleModalVisibility(false);
        });
        // If a modal has an inner modal, it should not be removed from the DOM
        // so that it preserves any data entered into any form elements.
        //
        // Therefore, if the modal has no inner modal, it can safely be removed
        // from the DOM.
        //
        // Otherwise, if the modal does not have a parent modal and is not
        // specifically set to not be removed from to DOM, it can be removed
        // from the DOM.
        if (!modal.hasInnerModal || (!hasPreviousLink && !modal.doNotRemoveFromDom)) {
            this.$timeout(function () {
                modal.toggleDomExistence(false);
            }, ModalService.modalAnimationTimeout);
        }
    };
    /**
     * Does the modal contain a link to a previous/parent modal?
     */
    ModalService.prototype.hasPreviousLink = function (modal) {
        return _.find(this.stack, function (element) { return element.previousModal === modal; }) !== undefined;
    };
    //#region Properties
    ModalService.modalAnimationTimeout = 650;
    //#endregion
    //#region Constructor
    ModalService.$inject = ['$timeout'];
    return ModalService;
}());
exports.ModalService = ModalService;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
var toastr = __webpack_require__(77);
var angular = __webpack_require__(7);
/**
 * notification service implementation
 */
var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.success = function (message, title, optionsOverride) {
        if (title === void 0) { title = ''; }
        if (optionsOverride === void 0) { optionsOverride = {}; }
        var opts = {};
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;
        toastr.success(message, title, mergedConfig);
    };
    NotificationService.prototype.error = function (message, title, optionsOverride) {
        if (title === void 0) { title = ''; }
        if (optionsOverride === void 0) { optionsOverride = {}; }
        var opts = { timeOut: 0 };
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;
        toastr.error(message, title, mergedConfig);
    };
    NotificationService.prototype.info = function (message, title, optionsOverride) {
        if (title === void 0) { title = ''; }
        if (optionsOverride === void 0) { optionsOverride = {}; }
        var opts = {};
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;
        toastr.info(message, title, mergedConfig);
    };
    NotificationService.prototype.warn = function (message, title, optionsOverride) {
        var opts = {};
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;
        toastr.warning(message, title, mergedConfig);
    };
    NotificationService.options = {
        tapToDismiss: false,
        closeButton: true,
        toastClass: 'toast',
        containerId: 'toast-container',
        debug: false,
        showMethod: 'fadeIn',
        showDuration: 300,
        showEasing: 'swing',
        onShown: undefined,
        hideMethod: 'fadeOut',
        hideDuration: 300,
        hideEasing: 'swing',
        onHidden: undefined,
        extendedTimeOut: 1000,
        positionClass: 'toast-top-right',
        timeOut: 3000,
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        target: 'body',
        closeHtml: '<button>&times;</button>',
        newestOnTop: true
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A service responsible for indicating processing of operations on pages (not refreshing data).
 *
 * @returns {Object}
 */
// ReSharper disable once InconsistentNaming
var ProcessingService = (function () {
    function ProcessingService() {
        /**
         * Whether or not to show the text of the overlay.
         */
        this.show = false;
    }
    Object.defineProperty(ProcessingService.prototype, "showOverlay", {
        get: function () {
            return this.show;
        },
        set: function (val) {
            this.show = val;
            if (!this.show) {
                this.text = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProcessingService.prototype.showOverlayIndicator = function (message) {
        this.text = message;
        this.showOverlay = true;
    };
    ProcessingService.prototype.hideOverlayIndicator = function () {
        this.showOverlay = false;
    };
    // NOTE: These are dirty but they are the most efficient way to show or hide
    // the loading indicator without relying on a digest.
    ProcessingService.prototype.showPartialLoadingIndicator = function (id) {
        $('#' + id).removeClass('hidden');
    };
    ProcessingService.prototype.hidePartialLoadingIndicator = function (id) {
        $('#' + id).addClass('hidden');
    };
    return ProcessingService;
}());
exports.ProcessingService = ProcessingService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(7);
var ServerValidationService = (function () {
    function ServerValidationService() {
        this.errs = {};
    }
    Object.defineProperty(ServerValidationService.prototype, "errors", {
        get: function () {
            return this.errs;
        },
        enumerable: true,
        configurable: true
    });
    ServerValidationService.prototype.clearErrorsForKey = function (formName, key) {
        if (this.hasErrorsForKey(formName, key)) {
            delete this.errs[formName][key];
        }
    };
    ServerValidationService.prototype.clearAllFormErrors = function (formName) {
        this.errs[formName] = {};
    };
    ServerValidationService.prototype.hasErrorsForKey = function (formName, key) {
        return !!this.errs[formName]
            && !!this.errs[formName][key]
            && !!this.errs[formName][key].length;
    };
    ServerValidationService.prototype.hasErrorsForForm = function (formName) {
        return !!this.errs[formName]
            && !!Object.keys(this.errs[formName]).length;
    };
    ServerValidationService.prototype.getErrorsForKey = function (formName, key) {
        if (this.hasErrorsForKey(formName, key)) {
            return this.errs[formName][key];
        }
        return [];
    };
    ServerValidationService.prototype.getAllFormErrors = function (formName) {
        if (this.hasErrorsForForm(formName)) {
            var allErrs = [];
            var self = this;
            Object.keys(this.errs[formName]).forEach(function (key) {
                if (angular.isArray(self.errs[formName][key])) {
                    for (var i = 0; i < self.errs[formName][key].length; i++) {
                        allErrs.push(self.errs[formName][key][i]);
                    }
                }
            });
            return allErrs;
        }
        return [];
    };
    ServerValidationService.prototype.validate = function (formName, respData) {
        this.clearAllFormErrors(formName);
        if (respData.hasServerValidationErrors === true) {
            this.errs[formName] = respData.errors;
        }
    };
    return ServerValidationService;
}());
exports.ServerValidationService = ServerValidationService;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.services.ServiceRequestProcessor
* @classdesc Handles loading indication in requests automatically.
*/
var ServiceRequestProcessor = (function () {
    function ServiceRequestProcessor($timeout, request, handleCallback) {
        this.$timeout = $timeout;
        this.request = request;
        this.handleCallback = handleCallback;
    }
    ServiceRequestProcessor.prototype.process = function () {
        var _this = this;
        if (this.isRequestRunning) {
            return;
        }
        this.isRequestRunning = true;
        this.request().then(function (res) {
            _this.handleCallback(res);
        })
            .catch(function () {
            _this.$timeout(function () {
                _this.isErrorOccured = true;
            });
        })
            .then(function () {
            _this.$timeout(function () {
                _this.isRequestRunning = false;
            });
        });
    };
    return ServiceRequestProcessor;
}());
exports.ServiceRequestProcessor = ServiceRequestProcessor;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
/**
 * @namespace toolkit.services
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var uiGridRequest_1 = __webpack_require__(16);
// TODO: Update comments.
var UiGridService = (function () {
    function UiGridService($timeout) {
        this.$timeout = $timeout;
        this.selectAllItems = function (controller) {
            controller.gridApi.selection.selectAllRows();
            var filterRequest = {
                page: 1,
                // max int to make sure we get all possible items.
                pageSize: 2147483647
            };
            // Get all the items that can appear on the grid and add them to the list of selected items..
            controller.getItems({ request: filterRequest })
                .then(function (response) {
                _.forEach(_.map(response.data, !controller.itemIdField ? 'id' : controller.itemIdField), function (itemId) {
                    if (!_.find(controller.selectedItemIds, function (id) {
                        return id === itemId;
                    })) {
                        controller.selectedItemIds.push(itemId);
                    }
                });
            });
        };
        this.unselectAllItems = function (controller) {
            controller.gridApi.selection.clearSelectedRows();
            controller.selectedItemIds = [];
        };
    }
    //#endregion
    //#region Functions
    UiGridService.prototype.initScrollPagedGridOptions = function (controller, columnDefs) {
        var _this = this;
        var scrollGridOptions = {
            columnDefs: columnDefs,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            onRegisterApi: function (gridApi) {
                _this.handleUiGridCallbacks(gridApi, controller, function (ctrl, isScrollPaging) { return _this.doSearch(ctrl, isScrollPaging); });
            },
            rowTemplate: UiGridService.rowTemplate,
            enablePaginationControls: false,
            enablePagination: false
        };
        Object.assign(scrollGridOptions, UiGridService.commonGridOptions);
        return scrollGridOptions;
    };
    UiGridService.prototype.initPagedGridOptions = function (controller, columnDefs) {
        var _this = this;
        var pagedGridOptions = {
            useExternalPagination: true,
            columnDefs: columnDefs,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            enableRowHeaderSelection: false,
            onRegisterApi: function (gridApi) {
                controller.gridApi = gridApi;
                _this.handleUiGridCallbacks(gridApi, controller, function (ctrl, isScrollPaging) { return _this.doSearch(ctrl, isScrollPaging); });
            },
            rowTemplate: UiGridService.rowTemplate,
            enablePaginationControls: true,
            enablePagination: true,
            paginationPageSizes: [10, 20]
        };
        Object.assign(pagedGridOptions, UiGridService.commonGridOptions);
        return pagedGridOptions;
    };
    UiGridService.prototype.initFilterRequest = function (gridOptions) {
        var request = new uiGridRequest_1.UiGridRequest();
        request.pageSize = gridOptions.paginationPageSize;
        request.page = 1;
        request.sort = null;
        request.filters = this.constructFilters(gridOptions.columnDefs);
        return request;
    };
    UiGridService.prototype.doSearch = function (controller, isScrollPaging) {
        var _this = this;
        if (isScrollPaging === void 0) { isScrollPaging = false; }
        if (controller.isRequestRunning) {
            return;
        }
        if (isScrollPaging && controller.allDataFetched) {
            return;
        }
        controller.isRequestError = false;
        controller.allDataFetched = false;
        controller.isRequestRunning = true;
        // If selected item is not emptied out manager grids will allow users to
        // take actions on items that do not appear to be currently selected.
        // ie: If the user selects an item and then goes to a different page
        // they can hit the delete button but not see the item they are deleting.
        controller.selectedItem = null;
        return controller.getItems({ request: controller.filterRequest })
            .then(function (response) {
            var idField = !controller.itemIdField ? 'id' : controller.itemIdField;
            if (isScrollPaging) {
                if (response.length === 0) {
                    controller.allDataFetched = true;
                }
                controller.gridOptions.data = controller.gridOptions.data.concat(response);
            }
            else {
                controller.gridOptions.data = response.data;
                controller.gridOptions.totalItems = response.totalItems;
            }
            // Set the item the user clicked as selected in both the grid and the backing model.
            if (controller.selectedItem || (controller.selectedItemIds && controller.selectedItemIds.length > 0)) {
                controller.gridApi.grid.modifyRows(controller.gridOptions.data);
                var selectedItemIds = new Array();
                if (controller.gridOptions.multiSelect) {
                    selectedItemIds = _.clone(controller.selectedItemIds);
                }
                else {
                    if (!controller.selectedItem || !controller.selectedItem[idField]) {
                        throw new Error("Unable to selected initial item. Either the item does not exist on the controller\n                            or the id field (" + idField + ") does not exist on the item.");
                    }
                    selectedItemIds.push(controller.selectedItem[idField]);
                }
                var indexes = new Array();
                // find the indexes of the selected items.
                _.forEach(selectedItemIds, function (selectedItemId) {
                    var index = _.findIndex(controller.gridOptions.data, function (datum) {
                        return selectedItemId === datum[idField];
                    });
                    if (index >= 0) {
                        indexes.push(index);
                    }
                });
                // Select the items by the indexes.
                _.forEach(indexes, function (index) {
                    controller.gridApi.selection.selectRow(controller.gridOptions.data[index]);
                });
            }
        })
            .catch(function () {
            controller.isRequestError = true;
        })
            .then(function () {
            _this.$timeout(function () {
                controller.isRequestRunning = false;
                _this.resizeGrid(controller);
            });
        });
    };
    UiGridService.prototype.destroyGrid = function (controller) {
        controller.gridApi.core.clearAllFilters();
        controller.gridOptions = null;
        controller.filterRequest = null;
        controller.gridApi = null;
        controller.gridColumns = null;
    };
    UiGridService.prototype.handleUiGridCallbacks = function (gridApi, controller, callback) {
        var _this = this;
        gridApi.core.on.sortChanged(controller.$scope, function (grid, sortColumns) {
            controller.filterRequest.page = 1;
            if (sortColumns.length === 0) {
                controller.filterRequest.sort = null;
            }
            else {
                controller.filterRequest.sort = {
                    direction: sortColumns[0].sort.direction,
                    memberName: sortColumns[0].field
                };
            }
            _this.gridFilterChanged(controller, false, function (ctrl, isScrollPaging) { return callback(ctrl, isScrollPaging); });
        });
        gridApi.pagination.on.paginationChanged(controller.$scope, function (newPage, pageSize) {
            controller.filterRequest.page = newPage;
            controller.filterRequest.pageSize = pageSize;
            _this.gridFilterChanged(controller, false, function (ctrl, isScrollPaging) { return callback(ctrl, isScrollPaging); });
        });
        if (controller.gridOptions.enablePagination === false) {
            gridApi.core.on.scrollEnd(controller.$scope, function (e) {
                var viewPort = $('.ui-grid-viewport')[0];
                var fullHeight = viewPort.scrollHeight - viewPort.offsetHeight - 1;
                if (viewPort.scrollTop === fullHeight) {
                    controller.filterRequest.page++;
                    _this.gridFilterChanged(controller, true, function (ctrl, isScrollPaging) { return callback(ctrl, isScrollPaging); });
                }
            });
        }
        gridApi.core.on.filterChanged(controller.$scope, function () {
            controller.filterRequest.page = 1;
            controller.filterRequest.filters = _this.constructFilters(gridApi.grid.columns);
            gridApi.pagination.seek(1);
            _this.gridFilterChanged(controller, false, function (ctrl, isScrollPaging) { return callback(ctrl, isScrollPaging); });
        });
        gridApi.selection.on.rowSelectionChanged(controller.$scope, function (row) {
            var idField = !controller.itemIdField ? 'id' : controller.itemIdField;
            // Add/remove the item from the list of selected items depending on if the item was selected or deselected.
            if (row && row.entity) {
                if (controller.gridOptions.multiSelect) {
                    if (row.isSelected) {
                        if (!_.some(controller.selectedItemIds, function (selectedItemId) {
                            return selectedItemId === row.entity[idField];
                        })) {
                            controller.selectedItemIds.push(row.entity[idField]);
                        }
                    }
                    else {
                        _.remove(controller.selectedItemIds, function (selectedItemId) {
                            return selectedItemId === row.entity[idField];
                        });
                    }
                }
                else {
                    controller.selectedItem = row.entity;
                }
            }
        });
    };
    UiGridService.prototype.constructFilters = function (columns) {
        var filters = [];
        columns.forEach(function (column) {
            if (_.has(column, 'filter.term') && _.has(column, 'filter.condition')) {
                if (column.filter.term !== null && column.filter.term !== undefined) {
                    filters.push({
                        memberName: column.name,
                        value: column.filter.term,
                        condition: column.filter.condition
                    });
                }
            }
        });
        return filters;
    };
    UiGridService.prototype.gridFilterChanged = function (controller, isScrollPaging, callback) {
        if (controller.filterChangedTimeout) {
            this.$timeout.cancel(controller.filterChangedTimeout);
        }
        controller.filterChangedTimeout = this.$timeout(function () {
            callback(controller, isScrollPaging);
        }, 400);
    };
    /**
     * Resize the grid according to the number of rows retrieved from the data
     * source. If the number of rows is less than the page size, resize the grid
     * to fit that number of rows.
     *
     * If there are no items to display, resize the grid to allow for the display
     * of an error message inside the grid.
     *
     * @param  {BaseLookupController<T>} controller - The controller.
     */
    UiGridService.prototype.resizeGrid = function (controller) {
        var noItemsElement = $(controller.gridApi.grid.element).find('.noItemsInfoContainer');
        var headerHeight = $(controller.gridApi.grid.element).find('.ui-grid-top-panel').outerHeight();
        var footerHeight = $(controller.gridApi.grid.element).find('.ui-grid-pager-panel').outerHeight();
        var noItemsFoundHeight = noItemsElement.outerHeight();
        var rowsToShow = controller.gridOptions.paginationPageSize;
        if (controller.gridOptions.data && controller.gridOptions.data.length < rowsToShow) {
            rowsToShow = controller.gridOptions.data.length;
        }
        var viewPortHeight = rowsToShow * controller.gridOptions.rowHeight + 1;
        if (rowsToShow === 0) {
            viewPortHeight += noItemsFoundHeight;
            noItemsElement.css('margin-top', headerHeight + 2 + "px");
        }
        $(controller.gridApi.grid.element).height(viewPortHeight + headerHeight + footerHeight);
    };
    //#region Static Properties
    UiGridService.commonGridOptions = {
        data: [],
        useExternalSorting: true,
        enableFiltering: true,
        useExternalFiltering: true,
        enableColumnMenus: false,
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        multiSelect: false,
        noUnselect: false,
        rowHeight: 45,
        paginationPageSize: 10,
        minRowsToShow: 10
    };
    UiGridService.rowTemplate = "<div\n        ng-dblclick=\"grid.appScope.rowDblClick(row)\"\n        ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\"\n        class=\"ui-grid-cell\"\n        ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\"\n        ui-grid-cell>\n    </div>";
    //#endregion
    //#region Constructor
    UiGridService.$inject = ['$timeout'];
    return UiGridService;
}());
exports.UiGridService = UiGridService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var persistentMessage_1 = __webpack_require__(17);
var PersistentNotificationService = (function () {
    function PersistentNotificationService() {
    }
    PersistentNotificationService.prototype.items = function () {
        return PersistentNotificationService.items;
    };
    PersistentNotificationService.prototype.warn = function (message) {
        this.addMesage(message, 'warning');
    };
    PersistentNotificationService.prototype.error = function (message) {
        this.addMesage(message, 'error');
    };
    PersistentNotificationService.prototype.dismiss = function (item) {
        _.remove(PersistentNotificationService.items, function (itm) { return itm === item; });
    };
    PersistentNotificationService.prototype.addMesage = function (message, type) {
        var item = new persistentMessage_1.PersistentMessage();
        item.message = message;
        item.type = type;
        PersistentNotificationService.items.push(item);
    };
    PersistentNotificationService.items = new Array();
    return PersistentNotificationService;
}());
exports.PersistentNotificationService = PersistentNotificationService;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var focusElement_1 = __webpack_require__(84);
exports.FocusElement = focusElement_1.FocusElement;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.directives
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class toolkit.directives.FocusElement
* @classdesc Makes a focus on element while loaded.
*/
var FocusElement = (function () {
    function FocusElement($timeout) {
        this.$timeout = $timeout;
        this.restrict = 'A';
    }
    /**
     * creates a factory for directive
     */
    FocusElement.factory = function () {
        var directive = function ($timeout) { return new FocusElement($timeout); };
        directive.$inject = ['$timeout'];
        return directive;
    };
    /**
     * link for directive.
     *
     * @param scope
     * @param element
     * @param attrs
     * @param ctrl
     */
    FocusElement.prototype.link = function (scope, element, attrs) {
        this.$timeout(function () {
            element[0].focus();
        });
    };
    return FocusElement;
}());
exports.FocusElement = FocusElement;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var activator_1 = __webpack_require__(86);
exports.Activator = activator_1.Activator;
var arrayHelpers_1 = __webpack_require__(87);
exports.ArrayHelper = arrayHelpers_1.ArrayHelper;
var objectCopier_1 = __webpack_require__(88);
exports.ObjectCopier = objectCopier_1.ObjectCopier;
var serviceRequestProcessor_1 = __webpack_require__(89);
exports.ServiceRequestProcessor = serviceRequestProcessor_1.ServiceRequestProcessor;
var validationProcessor_1 = __webpack_require__(90);
exports.ValidationProcessor = validationProcessor_1.ValidationProcessor;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class toolkit.utils.Activator
 * @classdesc Creates instances of provided class types.
 */
var Activator = (function () {
    function Activator() {
    }
    /**
     * creates instance of some type.
     *
     * @param type
     */
    Activator.createInstance = function (type) {
        return new type();
    };
    return Activator;
}());
exports.Activator = Activator;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class toolkit.utils.ArrayHelper
 * @classdesc Methods for helping deal with arrays.
 */
var ArrayHelper = (function () {
    function ArrayHelper() {
    }
    /**
     * Create an array of the given length. The array will start at 1 instead of 0
     *
     * @param {number} length
     */
    ArrayHelper.createArray = function (length) {
        if (isNaN(length) || length <= 0) {
            throw new Error("Unable to create an array with the length of " + length);
        }
        var array = new Array();
        for (var x = 1; x <= length; x++) {
            array.push(x);
        }
        return array;
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @namespace toolkit.utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class toolkit.utils.ObjectCopier
 * @classdesc Copies object properties from one object to another.
 */
var ObjectCopier = (function () {
    function ObjectCopier() {
    }
    /**
     * copies object properties from one object to another.
     */
    ObjectCopier.copyObject = function (copyFrom, copyTo) {
        for (var key in copyFrom) {
            if (copyFrom.hasOwnProperty(key)) {
                try {
                    copyTo[key] = copyFrom[key];
                }
                catch (err) {
                    // could be getter
                }
            }
        }
        return copyTo;
    };
    return ObjectCopier;
}());
exports.ObjectCopier = ObjectCopier;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * the service request processor.
 */
var ServiceRequestProcessor = (function () {
    function ServiceRequestProcessor($timeout, request, handleCallback) {
        this.$timeout = $timeout;
        this.request = request;
        this.handleCallback = handleCallback;
    }
    ServiceRequestProcessor.prototype.process = function () {
        var _this = this;
        if (this.isRequestRunning) {
            return;
        }
        this.isRequestRunning = true;
        this.request().then(function (res) {
            _this.handleCallback(res);
        })
            .catch(function () {
            _this.$timeout(function () {
                _this.isErrorOccured = true;
            });
        })
            .then(function () {
            _this.$timeout(function () {
                _this.isRequestRunning = false;
            });
        });
    };
    return ServiceRequestProcessor;
}());
exports.ServiceRequestProcessor = ServiceRequestProcessor;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * validation processing tasks.
 */
var ValidationProcessor = (function () {
    function ValidationProcessor() {
    }
    /**
     * handles the validation server response.
     */
    ValidationProcessor.processValidationServerResponse = function (responseData, errorHandler) {
        if (!this.isValidationResultResponse(responseData)) {
            return;
        }
        for (var fieldName in responseData.errors) {
            if (responseData.errors.hasOwnProperty(fieldName)) {
                var errorMessages = responseData.errors[fieldName];
                for (var i = 0; i < errorMessages.length; i++) {
                    errorHandler(fieldName, errorMessages[i]);
                }
            }
        }
    };
    /**
     * checks if response is validationResult
     */
    ValidationProcessor.isValidationResultResponse = function (data) {
        if (data && data.hasServerValidationErrors === true) {
            return true;
        }
        return false;
    };
    return ValidationProcessor;
}());
exports.ValidationProcessor = ValidationProcessor;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ez-web-toolkit.js.map