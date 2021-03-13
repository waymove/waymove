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
var cas;
(function (cas) {
    cas.VERSION = '1.70.0';
    cas.DB_VERSION = '1.68.8.0';
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    kr3mCas.VERSION = "1.8.3.17";
})(kr3mCas || (kr3mCas = {}));
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function")
            throw new TypeError("Function.prototype.bind could not be set on legacy browser");
        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;
        var fNOP = function () { };
        var fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null)
            throw new TypeError('"this" is null or not defined');
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0)
            return -1;
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity)
            n = 0;
        if (n >= len)
            return -1;
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in O && O[k] === searchElement)
                return k;
            k++;
        }
        return -1;
    };
}
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {
            if (this == null)
                throw new TypeError('"this" is null or not defined');
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0)
                return false;
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }
            while (k < len) {
                if (sameValueZero(o[k], searchElement))
                    return true;
                k++;
            }
            return false;
        }
    });
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        var T, k;
        if (this == null)
            throw new TypeError(" this is null or not defined");
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function")
            throw new TypeError(callback + " is not a function");
        if (arguments.length > 1)
            T = thisArg;
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
if (!Array.prototype["find"]) {
    Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
            if (this == null)
                throw new TypeError("this is null or not defined");
            var o = Object(this);
            var len = o.length >>> 0;
            if (typeof predicate !== "function")
                throw new TypeError("predicate must be a function");
            var thisArg = arguments[1];
            var k = 0;
            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o))
                    return kValue;
                k++;
            }
            return undefined;
        }
    });
}
if (!Array.prototype["findIndex"]) {
    Object.defineProperty(Array.prototype, "findIndex", {
        value: function (predicate) {
            if (this == null)
                throw new TypeError("this is null or not defined");
            var o = Object(this);
            var len = o.length >>> 0;
            if (typeof predicate !== "function")
                throw new TypeError("predicate must be a function");
            var thisArg = arguments[1];
            var k = 0;
            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o))
                    return k;
                ++k;
            }
            return -1;
        }
    });
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun) {
        'use strict';
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisArg, val, i, t))
                    res.push(val);
            }
        }
        return res;
    };
}
if (typeof Object.create != 'function') {
    Object.create = (function () {
        var Temp = function () { };
        return function (prototype) {
            if (arguments.length > 1)
                throw Error('Second argument not supported');
            if (typeof prototype != 'object')
                throw TypeError('Argument must be an object');
            Temp.prototype = prototype;
            var result = new Temp();
            Temp.prototype = null;
            return result;
        };
    })();
}
if (!Object.keys) {
    Object.keys = (function () {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
        var dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ];
        var dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null))
                throw new TypeError('Object.keys called on non-object');
            var result = [];
            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop))
                    result.push(prop);
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; ++i) {
                    if (hasOwnProperty.call(obj, dontEnums[i]))
                        result.push(dontEnums[i]);
                }
            }
            return result;
        };
    }());
}
if (typeof Element !== "undefined" && !("remove" in Element.prototype)) {
    Element.prototype["remove"] = (function () {
        if (this.parentNode)
            this.parentNode.removeChild(this);
    });
}
var kr3mCas;
(function (kr3mCas) {
    kr3mCas.ANDROID = "ANDROID";
    kr3mCas.IOS = "IOS";
    kr3mCas.MAX_TAB_INDEX = 0x7fff;
    kr3mCas.PASSWORD_SECURITY_NONE = 0;
    kr3mCas.PASSWORD_SECURITY_LOW = 1;
    kr3mCas.PASSWORD_SECURITY_MEDIUM = 2;
    kr3mCas.PASSWORD_SECURITY_HIGH = 3;
    kr3mCas.FORMAT_TIME = "FORMAT_TIME";
    kr3mCas.FORMAT_DATE = "FORMAT_DATE";
    kr3mCas.FORMAT_DATETIME = "FORMAT_DATETIME";
    kr3mCas.SUCCESS = "SUCCESS";
    kr3mCas.ERROR_CANCELLED = "ERROR_CANCELLED";
    kr3mCas.ERROR_DATABASE = "ERROR_DATABASE";
    kr3mCas.ERROR_DENIED = "ERROR_DENIED";
    kr3mCas.ERROR_EMPTY_DATA = "ERROR_EMPTY_DATA";
    kr3mCas.ERROR_EXPIRED = "ERROR_EXPIRED";
    kr3mCas.ERROR_EXTERNAL = "ERROR_EXTERNAL";
    kr3mCas.ERROR_FILE = "ERROR_FILE";
    kr3mCas.ERROR_INPUT = "ERROR_INPUT";
    kr3mCas.ERROR_INTERNAL = "ERROR_INTERNAL";
    kr3mCas.ERROR_FLOOD = "ERROR_FLOOD";
    kr3mCas.ERROR_NETWORK = "ERROR_NETWORK";
    kr3mCas.ERROR_NOT_SUPPORTED = "ERROR_NOT_SUPPORTED";
    kr3mCas.ERROR_NYI = "ERROR_NYI";
    kr3mCas.ERROR_PARAMS = "ERROR_PARAMS";
    kr3mCas.ERROR_PARTIAL = "ERROR_PARTIAL";
    kr3mCas.ERROR_PENDING = "ERROR_PENDING";
    kr3mCas.ERROR_PERMISSION = "ERROR_PERMISSION";
    kr3mCas.ERROR_REQUIRED = "ERROR_REQUIRED";
    kr3mCas.ERROR_TAKEN = "ERROR_TAKEN";
    kr3mCas.ERROR_TIMEOUT = "ERROR_TIMEOUT";
    kr3mCas.ERROR_UPLOAD_COUNT = "ERROR_UPLOAD_COUNT";
    kr3mCas.ERROR_UPLOAD_SIZE = "ERROR_UPLOAD_SIZE";
    kr3mCas.ERROR_UPLOAD_DIMENSIONS = "ERROR_UPLOAD_DIMENSIONS";
    kr3mCas.ERROR_UPLOAD_TYPE = "ERROR_UPLOAD_TYPE";
    kr3mCas.ERROR_VERSIONS = "ERROR_VERSIONS";
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    cas.TTL_SESSION = 7 * 24 * 60 * 60;
    cas.TTL_JUMPPAD_BLOBS = 60;
    cas.TTL_HIGHSCORES_CACHE = 60;
    cas.TTL_STATS = 3 * 24 * 60 * 60 * 1000;
    cas.EVENT_POLLING_INTERVAL_IDLE = 120;
    cas.EVENT_POLLING_INTERVAL_BUSY = 2;
    cas.EVENT_TTL = 3 * cas.EVENT_POLLING_INTERVAL_IDLE;
    cas.BASE_URL = "./app/server.php?name=";
    // cas.BASE_URL = "https://cas-live.das-onlinespiel.de/";
    cas.JUMPPAD_URL = cas.BASE_URL + "jumppad.html";
    cas.PASSWORD_SECURITY_LEVEL = kr3mCas.PASSWORD_SECURITY_MEDIUM;
    cas.LANGUAGES = ["en", "de", "at", "it", "fr", "ru", "es"];
    cas.FALLBACK_COUNTRY = "DE";
    cas.DEFAULT_USER_IMAGE_URL = "images/defaultUserImage.png";
    cas.USER_IMAGE_MAX_SIZE = 200000;
    cas.USER_IMAGE_WIDTH = 200;
    cas.USER_IMAGE_HEIGHT = 200;
    cas.MAX_LENGTH_CUSTOM_FIELD = 30;
    cas.MAX_LENGTH_EMAIL = 100;
    cas.MAX_LENGTH_PASSWORD = 50;
    cas.MAX_LENGTH_URL = 999;
    cas.MAX_LENGTH_USERNAME = 30;
    cas.LOGIN_ACTION_REGISTER = "REGISTER";
    cas.LOGIN_ACTION_LOGIN = "LOGIN";
    cas.LOGIN_ACTION_CONNECT = "CONNECT";
    cas.LOGIN_ACTIONS = [
        cas.LOGIN_ACTION_REGISTER,
        cas.LOGIN_ACTION_LOGIN,
        cas.LOGIN_ACTION_CONNECT
    ];
    cas.CONNECT_WARNING_TIMEOUT = 1;
    cas.CASH_ID_EUR = "EUR";
    cas.CASH_IDS = [
        cas.CASH_ID_EUR
    ];
    cas.CURRENCY_GOLD = "GOLD";
    cas.CURRENCIES = [
        cas.CURRENCY_GOLD
    ];
    cas.HIGHSCORE_PERIOD_ALLTIME = "ALLTIME";
    cas.HIGHSCORE_PERIOD_WEEKLY = "WEEKLY";
    cas.HIGHSCORE_PERIODS = [
        cas.HIGHSCORE_PERIOD_ALLTIME,
        cas.HIGHSCORE_PERIOD_WEEKLY
    ];
    cas.HIGHSCORE_CACHES = 2;
    cas.FEATURE_CHANGE_EMAIL = "changeEmail";
    cas.FEATURE_CHANGE_PASSWORD = "changePassword";
    cas.FEATURE_CUSTOM_IMAGE = "customImage";
    cas.FEATURE_GRAPH_ACTION = "graphAction";
    cas.FEATURE_NOTIFY = "notify";
    cas.FEATURE_PAYMENT = "payment";
    cas.FEATURE_REQUEST = "request";
    cas.FEATURE_SHARE = "share";
    cas.ALL_FEATURES = [
        cas.FEATURE_CHANGE_EMAIL,
        cas.FEATURE_CHANGE_PASSWORD,
        cas.FEATURE_CUSTOM_IMAGE,
        cas.FEATURE_GRAPH_ACTION,
        cas.FEATURE_NOTIFY,
        cas.FEATURE_PAYMENT,
        cas.FEATURE_REQUEST,
        cas.FEATURE_SHARE
    ];
    cas.FIELD_BIGTEXT = "bigText";
    cas.FIELD_BIRTHDAY = "birthday";
    cas.FIELD_BOOLEAN = "boolean";
    cas.FIELD_DATE = "date";
    cas.FIELD_DATE_TIME = "dateTime";
    cas.FIELD_EMAIL = "email";
    cas.FIELD_FLUFF = "fluff";
    cas.FIELD_PASSWORD = "password";
    cas.FIELD_SELECTMANY = "selectMany";
    cas.FIELD_SELECTONE = "selectOne";
    cas.FIELD_TERMS_AND_CONDITIONS = "termsAndConditions";
    cas.FIELD_TEXT = "text";
    cas.FIELD_TIME = "time";
    cas.FIELD_TITLE = "title";
    cas.FIELD_URL = "url";
    cas.FIELD_USERNAME = "username";
    cas.EVENT_CONNECT = "CONNECT";
    cas.EVENT_CONNECT_FAILED = "CONNECT_FAILED";
    cas.EVENT_ERROR = "ERROR";
    cas.EVENT_INGAME_POPUP = "INGAME_POPUP";
    cas.EVENT_LOGIN = "LOGIN";
    cas.EVENT_LOGIN_FAILED = "LOGIN_FAILED";
    cas.EVENT_LOGOUT = "LOGOUT";
    cas.EVENT_ONLINE = "ONLINE";
    cas.EVENT_OFFLINE = "OFFLINE";
    cas.EVENT_REGISTER = "REGISTER";
    cas.EVENT_REGISTER_FAILED = "REGISTER_FAILED";
    cas.EVENT_REQUEST = "REQUEST";
    cas.EVENT_WELCOME_CLOSED = "WELCOME_CLOSED";
    cas.POPUP_EMAIL_REMINDER = "POPUP_EMAIL_REMINDER";
    cas.POPUP_EMAIL_VALIDATED = "POPUP_EMAIL_VALIDATED";
    cas.POPUP_RAFFLE_EMAIL_VALIDATED = "POPUP_RAFFLE_EMAIL_VALIDATED";
    cas.POPUP_RESET_PASSWORD = "POPUP_RESET_PASSWORD";
    cas.POPUP_RESET_PASSWORD_RESULT = "POPUP_RESET_PASSWORD_RESULT";
    cas.POPUP_WELCOME = "POPUP_WELCOME";
    cas.POPUPS = [
        cas.POPUP_EMAIL_REMINDER,
        cas.POPUP_EMAIL_VALIDATED,
        cas.POPUP_RAFFLE_EMAIL_VALIDATED,
        cas.POPUP_RESET_PASSWORD,
        cas.POPUP_RESET_PASSWORD_RESULT,
        cas.POPUP_WELCOME
    ];
    cas.MAIL_CATEGORY_CLAN_INVITATION = "CLAN_INVITATION";
    cas.MAIL_CATEGORY_REQUEST = "REQUEST";
    cas.MAIL_ANSWER_ACCEPT = "ACCEPT";
    cas.MAIL_ANSWER_DELETE = "DELETE";
    cas.MAIL_ANSWERS = [
        cas.MAIL_ANSWER_ACCEPT,
        cas.MAIL_ANSWER_DELETE
    ];
    cas.CLAN_PRIV_DISBAND = "CLAN_PRIV_DISBAND";
    cas.CLAN_PRIV_INVITE = "CLAN_PRIV_INVITE";
    cas.CLAN_PRIV_KICK = "CLAN_PRIV_KICK";
    cas.CLAN_PRIVILEGES = [
        cas.CLAN_PRIV_INVITE,
        cas.CLAN_PRIV_KICK,
        cas.CLAN_PRIV_DISBAND
    ];
    cas.ERROR_BLACKLISTED = "ERROR_BLACKLISTED";
    cas.ERROR_CURRENCY = "ERROR_CURRENCY";
    cas.ERROR_EMAIL_BLOCKED = "ERROR_EMAIL_BLOCKED";
    cas.ERROR_GAME_HAS_USERS = "ERROR_GAME_HAS_USERS";
    cas.ERROR_INIT_FAILED = "ERROR_INIT_FAILED";
    cas.ERROR_INVALID_URL = "ERROR_INVALID_URL";
    cas.ERROR_IS_MEMBER = "ERROR_IS_MEMBER";
    cas.ERROR_LIMIT = "ERROR_LIMIT";
    cas.ERROR_LOCAL_STORAGE = "ERROR_LOCAL_STORAGE";
    cas.ERROR_LOGGED_IN = "ERROR_LOGGED_IN";
    cas.ERROR_LOGIN_FAILED = "ERROR_LOGIN_FAILED";
    cas.ERROR_RAFFLE_HAS_PARTICIPANTS = "ERROR_RAFFLE_HAS_PARTICIPANTS";
    cas.STATUS_BACK = "STATUS_BACK";
    cas.STATUS_LOGOUT = "STATUS_LOGOUT";
    cas.STATUS_RECOVER_PASSWORD = "STATUS_RECOVER_PASSWORD";
    cas.STATUS_RESEND_VALIDATION = "STATUS_RESEND_VALIDATION";
    cas.STATUS_SHOW_ACCOUNT = "STATUS_SHOW_ACCOUNT";
    cas.STATUS_SHOW_REQUEST = "STATUS_SHOW_REQUEST";
    cas.STATUS_SHOW_WALLET = "STATUS_SHOW_WALLET";
    cas.TOKEN_DOI = "DOI";
    cas.TOKEN_RESET_PASSWORD = "RESET_PASSWORD";
    cas.TOKEN_VALIDATE_EMAIL = "VALIDATE_EMAIL";
    cas.TOKEN_VALIDATE_RAFFLE_EMAIL = "VALIDATE_RAFFLE_EMAIL";
    cas.TOKEN_TYPES = [
        cas.TOKEN_DOI,
        cas.TOKEN_RESET_PASSWORD,
        cas.TOKEN_VALIDATE_EMAIL,
        cas.TOKEN_VALIDATE_RAFFLE_EMAIL
    ];
    cas.DEFAULT_REQUEST_IMAGE_URL = "images/defaultRequestImage.png";
    cas.REQUEST_ANSWER_ACCEPTED = "ACCEPTED";
    cas.REQUEST_ANSWER_DECLINED = "DECLINED";
    cas.REQUEST_ANSWERS = ["ACCEPTED", "DECLINED"];
    cas.REQUEST_NEW_TTL = 7 * 24 * 60 * 60;
    cas.REQUEST_OLD_TTL = 2 * 24 * 60 * 60;
    cas.PAYMENT_INCOMPLETE_TTL = 14 * 24 * 60 * 60;
    cas.SHOP_CATEGORY_PRIORITY = ["SPECIAL", "ALL"];
    function addAmounts(oldValue, delta, limit) {
        if (limit > 0 && delta > 0) {
            if (oldValue >= limit)
                return oldValue;
            else
                return Math.min(oldValue + delta, limit);
        }
        else {
            return oldValue + delta;
        }
    }
    cas.addAmounts = addAmounts;
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var anon;
        (function (anon) {
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            anon.Options = Options;
        })(anon = methods.anon || (methods.anon = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var tables;
    (function (tables) {
        var DomainVO = (function () {
            function DomainVO() {
            }
            DomainVO.AZ_DIRECT_IDS_FILE_PATH_MAX_LENGTH = 200;
            DomainVO.AZ_DIRECT_IDS_FILE_PATH_MAX_LENGTH_SECURE = 100;
            DomainVO.BASE_URL_MAX_LENGTH = 200;
            DomainVO.BASE_URL_MAX_LENGTH_SECURE = 100;
            DomainVO.BROADMAIL_KEY_MAX_LENGTH = 32;
            DomainVO.BROADMAIL_KEY_MAX_LENGTH_SECURE = 16;
            DomainVO.BROADMAIL_OPT_IN_ID_MAX_LENGTH = 32;
            DomainVO.BROADMAIL_OPT_IN_ID_MAX_LENGTH_SECURE = 16;
            DomainVO.CSS_URL_MAX_LENGTH = 500;
            DomainVO.CSS_URL_MAX_LENGTH_SECURE = 250;
            DomainVO.CURRENCY_SHOP_ID_MAX_LENGTH = 32;
            DomainVO.CURRENCY_SHOP_ID_MAX_LENGTH_SECURE = 16;
            DomainVO.CUSTOM_USER_FIELDS_MAX_LENGTH = 65535;
            DomainVO.CUSTOM_USER_FIELDS_MAX_LENGTH_SECURE = 32767;
            DomainVO.EMAIL_BLACK_LIST_ID_MAX_LENGTH = 8;
            DomainVO.EMAIL_BLACK_LIST_ID_MAX_LENGTH_SECURE = 4;
            DomainVO.EMAIL_TEMPLATE_PATH_MAX_LENGTH = 200;
            DomainVO.EMAIL_TEMPLATE_PATH_MAX_LENGTH_SECURE = 100;
            DomainVO.EMAIL_WHITE_LIST_ID_MAX_LENGTH = 8;
            DomainVO.EMAIL_WHITE_LIST_ID_MAX_LENGTH_SECURE = 4;
            DomainVO.FACEBOOK_APP_ID_MAX_LENGTH = 50;
            DomainVO.FACEBOOK_APP_ID_MAX_LENGTH_SECURE = 25;
            DomainVO.FACEBOOK_APP_SECRET_MAX_LENGTH = 50;
            DomainVO.FACEBOOK_APP_SECRET_MAX_LENGTH_SECURE = 25;
            DomainVO.FACEBOOK_NAMESPACE_MAX_LENGTH = 50;
            DomainVO.FACEBOOK_NAMESPACE_MAX_LENGTH_SECURE = 25;
            DomainVO.FACEBOOK_PERMISSIONS_MAX_LENGTH = 200;
            DomainVO.FACEBOOK_PERMISSIONS_MAX_LENGTH_SECURE = 100;
            DomainVO.IMAGE_SOURCE_UPLOAD = "UPLOAD";
            DomainVO.IMAGE_SOURCE_LINK = "LINK";
            DomainVO.IMAGE_SOURCE_SELECT = "SELECT";
            DomainVO.IMAGE_SOURCE_RESET = "RESET";
            DomainVO.IMAGE_SOURCE_TRANSFORM = "TRANSFORM";
            DomainVO.IMAGE_SOURCES = ["UPLOAD", "LINK", "SELECT", "RESET", "TRANSFORM"];
            DomainVO.LANGUAGES_URL_MAX_LENGTH = 500;
            DomainVO.LANGUAGES_URL_MAX_LENGTH_SECURE = 250;
            DomainVO.METHOD_ANON = "ANON";
            DomainVO.METHOD_EMAIL = "EMAIL";
            DomainVO.METHOD_FACEBOOK = "FACEBOOK";
            DomainVO.METHOD_SENIORBOOK = "SENIORBOOK";
            DomainVO.METHOD_USERNAME = "USERNAME";
            DomainVO.METHOD_IFB = "IFB";
            DomainVO.METHOD_DOTAT = "DOTAT";
            DomainVO.METHOD_RPO = "RPO";
            DomainVO.METHOD_OKAPI = "OKAPI";
            DomainVO.METHOD_AZDIRECT = "AZDIRECT";
            DomainVO.METHOD_BESTCOMM = "BESTCOMM";
            DomainVO.METHOD_REWARDO = "REWARDO";
            DomainVO.METHOD_ZEIT = "ZEIT";
            DomainVO.METHOD_SUEDDEUTSCHE = "SUEDDEUTSCHE";
            DomainVO.METHOD_ANTENNEBAYERN = "ANTENNEBAYERN";
            DomainVO.METHOD_KRONEHIT = "KRONEHIT";
            DomainVO.METHOD_BLICK = "BLICK";
            DomainVO.METHODS = ["ANON", "EMAIL", "FACEBOOK", "SENIORBOOK", "USERNAME", "IFB", "DOTAT", "RPO", "OKAPI", "AZDIRECT", "BESTCOMM", "REWARDO", "ZEIT", "SUEDDEUTSCHE", "ANTENNEBAYERN", "KRONEHIT", "BLICK"];
            DomainVO.NAME_MAX_LENGTH = 100;
            DomainVO.NAME_MAX_LENGTH_SECURE = 50;
            DomainVO.NEWSLETTER_INTERFACE_KR3M = "KR3M";
            DomainVO.NEWSLETTER_INTERFACE_CONRAD = "CONRAD";
            DomainVO.NEWSLETTER_INTERFACE_BROADMAIL = "BROADMAIL";
            DomainVO.NEWSLETTER_INTERFACE_ARAL = "ARAL";
            DomainVO.NEWSLETTER_INTERFACE_TUI = "TUI";
            DomainVO.NEWSLETTER_INTERFACES = ["KR3M", "CONRAD", "BROADMAIL", "ARAL", "TUI"];
            DomainVO.OKAPI_SERVICE_ID_MAX_LENGTH = 64;
            DomainVO.OKAPI_SERVICE_ID_MAX_LENGTH_SECURE = 32;
            DomainVO.PAY_PRO_EC_CC = "EC_CC";
            DomainVO.PAY_PRO_EC_ELV = "EC_ELV";
            DomainVO.PAY_PRO_EC_SUE = "EC_SUE";
            DomainVO.PAY_PRO_MOCKUP = "MOCKUP";
            DomainVO.PAY_PRO_MOCKUP_FAIL = "MOCKUP_FAIL";
            DomainVO.PAY_PRO_PAYPAL = "PAYPAL";
            DomainVO.PAY_PROS = ["EC_CC", "EC_ELV", "EC_SUE", "MOCKUP", "MOCKUP_FAIL", "PAYPAL"];
            DomainVO.PAYMENT_TEMPLATE_PATH_MAX_LENGTH = 200;
            DomainVO.PAYMENT_TEMPLATE_PATH_MAX_LENGTH_SECURE = 100;
            DomainVO.REQUEST_OPTION_REQUEST_ACTIVE = "REQUEST_ACTIVE";
            DomainVO.REQUEST_OPTION_REQUEST_EMAIL = "REQUEST_EMAIL";
            DomainVO.REQUEST_OPTION_CLAN_INVITE_ACTIVE = "CLAN_INVITE_ACTIVE";
            DomainVO.REQUEST_OPTION_CLAN_INVITE_EMAIL = "CLAN_INVITE_EMAIL";
            DomainVO.REQUEST_OPTIONS = ["REQUEST_ACTIVE", "REQUEST_EMAIL", "CLAN_INVITE_ACTIVE", "CLAN_INVITE_EMAIL"];
            DomainVO.SECRET_KEY_MAX_LENGTH = 32;
            DomainVO.SECRET_KEY_MAX_LENGTH_SECURE = 16;
            DomainVO.SZ_API_KEY_MAX_LENGTH = 100;
            DomainVO.SZ_API_KEY_MAX_LENGTH_SECURE = 50;
            DomainVO.SZ_SECRET_KEY_MAX_LENGTH = 1000;
            DomainVO.SZ_SECRET_KEY_MAX_LENGTH_SECURE = 500;
            DomainVO.SZ_SERVICE_ID_MAX_LENGTH = 100;
            DomainVO.SZ_SERVICE_ID_MAX_LENGTH_SECURE = 50;
            DomainVO.TOP_METHOD_EMAIL_REGISTER = "EMAIL_REGISTER";
            DomainVO.TOP_METHOD_EMAIL_LOGIN = "EMAIL_LOGIN";
            DomainVO.TOP_METHOD_USERNAME_REGISTER = "USERNAME_REGISTER";
            DomainVO.TOP_METHOD_USERNAME_LOGIN = "USERNAME_LOGIN";
            DomainVO.TOP_METHOD_REWARDO_REGISTER = "REWARDO_REGISTER";
            DomainVO.TOP_METHOD_REWARDO_LOGIN = "REWARDO_LOGIN";
            DomainVO.TOP_METHODS = ["EMAIL_REGISTER", "EMAIL_LOGIN", "USERNAME_REGISTER", "USERNAME_LOGIN", "REWARDO_REGISTER", "REWARDO_LOGIN"];
            DomainVO.TUI_NEWSLETTER_ACTION_MAX_LENGTH = 64;
            DomainVO.TUI_NEWSLETTER_ACTION_MAX_LENGTH_SECURE = 32;
            DomainVO.TUI_NEWSLETTER_KEY_MAX_LENGTH = 64;
            DomainVO.TUI_NEWSLETTER_KEY_MAX_LENGTH_SECURE = 32;
            return DomainVO;
        }());
        tables.DomainVO = DomainVO;
    })(tables = cas.tables || (cas.tables = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Event = (function () {
            function Event(name, params) {
                this.name = name;
                this.params = params;
            }
            return Event;
        }());
        vo.Event = Event;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var User = (function () {
            function User() {
                this.id = 0;
                this.name = "";
                this.imageUrl = "";
                this.countryId = "";
                this.languageId = "";
                this.customFields = {};
            }
            return User;
        }());
        vo.User = User;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Friend = (function (_super) {
            __extends(Friend, _super);
            function Friend() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Friend;
        }(cas.vo.User));
        vo.Friend = Friend;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var NotifyOptions = (function () {
            function NotifyOptions() {
                this.message = "";
                this.shortMessage = "";
                this.headline = "";
                this.url = "";
                this.imageUrl = "";
            }
            return NotifyOptions;
        }());
        vo.NotifyOptions = NotifyOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var RawFriend = (function () {
            function RawFriend() {
                this.method = "";
                this.uniqueKey = "";
                this.requestKey = "";
                this.name = "";
                this.imageUrl = "";
            }
            return RawFriend;
        }());
        vo.RawFriend = RawFriend;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var RequestOptions = (function () {
            function RequestOptions() {
                this.dialogCaption = "";
                this.senderMessage = "";
                this.receiverHeadline = "";
                this.receiverMessage = "";
                this.acceptedMessage = "";
                this.declinedMessage = "";
                this.newFriendsOnly = false;
                this.limit = 0;
                this.url = "";
                this.imageUrl = "";
                this.groupId = "";
                this.type = "";
                this.obj = "";
                this.clanInviteId = "";
            }
            return RequestOptions;
        }());
        vo.RequestOptions = RequestOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ShareOptions = (function () {
            function ShareOptions() {
                this.message = "";
                this.headline = "";
                this.url = "";
                this.imageUrl = "";
            }
            return ShareOptions;
        }());
        vo.ShareOptions = ShareOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var services;
    (function (services) {
        var CallbackResult = (function () {
            function CallbackResult(status, data) {
                this.status = status;
                this.success = this.status == kr3mCas.SUCCESS;
                this.data = data;
            }
            return CallbackResult;
        }());
        services.CallbackResult = CallbackResult;
    })(services = kr3mCas.services || (kr3mCas.services = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    kr3mCas.REGEX_IPV4 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    kr3mCas.REGEX_CRON = /((\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)(?:\s+(\S+))?)\s+(.+)/;
    kr3mCas.REGEX_CRON_GROUPS = ["pattern", "minute", "hour", "dayOfMonth", "month", "dayOfWeek", "year", "command"];
    kr3mCas.REGEX_DATA_URL = /^data:([^;]+)(?:;(base64)),(.+)$/;
    kr3mCas.REGEX_DATA_URL_GROUPS = ["mimeType", "encoding", "payload"];
    kr3mCas.REGEX_DEVICE_ID = /^[A-Z]+:/;
    kr3mCas.REGEX_EMAIL = /^[^@\s]{1,64}@[^@\s]{1,255}$/;
    kr3mCas.REGEX_FLOAT = /^\-?\d+[,\.]?\d*$/;
    kr3mCas.REGEX_INTEGER = /^\-?\d+$/;
    kr3mCas.REGEX_LOCALE = /^([a-z][a-z])[_\-]?([A-Z][A-Z])$/;
    kr3mCas.REGEX_LOCALE_GROUPS = ["languageId", "countryId"];
    kr3mCas.REGEX_URL = /^(?:(http|https|ftp)\:)?(?:\/\/(?:(\w+):(\w+)@)?([^\/:#?]+)(?::(\d+))?)?([^\?#"':]*)(?:\?([^#"':]*))?(?:#(.*))?$/;
    kr3mCas.REGEX_URL_GROUPS = ["protocol", "user", "password", "domain", "port", "resource", "query", "hash"];
    kr3mCas.REGEX_USERNAME = /^[^<>"'&;\/]+$/;
    kr3mCas.REGEX_WORD_SEPERATORS = /[\s!§*@$%\/\(\)\{\}=\#\[\]\\\?´`\"\'+\:;,\.<>|€\u0000]+/;
    kr3mCas.REGEX_TIMESTAMP = /^(\d\d\d\d)\-(\d\d)\-(\d\d)[T ](\d\d)\:(\d\d)(?:\:(\d\d)(?:\.(\d\d\d)\d*)?)?(Z|[\+\-]\d\d\:\d\d)?$/;
    kr3mCas.REGEX_TIMESTAMP_GROUPS = ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "timezone"];
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var StringEx = (function () {
            function StringEx() {
            }
            StringEx.pad = function (text, padLength, filler, alignment) {
                if (filler === void 0) { filler = '0'; }
                if (alignment === void 0) { alignment = 'right'; }
                var padded = text.toString();
                var fillerString = filler.toString();
                if (fillerString.length == 0)
                    throw new Error('filler length for pad() must be greater than 0');
                if (alignment == 'right') {
                    while (padded.length < padLength)
                        padded = fillerString + padded;
                }
                else if (alignment == 'left') {
                    while (padded.length < padLength)
                        padded += fillerString;
                }
                else {
                    while (padded.length < padLength) {
                        padded = fillerString + padded;
                        if (padded.length < padLength)
                            padded += fillerString;
                    }
                }
                return padded;
            };
            StringEx.captureNamed = function (text, regex, groupNames) {
                var matches = text.match(regex);
                if (!matches)
                    return undefined;
                var result = {};
                var l = Math.min(groupNames.length, matches.length - 1);
                for (var i = 0; i < l; ++i) {
                    if (groupNames[i])
                        result[groupNames[i]] = matches[i + 1];
                }
                return result;
            };
            StringEx.toString = function (value) {
                if (value === undefined || value === null)
                    return '';
                return value.toString();
            };
            StringEx.captureNamedGlobal = function (text, regex, groupNames) {
                var results = [];
                var match = regex.exec(text);
                while (match) {
                    var result = {};
                    var l = Math.min(groupNames.length, match.length - 1);
                    for (var i = 0; i < l; ++i) {
                        if (groupNames[i])
                            result[groupNames[i]] = match[i + 1];
                    }
                    results.push(result);
                    match = regex.exec(text);
                }
                return results;
            };
            StringEx.stripBom = function (text) {
                if (text.slice(0, StringEx.BOM.length) == StringEx.BOM)
                    return text.slice(StringEx.BOM.length);
                else
                    return text;
            };
            StringEx.splitNoQuoted = function (text, seperator, openingQuotes, closingQuotes) {
                if (seperator === void 0) { seperator = ","; }
                if (openingQuotes === void 0) { openingQuotes = ["\"", "'"]; }
                closingQuotes = closingQuotes || openingQuotes;
                if (openingQuotes.length != closingQuotes.length)
                    throw new Error("openingQuotes.length doesn't match closingQuotes.length");
                var quote = -1;
                var parts = [];
                var offset = 0;
                for (var i = 0; i < text.length; ++i) {
                    if (quote < 0) {
                        if (text.slice(i, i + seperator.length) == seperator) {
                            parts.push(text.slice(offset, i));
                            offset = i + seperator.length;
                            i = offset - 1;
                            continue;
                        }
                        for (var j = 0; j < openingQuotes.length; ++j) {
                            if (text.slice(i, i + openingQuotes[j].length) == openingQuotes[j]) {
                                quote = j;
                                break;
                            }
                        }
                    }
                    else {
                        if (text.slice(i, i + closingQuotes[quote].length) == closingQuotes[quote])
                            quote = -1;
                    }
                }
                if (offset < text.length)
                    parts.push(text.slice(offset));
                return parts;
            };
            StringEx.camelback = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                var parts = [];
                for (var i = 0; i < values.length; ++i) {
                    var text = values[i].toString();
                    text = text.replace(/\W+/g, "_");
                    parts = parts.concat(text.split("_"));
                }
                if (parts.length > 0)
                    parts[0] = parts[0].toLowerCase();
                for (var i = 1; i < parts.length; ++i)
                    parts[i] = parts[i].slice(0, 1).toUpperCase() + parts[i].slice(1).toLowerCase();
                return parts.join("");
            };
            StringEx.camelToKebab = function (value) {
                var parts = value.split(/(?=[A-Z])/);
                return parts.map(function (p) { return p.toLowerCase(); }).join('-');
            };
            StringEx.replaceSuccessive = function (haystack, needle, replacement) {
                var old;
                while (old != haystack) {
                    old = haystack;
                    haystack = haystack.replace(needle, replacement);
                }
                return haystack;
            };
            StringEx.joinAssoc = function (obj, seperator, assignOperator, valueFormatter) {
                if (seperator === void 0) { seperator = "&"; }
                if (assignOperator === void 0) { assignOperator = "="; }
                var keys = Object.keys(obj);
                if (valueFormatter)
                    return keys.map(function (key) { return key + assignOperator + valueFormatter(obj[key]); }).join(seperator);
                else
                    return keys.map(function (key) { return key + assignOperator + obj[key]; }).join(seperator);
            };
            StringEx.splitAssoc = function (text, seperator, assignOperator, valueFormatter) {
                if (seperator === void 0) { seperator = "&"; }
                if (assignOperator === void 0) { assignOperator = "="; }
                var result = {};
                var parts = text.split(seperator);
                for (var i = 0; i < parts.length; ++i) {
                    var pos = parts[i].indexOf(assignOperator);
                    if (pos < 0)
                        continue;
                    var key = parts[i].substring(0, pos);
                    var value = parts[i].substring(pos + assignOperator.length);
                    result[key] = valueFormatter ? valueFormatter(value) : value;
                }
                return result;
            };
            StringEx.joinKeys = function (obj, seperator) {
                if (seperator === void 0) { seperator = ","; }
                var parts = [];
                for (var i in obj)
                    parts.push(i);
                return parts.join(seperator);
            };
            StringEx.joinValues = function (obj, seperator) {
                if (seperator === void 0) { seperator = ","; }
                var parts = [];
                for (var i in obj)
                    parts.push(obj[i]);
                return parts.join(seperator);
            };
            StringEx.getBefore = function (text, needle, fromFront) {
                if (fromFront === void 0) { fromFront = true; }
                var pos = fromFront ? text.indexOf(needle) : text.lastIndexOf(needle);
                return (pos > 0) ? text.substr(0, pos) : text;
            };
            StringEx.getAfter = function (text, needle, fromFront) {
                if (fromFront === void 0) { fromFront = true; }
                var pos = fromFront ? text.indexOf(needle) : text.lastIndexOf(needle);
                return (pos >= 0) ? text.substr(pos + needle.length) : text;
            };
            StringEx.flip = function (test) {
                var result = "";
                for (var i = test.length - 1; i >= 0; --i)
                    result += test.charAt(i);
                return result;
            };
            StringEx.literalReplace = function (haystack, needle, newValue) {
                return haystack.split(needle).join(newValue);
            };
            StringEx.parseIntSafe = function (text, errorResult) {
                if (errorResult === void 0) { errorResult = 0; }
                if (text === null || typeof text === "undefined")
                    return errorResult;
                var value = parseInt(text, 10);
                if (isNaN(value))
                    value = errorResult;
                return value;
            };
            StringEx.parseFloatSafe = function (text, errorResult) {
                if (errorResult === void 0) { errorResult = 0; }
                if (text === null || typeof text === "undefined")
                    return errorResult;
                var value = parseFloat(text.replace(/,/g, "."));
                if (isNaN(value))
                    value = errorResult;
                return value;
            };
            StringEx.format = function (text) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                var result = "";
                var j = 0;
                var specs = { "%": true, "n": true, "j": true, "s": true };
                for (var i = 0; i < text.length; ++i) {
                    var token = text.charAt(i);
                    if (token == "%") {
                        var k = i + 1;
                        do {
                            if (k >= text.length)
                                return result;
                            var spec = text.charAt(k++);
                        } while (!specs[spec]);
                        var options = text.slice(i + 1, k - 1);
                        var matches = options.match(/^([0\-\+hb]*)(\d*)\.?(\d*)([hb])*$/);
                        if (!matches)
                            continue;
                        var padWith = (matches[1].indexOf("0") >= 0) ? "0" : " ";
                        var alignLeft = matches[1].indexOf("-") >= 0;
                        var alignCenter = matches[1].indexOf("+") >= 0;
                        var length = StringEx.parseIntSafe(matches[2]);
                        var precision = StringEx.parseIntSafe(matches[3]);
                        var base = 10;
                        if ((matches[1] && matches[1].indexOf("h") >= 0) || (matches[4] && matches[4].indexOf("h") >= 0))
                            base = 16;
                        else if ((matches[1] && matches[1].indexOf("b") >= 0) || (matches[4] && matches[4].indexOf("b") >= 0))
                            base = 2;
                        var value;
                        switch (spec) {
                            case "%":
                                if (options == "") {
                                    result += "%";
                                    ++i;
                                    continue;
                                }
                                break;
                            case "n":
                                value = (precision > 0 ? values[j++].toFixed(precision) : values[j++]).toString(base);
                                break;
                            case "s":
                                value = values[j++].toString();
                                break;
                            case "j":
                                value = util.Json.encode(values[j++]);
                                break;
                        }
                        value = value || "";
                        if (alignCenter) {
                            var odd = false;
                            while (value.length < length) {
                                if (odd)
                                    value += padWith;
                                else
                                    value = padWith + value;
                                odd = !odd;
                            }
                        }
                        else if (alignLeft) {
                            while (value.length < length)
                                value += padWith;
                        }
                        else {
                            while (value.length < length)
                                value = padWith + value;
                        }
                        result += value;
                        i = k - 1;
                    }
                    else {
                        result += token;
                    }
                }
                return result;
            };
            StringEx.getVersionParts = function (version, padToLength) {
                if (padToLength === void 0) { padToLength = 0; }
                var parts = version.split(".").map(function (part) { return StringEx.parseIntSafe(part); });
                while (parts.length < padToLength)
                    parts.push(0);
                return parts;
            };
            StringEx.splitArguments = function (line) {
                var args = line.split(" ");
                for (var i = 0; i < args.length; ++i) {
                    var token = args[i].slice(0, 1);
                    if (token == "'" || token == '"') {
                        for (var j = i + 1; j < args.length; ++j) {
                            args[i] += " " + args[j];
                            if (args[j].slice(-1) == token)
                                break;
                        }
                        args.splice(i + 1, j - i);
                    }
                    else {
                        args[i] = args[i].trim();
                    }
                    if (args[i] == "")
                        args.splice(i--, 1);
                }
                return args;
            };
            StringEx.getCliParams = function (params, mapping) {
                if (mapping === void 0) { mapping = {}; }
                var result = { values: [] };
                for (var i = 0; i < params.length; ++i) {
                    var meta = mapping[params[i]];
                    if (meta) {
                        var name = meta.name || params[i];
                        var count = meta.count || 0;
                        if (count == 0) {
                            result[name] = [];
                        }
                        else if (count == 1) {
                            result[name] = params[++i];
                        }
                        else {
                            result[name] = [];
                            for (var j = 0; j < count; ++j)
                                result[name].push(params[++i]);
                        }
                    }
                    else {
                        result.values.push(params[i]);
                    }
                }
                return result;
            };
            StringEx.wrapText = function (text, lineLength, prefix, suffix) {
                if (lineLength === void 0) { lineLength = 80; }
                if (prefix === void 0) { prefix = ""; }
                if (suffix === void 0) { suffix = ""; }
                if (lineLength < 0)
                    return text;
                var words = text.split(" ");
                if (words.length == 0)
                    return text;
                var result = "";
                var line = words[0];
                var count = words.length;
                for (var i = 1; i < count; ++i) {
                    if (line.length + 1 + words[i].length <= lineLength) {
                        line += " " + words[i];
                    }
                    else {
                        result += prefix + line + suffix + "\n";
                        line = words[i];
                    }
                }
                result += prefix + line + suffix;
                return result;
            };
            StringEx.sortCaseIndependant = function (items) {
                items.sort(function (a, b) { return a.trim().localeCompare(b.trim()); });
            };
            StringEx.getUnitString = function (value, units, maxUnits) {
                if (maxUnits === void 0) { maxUnits = 0; }
                if (value == 0)
                    return "0" + (Object.keys(units)[0] || "");
                var parts = [];
                for (var unit in units) {
                    var amount = value % units[unit];
                    if (amount > 0)
                        parts.unshift(amount + unit);
                    value = Math.floor(value / units[unit]);
                }
                if (maxUnits > 0)
                    parts = parts.slice(0, maxUnits);
                return parts.join(" ");
            };
            StringEx.bigNumber = function (value, maxUnits) {
                if (maxUnits === void 0) { maxUnits = 0; }
                var units = { "": 1000, k: 1000, M: 1000, G: 1000, T: 1000, P: 1000, E: 1000, Z: 1000, Y: 1000, ALOT: 100000000 };
                return StringEx.getUnitString(value, units, maxUnits);
            };
            StringEx.getSizeString = function (size, useDual, maxUnits) {
                if (useDual === void 0) { useDual = false; }
                if (maxUnits === void 0) { maxUnits = 0; }
                var units = useDual
                    ? { Bi: 1024, kiB: 1024, MiB: 1024, GiB: 1024, TiB: 1024, PiB: 1024, EiB: 1024, ZiB: 1024, YiB: 1024, ALOTi: 100000000 }
                    : { B: 1000, kB: 1000, MB: 1000, GB: 1000, TB: 1000, PB: 1000, EB: 1000, ZB: 1000, YB: 1000, ALOT: 100000000 };
                return StringEx.getUnitString(size, units, maxUnits);
            };
            StringEx.getDurationString = function (duration, maxUnits) {
                if (maxUnits === void 0) { maxUnits = 0; }
                var units = { ms: 1000, s: 60, m: 60, h: 24, d: 7, w: 52, y: 100, centuries: 10, millenia: 1000, ages: 100000000 };
                return StringEx.getUnitString(duration, units, maxUnits);
            };
            StringEx.BOM = "\ufeff";
            return StringEx;
        }());
        util.StringEx = StringEx;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Dates = (function () {
            function Dates() {
            }
            Dates.isDate = function (value) {
                return typeof value == 'object' && value instanceof Date && !isNaN(value.valueOf());
            };
            Dates.isTimestamp = function (value) {
                return Dates.isDate(value) && value.getTime() >= 0;
            };
            Dates.getDateString = function (date, useUTC) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                if (useUTC) {
                    var result = date.getUTCFullYear() + "-";
                    var month = date.getUTCMonth() + 1;
                    result += ((month < 10) ? "0" + month : "" + month);
                    var day = date.getUTCDate();
                    result += "-" + ((day < 10) ? "0" + day : "" + day);
                    return result;
                }
                else {
                    var result = date.getFullYear() + "-";
                    var month = date.getMonth() + 1;
                    result += ((month < 10) ? "0" + month : "" + month);
                    var day = date.getDate();
                    result += "-" + ((day < 10) ? "0" + day : "" + day);
                    return result;
                }
            };
            Dates.getTimeString = function (date, useUTC, addMilliseconds) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                if (addMilliseconds === void 0) { addMilliseconds = false; }
                if (useUTC) {
                    var result = "";
                    var hours = date.getUTCHours();
                    result += ((hours < 10) ? "0" + hours : "" + hours);
                    var minutes = date.getUTCMinutes();
                    result += ":" + ((minutes < 10) ? "0" + minutes : "" + minutes);
                    var seconds = date.getUTCSeconds();
                    result += ":" + ((seconds < 10) ? "0" + seconds : "" + seconds);
                    if (addMilliseconds) {
                        var millis = date.getUTCMilliseconds();
                        result += "." + ((millis < 10) ? "00" + millis : (millis < 100) ? "0" + millis : "" + millis);
                    }
                    return result + "Z";
                }
                else {
                    var result = "";
                    var hours = date.getHours();
                    result += ((hours < 10) ? "0" + hours : "" + hours);
                    var minutes = date.getMinutes();
                    result += ":" + ((minutes < 10) ? "0" + minutes : "" + minutes);
                    var seconds = date.getSeconds();
                    result += ":" + ((seconds < 10) ? "0" + seconds : "" + seconds);
                    if (addMilliseconds) {
                        var millis = date.getMilliseconds();
                        result += "." + ((millis < 10) ? "00" + millis : (millis < 100) ? "0" + millis : "" + millis);
                    }
                    return result;
                }
            };
            Dates.getDateFromDateTimeString = function (value) {
                if (value && value instanceof Date)
                    return value;
                if (!value || typeof value != "string")
                    return null;
                var matches = util.StringEx.captureNamed(value, kr3mCas.REGEX_TIMESTAMP, kr3mCas.REGEX_TIMESTAMP_GROUPS);
                if (!matches)
                    return null;
                matches.seconds = matches.seconds || "0";
                matches.milliseconds = matches.milliseconds || "0";
                var date = new Date();
                if (matches.timezone == "Z") {
                    date.setUTCFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
                    date.setUTCHours(parseInt(matches.hours, 10), parseInt(matches.minutes, 10), parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
                }
                else if (matches.timezone && matches.timezone.length == 6) {
                    var hourOffset = parseInt(matches.timezone.slice(1, 3), 10);
                    var minuteOffset = parseInt(matches.timezone.slice(4, 5), 10);
                    if (matches.timezone.charAt(0) == "-") {
                        hourOffset *= -1;
                        minuteOffset *= -1;
                    }
                    date.setUTCFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
                    date.setUTCHours(parseInt(matches.hours, 10) - hourOffset, parseInt(matches.minutes, 10) - minuteOffset, parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
                }
                else {
                    date.setFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
                    date.setHours(parseInt(matches.hours, 10), parseInt(matches.minutes, 10), parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
                }
                return date;
            };
            Dates.getDateFromDateString = function (value) {
                if (!value || typeof value != "string")
                    return null;
                var matches = value.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)$/);
                if (!matches)
                    return null;
                var date = new Date();
                date.setFullYear(parseInt(matches[1], 10), parseInt(matches[2], 10) - 1, parseInt(matches[3], 10));
                date.setHours(0, 0, 0, 0);
                return date;
            };
            Dates.getDateTimeString = function (date, useUTC, addMilliseconds) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                if (addMilliseconds === void 0) { addMilliseconds = false; }
                return this.getDateString(date, useUTC) + " " + this.getTimeString(date, useUTC, addMilliseconds);
            };
            Dates.getToday = function (useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                return this.getDateString(new Date(), useUTC);
            };
            Dates.getYesterday = function (useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var date = new Date();
                date.setUTCDate(date.getUTCDate() - 1);
                return this.getDateString(date, useUTC);
            };
            Dates.getTomorrow = function (useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var date = new Date();
                date.setUTCDate(date.getUTCDate() + 1);
                return this.getDateString(date, useUTC);
            };
            Dates.getNow = function (useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                return this.getDateTimeString(new Date(), useUTC);
            };
            Dates.areSameDay = function (a, b) {
                if (a.getUTCFullYear() != b.getUTCFullYear())
                    return false;
                if (a.getUTCMonth() != b.getUTCMonth())
                    return false;
                if (a.getUTCDate() != b.getUTCDate())
                    return false;
                return true;
            };
            Dates.getSomeDaysAgo = function (date, count) {
                var newDate = new Date(date.getTime());
                newDate.setUTCDate(newDate.getUTCDate() - count);
                return newDate;
            };
            Dates.getSomeMonthsAgo = function (date, count) {
                var newDate = new Date(date.getTime());
                newDate.setUTCMonth(newDate.getUTCMonth() - count);
                return newDate;
            };
            Dates.getAgeInYears = function (birthday) {
                if (!birthday)
                    return -1;
                var now = new Date();
                var years = now.getFullYear() - birthday.getFullYear();
                var months = now.getMonth() - birthday.getMonth();
                var days = now.getDate() - birthday.getDate();
                var age = years;
                if ((months < 0) || (months == 0 && days < 0))
                    --age;
                return age;
            };
            Dates.max = function () {
                var dates = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    dates[_i] = arguments[_i];
                }
                if (dates.length == 0)
                    return null;
                var result = dates[0];
                for (var i = 1; i < dates.length; ++i)
                    if (dates[i] > result)
                        result = dates[i];
                return result;
            };
            Dates.min = function () {
                var dates = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    dates[_i] = arguments[_i];
                }
                if (dates.length == 0)
                    return null;
                var result = dates[0];
                for (var i = 1; i < dates.length; ++i)
                    if (dates[i] < result)
                        result = dates[i];
                return result;
            };
            Dates.getCalendarWeek = function (date, useUTC) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                if (useUTC) {
                    var currentThursday = new Date(date.getTime() + (3 - ((date.getUTCDay() + 6) % 7)) * 86400000);
                    var yearOfThursday = currentThursday.getUTCFullYear();
                    var offset = new Date(0);
                    offset.setUTCFullYear(yearOfThursday, 0, 4);
                    var firstThursday = new Date(offset.getTime() + (3 - ((offset.getUTCDay() + 6) % 7)) * 86400000);
                    var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000 / 7);
                    return weekNumber;
                }
                else {
                    var currentThursday = new Date(date.getTime() + (3 - ((date.getDay() + 6) % 7)) * 86400000);
                    var yearOfThursday = currentThursday.getFullYear();
                    var firstThursday = new Date(new Date(yearOfThursday, 0, 4).getTime() + (3 - ((new Date(yearOfThursday, 0, 4).getDay() + 6) % 7)) * 86400000);
                    var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000 / 7);
                    return weekNumber;
                }
            };
            Dates.getCalendarWeekYear = function (date, useUTC) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var year = useUTC ? date.getUTCFullYear() : date.getFullYear();
                var week = Dates.getCalendarWeek(date, useUTC);
                if (week < 52)
                    return year;
                return date.getMonth() > 6 ? year : year - 1;
            };
            Dates.getFirstOfWeek = function (date, useUTC) {
                if (date === void 0) { date = new Date(); }
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var result = new Date(date.getTime());
                if (useUTC) {
                    result.setUTCDate(result.getUTCDate() - (result.getUTCDay() + 6) % 7);
                    result.setUTCHours(0, 0, 0, 0);
                }
                else {
                    result.setDate(result.getDate() - (result.getDay() + 6) % 7);
                    result.setHours(0, 0, 0, 0);
                }
                return result;
            };
            Dates.getFirstOfMonth = function (date, useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var result = new Date(date.getTime());
                if (useUTC) {
                    result.setUTCDate(1);
                    result.setUTCHours(0, 0, 0, 0);
                }
                else {
                    result.setDate(1);
                    result.setHours(0, 0, 0, 0);
                }
                return result;
            };
            Dates.getLastOfMonth = function (date, useUTC) {
                if (useUTC === void 0) { useUTC = Dates.USE_UTC; }
                var result = new Date(date.getTime());
                if (useUTC) {
                    result.setUTCDate(1);
                    result.setUTCMonth(result.getUTCMonth() + 1);
                    result.setUTCDate(0);
                    result.setUTCHours(0, 0, 0, 0);
                }
                else {
                    result.setDate(1);
                    result.setMonth(result.getMonth() + 1);
                    result.setDate(0);
                    result.setHours(0, 0, 0, 0);
                }
                return result;
            };
            Dates.areClose = function (a, b, threshold) {
                if (threshold === void 0) { threshold = 1000; }
                if (!a || !b)
                    return false;
                return Math.abs(a.getTime() - b.getTime()) <= threshold;
            };
            Dates.getMonthDays = function (date) {
                if (date === void 0) { date = new Date(); }
                var temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                return temp.getDate();
            };
            Dates.delta = function (date, years, months, days, hours, minutes, seconds, milliSeconds, isCapped) {
                if (years === void 0) { years = 0; }
                if (months === void 0) { months = 0; }
                if (days === void 0) { days = 0; }
                if (hours === void 0) { hours = 0; }
                if (minutes === void 0) { minutes = 0; }
                if (seconds === void 0) { seconds = 0; }
                if (milliSeconds === void 0) { milliSeconds = 0; }
                if (isCapped === void 0) { isCapped = true; }
                var result = new Date(date.getTime());
                result.setUTCFullYear(result.getUTCFullYear() + years);
                if (isCapped) {
                    var oldMonth = result.getUTCMonth();
                    result.setUTCMonth(oldMonth + months);
                    var newMonth = result.getUTCMonth();
                    if ((oldMonth + months) % 12 != newMonth)
                        result.setUTCDate(0);
                }
                else {
                    result.setUTCMonth(result.getUTCMonth() + months);
                }
                result.setUTCDate(result.getUTCDate() + days);
                result.setUTCHours(result.getUTCHours() + hours);
                result.setUTCMinutes(result.getUTCMinutes() + minutes);
                result.setUTCSeconds(result.getUTCSeconds() + seconds);
                result.setUTCMilliseconds(result.getUTCMilliseconds() + milliSeconds);
                return result;
            };
            Dates.USE_UTC = false;
            return Dates;
        }());
        util.Dates = Dates;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Util = (function () {
            function Util() {
            }
            Util.moveElement = function (values, fromPos, toPos) {
                if (fromPos < 0)
                    fromPos += values.length;
                fromPos = Math.max(fromPos, 0);
                if (toPos < 0)
                    toPos += values.length;
                toPos = Math.min(toPos, values.length - 1);
                if (fromPos == toPos)
                    return;
                var temp = values[fromPos];
                if (fromPos < toPos)
                    values.copyWithin(fromPos, fromPos + 1, toPos + 1);
                else
                    values.copyWithin(toPos + 1, toPos, fromPos);
                values[toPos] = temp;
            };
            Util.equal = function (obj1, obj2, maxRecursionDepth) {
                if (maxRecursionDepth === void 0) { maxRecursionDepth = 1000; }
                if (maxRecursionDepth < 0)
                    return true;
                if (!obj1 != !obj2)
                    return false;
                if (!obj1 && !obj2)
                    return true;
                --maxRecursionDepth;
                if (typeof obj1 != "object" || typeof obj2 != "object")
                    return obj1 === obj2;
                if (!obj1 != !obj2)
                    return false;
                if (typeof obj1.equals == "function")
                    return obj1.equals(obj2);
                if ((obj1.length || obj2.length) && obj1.length != obj2.length)
                    return false;
                if (obj1 instanceof Date && obj2 instanceof Date)
                    return obj1.getTime() == obj2.getTime();
                for (var i in obj1) {
                    if (!Util.equal(obj1[i], obj2[i], maxRecursionDepth))
                        return false;
                }
                for (var i in obj2) {
                    if (!Util.equal(obj1[i], obj2[i], maxRecursionDepth))
                        return false;
                }
                return true;
            };
            Util.fieldsMatch = function (obj1, obj2, fieldNames, strict) {
                if (strict === void 0) { strict = false; }
                if (!obj1 || !obj2)
                    return false;
                if (strict) {
                    for (var i = 0; i < fieldNames.length; ++i) {
                        if (Util.getProperty(obj1, fieldNames[i]) !== Util.getProperty(obj2, fieldNames[i]))
                            return false;
                    }
                }
                else {
                    for (var i = 0; i < fieldNames.length; ++i) {
                        if (Util.getProperty(obj1, fieldNames[i]) != Util.getProperty(obj2, fieldNames[i]))
                            return false;
                    }
                }
                return true;
            };
            Util.clone = function (obj) {
                if (!obj || typeof obj != "object")
                    return obj;
                if (obj instanceof Date)
                    return new Date(obj.getTime());
                var result = typeof obj["length"] == "number" ? [] : obj["__proto__"] ? Object.create(obj["__proto__"]) : {};
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; ++i) {
                    if (typeof obj[keys[i]] == "object")
                        result[keys[i]] = Util.clone(obj[keys[i]]);
                    else
                        result[keys[i]] = obj[keys[i]];
                }
                return result;
            };
            Util.encodeHtml = function (text) {
                if (!text)
                    return text;
                text = text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
                return text;
            };
            Util.decodeHtml = function (text) {
                var tokens = { nbsp: " ", amp: "&", lt: "<", gt: ">", quot: "\"" };
                text = text.replace(/&(#?\w+?);/g, function (all, captured) {
                    if (tokens[captured])
                        return tokens[captured];
                    try {
                        if (captured.charAt(0) == "#")
                            return String.fromCharCode(parseInt(captured.slice(1)));
                    }
                    catch (e) {
                    }
                    return all;
                });
                return text;
            };
            Util.reverse = function (values) {
                values = values.slice();
                var m = Math.floor(values.length / 2);
                var e = values.length - 1;
                for (var i = 0; i < m; ++i)
                    _a = [values[e - i], values[i]], values[i] = _a[0], values[e - i] = _a[1];
                return values;
                var _a;
            };
            Util.contains = function (container, target, strict) {
                if (strict === void 0) { strict = false; }
                if (!container || container.length <= 0)
                    return false;
                for (var i = 0; i < container.length; ++i) {
                    if (container[i] === target || (!strict && container[i] == target))
                        return true;
                }
                return false;
            };
            Util.remove = function (container, target, strict) {
                if (strict === void 0) { strict = false; }
                for (var i = 0; i < container.length; ++i) {
                    if (container[i] === target || (!strict && container[i] == target))
                        return container.splice(i, 1)[0];
                }
                return null;
            };
            Util.difference = function (base) {
                var operands = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    operands[_i - 1] = arguments[_i];
                }
                var result = base.slice(0);
                for (var i = 0; i < result.length; ++i) {
                    for (var j = 0; j < operands.length; ++j) {
                        if (Util.contains(operands[j], result[i])) {
                            result.splice(i--, 1);
                            break;
                        }
                    }
                }
                return result;
            };
            Util.intersect = function () {
                var arrays = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arrays[_i] = arguments[_i];
                }
                var result = Util.merge.apply(Util, arrays);
                for (var i = 0; i < result.length; ++i) {
                    for (var j = 0; j < arrays.length; ++j) {
                        if (!Util.contains(arrays[j], result[i])) {
                            result.splice(i--, 1);
                            break;
                        }
                    }
                }
                return result;
            };
            Util.merge = function () {
                var arrays = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arrays[_i] = arguments[_i];
                }
                var result = [];
                for (var i = 0; i < arrays.length; ++i) {
                    for (var j in arrays[i]) {
                        if (!Util.contains(result, arrays[i][j]))
                            result.push(arrays[i][j]);
                    }
                }
                return result;
            };
            Util.mergeAssoc = function () {
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                var result = {};
                for (var i = 0; i < objects.length; ++i) {
                    if (!objects[i])
                        continue;
                    for (var j in objects[i])
                        result[j] = objects[i][j];
                }
                return result;
            };
            Util.getProperty = function (obj, propertyName) {
                var parts = propertyName.split(".");
                while (parts.length > 0) {
                    if (!obj)
                        return undefined;
                    obj = obj[parts.shift()];
                }
                return obj;
            };
            Util.getPropertyAndGetter = function (obj, propertyName) {
                if (propertyName == "")
                    return obj;
                var parts = propertyName.split(".");
                while (parts.length > 0) {
                    if (!obj)
                        return undefined;
                    var prop = parts.shift();
                    if (prop.substr(prop.length - 2, 2) == '()')
                        obj = obj[prop.substr(0, prop.length - 2)]();
                    else
                        obj = obj[prop];
                }
                return obj;
            };
            Util.setProperty = function (obj, name, value) {
                var parts = name.split(".");
                while (parts.length > 1) {
                    var key = parts.shift();
                    if (obj[key] === undefined || obj[key] === null) {
                        var index = parseInt(parts[0], 10);
                        if (isNaN(index)) {
                            obj[key] = {};
                        }
                        else {
                            obj[key] = [];
                            for (var i = -1; i < index; ++i)
                                obj[key].push(undefined);
                        }
                    }
                    obj = obj[key];
                }
                obj[parts[0]] = value;
            };
            Util.deleteProperty = function (obj, name) {
                var parts = name.split(".");
                while (parts.length > 1) {
                    var key = parts.shift();
                    if (obj[key] === undefined || obj[key] === null)
                        return;
                    obj = obj[key];
                }
                delete obj[parts[0]];
            };
            Util.findBy = function (objects, propertyName, propertyValue, offset, strict) {
                if (offset === void 0) { offset = 0; }
                if (strict === void 0) { strict = false; }
                if (!objects)
                    return -1;
                if (strict) {
                    for (var i = offset; i < objects.length; ++i) {
                        if (Util.getProperty(objects[i], propertyName) === propertyValue)
                            return i;
                    }
                }
                else {
                    for (var i = offset; i < objects.length; ++i) {
                        if (Util.getProperty(objects[i], propertyName) == propertyValue)
                            return i;
                    }
                }
                return -1;
            };
            Util.findWhere = function (objects, where, offset, strict) {
                if (offset === void 0) { offset = 0; }
                if (strict === void 0) { strict = false; }
                if (!objects)
                    return -1;
                if (strict) {
                    for (var i = offset; i < objects.length; ++i) {
                        var found = true;
                        for (var field in where) {
                            if (Util.getProperty(objects[i], field) !== where[field]) {
                                found = false;
                                break;
                            }
                        }
                        if (found)
                            return i;
                    }
                }
                else {
                    for (var i = offset; i < objects.length; ++i) {
                        var found = true;
                        for (var field in where) {
                            if (Util.getProperty(objects[i], field) != where[field]) {
                                found = false;
                                break;
                            }
                        }
                        if (found)
                            return i;
                    }
                }
                return -1;
            };
            Util.getBy = function (objects, propertyName, propertyValue, offset, strict) {
                if (offset === void 0) { offset = 0; }
                if (strict === void 0) { strict = false; }
                var pos = Util.findBy(objects, propertyName, propertyValue, offset, strict);
                return pos >= 0 ? objects[pos] : undefined;
            };
            Util.mapAssoc = function (values, mapFunc) {
                var assoc = {};
                for (var i = 0; i < values.length; ++i) {
                    var _a = mapFunc(values[i], i), id = _a[0], newValue = _a[1];
                    assoc[id] = newValue;
                }
                return assoc;
            };
            Util.combine = function (keys, values) {
                if (keys.length != values.length)
                    throw new Error("keys.length doesn't match values.length");
                var result = {};
                for (var i = 0; i < keys.length; ++i)
                    result[keys[i]] = values[i];
                return result;
            };
            Util.getAllBy = function (objects, propertyName, propertyValue) {
                if (!objects)
                    return [];
                var results = [];
                for (var i = 0; i < objects.length; ++i) {
                    if (Util.getProperty(objects[i], propertyName) == propertyValue)
                        results.push(objects[i]);
                }
                return results;
            };
            Util.removeBy = function (objects, propertyName, propertyValue) {
                var result = [];
                if (!objects)
                    return result;
                for (var i = 0; i < objects.length; ++i) {
                    if (Util.getProperty(objects[i], propertyName) == propertyValue)
                        result = result.concat(objects.splice(i--, 1));
                }
                return result;
            };
            Util.gather = function (objects, fieldName, filterFunc) {
                var result = [];
                var parts = fieldName.split(".");
                if (filterFunc) {
                    for (var i in objects) {
                        if (filterFunc(objects[i])) {
                            var temp = objects[i];
                            for (var j = 0; j < parts.length; ++j)
                                temp = temp[parts[j]];
                            result.push(temp);
                        }
                    }
                }
                else {
                    for (var i in objects) {
                        var temp = objects[i];
                        for (var j = 0; j < parts.length; ++j)
                            temp = temp[parts[j]];
                        result.push(temp);
                    }
                }
                return result;
            };
            Util.gatherUnique = function (objects, fieldName, filterFunc) {
                return Util.removeDuplicates(Util.gather(objects, fieldName, filterFunc));
            };
            Util.removeDuplicates = function (objects) {
                var result = [];
                for (var i = 0; i < objects.length; ++i) {
                    if (result.indexOf(objects[i]) < 0)
                        result.push(objects[i]);
                }
                return result;
            };
            Util.arrayToAssoc = function (data, indexField) {
                if (indexField === void 0) { indexField = "id"; }
                var result = {};
                for (var i = 0; i < data.length; ++i) {
                    var key = Util.getProperty(data[i], indexField);
                    result[key] = data[i];
                }
                return result;
            };
            Util.arrayToPairs = function (data, indexField, valueField) {
                var result = {};
                for (var i in data) {
                    var key = Util.getProperty(data[i], indexField);
                    var value = Util.getProperty(data[i], valueField);
                    result[key] = value;
                }
                return result;
            };
            Util.arrayToSet = function (data, trueValue) {
                if (trueValue === void 0) { trueValue = true; }
                var set = {};
                for (var i = 0; i < data.length; ++i)
                    set[data[i]] = trueValue;
                return set;
            };
            Util.assocToArray = function (data) {
                var result = [];
                for (var i in data)
                    result.push(data[i]);
                return result;
            };
            Util.filter = function (value, validValues, fallbackValue) {
                for (var i = 0; i < validValues.length; ++i) {
                    if (validValues[i] == value)
                        return value;
                }
                return fallbackValue;
            };
            Util.filterKey = function (key, validKeys, fallbackKey) {
                if (fallbackKey === void 0) { fallbackKey = null; }
                if (typeof validKeys[key] != "undefined")
                    return key;
                return fallbackKey;
            };
            Util.filterAssoc = function (obj, func) {
                var result = {};
                for (var name in obj) {
                    if (func(obj[name], name))
                        result[name] = obj[name];
                }
                return result;
            };
            Util.sortBy = function () {
                var values = arguments[0];
                var fields;
                if (typeof arguments[1] == "string") {
                    fields = {};
                    fields[arguments[1]] = arguments[2] === undefined ? true : arguments[2];
                }
                else {
                    fields = arguments[1];
                }
                values.sort(function (a, b) {
                    for (var name in fields) {
                        var aValue = Util.getProperty(a, name);
                        var bValue = Util.getProperty(b, name);
                        if (aValue < bValue)
                            return fields[name] ? -1 : 1;
                        if (aValue > bValue)
                            return fields[name] ? 1 : -1;
                    }
                    return 0;
                });
            };
            Util.sortAssocByKey = function (data, sortFunc) {
                sortFunc = sortFunc || (function (keyA, keyB) { return keyA.localeCompare(keyB); });
                var keys = Object.keys(data);
                keys.sort(sortFunc);
                var result = {};
                for (var i = 0; i < keys.length; ++i)
                    result[keys[i]] = data[keys[i]];
                return result;
            };
            Util.sortAssocByValue = function (data, sortFunc) {
                sortFunc = sortFunc || (function (valueA, valueB) { return valueA.toString().localeCompare(valueB.toString()); });
                var keys = Object.keys(data);
                keys.sort(function (keyA, keyB) { return sortFunc(data[keyA], data[keyB]); });
                var result = {};
                for (var i = 0; i < keys.length; ++i)
                    result[keys[i]] = data[keys[i]];
                return result;
            };
            Util.sortIndicesBy = function (values, field, ascending) {
                if (ascending === void 0) { ascending = true; }
                var one = ascending ? 1 : -1;
                var results = [];
                for (var i = 0; i < values.length; ++i)
                    results.push(i);
                results.sort(function (a, b) {
                    var aValue = Util.getProperty(values[a], field);
                    var bValue = Util.getProperty(values[b], field);
                    return (aValue > bValue) ? one : (aValue < bValue) ? -one : 0;
                });
                return results;
            };
            Util.bucketBy = function (values, field) {
                var buckets = {};
                for (var i = 0; i < values.length; ++i) {
                    var key = Util.getProperty(values[i], field);
                    if (!buckets[key])
                        buckets[key] = [];
                    buckets[key].push(values[i]);
                }
                return buckets;
            };
            Util.bucketByMap = function (values, field, mapFunc) {
                var buckets = Util.bucketBy(values, field);
                var mappedBuckets = {};
                for (var id in buckets)
                    mappedBuckets[id] = buckets[id].map(mapFunc);
                return mappedBuckets;
            };
            Util.bucketByRecursive = function (values) {
                var fields = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    fields[_i - 1] = arguments[_i];
                }
                if (fields.length == 0)
                    return undefined;
                var field = fields.shift();
                var buckets = Util.bucketBy(values, field);
                if (fields.length > 0) {
                    for (var id in buckets)
                        buckets[id] = Util.bucketByRecursive.apply(Util, [buckets[id]].concat(fields));
                }
                return buckets;
            };
            Util.bucketAssocBy = function (values, field) {
                var buckets = {};
                for (var i in values) {
                    var key = Util.getProperty(values[i], field);
                    if (!buckets[key])
                        buckets[key] = [];
                    buckets[key].push(values[i]);
                }
                return buckets;
            };
            Util.forEachRecursive = function (obj, func) {
                if (!obj || typeof obj != "object")
                    return;
                var workset = Object.keys(obj);
                while (workset.length > 0) {
                    var key = workset.pop();
                    var value = Util.getProperty(obj, key);
                    var type = value ? typeof value : "null";
                    switch (type) {
                        case "object":
                            if (kr3mCas.util.Dates.isDate(value)) {
                                func(key, value, obj);
                            }
                            else {
                                var subKeys = Object.keys(value);
                                for (var i = 0; i < subKeys.length; ++i)
                                    workset.push(key + "." + subKeys[i]);
                            }
                            break;
                        default:
                            func(key, value, obj);
                            break;
                    }
                }
            };
            Util.mergeAssocRecursive = function () {
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                var result = {};
                for (var i = 0; i < objects.length; ++i)
                    Util.forEachRecursive(objects[i], function (key, value) { return Util.setProperty(result, key, value); });
                return result;
            };
            Util.getFirstInstanceOf = function (values, cls, offset, skip) {
                if (offset === void 0) { offset = 0; }
                if (skip === void 0) { skip = 0; }
                for (var i = offset; i < values.length; ++i) {
                    if (values[i] instanceof cls) {
                        if (skip <= 0)
                            return values[i];
                        --skip;
                    }
                }
                return undefined;
            };
            Util.getFirstOfType = function (values, type, offset, skip) {
                if (offset === void 0) { offset = 0; }
                if (skip === void 0) { skip = 0; }
                for (var i = offset; i < values.length; ++i) {
                    if (typeof values[i] == type) {
                        if (skip <= 0)
                            return values[i];
                        --skip;
                    }
                }
                return undefined;
            };
            Util.getAllInstancesOf = function (values, cls, offset) {
                if (offset === void 0) { offset = 0; }
                var result = [];
                for (var i = offset; i < values.length; ++i) {
                    if (values[i] instanceof cls)
                        result.push(values[i]);
                }
                return result;
            };
            Util.getAllOfType = function (values, type, offset) {
                if (offset === void 0) { offset = 0; }
                var result = [];
                for (var i = offset; i < values.length; ++i) {
                    if (typeof values[i] == type)
                        result.push(values[i]);
                }
                return result;
            };
            Util.rearrange = function (values, newOffsets) {
                var result = [];
                for (var i = 0; i < newOffsets.length; ++i)
                    result.push(values[newOffsets[i]]);
                result = result.concat(values.slice(newOffsets.length));
                return result;
            };
            Util.fill = function () {
                var result = [];
                if (typeof arguments[1] == "function") {
                    for (var i = 0; i < arguments[0]; ++i)
                        result.push(arguments[1](i));
                }
                else {
                    for (var i = 0; i < arguments[0]; ++i)
                        result.push(arguments[1]);
                }
                return result;
            };
            return Util;
        }());
        util.Util = Util;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Json = (function () {
            function Json() {
            }
            Json.breakCircular = function (obj) {
                if (!obj || typeof obj != "object" || obj instanceof Date)
                    return obj;
                var found = [];
                var broken = [];
                var workset1 = [obj];
                while (workset1.length > 0) {
                    var current = workset1.shift();
                    found.push(current);
                    for (var key in current) {
                        if (typeof current[key] != "object" || current[key] instanceof Date)
                            continue;
                        if (found.indexOf(current[key]) >= 0)
                            broken.push(current[key]);
                        else
                            workset1.push(current[key]);
                    }
                }
                if (broken.length == 0)
                    return obj;
                var clone = typeof obj["length"] == "number" ? [] : {};
                var workset2 = [{ prefix: "", value: obj }];
                while (workset2.length > 0) {
                    var current = workset2.shift();
                    for (var key in current.value) {
                        if (broken.indexOf(current.value[key]) >= 0) {
                            util.Util.setProperty(clone, current.prefix + key, "[CYCLICAL]");
                            continue;
                        }
                        if (typeof current.value[key] != "object" || current.value[key] instanceof Date)
                            util.Util.setProperty(clone, current.prefix + key, current.value[key]);
                        else
                            workset2.push({ value: current.value[key], prefix: current.prefix + key + "." });
                    }
                }
                return clone;
            };
            Json.encode = function (obj, breakCircular) {
                if (breakCircular === void 0) { breakCircular = false; }
                if (breakCircular)
                    obj = Json.breakCircular(obj);
                return JSON.stringify(obj);
            };
            Json.encodeNice = function (obj, padding, breakCircular) {
                if (padding === void 0) { padding = ""; }
                if (breakCircular === void 0) { breakCircular = false; }
                if (breakCircular)
                    obj = Json.breakCircular(obj);
                if (typeof obj == "object" && !(obj instanceof Date) && obj !== null) {
                    var json = "";
                    if (typeof obj.length == "number") {
                        if (obj.length === 0)
                            return padding + "[]";
                        json += padding + "[";
                        for (var i = 0; i < obj.length; ++i)
                            json += "\n" + Json.encodeNice(obj[i], padding + "\t") + ",";
                        if (obj.length > 0)
                            json = json.slice(0, -1);
                        json += "\n" + padding + "]";
                    }
                    else {
                        json += padding + "{";
                        for (var ind in obj) {
                            if (typeof obj[ind] == "object" && !(obj instanceof Date) && obj[ind] !== null)
                                json += "\n\t" + padding + "\"" + ind + "\":\n" + Json.encodeNice(obj[ind], padding + "\t") + ",";
                            else
                                json += "\n\t" + padding + "\"" + ind + "\":" + Json.encode(obj[ind]) + ",";
                        }
                        if (json.slice(-1) == ",")
                            json = json.slice(0, -1);
                        json += "\n" + padding + "}";
                    }
                    return json;
                }
                else {
                    return padding + Json.encode(obj);
                }
            };
            Json.escapeSpecialChars = function (json) {
                return json
                    .replace(/[\u0080-\uffff]/g, function (char) { return "\\u" + ("0000" + char.charCodeAt(0)
                    .toString(16))
                    .slice(-4); });
            };
            Json.reviver = function (key, computed) {
                if (typeof computed == "string") {
                    var date = kr3mCas.util.Dates.getDateFromDateTimeString(computed);
                    if (date)
                        return date;
                }
                return computed;
            };
            Json.isJSON = function (text) {
                if (!text)
                    return false;
                try {
                    JSON.parse(text);
                    return true;
                }
                catch (e) {
                    return false;
                }
            };
            Json.decode = function (json) {
                if (!json)
                    return null;
                try {
                    return JSON.parse(json, Json.reviver);
                }
                catch (e) {
                    return null;
                }
            };
            Json.mergeAssoc = function () {
                var jsons = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    jsons[_i] = arguments[_i];
                }
                var objs = jsons.map(function (j) { return Json.decode(j); });
                var result = util.Util.mergeAssoc.apply(util.Util, objs);
                return Json.encode(result);
            };
            return Json;
        }());
        util.Json = Json;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Log = (function () {
            function Log() {
            }
            Log.logError = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                if (!Log.enabled || typeof console == "undefined" || typeof console.error == "undefined")
                    return;
                if (values.length == 1 && values[0] instanceof Error) {
                    if (typeof values[0].stack != "undefined" && typeof window["chrome"] == "undefined")
                        throw values[0].stack;
                    else
                        throw values[0];
                }
                else {
                    try {
                        console.error.apply(console, values);
                    }
                    catch (e) {
                        console.error(values);
                    }
                }
            };
            Log.log = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                if (!Log.enabled || typeof console == "undefined" || typeof console.log == "undefined")
                    return;
                try {
                    console.log.apply(console, values);
                }
                catch (e) {
                    console.log(values);
                }
            };
            Log.logWarning = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                if (!Log.enabled || typeof console == "undefined" || typeof console.warn == "undefined")
                    return;
                if (values.length == 1 && values[0] instanceof Error) {
                    if (typeof values[0].stack != "undefined" && typeof window["chrome"] == "undefined")
                        throw values[0].stack;
                    else
                        throw values[0];
                }
                else {
                    try {
                        console.warn.apply(console, values);
                    }
                    catch (e) {
                        console.warn(values);
                    }
                }
            };
            Log.logDebug = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
            };
            Log.logVerbose = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
            };
            Log.dump = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
            };
            Log.stackTrace = function (asError, skipLines) {
                if (asError === void 0) { asError = false; }
                if (skipLines === void 0) { skipLines = 0; }
                var e = new Error();
                var stack = e["stack"].split(/\s+at\s+/).slice(skipLines + 1);
                return stack.join("\n");
            };
            Log.logStackTrace = function (asError, skipLines) {
                if (asError === void 0) { asError = false; }
                if (skipLines === void 0) { skipLines = 0; }
                Log.log(Log.stackTrace(asError));
            };
            Log.enabled = true;
            return Log;
        }());
        util.Log = Log;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        function trySafe(func) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            try {
                func.apply(void 0, params);
            }
            catch (e) {
                util.Log.logError(e);
            }
        }
        util.trySafe = trySafe;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
function trySafe(func) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    try {
        func.apply(void 0, params);
    }
    catch (e) {
        kr3mCas.util.Log.logError(e);
    }
}
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var Delayed = (function () {
            function Delayed() {
                this.done = false;
                this.pendingCalls = [];
            }
            Delayed.prototype.execute = function () {
                for (var i = 0; i < this.pendingCalls.length; ++i)
                    kr3mCas.util.trySafe(this.pendingCalls[i].func);
                this.pendingCalls = [];
                this.done = true;
            };
            Delayed.prototype.call = function (func, exclusiveKey, exclusivePriority) {
                if (exclusivePriority === void 0) { exclusivePriority = 0; }
                if (this.done) {
                    func();
                    return;
                }
                if (exclusiveKey) {
                    for (var i = 0; i < this.pendingCalls.length; ++i) {
                        if (this.pendingCalls[i].key == exclusiveKey) {
                            if (this.pendingCalls[i].priority >= exclusivePriority)
                                return;
                            else
                                this.pendingCalls.splice(i--, 1);
                        }
                    }
                }
                this.pendingCalls.push({ func: func, key: exclusiveKey, priority: exclusivePriority });
            };
            Delayed.prototype.isDone = function () {
                return this.done;
            };
            Delayed.prototype.reset = function (flush) {
                if (flush === void 0) { flush = false; }
                this.done = false;
                if (flush)
                    this.pendingCalls = [];
            };
            return Delayed;
        }());
        async.Delayed = Delayed;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var Loop = (function () {
            function Loop() {
            }
            Loop.loop = function (loopFunc, callback) {
                var counter = 0;
                var i = -1;
                var innerHelper = function (again) {
                    if (again || again === undefined) {
                        ++counter;
                        if (counter < Loop.MAX_SYNC_ITERATIONS)
                            return loopFunc(innerHelper, ++i);
                        counter = 0;
                        setTimeout(innerHelper, 0);
                        return;
                    }
                    callback && callback();
                };
                innerHelper(true);
            };
            Loop.times = function (count, loopFunc, callback, parallelCount) {
                if (parallelCount === void 0) { parallelCount = 1; }
                if (count < 1)
                    return callback && callback();
                var i = 0;
                var runningCount = Math.min(parallelCount, count);
                var runningCountInitial = runningCount;
                var innerHelpers = [];
                var counters = [];
                var innerHelper = function (j) {
                    --runningCount;
                    if (i < count) {
                        ++runningCount;
                        ++counters[j];
                        var myI = i++;
                        if (counters[j] < Loop.MAX_SYNC_ITERATIONS)
                            return loopFunc(innerHelpers[j], myI);
                        counters[j] = 0;
                        setTimeout(function () { return loopFunc(innerHelpers[j], myI); }, 0);
                    }
                    else if (callback && runningCount == 0) {
                        callback();
                    }
                };
                for (var j = 0; j < runningCountInitial; ++j) {
                    counters[j] = 0;
                    innerHelpers[j] = innerHelper.bind(null, j);
                    innerHelpers[j]();
                }
            };
            Loop.forEach = function (values, loopFunc, callback, parallelCount) {
                if (parallelCount === void 0) { parallelCount = 1; }
                if (!values || values.length == 0)
                    return callback && callback();
                var i = 0;
                var runningCount = Math.min(parallelCount, values.length);
                var runningCountInitial = runningCount;
                var innerHelpers = [];
                var counters = [];
                var innerHelper = function (j) {
                    --runningCount;
                    if (i < values.length) {
                        ++runningCount;
                        ++counters[j];
                        var myI = i++;
                        if (counters[j] < Loop.MAX_SYNC_ITERATIONS)
                            return loopFunc(values[myI], innerHelpers[j], myI);
                        counters[j] = 0;
                        setTimeout(function () { return loopFunc(values[myI], innerHelpers[j], myI); }, 0);
                    }
                    else if (callback && runningCount == 0) {
                        callback();
                    }
                };
                for (var j = 0; j < runningCountInitial; ++j) {
                    counters[j] = 0;
                    innerHelpers[j] = innerHelper.bind(null, j);
                    innerHelpers[j]();
                }
            };
            Loop.map = function (values, func, callback, parallelCount) {
                if (parallelCount === void 0) { parallelCount = 1; }
                var results = [];
                Loop.forEach(values, function (value, next, i) {
                    func(value, function (newValue) { return results[i] = newValue; }, i);
                }, function () { return callback(results); }, parallelCount);
            };
            Loop.forEachAssoc = function (valuesMap, loopFunc, callback, parallelCount) {
                if (parallelCount === void 0) { parallelCount = 1; }
                if (!valuesMap)
                    return callback && callback();
                var keys = Object.keys(valuesMap);
                kr3mCas.async.Loop.forEach(keys, function (key, next) {
                    loopFunc(key, valuesMap[key], next);
                }, callback, parallelCount);
            };
            Loop.forEachBatch = function (values, batchSize, loopFunc, callback, parallelCount) {
                if (parallelCount === void 0) { parallelCount = 1; }
                if (!values || values.length == 0)
                    return callback && callback();
                var i = 0;
                var runningCount = Math.min(parallelCount, Math.ceil(values.length / batchSize));
                var runningCountInitial = runningCount;
                var innerHelpers = [];
                var counters = [];
                var innerHelper = function (j) {
                    --runningCount;
                    if (i < values.length) {
                        ++runningCount;
                        ++counters[j];
                        var myI = i;
                        var batch = values.slice(i, i + batchSize);
                        i += batch.length;
                        if (counters[j] < Loop.MAX_SYNC_ITERATIONS)
                            return loopFunc(batch, innerHelpers[j], myI);
                        counters[j] = 0;
                        setTimeout(function () { return loopFunc(batch, innerHelpers[j], myI); }, 0);
                    }
                    else if (callback && runningCount == 0) {
                        callback();
                    }
                };
                for (var j = 0; j < runningCountInitial; ++j) {
                    counters[j] = 0;
                    innerHelpers[j] = innerHelper.bind(null, j);
                    innerHelpers[j]();
                }
            };
            Loop.MAX_SYNC_ITERATIONS = 200;
            return Loop;
        }());
        async.Loop = Loop;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var Timeout = (function () {
            function Timeout() {
            }
            Timeout.call = function (timeout, callFunc, successCallback, timeoutCallback) {
                timeoutCallback = timeoutCallback || successCallback;
                var hadTimeout = false;
                var timer;
                var helper = function () {
                    if (!hadTimeout) {
                        clearTimeout(timer);
                        successCallback.apply(null, arguments);
                    }
                };
                timer = setTimeout(function () {
                    hadTimeout = true;
                    timeoutCallback();
                }, timeout);
                try {
                    callFunc(helper);
                }
                catch (ex) {
                    kr3mCas.util.Log.logDebug(ex.toString());
                    hadTimeout = true;
                    clearTimeout(timer);
                    timeoutCallback();
                }
            };
            return Timeout;
        }());
        async.Timeout = Timeout;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var UrlParts = (function () {
            function UrlParts() {
                this.protocol = "";
                this.user = "";
                this.password = "";
                this.domain = "";
                this.port = "";
                this.resource = "";
                this.query = "";
                this.hash = "";
            }
            return UrlParts;
        }());
        util.UrlParts = UrlParts;
        var ArrayHandling;
        (function (ArrayHandling) {
            ArrayHandling[ArrayHandling["ToString"] = 0] = "ToString";
            ArrayHandling[ArrayHandling["Repeat"] = 1] = "Repeat";
            ArrayHandling[ArrayHandling["RepeatBrackets"] = 2] = "RepeatBrackets";
        })(ArrayHandling = util.ArrayHandling || (util.ArrayHandling = {}));
        var Url = (function () {
            function Url() {
            }
            Url.mergeResource = function (a, b) {
                if (!a)
                    return b;
                if (!b)
                    return a;
                if (b.charAt(0) == "/")
                    return b;
                var parts = a.split("/");
                if (parts.length == 0)
                    return b;
                if (parts.length > 0)
                    parts.pop();
                parts = parts.concat(b.split("/"));
                for (var i = 1; i < parts.length - 1; ++i) {
                    if (!parts[i])
                        parts.splice(i--, 1);
                }
                for (var i = 1; i < parts.length; ++i) {
                    if (parts[i] == "..")
                        parts.splice(--i, 2);
                }
                return parts.join("/");
            };
            Url.splitQuery = function (query, ah) {
                var result = {};
                if (!query)
                    return result;
                var parts = query.split("&");
                switch (ah) {
                    case ArrayHandling.ToString:
                        for (var i = 0; i < parts.length; ++i) {
                            var subParts = parts[i].split("=");
                            var name = subParts[0];
                            var value = decodeURIComponent(subParts[1]);
                            result[name] = value;
                        }
                        break;
                    case ArrayHandling.Repeat:
                        for (var i = 0; i < parts.length; ++i) {
                            var subParts = parts[i].split("=");
                            var name = subParts[0];
                            var value = decodeURIComponent(subParts[1]);
                            if (result[name] === undefined)
                                result[name] = value;
                            else if (typeof result[name] === "string")
                                result[name] = [result[name], value];
                            else
                                result[name].push(value);
                        }
                        break;
                    case ArrayHandling.RepeatBrackets:
                        for (var i = 0; i < parts.length; ++i) {
                            var subParts = parts[i].split("=");
                            var name = subParts[0];
                            var value = decodeURIComponent(subParts[1]);
                            if (name.slice(-2) == "[]") {
                                name = name.slice(0, -2);
                                if (!result[name])
                                    result[name] = [];
                                result[name].push(value);
                            }
                            else {
                                result[name] = value;
                            }
                        }
                        break;
                }
                return result;
            };
            Url.joinQuery = function (params, ah) {
                var parts = [];
                for (var name in params) {
                    if (Array.isArray(params[name])) {
                        switch (ah) {
                            case ArrayHandling.ToString:
                                parts.push(name + "=" + encodeURIComponent(params[name].toString()));
                                break;
                            case ArrayHandling.Repeat:
                                for (var i = 0; i < params[name].length; ++i)
                                    parts.push(name + "=" + encodeURIComponent(params[name][i]));
                                break;
                            case ArrayHandling.RepeatBrackets:
                                for (var i = 0; i < params[name].length; ++i)
                                    parts.push(name + "[]=" + encodeURIComponent(params[name][i]));
                                break;
                        }
                    }
                    else if (params[name] === undefined || params[name] === null) {
                        parts.push(name + "=");
                    }
                    else {
                        parts.push(name + "=" + encodeURIComponent(params[name].toString()));
                    }
                }
                return parts.join("&");
            };
            Url.mergeQuery = function (a, b, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                a = a || "";
                b = b || "";
                if (a.charAt(0) == "?")
                    a = a.slice(1);
                if (b.charAt(0) == "?")
                    b = b.slice(1);
                var aParams = Url.splitQuery(a, ah);
                var bParams = Url.splitQuery(b, ah);
                for (var i in bParams)
                    aParams[i] = bParams[i];
                return Url.joinQuery(aParams, ah);
            };
            Url.mergeHash = function (a, b) {
                a = a || "";
                b = b || "";
                if (a.charAt(0) == "#")
                    a = a.slice(1);
                if (b.charAt(0) == "#")
                    b = b.slice(1);
                var params = {};
                var aParts = a.split("&");
                var aId = "";
                for (var i = 0; i < aParts.length; ++i) {
                    var subParts = aParts[i].split("=");
                    if (subParts.length == 1)
                        aId = aId || subParts[0];
                    else if (subParts.length == 2)
                        params[subParts[0]] = subParts[1];
                }
                var bParts = b.split("&");
                var bId = "";
                for (var i = 0; i < bParts.length; ++i) {
                    var subParts = bParts[i].split("=");
                    if (subParts.length == 1)
                        bId = bId || subParts[0];
                    else if (subParts.length == 2)
                        params[subParts[0]] = subParts[1];
                }
                var id = aId || bId || "";
                var paramsString = Url.joinQuery(params, ArrayHandling.ToString);
                return paramsString ? id + "&" + paramsString : id;
            };
            Url.merge = function () {
                var urls = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    urls[_i] = arguments[_i];
                }
                var result = new UrlParts();
                urls = urls.filter(function (url) { return url; });
                for (var i = 0; i < urls.length; ++i) {
                    var parts = Url.parse(urls[i].trim());
                    result.protocol = parts.protocol || result.protocol;
                    if (result.user) {
                        result.user = parts.user;
                        result.password = result.password;
                    }
                    if (parts.domain) {
                        result.domain = parts.domain;
                        result.port = parts.port;
                        result.resource = parts.resource;
                    }
                    else {
                        result.resource = Url.mergeResource(result.resource, parts.resource);
                    }
                    result.query = Url.mergeQuery(result.query, parts.query);
                    result.hash = Url.mergeHash(result.hash, parts.hash);
                }
                return Url.format(result);
            };
            Url.getPath = function (parts) {
                var path = parts.resource || "/";
                if (parts.query)
                    path += "?" + parts.query;
                if (parts.hash)
                    path += "#" + parts.hash;
                return path;
            };
            Url.parse = function (url) {
                var parts = new UrlParts();
                if (!url)
                    return parts;
                var isFile = url.slice(0, 8) == "file:///";
                if (isFile)
                    url = url.slice(7);
                var parsed = util.StringEx.captureNamed(url, kr3mCas.REGEX_URL, kr3mCas.REGEX_URL_GROUPS);
                if (isFile)
                    parsed["protocol"] = "file";
                for (var i in parsed) {
                    if (parsed[i] !== undefined)
                        parts[i] = parsed[i];
                }
                return parts;
            };
            Url.format = function (parts) {
                var url = "";
                if (parts.protocol)
                    url += parts.protocol + "://";
                if (parts.user)
                    url += parts.user + ":" + parts.password + "@";
                if (parts.domain) {
                    url += parts.domain;
                    if (parts.port)
                        url += ":" + parts.port;
                }
                if (parts.resource) {
                    if (parts.domain && parts.resource.charAt(0) != "/")
                        url += "/";
                    url += parts.resource;
                }
                if (parts.query)
                    url += "?" + parts.query;
                if (parts.hash)
                    url += "#" + parts.hash;
                return url;
            };
            Url.getResourceFromUrl = function (url) {
                return Url.parse(url).resource;
            };
            Url.getQueryParams = function (url, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                var parts = Url.parse(url);
                var params = Url.splitQuery(parts.query, ah);
                return params;
            };
            Url.setQueryParams = function (url, params, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                var parts = Url.parse(url);
                parts.query = Url.joinQuery(params, ah);
                return Url.format(parts);
            };
            Url.addParameter = function (url, key, value, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                var params = Url.getQueryParams(url, ah);
                params[key] = value;
                return Url.setQueryParams(url, params, ah);
            };
            Url.addParameters = function (url, params, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                var old = Url.getQueryParams(url, ah);
                for (var i in params)
                    old[i] = params[i];
                return Url.setQueryParams(url, old, ah);
            };
            Url.removeParameter = function (url, key, ah) {
                if (ah === void 0) { ah = ArrayHandling.ToString; }
                var params = Url.getQueryParams(url, ah);
                if (typeof params[key] == "undefined")
                    return url;
                delete params[key];
                return Url.setQueryParams(url, params, ah);
            };
            Url.getMailToUrl = function (to, subject, body, cc, bcc) {
                var receivers = typeof to == "string" ? to : to.join(",");
                var headers = [];
                if (subject)
                    headers.push("subject=" + encodeURIComponent(subject));
                if (body)
                    headers.push("body=" + encodeURIComponent(body));
                if (cc !== undefined)
                    headers.push("cc=" + encodeURIComponent(typeof cc == "string" ? cc : cc.join(",")));
                if (bcc != undefined)
                    headers.push("bcc=" + encodeURIComponent(typeof bcc == "string" ? bcc : bcc.join(",")));
                var url = "mailto:" + receivers;
                if (headers.length > 0)
                    url += "?" + headers.join("&");
                return url;
            };
            return Url;
        }());
        util.Url = Url;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var xml;
    (function (xml_1) {
        var Parser = (function () {
            function Parser() {
                this.S = { " ": true, "\n": true, "\r": true, "\t": true };
                this.NW = { " ": true, "\n": true, "\t": true, "<": true, ">": true, "=": true, "\"": true, "'": true, "\r": true };
                this.ESC = { amp: "&", lt: "<", gt: ">", quot: "\"" };
                this.styleAttibutesPattern = /^xs[a-z]+:/;
                this.stripStyleAttributes = true;
            }
            Parser.prototype.eat = function () {
                return this.rawXml.charAt(this.i++);
            };
            Parser.prototype.skipWS = function () {
                while (this.S[this.rawXml.charAt(this.i)])
                    ++this.i;
            };
            Parser.prototype.skipHeader = function () {
                var t = this.eat();
                while (t && t != "<")
                    t = this.eat();
                var found = false;
                if (this.rawXml.slice(this.i, this.i + 4) == "?xml") {
                    var t = this.eat();
                    while (t && t != "<")
                        t = this.eat();
                    found = true;
                }
                --this.i;
                return found;
            };
            Parser.prototype.readWord = function () {
                this.skipWS();
                var start = this.i;
                while (!this.NW[this.rawXml.charAt(this.i)])
                    ++this.i;
                return this.rawXml.slice(start, this.i);
            };
            Parser.prototype.readTill = function (token) {
                var start = this.i;
                var f = token.charAt(0);
                while (1) {
                    var t = this.eat();
                    if (!t)
                        break;
                    if (t == f) {
                        if (this.rawXml.slice(this.i - 1, this.i - 1 + token.length) == token)
                            break;
                    }
                }
                this.i += token.length - 1;
                return this.rawXml.slice(start, this.i - token.length);
            };
            Parser.prototype.readQuoted = function () {
                this.skipWS();
                var q = this.eat();
                return this.readTill(q);
            };
            Parser.prototype.readAttributes = function () {
                var attributes = {};
                while (true) {
                    this.skipWS();
                    var t = this.rawXml.charAt(this.i);
                    if (t == ">" || t == "/")
                        break;
                    var name = this.readWord();
                    this.skipWS();
                    ++this.i;
                    var value = this.readQuoted();
                    if (!this.stripStyleAttributes || !this.styleAttibutesPattern.test(name))
                        attributes[name] = value;
                }
                return attributes;
            };
            Parser.prototype.isNull = function (node) {
                for (var i in node._attributes) {
                    if ((i == "nil" || i.slice(-4) == ":nil") && node._attributes[i] == "true")
                        return true;
                }
                return false;
            };
            Parser.prototype.isPrimitive = function (node) {
                for (var i in node._attributes)
                    return false;
                for (var i in node) {
                    if (i.charAt(0) != "_")
                        return false;
                }
                return true;
            };
            Parser.prototype.fillChildNodes = function (node, nodes) {
                var temp = {};
                for (var i = 0; i < nodes.length; ++i) {
                    if (!temp[nodes[i]._tag])
                        temp[nodes[i]._tag] = [];
                    if (this.isNull(nodes[i]))
                        temp[nodes[i]._tag].push(null);
                    else if (this.isPrimitive(nodes[i]))
                        temp[nodes[i]._tag].push(nodes[i]._data);
                    else
                        temp[nodes[i]._tag].push(nodes[i]);
                }
                for (var tag in temp)
                    node[tag] = (temp[tag].length == 1) ? temp[tag][0] : temp[tag];
            };
            Parser.prototype.readNode = function () {
                var start = this.i;
                this.skipWS();
                ++this.i;
                var node = {};
                _a = this.readWord().match(/(?:([^\:]+)\:)?([^\:]+)/), node._ns = _a[1], node._tag = _a[2];
                if (node._tag.slice(-1) == "/") {
                    node._tag = node._tag.slice(0, -1);
                    this.i += 1;
                    return node;
                }
                node._attributes = this.readAttributes();
                var t = this.eat();
                if (t == "/") {
                    ++this.i;
                    return node;
                }
                var _b = this.readContent(), data = _b[0], nodes = _b[1];
                node._data = data.trim();
                this.fillChildNodes(node, nodes);
                this.skipWS();
                var skip = node._tag.length + (node._ns ? node._ns.length + 4 : 3);
                this.i += skip;
                return node;
                var _a;
            };
            Parser.prototype.readData = function () {
                this.i += 9;
                var start = this.i;
                var l = this.rawXml.length;
                while (this.i < l) {
                    while (this.i < l && this.rawXml.charAt(this.i) != "]")
                        ++this.i;
                    if (this.rawXml.slice(this.i, this.i + 3) == "]]>") {
                        this.i += 3;
                        return this.rawXml.slice(start, this.i - 3);
                    }
                    ++this.i;
                }
                throw new Error("invalid xml syntax - CDATA terminator expected");
            };
            Parser.prototype.unescape = function (escaped) {
                var unescaped = this.ESC[escaped];
                if (unescaped)
                    return unescaped;
                if (escaped.charAt(0) == "#")
                    return String.fromCharCode(parseInt(escaped.slice(1), 8));
                return String.fromCharCode(parseInt(escaped));
            };
            Parser.prototype.skipComment = function () {
                this.readTill("-->");
            };
            Parser.prototype.readContent = function () {
                this.skipWS();
                var content = "";
                var nodes = [];
                while (1) {
                    var t = this.eat();
                    if (!t)
                        break;
                    if (t == "<") {
                        t = this.eat();
                        this.i -= 2;
                        if (t == "!") {
                            if (this.rawXml.slice(this.i, this.i + 4) == "<!--")
                                this.skipComment();
                            else
                                content += this.readData();
                        }
                        else if (t == "/") {
                            break;
                        }
                        else {
                            nodes.push(this.readNode());
                        }
                    }
                    else if (t == "&") {
                        var escaped = this.readTill(";");
                        content += this.unescape(escaped);
                    }
                    else {
                        content += t;
                    }
                }
                return [content, nodes];
            };
            Parser.prototype.parse = function (rawXml) {
                this.rawXml = rawXml;
                this.i = 0;
                if (!this.skipHeader() && this.i > 3)
                    return undefined;
                var _a = this.readContent(), content = _a[0], nodes = _a[1];
                return nodes.length == 1 ? nodes[0] : undefined;
            };
            return Parser;
        }());
        xml_1.Parser = Parser;
        function parseString(rawXml) {
            var parser = new kr3mCas.xml.Parser();
            return parser.parse(rawXml);
        }
        xml_1.parseString = parseString;
        function parseXml(xml) {
            var rawXml = new XMLSerializer().serializeToString(xml.documentElement);
            return parseString(rawXml);
        }
        xml_1.parseXml = parseXml;
    })(xml = kr3mCas.xml || (kr3mCas.xml = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Ajax = (function () {
            function Ajax() {
            }
            Ajax.getTypeFromUrl = function (url) {
                var resource = util.Url.getResourceFromUrl(url);
                for (var i = 0; i < Ajax.typesByExtension.length; ++i) {
                    var item = Ajax.typesByExtension[i];
                    if (item.pattern.test(resource))
                        return item.type;
                }
                return undefined;
            };
            Ajax.getXMLHttpRequestObject = function () {
                var ref = null;
                if (window.XMLHttpRequest)
                    ref = new XMLHttpRequest();
                else if (window.ActiveXObject)
                    ref = new ActiveXObject("MSXML2.XMLHTTP.3.0");
                return ref;
            };
            Ajax.responseHandler = function (request, callback, type, errorCallback) {
                if (request.readyState != 4)
                    return;
                var status = request.status;
                if (status >= 200 && status < 300) {
                    if (callback) {
                        try {
                            var headers = {};
                            var headerStr = request.getAllResponseHeaders();
                            if (headerStr && (headerStr.length > 0)) {
                                var headerPairs = headerStr.split('\u000d\u000a');
                                for (var i = 0; i < headerPairs.length; ++i) {
                                    var sep = headerPairs[i].indexOf('\u003a\u0020');
                                    if (sep > 0)
                                        headers[headerPairs[i].substr(0, sep)] = headerPairs[i].substr(sep + 2);
                                }
                            }
                            switch (type) {
                                case "json":
                                    callback(util.Json.decode(request.responseText), headers);
                                    break;
                                case "xml":
                                    if (request.responseXML)
                                        return callback(request.responseXML, headers);
                                    if (DOMParser) {
                                        var parser = new DOMParser();
                                        var xml = parser.parseFromString(request.responseText, "text/xml");
                                        return callback(xml, headers);
                                    }
                                    util.Log.logError("error while loading xml file");
                                    callback(null, headers);
                                    break;
                                case "text":
                                    callback(request.responseText, headers);
                                    break;
                                case "binary":
                                    callback(request.response, headers);
                                    break;
                                case "image":
                                    callback(request.response, headers);
                                    break;
                                case "arraybuffer":
                                    callback(request.response, headers);
                                    break;
                                case "xml->json":
                                    callback(kr3mCas.xml.parseString(request.responseText), headers);
                                    break;
                            }
                        }
                        catch (e) {
                            util.Log.logError(e);
                        }
                    }
                }
                else if (errorCallback) {
                    errorCallback(status);
                }
            };
            Ajax.adjustMimeType = function (request, url, desiredType) {
                if (request instanceof XMLHttpRequest) {
                    switch (desiredType) {
                        case "json":
                            request.overrideMimeType("application/json");
                            break;
                        case "text":
                            request.overrideMimeType("text/plain");
                            break;
                    }
                }
            };
            Ajax.call = function (url, callback, type, errorCallback) {
                type = type || Ajax.getTypeFromUrl(url) || "json";
                var request = Ajax.getXMLHttpRequestObject();
                Ajax.adjustMimeType(request, url, type);
                request.onreadystatechange = Ajax.responseHandler.bind(null, request, callback, type, errorCallback);
                request.open("GET", url, true);
                if (type == "arraybuffer")
                    request.responseType = type;
                request.send();
                return request;
            };
            Ajax.callTimeout = function (url, successCallback, timeoutCallback, timeout, type, errorCallback) {
                if (timeout <= 0) {
                    Ajax.call(url, successCallback, type, errorCallback);
                    return;
                }
                var xhr = null;
                kr3mCas.async.Timeout.call(timeout, function (callback) {
                    xhr = Ajax.call(url, callback, type, errorCallback);
                }, successCallback, function () {
                    xhr.abort();
                    timeoutCallback();
                });
            };
            Ajax.postCall = function (url, callback, data, type, errorCallback) {
                if (data === void 0) { data = {}; }
                type = type || Ajax.getTypeFromUrl(url) || "json";
                var request = Ajax.getXMLHttpRequestObject();
                var encoded = {};
                for (var i in data)
                    encoded[i] = encodeURIComponent(data[i]);
                Ajax.adjustMimeType(request, url, type);
                var params = util.StringEx.joinAssoc(encoded);
                request.onreadystatechange = Ajax.responseHandler.bind(null, request, callback, type, errorCallback);
                request.open("POST", url, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(params);
                return request;
            };
            Ajax.postCallTimeout = function (url, successCallback, timeoutCallback, timeout, data, type) {
                if (data === void 0) { data = {}; }
                if (timeout <= 0) {
                    Ajax.postCall(url, successCallback, data, type);
                    return;
                }
                var xhr = null;
                kr3mCas.async.Timeout.call(timeout, function (callback) {
                    xhr = Ajax.postCall(url, callback, data, type);
                }, successCallback, function () {
                    xhr.abort();
                    timeoutCallback();
                });
            };
            Ajax.callService = function (method, data, callback, type, errorCallback) {
                if (data === void 0) { data = {}; }
                var params = "method=" + method + "&payload=" + encodeURIComponent(util.Json.encode(data));
                if (Ajax.serviceUrl)
                    var url = Ajax.serviceUrl + "?_=" + (new Date()).getTime();
                else
                    var url = util.Browser.getBaseUrl() + "gateway?_=" + (new Date()).getTime();
                type = type || Ajax.getTypeFromUrl(url) || "json";
                var request = Ajax.getXMLHttpRequestObject();
                Ajax.adjustMimeType(request, url, type);
                request.onreadystatechange = Ajax.responseHandler.bind(null, request, callback, type, errorCallback);
                request.open("POST", url, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(params);
                return request;
            };
            Ajax.callServiceUnique = function (method, data, callback, type, errorCallback) {
                if (data === void 0) { data = {}; }
                var oldXhr = Ajax.pendingXhr[method];
                if (oldXhr)
                    oldXhr.abort();
                var xhr = Ajax.callService(method, data, function (response, headers) {
                    delete Ajax.pendingXhr[method];
                    callback && callback(response, headers);
                }, null, errorCallback);
                Ajax.pendingXhr[method] = xhr;
            };
            Ajax.callServiceTimeout = function (method, data, successCallback, timeoutCallback, timeout, type, errorCallback) {
                if (timeout <= 0) {
                    Ajax.callService(method, data, successCallback, type, errorCallback);
                    return;
                }
                var xhr = null;
                kr3mCas.async.Timeout.call(timeout, function (callback) {
                    xhr = Ajax.callService(method, data, callback, type, errorCallback);
                }, successCallback, function () {
                    xhr.abort();
                    timeoutCallback();
                });
            };
            Ajax.pendingXhr = {};
            Ajax.typesByExtension = [
                { pattern: /\.bmp$/i, type: "image" },
                { pattern: /\.css$/i, type: "text" },
                { pattern: /\.fnt$/i, type: "xml->json" },
                { pattern: /\.gif$/i, type: "image" },
                { pattern: /\.html$/i, type: "text" },
                { pattern: /\.jpeg$/i, type: "image" },
                { pattern: /\.jpg$/i, type: "image" },
                { pattern: /\.js$/i, type: "text" },
                { pattern: /\.json$/i, type: "json" },
                { pattern: /\.md5anim$/i, type: "text" },
                { pattern: /\.md5mesh$/i, type: "text" },
                { pattern: /\.mp3$/i, type: "binary" },
                { pattern: /\.ogg$/i, type: "binary" },
                { pattern: /\.php$/i, type: "json" },
                { pattern: /\.png$/i, type: "image" },
                { pattern: /\.txt$/i, type: "text" },
                { pattern: /\.xml$/i, type: "xml" }
            ];
            return Ajax;
        }());
        util.Ajax = Ajax;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Device = (function () {
            function Device(globals) {
                globals = globals || {};
                globals.document = globals.document || document;
                globals.navigator = globals.navigator || navigator;
                globals.window = globals.window || window;
                try {
                    globals.localStorage = globals.localStorage || localStorage;
                }
                catch (e) {
                }
                this.checkOS(globals);
                this.checkBrowser(globals);
                this.checkDevice(globals);
                this.checkFeatures(globals);
                this.checkAudio(globals);
                this.checkTablet(globals);
                this.mobile = !this.desktop && !this.tablet;
            }
            Device.getInstance = function () {
                var self = Device;
                if (typeof self.instance == "undefined")
                    self.instance = new Device();
                return self.instance;
            };
            Device.prototype.canPlayAudio = function (type) {
                switch (type) {
                    case "ogg":
                        return this.ogg;
                    case "opus":
                        return this.opus;
                    case "mp3":
                        return this.mp3;
                    case "wav":
                        return this.wav;
                    case "m4a":
                        return this.m4a;
                    case "webm":
                        return this.webm;
                }
                return false;
            };
            Device.prototype.checkOS = function (globals) {
                var ua = globals.navigator.userAgent;
                if (/Playstation Vita/.test(ua)) {
                    this.vita = true;
                    this.desktop = false;
                }
                else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
                    this.kindle = true;
                    this.desktop = false;
                }
                else if (/Android/.test(ua)) {
                    this.android = true;
                    this.desktop = false;
                    this.checkAndroidVersion(globals);
                }
                else if (/CrOS/.test(ua)) {
                    this.chromeOS = true;
                }
                else if (/iP[ao]d|iPhone/i.test(ua)) {
                    this.iOS = true;
                    this.desktop = false;
                    var osVersionMatch = ua.match(/OS (\d+)_/i);
                    if (osVersionMatch)
                        this.iOSVersion = parseInt(osVersionMatch[1], 10);
                    if (/OS 11_/i.test(ua))
                        this.iOS11 = true;
                    else if (/OS 10_/i.test(ua))
                        this.iOS10 = true;
                    else if (/OS 9_/i.test(ua))
                        this.iOS9 = true;
                }
                else if (/Linux/.test(ua)) {
                    this.linux = true;
                }
                else if (/Mac OS/.test(ua)) {
                    this.macOS = true;
                }
                else if (/Windows/.test(ua)) {
                    this.windows = true;
                    if (/Windows Phone/i.test(ua))
                        this.windowsPhone = true;
                }
                if (this.windows || this.macOS || (this.linux && !this.silk) || this.chromeOS)
                    this.desktop = true;
                if (this.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua))))
                    this.desktop = false;
            };
            Device.prototype.checkFeatures = function (globals) {
                this.canvas = !!globals.window['CanvasRenderingContext2D'];
                try {
                    this.localStorage = !!globals.localStorage.getItem;
                }
                catch (error) {
                    this.localStorage = false;
                }
                this.file = !!globals.window['File'] && !!globals.window['FileReader'] && !!globals.window['FileList'] && !!globals.window['Blob'];
                this.fileSystem = !!globals.window['requestFileSystem'];
                this.webGL = !this.chromeHeadless && (function () {
                    try {
                        var canvas = globals.document.createElement('canvas');
                        canvas["screencanvas"] = false;
                        var options = { failIfMajorPerformanceCaveat: true };
                        return (!!globals.window["WebGLRenderingContext"]) && (canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options));
                    }
                    catch (e) {
                        return false;
                    }
                })();
                this.webGL = !!this.webGL;
                if ('ontouchstart' in globals.document.documentElement || (globals.navigator["maxTouchPoints"] && globals.navigator["maxTouchPoints"] > 1))
                    this.touch = true;
                if (globals.navigator.msPointerEnabled || globals.navigator["pointerEnabled"])
                    this.mspointer = true;
                this.pointerLock = 'pointerLockElement' in globals.document || 'mozPointerLockElement' in globals.document || 'webkitPointerLockElement' in globals.document;
                this.quirksMode = (globals.document.compatMode === 'CSS1Compat') ? false : true;
            };
            Device.prototype.checkBrowser = function (globals) {
                var ua = globals.navigator.userAgent;
                if (/Instagram/.test(ua)) {
                    this.inApp = true;
                    this.instagramApp = true;
                }
                else if (/FBAV/.test(ua)) {
                    this.inApp = true;
                    this.fbApp = true;
                }
                else if (/Arora/.test(ua)) {
                    this.arora = true;
                }
                else if (/Edge\/\d+/.test(ua)) {
                    this.edge = true;
                }
                else if (/Chrome/.test(ua)) {
                    this.chrome = true;
                    this.chromeHeadless = /HeadlessChrome/.test(ua);
                    this.checkChromeVersion(ua);
                }
                else if (/CriOS/.test(ua)) {
                    this.iOSChrome = true;
                    this.checkChromeVersion(ua);
                }
                else if (/Epiphany/.test(ua)) {
                    this.epiphany = true;
                }
                else if (/Firefox/.test(ua)) {
                    this.firefox = true;
                    this.checkFirefoxVersion(ua);
                }
                else if (/AppleWebKit/.test(ua) && this.iOS) {
                    this.mobileSafari = true;
                }
                else if (/MSIE (\d+\.\d+);/.test(ua)) {
                    this.ie = true;
                    this.ieVersion = parseInt(RegExp.$1, 10);
                }
                else if (/Midori/.test(ua)) {
                    this.midori = true;
                }
                else if (/Opera/.test(ua)) {
                    this.opera = true;
                }
                else if (/Safari/.test(ua)) {
                    this.safari = true;
                }
                else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(ua)) {
                    this.ie = true;
                    this.trident = true;
                    this.tridentVersion = parseInt(RegExp.$1, 10);
                    this.ieVersion = parseInt(RegExp.$3, 10);
                }
                this.silk = /Silk/.test(ua);
                if (globals.navigator['standalone'])
                    this.webApp = true;
                var matches = globals.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
                this.androidStockBrowser = matches ? parseInt(matches[1], 10) < 537 : false;
            };
            Device.prototype.checkDevice = function (globals) {
                this.pixelRatio = globals.window['devicePixelRatio'] || 1;
                this.iPhone = globals.navigator.userAgent.toLowerCase().indexOf('iphone') != -1;
                this.iPhone4 = (this.pixelRatio == 2 && this.iPhone);
                this.iPhone5 = (this.pixelRatio == 2 && this.iPhone && screen.availHeight == 548);
                this.iPad = globals.navigator.userAgent.toLowerCase().indexOf('ipad') != -1;
            };
            Device.prototype.checkAudio = function (globals) {
                this.audioData = !!(globals.window['Audio']);
                this.webAudio = !!globals.window['AudioContext'];
                var audioElement = globals.document.createElement('audio');
                var result = false;
                try {
                    if (result = !!audioElement.canPlayType) {
                        if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
                            this.ogg = true;
                        if (audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || audioElement.canPlayType('audio/opus;').replace(/^no$/, ''))
                            this.opus = true;
                        if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
                            this.mp3 = true;
                        if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
                            this.wav = true;
                        if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
                            this.m4a = true;
                        if (audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))
                            this.webm = true;
                    }
                }
                catch (e) {
                }
            };
            Device.prototype.checkTablet = function (globals) {
                if (this.desktop) {
                    this.tablet = false;
                    return;
                }
                var ua = globals.navigator.userAgent;
                this.tablet = false;
                if (this.iOS && /ipad/i.test(ua))
                    this.tablet = true;
                if (this.android && !/mobile/i.test(ua))
                    this.tablet = true;
                if ((/blackberry/i.test(ua) || /bb10/i.test(ua) || /rim/i.test(ua)) && /tablet/i.test(ua))
                    this.tablet = true;
                if (this.tablet)
                    this.desktop = false;
            };
            Device.prototype.checkAndroidVersion = function (globals) {
                var ua = globals.navigator.userAgent.toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                if (match) {
                    try {
                        this.androidVersion = match[1];
                    }
                    catch (e) {
                    }
                }
            };
            ;
            Device.prototype.checkChromeVersion = function (ua) {
                var matches = ua.match(/Chrome\/(\d+)/i);
                if (matches)
                    this.chromeVersion = parseInt(matches[1], 10);
            };
            Device.prototype.checkFirefoxVersion = function (ua) {
                var matches = ua.match(/Firefox\/(\d+)/i);
                if (matches) {
                    this.firefoxVersion = parseInt(matches[1], 10);
                    this.firefoxQuantum = this.firefoxVersion > 57;
                }
            };
            return Device;
        }());
        util.Device = Device;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var AdBlock = (function () {
            function AdBlock() {
            }
            AdBlock.has = function (callback) {
                if (!AdBlock.delay) {
                    AdBlock.delay = new kr3mCas.async.Delayed();
                    var testUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                    var device = util.Device.getInstance();
                    if (device.ie) {
                        AdBlock.hasBlocker = false;
                        AdBlock.delay.execute();
                    }
                    else {
                        var options = { method: 'HEAD', mode: 'no-cors' };
                        var request = new Request(testUrl, options);
                        fetch(request).then(function () {
                            AdBlock.hasBlocker = false;
                            AdBlock.delay.execute();
                        })["catch"](function (error) {
                            AdBlock.hasBlocker = true;
                            AdBlock.delay.execute();
                        });
                    }
                }
                if (callback)
                    AdBlock.delay.call(function () { return callback(AdBlock.hasBlocker); });
            };
            return AdBlock;
        }());
        util.AdBlock = AdBlock;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Browser = (function () {
            function Browser() {
            }
            Browser.hasAdBlock = function (callback) {
                setTimeout(function () { return util.AdBlock.has(callback); }, 1);
            };
            Browser.downloadTextFile = function (fileName, content) {
                var dataUrl = 'data:,' + encodeURIComponent(content);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            Browser.isMobile = function () {
                if (location.search.indexOf("force-mobile") > -1)
                    return true;
                if (location.search.indexOf("force-iphone") > -1)
                    return true;
                var device = util.Device.getInstance();
                return !device.desktop;
            };
            Browser.isTablet = function () {
                if (location.search.indexOf("force-tablet") > -1)
                    return true;
                if (location.search.indexOf("force-ipad") > -1)
                    return true;
                var device = util.Device.getInstance();
                return device.tablet;
            };
            Browser.isPhone = function () {
                var device = util.Device.getInstance();
                return Browser.isMobile() && !device.tablet;
            };
            Browser.isIPhone = function () {
                var device = util.Device.getInstance();
                if (location.search.indexOf("force-iphone") > -1)
                    return true;
                return device.iPhone;
            };
            Browser.isFirefox = function () {
                var device = util.Device.getInstance();
                return device.firefox;
            };
            Browser.isAndroid = function () {
                var device = util.Device.getInstance();
                return device.android;
            };
            Browser.isAndroidStock = function () {
                var device = util.Device.getInstance();
                return device.androidStockBrowser;
            };
            Browser.isIOs = function () {
                var device = util.Device.getInstance();
                if ((location.search.indexOf("force-ios") > -1) ||
                    (location.search.indexOf("force-ios9") > -1) ||
                    (location.search.indexOf("force-ios10") > -1))
                    return true;
                return device.iOS;
            };
            Browser.isIOs9 = function () {
                var device = util.Device.getInstance();
                if (location.search.indexOf("force-ios9") > -1)
                    return true;
                return device.iOS9;
            };
            Browser.isIOs10 = function () {
                var device = util.Device.getInstance();
                if (location.search.indexOf("force-ios10") > -1)
                    return true;
                return device.iOS10;
            };
            Browser.isInternetExplorer = function () {
                var device = util.Device.getInstance();
                return device.ie;
            };
            Browser.isChrome = function () {
                var device = util.Device.getInstance();
                return device.chrome;
            };
            Browser.isIOSChrome = function () {
                var device = util.Device.getInstance();
                return device.iOSChrome;
            };
            Browser.isSafari = function () {
                var device = util.Device.getInstance();
                return device.safari;
            };
            Browser.supportsClickJacking = function () {
                if (Browser.isInternetExplorer())
                    return false;
                if (Browser.isSafari())
                    return false;
                return true;
            };
            Browser.isOldBrowser = function () {
                var device = util.Device.getInstance();
                return (device.ie && device.ieVersion < 11) ? true : false;
            };
            Browser.getCookie = function (name) {
                var pattern = new RegExp(name + "=([^;]*)");
                var matches = document.cookie.match(pattern);
                return matches ? decodeURIComponent(matches[1]) : null;
            };
            Browser.setCookie = function (name, value, ttlSeconds) {
                if (ttlSeconds === void 0) { ttlSeconds = 30 * 24 * 60 * 60; }
                value = encodeURIComponent(value);
                if (ttlSeconds > 0) {
                    var exDate = new Date();
                    exDate.setTime(exDate.getTime() + ttlSeconds * 1000);
                    value += "; expires=" + exDate.toUTCString();
                }
                document.cookie = name + "=" + value;
            };
            Browser.deleteCookie = function (name) {
                Browser.setCookie(name, "", -1);
            };
            Browser.getHighestSameDomainWindow = function (win) {
                if (win === void 0) { win = window; }
                try {
                    while (win != win.parent && win.document.domain == win.parent.document.domain)
                        win = win.parent;
                }
                catch (e) {
                }
                return win;
            };
            Browser.getQueryValues = function (win) {
                if (win === void 0) { win = window; }
                try {
                    var data = win.location.search;
                    if (!data || data == "")
                        return {};
                    data = data.substr(1);
                    var values = util.StringEx.splitAssoc(data);
                    var result = {};
                    for (var i in values)
                        result[i] = decodeURIComponent(values[i]);
                    return result;
                }
                catch (e) {
                    return {};
                }
            };
            Browser.getQueryValue = function (key, win) {
                if (win === void 0) { win = window; }
                try {
                    var data = win.location.search;
                    if (!data || data == "")
                        return null;
                    data = data.substr(1);
                    var values = util.StringEx.splitAssoc(data);
                    for (var i in values) {
                        if (i == key)
                            return decodeURIComponent(values[i]);
                    }
                    return null;
                }
                catch (e) {
                    return null;
                }
            };
            Browser.removeParam = function (key, win) {
                if (win === void 0) { win = window; }
                var sourceUrl = win.location.href;
                return util.Url.removeParameter(sourceUrl, key);
            };
            Browser.getBaseUrl = function (win) {
                if (win === void 0) { win = window; }
                var url = win.location.href;
                url = util.StringEx.getBefore(url, "?", true);
                url = util.StringEx.getBefore(url, "#", true);
                url = util.StringEx.getBefore(url, "/", false);
                url += "/";
                return url;
            };
            Browser.getLanguagePreferences = function () {
                var languages = navigator.language || navigator["userLanguage"] || "";
                var parts = navigator.languages || languages.split(",");
                var result = [];
                for (var i = 0; i < parts.length; ++i) {
                    if (kr3mCas.REGEX_LOCALE.test(parts[i])) {
                        var lang = parts[i].slice(0, 2);
                        if (!util.Util.contains(result, lang))
                            result.push(lang);
                    }
                    else if (parts[i].match(/^[a-z][a-z]$/)) {
                        if (!util.Util.contains(result, parts[i]))
                            result.push(parts[i]);
                    }
                }
                return result;
            };
            Browser.getCountryPreferences = function () {
                var languages = navigator.language || navigator["userLanguage"] || "";
                var parts = languages.split(",");
                var result = [];
                for (var i = 0; i < parts.length; ++i) {
                    if (kr3mCas.REGEX_LOCALE.test(parts[i])) {
                        var country = parts[i].slice(-2);
                        if (!util.Util.contains(result, country))
                            result.push(country);
                    }
                }
                return result;
            };
            Browser.isHtml5Supported = function () {
                var elem = document.createElement("canvas");
                var isSupported = !!(elem.getContext && elem.getContext("2d"));
                return isSupported;
            };
            Browser.isWebAudioAvailable = function () {
                var win = window;
                if (typeof win.AudioContext != "undefined" || typeof win.webkitAudioContext != "undefined")
                    return true;
                return false;
            };
            return Browser;
        }());
        util.Browser = Browser;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var Handler = (function () {
            function Handler(client, method, options) {
                this.client = client;
                this.method = method;
                this.options = options || {};
            }
            Handler.prototype.getMethod = function () {
                return this.method;
            };
            Handler.prototype.getSettings = function (callback) {
                callback({});
            };
            Handler.prototype.handleForeignEvent = function (event) {
            };
            Handler.prototype.getFeatures = function () {
                return [];
            };
            Handler.prototype.register = function (callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.login = function (callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.isConnected = function (callback) {
                callback(new kr3mCas.services.CallbackResult(cas.ERROR_LOGIN_FAILED));
            };
            Handler.prototype.connect = function (callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.connectSync = function (callback) {
                return false;
            };
            Handler.prototype.postLoginGate = function (callback) {
                callback();
            };
            Handler.prototype.logout = function (callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS));
            };
            Handler.prototype.share = function (options, callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.notify = function (options, userId, callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.graphAction = function (options, callback) {
                callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_NYI));
            };
            Handler.prototype.getMethodAndKey = function (callback) {
                callback(null, null);
            };
            Handler.prototype.canInviteInUI = function () {
                return false;
            };
            Handler.prototype.getFriendUniqueKeys = function (silent, callback) {
                callback([]);
            };
            Handler.prototype.getInvitableFriends = function (callback) {
                callback([]);
            };
            Handler.prototype.confirmRequests = function (options, existingRawIds, invitedFriends, callback) {
                callback(existingRawIds, invitedFriends);
            };
            Handler.prototype.receiveRequests = function (callback) {
                var requestId = kr3mCas.util.Browser.getQueryValue('casRequest', top);
                callback(requestId ? requestId.split(',') : []);
            };
            Handler.classesByMethod = {};
            return Handler;
        }());
        methods.Handler = Handler;
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var LocalStorage = (function () {
            function LocalStorage() {
            }
            LocalStorage.isSupported = function () {
                if (LocalStorage.backup)
                    return false;
                if (LocalStorage.supported)
                    return true;
                try {
                    var key = "kr3mTest89476";
                    localStorage.setItem(key, "xyz");
                    localStorage.getItem(key);
                    localStorage.removeItem(key);
                    LocalStorage.supported = true;
                    return true;
                }
                catch (e) {
                    LocalStorage.backup = {};
                    return false;
                }
            };
            LocalStorage.setItem = function (key, item) {
                var encoded = util.Json.encode(item);
                if (LocalStorage.useObfuscation && window.btoa)
                    encoded = window.btoa(encoded);
                if (LocalStorage.isSupported())
                    localStorage.setItem(key, encoded);
                else
                    LocalStorage.backup[key] = encoded;
            };
            LocalStorage.getItem = function (key) {
                if (LocalStorage.isSupported())
                    var encoded = localStorage.getItem(key);
                else
                    var encoded = LocalStorage.backup[key];
                if (!encoded)
                    return encoded;
                var decoded = encoded;
                try {
                    if (LocalStorage.useObfuscation && window.atob) {
                        decoded = util.StringEx.stripBom(window.atob(decoded));
                        if (!decoded)
                            return undefined;
                    }
                }
                catch (e) {
                }
                decoded = util.Json.decode(decoded);
                return decoded || encoded;
            };
            LocalStorage.getStoredItemKeys = function () {
                if (LocalStorage.isSupported()) {
                    var keys = [];
                    for (var i = 0; i < localStorage.length; ++i)
                        keys.push(localStorage.key(i));
                    return keys;
                }
                else {
                    return Object.keys(LocalStorage.backup);
                }
            };
            LocalStorage.removeItem = function (key) {
                if (LocalStorage.isSupported())
                    localStorage.removeItem(key);
                else
                    delete LocalStorage.backup[key];
            };
            LocalStorage.clear = function () {
                if (LocalStorage.isSupported())
                    localStorage.clear();
                else
                    LocalStorage.backup = {};
            };
            LocalStorage.useObfuscation = false;
            return LocalStorage;
        }());
        util.LocalStorage = LocalStorage;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
kr3mCas.util.LocalStorage.isSupported();
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Validator = (function () {
            function Validator() {
            }
            Validator.email = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_EMAIL.test(text);
            };
            Validator.date = function (d, m, y) {
                var date = new Date(y, m - 1, d);
                return (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d);
            };
            Validator.username = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_USERNAME.test(text);
            };
            Validator.deviceId = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_DEVICE_ID.test(text);
            };
            Validator.url = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_URL.test(text);
            };
            Validator.dataUrl = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_DATA_URL.test(text);
            };
            Validator.isInt = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_INTEGER.test(text);
            };
            Validator.isFloat = function (text) {
                if (!text)
                    return false;
                return kr3mCas.REGEX_FLOAT.test(text);
            };
            Validator.getPasswordSecurity = function (password) {
                var maxLevel = 3;
                for (var i = maxLevel; i >= 0; --i)
                    if (Validator.securePassword(password, i))
                        return i / maxLevel;
                return 0;
            };
            Validator.securePassword = function (password, level) {
                if (level === void 0) { level = kr3mCas.PASSWORD_SECURITY_LOW; }
                if (!password)
                    return false;
                if (level <= kr3mCas.PASSWORD_SECURITY_NONE)
                    return true;
                if (password.length < 4)
                    return false;
                if (level <= kr3mCas.PASSWORD_SECURITY_LOW)
                    return true;
                if (password.length < 6)
                    return false;
                if (level <= kr3mCas.PASSWORD_SECURITY_MEDIUM)
                    return true;
                if (password.length < 8)
                    return false;
                var types = { digits: /\d/, capitalLetters: /[A-Z]/, letters: /[a-z]/ };
                var typeCount = { digits: 0, capitalLetters: 0, letters: 0, others: 0 };
                for (var j = 0; j < password.length; ++j) {
                    var token = password.substr(j, 1);
                    var found = false;
                    for (var i in types) {
                        if (types[i].test(token)) {
                            ++typeCount[i];
                            found = true;
                        }
                    }
                    if (!found)
                        ++typeCount.others;
                }
                if (typeCount.digits <= 0
                    || typeCount.capitalLetters <= 0
                    || typeCount.others <= 0)
                    return false;
                return true;
            };
            return Validator;
        }());
        util.Validator = Validator;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Rand = (function () {
            function Rand() {
            }
            Rand.getInt = function (a, b) {
                if (b === void 0) { b = 0; }
                var from = Math.min(a, b);
                var to = Math.max(a, b);
                return Math.floor(Math.random() * (to - from) + from);
            };
            Rand.getFloat = function (a, b) {
                if (a === void 0) { a = 1; }
                if (b === void 0) { b = 0; }
                var from = Math.min(a, b);
                var to = Math.max(a, b);
                return Math.random() * (to - from) + from;
            };
            Rand.getString = function (length, allowedCharacters) {
                if (length <= 0)
                    return "";
                allowedCharacters = allowedCharacters || Rand.CHARS_ALPHA_NUM;
                var result = "";
                var len = allowedCharacters.length;
                for (var i = 0; i < length; ++i)
                    result += allowedCharacters.charAt(Rand.getInt(len));
                return result;
            };
            Rand.getFunctionName = function () {
                var name = Rand.getString(16, Rand.CHARS_ALPHA);
                while (window[name])
                    name = Rand.getString(16, Rand.CHARS_ALPHA);
                return name;
            };
            Rand.getBool = function (trueChance) {
                if (trueChance === void 0) { trueChance = 0.5; }
                return Math.random() < trueChance;
            };
            Rand.getIndex = function (array) {
                if (array.length == 0)
                    return undefined;
                return Rand.getInt(array.length);
            };
            Rand.getIndexWeighted = function (weights) {
                var total = 0;
                for (var i = 0; i < weights.length; ++i)
                    total += Math.max(weights[i], 0);
                var weight = Rand.getFloat(total);
                for (var i = 0; i < weights.length; ++i) {
                    if (weight <= weights[i])
                        return i;
                    weight -= Math.max(weights[i], 0);
                }
                return undefined;
            };
            Rand.getElement = function (array) {
                if (array.length == 0)
                    return undefined;
                return array[Rand.getIndex(array)];
            };
            Rand.getElementWeighted = function (array, weights) {
                if (array.length == 0)
                    return undefined;
                if (array.length != weights.length)
                    throw new Error("array length and weights length don't match");
                return array[Rand.getIndexWeighted(weights)];
            };
            Rand.getShuffledInts = function (count) {
                var result = [];
                for (var i = 0; i < count; ++i)
                    result.push(i);
                return Rand.shuffleArray(result);
            };
            Rand.shuffleArray = function (arr) {
                var result = arr.slice();
                for (var i = 0; i < result.length - 1; ++i) {
                    var pos = Rand.getInt(i, result.length);
                    var temp = result[i];
                    result[i] = result[pos];
                    result[pos] = temp;
                }
                return result;
            };
            Rand.getTimeStamp = function (a, b) {
                var from = Math.min(a.getTime(), b.getTime());
                var to = Math.max(a.getTime(), b.getTime());
                return new Date(Math.random() * (to - from) + from);
            };
            Rand.getPassword = function (level) {
                if (level === void 0) { level = kr3mCas.PASSWORD_SECURITY_LOW; }
                var digits = 10;
                do {
                    var password = Rand.getString(digits, Rand.CHARS_PASSWORD);
                } while (!util.Validator.securePassword(password, level));
                return password;
            };
            Rand.CHARS_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            Rand.CHARS_ALPHA_NUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            Rand.CHARS_PASSWORD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?{[]}#+-_~^<>|\\@,.;:";
            return Rand;
        }());
        util.Rand = Rand;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var modelclient;
    (function (modelclient) {
        var ClientSession = (function () {
            function ClientSession() {
                var _this = this;
                this.domainId = 0;
                this.delay = new kr3mCas.async.Delayed();
                kr3mCas.util.LocalStorage.useObfuscation = true;
                var device = kr3mCas.util.Device.getInstance();
                var delay = (device.iPhone4 && !device.iPhone5) ? 100 : 0;
                setTimeout(function () { return _this.delay.execute(); }, delay);
            }
            ClientSession.prototype.getSessionId = function (callback) {
                this.delay.call(function () {
                    var sessionId = kr3mCas.util.LocalStorage.getItem('CAS_Session');
                    if (!sessionId) {
                        sessionId = '' + Date.now();
                        sessionId += kr3mCas.util.Rand.getString(32 - sessionId.length);
                        kr3mCas.util.LocalStorage.setItem('CAS_Session', sessionId);
                    }
                    callback(sessionId);
                });
            };
            ClientSession.prototype.getClientData = function () {
                var allData = kr3mCas.util.LocalStorage.getItem('CAS') || {};
                allData[this.domainId] = allData[this.domainId] || {};
                return allData[this.domainId];
            };
            ClientSession.prototype.saveClientData = function (data) {
                var allData = kr3mCas.util.LocalStorage.getItem('CAS') || {};
                allData[this.domainId] = data;
                kr3mCas.util.LocalStorage.setItem('CAS', allData);
            };
            ClientSession.prototype.touchClient = function (clientId) {
                if (!clientId)
                    return;
                var data = this.getClientData();
                data[clientId] = Date.now();
                this.saveClientData(data);
            };
            ClientSession.prototype.setData = function (name, value) {
                var _this = this;
                this.delay.call(function () {
                    var allData = kr3mCas.util.LocalStorage.getItem('CASdata') || {};
                    allData[_this.domainId] = allData[_this.domainId] || {};
                    allData[_this.domainId][name] = value;
                    kr3mCas.util.LocalStorage.setItem('CASdata', allData);
                });
            };
            ClientSession.prototype.getData = function (name, callback) {
                var _this = this;
                this.delay.call(function () {
                    var allData = kr3mCas.util.LocalStorage.getItem('CASdata') || {};
                    allData[_this.domainId] = allData[_this.domainId] || {};
                    callback(allData[_this.domainId][name]);
                });
            };
            ClientSession.prototype.getDomainClients = function (callback) {
                var _this = this;
                this.delay.call(function () {
                    var data = _this.getClientData();
                    var clientIds = [];
                    var threshold = Date.now() - cas.TTL_SESSION * 1000;
                    for (var clientId in data) {
                        if (data[clientId] >= threshold)
                            clientIds.push(clientId);
                        else
                            delete data[clientId];
                    }
                    _this.saveClientData(data);
                    callback(clientIds);
                });
            };
            ClientSession.prototype.logout = function () {
                var _this = this;
                this.delay.call(function () { return _this.saveClientData({}); });
            };
            return ClientSession;
        }());
        modelclient.ClientSession = ClientSession;
        modelclient.session = new ClientSession();
    })(modelclient = cas.modelclient || (cas.modelclient = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var AccountData = (function () {
            function AccountData() {
                this.email = "";
                this.newsletter = false;
                this.dois = {};
            }
            return AccountData;
        }());
        vo.AccountData = AccountData;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Achievement = (function () {
            function Achievement() {
                this.targetNumber = 0;
                this.progress = 0;
                this.imageUrl = "images/hiddenAchievement.png";
                this.nameLocId = "ACHIEVEMENT_HIDDEN_NAME";
                this.descriptionLocId = "ACHIEVEMENT_HIDDEN_DESCRIPTION";
            }
            return Achievement;
        }());
        vo.Achievement = Achievement;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Achievements = (function () {
            function Achievements() {
                this.items = [];
            }
            return Achievements;
        }());
        vo.Achievements = Achievements;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ActiveLogin = (function () {
            function ActiveLogin() {
                this.method = "";
            }
            return ActiveLogin;
        }());
        vo.ActiveLogin = ActiveLogin;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanMember = (function (_super) {
            __extends(ClanMember, _super);
            function ClanMember() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClanMember;
        }(cas.vo.User));
        vo.ClanMember = ClanMember;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Clan = (function () {
            function Clan() {
                this.admins = [];
            }
            return Clan;
        }());
        vo.Clan = Clan;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanHighscore = (function (_super) {
            __extends(ClanHighscore, _super);
            function ClanHighscore() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClanHighscore;
        }(vo.Clan));
        vo.ClanHighscore = ClanHighscore;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanHighscoreOptions = (function () {
            function ClanHighscoreOptions() {
                this.category = "ALL";
                this.offset = 0;
                this.limit = 10;
            }
            return ClanHighscoreOptions;
        }());
        vo.ClanHighscoreOptions = ClanHighscoreOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanHighscores = (function () {
            function ClanHighscores() {
                this.clansOffset = 0;
                this.totalCount = 0;
                this.clans = [];
            }
            return ClanHighscores;
        }());
        vo.ClanHighscores = ClanHighscores;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanInvitation = (function (_super) {
            __extends(ClanInvitation, _super);
            function ClanInvitation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClanInvitation;
        }(vo.Clan));
        vo.ClanInvitation = ClanInvitation;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanMembers = (function () {
            function ClanMembers() {
                this.members = [];
            }
            return ClanMembers;
        }());
        vo.ClanMembers = ClanMembers;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanMembership = (function (_super) {
            __extends(ClanMembership, _super);
            function ClanMembership() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClanMembership;
        }(vo.Clan));
        vo.ClanMembership = ClanMembership;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClanSentInvitation = (function (_super) {
            __extends(ClanSentInvitation, _super);
            function ClanSentInvitation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClanSentInvitation;
        }(vo.User));
        vo.ClanSentInvitation = ClanSentInvitation;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ClientInit = (function () {
            function ClientInit(error, jumpPadData) {
                this.status = error || kr3mCas.SUCCESS;
                this.success = this.status == kr3mCas.SUCCESS;
            }
            return ClientInit;
        }());
        vo.ClientInit = ClientInit;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var EmailSettings = (function () {
            function EmailSettings() {
            }
            return EmailSettings;
        }());
        vo.EmailSettings = EmailSettings;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Events = (function () {
            function Events() {
            }
            return Events;
        }());
        vo.Events = Events;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var FacebookSettings = (function () {
            function FacebookSettings() {
            }
            return FacebookSettings;
        }());
        vo.FacebookSettings = FacebookSettings;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var FriendCookie = (function () {
            function FriendCookie() {
            }
            return FriendCookie;
        }());
        vo.FriendCookie = FriendCookie;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var FriendCookies = (function () {
            function FriendCookies() {
                this.entries = [];
            }
            return FriendCookies;
        }());
        vo.FriendCookies = FriendCookies;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Doi = (function () {
            function Doi() {
            }
            return Doi;
        }());
        vo.Doi = Doi;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var GameConfig = (function () {
            function GameConfig() {
            }
            return GameConfig;
        }());
        vo.GameConfig = GameConfig;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var GraphActionOptions = (function () {
            function GraphActionOptions() {
                this.action = "";
                this.objectType = "";
                this.obj = "";
            }
            return GraphActionOptions;
        }());
        vo.GraphActionOptions = GraphActionOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var HighscoreOptions = (function () {
            function HighscoreOptions() {
                this.category = "ALL";
                this.friendsOnly = false;
                this.period = cas.HIGHSCORE_PERIOD_ALLTIME;
                this.offset = 0;
                this.limit = 10;
            }
            return HighscoreOptions;
        }());
        vo.HighscoreOptions = HighscoreOptions;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Highscore = (function (_super) {
            __extends(Highscore, _super);
            function Highscore() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Highscore;
        }(cas.vo.User));
        vo.Highscore = Highscore;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Highscores = (function () {
            function Highscores() {
                this.userOffset = -1;
                this.totalCount = -1;
                this.entries = [];
            }
            return Highscores;
        }());
        vo.Highscores = Highscores;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var MailItem = (function () {
            function MailItem() {
                this.tokens = {};
                this.answerOptions = [];
            }
            return MailItem;
        }());
        vo.MailItem = MailItem;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var MailBox = (function () {
            function MailBox() {
                this.items = [];
            }
            return MailBox;
        }());
        vo.MailBox = MailBox;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var NewHighscore = (function () {
            function NewHighscore() {
                this.category = "ALL";
                this.score = 0;
                this.bias = 0;
            }
            return NewHighscore;
        }());
        vo.NewHighscore = NewHighscore;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Participation = (function () {
            function Participation() {
                this.email = "";
                this.newsletter = false;
                this.customFields = {};
            }
            return Participation;
        }());
        vo.Participation = Participation;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Raffle = (function () {
            function Raffle() {
                this.id = "";
                this.starts = new Date(0);
                this.ends = new Date(0);
                this.htmlCode = "";
                this.newsletter = true;
                this.sendValidationMail = true;
            }
            return Raffle;
        }());
        vo.Raffle = Raffle;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var RawFriends = (function () {
            function RawFriends() {
                this.method = "";
                this.uniqueKey = "";
                this.friendUniqueKeys = [];
            }
            return RawFriends;
        }());
        vo.RawFriends = RawFriends;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Request = (function () {
            function Request() {
            }
            return Request;
        }());
        vo.Request = Request;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Requests = (function () {
            function Requests() {
                this.incoming = [];
                this.outgoing = [];
            }
            return Requests;
        }());
        vo.Requests = Requests;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ShopItem = (function () {
            function ShopItem() {
            }
            return ShopItem;
        }());
        vo.ShopItem = ShopItem;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ShopPrice = (function () {
            function ShopPrice() {
            }
            return ShopPrice;
        }());
        vo.ShopPrice = ShopPrice;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var ShopPackage = (function () {
            function ShopPackage() {
                this.prices = [];
                this.items = [];
            }
            return ShopPackage;
        }());
        vo.ShopPackage = ShopPackage;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Shop = (function () {
            function Shop() {
                this.packages = [];
            }
            return Shop;
        }());
        vo.Shop = Shop;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Currency = (function () {
            function Currency() {
            }
            return Currency;
        }());
        vo.Currency = Currency;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Wallet = (function () {
            function Wallet() {
                this.currencies = [];
            }
            return Wallet;
        }());
        vo.Wallet = Wallet;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var Flags = (function () {
            function Flags() {
                this.flags = {};
                this.metas = [];
                this.setConstraints = {};
                this.clearConstraints = {};
                this.ignored = [];
            }
            Flags.prototype.ignore = function () {
                var names = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    names[_i] = arguments[_i];
                }
                for (var i = 0; i < names.length; ++i) {
                    if (this.ignored.indexOf(names[i]) < 0)
                        this.ignored.push(names[i]);
                }
                for (var i = 0; i < this.metas.length; ++i) {
                    var ignored = kr3mCas.util.Util.intersect(names, this.metas[i].names);
                    if (ignored.length > 0)
                        this.metas.splice(i--, 1);
                }
            };
            Flags.prototype.unignore = function () {
                var names = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    names[_i] = arguments[_i];
                }
                this.ignored = this.ignored.filter(function (name) { return names.indexOf(name) < 0; });
            };
            Flags.prototype.getSet = function () {
                var _this = this;
                var names = Object.keys(this.flags);
                names = names.filter(function (name) { return _this.flags[name]; });
                return names;
            };
            Flags.prototype.isSet = function (name) {
                return this.flags[name] || false;
            };
            Flags.prototype.forEach = function (func) {
                var _this = this;
                var names = Object.keys(this.flags);
                names = names.filter(function (name) { return _this.flags[name]; });
                for (var i = 0; i < names.length; ++i)
                    func(names[i]);
            };
            Flags.prototype.areSet = function () {
                var names = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    names[_i] = arguments[_i];
                }
                for (var i = 0; i < names.length; ++i) {
                    if (!this.flags[names[i]])
                        return false;
                }
                return true;
            };
            Flags.prototype.onSet = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                var ignored = kr3mCas.util.Util.intersect(names, this.ignored);
                if (ignored.length > 0)
                    return;
                var hasAll = true;
                for (var i = 0; i < names.length; ++i) {
                    if (!this.flags[names[i]]) {
                        hasAll = false;
                        break;
                    }
                }
                if (hasAll)
                    listener();
                var item = {
                    names: typeof names == "string" ? [names] : names,
                    isOnce: false,
                    isClear: false,
                    listener: listener
                };
                this.metas.push(item);
            };
            Flags.prototype.onceSet = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                var ignored = kr3mCas.util.Util.intersect(names, this.ignored);
                if (ignored.length > 0)
                    return;
                var hasAll = true;
                for (var i = 0; i < names.length; ++i) {
                    if (!this.flags[names[i]]) {
                        hasAll = false;
                        break;
                    }
                }
                if (hasAll)
                    return listener();
                var item = {
                    names: typeof names == "string" ? [names] : names,
                    isOnce: true,
                    isClear: false,
                    listener: listener
                };
                this.metas.push(item);
            };
            Flags.prototype.offSet = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                for (var i = 0; i < this.metas.length; ++i) {
                    if (!this.metas[i].isClear) {
                        var inter = kr3mCas.util.Util.intersect(this.metas[i].names, names);
                        if (inter.length == names.length) {
                            if (!listener || listener == this.metas[i].listener)
                                this.metas.splice(i--, 1);
                        }
                    }
                }
            };
            Flags.prototype.onClear = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                var item = {
                    names: typeof names == "string" ? [names] : names,
                    isOnce: false,
                    isClear: true,
                    listener: listener
                };
                this.metas.push(item);
            };
            Flags.prototype.onceClear = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                var item = {
                    names: typeof names == "string" ? [names] : names,
                    isOnce: true,
                    isClear: true,
                    listener: listener
                };
                this.metas.push(item);
            };
            Flags.prototype.offClear = function (names, listener) {
                if (typeof names == "string")
                    names = [names];
                for (var i = 0; i < this.metas.length; ++i) {
                    if (this.metas[i].isClear) {
                        var inter = kr3mCas.util.Util.intersect(this.metas[i].names, names);
                        if (inter.length == names.length) {
                            if (!listener || listener == this.metas[i].listener)
                                this.metas.splice(i--, 1);
                        }
                    }
                }
            };
            Flags.prototype.dispatch = function (setNames, clearedNames) {
                var allSetNames;
                for (var i = 0; i < this.metas.length; ++i) {
                    var names = this.metas[i].isClear ? clearedNames : setNames;
                    var inter = kr3mCas.util.Util.intersect(this.metas[i].names, names);
                    if (inter.length > 0) {
                        allSetNames = allSetNames || this.getSet();
                        inter = kr3mCas.util.Util.intersect(this.metas[i].names, allSetNames);
                        if (inter.length == this.metas[i].names.length) {
                            this.metas[i].listener();
                            if (this.metas[i].isOnce)
                                this.metas.splice(i--, 1);
                        }
                    }
                }
            };
            Flags.prototype.set = function () {
                var names = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    names[_i] = arguments[_i];
                }
                var setNames = [];
                for (var i = 0; i < names.length; ++i) {
                    if (!this.flags[names[i]])
                        setNames.push(names[i]);
                    this.flags[names[i]] = true;
                }
                var runLoop = true;
                while (runLoop) {
                    runLoop = false;
                    for (var name in this.setConstraints) {
                        if (!this.flags[name]) {
                            var inter = kr3mCas.util.Util.intersect(this.setConstraints[name], setNames);
                            if (inter.length > 0) {
                                for (var i = 0; i < this.setConstraints[name].length; ++i) {
                                    if (!this.flags[this.setConstraints[name][i]])
                                        break;
                                }
                                if (i >= this.setConstraints[name].length) {
                                    this.flags[name] = true;
                                    setNames.push(name);
                                    runLoop = true;
                                }
                            }
                        }
                    }
                }
                this.dispatch(setNames, []);
            };
            Flags.prototype.clear = function () {
                var names = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    names[_i] = arguments[_i];
                }
                var clearedNames = [];
                for (var i = 0; i < names.length; ++i) {
                    if (this.flags[names[i]])
                        clearedNames.push(names[i]);
                    this.flags[names[i]] = false;
                }
                var runLoop = true;
                while (runLoop) {
                    runLoop = false;
                    for (var name in this.clearConstraints) {
                        if (this.flags[name]) {
                            var inter = kr3mCas.util.Util.intersect(this.clearConstraints[name], clearedNames);
                            if (inter.length > 0) {
                                this.flags[name] = false;
                                clearedNames.push(name);
                                runLoop = true;
                            }
                        }
                    }
                }
                this.dispatch([], clearedNames);
            };
            Flags.prototype.clearAll = function () {
                var _this = this;
                var names = Object.keys(this.flags);
                names = names.filter(function (name) { return _this.flags[name]; });
                this.clear.apply(this, names);
            };
            Flags.prototype.addSetConstraint = function (name, otherNames, addClearConstraint) {
                if (addClearConstraint === void 0) { addClearConstraint = false; }
                this.setConstraints[name] = otherNames;
                if (addClearConstraint)
                    this.addClearConstraint(name, otherNames);
            };
            Flags.prototype.addClearConstraint = function (name, otherNames) {
                this.clearConstraints[name] = otherNames;
            };
            return Flags;
        }());
        async.Flags = Flags;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var services;
    (function (services) {
        var AjaxStub = (function () {
            function AjaxStub() {
                this.cache = {};
                this.showServiceCallsInLog = false;
                this.htmlEscapeStrings = true;
                this.timeoutDuration = 0;
                this.cacheDuration = 600000;
            }
            AjaxStub.prototype.cleanResult = function (key, value, result) {
                var type = typeof (value);
                if (type == "string") {
                    var newValue = value;
                    if (this.htmlEscapeStrings)
                        newValue = kr3mCas.util.Util.encodeHtml(newValue);
                    if (newValue != value)
                        kr3mCas.util.Util.setProperty(result, key, newValue);
                }
            };
            AjaxStub.prototype.callService = function (serviceName, params, callback, timeoutCallback, errorCallback) {
                if (params === void 0) { params = {}; }
                kr3mCas.util.Ajax.callServiceTimeout(serviceName, params, function (result, headers) {
                    callback && callback(result, headers);
                }, function () {
                    timeoutCallback && timeoutCallback();
                }, this.timeoutDuration, null, errorCallback);
            };
            AjaxStub.prototype.callServiceCached = function (serviceName, params, callback, timeoutCallback, errorCallback) {
                var _this = this;
                if (params === void 0) { params = {}; }
                if (!callback)
                    return this.callService(serviceName, params);
                var key = serviceName + "(" + kr3mCas.util.Json.encode(params) + ")";
                var item = this.cache[key];
                if (item && item.expires >= new Date())
                    return callback(kr3mCas.util.Util.clone(item.response));
                this.callService(serviceName, params, function (response) {
                    var expires = new Date();
                    expires.setTime(expires.getTime() + _this.cacheDuration);
                    var item = { expires: expires, response: response };
                    _this.cache[key] = item;
                    callback(kr3mCas.util.Util.clone(item.response));
                }, timeoutCallback, errorCallback);
            };
            AjaxStub.prototype.clearCache = function (serviceName, params) {
                if (params) {
                    var key = serviceName + "(" + kr3mCas.util.Json.encode(params) + ")";
                    if (this.cache[key])
                        delete this.cache[key];
                }
                else {
                    serviceName += "(";
                    for (var i in this.cache) {
                        if (i.indexOf(serviceName) == 0)
                            delete this.cache[i];
                    }
                }
            };
            return AjaxStub;
        }());
        services.AjaxStub = AjaxStub;
    })(services = kr3mCas.services || (kr3mCas.services = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var PMNWrapper = (function () {
            function PMNWrapper() {
            }
            return PMNWrapper;
        }());
        var PostMessageNode = (function () {
            function PostMessageNode(name, listener, hostFilter) {
                if (hostFilter === void 0) { hostFilter = "*"; }
                this.encode = false;
                this.freeCallbackId = 1;
                this.callbacks = {};
                var oldNode = PostMessageNode.allNodes[name];
                if (oldNode)
                    oldNode.handleMessageEvent = function (event) { };
                var device = util.Device.getInstance();
                this.encode = device.ie && device.ieVersion < 10;
                PostMessageNode.allNodes[name] = this;
                this.name = name;
                this.hostFilter = this.trimOrigin(hostFilter);
                this.listener = listener || (function () { });
                var helper = this.handleMessageEvent.bind(this);
                if (window["attachEvent"])
                    window["attachEvent"]("onmessage", helper);
                else if (window.addEventListener)
                    window.addEventListener("message", helper, false);
                else
                    util.Log.logError("window object doesn't support neither attachEvent nor addEventListener");
            }
            PostMessageNode.prototype.trimOrigin = function (origin) {
                return origin.replace(/\/+$/, "");
            };
            PostMessageNode.prototype.handleMessageEvent = function (event) {
                var _this = this;
                var origin = this.trimOrigin(event.origin);
                if (this.hostFilter != "*" && this.hostFilter != origin)
                    return util.Log.logVerbose("postmessage doesn't match filter", origin, this.hostFilter, event);
                var wrapper = (this.encode ? util.Json.decode(event.data) : event.data);
                if (!wrapper || wrapper.to != this.name)
                    return;
                try {
                    var targetWindow = event.source || window.parent;
                }
                catch (e) {
                    var targetWindow = window.parent;
                }
                if (wrapper.origin == this.name) {
                    var callback = this.callbacks[wrapper.callbackId];
                    if (callback) {
                        delete this.callbacks[wrapper.callbackId];
                        return callback(wrapper.payload);
                    }
                }
                if (!wrapper.callbackId)
                    return this.listener(wrapper.payload, undefined, targetWindow);
                this.listener(wrapper.payload, function (reply) {
                    wrapper.to = wrapper.from;
                    wrapper.from = _this.name;
                    wrapper.payload = reply;
                    try {
                        targetWindow.postMessage(_this.encode ? util.Json.encode(wrapper) : wrapper, _this.hostFilter);
                    }
                    catch (exception) {
                        kr3mCas.util.Log.logWarning("PostMessage could not be sent:", exception);
                    }
                }, targetWindow);
            };
            PostMessageNode.prototype.send = function (toNodeName, nodeWindow, message, replyCallback) {
                var wrapper = new PMNWrapper();
                wrapper.msgId = PostMessageNode.freeMsgId++;
                wrapper.origin = this.name;
                wrapper.to = toNodeName;
                wrapper.from = this.name;
                wrapper.payload = message;
                if (replyCallback) {
                    wrapper.callbackId = this.freeCallbackId++;
                    this.callbacks[wrapper.callbackId] = replyCallback;
                }
                try {
                    nodeWindow.postMessage(this.encode ? util.Json.encode(wrapper) : wrapper, this.hostFilter);
                }
                catch (exception) {
                    kr3mCas.util.Log.logWarning("PostMessage could not be sent:", exception);
                }
            };
            PostMessageNode.allNodes = {};
            PostMessageNode.freeMsgId = 1;
            return PostMessageNode;
        }());
        util.PostMessageNode = PostMessageNode;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var stubs;
    (function (stubs) {
        var Client = (function (_super) {
            __extends(Client, _super);
            function Client() {
                var _this = _super.call(this) || this;
                _this.flags = new kr3mCas.async.Flags();
                _this.clientId = null;
                _this.gameId = '';
                _this.gameConfig = null;
                kr3mCas.util.Ajax.serviceUrl = cas.BASE_URL + 'gateway';
                return _this;
            }
            Client.prototype.callService = function (service, params, callback, timeoutCallback, errorCallback) {
                params = params || {};
                params.gameId = this.gameId;
                params.clientId = this.clientId;
                params.languageId = params.languageId || this.languageId;
                params.countryId = params.countryId || this.countryId;
                cas.modelclient.session.touchClient(this.clientId);
                _super.prototype.callService.call(this, service, params, function (result) { return callback && callback(result, undefined); }, timeoutCallback, errorCallback);
            };
            Client.prototype.initLocale = function () {
                var languages = kr3mCas.util.Util.intersect(cas.LANGUAGES, this.gameConfig.languageIds);
                if (languages.length > 0)
                    cas.LANGUAGES = languages;
                var browserLanguages = kr3mCas.util.Browser.getLanguagePreferences();
                browserLanguages = kr3mCas.util.Util.intersect(browserLanguages, cas.LANGUAGES);
                this.languageId = (browserLanguages.length > 0) ? browserLanguages[0] : cas.LANGUAGES[0];
                var browserCountries = kr3mCas.util.Browser.getCountryPreferences();
                this.countryId = browserCountries.length > 0 ? browserCountries[0] : cas.FALLBACK_COUNTRY;
            };
            Client.prototype.initClient = function (gameId, options, callback) {
                var _this = this;
                this.gameId = gameId;
                this.callService('Game.getConfig', { gameId: gameId }, function (result) {
                    if (!result.success)
                        return callback(new cas.vo.ClientInit(result.status));
                    _this.gameConfig = result.data;
                    kr3mCas.util.Log.log("CAS (LIVE) is using game " + gameId + " in domain " + _this.gameConfig.domainId);
                    _this.initLocale();
                    cas.modelclient.session.domainId = _this.gameConfig.domainId;
                    cas.modelclient.session.getSessionId(function (sessionId) {
                        cas.modelclient.session.getDomainClients(function (oldClientIds) {
                            var params = { oldClientIds: oldClientIds, sessionId: sessionId };
                            _this.callService('Client.initClient', params, function (clientInit) {
                                _this.clientId = clientInit.clientId;
                                cas.modelclient.session.touchClient(clientInit.clientId);
                                callback(clientInit);
                                _this.flags.set('init');
                            });
                        });
                    });
                });
            };
            Client.prototype.getJumpPadData = function (callback) {
                this.callService('Client.getJumpPadData', {}, callback);
            };
            Client.prototype.logout = function (callback) {
                cas.modelclient.session.logout();
                this.callService('Account.logout', {}, callback);
            };
            Client.prototype.register = function (registerData, callback) {
                this.callService('Account.register', registerData, callback);
            };
            Client.prototype.login = function (loginData, callback) {
                this.callService('Account.login', loginData, callback);
            };
            Client.prototype.sendPasswordRecoverMail = function (email, callback) {
                var params = { method: cas.tables.DomainVO.METHOD_EMAIL, uniqueKey: email };
                this.callService('Email.recoverPassword', params, callback);
            };
            Client.prototype.resetEmailPassword = function (token, password, callback) {
                var params = { token: token, password: password };
                this.callService('Email.resetPassword', params, callback);
            };
            Client.prototype.changePassword = function (oldPassword, newPassword, callback) {
                var params = { oldPassword: oldPassword, newPassword: newPassword };
                this.callService('Account.changePassword', params, callback);
            };
            Client.prototype.resendValidationEmail = function (callback) {
                var params = {};
                this.callService('Email.resendValidationEmail', params, callback);
            };
            Client.prototype.validateDoi = function (token, callback) {
                var params = { token: token };
                this.callService('Doi.validate', params, callback);
            };
            Client.prototype.validateEmail = function (token, callback) {
                var params = { token: token };
                this.callService('Email.validate', params, callback);
            };
            Client.prototype.validateRaffleEmail = function (token, callback) {
                var params = { token: token };
                this.callService('Raffle.validateEmail', params, callback);
            };
            Client.prototype.connect = function (connectData, callback) {
                this.callService('Account.connect', connectData, callback);
            };
            Client.prototype.getActiveLogins = function (requestIdsByMethod, callback) {
                var params = { requestIdsByMethod: requestIdsByMethod };
                this.callService('Account.getActiveLogins', params, function (result) {
                    callback(result.data);
                });
            };
            Client.prototype.getUserId = function (callback) {
                this.callService('User.getUserId', {}, callback);
            };
            Client.prototype.getUser = function (callback) {
                this.callService('User.getUser', {}, function (result) {
                    callback(result.data);
                });
            };
            Client.prototype.getAccountData = function (callback) {
                this.callService('Account.getAccountData', {}, callback);
            };
            Client.prototype.updateAccountData = function (accountData, callback) {
                var params = { accountData: accountData };
                this.callService('Account.updateAccountData', params, function (result) {
                    callback && callback(result.status);
                });
            };
            Client.prototype.setName = function (name, callback) {
                var params = { name: name };
                this.callService('User.setName', params, function (result) {
                    callback && callback(result.status);
                });
            };
            Client.prototype.setLanguage = function (languageId, callback) {
                this.languageId = languageId;
                var params = { languageId: languageId };
                this.callService('User.setLanguage', params, function (result) {
                    callback && callback(result.status);
                });
            };
            Client.prototype.setUserImageUrl = function (imageUrl, callback) {
                var params = { imageUrl: imageUrl };
                this.callService('User.setImageUrl', params, function (result) {
                    callback && callback(result.status);
                });
            };
            Client.prototype.updateFriends = function (rawFriendsData, callback) {
                var _this = this;
                var params = { rawFriendsData: rawFriendsData };
                this.callService('Friends.updateFriends', params, function (result) {
                    callback && callback(result.status);
                    _this.flags.set('friends');
                });
            };
            Client.prototype.getFriends = function (callback) {
                var _this = this;
                this.flags.onceSet('friends', function () {
                    _this.callService('Friends.getFriends', {}, function (result) {
                        callback(result.data || []);
                    });
                });
            };
            Client.prototype.getInvitableFriends = function (method, callback) {
                var _this = this;
                this.flags.onceSet('friends', function () {
                    var params = { method: method };
                    _this.callService('Friends.getInvitableFriends', params, function (result) {
                        callback(result.data || []);
                    });
                });
            };
            Client.prototype.getFriendRawIds = function (friendGameIds, callback) {
                var _this = this;
                this.flags.onceSet('friends', function () {
                    var params = { friendGameIds: friendGameIds };
                    _this.callService('Friends.getRawIds', params, function (result) {
                        callback(result.data || {});
                    });
                });
            };
            Client.prototype.pollEvents = function (callback) {
                var _this = this;
                var params = { lastPolled: this.lastPolled };
                this.callService('Client.pollEvents', params, function (events) {
                    if (!events)
                        return callback([]);
                    _this.lastPolled = events.lastPolled;
                    callback(events.events);
                });
            };
            Client.prototype.getGameConfig = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig); });
            };
            Client.prototype.getLoginMethodsSync = function () {
                return this.flags.isSet('init') ? this.gameConfig.methods : [];
            };
            Client.prototype.getLoginMethods = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig.methods); });
            };
            Client.prototype.getFeatures = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig.features); });
            };
            Client.prototype.getUserFeatures = function (callback) {
                this.callService('Game.getUserFeatures', {}, callback);
            };
            Client.prototype.getCustomUserFields = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig.customUserFieldMetas); });
            };
            Client.prototype.shouldWelcome = function (callback) {
                this.callService('Account.shouldWelcome', {}, callback);
            };
            Client.prototype.customFieldsComplete = function (callback) {
                this.callService('Account.customFieldsComplete', {}, callback);
            };
            Client.prototype.emailComplete = function (callback) {
                this.callService('Account.emailComplete', {}, callback);
            };
            Client.prototype.getCssUrl = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig.cssUrl); });
            };
            Client.prototype.getLanguagesUrl = function (callback) {
                var _this = this;
                this.flags.onceSet('init', function () { return callback(_this.gameConfig.languagesUrl); });
            };
            Client.prototype.getFacebookSettings = function (callback) {
                this.callServiceCached('Facebook.getSettings', {}, callback);
            };
            Client.prototype.getFacebookRequestUrl = function (receivedRequestIds, callback) {
                var params = { requestIds: receivedRequestIds };
                this.callService('Facebook.getRequestUrl', params, callback);
            };
            Client.prototype.getEmailSettings = function (callback) {
                this.callServiceCached('Email.getSettings', {}, callback);
            };
            Client.prototype.getAchievements = function (callback) {
                this.callService('Achievement.get', {}, callback);
            };
            Client.prototype.updateAchievement = function (achievementId, progress, callback) {
                var params = { achievementId: achievementId, progress: progress };
                this.callService('Achievement.update', params, callback);
            };
            Client.prototype.createClan = function (name, callback) {
                var params = { name: name };
                this.callService('Clan.create', params, callback);
            };
            Client.prototype.disbandClan = function (clanId, callback) {
                var params = { clanId: clanId };
                this.callService('Clan.disband', params, callback);
            };
            Client.prototype.getClanMemberships = function (userId, callback) {
                var params = { userId: userId };
                this.callService('Clan.getMemberships', params, callback);
            };
            Client.prototype.getClanMembers = function (clanId, offset, limit, callback) {
                var params = { clanId: clanId, offset: offset, limit: limit };
                this.callService('Clan.getMembers', params, callback);
            };
            Client.prototype.getClanInvitations = function (callback) {
                this.callService('Clan.getInvitations', {}, callback);
            };
            Client.prototype.getSentClanInvitations = function (clanId, callback) {
                var params = { clanId: clanId };
                this.callService('Clan.getSentInvitations', params, callback);
            };
            Client.prototype.cancelClanInvitation = function (clanId, userId, callback) {
                var params = { clanId: clanId, userId: userId };
                this.callService('Clan.cancelInvitation', params, callback);
            };
            Client.prototype.inviteUserToClan = function (clanId, userId, callback) {
                var params = { clanId: clanId, userId: userId };
                this.callService('Clan.inviteUser', params, callback);
            };
            Client.prototype.kickClanMember = function (clanId, userId, callback) {
                var params = { clanId: clanId, userId: userId };
                this.callService('Clan.kickUser', params, callback);
            };
            Client.prototype.leaveClan = function (clanId, callback) {
                var params = { clanId: clanId };
                this.callService('Clan.leave', params, callback);
            };
            Client.prototype.answerClanInvitation = function (clanId, accepted, callback) {
                var params = { clanId: clanId, accepted: accepted };
                this.callService('Clan.answerInvitation', params, callback);
            };
            Client.prototype.getClanHighscores = function (options, callback) {
                var params = { options: options };
                this.callService('Clan.getClanHighscores', params, function (result) { return callback(result.data); });
            };
            Client.prototype.share = function (options, callback) {
                var params = { options: options };
                this.callService('Social.share', params, callback);
            };
            Client.prototype.notify = function (options, userId, callback) {
                var params = { options: options, userId: userId };
                this.callService('Social.notify', params, callback);
            };
            Client.prototype.graphAction = function (options, callback) {
                var params = { options: options };
                this.callService('Social.graphAction', params, callback);
            };
            Client.prototype.setCookies = function (cookies, callback) {
                var params = { cookies: cookies };
                this.callService('Game.setCookies', params, function (result) { return callback && callback(result.success); });
            };
            Client.prototype.getCookies = function (callback) {
                this.callService('Game.getCookies', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.getFriendCookies = function (callback) {
                this.callService('Game.getFriendCookies', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.setHighscores = function (entries, callback) {
                var params = { entries: entries };
                this.callService('Highscores.setEntries', params, function (result) {
                    callback && callback(result.success, result.data);
                });
            };
            Client.prototype.getUserHighscore = function (userId, options, callback) {
                var params = { userId: userId, options: options };
                this.callService('Highscores.getUserHighscore', params, function (result) { return callback(result.data); });
            };
            Client.prototype.getHighscores = function (options, callback) {
                var params = { options: options };
                this.callService('Highscores.get', params, function (result) { return callback(result.data); });
            };
            Client.prototype.getExpectedRank = function () {
                var params = {
                    options: arguments[0],
                    score: arguments[1],
                    bias: arguments.length < 4 ? 0 : arguments[2]
                };
                var callback = arguments[arguments.length - 1];
                this.callService('Highscores.getExpectedRank', params, function (result) { return callback(result.data); });
            };
            Client.prototype.sendRequests = function (options, friendIds, invitedFriends, callback) {
                if (friendIds.length == 0 && invitedFriends.length == 0)
                    return callback(kr3mCas.ERROR_EMPTY_DATA, []);
                var params = { options: options, invitedFriends: invitedFriends, friendIds: friendIds };
                this.callService('Request.sendRequests', params, function (result) {
                    callback(result.status, result.data);
                }, function () { return callback(kr3mCas.ERROR_TIMEOUT, []); });
            };
            Client.prototype.hasMail = function (callback) {
                this.callService('Mail.hasNew', {}, callback);
            };
            Client.prototype.getMailBox = function (callback) {
                this.callService('Mail.getMailBox', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.getRequestCount = function (callback) {
                this.callService('Request.getRequestCount', {}, callback);
            };
            Client.prototype.getRequests = function (callback) {
                this.callService('Request.getRequests', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.answerRequest = function (options, callback) {
                var params = { options: options };
                this.callService('Request.answer', params, function (result) { return callback && callback(result.status); });
            };
            Client.prototype.deleteRequest = function (requestId, callback) {
                var params = { requestId: requestId };
                this.callService('Request.delete', params, function (result) { return callback && callback(result.status); });
            };
            Client.prototype.getWallet = function (callback) {
                this.callService('Payment.getWallet', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.getInventory = function (callback) {
                this.callService('Inventory.getInventory', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.getShop = function (callback) {
                this.callService('Shop.getShop', {}, function (result) { return callback(result.data); });
            };
            Client.prototype.buyShopPackage = function (packageId, priceOrCurrencyId, callback) {
                var params = { packageId: packageId, priceOrCurrencyId: priceOrCurrencyId };
                this.callService('Shop.buyPackage', params, function (result) { return callback(result.status); });
            };
            Client.prototype.consumeItem = function (itemId, amount, comment, callback) {
                var params = { itemId: itemId, amount: amount, comment: comment };
                this.callService('Inventory.consumeItem', params, function (result) { return callback(result.status); });
            };
            Client.prototype.pay = function (currencyId, amount, comment, callback) {
                var params = { currencyId: currencyId, amount: amount, comment: comment };
                this.callService('Payment.pay', params, function (result) { return callback(result.status); });
            };
            Client.prototype.getRaffle = function (raffleId, callback) {
                var params = { raffleId: raffleId };
                this.callService('Raffle.getRaffle', params, function (result) { return callback(result.data); });
            };
            Client.prototype.participate = function (raffleId, participation, callback) {
                var params = { raffleId: raffleId, vo: participation };
                this.callService('Raffle.participate', params, function (result) {
                    callback && callback(result.status);
                });
            };
            Client.prototype.getTime = function (callback) {
                this.callService('Tools.getTime', {}, callback);
            };
            Client.prototype.getShortUrl = function (url, callback) {
                var params = { url: url };
                this.callService('Tools.getShortUrl', params, callback);
            };
            Client.prototype.track = function (data) {
                var params = { data: data };
                this.callService('Tools.track', params);
            };
            return Client;
        }(kr3mCas.services.AjaxStub));
        stubs.Client = Client;
    })(stubs = cas.stubs || (cas.stubs = {}));
})(cas || (cas = {}));
var sCasStub = new cas.stubs.Client();
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var anon;
        (function (anon) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, client, cas.tables.DomainVO.METHOD_ANON, options) || this;
                    _this.options.key = kr3mCas.util.Rand.getString(32);
                    return _this;
                }
                Handler.prototype.validate = function () {
                    if (!kr3mCas.util.Validator.username(this.options.username))
                        throw new Error(this.options.username + " is not a valid username");
                };
                Handler.prototype.connect = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            username: this.options.username,
                            key: this.options.key,
                            countryId: sCasStub.countryId,
                            languageId: sCasStub.languageId
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.options.key);
                };
                return Handler;
            }(cas.methods.Handler));
            anon.Handler = Handler;
        })(anon = methods.anon || (methods.anon = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_ANON] = cas.methods.anon.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var antennebayern;
        (function (antennebayern) {
            antennebayern.CONNECT_URL = 'https://oauth.userservice.io/oauth/authorize?response_type=code';
            antennebayern.CLIENT_ID = '150276feb48e086b72775476ec1c4b3bc80d1695bb79b727133d04cadcc0f422';
        })(antennebayern = methods.antennebayern || (methods.antennebayern = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var antennebayern;
        (function (antennebayern) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client) {
                    return _super.call(this, client, cas.tables.DomainVO.METHOD_ANTENNEBAYERN) || this;
                }
                Handler.prototype.getRedirectUrl = function (callback) {
                    sCasStub.getGameConfig(function (gameConfig) {
                        callback(gameConfig.baseUrl);
                    });
                };
                Handler.prototype.isConnected = function (callback) {
                    var _this = this;
                    if (this.client.jumpPadData)
                        kr3mCas.util.Browser.setCookie('abjpdcas', kr3mCas.util.Json.encode(this.client.jumpPadData));
                    var code = kr3mCas.util.Browser.getQueryValue('code');
                    if (!code)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    this.getRedirectUrl(function (redirectUrl) {
                        var data = {
                            method: _this.method,
                            data: { code: code, redirectUrl: redirectUrl }
                        };
                        callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                    });
                };
                Handler.prototype.connect = function (callback) {
                    this.getRedirectUrl(function (redirectUrl) {
                        var url = kr3mCas.util.Url.addParameters(antennebayern.CONNECT_URL, {
                            redirect_uri: redirectUrl,
                            client_id: antennebayern.CLIENT_ID
                        });
                        window.open(url, '_top');
                    });
                };
                Handler.prototype.receiveRequests = function (callback) {
                    var _this = this;
                    _super.prototype.receiveRequests.call(this, function (requestIds) {
                        var jumpPadData = _this.client.jumpPadData;
                        if (jumpPadData && jumpPadData.casRequest)
                            requestIds.push(jumpPadData.casRequest);
                        var cookie = kr3mCas.util.Json.decode(kr3mCas.util.Browser.getCookie('abjpdcas'));
                        if (cookie && cookie.casRequest)
                            requestIds.push(cookie.casRequest);
                        requestIds = kr3mCas.util.Util.removeDuplicates(requestIds);
                        callback(requestIds);
                    });
                };
                return Handler;
            }(cas.methods.Handler));
            antennebayern.Handler = Handler;
        })(antennebayern = methods.antennebayern || (methods.antennebayern = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_ANTENNEBAYERN] = cas.methods.antennebayern.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var azdirect;
        (function (azdirect) {
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            azdirect.Options = Options;
        })(azdirect = methods.azdirect || (methods.azdirect = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var azdirect;
        (function (azdirect) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, client, cas.tables.DomainVO.METHOD_AZDIRECT, options) || this;
                }
                Handler.prototype.validate = function (checkName) {
                    if (!this.options.id)
                        throw new Error(this.options.id + " is not a valid id");
                    if (checkName && !kr3mCas.util.Validator.username(this.options.username))
                        throw new Error(this.options.username + " is not a valid username");
                    if (!kr3mCas.util.Validator.securePassword(this.options.password, cas.PASSWORD_SECURITY_LEVEL))
                        throw new Error(this.options.password + " is not a valid password");
                };
                Handler.prototype.register = function (callback) {
                    this.validate(true);
                    var data = {
                        method: this.method,
                        data: {
                            id: this.options.id,
                            username: this.options.username,
                            password: this.options.password,
                            countryId: sCasStub.countryId,
                            languageId: sCasStub.languageId
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.login = function (callback) {
                    this.validate(false);
                    var data = {
                        method: this.method,
                        data: {
                            id: this.options.id,
                            password: this.options.password
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.options.id);
                };
                return Handler;
            }(cas.methods.Handler));
            azdirect.Handler = Handler;
        })(azdirect = methods.azdirect || (methods.azdirect = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_AZDIRECT] = cas.methods.azdirect.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var bestcomm;
        (function (bestcomm) {
            bestcomm.INITIAL_USER_NAME = "Neuer Spieler";
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            bestcomm.Options = Options;
        })(bestcomm = methods.bestcomm || (methods.bestcomm = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var bestcomm;
        (function (bestcomm) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, client, cas.tables.DomainVO.METHOD_BESTCOMM, options) || this;
                }
                Handler.prototype.isConnected = function (callback) {
                    this.options.id = kr3mCas.util.Browser.getQueryValue("uid");
                    if (!this.options.id)
                        return callback(new kr3mCas.services.CallbackResult(cas.ERROR_LOGIN_FAILED));
                    var data = { method: this.method, data: this.options };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.logout = function (callback) {
                    var url = window.location.href;
                    url = kr3mCas.util.Url.removeParameter(url, "uid");
                    window.location.assign(url);
                };
                Handler.prototype.postLoginGate = function (callback) {
                    var _this = this;
                    sCasStub.getUser(function (user) {
                        if (user.name != bestcomm.INITIAL_USER_NAME)
                            return callback();
                        _this.client.ui.completeName(function () { return callback(); });
                    });
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.options.id);
                };
                return Handler;
            }(cas.methods.Handler));
            bestcomm.Handler = Handler;
        })(bestcomm = methods.bestcomm || (methods.bestcomm = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_BESTCOMM] = cas.methods.bestcomm.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var blick;
        (function (blick) {
            blick.TRACKING_CODE = 'IFR_GWS_15392266';
        })(blick = methods.blick || (methods.blick = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var blick;
        (function (blick) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_BLICK, options) || this;
                }
                Handler.prototype.connectSync = function (callback) {
                    parent.postMessage({ loginAction: true, ssoTrackingSource: blick.TRACKING_CODE }, '*');
                    return true;
                };
                Handler.prototype.isConnected = function (callback) {
                    var _this = this;
                    Handler.userDelay.call(function () {
                        var user = Handler.user;
                        var data = { method: _this.method, data: { user: user } };
                        callback(new kr3mCas.services.CallbackResult(user && user.loggedIn ? kr3mCas.SUCCESS : kr3mCas.ERROR_EXTERNAL, data));
                    });
                };
                Handler.userDelay = new kr3mCas.async.Delayed();
                return Handler;
            }(cas.methods.Handler));
            blick.Handler = Handler;
        })(blick = methods.blick || (methods.blick = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_BLICK] = cas.methods.blick.Handler;
window.addEventListener('message', function (event) {
    cas.methods.blick.Handler.user = event && event.data && event.data.user;
    cas.methods.blick.Handler.userDelay.execute();
});
setTimeout(function () {
    cas.methods.blick.Handler.userDelay.execute();
}, 1000);
var cas;
(function (cas) {
    var dotat;
    (function (dotat) {
        var UserProfile = (function () {
            function UserProfile() {
            }
            return UserProfile;
        }());
        dotat.UserProfile = UserProfile;
    })(dotat = cas.dotat || (cas.dotat = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var dotat;
    (function (dotat) {
        var Wrapper = (function () {
            function Wrapper() {
                var self = cas.dotat.Wrapper;
                self.timerId = self.timerId || setInterval(this.keepAlive.bind(this), 30 * 60 * 1000);
            }
            Wrapper.prototype.buildUrl = function (prefix, suffix) {
                var host = window.location.host;
                var parts = host.split(".");
                if (parts.length < 3)
                    parts = ["www", "news", "at"];
                parts[0] = prefix;
                return "https://" + parts.join(".") + suffix;
            };
            Wrapper.prototype.keepAlive = function () {
                var url = this.buildUrl("www", "/refresh-cookie");
                kr3mCas.util.Ajax.call(url);
            };
            Wrapper.prototype.getSessionId = function () {
                return kr3mCas.util.Browser.getCookie("OCCSession");
            };
            Wrapper.prototype.login = function () {
                var url = this.buildUrl("www", "/login?login.redirectlogin=/login");
                top.location.assign(url);
            };
            Wrapper.prototype.register = function () {
                var url = this.buildUrl("www", "/registration?origin=playground&login.redirectlogin=/login");
                top.location.assign(url);
            };
            return Wrapper;
        }());
        dotat.Wrapper = Wrapper;
    })(dotat = cas.dotat || (cas.dotat = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var dotat;
        (function (dotat) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_DOTAT, options) || this;
                    _this.dotat = new cas.dotat.Wrapper();
                    return _this;
                }
                Handler.prototype.register = function (callback) {
                    this.dotat.register();
                };
                Handler.prototype.login = function (callback) {
                    this.dotat.login();
                };
                Handler.prototype.isConnected = function (callback) {
                    var sessionId = this.dotat.getSessionId();
                    if (!sessionId)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXPIRED));
                    var data = {
                        method: this.method,
                        data: { sessionId: sessionId }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                return Handler;
            }(cas.methods.Handler));
            dotat.Handler = Handler;
        })(dotat = methods.dotat || (methods.dotat = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_DOTAT] = cas.methods.dotat.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var email;
        (function (email) {
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            email.Options = Options;
        })(email = methods.email || (methods.email = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var email;
        (function (email) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_EMAIL, options) || this;
                }
                Handler.prototype.getSettings = function (callback) {
                    sCasStub.getEmailSettings(callback);
                };
                Handler.prototype.validate = function (callback) {
                    var _this = this;
                    this.getSettings(function (settings) {
                        if (!kr3mCas.util.Validator.email(_this.options.email))
                            return callback(false);
                        if (settings.password && !kr3mCas.util.Validator.securePassword(_this.options.password, cas.PASSWORD_SECURITY_LEVEL))
                            return callback(false);
                        callback(true);
                    });
                };
                Handler.prototype.register = function (callback) {
                    var _this = this;
                    this.validate(function (isValid) {
                        if (!isValid)
                            return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_PARAMS));
                        var data = {
                            method: _this.method,
                            data: {
                                email: _this.options.email,
                                password: _this.options.password,
                                username: _this.options.username,
                                newsletter: _this.options.newsletter,
                                countryId: sCasStub.countryId,
                                languageId: sCasStub.languageId
                            }
                        };
                        callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                    });
                };
                Handler.prototype.login = function (callback) {
                    var _this = this;
                    this.validate(function (isValid) {
                        if (!isValid)
                            return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_PARAMS));
                        var data = {
                            method: _this.method,
                            data: {
                                email: _this.options.email,
                                password: _this.options.password
                            }
                        };
                        callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                    });
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.options.email);
                };
                Handler.prototype.canInviteInUI = function () {
                    return true;
                };
                return Handler;
            }(cas.methods.Handler));
            email.Handler = Handler;
        })(email = methods.email || (methods.email = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_EMAIL] = cas.methods.email.Handler;
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Payment = (function () {
            function Payment() {
            }
            return Payment;
        }());
        vo.Payment = Payment;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var CriticalSection = (function () {
            function CriticalSection(limit) {
                if (limit === void 0) { limit = 1; }
                this.current = 0;
                this.pending = [];
                this.freeTicket = 0;
                this.ticketThreshold = 0;
                this.limit = limit;
            }
            CriticalSection.prototype.setConcurrentLimit = function (limit) {
                this.limit = limit;
            };
            CriticalSection.prototype.check = function () {
                if (!this.isFull() && this.pending.length > 0) {
                    ++this.current;
                    var func = this.pending.shift();
                    func(this.exit.bind(this, ++this.freeTicket));
                }
            };
            CriticalSection.prototype.reset = function (clearPending) {
                if (clearPending === void 0) { clearPending = false; }
                this.ticketThreshold = this.freeTicket;
                this.current = 0;
            };
            CriticalSection.prototype.exit = function (ticket) {
                if (ticket > this.ticketThreshold)
                    --this.current;
                this.check();
            };
            CriticalSection.prototype.enter = function (callback) {
                this.pending.push(callback);
                this.check();
            };
            CriticalSection.prototype.enterHighPrio = function (callback) {
                this.pending.unshift(callback);
                this.check();
            };
            CriticalSection.prototype.enterTimeout = function (callback, timeout, timeoutCallback) {
                var _this = this;
                if (timeout <= 0 && this.isFull())
                    return timeoutCallback();
                if (!this.isFull())
                    return this.enter(callback);
                var timerId = null;
                var helper = function (exit) {
                    clearTimeout(timerId);
                    callback(exit);
                };
                this.pending.push(helper);
                timerId = setTimeout(function () {
                    kr3mCas.util.Util.remove(_this.pending, helper);
                    timeoutCallback();
                }, timeout);
                this.check();
            };
            CriticalSection.prototype.hasPending = function () {
                return this.pending.length > 0;
            };
            CriticalSection.prototype.isEmpty = function () {
                return this.current <= 0;
            };
            CriticalSection.prototype.isFull = function () {
                return this.limit > 0 && this.current >= this.limit;
            };
            CriticalSection.prototype.getCurrentCount = function () {
                return this.current;
            };
            CriticalSection.prototype.getPendingCount = function () {
                return this.pending.length;
            };
            CriticalSection.prototype.getLimit = function () {
                return this.limit;
            };
            return CriticalSection;
        }());
        async.CriticalSection = CriticalSection;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var fb;
    (function (fb) {
        fb.API_VERSION = "v2.8";
        fb.REQUEST_TYPE_ASKFOR = "ASKFOR";
        fb.REQUEST_TYPE_GIFT = "GIFT";
        fb.REQUEST_TYPE_INVITE = "INVITE";
        fb.REQUEST_TYPE_SEND = "SEND";
        fb.REQUEST_TYPE_TURN = "TURN";
        fb.P_EMAIL = "email";
        fb.P_FRIENDS = "user_friends";
        fb.P_LIKES = "user_likes";
        fb.P_PROFILE = "public_profile";
        fb.P_PUBLISH = "publish_actions";
        fb.PERMISSIONS = ["email", "user_friends", "user_likes", "public_profile", "publish_actions"];
        var User = (function () {
            function User() {
            }
            return User;
        }());
        fb.User = User;
        var Friend = (function () {
            function Friend() {
            }
            return Friend;
        }());
        fb.Friend = Friend;
        var PaymentResult = (function () {
            function PaymentResult() {
            }
            return PaymentResult;
        }());
        fb.PaymentResult = PaymentResult;
    })(fb = kr3mCas.fb || (kr3mCas.fb = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var fb;
    (function (fb) {
        function initFacebook(appId, callback, params, language) {
            if (window.fbAsyncInit)
                return kr3mCas.util.Log.logError("Facebook init already called");
            params = params || {};
            params.appId = appId;
            params.status = params.status !== undefined ? params.status : true;
            params.xfbml = params.xfbml !== undefined ? params.xfbml : false;
            params.cookie = params.cookie !== undefined ? params.cookie : true;
            params.version = params.version || kr3mCas.fb.API_VERSION;
            language = language || "de_DE";
            window.fbAsyncInit = function () {
                FB.init(params);
                callback && callback();
            };
            if (document.getElementById("facebook-jssdk"))
                return kr3mCas.util.Log.logError("Facebook init already called");
            var js = document.createElement("script");
            js.id = "facebook-jssdk";
            js.src = "//connect.facebook.com/" + language + "/sdk.js";
            var fjs = document.getElementsByTagName("script")[0];
            if (fjs)
                fjs.parentNode.insertBefore(js, fjs);
            else
                document.body.appendChild(js);
        }
        fb.initFacebook = initFacebook;
    })(fb = kr3mCas.fb || (kr3mCas.fb = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var fb;
    (function (fb) {
        var Wrapper = (function () {
            function Wrapper(appId, namespace, languageId) {
                this.eventListeners = {};
                this.appId = appId;
                this.namespace = namespace;
                this.languageId = languageId;
            }
            Wrapper.prototype.callDelayed = function (func) {
                Wrapper.delayed.call(func);
                if (Wrapper.needsInit) {
                    Wrapper.needsInit = false;
                    if (!this.appId) {
                        kr3mCas.util.Log.logError("no facebook app ID found");
                        return;
                    }
                    kr3mCas.fb.initFacebook(this.appId, function () {
                        Wrapper.delayed.execute();
                    }, null, this.languageId);
                }
            };
            Wrapper.prototype.isConnected = function (callback) {
                this.callDelayed(function () {
                    FB.getLoginStatus(function (statusResponse) {
                        callback(statusResponse.status == "connected");
                    });
                });
            };
            Wrapper.prototype.connect = function (callback, permissions) {
                var _this = this;
                this.callDelayed(function () {
                    _this.isConnected(function (isConnected) {
                        if (isConnected)
                            return callback(true);
                        var options;
                        if (permissions && permissions != "")
                            options = { scope: permissions };
                        FB.login(function (loginResponse) {
                            callback(!!loginResponse.authResponse);
                        }, options);
                    });
                });
            };
            Wrapper.prototype.logout = function (callback) {
                this.callDelayed(function () {
                    FB.logout(callback);
                });
            };
            Wrapper.prototype.on = function (eventName, listener) {
                var _this = this;
                this.callDelayed(function () {
                    var listeners = _this.eventListeners[eventName];
                    if (!listeners) {
                        listeners = [];
                        _this.eventListeners[eventName] = listeners;
                        FB.Event.subscribe(eventName, _this.handleEvent.bind(_this, eventName));
                    }
                    listeners.push(listener);
                });
            };
            Wrapper.prototype.off = function (eventName, listener) {
                var listeners = this.eventListeners[eventName];
                if (!listeners)
                    return;
                kr3mCas.util.Util.remove(listeners, listener);
            };
            Wrapper.prototype.handleEvent = function (eventName, response) {
                var listeners = this.eventListeners[eventName];
                if (!listeners)
                    return;
                for (var i = 0; i < listeners.length; ++i)
                    kr3mCas.util.trySafe(listeners[i], response);
            };
            Wrapper.prototype.getUser = function (callback) {
                this.callDelayed(function () {
                    FB.api("/me", { fields: "locale,first_name,last_name,gender,email" }, callback);
                });
            };
            Wrapper.prototype.getPermissionsStatus = function (callback) {
                this.callDelayed(function () {
                    FB.api("/me/permissions", "get", {}, function (response) {
                        if (!response.data || !response.data.length)
                            return callback({});
                        var statusByPermission = {};
                        for (var i = 0; i < response.data.length; ++i)
                            statusByPermission[response.data[i].permission] = response.data[i].status;
                        callback(statusByPermission);
                    });
                });
            };
            Wrapper.prototype.requestPermissions = function (permissions, isReRequest, callback) {
                var options = {
                    scope: permissions.join(","),
                    return_scopes: true
                };
                if (isReRequest)
                    options.auth_type = "rerequest";
                FB.login(function (loginResponse) {
                    var allGranted = true;
                    var grantedPermissions = loginResponse.grantedScopes ? loginResponse.grantedScopes.split(",") : [];
                    for (var i = 0; i < permissions.length; ++i) {
                        if (!kr3mCas.util.Util.contains(grantedPermissions, permissions[i]))
                            allGranted = false;
                    }
                    callback(allGranted);
                }, options);
            };
            Wrapper.prototype.hasPermissions = function (permissions, callback) {
                var _this = this;
                this.callDelayed(function () {
                    Wrapper.permissionCritSec.enter(function (exit) {
                        _this.getPermissionsStatus(function (statusByPermission) {
                            var missing = [];
                            for (var i = 0; i < permissions.length; ++i) {
                                var status = statusByPermission[permissions[i]];
                                if (status != "granted")
                                    missing.push(permissions[i]);
                            }
                            callback(missing.length == 0, missing);
                            exit();
                        });
                    });
                });
            };
            Wrapper.prototype.requirePermissions = function (permissions, callback) {
                var _this = this;
                this.callDelayed(function () {
                    Wrapper.permissionCritSec.enter(function (exit) {
                        _this.getPermissionsStatus(function (statusByPermission) {
                            var reRequest = false;
                            var missing = [];
                            for (var i = 0; i < permissions.length; ++i) {
                                var status = statusByPermission[permissions[i]];
                                if (status != "granted")
                                    missing.push(permissions[i]);
                                reRequest = reRequest || (status == "declined");
                            }
                            if (missing.length == 0) {
                                callback(true);
                                return exit();
                            }
                            _this.requestPermissions(missing, reRequest, function (allGranted) {
                                callback(allGranted);
                                exit();
                            });
                        });
                    });
                });
            };
            Wrapper.prototype.revokePermissions = function (permissions, callback) {
                this.callDelayed(function () {
                    kr3mCas.async.Loop.forEach(permissions, function (permission, next) {
                        FB.api("/me/permissions/" + permission, "delete", function (response) {
                            if (!response)
                                callback(false);
                            else
                                next();
                        });
                    }, function () {
                        callback(true);
                    });
                });
            };
            Wrapper.prototype.unregister = function (callback) {
                this.callDelayed(function () {
                    FB.api("/me/permissions", "delete", function (response) {
                        callback(!!response);
                    });
                });
            };
            Wrapper.prototype.share = function (message, url, callback) {
                var _this = this;
                this.callDelayed(function () {
                    _this.requirePermissions([kr3mCas.fb.P_PUBLISH], function (allGranted) {
                        if (!allGranted)
                            return callback(kr3mCas.ERROR_DENIED);
                        FB.api("/me/feed", "post", { message: message, link: url }, function (response) {
                            if (!response || response.error)
                                return callback(kr3mCas.ERROR_EXTERNAL, response ? response.error : undefined);
                            callback(kr3mCas.SUCCESS);
                        });
                    });
                });
            };
            Wrapper.prototype.paginate = function (firstResponse, callback) {
                if (!firstResponse)
                    return callback([]);
                var allResponses = [firstResponse];
                if (!firstResponse.paging || !firstResponse.paging.next)
                    return callback(allResponses);
                var url = firstResponse.paging.next;
                kr3mCas.async.Loop.loop(function (next) {
                    kr3mCas.util.Ajax.call(url, function (response) {
                        if (!response)
                            return callback(allResponses);
                        allResponses.push(response);
                        if (!response.paging || !response.paging.next)
                            return callback(allResponses);
                        url = response.paging.next;
                        next(true);
                    }, "json", function () { return callback(allResponses); });
                });
            };
            Wrapper.prototype.getFriends = function (callback) {
                var _this = this;
                this.callDelayed(function () {
                    _this.requirePermissions([kr3mCas.fb.P_FRIENDS], function (allGranted) {
                        if (!allGranted)
                            return callback([]);
                        FB.api("/me/friends", function (response) {
                            if (!response || response.error)
                                return callback([]);
                            _this.paginate(response, function (allResponses) {
                                var friends = [];
                                for (var i = 0; i < allResponses.length; ++i)
                                    friends = friends.concat(allResponses[i].data);
                                for (var i = 0; i < friends.length; ++i) {
                                    if (typeof friends[i].picture == "object")
                                        friends[i].picture = friends[i].picture.data.url;
                                }
                                callback(friends);
                            });
                        });
                    });
                });
            };
            Wrapper.prototype.getRequestIds = function (callback) {
                var raw = kr3mCas.util.Browser.getQueryValue("request_ids");
                var requestIds = raw ? raw.split(",") : [];
                callback(requestIds);
            };
            Wrapper.prototype.deleteRequest = function (requestId, callback) {
                this.callDelayed(function () {
                    FB.api(requestId, "delete", function (response) {
                        if (callback)
                            callback(response.success ? kr3mCas.SUCCESS : kr3mCas.ERROR_EXTERNAL);
                    });
                });
            };
            Wrapper.prototype.request = function () {
                var message = arguments[0];
                var callback = arguments[arguments.length - 1];
                switch (arguments.length) {
                    case 3:
                        var customData = arguments[1];
                        break;
                    case 4:
                        var type = arguments[1];
                        var obj = arguments[2];
                        break;
                    case 5:
                        var type = arguments[1];
                        var obj = arguments[2];
                        var customData = arguments[3];
                        break;
                    case 6:
                        var type = arguments[1];
                        var obj = arguments[2];
                        var customData = arguments[3];
                        var inviteIds = arguments[4];
                        break;
                }
                this.callDelayed(function () {
                    var options = {
                        method: "apprequests",
                        to: inviteIds ? inviteIds.join(",") : undefined,
                        message: message.slice(0, 255),
                        action_type: type,
                        object_id: obj,
                        data: customData ? kr3mCas.util.Json.encode(customData) : undefined
                    };
                    FB.ui(options, function (response) {
                        if (!response || response.error)
                            return callback(null, []);
                        callback(response.request, response.to);
                    });
                });
            };
            Wrapper.prototype.buyProduct = function (transactionId, productUrl, callback) {
                this.callDelayed(function () {
                    var options = {
                        method: "pay",
                        action: "purchaseitem",
                        product: productUrl,
                        request_id: transactionId
                    };
                    FB.ui(options, function (response) {
                        if (!response || response.error || response.error_code) {
                            if (response.error_code == 1383010)
                                return callback(kr3mCas.ERROR_CANCELLED);
                            return callback(kr3mCas.ERROR_EXTERNAL);
                        }
                        callback(kr3mCas.SUCCESS, response);
                    });
                });
            };
            Wrapper.needsInit = true;
            Wrapper.delayed = new kr3mCas.async.Delayed();
            Wrapper.permissionCritSec = new kr3mCas.async.CriticalSection();
            return Wrapper;
        }());
        fb.Wrapper = Wrapper;
    })(fb = kr3mCas.fb || (kr3mCas.fb = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var facebook;
        (function (facebook) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, client, cas.tables.DomainVO.METHOD_FACEBOOK, options) || this;
                    _this.delay = new kr3mCas.async.Delayed();
                    _this.initRunning = false;
                    return _this;
                }
                Handler.prototype.callDelayed = function (callback) {
                    var _this = this;
                    this.delay.call(callback);
                    if (this.initRunning)
                        return;
                    this.initRunning = true;
                    sCasStub.getFacebookSettings(function (settings) {
                        if (!settings.appId)
                            return kr3mCas.util.Log.logError("no facebook app ID found on server");
                        _this.client.getLanguage(function (lang) {
                            var fbLanguage = "en_US";
                            switch (lang) {
                                case "de":
                                    fbLanguage = "de_DE";
                                    break;
                                case "fr":
                                    fbLanguage = "fr_FR";
                                    break;
                                case "it":
                                    fbLanguage = "it_IT";
                                    break;
                                default:
                                    break;
                            }
                            _this.settings = settings;
                            _this.fb = new kr3mCas.fb.Wrapper(settings.appId, settings.namespace, fbLanguage);
                            _this.delay.execute();
                        });
                    });
                };
                Handler.prototype.getSettings = function (callback) {
                    sCasStub.getFacebookSettings(callback);
                };
                Handler.prototype.isConnected = function (callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.isConnected(function (isLoggedIn) {
                            if (!isLoggedIn)
                                return callback(new kr3mCas.services.CallbackResult(cas.ERROR_LOGIN_FAILED));
                            _this.fb.getUser(function (user) {
                                var data = { method: _this.method, data: user };
                                _this.userId = user.id;
                                callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                            });
                        });
                    });
                };
                Handler.prototype.connect = function (callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.connect(function (isLoggedIn) {
                            if (!isLoggedIn)
                                return callback(new kr3mCas.services.CallbackResult(cas.ERROR_LOGIN_FAILED));
                            _this.fb.getUser(function (user) {
                                _this.userId = user.id;
                                var data = { method: _this.method, data: user };
                                callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                            });
                        }, _this.settings.permissions);
                    });
                };
                Handler.prototype.share = function (options, callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.share(options.message, options.url, function (status, error) {
                            var result = new kr3mCas.services.CallbackResult(status);
                            if (error)
                                result.feedback = error;
                            callback(result);
                        });
                    });
                };
                Handler.prototype.logout = function (callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.logout(function () {
                            callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS));
                        });
                    });
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.userId);
                };
                Handler.prototype.getFriendUniqueKeys = function (silent, callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.hasPermissions([kr3mCas.fb.P_FRIENDS], function (hasPermissions) {
                            if (!hasPermissions)
                                return callback([]);
                            _this.fb.getFriends(function (fbFriends) {
                                callback(kr3mCas.util.Util.gather(fbFriends, "id"));
                            });
                        });
                    });
                };
                Handler.prototype.confirmRequests = function (options, existingRawIds, invitedFriends, callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        var inviteIds = existingRawIds.concat(kr3mCas.util.Util.gather(invitedFriends, "uniqueKey"));
                        _this.fb.request(options.receiverMessage, options.type, options.obj, null, inviteIds, function (fbRequestId, fbFriendIds) {
                            if (!fbRequestId)
                                return callback([], []);
                            var invited = [];
                            for (var i = 0; i < fbFriendIds.length; ++i) {
                                var friend = new cas.vo.RawFriend();
                                friend.method = cas.tables.DomainVO.METHOD_FACEBOOK;
                                friend.uniqueKey = fbFriendIds[i];
                                friend.requestKey = fbRequestId;
                                invited.push(friend);
                            }
                            callback([], invited);
                        });
                    });
                };
                Handler.prototype.receiveRequests = function (callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.getRequestIds(function (requestIds) {
                            for (var i = 0; i < requestIds.length; ++i)
                                _this.fb.deleteRequest(requestIds[i]);
                            if (requestIds.length == 0)
                                return callback(requestIds);
                            sCasStub.getFacebookRequestUrl(requestIds, function (url) {
                                if (url)
                                    top.location.assign(url);
                                else
                                    callback(requestIds);
                            });
                        });
                    });
                };
                Handler.prototype.pay = function (payment, callback) {
                    var _this = this;
                    this.callDelayed(function () {
                        _this.fb.buyProduct(payment.id, payment.providerData.productUrl, function (status, paymentResult) {
                            callback(new kr3mCas.services.CallbackResult(status, paymentResult));
                        });
                    });
                };
                return Handler;
            }(cas.methods.Handler));
            facebook.Handler = Handler;
        })(facebook = methods.facebook || (methods.facebook = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_FACEBOOK] = cas.methods.facebook.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var ifb;
        (function (ifb) {
            ifb.FORUM_BASE_URL = "https://www.betriebsrat.de";
            ifb.FORUM_REGISTER_URL = ifb.FORUM_BASE_URL + "/portal/registrieren.html";
            ifb.FORUM_URL = ifb.FORUM_BASE_URL + "/portal/forum.html";
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            ifb.Options = Options;
        })(ifb = methods.ifb || (methods.ifb = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var ifb;
        (function (ifb) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_IFB, options) || this;
                }
                Handler.prototype.validate = function () {
                    if (!this.options.username)
                        throw new Error(this.options.username + ' is not a valid username');
                    if (!this.options.password)
                        throw new Error(this.options.password + ' is not a valid password');
                };
                Handler.prototype.register = function (callback) {
                    window.open(cas.methods.ifb.FORUM_REGISTER_URL, '_blank');
                };
                Handler.prototype.login = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            username: this.options.username,
                            password: this.options.password
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                return Handler;
            }(cas.methods.Handler));
            ifb.Handler = Handler;
        })(ifb = methods.ifb || (methods.ifb = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_IFB] = cas.methods.ifb.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var kronehit;
        (function (kronehit) {
            kronehit.URL_LOGIN = 'https://www.kronehit.at/Security/login?BackURL=%2Fgaming%2Fplayground-test%2F';
            kronehit.URL_REGISTER = 'https://www.kronehit.at/signup';
            kronehit.URL_LOGOUT = '';
        })(kronehit = methods.kronehit || (methods.kronehit = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var kronehit;
        (function (kronehit) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_KRONEHIT, options) || this;
                    try {
                        var w = window;
                        while (true) {
                            var params = kr3mCas.util.Browser.getQueryValues(w);
                            _this.frameId = params['i'];
                            _this.token = params['t'];
                            if (_this.frameId && _this.token)
                                break;
                            if (w == top)
                                break;
                            w = w.parent;
                        }
                    }
                    catch (error) {
                    }
                    return _this;
                }
                Handler.prototype.login = function (callback) {
                    location.href = kronehit.URL_LOGIN;
                };
                Handler.prototype.register = function (callback) {
                    location.href = kronehit.URL_REGISTER;
                };
                Handler.prototype.logout = function (callback) {
                    location.href = kronehit.URL_LOGOUT;
                };
                Handler.prototype.isConnected = function (callback) {
                    if (!this.frameId)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    var data = {
                        method: this.method,
                        data: {
                            frameId: this.frameId,
                            token: this.token
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                return Handler;
            }(cas.methods.Handler));
            kronehit.Handler = Handler;
        })(kronehit = methods.kronehit || (methods.kronehit = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_KRONEHIT] = cas.methods.kronehit.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var okapi;
        (function (okapi) {
            okapi.URL_LOGIN = "https://login.nzz.ch/";
            okapi.URL_REGISTER = "https://abo.nzz.ch/registrieren/";
            okapi.URL_API = "https://c1api.nzz.ch/cre-1.0/api/";
            okapi.API_KEY = "B715nGE2wYRV+p4AkrVxwBxjHMyesQEC5m7Lduwg++U=";
            okapi.API_SECRET = "FwBSQgXvqbS7qarvZgFtk3bbf3e7Ls0JjaQ/dGuPZFnAmy4+50lDsXuWNWr7c53lPEH90pKDqg8bA4IQqt476q6fi3IixGYdqBgxRY88/arFwjdmNkidvCa4NyaoSLg0qepij5QtzH/39p2kR02cQK4AkU1KjGLbQSSTztRPUWTQcm6UQiRC0ZGH3fvdE3sfa2s0PCHcat7O3LSMpv+DVB5H31K9Hv20gTLAdcoGakwstuPKPVUrMNxZFqN6kS/v26rim5IkixY1KI9GC3uNKKN2pQrhFLo0XaavE6ZiDLsb9yo4lXZM6wnEUpEAAJbafed6vUvMYp/mnhvp27tYnyGI8z5d/ywoBpxhX0we6tIVsnL+ALjvvHYuNxH1Wgz70eO5WObD42NlBKSG3fO9nRzu73Ex2NvWCDZ/+cs8WPCL4UKZmM+TykG8kKCUKCS4aBQEenjQxv2kLOIf0fT2AHSoRMX5KOoOiTGT0PAF27AaAjPCy0LoGYA8keZPZgAELhrbJ7GcUw7ygsUQqZEUGRcjqJBA/Liqab0NxLFiIvIiI5Y3029xH9KqJh6S8nE1xKq2hbG7ClYmbdkSAcNTufpaE3+IKJ92Qq6d7f+JL1drtaRainwGYf0SAWwi8oSHn+2amVJn0k2jqA+0RqgaJzQTTzeieuVcgdCO+TWR6vk=";
        })(okapi = methods.okapi || (methods.okapi = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var okapi;
        (function (okapi) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_OKAPI, options) || this;
                    _this.userId = kr3mCas.util.Browser.getCookie("ens_c1pid");
                    return _this;
                }
                Handler.prototype.redirect = function (win, url) {
                    var current = win.location.toString();
                    url = kr3mCas.util.Url.addParameter(url, "target", current);
                    win.location.assign(url);
                };
                Handler.prototype.login = function (callback) {
                    try {
                        this.redirect(top, okapi.URL_LOGIN);
                    }
                    catch (e) {
                        this.redirect(window, okapi.URL_LOGIN);
                    }
                };
                Handler.prototype.register = function (callback) {
                    try {
                        this.redirect(top, okapi.URL_REGISTER);
                    }
                    catch (e) {
                        this.redirect(window, okapi.URL_REGISTER);
                    }
                };
                Handler.prototype.isConnected = function (callback) {
                    if (!this.userId)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    var data = {
                        method: this.method,
                        data: {
                            userId: this.userId
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                return Handler;
            }(cas.methods.Handler));
            okapi.Handler = Handler;
        })(okapi = methods.okapi || (methods.okapi = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_OKAPI] = cas.methods.okapi.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var rewardo;
        (function (rewardo) {
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            rewardo.Options = Options;
        })(rewardo = methods.rewardo || (methods.rewardo = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var rewardo;
        (function (rewardo) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_REWARDO, options) || this;
                }
                Handler.prototype.validate = function () {
                    if (!kr3mCas.util.Validator.email(this.options.email))
                        throw new Error(this.options.email + " is not a valid email adress");
                    if (!kr3mCas.util.Validator.securePassword(this.options.password, cas.PASSWORD_SECURITY_LEVEL))
                        throw new Error(this.options.password + " is not a valid password");
                };
                Handler.prototype.register = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            email: this.options.email,
                            password: this.options.password,
                            username: this.options.username,
                            newsletter: this.options.newsletter,
                            eula: this.options.eula,
                            countryId: sCasStub.countryId,
                            languageId: sCasStub.languageId
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.login = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            email: this.options.email,
                            password: this.options.password
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.canInviteInUI = function () {
                    return true;
                };
                return Handler;
            }(cas.methods.Handler));
            rewardo.Handler = Handler;
        })(rewardo = methods.rewardo || (methods.rewardo = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_REWARDO] = cas.methods.rewardo.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var rpo;
        (function (rpo) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_RPO, options) || this;
                    _this.ssoData = kr3mCas.util.Browser.getCookie("sso") || "";
                    _this.ssoData = _this.ssoData.replace(/^"(.+)"$/, "$1");
                    return _this;
                }
                Handler.prototype.login = function (callback) {
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_CANCELLED));
                    top.postMessage("frame:playgroundframe,loginForm:showLoginForm", "*");
                };
                Handler.prototype.register = function (callback) {
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_CANCELLED));
                    top.postMessage("frame:playgroundframe,loginForm:showRegisterForm", "*");
                };
                Handler.prototype.logout = function (callback) {
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_CANCELLED));
                    top.postMessage("frame:playgroundframe,loginForm:showLoginForm", "*");
                };
                Handler.prototype.isConnected = function (callback) {
                    if (!this.ssoData)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    var data = {
                        method: this.method,
                        data: { ssoData: this.ssoData }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                return Handler;
            }(cas.methods.Handler));
            rpo.Handler = Handler;
        })(rpo = methods.rpo || (methods.rpo = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_RPO] = cas.methods.rpo.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var sueddeutsche;
        (function (sueddeutsche) {
            var Settings = (function () {
                function Settings() {
                }
                return Settings;
            }());
            sueddeutsche.Settings = Settings;
            sueddeutsche.SZ_LOGIN_URL = 'https://id.sueddeutsche.de';
        })(sueddeutsche = methods.sueddeutsche || (methods.sueddeutsche = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var sueddeutsche;
        (function (sueddeutsche) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client) {
                    return _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_SUEDDEUTSCHE) || this;
                }
                Handler.prototype.getSettings = function (callback) {
                    if (Handler.settings)
                        return callback(Handler.settings);
                    sCasStub.callService('Sso.getSzSettings', {}, function (settings) {
                        Handler.settings = settings;
                        callback(settings);
                    });
                };
                Handler.prototype.isConnected = function (callback) {
                    var _this = this;
                    this.getSettings(function (settings) {
                        var selfServiceTicket = kr3mCas.util.Browser.getQueryValue('st', window);
                        var topServiceTicket = kr3mCas.util.Browser.getQueryValue('st', top);
                        if (!selfServiceTicket && !topServiceTicket) {
                            var selfRe = kr3mCas.util.Browser.getQueryValue('re', window);
                            var topRe = kr3mCas.util.Browser.getQueryValue('re', top);
                            if (selfRe || topRe)
                                return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                            var redirectUrl = encodeURIComponent(kr3mCas.util.Url.addParameter(location.href.split('?')[0], 're', '1'));
                            location.href = sueddeutsche.SZ_LOGIN_URL + ("/service/ticket?redirect_uri=" + redirectUrl + "&service_id=" + settings.serviceId + "&silent=true");
                            return;
                        }
                        var data = {
                            method: _this.method,
                            data: { serviceTicket: topServiceTicket || selfServiceTicket }
                        };
                        callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                    });
                };
                Handler.prototype.handleForeignEvent = function (event) {
                    if (Handler.connectCallback && event.name == cas.LOGIN_ACTION_CONNECT)
                        Handler.connectCallback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS));
                };
                Handler.prototype.buildUrl = function (service, params) {
                    var redirect_uri = cas.BASE_URL + 'callback';
                    params['cid'] = sCasStub.clientId;
                    params['method'] = cas.tables.DomainVO.METHOD_SUEDDEUTSCHE;
                    redirect_uri = kr3mCas.util.Url.setQueryParams(redirect_uri, params);
                    var service_id = Handler.settings.serviceId;
                    var url = sueddeutsche.SZ_LOGIN_URL + '/' + service;
                    url = kr3mCas.util.Url.setQueryParams(url, { redirect_uri: redirect_uri, service_id: service_id });
                    return url;
                };
                Handler.prototype.connectSync = function (callback) {
                    Handler.connectCallback = callback;
                    var url = this.buildUrl('service/ticket', { action: 'connect' });
                    window.open(url, '_blank');
                    this.client.pollBusyEvents();
                    return true;
                };
                Handler.prototype.logout = function (callback) {
                    var url = this.buildUrl('logout', { action: 'logout', re: '1' });
                    window.open(url, '_blank');
                    this.client.pollBusyEvents();
                };
                return Handler;
            }(cas.methods.Handler));
            sueddeutsche.Handler = Handler;
        })(sueddeutsche = methods.sueddeutsche || (methods.sueddeutsche = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_SUEDDEUTSCHE] = cas.methods.sueddeutsche.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var username;
        (function (username) {
            var Options = (function () {
                function Options() {
                }
                return Options;
            }());
            username.Options = Options;
        })(username = methods.username || (methods.username = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var username;
        (function (username) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    return _super.call(this, client, cas.tables.DomainVO.METHOD_USERNAME, options) || this;
                }
                Handler.prototype.validate = function () {
                    if (!kr3mCas.util.Validator.username(this.options.username))
                        throw new Error(this.options.username + " is not a valid username");
                    if (!kr3mCas.util.Validator.securePassword(this.options.password, cas.PASSWORD_SECURITY_LEVEL))
                        throw new Error(this.options.password + " is not a valid password");
                };
                Handler.prototype.register = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            username: this.options.username,
                            password: this.options.password,
                            countryId: sCasStub.countryId,
                            languageId: sCasStub.languageId
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.login = function (callback) {
                    this.validate();
                    var data = {
                        method: this.method,
                        data: {
                            username: this.options.username,
                            password: this.options.password
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.options.username);
                };
                return Handler;
            }(cas.methods.Handler));
            username.Handler = Handler;
        })(username = methods.username || (methods.username = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_USERNAME] = cas.methods.username.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var wizelife;
        (function (wizelife) {
            wizelife.LOGIN_URL = "https://wize.life/registrierung";
            wizelife.REGISTER_URL = "https://wize.life/registrierung";
        })(wizelife = methods.wizelife || (methods.wizelife = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var wizelife;
        (function (wizelife) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client, options) {
                    var _this = _super.call(this, client, cas.tables.DomainVO.METHOD_SENIORBOOK, options) || this;
                    _this.userId = -1;
                    _this.token = "";
                    try {
                        var win = window;
                        while (_this.userId < 0 || !_this.token) {
                            var queryValues = kr3mCas.util.Browser.getQueryValues(win);
                            _this.userId = kr3mCas.util.StringEx.parseIntSafe(queryValues["userId"], -1);
                            _this.token = queryValues["token"] || "";
                            if (win == top)
                                break;
                            win = win.parent;
                        }
                    }
                    catch (e) {
                    }
                    return _this;
                }
                Handler.prototype.login = function (callback) {
                    window.open(cas.methods.wizelife.LOGIN_URL, "_blank");
                };
                Handler.prototype.register = function (callback) {
                    window.open(cas.methods.wizelife.REGISTER_URL, "_blank");
                };
                Handler.prototype.isConnected = function (callback) {
                    if (this.userId < 0 || this.token == "")
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    var data = {
                        method: this.method,
                        data: {
                            userId: this.userId,
                            token: this.token
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.userId.toString());
                };
                Handler.prototype.getInvitableFriends = function (callback) {
                    sCasStub.getInvitableFriends(this.method, callback);
                };
                return Handler;
            }(cas.methods.Handler));
            wizelife.Handler = Handler;
        })(wizelife = methods.wizelife || (methods.wizelife = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_SENIORBOOK] = cas.methods.wizelife.Handler;
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var zeit;
        (function (zeit) {
            zeit.COOKIE_NAME = "zeit_sso_201501";
            zeit.URL_LOGIN = "https://meine.zeit.de/anmelden";
            zeit.URL_LOGOUT = "https://meine.zeit.de/abmelden";
            zeit.URL_REGISTER = "https://meine.zeit.de/registrieren";
        })(zeit = methods.zeit || (methods.zeit = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var methods;
    (function (methods) {
        var zeit;
        (function (zeit) {
            var Handler = (function (_super) {
                __extends(Handler, _super);
                function Handler(client) {
                    var _this = _super.call(this, arguments[0], cas.tables.DomainVO.METHOD_ZEIT) || this;
                    _this.rawMasterCookie = kr3mCas.util.Browser.getCookie(zeit.COOKIE_NAME);
                    if (!_this.rawMasterCookie)
                        return _this;
                    var cookieParts = _this.rawMasterCookie.split(".");
                    _this.profile = kr3mCas.util.Json.decode(atob(cookieParts[1]));
                    return _this;
                }
                Handler.prototype.register = function (callback) {
                    var url = zeit.URL_REGISTER + "?url=" + encodeURIComponent(location.href);
                    window.open(url, "_self");
                };
                Handler.prototype.login = function (callback) {
                    var url = zeit.URL_LOGIN + "?url=" + encodeURIComponent(location.href);
                    window.open(url, "_self");
                };
                Handler.prototype.logout = function (callback) {
                    var url = zeit.URL_LOGOUT + "?url=" + encodeURIComponent(location.href);
                    window.open(url, "_self");
                };
                Handler.prototype.isConnected = function (callback) {
                    if (!this.profile)
                        return callback(new kr3mCas.services.CallbackResult(kr3mCas.ERROR_EXTERNAL));
                    var data = {
                        method: this.method,
                        data: {
                            rawMasterCookie: this.rawMasterCookie
                        }
                    };
                    callback(new kr3mCas.services.CallbackResult(kr3mCas.SUCCESS, data));
                };
                Handler.prototype.getMethodAndKey = function (callback) {
                    callback(this.method, this.profile.id && this.profile.id);
                };
                return Handler;
            }(cas.methods.Handler));
            zeit.Handler = Handler;
        })(zeit = methods.zeit || (methods.zeit = {}));
    })(methods = cas.methods || (cas.methods = {}));
})(cas || (cas = {}));
cas.methods.Handler.classesByMethod[cas.tables.DomainVO.METHOD_ZEIT] = cas.methods.zeit.Handler;
var cas;
(function (cas) {
    var modelclient;
    (function (modelclient) {
        var Highscores = (function () {
            function Highscores(config) {
                this.config = config;
            }
            Highscores.prototype.clearCaches = function () {
            };
            Highscores.prototype.getClanHighscores = function (options, callback) {
                sCasStub.getClanHighscores(options, callback);
            };
            Highscores.prototype.setHighscores = function (entries, callback) {
                sCasStub.setHighscores(entries, callback);
            };
            Highscores.prototype.getUserHighscore = function (userId, options, callback) {
                sCasStub.getUserHighscore(userId, options, callback);
            };
            Highscores.prototype.getHighscores = function (options, callback) {
                sCasStub.getHighscores(options, callback);
            };
            Highscores.prototype.getExpectedRank = function (options, score, bias, callback) {
                sCasStub.getExpectedRank(options, score, bias, callback);
            };
            return Highscores;
        }());
        modelclient.Highscores = Highscores;
    })(modelclient = cas.modelclient || (cas.modelclient = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        function once(func) {
            var ran = false;
            var wrapped = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                if (!ran)
                    func.apply(void 0, params);
                ran = true;
            };
            return wrapped;
        }
        async.once = once;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var Class = (function () {
            function Class() {
            }
            Class.getClassNameOfInstance = function (instance) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec(instance.constructor.toString());
                return (results && results.length > 1) ? results[1].toString() : "";
            };
            Class.getNameOfClass = function (clss) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec(clss.toString());
                return (results && results.length > 1) ? results[1].toString() : "";
            };
            Class.createInstanceOfClass = function (clss, params) {
                if (params === void 0) { params = []; }
                try {
                    clss = (typeof clss == "string") ? eval(clss) : clss;
                    var helper = function () {
                        clss.apply(this, params);
                    };
                    helper.prototype = clss.prototype;
                    return new helper();
                }
                catch (er) {
                    kr3mCas.util.Log.logDebug(er);
                    return null;
                }
            };
            return Class;
        }());
        util.Class = Class;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var util;
    (function (util) {
        var PostMessage = (function () {
            function PostMessage() {
            }
            PostMessage.trimOrigin = function (origin) {
                return origin.replace(/\/+$/, "");
            };
            PostMessage.addListener = function (listener, targetWindow, sourceOrigin) {
                if (targetWindow === void 0) { targetWindow = window; }
                if (sourceOrigin === void 0) { sourceOrigin = "*"; }
                sourceOrigin = PostMessage.trimOrigin(sourceOrigin);
                var helper = function (event) {
                    if (sourceOrigin != "*" && sourceOrigin != PostMessage.trimOrigin(event.origin))
                        return;
                    if (typeof event.data != "string" || !util.Json.isJSON(event.data))
                        return;
                    var decoded = util.Json.decode(event.data);
                    listener(decoded);
                };
                if (targetWindow["attachEvent"])
                    targetWindow["attachEvent"]("onmessage", helper);
                else if (targetWindow.addEventListener)
                    targetWindow.addEventListener("message", helper, false);
                else
                    util.Log.logError("window object doesn't support neither attachEvent nor addEventListener", targetWindow);
            };
            PostMessage.send = function (message, targetWindow, targetOrigin) {
                if (targetWindow === void 0) { targetWindow = window; }
                if (targetOrigin === void 0) { targetOrigin = "*"; }
                try {
                    var encoded = util.Json.encode(message);
                    targetWindow.postMessage(encoded, targetOrigin);
                }
                catch (exception) {
                    kr3mCas.util.Log.logWarning("PostMessage could not be sent:", exception);
                }
            };
            PostMessage.sendText = function (message, targetWindow, targetOrigin) {
                if (targetWindow === void 0) { targetWindow = window; }
                if (targetOrigin === void 0) { targetOrigin = "*"; }
                try {
                    targetWindow.postMessage(message, targetOrigin);
                }
                catch (exception) {
                    kr3mCas.util.Log.logWarning("PostMessage could not be sent:", exception);
                }
            };
            return PostMessage;
        }());
        util.PostMessage = PostMessage;
    })(util = kr3mCas.util || (kr3mCas.util = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var ClientCore = (function () {
        function ClientCore(options) {
            var _this = this;
            this.eventListeners = [];
            this.listenersByEvent = {};
            this.pendingEvents = [];
            this.handlers = [];
            this.flags = new kr3mCas.async.Flags();
            this.options = options || {};
            this.flags.onceSet('init', function () {
                _this.eventPollFunc = function () { return sCasStub.pollEvents(function (events) { return _this.pollEvents(events); }); };
                _this.eventPollTimer = setInterval(_this.eventPollFunc, 1000 * cas.EVENT_POLLING_INTERVAL_IDLE);
                kr3mCas.util.PostMessage.addListener(function (message) {
                    if (message == 'CAS_EVENT')
                        sCasStub.pollEvents(_this.pollEvents.bind(_this));
                });
            });
        }
        ClientCore.prototype.isHandlerLoggedIn = function (requestIdsByMethod, callback) {
            var _this = this;
            var isLoggedIn = false;
            sCasStub.getLoginMethods(function (methods) {
                kr3mCas.async.Loop.forEach(methods, function (method, next) {
                    var handler = _this.getMethodHandler(method);
                    handler.isConnected(function (result) {
                        if (!result.success)
                            return next();
                        result.data.requestIdsByMethod = requestIdsByMethod;
                        sCasStub.connect(result.data, function (result) {
                            if (!result.success)
                                return next();
                            _this.handlers.push(handler);
                            isLoggedIn = true;
                            next();
                        });
                    });
                }, function () { return callback(isLoggedIn); });
            });
        };
        ClientCore.prototype.getActiveLoginMethods = function (callback) {
            var methods = [];
            for (var i = 0; i < this.handlers.length; ++i)
                methods.push(this.handlers[i].getMethod());
            callback(methods);
        };
        ClientCore.prototype.getActiveHandlers = function () {
            return this.handlers.slice();
        };
        ClientCore.prototype.getMethodHandler = function (method) {
            var handlerClass = cas.methods.Handler.classesByMethod[method];
            return kr3mCas.util.Class.createInstanceOfClass(handlerClass, [this]);
        };
        ClientCore.prototype.hasIngamePopup = function (popupId) {
            if (!this.options)
                return false;
            if (!this.options.ingamePopupIds)
                return false;
            return this.options.ingamePopupIds.indexOf(popupId) >= 0;
        };
        ClientCore.prototype.receiveAllRequests = function (callback) {
            var _this = this;
            sCasStub.getLoginMethods(function (methods) {
                var requestIdsByMethod = {};
                kr3mCas.async.Loop.forEach(methods, function (method, next) {
                    var handler = _this.getMethodHandler(method);
                    handler.receiveRequests(function (requestIds) {
                        requestIdsByMethod[method] = requestIds;
                        next();
                    });
                }, function () { return callback(requestIdsByMethod); });
            });
        };
        ClientCore.prototype.informAllFrames = function () {
            var frames = document.getElementsByTagName('iframe');
            for (var i = 0; i < frames.length; ++i)
                kr3mCas.util.PostMessage.send('CAS_EVENT', frames[i].contentWindow);
            try {
                if (parent == window)
                    return;
                var win = window;
                do {
                    win = win.parent;
                    kr3mCas.util.PostMessage.send('CAS_EVENT', win);
                } while (win != top);
            }
            catch (e) {
            }
        };
        ClientCore.prototype.dispatchPending = function () {
            for (var j = 0; j < this.pendingEvents.length; ++j) {
                var event = this.pendingEvents[j];
                var listeners = this.listenersByEvent[event.name] || [];
                kr3mCas.util.Log.logDebug('dispatching', event, 'to', this.eventListeners.length, '/', listeners.length, 'listeners');
                for (var i = 0; i < this.eventListeners.length; ++i)
                    kr3mCas.util.trySafe(this.eventListeners[i], event.name, event.params);
                for (var i = 0; i < listeners.length; ++i)
                    kr3mCas.util.trySafe(listeners[i], event.params);
                if (this.eventListeners.length + listeners.length > 0)
                    this.pendingEvents.splice(j--, 1);
            }
        };
        ClientCore.prototype.dispatchEvent = function (event) {
            this.informAllFrames();
            this.pendingEvents.push(event);
            this.dispatchPending();
        };
        ClientCore.prototype.dispatchPopup = function (popupId, params) {
            params = params || {};
            this.dispatchEvent(new cas.vo.Event(cas.EVENT_INGAME_POPUP, { popupId: popupId, params: params }));
            this.dispatchEvent(new cas.vo.Event(popupId, params));
        };
        ClientCore.prototype.handleForeignEvent = function (event) {
            var _this = this;
            switch (event.name) {
                case cas.EVENT_CONNECT:
                case cas.EVENT_LOGIN:
                case cas.EVENT_ONLINE:
                case cas.EVENT_REGISTER:
                    sCasStub.getActiveLogins({}, function (activeLogins) {
                        _this.isHandlerLoggedIn({}, function (isLoggedIn) {
                            for (var i = 0; i < activeLogins.length; ++i) {
                                var handler = _this.getMethodHandler(activeLogins[i].method);
                                handler.handleForeignEvent(event);
                                _this.handlers.push(handler);
                                _this.highscores.clearCaches();
                            }
                        });
                    });
                    break;
                case cas.EVENT_LOGOUT:
                    this.handlers = [];
                    break;
            }
        };
        ClientCore.prototype.addEventListener = function (eventListener) {
            this.eventListeners.push(eventListener);
            this.dispatchPending();
        };
        ClientCore.prototype.on = function (eventName, listener) {
            if (!this.listenersByEvent[eventName])
                this.listenersByEvent[eventName] = [];
            this.listenersByEvent[eventName].push(listener);
            this.dispatchPending();
        };
        ClientCore.prototype.pollBusyEvents = function () {
            clearInterval(this.eventPollTimer);
            this.eventPollTimer = setInterval(this.eventPollFunc, 1000 * cas.EVENT_POLLING_INTERVAL_BUSY);
        };
        ClientCore.prototype.pollEvents = function (events) {
            for (var i = 0; i < events.length; ++i) {
                this.handleForeignEvent(events[i]);
                this.dispatchEvent(events[i]);
            }
            if (events.length > 0) {
                clearInterval(this.eventPollTimer);
                this.eventPollTimer = setInterval(this.eventPollFunc, 1000 * cas.EVENT_POLLING_INTERVAL_IDLE);
            }
        };
        return ClientCore;
    }());
    cas.ClientCore = ClientCore;
})(cas || (cas = {}));
var cas;
(function (cas) {
    var paypros;
    (function (paypros) {
        var HandlerRequest = (function () {
            function HandlerRequest() {
            }
            return HandlerRequest;
        }());
        paypros.HandlerRequest = HandlerRequest;
    })(paypros = cas.paypros || (cas.paypros = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var stubs;
    (function (stubs) {
        var AjaxRequest = (function () {
            function AjaxRequest(callback, timeoutCallback) {
                this.callback = callback;
                this.timeoutCallback = timeoutCallback;
                this.cancelled = false;
            }
            AjaxRequest.prototype.complete = function (result) {
                if (this.cancelled)
                    return;
                this.callback && this.callback(result);
            };
            AjaxRequest.prototype.timeout = function () {
                if (this.cancelled)
                    return;
                this.timeoutCallback && this.timeoutCallback();
            };
            AjaxRequest.prototype.cancel = function () {
                this.cancelled = true;
            };
            return AjaxRequest;
        }());
        stubs.AjaxRequest = AjaxRequest;
    })(stubs = cas.stubs || (cas.stubs = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var model;
    (function (model) {
        var EventDispatcher = (function () {
            function EventDispatcher() {
                this.onListeners = {};
                this.onceListeners = {};
            }
            EventDispatcher.prototype.on = function (eventName, listener, context) {
                if (!this.onListeners[eventName])
                    this.onListeners[eventName] = [];
                var meta = kr3mCas.util.Util.getBy(this.onListeners[eventName], "context", context, 0, true);
                if (meta) {
                    meta.listeners.push(listener);
                    return;
                }
                this.onListeners[eventName].push({ context: context, listeners: [listener] });
            };
            EventDispatcher.prototype.once = function (eventName, listener, context) {
                if (!this.onceListeners[eventName])
                    this.onceListeners[eventName] = [];
                var meta = kr3mCas.util.Util.getBy(this.onceListeners[eventName], "context", context, 0, true);
                if (meta) {
                    meta.listeners.push(listener);
                    return;
                }
                this.onceListeners[eventName].push({ context: context, listeners: [listener] });
            };
            EventDispatcher.prototype.off = function () {
                var first = kr3mCas.util.Util.getFirstOfType.bind(null, arguments);
                var eventName = first("string");
                var listener = first("function");
                var context = first("object");
                var listenerTypes = [this.onListeners, this.onceListeners];
                var eventNames = eventName ? [eventName] : kr3mCas.util.Util.merge(Object.keys(this.onListeners), Object.keys(this.onceListeners));
                for (var i = 0; i < listenerTypes.length; ++i) {
                    for (var j = 0; j < eventNames.length; ++j) {
                        var metas = listenerTypes[i][eventNames[j]];
                        if (!metas)
                            continue;
                        for (var k = 0; k < metas.length; ++k) {
                            if (context && context !== metas[k].context)
                                continue;
                            if (listener)
                                kr3mCas.util.Util.remove(metas[k].listeners, listener, true);
                            else
                                metas[k].listeners = [];
                        }
                    }
                }
            };
            EventDispatcher.prototype.dispatch = function (eventName, data, context) {
                if (this.onListeners[eventName]) {
                    for (var i = 0; i < this.onListeners[eventName].length; ++i) {
                        for (var j = 0; j < this.onListeners[eventName][i].listeners.length; ++j)
                            this.onListeners[eventName][i].listeners[j].call(context || this.onListeners[eventName][i].context || this, data);
                    }
                }
                if (this.onceListeners[eventName]) {
                    for (var i = 0; i < this.onceListeners[eventName].length; ++i) {
                        for (var j = 0; j < this.onceListeners[eventName][i].listeners.length; ++j)
                            this.onceListeners[eventName][i].listeners[j].call(context || this.onceListeners[eventName][i].context || this, data);
                    }
                    this.onceListeners[eventName] = [];
                }
            };
            return EventDispatcher;
        }());
        model.EventDispatcher = EventDispatcher;
    })(model = kr3mCas.model || (kr3mCas.model = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var iframes;
        (function (iframes) {
            var Proxy = (function (_super) {
                __extends(Proxy, _super);
                function Proxy(url, parentId) {
                    var _this = _super.call(this) || this;
                    _this.url = url;
                    _this.flags = new kr3mCas.async.Flags();
                    _this.cs = new kr3mCas.async.CriticalSection();
                    _this.postId = ++Proxy.freePostId;
                    _this.frame = _this.createFrame();
                    _this.frame.src = url + '#' + _this.postId;
                    var parentElement = parentId ? document.getElementById(parentId) : document.body;
                    parentElement.appendChild(_this.frame);
                    _this.initPostNode();
                    return _this;
                }
                Proxy.prototype.wasDetached = function () {
                    for (var temp = this.frame; temp != document.body; temp = temp.parentElement) {
                        if (!temp)
                            return true;
                    }
                    return false;
                };
                Proxy.prototype.getTargetWindow = function () {
                    return this.frame.contentWindow;
                };
                Proxy.prototype.initPostNode = function () {
                    var _this = this;
                    this.flags.set('PING');
                    this.flags.clear('PONG');
                    var timerId = setInterval(function () {
                        _this.postNode.send('proxyClient' + _this.postId, _this.getTargetWindow(), 'PING', function () {
                            clearInterval(timerId);
                            _this.flags.set('PONG');
                        });
                    }, 100);
                    this.postNode = new kr3mCas.util.PostMessageNode('proxyFrame' + this.postId, function (msg, replyCallback) {
                        if (msg.event)
                            return _this.dispatch(msg.event, msg.params);
                        if (msg.url && msg.format) {
                            kr3mCas.util.Ajax.call(msg.url, replyCallback, msg.format, function () { return kr3mCas.util.Log.logError('could not load', msg.url); });
                            return;
                        }
                        kr3mCas.util.Log.logError('unknown post message in node ui_ui', msg);
                    }, cas.BASE_URL);
                };
                Proxy.prototype.createFrame = function () {
                    var frame = document.createElement('iframe');
                    frame.style.position = 'relative';
                    frame.style.left = '0px';
                    frame.style.top = '0px';
                    frame.style.zIndex = '1000';
                    frame.style.width = '100%';
                    frame.style.height = '100%';
                    frame.style.margin = '0px';
                    frame.style.padding = '0px';
                    frame.style.overflow = 'hidden';
                    frame.setAttribute('scrolling', 'no');
                    frame.setAttribute('frameborder', '0');
                    frame.style.display = 'none';
                    return frame;
                };
                Proxy.prototype.wantsScrollInfo = function () {
                    return false;
                };
                Proxy.prototype.post = function (msg, callback) {
                    var _this = this;
                    this.flags.onceSet('PONG', function () {
                        try {
                            _this.postNode.send('proxyClient' + _this.postId, _this.getTargetWindow(), msg, callback);
                        }
                        catch (error) {
                            kr3mCas.util.Log.logDebug('error while posting message', msg, 'to iframe', _this.postId, ':', error);
                        }
                    });
                };
                Proxy.prototype.show = function () {
                    this.frame.style.display = 'block';
                    this.oldActiveElement = document.activeElement;
                    this.frame.focus();
                };
                Proxy.prototype.hide = function () {
                    this.frame.style.display = 'none';
                    this.frame.blur();
                    if (this.oldActiveElement)
                        this.oldActiveElement.focus();
                };
                Proxy.freePostId = 0;
                return Proxy;
            }(kr3mCas.model.EventDispatcher));
            iframes.Proxy = Proxy;
        })(iframes = ui.iframes || (ui.iframes = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var iframes;
        (function (iframes) {
            var FullScreen = (function (_super) {
                __extends(FullScreen, _super);
                function FullScreen(url) {
                    return _super.call(this, url) || this;
                }
                FullScreen.prototype.createClickBlocker = function () {
                    var _this = this;
                    this.clickBlocker = document.createElement('div');
                    this.clickBlocker.style.position = 'fixed';
                    this.clickBlocker.style.left = '0px';
                    this.clickBlocker.style.top = '0px';
                    this.clickBlocker.style.zIndex = '1000';
                    this.clickBlocker.style.width = '100%';
                    this.clickBlocker.style.height = '100%';
                    this.clickBlocker.style.margin = '0px';
                    this.clickBlocker.style.padding = '0px';
                    this.clickBlocker.style.overflow = 'hidden';
                    this.clickBlocker.style['background-color'] = '#ffffff';
                    this.clickBlocker.style.opacity = '0.8';
                    this.clickBlocker.style.filter = 'alpha(opacity=80)';
                    document.body.appendChild(this.clickBlocker);
                    this.flags.onceSet('PONG', function () {
                        _this.clickBlocker.style.display = 'none';
                    });
                };
                FullScreen.prototype.createFrame = function () {
                    this.createClickBlocker();
                    var frame = _super.prototype.createFrame.call(this);
                    frame.style.position = 'fixed';
                    frame.setAttribute('allowtransparency', 'true');
                    return frame;
                };
                FullScreen.prototype.wantsScrollInfo = function () {
                    return true;
                };
                FullScreen.prototype.wasDetached = function () {
                    return false;
                };
                FullScreen.prototype.show = function () {
                    var html = document.getElementsByTagName('html')[0];
                    this.htmlHeight = html.style.height;
                    this.htmlOverflow = html.style.overflow;
                    html.style.height = '100%';
                    html.style.overflow = 'hidden';
                    _super.prototype.show.call(this);
                };
                FullScreen.prototype.hide = function () {
                    var html = document.getElementsByTagName('html')[0];
                    html.style.height = this.htmlHeight;
                    html.style.overflow = this.htmlOverflow;
                    _super.prototype.hide.call(this);
                };
                return FullScreen;
            }(iframes.Proxy));
            iframes.FullScreen = FullScreen;
        })(iframes = ui.iframes || (ui.iframes = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var iframes;
        (function (iframes) {
            var Tab = (function (_super) {
                __extends(Tab, _super);
                function Tab(url) {
                    var _this = _super.call(this, url) || this;
                    _this.url = url + '#' + _this.postId;
                    _this.win = window.open(_this.url);
                    _this.initPostNode();
                    return _this;
                }
                Tab.prototype.initPostNode = function () {
                    if (!this.getTargetWindow())
                        return;
                    _super.prototype.initPostNode.call(this);
                };
                Tab.prototype.getTargetWindow = function () {
                    return this.win;
                };
                Tab.prototype.wasDetached = function () {
                    return false;
                };
                Tab.prototype.show = function () {
                    if (!this.win) {
                        this.win = window.open(this.url);
                        this.initPostNode();
                    }
                };
                Tab.prototype.hide = function () {
                    this.win.close();
                    this.win = null;
                };
                return Tab;
            }(iframes.Proxy));
            iframes.Tab = Tab;
        })(iframes = ui.iframes || (ui.iframes = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var GenericRequest = (function () {
                function GenericRequest() {
                    this.action = 'showGenericDialog';
                    this.captionId = 'DIALOG_GENERIC';
                    this.fluffCaptionId = '';
                    this.tokens = {};
                    this.additionalClasses = '';
                    this.trackId = 'GENERIC';
                    this.showOkButton = true;
                    this.showCancelButton = false;
                    this.showCloseButton = true;
                }
                return GenericRequest;
            }());
            messages.GenericRequest = GenericRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var LanguageRequest = (function () {
                function LanguageRequest() {
                    this.action = "setLanguage";
                }
                return LanguageRequest;
            }());
            messages.LanguageRequest = LanguageRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var LoginRequest = (function () {
                function LoginRequest() {
                    this.action = "showLoginDialog";
                }
                return LoginRequest;
            }());
            messages.LoginRequest = LoginRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var LoginResponse = (function () {
                function LoginResponse() {
                }
                return LoginResponse;
            }());
            messages.LoginResponse = LoginResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var LoginTimeoutRequest = (function () {
                function LoginTimeoutRequest() {
                    this.action = "showLoginTimeoutDialog";
                }
                return LoginTimeoutRequest;
            }());
            messages.LoginTimeoutRequest = LoginTimeoutRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RecoverPasswordRequest = (function () {
                function RecoverPasswordRequest() {
                }
                return RecoverPasswordRequest;
            }());
            messages.RecoverPasswordRequest = RecoverPasswordRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RecoverPasswordResponse = (function () {
                function RecoverPasswordResponse() {
                }
                return RecoverPasswordResponse;
            }());
            messages.RecoverPasswordResponse = RecoverPasswordResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RecoverPasswordResultRequest = (function () {
                function RecoverPasswordResultRequest() {
                    this.action = "showRecoverPasswordResultDialog";
                }
                return RecoverPasswordResultRequest;
            }());
            messages.RecoverPasswordResultRequest = RecoverPasswordResultRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RequestRequest = (function () {
                function RequestRequest() {
                    this.action = "showRequestDialog";
                    this.methods = [];
                    this.otherSources = [];
                    this.invitableFriends = [];
                }
                return RequestRequest;
            }());
            messages.RequestRequest = RequestRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RequestResponse = (function () {
                function RequestResponse() {
                }
                return RequestResponse;
            }());
            messages.RequestResponse = RequestResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var ResetPasswordRequest = (function () {
                function ResetPasswordRequest() {
                    this.action = "showResetPasswordDialog";
                }
                return ResetPasswordRequest;
            }());
            messages.ResetPasswordRequest = ResetPasswordRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var ResetPasswordResponse = (function () {
                function ResetPasswordResponse() {
                }
                return ResetPasswordResponse;
            }());
            messages.ResetPasswordResponse = ResetPasswordResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var ResetPasswordResultRequest = (function () {
                function ResetPasswordResultRequest() {
                    this.action = "showResetPasswordResultDialog";
                }
                return ResetPasswordResultRequest;
            }());
            messages.ResetPasswordResultRequest = ResetPasswordResultRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RunRequest = (function () {
                function RunRequest() {
                    this.action = "runFromRequest";
                }
                return RunRequest;
            }());
            messages.RunRequest = RunRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var RunResponse = (function () {
                function RunResponse() {
                }
                return RunResponse;
            }());
            messages.RunResponse = RunResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var ServiceRequest = (function () {
                function ServiceRequest() {
                    this.type = "SERVICE";
                }
                return ServiceRequest;
            }());
            messages.ServiceRequest = ServiceRequest;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var ServiceResponse = (function () {
                function ServiceResponse() {
                    this.action = "SERVICE";
                }
                return ServiceResponse;
            }());
            messages.ServiceResponse = ServiceResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var StatusResponse = (function () {
                function StatusResponse() {
                }
                return StatusResponse;
            }());
            messages.StatusResponse = StatusResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var messages;
        (function (messages) {
            var TrackingResponse = (function () {
                function TrackingResponse() {
                    this.type = "TRACK";
                }
                return TrackingResponse;
            }());
            messages.TrackingResponse = TrackingResponse;
        })(messages = ui.messages || (ui.messages = {}));
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var If = (function () {
            function If() {
            }
            If.checkCondition = function (condition, callback) {
                if (typeof condition == "function")
                    condition(function (result) { return callback(result ? true : false); });
                else
                    callback(condition ? true : false);
            };
            If.then = function (condition, thenFunc, finallyFunc) {
                kr3mCas.async.If.checkCondition(condition, function (isTrue) {
                    if (isTrue)
                        thenFunc(function () { return finallyFunc && finallyFunc(); });
                    else
                        finallyFunc && finallyFunc();
                });
            };
            If.thenElse = function (condition, thenFunc, elseFunc, finallyFunc) {
                kr3mCas.async.If.checkCondition(condition, function (isTrue) {
                    if (isTrue)
                        thenFunc(function () { return finallyFunc && finallyFunc(); });
                    else
                        elseFunc(function () { return finallyFunc && finallyFunc(); });
                });
            };
            return If;
        }());
        async.If = If;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var async;
    (function (async) {
        var Join = (function () {
            function Join() {
                this.counter = 0;
                this.callbacks = [];
                this.results = {};
            }
            Join.prototype.getOpenCount = function () {
                return this.counter;
            };
            Join.prototype.getResult = function (resultName) {
                var results = this.results[resultName];
                if (results && results.length > 0)
                    return results[0];
                return undefined;
            };
            Join.prototype.getResults = function (resultName) {
                return this.results[resultName] ? this.results[resultName] : undefined;
            };
            Join.prototype.getAllResults = function () {
                return this.results;
            };
            Join.prototype.clearCallbacks = function (runBeforeRemove) {
                if (runBeforeRemove === void 0) { runBeforeRemove = false; }
                if (runBeforeRemove) {
                    for (var i = 0; i < this.callbacks.length; ++i)
                        this.callbacks[i]();
                }
                this.callbacks = [];
            };
            Join.prototype.terminator = function (saveResultName) {
                var results = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    results[_i - 1] = arguments[_i];
                }
                if (saveResultName !== undefined)
                    this.results[saveResultName] = results;
                --this.counter;
                if (this.counter <= 0) {
                    this.counter = 0;
                    for (var i = 0; i < this.callbacks.length; ++i)
                        this.callbacks[i]();
                    this.callbacks = [];
                }
            };
            Join.prototype.fork = function (count) {
                if (count === void 0) { count = 1; }
                this.counter += count;
            };
            Join.prototype.done = function (saveResultName) {
                var results = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    results[_i - 1] = arguments[_i];
                }
                this.terminator.apply(this, [saveResultName].concat(results));
            };
            Join.prototype.getCallback = function (saveResultName) {
                this.fork();
                return this.terminator.bind(this, saveResultName);
            };
            Join.prototype.addCallback = function (callback) {
                if (this.counter > 0)
                    this.callbacks.push(callback);
                else
                    callback();
            };
            return Join;
        }());
        async.Join = Join;
    })(async = kr3mCas.async || (kr3mCas.async = {}));
})(kr3mCas || (kr3mCas = {}));
var kr3mCas;
(function (kr3mCas) {
    var tracking3;
    (function (tracking3) {
        var Track = (function () {
            function Track() {
            }
            Track.track = function () {
                if (typeof trackGTMCustom != "function")
                    return;
                var trackObj = typeof arguments[0] == "string" ? { eventAction: arguments[0] } : (arguments[0] || {});
                trackObj.event = trackObj.event || "kr3m";
                trackObj.hitType = trackObj.hitType || "Button";
                trackObj.eventCategory = trackObj.eventCategory || "Click";
                trackGTMCustom(trackObj);
                Track.eventsCount++;
                Track.lastEvent = trackObj;
                if (Track.onTrackEvent != null) {
                    Track.onTrackEvent(trackObj);
                }
            };
            Track.eventsCount = 0;
            return Track;
        }());
        tracking3.Track = Track;
    })(tracking3 = kr3mCas.tracking3 || (kr3mCas.tracking3 = {}));
})(kr3mCas || (kr3mCas = {}));
var cas;
(function (cas) {
    var ui;
    (function (ui) {
        var UI = (function () {
            function UI(client, flags) {
                var _this = this;
                this.proxies = {};
                this.oldScrollOffset = 0;
                this.client = client;
                this.clientFlags = flags;
                this.clientFlags.onceSet('init', function () {
                    setInterval(_this.checkScrollOffsets.bind(_this), 100);
                });
            }
            ;
            UI.prototype.checkScrollOffsets = function () {
                if (!this.scrollOffsetsListener)
                    return;
                try {
                    if (window == top)
                        return;
                    var win = window;
                    var offset = 0;
                    while (true) {
                        offset += win.scrollY;
                        if (win == top)
                            break;
                        var rect = win.frameElement.getBoundingClientRect();
                        offset -= rect.top;
                        win = win.parent;
                        offset -= win.pageYOffset;
                    }
                    if (offset != this.oldScrollOffset) {
                        this.oldScrollOffset = offset;
                        this.scrollOffsetsListener.post({ scrollY: offset });
                    }
                }
                catch (e) {
                }
            };
            UI.prototype.setLanguage = function (languageId, callback) {
                var join = new kr3mCas.async.Join();
                var request = new cas.ui.messages.LanguageRequest();
                request.languageId = languageId;
                for (var i in this.proxies)
                    this.proxies[i].post(request, join.getCallback());
                if (this.tabProxy)
                    this.tabProxy.post(request, join.getCallback());
                if (callback)
                    join.addCallback(callback);
            };
            UI.prototype.initNodes = function () {
                if (!this.nodeService) {
                    this.nodeService = new kr3mCas.util.PostMessageNode('service_ui', function (request, replyCallback) {
                        sCasStub.callService(request.service, request.params, replyCallback);
                    }, cas.BASE_URL);
                }
                if (!this.nodeTracking) {
                    this.nodeTracking = new kr3mCas.util.PostMessageNode('track_ui', function (response) {
                        var obj = {
                            eventAction: response.dialogId + '/' + response.elementId,
                            eventLabel: 'CAS'
                        };
                        kr3mCas.tracking3.Track.track(obj);
                    }, cas.BASE_URL);
                }
            };
            UI.prototype.sendRunMessage = function (proxy) {
                var _this = this;
                this.clientFlags.onceSet('init', function () {
                    var request = new cas.ui.messages.RunRequest();
                    request.appConfig =
                        {
                            domQuery: '#casUiBase',
                            language: sCasStub.languageId,
                            supportedLanguages: cas.LANGUAGES
                        };
                    request.methodSettings = {};
                    var join = new kr3mCas.async.Join();
                    join.fork();
                    _this.client.getUser(function (user) {
                        if (user)
                            request.appConfig.language = user.languageId;
                        join.done();
                    });
                    join.fork();
                    sCasStub.getGameConfig(function (gameConfig) {
                        request.gameConfig = gameConfig;
                        join.done();
                    });
                    sCasStub.getLoginMethods(function (methods) {
                        for (var i = 0; i < methods.length; ++i) {
                            var handlerClass = cas.methods.Handler.classesByMethod[methods[i]];
                            var handler = kr3mCas.util.Class.createInstanceOfClass(handlerClass);
                            handler.getSettings(join.getCallback(methods[i]));
                        }
                        join.addCallback(function () {
                            for (var i = 0; i < methods.length; ++i)
                                request.methodSettings[methods[i]] = join.getResult(methods[i]);
                            proxy.post(request, function (response) {
                                proxy.flags.set('init');
                            });
                        });
                    });
                });
            };
            UI.prototype.prepareFrame = function (dialogOptions, callback, errorCallback) {
                var _this = this;
                if (dialogOptions.showInNewTab) {
                    this.tabProxy = new cas.ui.iframes.Tab(cas.BASE_URL + 'uiproxy.html?fullscreen=true');
                    this.sendRunMessage(this.tabProxy);
                    this.tabProxy.flags.onceSet('init', function () { return callback && callback(_this.tabProxy); });
                }
                else {
                    var id = dialogOptions.containerDivId || '';
                    if (!this.proxies[id] || this.proxies[id].wasDetached()) {
                        if (dialogOptions.containerDivId)
                            this.proxies[id] = new cas.ui.iframes.Proxy(cas.BASE_URL + 'uiproxy.html?fullscreen=true', id);
                        else
                            this.proxies[id] = new cas.ui.iframes.FullScreen(cas.BASE_URL + 'uiproxy.html');
                        this.sendRunMessage(this.proxies[id]);
                    }
                    this.proxies[id].flags.onceSet('init', function () { return callback && callback(_this.proxies[id]); });
                }
                this.clientFlags.onceSet('broken', function () { return errorCallback && errorCallback(); });
                this.initNodes();
            };
            UI.prototype.preload = function () {
                this.prepareFrame({});
            };
            UI.prototype.showFrame = function (proxy, callback) {
                var _this = this;
                proxy.cs.enter(function (exit) {
                    _this.scrollOffsetsListener = proxy.wantsScrollInfo() ? proxy : null;
                    proxy.currentExit = function () {
                        proxy.currentExit = null;
                        exit();
                    };
                    proxy.show();
                    callback(proxy.currentExit);
                });
            };
            UI.prototype.hideFrame = function (proxy, exit, callback) {
                this.scrollOffsetsListener = null;
                proxy.hide();
                exit();
                callback && callback();
            };
            UI.prototype.handleService = function (request, replyCallback) {
                sCasStub.callService(request.service, request.params, replyCallback);
            };
            UI.prototype.getDialogHeight = function () {
                var divId = kr3mCas.util.Util.getFirstOfType(arguments, 'string');
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                var proxyIds = divId ? [divId] : Object.keys(this.proxies);
                var join = new kr3mCas.async.Join();
                var action = { action: 'getDialogHeight' };
                for (var i = 0; i < proxyIds.length; ++i) {
                    if (this.proxies[proxyIds[i]])
                        this.proxies[proxyIds[i]].post(action, join.getCallback(proxyIds[i]));
                }
                join.addCallback(function () {
                    var height = 0;
                    var results = join.getAllResults();
                    for (var id in results)
                        height = Math.max(height, results[id]);
                    callback(height);
                });
            };
            UI.prototype.closeDialog = function () {
                var divId = kr3mCas.util.Util.getFirstOfType(arguments, 'string');
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                var proxyIds = divId ? [divId] : Object.keys(this.proxies);
                var join = new kr3mCas.async.Join();
                for (var i = 0; i < proxyIds.length; ++i) {
                    var proxy = this.proxies[proxyIds[i]];
                    if (proxy && proxy.currentExit) {
                        proxy.post({ action: 'closeDialog' });
                        this.hideFrame(proxy, proxy.currentExit, join.getCallback());
                    }
                }
                if (callback)
                    join.addCallback(callback);
            };
            UI.prototype.getFrameUrls = function () {
                var urls = [];
                try {
                    var win = window;
                    while (true) {
                        urls.push(win.location.href);
                        if (win == win.parent)
                            break;
                        win = win.parent;
                    }
                }
                catch (e) {
                }
                return urls;
            };
            UI.prototype.trySyncConnect = function (options, callback) {
                var methods = sCasStub.getLoginMethodsSync();
                var _loop_1 = function (i) {
                    var handler = this_1.client.getMethodHandler(methods[i]);
                    if (handler.connectSync(function (result) { return callback && callback(result.status, methods[i], 'connect'); }))
                        return { value: true };
                };
                var this_1 = this;
                for (var i = 0; i < methods.length; ++i) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return false;
            };
            UI.prototype.showLoginDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                if (this.trySyncConnect(options, callback))
                    return;
                this.prepareFrame(options, function (proxy) {
                    var handlers = _this.client.getActiveHandlers();
                    if (handlers.length > 0)
                        return callback && callback(cas.ERROR_LOGGED_IN);
                    sCasStub.getGameConfig(function (gameConfig) {
                        var request = new cas.ui.messages.LoginRequest();
                        request.dialogOptions = options;
                        request.gameConfig = gameConfig;
                        request.frameUrls = _this.getFrameUrls();
                        kr3mCas.async.Loop.loop(function (loopDone) {
                            _this.showFrame(proxy, function (exit) {
                                proxy.post(request, function (response) {
                                    _this.hideFrame(proxy, exit, function () {
                                        if (response.status != kr3mCas.SUCCESS) {
                                            if (response.status == cas.STATUS_RECOVER_PASSWORD) {
                                                _this.recoverPassword(options, response.method, function (status) {
                                                    request.error = null;
                                                    if (status == kr3mCas.ERROR_CANCELLED)
                                                        callback && callback(kr3mCas.ERROR_CANCELLED);
                                                    else
                                                        loopDone();
                                                });
                                                return;
                                            }
                                            return callback && callback(response.status);
                                        }
                                        var params = [_this.client, response.fieldValues];
                                        var handlerClass = cas.methods.Handler.classesByMethod[response.method];
                                        var handler = kr3mCas.util.Class.createInstanceOfClass(handlerClass, params);
                                        var func = _this.client[response.action.toLowerCase()];
                                        if (!func) {
                                            request.error = kr3mCas.ERROR_INTERNAL;
                                            return loopDone(true);
                                        }
                                        func.call(_this.client, handler, response.customValues, response.dois, function (status) {
                                            if (status == kr3mCas.ERROR_CANCELLED)
                                                return callback && callback(status);
                                            if (status != kr3mCas.SUCCESS) {
                                                request.error = status;
                                                return loopDone(true);
                                            }
                                            callback && callback(status, response.method, response.action);
                                        });
                                    });
                                });
                            });
                        });
                    });
                }, function () { return callback && callback(cas.ERROR_INIT_FAILED); });
            };
            UI.prototype.loginGate = function (options, loggedInCallback, notLoggedInCallback) {
                var _this = this;
                this.prepareFrame(options, function (proxy) {
                    _this.client.isLoggedIn(function (isLoggedIn) {
                        if (isLoggedIn)
                            return loggedInCallback(proxy);
                        _this.showLoginDialog(function (status) {
                            if (status == kr3mCas.SUCCESS)
                                loggedInCallback(proxy);
                            else
                                notLoggedInCallback && notLoggedInCallback();
                        });
                    });
                }, function () { return notLoggedInCallback && notLoggedInCallback(); });
            };
            UI.prototype.emailReminder = function (email, callback) {
                var _this = this;
                var reminderRequest = new cas.ui.messages.GenericRequest();
                reminderRequest.trackId = 'EMAIL_REMINDER';
                reminderRequest.captionId = 'DIALOG_EMAIL_REMINDER';
                reminderRequest.fluffCaptionId = 'DIALOG_EMAIL_REMINDER_FLUFF';
                reminderRequest.tokens.email = email;
                reminderRequest.showOkButton = true;
                reminderRequest.showCancelButton = false;
                reminderRequest.showCloseButton = true;
                kr3mCas.async.Loop.loop(function (loopDone) {
                    _this.generic(reminderRequest, function (exitStatus) {
                        if (exitStatus == cas.STATUS_SHOW_ACCOUNT)
                            _this.showAccountDialog(function () { return callback(); });
                        if (exitStatus != cas.STATUS_RESEND_VALIDATION)
                            return callback();
                        sCasStub.resendValidationEmail(function (sendStatus) {
                            var infoRequest = new cas.ui.messages.GenericRequest();
                            infoRequest.trackId = 'EMAIL_REMINDER_RESEND';
                            infoRequest.captionId = 'DIALOG_EMAIL_REMINDER_RESEND';
                            infoRequest.fluffCaptionId = 'DIALOG_EMAIL_REMINDER_RESEND_FLUFF';
                            infoRequest.showOkButton = true;
                            infoRequest.showCancelButton = false;
                            infoRequest.showCloseButton = true;
                            _this.generic(infoRequest, function () { return loopDone(true); });
                        });
                    });
                });
            };
            UI.prototype.postLoginGates = function (handler, callback) {
                var _this = this;
                handler.postLoginGate(function () {
                    sCasStub.shouldWelcome(function (shouldWelcome) {
                        kr3mCas.async.If.then(shouldWelcome, function (thenDone) {
                            if (!_this.client.hasIngamePopup(cas.POPUP_WELCOME))
                                return _this.showWelcomeDialog({}, function (status) { return thenDone(); });
                            _this.client.on(cas.EVENT_WELCOME_CLOSED, kr3mCas.async.once(thenDone));
                            _this.client.dispatchPopup(cas.POPUP_WELCOME);
                        }, function () {
                            sCasStub.emailComplete(function (emailComplete) {
                                callback && callback();
                                if (emailComplete.email && emailComplete.needValidation) {
                                    if (_this.client.hasIngamePopup(cas.POPUP_EMAIL_REMINDER))
                                        _this.client.dispatchPopup(cas.POPUP_EMAIL_REMINDER, emailComplete);
                                    else
                                        _this.emailReminder(emailComplete.email, function () { });
                                }
                            });
                        });
                    });
                });
            };
            UI.prototype.guestGates = function (requestIdsByMethod, jumpPadData) {
                var hasRequests = false;
                for (var method in requestIdsByMethod) {
                    if (requestIdsByMethod[method].length > 0) {
                        hasRequests = true;
                        break;
                    }
                }
                if (jumpPadData && jumpPadData['casRequest'])
                    hasRequests = true;
                if (hasRequests) {
                    var request = new cas.ui.messages.GenericRequest();
                    request.fluffCaptionId = 'GUEST_HAS_REQUESTS';
                    request.additionalClasses = 'guestWelcomeDialog';
                    this.generic(request);
                }
            };
            UI.prototype.showAccountDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    var request = { action: 'showAccountDialog' };
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                kr3mCas.async.If.then(response.status == cas.STATUS_LOGOUT, function (thenDone) {
                                    _this.client.logout(thenDone);
                                }, function () {
                                    callback && callback(response.status);
                                });
                            });
                        });
                    });
                }, function () { return callback && callback(kr3mCas.ERROR_DENIED); });
            };
            UI.prototype.showStandardDialog = function (options, action, callback) {
                var _this = this;
                this.loginGate(options, function (proxy) {
                    var request = { action: action };
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                callback && callback(response.status);
                            });
                        });
                    });
                }, function () { return callback && callback(kr3mCas.ERROR_DENIED); });
            };
            UI.prototype.completeName = function (callback) {
                this.showStandardDialog({}, 'showCompleteNameDialog', callback);
            };
            UI.prototype.showWelcomeDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.showStandardDialog(options, 'showWelcomeDialog', function (status) {
                    _this.client.dispatchEvent(new cas.vo.Event(cas.EVENT_WELCOME_CLOSED));
                    callback && callback(status);
                });
            };
            UI.prototype.showRaffleDialog = function () {
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.showStandardDialog(options, 'showRaffleDialog', callback);
            };
            UI.prototype.getRequestSources = function (requestOptions, callback) {
                sCasStub.getGameConfig(function (gameConfig) {
                    var sources = gameConfig.requestOptions.filter(function (ro) { return /^CLAN_/.test(ro) == !!requestOptions.clanInviteId; });
                    callback(sources);
                });
            };
            UI.prototype.hasRequestPotential = function (requestOptions, handlers, message, callback) {
                this.getRequestSources(requestOptions, function (sources) {
                    var hasPotential = requestOptions.newFriendsOnly ? false : message.friends.length > 0;
                    kr3mCas.async.Loop.forEach(handlers, function (handler, next) {
                        var method = handler.getMethod();
                        message.methods.push(method);
                        handler.getInvitableFriends(function (invitableFriends) {
                            if (invitableFriends.length > 0) {
                                message.invitableFriends = message.invitableFriends.concat(invitableFriends);
                                hasPotential = true;
                            }
                            else {
                                hasPotential = hasPotential || handler.canInviteInUI();
                            }
                            next();
                        });
                    }, function () {
                        message.otherSources = sources;
                        if (message.otherSources.length > 0)
                            hasPotential = true;
                        callback(hasPotential);
                    });
                });
            };
            UI.prototype.confirmInvitations = function (requestOptions, handlers, response, callback) {
                this.getRequestSources(requestOptions, function (sources) {
                    var invitedByMethod = kr3mCas.util.Util.bucketBy(response.invitedFriends, 'method');
                    var confirmedExisting = [];
                    var confirmedInvites = [];
                    for (var i = 0; i < sources.length; ++i)
                        confirmedInvites.push.apply(confirmedInvites, (invitedByMethod[sources[i]] || []));
                    sCasStub.getFriendRawIds(response.selectedFriendIds, function (rawIds) {
                        kr3mCas.async.Loop.forEach(handlers, function (handler, next) {
                            var method = handler.getMethod();
                            var existing = rawIds[method] || [];
                            var existingRawIds = kr3mCas.util.Util.gather(existing, 'rawId');
                            var invited = invitedByMethod[method] || [];
                            handler.confirmRequests(requestOptions, existingRawIds, invited, function (confirmedExistingRaw, confirmedInvited) {
                                for (var i = 0; i < confirmedExistingRaw.length; ++i) {
                                    var existingEntry = kr3mCas.util.Util.getBy(existing, 'rawId', confirmedExistingRaw[i]);
                                    if (existingEntry)
                                        confirmedExisting.push(existingEntry.gameAccountId);
                                }
                                confirmedInvites.push.apply(confirmedInvites, confirmedInvited);
                                next();
                            });
                        }, function () { return callback(confirmedExisting, confirmedInvites); });
                    });
                });
            };
            UI.prototype.showRequestDialog = function (requestOptions, callback) {
                var _this = this;
                this.loginGate(requestOptions, function (proxy) {
                    var message = new cas.ui.messages.RequestRequest();
                    _this.client.getFriends(function (friends) {
                        message.friends = friends;
                        var handlers = _this.client.getActiveHandlers();
                        if (handlers.length == 0)
                            return callback && callback(kr3mCas.ERROR_DENIED, []);
                        _this.hasRequestPotential(requestOptions, handlers, message, function (hasPotential) {
                            if (!hasPotential)
                                return _this.info(requestOptions, 'ERROR_NO_FRIENDS', {}, function () { return callback && callback(kr3mCas.ERROR_EMPTY_DATA, []); });
                            _this.showFrame(proxy, function (exit) {
                                message.requestOptions = requestOptions;
                                proxy.post(message, function (response) {
                                    _this.hideFrame(proxy, exit, function () {
                                        if (response.status != kr3mCas.SUCCESS)
                                            return callback && callback(response.status, []);
                                        _this.confirmInvitations(requestOptions, handlers, response, function (confirmedExisting, confirmedInvites) {
                                            if (confirmedExisting.length == 0 && confirmedInvites.length == 0)
                                                return callback && callback(kr3mCas.ERROR_CANCELLED, []);
                                            sCasStub.sendRequests(requestOptions, confirmedExisting, confirmedInvites, function (status, requests) {
                                                if (status != kr3mCas.SUCCESS)
                                                    return callback && callback(status, []);
                                                _this.info(requestOptions, 'REQUESTS_SENT', { count: requests.length }, function () { return callback && callback(status, requests); });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }, function () { return callback && callback(kr3mCas.ERROR_DENIED, []); });
            };
            UI.prototype.showMailboxDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var answerListener = options.answerListener;
                        if (answerListener)
                            proxy.on('requestAnswered', function (params) { return answerListener(params[0], params[1]); });
                        delete options.answerListener;
                        var request = { action: 'showMailboxDialog', dialogOptions: options };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                proxy.off('requestAnswered');
                                if (response.status == cas.STATUS_SHOW_REQUEST)
                                    return _this.showRequestDialog(response.options, callback);
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.showWalletDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showWalletDialog' };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.showAchievementsDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showAchievementsDialog' };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.showClanDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showClanDialog' };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.showShopDialog = function () {
                var _this = this;
                var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object') || {};
                var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function');
                this.loginGate(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showShopDialog' };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                if (response.status == cas.STATUS_SHOW_WALLET)
                                    return _this.showWalletDialog(function () { return _this.showShopDialog(callback); });
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.mailValidated = function (status, callback) {
                var _this = this;
                this.prepareFrame({}, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showMailValidatedDialog', status: status };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, function () {
                                exit();
                                callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.raffleMailValidated = function (status, raffleId, callback) {
                var _this = this;
                this.prepareFrame({}, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = { action: 'showRaffleMailValidatedDialog', status: status, raffleId: raffleId };
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, function () {
                                exit();
                                callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.loginTimeoutShow = function (callback) {
                var _this = this;
                this.prepareFrame({}, function (proxy) {
                    var request = new cas.ui.messages.LoginTimeoutRequest();
                    request.show = true;
                    _this.showFrame(proxy, function (exit) {
                        _this.loginTimeoutExit = exit;
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                _this.loginTimeoutExit = null;
                                callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.loginTimeoutHide = function (callback) {
                var _this = this;
                this.prepareFrame({}, function (proxy) {
                    var request = new cas.ui.messages.LoginTimeoutRequest();
                    request.show = false;
                    proxy.post(request, function (response) {
                        if (!_this.loginTimeoutExit)
                            return callback();
                        _this.hideFrame(proxy, _this.loginTimeoutExit, function () {
                            _this.loginTimeoutExit = null;
                            callback();
                        });
                    });
                }, callback);
            };
            UI.prototype.recoverPassword = function (options, method, callback) {
                var _this = this;
                this.prepareFrame(options, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        var request = new cas.ui.messages.RecoverPasswordRequest();
                        request.dialogOptions = options;
                        request.action = 'showRecoverPasswordDialog';
                        request.method = method;
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                if (response.status == kr3mCas.SUCCESS)
                                    return _this.recoverPasswordResult(options, method, kr3mCas.SUCCESS, response.uniqueKey, function () { return callback && callback(status); });
                                callback && callback(response.status);
                            });
                        });
                    });
                }, function () { return callback && callback(cas.ERROR_INIT_FAILED); });
            };
            UI.prototype.recoverPasswordResult = function (options, method, status, uniqueKey, callback) {
                var _this = this;
                this.prepareFrame(options, function (proxy) {
                    var request = new cas.ui.messages.RecoverPasswordResultRequest();
                    request.dialogOptions = options;
                    request.method = method;
                    request.status = status;
                    request.uniqueKey = uniqueKey;
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function () {
                            _this.hideFrame(proxy, exit, function () {
                                callback && callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.showResetPasswordDialog = function (options, callback) {
                var _this = this;
                this.prepareFrame(options, function (proxy) {
                    var request = new cas.ui.messages.ResetPasswordRequest();
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit, function () {
                                callback(response.status, response.password);
                            });
                        });
                    });
                }, function () { return callback(cas.ERROR_INIT_FAILED, undefined); });
            };
            UI.prototype.resetPasswordResult = function (status, callback) {
                var _this = this;
                this.prepareFrame({}, function (proxy) {
                    var request = new cas.ui.messages.ResetPasswordResultRequest();
                    request.status = status;
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function () {
                            _this.hideFrame(proxy, function () {
                                exit();
                                callback();
                            });
                        });
                    });
                }, callback);
            };
            UI.prototype.generic = function (request, callback) {
                var _this = this;
                this.prepareFrame(request.dialogOptions || {}, function (proxy) {
                    _this.showFrame(proxy, function (exit) {
                        proxy.post(request, function (response) {
                            _this.hideFrame(proxy, exit);
                            callback && callback(response.status);
                        });
                    });
                }, function () { return callback && callback(cas.ERROR_INIT_FAILED); });
            };
            UI.prototype.info = function () {
                var request = new cas.ui.messages.GenericRequest();
                if (typeof arguments[0] == 'string')
                    var _a = Array.from(arguments), fluffId = _a[0], tokens = _a[1], callback = _a[2];
                else
                    var _b = Array.from(arguments), dialogOptions = _b[0], fluffId = _b[1], tokens = _b[2], callback = _b[3];
                request.dialogOptions = dialogOptions;
                request.fluffCaptionId = fluffId;
                request.tokens = tokens;
                this.generic(request, callback);
            };
            UI.prototype.error = function () {
                var request = new cas.ui.messages.GenericRequest();
                if (typeof arguments[0] == 'string')
                    var _a = Array.from(arguments), errorId = _a[0], blocking = _a[1], callback = _a[2];
                else
                    var _b = Array.from(arguments), dialogOptions = _b[0], errorId = _b[1], blocking = _b[2], callback = _b[3];
                request.trackId = 'ERROR';
                request.captionId = 'DIALOG_ERROR';
                request.fluffCaptionId = errorId;
                request.showOkButton = !blocking;
                request.dialogOptions = dialogOptions;
                request.showCancelButton = false;
                request.showCloseButton = !blocking;
                this.generic(request, callback);
            };
            return UI;
        }());
        ui.UI = UI;
    })(ui = cas.ui || (cas.ui = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var InventoryItem = (function () {
            function InventoryItem() {
            }
            return InventoryItem;
        }());
        vo.InventoryItem = InventoryItem;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var vo;
    (function (vo) {
        var Inventory = (function () {
            function Inventory() {
                this.items = [];
            }
            return Inventory;
        }());
        vo.Inventory = Inventory;
    })(vo = cas.vo || (cas.vo = {}));
})(cas || (cas = {}));
var cas;
(function (cas) {
    var Client = (function (_super) {
        __extends(Client, _super);
        function Client(gameId, options) {
            var _this = _super.call(this, options) || this;
            _this.gameId = gameId;
            _this.ui = new cas.ui.UI(_this, _this.flags);
            if (_this.options.languageId)
                _this.setLanguage(_this.options.languageId);
            else
                _this.languageId = 'de';
            kr3mCas.util.Log.log('CAS', cas.VERSION, '(live build)');
            sCasStub.initClient(gameId, _this.options, function (clientInit) {
                if (!clientInit.success) {
                    _this.flags.ignore('init');
                    _this.flags.set('broken');
                    return kr3mCas.util.Log.logError('CAS client initialization failed');
                }
                sCasStub.getGameConfig(function (gameConfig) {
                    sCasStub.getJumpPadData(function (jumpPadData) {
                        _this.jumpPadData = jumpPadData;
                        _this.receiveAllRequests(function (requestIdsByMethod) {
                            sCasStub.getActiveLogins(requestIdsByMethod, function (activeLogins) {
                                _this.isHandlerLoggedIn(requestIdsByMethod, function (isLoggedIn) {
                                    isLoggedIn = isLoggedIn || activeLogins.length > 0;
                                    for (var i = 0; i < activeLogins.length; ++i) {
                                        var handler = _this.getMethodHandler(activeLogins[i].method);
                                        _this.handlers.push(handler);
                                    }
                                    _this.flags.ignore('broken');
                                    _this.flags.set('init');
                                    _this.handleQueryParams(isLoggedIn, function () {
                                        _this.highscores = new cas.modelclient.Highscores(gameConfig);
                                        _this.flags.set('highscores');
                                        kr3mCas.async.If.then(gameConfig.showIFramePopups && jumpPadData, function (thenDone) {
                                            _this.handleQueryParams(isLoggedIn, thenDone, jumpPadData);
                                        }, function () {
                                            if (isLoggedIn) {
                                                _this.dispatchEvent(new cas.vo.Event(cas.EVENT_CONNECT));
                                                _this.dispatchEvent(new cas.vo.Event(cas.EVENT_ONLINE));
                                                _this.ui.postLoginGates(_this.handlers[0]);
                                            }
                                            else {
                                                _this.dispatchEvent(new cas.vo.Event(cas.EVENT_OFFLINE));
                                                _this.ui.guestGates(requestIdsByMethod, jumpPadData);
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            return _this;
        }
        Client.prototype.getVersion = function () {
            return cas.VERSION;
        };
        Client.prototype.resendValidationEmail = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.resendValidationEmail(callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.validateDoi = function (token, callback) {
            var _this = this;
            sCasStub.validateDoi(token, function (result) {
                if (result.status == kr3mCas.ERROR_EXPIRED)
                    return callback();
                if (result.status == kr3mCas.SUCCESS)
                    kr3mCas.tracking3.Track.track('MAIL_VALIDATED');
                if (_this.hasIngamePopup(cas.POPUP_EMAIL_VALIDATED)) {
                    _this.dispatchEvent(new cas.vo.Event(cas.POPUP_EMAIL_VALIDATED, { status: result.status }));
                    callback();
                }
                else {
                    _this.ui.mailValidated(result.status, callback);
                }
            });
        };
        Client.prototype.validateEmail = function (token, callback) {
            var _this = this;
            sCasStub.validateEmail(token, function (result) {
                if (result.status == kr3mCas.ERROR_EXPIRED)
                    return callback();
                if (result.status == kr3mCas.SUCCESS)
                    kr3mCas.tracking3.Track.track('MAIL_VALIDATED');
                if (_this.hasIngamePopup(cas.POPUP_EMAIL_VALIDATED)) {
                    _this.dispatchEvent(new cas.vo.Event(cas.POPUP_EMAIL_VALIDATED, { status: result.status }));
                    callback();
                }
                else {
                    _this.ui.mailValidated(result.status, callback);
                }
            });
        };
        Client.prototype.validateRaffleEmail = function (token, callback) {
            var _this = this;
            sCasStub.validateRaffleEmail(token, function (result) {
                if (result.status == kr3mCas.ERROR_EXPIRED)
                    return callback();
                if (result.status == kr3mCas.SUCCESS)
                    kr3mCas.tracking3.Track.track('MAIL_VALIDATED');
                if (_this.hasIngamePopup(cas.POPUP_RAFFLE_EMAIL_VALIDATED)) {
                    _this.dispatchEvent(new cas.vo.Event(cas.POPUP_RAFFLE_EMAIL_VALIDATED, { status: result.status }));
                    callback();
                }
                else {
                    _this.ui.raffleMailValidated(result.status, result.data, callback);
                }
            });
        };
        Client.prototype.setPassword = function (oldPassword, newPassword, callback) {
            this.flags.onceSet('init', function () { return sCasStub.changePassword(oldPassword, newPassword, callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.setPasswordWithToken = function (token, newPassword, callback) {
            this.flags.onceSet('init', function () { return sCasStub.resetEmailPassword(token, newPassword, function (result) { return callback && callback(result.status); }); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.resetPassword = function (token, callback) {
            var _this = this;
            if (this.hasIngamePopup(cas.POPUP_RESET_PASSWORD))
                return this.dispatchPopup(cas.POPUP_RESET_PASSWORD, { token: token });
            this.ui.showResetPasswordDialog({}, function (status, password) {
                if (status != kr3mCas.SUCCESS)
                    return callback();
                sCasStub.resetEmailPassword(token, password, function (result) {
                    if (_this.hasIngamePopup(cas.POPUP_RESET_PASSWORD_RESULT)) {
                        _this.dispatchPopup(cas.POPUP_RESET_PASSWORD_RESULT, { status: result.status });
                        callback();
                    }
                    else {
                        _this.ui.resetPasswordResult(result.status, callback);
                    }
                });
            });
        };
        Client.prototype.handleQueryParams = function (isLoggedIn, callback, params) {
            if (!params) {
                var win = kr3mCas.util.Browser.getHighestSameDomainWindow();
                params = kr3mCas.util.Browser.getQueryValues(win);
                if (!params['casAction'] || !params['casToken'])
                    return callback();
            }
            switch (params['casAction']) {
                case cas.TOKEN_DOI:
                    return this.validateDoi(params['casToken'], callback);
                case cas.TOKEN_VALIDATE_EMAIL:
                    return this.validateEmail(params['casToken'], callback);
                case cas.TOKEN_VALIDATE_RAFFLE_EMAIL:
                    return this.validateRaffleEmail(params['casToken'], callback);
                case cas.TOKEN_RESET_PASSWORD:
                    if (!isLoggedIn)
                        this.resetPassword(params['casToken'], function () { });
                    break;
            }
            callback();
        };
        Client.prototype.getFeatures = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getFeatures(callback); });
            this.flags.onceSet('broken', function () { return callback({}); });
        };
        Client.prototype.getUserFeatures = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getUserFeatures(callback); });
            this.flags.onceSet('broken', function () { return callback({}); });
        };
        Client.prototype.getLoginMethods = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getLoginMethods(callback); });
            this.flags.onceSet('broken', function () { return callback([]); });
        };
        Client.prototype.getToken = function (callback) {
            this.flags.onceSet('init', function () { return callback(sCasStub.clientId); });
            this.flags.onceSet('broken', function () { return callback(''); });
        };
        Client.prototype.addEventListener = function (eventListener) {
            _super.prototype.addEventListener.call(this, eventListener);
        };
        Client.prototype.on = function (eventName, listener) {
            _super.prototype.on.call(this, eventName, listener);
        };
        Client.prototype.postLogin = function (handler, callback) {
            var _this = this;
            this.flags.onceSet('highscores', function () {
                _this.updateFriends(true);
                _this.highscores.clearCaches();
                _this.ui.postLoginGates(handler, callback);
            });
        };
        Client.prototype.register = function (handler, customValues, dois, callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                handler.register(function (result) {
                    if (!result.success)
                        return callback(result.status);
                    _this.receiveAllRequests(function (requestIdsByMethod) {
                        result.data.requestIdsByMethod = requestIdsByMethod;
                        result.data.customValues = customValues;
                        result.data.dois = dois;
                        sCasStub.register(result.data, function (result) {
                            if (result.success) {
                                _this.handlers.push(handler);
                                _this.postLogin(handler, function () {
                                    _this.dispatchEvent(new cas.vo.Event(cas.EVENT_REGISTER));
                                    _this.dispatchEvent(new cas.vo.Event(cas.EVENT_ONLINE));
                                    callback(result.status);
                                });
                            }
                            else {
                                _this.dispatchEvent(new cas.vo.Event(cas.EVENT_REGISTER_FAILED));
                                callback(result.status);
                            }
                        });
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.login = function (handler, customValues, dois, callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                handler.login(function (result) {
                    if (!result.success)
                        return callback(result.status);
                    _this.receiveAllRequests(function (requestIdsByMethod) {
                        result.data.requestIdsByMethod = requestIdsByMethod;
                        result.data.customValues = customValues;
                        result.data.dois = dois;
                        sCasStub.login(result.data, function (result) {
                            if (result.success) {
                                _this.handlers.push(handler);
                                _this.postLogin(handler, function () {
                                    _this.dispatchEvent(new cas.vo.Event(cas.EVENT_LOGIN));
                                    _this.dispatchEvent(new cas.vo.Event(cas.EVENT_ONLINE));
                                    callback(result.status);
                                });
                            }
                            else {
                                _this.dispatchEvent(new cas.vo.Event(cas.EVENT_LOGIN_FAILED));
                                callback(result.status);
                            }
                        });
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.connect = function (handler, customValues, dois, callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                var userCancelled = false;
                var timer = setTimeout(function () {
                    _this.ui.loginTimeoutShow(function () {
                        userCancelled = true;
                        callback(kr3mCas.ERROR_CANCELLED);
                    });
                }, cas.CONNECT_WARNING_TIMEOUT);
                handler.connect(function (result) {
                    if (userCancelled)
                        return;
                    clearTimeout(timer);
                    _this.ui.loginTimeoutHide(function () {
                        if (!result.success)
                            return callback(result.status);
                        _this.receiveAllRequests(function (requestIdsByMethod) {
                            result.data.requestIdsByMethod = requestIdsByMethod;
                            result.data.customValues = customValues;
                            result.data.dois = dois;
                            sCasStub.connect(result.data, function (result) {
                                if (result.success) {
                                    _this.handlers.push(handler);
                                    _this.postLogin(handler, function () {
                                        _this.dispatchEvent(new cas.vo.Event(cas.EVENT_CONNECT));
                                        _this.dispatchEvent(new cas.vo.Event(cas.EVENT_ONLINE));
                                        callback(result.status);
                                    });
                                }
                                else {
                                    _this.dispatchEvent(new cas.vo.Event(cas.EVENT_CONNECT_FAILED));
                                    callback(result.status);
                                }
                            });
                        });
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.isLoggedIn = function (callback) {
            var _this = this;
            this.flags.onceSet('init', function () { return callback(_this.handlers.length > 0); });
            this.flags.onceSet('broken', function () { return callback(false); });
        };
        Client.prototype.connectAnonymous = function (username, callback) {
            var options = { username: username };
            this.connect(new cas.methods.anon.Handler(this, options), undefined, undefined, callback);
        };
        Client.prototype.registerUsername = function (username, password, callback) {
            var options = { username: username, password: password };
            this.register(new cas.methods.username.Handler(this, options), undefined, undefined, callback);
        };
        Client.prototype.loginUsername = function (username, password, callback) {
            var options = { username: username, password: password };
            this.login(new cas.methods.username.Handler(this, options), undefined, undefined, callback);
        };
        Client.prototype.registerEmail = function () {
            var u = kr3mCas.util.Util;
            var strings = u.getAllOfType(arguments, 'string');
            if (strings.length == 3) {
                var username = strings[0];
                var email = strings[1];
                var password = strings[2];
            }
            else {
                var email = strings[0];
                var password = strings[1];
            }
            var newsletter = u.getFirstOfType(arguments, 'boolean') || false;
            var customValues = u.getFirstOfType(arguments, 'object') || null;
            var callback = u.getFirstOfType(arguments, 'function');
            var options = { username: username, email: email, password: password, newsletter: newsletter };
            this.register(new cas.methods.email.Handler(this, options), customValues, undefined, callback);
        };
        Client.prototype.loginEmail = function (email, password, callback) {
            var options = { email: email, password: password, username: undefined, newsletter: undefined };
            this.login(new cas.methods.email.Handler(this, options), undefined, undefined, callback);
        };
        Client.prototype.sendPasswordRecoverMail = function (email, callback) {
            sCasStub.sendPasswordRecoverMail(email, function (result) {
                callback(result.status);
            });
        };
        Client.prototype.connectFacebook = function (callback) {
            var options = {};
            this.connect(new cas.methods.facebook.Handler(this, options), undefined, undefined, callback);
        };
        Client.prototype.logout = function (callback) {
            var _this = this;
            this.flags.onceSet(['init', 'highscores'], function () {
                kr3mCas.async.Loop.forEach(_this.handlers, function (handler, next) { return handler.logout(next); }, function () {
                    sCasStub.logout(function (result) {
                        _this.handlers = [];
                        _this.highscores.clearCaches();
                        callback && callback();
                        _this.dispatchEvent(new cas.vo.Event(cas.EVENT_LOGOUT));
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback && callback(); });
        };
        Client.prototype.getUserId = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getUserId(callback); });
            this.flags.onceSet('broken', function () { return callback(0); });
        };
        Client.prototype.getUser = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getUser(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.getUserAccount = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getAccountData(function (result) { return callback(result.data); }); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.saveUserAccount = function (account, callback) {
            this.flags.onceSet('init', function () { return sCasStub.updateAccountData(account, callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.setName = function (name, callback) {
            this.flags.onceSet('init', function () { return sCasStub.setName(name, callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.setUserImageUrl = function (imageUrl, callback) {
            this.flags.onceSet('init', function () { return sCasStub.setUserImageUrl(imageUrl, callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getLanguage = function (callback) {
            callback(this.languageId);
        };
        Client.prototype.setLanguage = function (languageId, callback) {
            var _this = this;
            if (this.languageId == languageId)
                return callback && callback(kr3mCas.SUCCESS);
            if (cas.LANGUAGES.indexOf(languageId) < 0)
                return callback && callback(kr3mCas.ERROR_INPUT);
            this.languageId = languageId;
            this.isLoggedIn(function (loggedIn) {
                if (loggedIn) {
                    _this.flags.onceSet('init', function () { return sCasStub.setLanguage(languageId, function (status) {
                        if (status != kr3mCas.SUCCESS)
                            return callback && callback(status);
                        _this.ui.setLanguage(languageId, function () { return callback && callback(status); });
                    }); });
                }
                else {
                    sCasStub.languageId = languageId;
                    _this.ui.setLanguage(languageId, function () { return callback && callback(kr3mCas.SUCCESS); });
                }
            });
        };
        Client.prototype.updateFriends = function (silent, callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                var rawFriendsData = [];
                kr3mCas.async.Loop.forEach(_this.handlers, function (handler, next) {
                    handler.getFriendUniqueKeys(silent, function (friendUniqueKeys) {
                        handler.getMethodAndKey(function (method, uniqueKey) {
                            if (friendUniqueKeys.length > 0)
                                rawFriendsData.push({ method: method, uniqueKey: uniqueKey, friendUniqueKeys: friendUniqueKeys });
                            next();
                        });
                    });
                }, function () { return sCasStub.updateFriends(rawFriendsData, callback); });
            });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getFriends = function (callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                _this.updateFriends(false, function () {
                    sCasStub.getFriends(callback);
                });
            });
            this.flags.onceSet('broken', function () { return callback([]); });
        };
        Client.prototype.getAchievements = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getAchievements(callback); });
            this.flags.onceSet('broken', function () { return callback(undefined); });
        };
        Client.prototype.updateAchievement = function (achievementId, progress, callback) {
            this.flags.onceSet('init', function () { return sCasStub.updateAchievement(achievementId, progress, callback); });
            this.flags.onceSet('broken', function () { return callback(undefined); });
        };
        Client.prototype.createClan = function (name, callback) {
            this.flags.onceSet('init', function () {
                sCasStub.createClan(name, function (result) {
                    callback(result.status, result.data);
                });
            });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED, ''); });
        };
        Client.prototype.disbandClan = function (clanId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.disbandClan(clanId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getClanMemberships = function (userId, callback) {
            this.flags.onceSet('init', function () {
                sCasStub.getClanMemberships(userId, function (result) {
                    callback(result.success ? result.data : []);
                });
            });
            this.flags.onceSet('broken', function () { return callback([]); });
        };
        Client.prototype.getClanMembers = function (clanId, offset, limit, callback) {
            this.flags.onceSet('init', function () {
                sCasStub.getClanMembers(clanId, offset, limit, function (result) {
                    callback(result.data);
                });
            });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.getClanInvitations = function (callback) {
            this.flags.onceSet('init', function () {
                sCasStub.getClanInvitations(function (result) {
                    callback(result.success ? result.data : []);
                });
            });
            this.flags.onceSet('broken', function () { return callback([]); });
        };
        Client.prototype.getSentClanInvitations = function (clanId, callback) {
            this.flags.onceSet('init', function () {
                sCasStub.getSentClanInvitations(clanId, function (result) {
                    callback(result.success ? result.data : []);
                });
            });
            this.flags.onceSet('broken', function () { return callback([]); });
        };
        Client.prototype.cancelClanInvitation = function (clanId, userId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.cancelClanInvitation(clanId, userId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.inviteUserToClan = function (clanId, userId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.inviteUserToClan(clanId, userId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.leaveClan = function (clanId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.leaveClan(clanId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.kickClanMember = function (clanId, userId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.kickClanMember(clanId, userId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.answerClanInvitation = function (clanId, accept, callback) {
            this.flags.onceSet('init', function () { return sCasStub.answerClanInvitation(clanId, accept, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getClanHighscores = function (options, callback) {
            var _this = this;
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.getClanHighscores(options, callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.share = function (messageOrOptions, callback) {
            var _this = this;
            this.flags.onceSet('init', function () {
                if (typeof messageOrOptions == 'string') {
                    var options = new cas.vo.ShareOptions();
                    options.message = messageOrOptions;
                }
                else {
                    var options = messageOrOptions;
                }
                var success = false;
                kr3mCas.async.Loop.forEach(_this.handlers, function (handler, next) {
                    handler.share(options, function (result) {
                        success = success || result.success;
                        next();
                    });
                }, function () {
                    sCasStub.share(options, function (result) {
                        success = success || result.success;
                        callback && callback(success);
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback && callback(false); });
        };
        Client.prototype.notify = function (messageOrOptions, userId, callback) {
            var _this = this;
            if (userId === void 0) { userId = 0; }
            this.flags.onceSet('init', function () {
                if (typeof messageOrOptions == 'string') {
                    var options = new cas.vo.NotifyOptions();
                    options.message = messageOrOptions;
                }
                else {
                    var options = messageOrOptions;
                }
                var success = false;
                kr3mCas.async.Loop.forEach(_this.handlers, function (handler, next) {
                    handler.notify(options, userId, function (result) {
                        success = success || result.success;
                        next();
                    });
                }, function () {
                    sCasStub.notify(options, userId, function (result) {
                        success = success || result.success;
                        callback && callback(success);
                    });
                });
            });
            this.flags.onceSet('broken', function () { return callback && callback(false); });
        };
        Client.prototype.graphAction = function (options, callback) {
            callback && callback(false);
        };
        Client.prototype.setCookies = function () {
            var _this = this;
            var cookies = arguments[0];
            var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object', 1) || {};
            var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function', 1);
            this.isLoggedIn(function (isLoggedIn) {
                if (isLoggedIn) {
                    if (options.deleteGuestCookies) {
                        var keys = kr3mCas.util.LocalStorage.getStoredItemKeys();
                        var prefix = 'CasCookie_' + _this.gameId + '_';
                        for (var j = 0; j < keys.length; ++j) {
                            if (keys[j].indexOf(prefix) == 0)
                                kr3mCas.util.LocalStorage.removeItem(keys[j]);
                        }
                    }
                    sCasStub.setCookies(cookies, callback);
                }
                else {
                    if (options.dontStoreGuestCookies)
                        return callback(false);
                    for (var i in cookies)
                        kr3mCas.util.LocalStorage.setItem('CasCookie_' + _this.gameId + '_' + i, cookies[i]);
                    callback && callback(true);
                }
            });
        };
        Client.prototype.setCookie = function () {
            var name = arguments[0];
            var value = arguments[1];
            var options = kr3mCas.util.Util.getFirstOfType(arguments, 'object', 2);
            var callback = kr3mCas.util.Util.getFirstOfType(arguments, 'function', 2);
            var cookies = {};
            cookies[name] = value;
            this.setCookies(cookies, options, callback);
        };
        Client.prototype.getCookies = function (callback) {
            var _this = this;
            this.isLoggedIn(function (isLoggedIn) {
                if (isLoggedIn)
                    return sCasStub.getCookies(callback);
                var cookies = {};
                var keys = kr3mCas.util.LocalStorage.getStoredItemKeys();
                var prefix = 'CasCookie_' + _this.gameId + '_';
                for (var i = 0; i < keys.length; ++i) {
                    if (keys[i].indexOf(prefix) == 0)
                        cookies[keys[i].slice(prefix.length)] = kr3mCas.util.LocalStorage.getItem(keys[i]);
                }
                callback(cookies);
            });
        };
        Client.prototype.getCookie = function (name, callback) {
            this.getCookies(function (cookies) { return callback(cookies[name]); });
        };
        Client.prototype.getFriendCookies = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getFriendCookies(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.setHighscore = function (category, score, callback, customData, bias) {
            var _this = this;
            if (bias === void 0) { bias = 0; }
            var entries = [{ category: category, score: score, customData: customData, bias: bias }];
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.setHighscores(entries, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(false); });
        };
        Client.prototype.setHighscores = function (entries, callback) {
            var _this = this;
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.setHighscores(entries, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(false); });
        };
        Client.prototype.getUserHighscore = function (userId, options, callback) {
            var _this = this;
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.getUserHighscore(userId, options, callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.getHighscores = function () {
            var _this = this;
            if (arguments.length == 2) {
                var options = arguments[0];
                var callback = arguments[1];
            }
            else {
                kr3mCas.util.Log.logDebug('getHighscores(category, offset, limit, callback) is deprecated, use getHighscores(options, callback) instead');
                var options = new cas.vo.HighscoreOptions();
                options.category = arguments[0];
                options.offset = arguments[1];
                options.limit = arguments[2];
                options.friendsOnly = false;
                var callback = arguments[3];
            }
            var request = new cas.stubs.AjaxRequest(callback);
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.getHighscores(options, function (highscores) { return request.complete(highscores); }); });
            this.flags.onceSet('broken', function () { return callback(null); });
            return request;
        };
        Client.prototype.getFriendHighscores = function (category, offset, limit, callback) {
            kr3mCas.util.Log.logDebug('getFriendHighscores(category, offset, limit, callback) is deprecated, use getHighscores(options, callback) instead');
            var options = new cas.vo.HighscoreOptions();
            options.category = category;
            options.offset = offset;
            options.limit = limit;
            options.friendsOnly = true;
            this.getHighscores(options, callback);
        };
        Client.prototype.getExpectedRank = function (optionsOrCategory, score, callback) {
            var _this = this;
            if (typeof optionsOrCategory == 'string') {
                kr3mCas.util.Log.logDebug('getExpectedRank(category, score, callback) is deprecated, use getExpectedRank(options, score, callback) instead');
                var options = new cas.vo.HighscoreOptions();
                options.category = optionsOrCategory;
            }
            else {
                var options = optionsOrCategory;
            }
            this.flags.onceSet(['init', 'highscores'], function () { return _this.highscores.getExpectedRank(options, score, 0, callback); });
            this.flags.onceSet('broken', function () { return callback(-1); });
        };
        Client.prototype.hasMail = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.hasMail(callback); });
            this.flags.onceSet('broken', function () { return callback(0); });
        };
        Client.prototype.getMailBox = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getMailBox(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.getRequestCount = function (callback) {
            kr3mCas.util.Log.logDebug('getRequestCount(callback) is deprecated, use hasMail(callback) instead');
            this.flags.onceSet('init', function () { return sCasStub.getRequestCount(callback); });
            this.flags.onceSet('broken', function () { return callback(0); });
        };
        Client.prototype.getRequests = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getRequests(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.answerRequest = function () {
            var u = kr3mCas.util.Util;
            var options = u.getFirstOfType(arguments, 'object');
            if (!options) {
                var requestId = u.getFirstOfType(arguments, 'string');
                var answerId = u.getFirstOfType(arguments, 'string', 1);
                options = { requestId: requestId, answerId: answerId };
            }
            var callback = u.getFirstOfType(arguments, 'function');
            this.flags.onceSet('init', function () { return sCasStub.answerRequest(options, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.deleteRequest = function (requestId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.deleteRequest(requestId, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getWallet = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getWallet(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.pay = function (currencyId, amount, comment, callback) {
            this.flags.onceSet('init', function () { return sCasStub.pay(currencyId, amount, comment, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getInventory = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getInventory(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.getShop = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getShop(callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.buyShopPackage = function (packageId, priceOrCurrencyId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.buyShopPackage(packageId, priceOrCurrencyId, callback); });
            this.flags.onceSet('broken', function () { return callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.consumeItem = function (itemId, amount, comment, callback) {
            this.flags.onceSet('init', function () { return sCasStub.consumeItem(itemId, amount, comment, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getRaffle = function (raffleId, callback) {
            this.flags.onceSet('init', function () { return sCasStub.getRaffle(raffleId, callback); });
            this.flags.onceSet('broken', function () { return callback(null); });
        };
        Client.prototype.participate = function () {
            var U = kr3mCas.util.Util;
            var raffleId = U.getFirstOfType(arguments, 'string') || '*';
            var participation = U.getFirstOfType(arguments, 'object');
            var callback = U.getFirstOfType(arguments, 'function');
            this.flags.onceSet('init', function () { return sCasStub.participate(raffleId, participation, callback); });
            this.flags.onceSet('broken', function () { return callback && callback(cas.ERROR_INIT_FAILED); });
        };
        Client.prototype.getTime = function (callback) {
            this.flags.onceSet('init', function () { return sCasStub.getTime(callback); });
            this.flags.onceSet('broken', function () { return callback(undefined); });
        };
        Client.prototype.getShortUrl = function (url, callback) {
            this.flags.onceSet('init', function () { return sCasStub.getShortUrl(url, callback); });
            this.flags.onceSet('broken', function () { return callback(''); });
        };
        Client.prototype.preload = function () {
            this.ui.preload();
        };
        Client.prototype.track = function (data) {
            this.flags.onceSet('init', function () { return sCasStub.track(data); });
        };
        return Client;
    }(cas.ClientCore));
    cas.Client = Client;
})(cas || (cas = {}));
