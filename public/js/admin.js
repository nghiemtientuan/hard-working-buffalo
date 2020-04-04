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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js":
/*!*****************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
    var id = '#c3-area-chart';
    var chart = $(id);
    var column_x = chart.data('column_x') || [];
    var label_x = chart.data('label_x') || 'x';
    var label_y = chart.data('label_y') || 'y';
    var testes = chart.data('testes') || [];
    var tested = chart.data('tested') || [];
    var color_tests = chart.data('color_tests') || '#E53935';
    var color_tested = chart.data('color_tested') || '#3949AB';
    var height = chart.data('height') || 400;
    var tick_rotate = chart.data('tick_rotate') || 90;

    c3.generate({
        bindto: id,
        size: { height: height },
        point: {
            r: 4
        },
        color: {
            pattern: [color_tests, color_tested],
        },
        data: {
            x : 'x',
            columns: [
                column_x,
                testes,
                tested,
            ],
            types: {
                data1: 'area-spline',
                data2: 'area-spline'
            },
        },
        axis: {
            x: {
                label: label_x,
                type: 'category',
                tick: {
                    rotate: -tick_rotate
                },
                height: 80
            },
            y: {
                label: label_y
            },
        },
        zoom: {
            enabled: true
        },
        grid: {
            y: {
                show: true
            },
        },
    });
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/core/app.js":
/*!*************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/core/app.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* ------------------------------------------------------------------------------
*
*  # Template JS core
*
*  Core JS file with default functionality configuration
*
*  Version: 1.2
*  Latest update: Dec 11, 2015
*
* ---------------------------------------------------------------------------- */


// Allow CSS transitions when page is loaded
$(window).on('load', function() {
    $('body').removeClass('no-transitions');
});


$(function() {

    // Disable CSS transitions on page load
    $('body').addClass('no-transitions');



    // ========================================
    //
    // Content area height
    //
    // ========================================


    // Calculate min height
    function containerHeight() {
        var availableHeight = $(window).height() - $('.page-container').offset().top - $('.navbar-fixed-bottom').outerHeight();

        $('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }

    // Initialize
    containerHeight();




    // ========================================
    //
    // Heading elements
    //
    // ========================================


    // Heading elements toggler
    // -------------------------

    // Add control button toggler to page and panel headers if have heading elements
    $('.panel-footer').has('> .heading-elements:not(.not-collapsible)').prepend('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');
    $('.page-title, .panel-title').parent().has('> .heading-elements:not(.not-collapsible)').children('.page-title, .panel-title').append('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');


    // Toggle visible state of heading elements
    $('.page-title .heading-elements-toggle, .panel-title .heading-elements-toggle').on('click', function() {
        $(this).parent().parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
    });
    $('.panel-footer .heading-elements-toggle').on('click', function() {
        $(this).parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
    });



    // Breadcrumb elements toggler
    // -------------------------

    // Add control button toggler to breadcrumbs if has elements
    $('.breadcrumb-line').has('.breadcrumb-elements').prepend('<a class="breadcrumb-elements-toggle"><i class="icon-menu-open"></i></a>');


    // Toggle visible state of breadcrumb elements
    $('.breadcrumb-elements-toggle').on('click', function() {
        $(this).parent().children('.breadcrumb-elements').toggleClass('visible-elements');
    });




    // ========================================
    //
    // Navbar
    //
    // ========================================


    // Navbar navigation
    // -------------------------

    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
        e.stopPropagation();
    });

    // Disabled links
    $('.navbar-nav .disabled a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
        $(this).tab('show');
    });




    // ========================================
    //
    // Element controls
    //
    // ========================================


    // Reload elements
    // -------------------------

    // Panels
    $('.panel [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    });


    // Sidebar categories
    $('.category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.5,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #000'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none',
                color: '#fff'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    }); 


    // Light sidebar categories
    $('.sidebar-default .category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    }); 



    // Collapse elements
    // -------------------------

    //
    // Sidebar categories
    //

    // Hide if collapsed by default
    $('.category-collapsed').children('.category-content').hide();


    // Rotate icon if collapsed by default
    $('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');


    // Collapse on click
    $('.category-title [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $categoryCollapse = $(this).parent().parent().parent().nextAll();
        $(this).parents('.category-title').toggleClass('category-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // adjust page height

        $categoryCollapse.slideToggle(150);
    });


    //
    // Panels
    //

    // Hide if collapsed by default
    $('.panel-collapsed').children('.panel-heading').nextAll().hide();


    // Rotate icon if collapsed by default
    $('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');


    // Collapse on click
    $('.panel [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
        $(this).parents('.panel').toggleClass('panel-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // recalculate page height

        $panelCollapse.slideToggle(150);
    });



    // Remove elements
    // -------------------------

    // Panels
    $('.panel [data-action=close]').click(function (e) {
        e.preventDefault();
        var $panelClose = $(this).parent().parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $panelClose.slideUp(150, function() {
            $(this).remove();
        });
    });


    // Sidebar categories
    $('.category-title [data-action=close]').click(function (e) {
        e.preventDefault();
        var $categoryClose = $(this).parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $categoryClose.slideUp(150, function() {
            $(this).remove();
        });
    });




    // ========================================
    //
    // Main navigation
    //
    // ========================================


    // Main navigation
    // -------------------------

    // Add 'active' class to parent list item in all levels
    $('.navigation').find('li.active').parents('li').addClass('active');

    // Hide all nested lists
    $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

    // Highlight children links
    $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

    // Add active state to all dropdown parent levels
    $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');

    

    // Main navigation tooltips positioning
    // -------------------------

    // Left sidebar
    $('.navigation-main > .navigation-header > i').tooltip({
        placement: 'right',
        container: 'body'
    });



    // Collapsible functionality
    // -------------------------

    // Main navigation
    $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

        // Accordion
        if ($('.navigation-main').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
        }
    });

        
    // Alternate navigation
    $('.navigation-alt').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

        // Accordion
        if ($('.navigation-alt').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
        }
    }); 




    // ========================================
    //
    // Sidebars
    //
    // ========================================


    // Mini sidebar
    // -------------------------

    // Toggle mini sidebar
    $('.sidebar-main-toggle').on('click', function (e) {
        e.preventDefault();

        // Toggle min sidebar class
        $('body').toggleClass('sidebar-xs');
    });



    // Sidebar controls
    // -------------------------

    // Disable click in disabled navigation items
    $(document).on('click', '.navigation .disabled a', function (e) {
        e.preventDefault();
    });


    // Adjust page height on sidebar control button click
    $(document).on('click', '.sidebar-control', function (e) {
        containerHeight();
    });


    // Hide main sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-main-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-main-hidden');
    });


    // Toggle second sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-secondary-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-secondary-hidden');
    });


    // Hide detached sidebar
    $(document).on('click', '.sidebar-detached-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-detached-hidden');
    });


    // Hide all sidebars
    $(document).on('click', '.sidebar-all-hide', function (e) {
        e.preventDefault();

        $('body').toggleClass('sidebar-all-hidden');
    });



    //
    // Opposite sidebar
    //

    // Collapse main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-toggle', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Make main sidebar mini
            $('body').addClass('sidebar-xs');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        }
        else {

            // Make main sidebar default
            $('body').removeClass('sidebar-xs');
        }
    });


    // Hide main sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-main-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');
        
        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide main sidebar
            $('body').addClass('sidebar-main-hidden');
        }
        else {

            // Show main sidebar
            $('body').removeClass('sidebar-main-hidden');
        }
    });


    // Hide secondary sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-secondary-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide secondary
            $('body').addClass('sidebar-secondary-hidden');

        }
        else {

            // Show secondary
            $('body').removeClass('sidebar-secondary-hidden');
        }
    });


    // Hide all sidebars if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-hide', function (e) {
        e.preventDefault();

        // Toggle sidebars visibility
        $('body').toggleClass('sidebar-all-hidden');

        // If hidden
        if ($('body').hasClass('sidebar-all-hidden')) {

            // Show opposite
            $('body').addClass('sidebar-opposite-visible');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        }
        else {

            // Hide opposite
            $('body').removeClass('sidebar-opposite-visible');
        }
    });


    // Keep the width of the main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-fix', function (e) {
        e.preventDefault();

        // Toggle opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');
    });



    // Mobile sidebar controls
    // -------------------------

    // Toggle main sidebar
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-opposite sidebar-mobile-detached');
    });


    // Toggle secondary sidebar
    $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-opposite sidebar-mobile-detached');
    });


    // Toggle opposite sidebar
    $('.sidebar-mobile-opposite-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-opposite').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached');
    });


    // Toggle detached sidebar
    $('.sidebar-mobile-detached-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-detached').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-opposite');
    });



    // Mobile sidebar setup
    // -------------------------

    $(window).on('resize', function() {
        setTimeout(function() {
            containerHeight();
            
            if($(window).width() <= 768) {

                // Add mini sidebar indicator
                $('body').addClass('sidebar-xs-indicator');

                // Place right sidebar before content
                $('.sidebar-opposite').insertBefore('.content-wrapper');

                // Place detached sidebar before content
                $('.sidebar-detached').insertBefore('.content-wrapper');

                // Add mouse events for dropdown submenus
                $('.dropdown-submenu').on('mouseenter', function() {
                    $(this).children('.dropdown-menu').addClass('show');
                }).on('mouseleave', function() {
                    $(this).children('.dropdown-menu').removeClass('show');
                });
            }
            else {

                // Remove mini sidebar indicator
                $('body').removeClass('sidebar-xs-indicator');

                // Revert back right sidebar
                $('.sidebar-opposite').insertAfter('.content-wrapper');

                // Remove all mobile sidebar classes
                $('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached sidebar-mobile-opposite');

                // Revert left detached position
                if($('body').hasClass('has-detached-left')) {
                    $('.sidebar-detached').insertBefore('.container-detached');
                }

                // Revert right detached position
                else if($('body').hasClass('has-detached-right')) {
                    $('.sidebar-detached').insertAfter('.container-detached');
                }

                // Remove visibility of heading elements on desktop
                $('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
                $('.heading-elements').removeClass('visible-elements');

                // Disable appearance of dropdown submenus
                $('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
            }
        }, 100);
    }).resize();




    // ========================================
    //
    // Other code
    //
    // ========================================


    // Plugins
    // -------------------------

    // Popover
    $('[data-popup="popover"]').popover();


    // Tooltip
    $('[data-popup="tooltip"]').tooltip();

});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js":
/*!*********************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js":
/*!*****************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.11.4 - 2015-11-17
* http://jqueryui.com
* Includes: effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(e){var t="ui-effects-",i=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(t,i){var s,n,o={};for(s in i)n=i[s],t[s]!==n&&(a[s]||(e.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,s){e.fx.step[s]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,s,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(n,function(e,t){i[t]&&o[t+"Class"](i[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function i(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function s(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var s=0;i.length>s;s++)null!==i[s]&&e.data(t+i[s],e[0].style[i[s]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(t+i[n]),void 0===s&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=i.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(t):this.queue(a||"fx",t)},show:function(e){return function(t){if(s(t))return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(t){if(s(t))return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(t){if(s(t)||"boolean"==typeof t)return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})}});

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js":
/*!**********************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.11.4 - 2015-11-17
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})});

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/pages/extra_trees.js":
/*!**********************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/pages/extra_trees.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
    var _token = $('input[name="_token"]').val();
    toastr.options.closeButton = true;
    toastr.options.closeHtml = '<button><i class="icon-bin"></i></button>';

    $(".tree-checkbox-hierarchical").fancytree({
        checkbox: true,
        selectMode: 3,
        select: function (event, data) {
            // Get a list of all selected nodes, and convert to a key array:
            var selectedTestIds = $.map(data.tree.getSelectedNodes(), function (node) {
                if (node.children == null) {
                    return node.data.test_id;
                }
            });

            selectedTestIds = JSON.stringify(selectedTestIds);
            var url = $(this).attr('data-urlSetRole');
            $.ajax({
                type: 'POST',
                url: url,
                cache: false,
                data: {_token : _token, selectedTestIds : selectedTestIds},
                success: function (data) {
                    if (data.status) {
                        toastr.success(data.message, data.title);
                    } else {
                        console.log('error: ' + data);
                        toastr.error(data.message, data.title);
                    }
                },
                error: function (data) {
                    console.log('error: ' + data);
                    toastr.error(data.message, data.title);
                }
            });
        },
    });
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js":
/*!******************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* ------------------------------------------------------------------------------
*
*  # Dual listboxes
*
*  Specific JS code additions for form_dual_listboxes.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Basic example
    $('.listbox').bootstrapDualListbox();


    // Multiple selection
    $('.listbox-no-selection').bootstrapDualListbox({
        preserveSelectionOnMove: 'moved',
        moveOnSelect: false
    });


    // Filtered results
    $('.listbox-filtered-results').bootstrapDualListbox({
        nonSelectedListLabel: 'Non-selected',
        selectedListLabel: 'Selected',
        preserveSelectionOnMove: 'moved',
        moveOnSelect: false,
        nonSelectedFilter: 'Biophysics|Econophysics|Geophysics|Thermodynamics'
    });


    // Disable filtering
    $('.listbox-filter-disabled').bootstrapDualListbox({
        showFilterInputs: false
    });


    // Control container height
    $('.listbox-tall').bootstrapDualListbox({
        selectorMinimalHeight: 300
    });


    // Custom text
    $('.listbox-custom-text').bootstrapDualListbox({
        moveOnSelect: false,
        infoText: 'Показать все {0}',
        infoTextFiltered: '<span class="label label-warning">Отфильтровано</span> {0} из {1}',
        infoTextEmpty: 'Пустой лист',
        filterPlaceHolder: 'Фильтр',
        filterTextClear: 'Показать все'
    });


    //
    // Add options dynamically
    //

    // Initialize
    $('.listbox-dynamic-options').bootstrapDualListbox({
        moveOnSelect: false
    });


    // Add options
    $(".listbox-add").click(function(){
        $('.listbox-dynamic-options').append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
        $('.listbox-dynamic-options').trigger('bootstrapDualListbox.refresh');
    });


    // Add options with clearing highlights
    $(".listbox-add-clear").click(function(){
        $('.listbox-dynamic-options').append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
        $('.listbox-dynamic-options').trigger('bootstrapDualListbox.refresh', true);
    });
    
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/pages/uploader_bootstrap.js":
/*!*****************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/pages/uploader_bootstrap.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* ------------------------------------------------------------------------------
*
*  # Bootstrap multiple file uploader
*
*  Specific JS code additions for uploader_bootstrap.html page
*
*  Version: 1.3
*  Latest update: Mar 20, 2017
*
* ---------------------------------------------------------------------------- */

$(function() {

    //
    // Define variables
    //

    // Modal template
    var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
        '  <div class="modal-content">\n' +
        '    <div class="modal-header">\n' +
        '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
        '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
        '    </div>\n' +
        '    <div class="modal-body">\n' +
        '      <div class="floating-buttons btn-group"></div>\n' +
        '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n';

    // Buttons inside zoom modal
    var previewZoomButtonClasses = {
        toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
        fullscreen: 'btn btn-default btn-icon btn-xs',
        borderless: 'btn btn-default btn-icon btn-xs',
        close: 'btn btn-default btn-icon btn-xs'
    };

    // Icons inside zoom modal classes
    var previewZoomButtonIcons = {
        prev: '<i class="icon-arrow-left32"></i>',
        next: '<i class="icon-arrow-right32"></i>',
        toggleheader: '<i class="icon-menu-open"></i>',
        fullscreen: '<i class="icon-screen-full"></i>',
        borderless: '<i class="icon-alignment-unalign"></i>',
        close: '<i class="icon-cross3"></i>'
    };

    // File actions
    var fileActionSettings = {
        zoomClass: 'btn btn-link btn-xs btn-icon',
        zoomIcon: '<i class="icon-zoomin3"></i>',
        dragClass: 'btn btn-link btn-xs btn-icon',
        dragIcon: '<i class="icon-three-bars"></i>',
        removeClass: 'btn btn-link btn-icon btn-xs',
        removeIcon: '<i class="icon-trash"></i>',
        indicatorNew: '<i class="icon-file-plus text-slate"></i>',
        indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
        indicatorError: '<i class="icon-cross2 text-danger"></i>',
        indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
    };


    //
    // Basic example
    //

    $('.file-input').fileinput({
        browseLabel: 'Browse',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // Custom layout
    //

    $('.file-input-custom').fileinput({
        previewFileType: 'image',
        browseLabel: 'Select',
        browseClass: 'btn bg-slate-700',
        browseIcon: '<i class="icon-image2 position-left"></i> ',
        removeLabel: 'Remove',
        removeClass: 'btn btn-danger',
        removeIcon: '<i class="icon-cancel-square position-left"></i> ',
        uploadClass: 'btn bg-teal-400',
        uploadIcon: '<i class="icon-file-upload position-left"></i> ',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialCaption: "Please select image",
        mainClass: 'input-group',
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // Template modifications
    //

    $('.file-input-advanced').fileinput({
        browseLabel: 'Browse',
        browseClass: 'btn btn-default',
        removeClass: 'btn btn-default',
        uploadClass: 'btn bg-success-400',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            main1: "{preview}\n" +
                "<div class='input-group {class}'>\n" +
                "   <div class='input-group-btn'>\n" +
                "       {browse}\n" +
                "   </div>\n" +
                "   {caption}\n" +
                "   <div class='input-group-btn'>\n" +
                "       {upload}\n" +
                "       {remove}\n" +
                "   </div>\n" +
                "</div>",
            modal: modalTemplate
        },
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // Custom file extensions
    //

    $(".file-input-extensions").fileinput({
        browseLabel: 'Browse',
        browseClass: 'btn btn-primary',
        uploadClass: 'btn btn-default',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        maxFilesNum: 10,
        allowedFileExtensions: ["jpg", "gif", "png", "txt"],
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // Always display preview
    //

    $(".file-input-preview").fileinput({
        browseLabel: 'Browse',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialPreview: [
            "assets/images/placeholder.jpg",
            "assets/images/placeholder.jpg",
        ],
        initialPreviewConfig: [
            {caption: "Jane.jpg", size: 930321, key: 1, url: '{$url}', showDrag: false},
            {caption: "Anna.jpg", size: 1218822, key: 2, url: '{$url}', showDrag: false}
        ],
        initialPreviewAsData: true,
        overwriteInitial: false,
        maxFileSize: 100,
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // Display preview on load
    //

    $(".file-input-overwrite").fileinput({
        browseLabel: 'Browse',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialPreview: [
            "assets/images/placeholder.jpg",
            "assets/images/placeholder.jpg"
        ],
        initialPreviewConfig: [
            {caption: "Jane.jpg", size: 930321, key: 1, url: '{$url}'},
            {caption: "Anna.jpg", size: 1218822, key: 2, url: '{$url}'}
        ],
        initialPreviewAsData: true,
        overwriteInitial: true,
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });


    //
    // AJAX upload
    //

    $(".file-input-ajax").fileinput({
        uploadUrl: "http://localhost", // server upload action
        uploadAsync: true,
        maxFileCount: 5,
        initialPreview: [],
        fileActionSettings: {
            removeIcon: '<i class="icon-bin"></i>',
            removeClass: 'btn btn-link btn-xs btn-icon',
            uploadIcon: '<i class="icon-upload"></i>',
            uploadClass: 'btn btn-link btn-xs btn-icon',
            zoomIcon: '<i class="icon-zoomin3"></i>',
            zoomClass: 'btn btn-link btn-xs btn-icon',
            indicatorNew: '<i class="icon-file-plus text-slate"></i>',
            indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
            indicatorError: '<i class="icon-cross2 text-danger"></i>',
            indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',
        },
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons
    });


    //
    // Misc
    //

    // Disable/enable button
    $("#btn-modify").on("click", function() {
        $btn = $(this);
        if ($btn.text() == "Disable file input") {
            $("#file-input-methods").fileinput("disable");
            $btn.html("Enable file input");
            alert("Hurray! I have disabled the input and hidden the upload button.");
        }
        else {
            $("#file-input-methods").fileinput("enable");
            $btn.html("Disable file input");
            alert("Hurray! I have reverted back the input to enabled with the upload button.");
        }
    });

});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js":
/*!*****************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 *  Bootstrap Duallistbox - v3.0.6
 *  A responsive dual listbox widget optimized for Twitter Bootstrap. It works on all modern browsers and on touch devices.
 *  http://www.virtuosoft.eu/code/bootstrap-duallistbox/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function(a,b,c,d){function e(b,c){this.element=a(b),this.settings=a.extend({},w,c),this._defaults=w,this._name=v,this.init()}function f(a){a.element.trigger("change")}function g(b){b.element.find("option").each(function(c,d){var e=a(d);"undefined"==typeof e.data("original-index")&&e.data("original-index",b.elementCount++),"undefined"==typeof e.data("_selected")&&e.data("_selected",!1)})}function h(b,c,d){b.element.find("option").each(function(e,f){var g=a(f);g.data("original-index")===c&&(g.prop("selected",d),d?(g.attr("data-sortindex",b.sortIndex),b.sortIndex++):g.removeAttr("data-sortindex"))})}function i(a,b){return a.replace(/\{(\d+)\}/g,function(a,c){return"undefined"!=typeof b[c]?b[c]:a})}function j(a){if(a.settings.infoText){var b=a.elements.select1.find("option").length,c=a.elements.select2.find("option").length,d=a.element.find("option").length-a.selectedElements,e=a.selectedElements,f="";f=0===d?a.settings.infoTextEmpty:b===d?i(a.settings.infoText,[b,d]):i(a.settings.infoTextFiltered,[b,d]),a.elements.info1.html(f),a.elements.box1.toggleClass("filtered",!(b===d||0===d)),f=0===e?a.settings.infoTextEmpty:c===e?i(a.settings.infoText,[c,e]):i(a.settings.infoTextFiltered,[c,e]),a.elements.info2.html(f),a.elements.box2.toggleClass("filtered",!(c===e||0===e))}}function k(b){b.selectedElements=0,b.elements.select1.empty(),b.elements.select2.empty(),b.element.find("option").each(function(c,d){var e=a(d);e.prop("selected")?(b.selectedElements++,b.elements.select2.append(e.clone(!0).prop("selected",e.data("_selected")))):b.elements.select1.append(e.clone(!0).prop("selected",e.data("_selected")))}),b.settings.showFilterInputs&&(l(b,1),l(b,2)),j(b)}function l(b,c){if(b.settings.showFilterInputs){m(b,c),b.elements["select"+c].empty().scrollTop(0);var d=new RegExp(a.trim(b.elements["filterInput"+c].val()),"gi"),e=b.element.find("option"),f=b.element;f=1===c?e.not(":selected"):f.find("option:selected"),f.each(function(f,g){var h=a(g),i=!0;(g.text.match(d)||b.settings.filterOnValues&&h.attr("value").match(d))&&(i=!1,b.elements["select"+c].append(h.clone(!0).prop("selected",h.data("_selected")))),e.eq(h.data("original-index")).data("filtered"+c,i)}),j(b)}}function m(b,c){var d=b.element.find("option");b.elements["select"+c].find("option").each(function(b,c){var e=a(c);d.eq(e.data("original-index")).data("_selected",e.prop("selected"))})}function n(a){var b=a.children("option");b.sort(function(a,b){var c=parseInt(a.getAttribute("data-sortindex")),d=parseInt(b.getAttribute("data-sortindex"));return c>d?1:d>c?-1:0}),b.detach().appendTo(a)}function o(b){b.find("option").sort(function(b,c){return a(b).data("original-index")>a(c).data("original-index")?1:-1}).appendTo(b)}function p(a){a.elements.select1.find("option").each(function(){a.element.find("option").data("_selected",!1)})}function q(b){"all"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?"moved"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,1):(m(b,1),m(b,2)),b.elements.select1.find("option:selected").each(function(c,d){var e=a(d);e.data("filtered1")||h(b,e.data("original-index"),!0)}),k(b),f(b),b.settings.sortByInputOrder?n(b.elements.select2):o(b.elements.select2)}function r(b){"all"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?"moved"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,2):(m(b,1),m(b,2)),b.elements.select2.find("option:selected").each(function(c,d){var e=a(d);e.data("filtered2")||h(b,e.data("original-index"),!1)}),k(b),f(b),o(b.elements.select1),b.settings.sortByInputOrder&&n(b.elements.select2)}function s(b){"all"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?"moved"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,1):(m(b,1),m(b,2)),b.element.find("option").each(function(c,d){var e=a(d);e.data("filtered1")||(e.prop("selected",!0),e.attr("data-sortindex",b.sortIndex),b.sortIndex++)}),k(b),f(b)}function t(b){"all"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?"moved"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,2):(m(b,1),m(b,2)),b.element.find("option").each(function(b,c){var d=a(c);d.data("filtered2")||(d.prop("selected",!1),d.removeAttr("data-sortindex"))}),k(b),f(b)}function u(a){a.elements.form.submit(function(b){a.elements.filterInput1.is(":focus")?(b.preventDefault(),a.elements.filterInput1.focusout()):a.elements.filterInput2.is(":focus")&&(b.preventDefault(),a.elements.filterInput2.focusout())}),a.element.on("bootstrapDualListbox.refresh",function(b,c){a.refresh(c)}),a.elements.filterClear1.on("click",function(){a.setNonSelectedFilter("",!0)}),a.elements.filterClear2.on("click",function(){a.setSelectedFilter("",!0)}),a.settings.eventMoveOverride===!1&&a.elements.moveButton.on("click",function(){q(a)}),a.settings.eventMoveAllOverride===!1&&a.elements.moveAllButton.on("click",function(){s(a)}),a.settings.eventRemoveOverride===!1&&a.elements.removeButton.on("click",function(){r(a)}),a.settings.eventRemoveAllOverride===!1&&a.elements.removeAllButton.on("click",function(){t(a)}),a.elements.filterInput1.on("change keyup",function(){l(a,1)}),a.elements.filterInput2.on("change keyup",function(){l(a,2)})}var v="bootstrapDualListbox",w={bootstrap2Compatible:!1,filterTextClear:"show all",filterPlaceHolder:"Filter",moveSelectedLabel:"Move selected",moveAllLabel:"Move all",removeSelectedLabel:"Remove selected",removeAllLabel:"Remove all",moveOnSelect:!0,preserveSelectionOnMove:!1,selectedListLabel:!1,nonSelectedListLabel:!1,helperSelectNamePostfix:"_helper",selectorMinimalHeight:100,showFilterInputs:!0,nonSelectedFilter:"",selectedFilter:"",infoText:"Showing all {0}",infoTextFiltered:'<span class="label label-warning">Filtered</span> {0} from {1}',infoTextEmpty:"Empty list",filterOnValues:!1,sortByInputOrder:!1,eventMoveOverride:!1,eventMoveAllOverride:!1,eventRemoveOverride:!1,eventRemoveAllOverride:!1},x=/android/i.test(navigator.userAgent.toLowerCase());e.prototype={init:function(){this.container=a('<div class="bootstrap-duallistbox-container"> <div class="box1"> <label></label> <input class="filter" type="text"> <div class="btn-group buttons"> <button type="button" class="btn moveall"> <i></i> <i></i> </button> <button type="button" class="btn move"> <i></i> </button> </div> <select multiple="multiple"></select> <span class="info-container"> <span class="info"></span> <button type="button" class="btn clear1 pull-right"></button> </span> </div> <div class="box2"> <label></label> <input class="filter" type="text"> <div class="btn-group buttons"> <button type="button" class="btn remove"> <i></i> </button> <button type="button" class="btn removeall"> <i></i> <i></i> </button> </div> <select multiple="multiple"></select> <span class="info-container"> <span class="info"></span> <button type="button" class="btn clear2 pull-right"></button> </span> </div></div>').insertBefore(this.element),this.elements={originalSelect:this.element,box1:a(".box1",this.container),box2:a(".box2",this.container),filterInput1:a(".box1 .filter",this.container),filterInput2:a(".box2 .filter",this.container),filterClear1:a(".box1 .clear1",this.container),filterClear2:a(".box2 .clear2",this.container),label1:a(".box1 > label",this.container),label2:a(".box2 > label",this.container),info1:a(".box1 .info",this.container),info2:a(".box2 .info",this.container),select1:a(".box1 select",this.container),select2:a(".box2 select",this.container),moveButton:a(".box1 .move",this.container),removeButton:a(".box2 .remove",this.container),moveAllButton:a(".box1 .moveall",this.container),removeAllButton:a(".box2 .removeall",this.container),form:a(a(".box1 .filter",this.container)[0].form)},this.originalSelectName=this.element.attr("name")||"";var b="bootstrap-duallistbox-nonselected-list_"+this.originalSelectName,c="bootstrap-duallistbox-selected-list_"+this.originalSelectName;return this.elements.select1.attr("id",b),this.elements.select2.attr("id",c),this.elements.label1.attr("for",b),this.elements.label2.attr("for",c),this.selectedElements=0,this.sortIndex=0,this.elementCount=0,this.setBootstrap2Compatible(this.settings.bootstrap2Compatible),this.setFilterTextClear(this.settings.filterTextClear),this.setFilterPlaceHolder(this.settings.filterPlaceHolder),this.setMoveSelectedLabel(this.settings.moveSelectedLabel),this.setMoveAllLabel(this.settings.moveAllLabel),this.setRemoveSelectedLabel(this.settings.removeSelectedLabel),this.setRemoveAllLabel(this.settings.removeAllLabel),this.setMoveOnSelect(this.settings.moveOnSelect),this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove),this.setSelectedListLabel(this.settings.selectedListLabel),this.setNonSelectedListLabel(this.settings.nonSelectedListLabel),this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix),this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight),g(this),this.setShowFilterInputs(this.settings.showFilterInputs),this.setNonSelectedFilter(this.settings.nonSelectedFilter),this.setSelectedFilter(this.settings.selectedFilter),this.setInfoText(this.settings.infoText),this.setInfoTextFiltered(this.settings.infoTextFiltered),this.setInfoTextEmpty(this.settings.infoTextEmpty),this.setFilterOnValues(this.settings.filterOnValues),this.setSortByInputOrder(this.settings.sortByInputOrder),this.setEventMoveOverride(this.settings.eventMoveOverride),this.setEventMoveAllOverride(this.settings.eventMoveAllOverride),this.setEventRemoveOverride(this.settings.eventRemoveOverride),this.setEventRemoveAllOverride(this.settings.eventRemoveAllOverride),this.element.hide(),u(this),k(this),this.element},setBootstrap2Compatible:function(a,b){return this.settings.bootstrap2Compatible=a,a?(this.container.removeClass("row").addClass("row-fluid bs2compatible"),this.container.find(".box1, .box2").removeClass("col-md-6").addClass("span6"),this.container.find(".clear1, .clear2").removeClass("btn-default btn-xs").addClass("btn-mini"),this.container.find("input, select").removeClass("form-control"),this.container.find(".btn").removeClass("btn-default"),this.container.find(".moveall > i, .move > i").removeClass("icon-arrow-right22").addClass("icon-arrow-right"),this.container.find(".removeall > i, .remove > i").removeClass("icon-arrow-left22").addClass("icon-arrow-left")):(this.container.removeClass("row-fluid bs2compatible").addClass("row"),this.container.find(".box1, .box2").removeClass("span6").addClass("col-md-6"),this.container.find(".clear1, .clear2").removeClass("btn-mini").addClass("btn-default btn-xs"),this.container.find("input, select").addClass("form-control"),this.container.find(".btn").addClass("btn-default"),this.container.find(".moveall > i, .move > i").removeClass("icon-arrow-right").addClass("icon-arrow-right22"),this.container.find(".removeall > i, .remove > i").removeClass("icon-arrow-left").addClass("icon-arrow-left22")),b&&k(this),this.element},setFilterTextClear:function(a,b){return this.settings.filterTextClear=a,this.elements.filterClear1.html(a),this.elements.filterClear2.html(a),b&&k(this),this.element},setFilterPlaceHolder:function(a,b){return this.settings.filterPlaceHolder=a,this.elements.filterInput1.attr("placeholder",a),this.elements.filterInput2.attr("placeholder",a),b&&k(this),this.element},setMoveSelectedLabel:function(a,b){return this.settings.moveSelectedLabel=a,this.elements.moveButton.attr("title",a),b&&k(this),this.element},setMoveAllLabel:function(a,b){return this.settings.moveAllLabel=a,this.elements.moveAllButton.attr("title",a),b&&k(this),this.element},setRemoveSelectedLabel:function(a,b){return this.settings.removeSelectedLabel=a,this.elements.removeButton.attr("title",a),b&&k(this),this.element},setRemoveAllLabel:function(a,b){return this.settings.removeAllLabel=a,this.elements.removeAllButton.attr("title",a),b&&k(this),this.element},setMoveOnSelect:function(a,b){if(x&&(a=!0),this.settings.moveOnSelect=a,this.settings.moveOnSelect){this.container.addClass("moveonselect");var c=this;this.elements.select1.on("change",function(){q(c)}),this.elements.select2.on("change",function(){r(c)})}else this.container.removeClass("moveonselect"),this.elements.select1.off("change"),this.elements.select2.off("change");return b&&k(this),this.element},setPreserveSelectionOnMove:function(a,b){return x&&(a=!1),this.settings.preserveSelectionOnMove=a,b&&k(this),this.element},setSelectedListLabel:function(a,b){return this.settings.selectedListLabel=a,a?this.elements.label2.show().html(a):this.elements.label2.hide().html(a),b&&k(this),this.element},setNonSelectedListLabel:function(a,b){return this.settings.nonSelectedListLabel=a,a?this.elements.label1.show().html(a):this.elements.label1.hide().html(a),b&&k(this),this.element},setHelperSelectNamePostfix:function(a,b){return this.settings.helperSelectNamePostfix=a,a?(this.elements.select1.attr("name",this.originalSelectName+a+"1"),this.elements.select2.attr("name",this.originalSelectName+a+"2")):(this.elements.select1.removeAttr("name"),this.elements.select2.removeAttr("name")),b&&k(this),this.element},setSelectOrMinimalHeight:function(a,b){this.settings.selectorMinimalHeight=a;var c=this.element.height();return this.element.height()<a&&(c=a),this.elements.select1.height(c),this.elements.select2.height(c),b&&k(this),this.element},setShowFilterInputs:function(a,b){return a?(this.elements.filterInput1.show(),this.elements.filterInput2.show()):(this.setNonSelectedFilter(""),this.setSelectedFilter(""),k(this),this.elements.filterInput1.hide(),this.elements.filterInput2.hide()),this.settings.showFilterInputs=a,b&&k(this),this.element},setNonSelectedFilter:function(a,b){return this.settings.showFilterInputs?(this.settings.nonSelectedFilter=a,this.elements.filterInput1.val(a),b&&k(this),this.element):void 0},setSelectedFilter:function(a,b){return this.settings.showFilterInputs?(this.settings.selectedFilter=a,this.elements.filterInput2.val(a),b&&k(this),this.element):void 0},setInfoText:function(a,b){return this.settings.infoText=a,b&&k(this),this.element},setInfoTextFiltered:function(a,b){return this.settings.infoTextFiltered=a,b&&k(this),this.element},setInfoTextEmpty:function(a,b){return this.settings.infoTextEmpty=a,b&&k(this),this.element},setFilterOnValues:function(a,b){return this.settings.filterOnValues=a,b&&k(this),this.element},setSortByInputOrder:function(a,b){return this.settings.sortByInputOrder=a,b&&k(this),this.element},setEventMoveOverride:function(a,b){return this.settings.eventMoveOverride=a,b&&k(this),this.element},setEventMoveAllOverride:function(a,b){return this.settings.eventMoveAllOverride=a,b&&k(this),this.element},setEventRemoveOverride:function(a,b){return this.settings.eventRemoveOverride=a,b&&k(this),this.element},setEventRemoveAllOverride:function(a,b){return this.settings.eventRemoveAllOverride=a,b&&k(this),this.element},getContainer:function(){return this.container},refresh:function(a){g(this),a?p(this):(m(this,1),m(this,2)),k(this)},destroy:function(){return this.container.remove(),this.element.show(),a.data(this,"plugin_"+v,null),this.element}},a.fn[v]=function(b){var c=arguments;if(b===d||"object"==typeof b)return this.each(function(){a(this).is("select")?a.data(this,"plugin_"+v)||a.data(this,"plugin_"+v,new e(this,b)):a(this).find("select").each(function(c,d){a(d).bootstrapDualListbox(b)})});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var f;return this.each(function(){var d=a.data(this,"plugin_"+v);d instanceof e&&"function"==typeof d[b]&&(f=d[b].apply(d,Array.prototype.slice.call(c,1)))}),f!==d?f:this}}}(jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js":
/*!************************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function ($) {
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

            init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect(config);

                if (allBindings.has('options')) {
                    var options = allBindings.get('options');
                    if (ko.isObservable(options)) {
                        ko.computed({
                            read: function() {
                                options();
                                setTimeout(function() {
                                    var ms = $element.data('multiselect');
                                    if (ms)
                                        ms.updateOriginalOptions();//Not sure how beneficial this is.
                                    $element.multiselect('rebuild');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
                }

                //value and selectedOptions are two-way, so these will be triggered even by our own actions.
                //It needs some way to tell if they are triggered because of us or because of outside change.
                //It doesn't loop but it's a waste of processing.
                if (allBindings.has('value')) {
                    var value = allBindings.get('value');
                    if (ko.isObservable(value)) {
                        ko.computed({
                            read: function() {
                                value();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                //Switched from arrayChange subscription to general subscription using 'refresh'.
                //Not sure performance is any better using 'select' and 'deselect'.
                if (allBindings.has('selectedOptions')) {
                    var selectedOptions = allBindings.get('selectedOptions');
                    if (ko.isObservable(selectedOptions)) {
                        ko.computed({
                            read: function() {
                                selectedOptions();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                var setEnabled = function (enable) {
                    setTimeout(function () {
                        if (enable)
                            $element.multiselect('enable');
                        else
                            $element.multiselect('disable');
                    });
                };

                if (allBindings.has('enable')) {
                    var enable = allBindings.get('enable');
                    if (ko.isObservable(enable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(enable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(enable);
                    }
                }

                if (allBindings.has('disable')) {
                    var disable = allBindings.get('disable');
                    if (ko.isObservable(disable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(!disable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(!disable);
                    }
                }

                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    $element.multiselect('destroy');
                });
            },

            update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect('setOptions', config);
                $element.multiselect('rebuild');
            }
        };
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index], index);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        
        // Placeholder via data attributes
        if (this.$select.attr("data-placeholder")) {
            options.nonSelectedText = this.$select.data("placeholder");
        }
        
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;
        this.lastToggledInput = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        this.options.onInitialized = $.proxy(this.options.onInitialized, this);
        
        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll(true);

        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
        }
        
        this.$select.hide().after(this.$container);
        this.options.onInitialized(this.$select, this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (this.disabledText.length > 0 
                        && (this.disableIfEmpty || select.prop('disabled')) 
                        && options.length == 0) {
                    
                    return this.disabledText;
                }
                else if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else if (this.allSelectedText 
                        && options.length === $('option', $(select)).length 
                        && $('option', $(select)).length !== 1 
                        && this.multiple) {

                    if (this.selectAllNumber) {
                        return this.allSelectedText + ' (' + options.length + ')';
                    }
                    else {
                        return this.allSelectedText;
                    }
                }
                else if (options.length > this.numberDisplayed) {
                    return options.length + ' ' + this.nSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;
                    
                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;
                    
                    options.each(function () {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionLabel: function(element){
                return $(element).attr('label') || $(element).text();
            },
            /**
             * Create a class.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionClass: function(element) {
                return $(element).attr('class') || '';
            },
            /**
             * Triggered on change of the multiselect.
             * 
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {

            },
            /**
             * Triggered after the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {
                
            },
            /**
             * Triggered after the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {
                
            },
            /**
             * Triggered on select all.
             */
            onSelectAll: function(checked) {
                
            },
            /**
             * Triggered after initializing.
             *
             * @param {jQuery} $select
             * @param {jQuery} $container
             */
            onInitialized: function($select, $container) {

            },
            enableHTML: false,
            buttonClass: 'btn btn-default',
            inheritClass: false,
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            dropRight: false,
            dropUp: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            selectAllNumber: true,
            selectAllJustVisible: true,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableFullValueFiltering: false,
            enableClickableOptGroups: false,
            enableCollapsibelOptGroups: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            disabledText: '',
            delimiterText: ', ',
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
                li: '<li><a tabindex="0"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
            if (this.$select.attr('class') && this.options.inheritClass) {
                this.$button.addClass(this.$select.attr('class'));
            }
            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth,
                    'overflow' : 'hidden',
                    'text-overflow' : 'ellipsis'
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }
            
            if (this.options.dropUp) {
                
                var height = Math.min(this.options.maxHeight, $('option[data-role!="divider"]', this.$select).length*26 + $('option[data-role="divider"]', this.$select).length*19 + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0));
                var moveCalc = height + 34;
                
                this.$ul.css({
                    'max-height': height + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    'margin-top': "-" + moveCalc + 'px'
                });
            }
            
            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * 
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();
            
                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll(this.options.selectAllJustVisible);
                    }
                    else {
                        this.deselectAll(this.options.selectAllJustVisible);
                    }
                }
                else {
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }
                    
                    // To prevent select all from firing onChange: #575
                    this.options.onChange($option, checked);
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('mousedown', function(e) {
                if (e.shiftKey) {
                    // Prevent selecting text by Shift+click
                    return false;
                }
            });
        
            $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
                event.stopPropagation();

                var $target = $(event.target);
                
                if (event.shiftKey && this.options.multiple) {
                    if($target.is("label")){ // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
                        event.preventDefault();
                        $target = $target.find("input");
                        $target.prop("checked", !$target.prop("checked"));
                    }
                    var checked = $target.prop('checked') || false;

                    if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
                        var from = $target.closest("li").index();
                        var to = this.lastToggledInput.closest("li").index();
                        
                        if (from > to) { // Swap the indices
                            var tmp = to;
                            to = from;
                            from = tmp;
                        }
                        
                        // Make sure we grab all elements since slice excludes the last index
                        ++to;
                        
                        // Change the checkboxes and underlying options
                        var range = this.$ul.find("li").slice(from, to).find("input");
                        
                        range.prop('checked', checked);
                        
                        if (this.options.selectedClass) {
                            range.closest('li')
                                .toggleClass(this.options.selectedClass, checked);
                        }
                        
                        for (var i = 0, j = range.length; i < j; i++) {
                            var $checkbox = $(range[i]);

                            var $option = this.getOptionByValue($checkbox.val());

                            $option.prop('selected', checked);
                        }                   
                    }
                    
                    // Trigger the select "change" event
                    $target.trigger("change");
                }
                
                // Remembers last clicked option
                if($target.is("input") && !$target.closest("li").is(".multiselect-item")){
                    this.lastToggledInput = $target;
                }

                $target.blur();
            }, this));

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));

            if(this.options.enableClickableOptGroups && this.options.multiple) {
                $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
                    event.stopPropagation();
                    console.log('test');
                    var group = $(event.target).parent();

                    // Search all option in optgroup
                    var $options = group.nextUntil('li.multiselect-group');
                    var $visibleOptions = $options.filter(":visible:not(.disabled)");

                    // check or uncheck items
                    var allChecked = true;
                    var optionInputs = $visibleOptions.find('input');
                    var values = [];
                    
                    optionInputs.each(function() {
                        allChecked = allChecked && $(this).prop('checked');
                        values.push($(this).val());
                    });

                    if (!allChecked) {
                        this.select(values, false);
                    }
                    else {
                        this.deselect(values, false);
                    }
                    
                    this.options.onChange(optionInputs, !allChecked);
               }, this));
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $("li.multiselect-group input", this.$ul).off();
                $("li.multiselect-group", this.$ul).siblings().not("li.multiselect-group, li.multiselect-all", this.$ul).each( function () {
                    $(this).toggleClass('hidden', true);
                });
                
                $("li.multiselect-group", this.$ul).on("click", $.proxy(function(group) {
                    group.stopPropagation();
                }, this));
                
                $("li.multiselect-group > a > b", this.$ul).on("click", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group");
                    var i = true;
                    
                    r.each(function() {
                        i = i && $(this).hasClass('hidden');
                    });
                    
                    r.toggleClass('hidden', !i);
                }, this));
                
                $("li.multiselect-group > a > input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");
                    
                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    s.prop("checked", !i).trigger("change");
                }, this));
                
                // Set the initial selection state of the groups.
                $('li.multiselect-group', this.$ul).each(function() {
                    var r = $(this).nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");
                    
                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    $(this).find('input').prop("checked", i);
                });
                
                // Update the group checkbox based on new selections among the
                // corresponding children.
                $("li input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r1 = n.prevUntil("li.multiselect-group", ':not(.disabled)');
                    var r2 = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s1 = r1.find("input");
                    var s2 = r2.find("input");
                    
                    var i = $(t.target).prop('checked');
                    s1.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    s2.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    n.prevAll('.multiselect-group').find('input').prop('checked', i);
                }, this));
                
                $("li.multiselect-all", this.$ul).css('background', '#f3f3f3').css('border-bottom', '1px solid #eaeaea');
                $("li.multiselect-group > a, li.multiselect-all > a > label.checkbox", this.$ul).css('padding', '3px 20px 3px 35px');
                $("li.multiselect-group > a > input", this.$ul).css('margin', '4px 0px 5px -20px');
            }
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.optionLabel(element);
            var classes = this.options.optionClass(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType);
            $li.addClass(classes);

            if (this.options.enableHTML) {
                $label.html(" " + label);
            }
            else {
                $label.text(" " + label);
            }
        
            var $checkbox = $('<input/>').attr('type', inputType);

            if (this.options.checkboxName) {
                $checkbox.attr('name', this.options.checkboxName);
            }
            $label.prepend($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function(group) {            
            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                var label = $(group).attr("label");
                var value = $(group).attr("value");
                var r = $('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' + value + '"/><b> ' + label + '<b class="caret"></b></b></a></li>');

                if (this.options.enableClickableOptGroups) {
                    r.addClass("multiselect-group-clickable")
                }
                this.$ul.append(r);
                if ($(group).is(":disabled")) {
                    r.addClass("disabled")
                }
                $("option", group).each($.proxy(function($, group) {
                    this.createOptionValue(group)
                }, this))
            }
            else {
                var groupName = $(group).prop('label');

                // Add a header for the group.
                var $li = $(this.options.templates.liGroup);

                if (this.options.enableHTML) {
                    $('label', $li).html(groupName);
                }
                else {
                    $('label', $li).text(groupName);
                }

                if (this.options.enableClickableOptGroups) {
                    $li.addClass('multiselect-group-clickable');
                }

                this.$ul.append($li);

                if ($(group).is(':disabled')) {
                    $li.addClass('disabled');
                }

                // Add the options of the group.
                $('option', group).each($.proxy(function(index, element) {
                    this.createOptionValue(element);
                }, this));
            }
        },

        /**
         * Build the select all.
         * 
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
            }
            
            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");
                
                if (this.options.enableHTML) {
                    $('label', $li).html(" " + this.options.selectAllText);
                }
                else {
                    $('label', $li).text(" " + this.options.selectAllText);
                }
                
                if (this.options.selectAllName) {
                    $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
                }
                else {
                    $('label', $li).prepend('<input type="checkbox" />');
                }
                
                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    
                    // Adds optional filter clear button
                    if(this.options.includeFilterClearBtn){
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event){
                            clearTimeout(this.searchTimeout);
                            this.$filter.find('.multiselect-search').val('');
                            $('li', this.$ul).show().removeClass("filter-hidden");
                            this.updateSelectAll();
                        }, this));
                        this.$filter.find('.input-group').append(clearBtn);
                    }
                    
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                          event.preventDefault();
                        }
                        
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).length > 0 ? $('input', element).val() : "";
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {

                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering) {
                                            filterCandidate = filterCandidate.toLowerCase();
                                            this.query = this.query.toLowerCase();
                                        }

                                        if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                                            var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                                            if (this.query.indexOf(valueToMatch) > -1) {
                                                showElement = true;
                                            }
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);
                                        
                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                        }
                                        else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show().removeClass('filter-hidden');
                                            }
                                            
                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show().removeClass('filter-hidden');
                                            }
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function () {
            var inputs = $.map($('li input', this.$ul), $);
            
            $('option', this.$select).each($.proxy(function (index, element) {
                var $elem = $(element);
                var value = $elem.val();
                var $input;
                for (var i = inputs.length; 0 < i--; /**/) {
                    if (value !== ($input = inputs[i]).val())
                        continue; // wrong li

                    if ($elem.is(':selected')) {
                        $input.prop('checked', true);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .addClass(this.options.selectedClass);
                        }
                    }
                    else {
                        $input.prop('checked', false);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .removeClass(this.options.selectedClass);
                        }
                    }

                    if ($elem.is(":disabled")) {
                        $input.attr('disabled', 'disabled')
                            .prop('disabled', true)
                            .closest('li')
                            .addClass('disabled');
                    }
                    else {
                        $input.prop('disabled', false)
                            .closest('li')
                            .removeClass('disabled');
                    }
                    break; // assumes unique values
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         * 
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }
                
                if (!this.options.multiple) {
                    this.deselectAll(false);
                }
                
                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
                
                if (triggerOnChange) {
                    this.options.onChange($option, true);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         * 
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
                
                if (triggerOnChange) {
                    this.options.onChange($option, false);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },
        
        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         * @param {Boolean} triggerOnSelectAll
         */
        selectAll: function (justVisible, triggerOnSelectAll) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
            
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;
            
            if(justVisible) {
                visibleCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            }
            else {
                allCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
            }
                
            if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
                $("option:not([data-role='divider']):enabled", this.$select).prop('selected', true);
            }
            else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', true);
            }
            
            if (triggerOnSelectAll) {
                this.options.onSelectAll();
            }
        },

        /**
         * Deselects all options.
         * 
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
            justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            
            if(justVisible) {              
                var visibleCheckboxes = $("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);
                
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                }
            }
            else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Rebuild the plugin.
         * 
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();

            this.updateButtonText();
            this.updateSelectAll(true);
            
            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
            }
            else {
                this.enable();
            }
            
            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {
            
            var groupCounter = 0;
            var $select = this.$select.empty();
            
            $.each(dataprovider, function (index, option) {
                var $tag;
                
                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;
                    
                    $tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter,
                        disabled: !!option.disabled
                    });
                    
                    forEach(option.children, function(subOption) { // add children option tags
                        $tag.append($('<option/>').attr({
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected,
                            disabled: !!subOption.disabled
                        }));
                    });
                }
                else {
                    $tag = $('<option/>').attr({
                        value: option.value,
                        label: option.label || option.value,
                        title: option.title,
                        class: option.class,
                        selected: !!option.selected,
                        disabled: !!option.disabled
                    });
                    $tag.text(option.label || option.value);
                }
                
                $select.append($tag);
            });
            
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, this.options, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.multiselect-all', this.$ul).length > 0;
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function(notTriggerOnSelectAll) {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li.multiselect-all", this.$ul);
                var selectAllInput = selectAllLi.find("input");
                
                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                    this.options.onSelectAll(true);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                    if (checkedBoxesLength === 0) {
                        if (!notTriggerOnSelectAll) {
                            this.options.onSelectAll(false);
                        }
                    }
                }
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();
            
            // First update the displayed button text.
            if (this.options.enableHTML) {
                $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
            }
            else {
                $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
            }
            
            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        },

        setAllSelectedText: function(allSelectedText) {
            this.options.allSelectedText = allSelectedText;
            this.updateButtonText();
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);
                
                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(__webpack_provided_window_dot_jQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js":
/*!**************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function i(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function r(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var i,r,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=t("<div />"),r=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),n.wrapperClass&&i.addClass(n.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(i,"id",n.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=c(e,i,a.divWrap),r=c(e,r,a.spanWrap),o(i,e,n),{div:i,span:r}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,i;return i="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+i+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==i}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest}function C(e){var t;return!!e[0].multiple||(t=s(e,"size"),!(!t||t<=1))}function b(){return!1}function y(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":b}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function g(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function k(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),g(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function x(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,A=!1,W=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,i(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,i,r;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(i=s(t,"target"),r=s(t,"href"),i&&"_self"!==i?e.open(r,i):document.location.href=r)):t.click(),p=!1)}}),y(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){r(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,i(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:x(e,t),update:function(){r(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){w(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),i(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),y(p,n),y(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){r(f,n),w(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),i(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:b}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,i(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:x(e,n),update:function(){r(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return!(!e.is("select")||C(e))},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&k(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?k(e,function(){g(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),i(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),y(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(r(l,n),e[0].selectedIndex=e[0].selectedIndex,u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return!(!e.is("select")||!C(e))},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),i(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:b}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),i(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:b}}}];v()&&!h()&&(H=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),A||(A=!0,p()&&(H=!1)),H?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,i=t(this);if(i.data("uniformed"))return void t.uniform.update(i);for(e=0;e<W.length;e+=1)if(s=W[e],s.match(i,n))return a=s.apply(i,n),i.data("uniformed",a),void t.uniform.elements.push(i.get(0))})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js":
/*!********************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]} true&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e(jQuery)}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js":
/*!*****************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return j}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}).call(this);

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js":
/*!************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery Fancytree Plugin - 2.22.1 - 2017-04-21T05:55:46Z
  * https://github.com/mar10/fancytree
  * Copyright (c) 2017 Martin Wendt; Licensed MIT */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function( $ ) {

!function(a,b,c,d){"use strict";function e(b,c){b||(c=c?": "+c:"",a.error("Fancytree assertion failed"+c))}function f(a,c){var d,e,f=b.console?b.console[a]:null;if(f)try{f.apply(b.console,c)}catch(g){for(e="",d=0;d<c.length;d++)e+=c[d];f(e)}}function g(a){return!(!a.tree||a.statusNodeType===d)}function h(b,c,d,e){var f,g,h,i=a.map(a.trim(b).split("."),function(a){return parseInt(a,10)}),j=a.map(Array.prototype.slice.call(arguments,1),function(a){return parseInt(a,10)});for(f=0;f<j.length;f++)if(g=i[f]||0,h=j[f]||0,g!==h)return g>h;return!0}function i(a,b,c,d,e){var f=function(){var c=b[a],f=d[a],g=b.ext[e],h=function(){return c.apply(b,arguments)},i=function(a){return c.apply(b,a)};return function(){var a=b._local,c=b._super,d=b._superApply;try{return b._local=g,b._super=h,b._superApply=i,f.apply(b,arguments)}finally{b._local=a,b._super=c,b._superApply=d}}}();return f}function j(b,c,d,e){for(var f in d)"function"==typeof d[f]?"function"==typeof b[f]?b[f]=i(f,b,c,d,e):"_"===f.charAt(0)?b.ext[e][f]=i(f,b,c,d,e):a.error("Could not override tree."+f+". Use prefix '_' to create tree."+e+"._"+f):"options"!==f&&(b.ext[e][f]=d[f])}function k(b,c){return b===d?a.Deferred(function(){this.resolve()}).promise():a.Deferred(function(){this.resolveWith(b,c)}).promise()}function l(b,c){return b===d?a.Deferred(function(){this.reject()}).promise():a.Deferred(function(){this.rejectWith(b,c)}).promise()}function m(a,b){return function(){a.resolveWith(b)}}function n(b){var c=a.extend({},b.data()),d=c.json;return delete c.fancytree,delete c.uiFancytree,d&&(delete c.json,c=a.extend(c,d)),c}function o(a){return(""+a).replace(y,function(a){return B[a]})}function p(a){return(""+a).replace(z,function(a){return B[a]})}function q(a){return a=a.toLowerCase(),function(b){return b.title.toLowerCase().indexOf(a)>=0}}function r(a){var b=new RegExp("^"+a,"i");return function(a){return b.test(a.title)}}function s(b,c){var d,f,g,h;for(this.parent=b,this.tree=b.tree,this.ul=null,this.li=null,this.statusNodeType=null,this._isLoading=!1,this._error=null,this.data={},d=0,f=H.length;d<f;d++)g=H[d],this[g]=c[g];c.data&&a.extend(this.data,c.data);for(g in c)I[g]||a.isFunction(c[g])||K[g]||(this.data[g]=c[g]);null==this.key?this.tree.options.defaultKey?(this.key=this.tree.options.defaultKey(this),e(this.key,"defaultKey() must return a unique key")):this.key="_"+w._nextNodeKey++:this.key=""+this.key,c.active&&(e(null===this.tree.activeNode,"only one active node allowed"),this.tree.activeNode=this),c.selected&&(this.tree.lastSelectedNode=this),h=c.children,h?h.length?this._setChildren(h):this.children=this.lazy?[]:null:this.children=null,this.tree._callHook("treeRegisterNode",this.tree,!0,this)}function t(b){this.widget=b,this.$div=b.element,this.options=b.options,this.options&&(a.isFunction(this.options.lazyload)&&!a.isFunction(this.options.lazyLoad)&&(this.options.lazyLoad=function(){return w.warn("The 'lazyload' event is deprecated since 2014-02-25. Use 'lazyLoad' (with uppercase L) instead."),b.options.lazyload.apply(this,arguments)}),a.isFunction(this.options.loaderror)&&a.error("The 'loaderror' event was renamed since 2014-07-03. Use 'loadError' (with uppercase E) instead."),this.options.fx!==d&&w.warn("The 'fx' option was replaced by 'toggleEffect' since 2014-11-30."),this.options.removeNode!==d&&a.error("The 'removeNode' event was replaced by 'modifyChild' since 2.20 (2016-09-10).")),this.ext={},this.data=n(this.$div),this._id=a.ui.fancytree._nextId++,this._ns=".fancytree-"+this._id,this.activeNode=null,this.focusNode=null,this._hasFocus=null,this._enableUpdate=!0,this.lastSelectedNode=null,this.systemFocusElement=null,this.lastQuicksearchTerm="",this.lastQuicksearchTime=0,this.statusClassPropName="span",this.ariaPropName="li",this.nodeContainerAttrName="li",this.$div.find(">ul.fancytree-container").remove();var c,e={tree:this};this.rootNode=new s(e,{title:"root",key:"root_"+this._id,children:null,expanded:!0}),this.rootNode.parent=null,c=a("<ul>",{"class":"ui-fancytree fancytree-container fancytree-plain"}).appendTo(this.$div),this.$container=c,this.rootNode.ul=c[0],null==this.options.debugLevel&&(this.options.debugLevel=w.debugLevel),this.$container.attr("tabindex",this.options.tabindex),this.options.rtl&&this.$container.attr("DIR","RTL").addClass("fancytree-rtl"),this.options.aria&&(this.$container.attr("role","tree"),1!==this.options.selectMode&&this.$container.attr("aria-multiselectable",!0))}if(a.ui&&a.ui.fancytree)return void a.ui.fancytree.warn("Fancytree: ignored duplicate include");var u,v,w=null,x=new RegExp(/\.|\//),y=/[&<>"'\/]/g,z=/[<>"'\/]/g,A="$recursive_request",B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},C={16:!0,17:!0,18:!0},D={8:"backspace",9:"tab",10:"return",13:"return",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},E={0:"",1:"left",2:"middle",3:"right"},F="active expanded focus folder hideCheckbox lazy selected unselectable".split(" "),G={},H="expanded extraClasses folder hideCheckbox icon key lazy refKey selected statusNodeType title tooltip unselectable".split(" "),I={},J={},K={active:!0,children:!0,data:!0,focus:!0};for(u=0;u<F.length;u++)G[F[u]]=!0;for(u=0;u<H.length;u++)v=H[u],I[v]=!0,v!==v.toLowerCase()&&(J[v.toLowerCase()]=v);e(a.ui,"Fancytree requires jQuery UI (http://jqueryui.com)"),s.prototype={_findDirectChild:function(a){var b,c,d=this.children;if(d)if("string"==typeof a){for(b=0,c=d.length;b<c;b++)if(d[b].key===a)return d[b]}else{if("number"==typeof a)return this.children[a];if(a.parent===this)return a}return null},_setChildren:function(a){e(a&&(!this.children||0===this.children.length),"only init supported"),this.children=[];for(var b=0,c=a.length;b<c;b++)this.children.push(new s(this,a[b]))},addChildren:function(b,c){var d,f,g,h=this.getFirstChild(),i=this.getLastChild(),j=null,k=[];for(a.isPlainObject(b)&&(b=[b]),this.children||(this.children=[]),d=0,f=b.length;d<f;d++)k.push(new s(this,b[d]));if(j=k[0],null==c?this.children=this.children.concat(k):(c=this._findDirectChild(c),g=a.inArray(c,this.children),e(g>=0,"insertBefore must be an existing child"),this.children.splice.apply(this.children,[g,0].concat(k))),h){for(d=0,f=k.length;d<f;d++)k[d].render();h!==this.getFirstChild()&&h.renderStatus(),i!==this.getLastChild()&&i.renderStatus()}else(!this.parent||this.parent.ul||this.tr)&&this.render();return 3===this.tree.options.selectMode&&this.fixSelection3FromEndNodes(),this.triggerModifyChild("add",1===k.length?k[0]:null),j},addClass:function(a){return this.toggleClass(a,!0)},addNode:function(a,b){switch(b!==d&&"over"!==b||(b="child"),b){case"after":return this.getParent().addChildren(a,this.getNextSibling());case"before":return this.getParent().addChildren(a,this);case"firstChild":var c=this.children?this.children[0]:null;return this.addChildren(a,c);case"child":case"over":return this.addChildren(a)}e(!1,"Invalid mode: "+b)},addPagingNode:function(b,c){var d,e;if(c=c||"child",b===!1){for(d=this.children.length-1;d>=0;d--)e=this.children[d],"paging"===e.statusNodeType&&this.removeChild(e);return void(this.partload=!1)}return b=a.extend({title:this.tree.options.strings.moreData,statusNodeType:"paging",icon:!1},b),this.partload=!0,this.addNode(b,c)},appendSibling:function(a){return this.addNode(a,"after")},applyPatch:function(b){if(null===b)return this.remove(),k(this);var c,d,e,f={children:!0,expanded:!0,parent:!0};for(c in b)e=b[c],f[c]||a.isFunction(e)||(I[c]?this[c]=e:this.data[c]=e);return b.hasOwnProperty("children")&&(this.removeChildren(),b.children&&this._setChildren(b.children)),this.isVisible()&&(this.renderTitle(),this.renderStatus()),d=b.hasOwnProperty("expanded")?this.setExpanded(b.expanded):k(this)},collapseSiblings:function(){return this.tree._callHook("nodeCollapseSiblings",this)},copyTo:function(a,b,c){return a.addNode(this.toDict(!0,c),b)},countChildren:function(a){var b,c,d,e=this.children;if(!e)return 0;if(d=e.length,a!==!1)for(b=0,c=d;b<c;b++)d+=e[b].countChildren();return d},debug:function(a){this.tree.options.debugLevel>=2&&(Array.prototype.unshift.call(arguments,this.toString()),f("log",arguments))},discard:function(){return this.warn("FancytreeNode.discard() is deprecated since 2014-02-16. Use .resetLazy() instead."),this.resetLazy()},discardMarkup:function(a){var b=a?"nodeRemoveMarkup":"nodeRemoveChildMarkup";this.tree._callHook(b,this)},findAll:function(b){b=a.isFunction(b)?b:q(b);var c=[];return this.visit(function(a){b(a)&&c.push(a)}),c},findFirst:function(b){b=a.isFunction(b)?b:q(b);var c=null;return this.visit(function(a){if(b(a))return c=a,!1}),c},_changeSelectStatusAttrs:function(a){var b=!1;switch(a){case!1:b=this.selected||this.partsel,this.selected=!1,this.partsel=!1;break;case!0:b=!this.selected||!this.partsel,this.selected=!0,this.partsel=!0;break;case d:b=this.selected||!this.partsel,this.selected=!1,this.partsel=!0;break;default:e(!1,"invalid state: "+a)}return b&&this.renderStatus(),b},fixSelection3AfterClick:function(){var a=this.isSelected();this.visit(function(b){b._changeSelectStatusAttrs(a)}),this.fixSelection3FromEndNodes()},fixSelection3FromEndNodes:function(){function a(b){var c,e,f,g,h,i,j,k=b.children;if(k&&k.length){for(i=!0,j=!1,c=0,e=k.length;c<e;c++)f=k[c],g=a(f),g!==!1&&(j=!0),g!==!0&&(i=!1);h=!!i||!!j&&d}else h=!!b.selected;return b._changeSelectStatusAttrs(h),h}e(3===this.tree.options.selectMode,"expected selectMode 3"),a(this),this.visitParents(function(a){var b,c,e,f,g=a.children,h=!0,i=!1;for(b=0,c=g.length;b<c;b++)e=g[b],(e.selected||e.partsel)&&(i=!0),e.unselectable||e.selected||(h=!1);f=!!h||!!i&&d,a._changeSelectStatusAttrs(f)})},fromDict:function(b){for(var c in b)I[c]?this[c]=b[c]:"data"===c?a.extend(this.data,b.data):a.isFunction(b[c])||K[c]||(this.data[c]=b[c]);b.children&&(this.removeChildren(),this.addChildren(b.children)),this.renderTitle()},getChildren:function(){return this.hasChildren()===d?d:this.children},getFirstChild:function(){return this.children?this.children[0]:null},getIndex:function(){return a.inArray(this,this.parent.children)},getIndexHier:function(b,c){b=b||".";var d,e=[];return a.each(this.getParentList(!1,!0),function(a,b){d=""+(b.getIndex()+1),c&&(d=("0000000"+d).substr(-c)),e.push(d)}),e.join(b)},getKeyPath:function(a){var b=[],c=this.tree.options.keyPathSeparator;return this.visitParents(function(a){a.parent&&b.unshift(a.key)},!a),c+b.join(c)},getLastChild:function(){return this.children?this.children[this.children.length-1]:null},getLevel:function(){for(var a=0,b=this.parent;b;)a++,b=b.parent;return a},getNextSibling:function(){if(this.parent){var a,b,c=this.parent.children;for(a=0,b=c.length-1;a<b;a++)if(c[a]===this)return c[a+1]}return null},getParent:function(){return this.parent},getParentList:function(a,b){for(var c=[],d=b?this:this.parent;d;)(a||d.parent)&&c.unshift(d),d=d.parent;return c},getPrevSibling:function(){if(this.parent){var a,b,c=this.parent.children;for(a=1,b=c.length;a<b;a++)if(c[a]===this)return c[a-1]}return null},getSelectedNodes:function(a){var b=[];return this.visit(function(c){if(c.selected&&(b.push(c),a===!0))return"skip"}),b},hasChildren:function(){return this.lazy?null==this.children?d:0!==this.children.length&&(1!==this.children.length||!this.children[0].isStatusNode()||d):!(!this.children||!this.children.length)},hasFocus:function(){return this.tree.hasFocus()&&this.tree.focusNode===this},info:function(a){this.tree.options.debugLevel>=1&&(Array.prototype.unshift.call(arguments,this.toString()),f("info",arguments))},isActive:function(){return this.tree.activeNode===this},isChildOf:function(a){return this.parent&&this.parent===a},isDescendantOf:function(a){if(!a||a.tree!==this.tree)return!1;for(var b=this.parent;b;){if(b===a)return!0;b=b.parent}return!1},isExpanded:function(){return!!this.expanded},isFirstSibling:function(){var a=this.parent;return!a||a.children[0]===this},isFolder:function(){return!!this.folder},isLastSibling:function(){var a=this.parent;return!a||a.children[a.children.length-1]===this},isLazy:function(){return!!this.lazy},isLoaded:function(){return!this.lazy||this.hasChildren()!==d},isLoading:function(){return!!this._isLoading},isRoot:function(){return this.isRootNode()},isPartload:function(){return!!this.partload},isRootNode:function(){return this.tree.rootNode===this},isSelected:function(){return!!this.selected},isStatusNode:function(){return!!this.statusNodeType},isPagingNode:function(){return"paging"===this.statusNodeType},isTopLevel:function(){return this.tree.rootNode===this.parent},isUndefined:function(){return this.hasChildren()===d},isVisible:function(){var a,b,c=this.getParentList(!1,!1);for(a=0,b=c.length;a<b;a++)if(!c[a].expanded)return!1;return!0},lazyLoad:function(a){return this.warn("FancytreeNode.lazyLoad() is deprecated since 2014-02-16. Use .load() instead."),this.load(a)},load:function(a){var b,c,d=this,f=this.isExpanded();return e(this.isLazy(),"load() requires a lazy node"),a||this.isUndefined()?(this.isLoaded()&&this.resetLazy(),c=this.tree._triggerNodeEvent("lazyLoad",this),c===!1?k(this):(e("boolean"!=typeof c,"lazyLoad event must return source in data.result"),b=this.tree._callHook("nodeLoadChildren",this,c),f?(this.expanded=!0,b.always(function(){d.render()})):b.always(function(){d.renderStatus()}),b)):k(this)},makeVisible:function(b){var c,d=this,e=[],f=new a.Deferred,g=this.getParentList(!1,!1),h=g.length,i=!(b&&b.noAnimation===!0),j=!(b&&b.scrollIntoView===!1);for(c=h-1;c>=0;c--)e.push(g[c].setExpanded(!0,b));return a.when.apply(a,e).done(function(){j?d.scrollIntoView(i).done(function(){f.resolve()}):f.resolve()}),f.promise()},moveTo:function(b,c,f){c===d||"over"===c?c="child":"firstChild"===c&&(b.children&&b.children.length?(c="before",b=b.children[0]):c="child");var g,h=this.parent,i="child"===c?b:b.parent;if(this!==b){if(this.parent?i.isDescendantOf(this)&&a.error("Cannot move a node to its own descendant"):a.error("Cannot move system root"),i!==h&&h.triggerModifyChild("remove",this),1===this.parent.children.length){if(this.parent===i)return;this.parent.children=this.parent.lazy?[]:null,this.parent.expanded=!1}else g=a.inArray(this,this.parent.children),e(g>=0,"invalid source parent"),this.parent.children.splice(g,1);if(this.parent=i,i.hasChildren())switch(c){case"child":i.children.push(this);break;case"before":g=a.inArray(b,i.children),e(g>=0,"invalid target parent"),i.children.splice(g,0,this);break;case"after":g=a.inArray(b,i.children),e(g>=0,"invalid target parent"),i.children.splice(g+1,0,this);break;default:a.error("Invalid mode "+c)}else i.children=[this];f&&b.visit(f,!0),i===h?i.triggerModifyChild("move",this):i.triggerModifyChild("add",this),this.tree!==b.tree&&(this.warn("Cross-tree moveTo is experimantal!"),this.visit(function(a){a.tree=b.tree},!0)),h.isDescendantOf(i)||h.render(),i.isDescendantOf(h)||i===h||i.render()}},navigate:function(b,c){function d(d){if(d){try{d.makeVisible({scrollIntoView:!1})}catch(e){}return a(d.span).is(":visible")?c===!1?d.setFocus():d.setActive():(d.debug("Navigate: skipping hidden node"),void d.navigate(b,c))}}var e,f,g,h=!0,i=a.ui.keyCode,j=null;switch(b){case i.BACKSPACE:this.parent&&this.parent.parent&&(g=d(this.parent));break;case i.HOME:this.tree.visit(function(b){if(a(b.span).is(":visible"))return g=d(b),!1});break;case i.END:this.tree.visit(function(b){a(b.span).is(":visible")&&(g=b)}),g&&(g=d(g));break;case i.LEFT:this.expanded?(this.setExpanded(!1),g=d(this)):this.parent&&this.parent.parent&&(g=d(this.parent));break;case i.RIGHT:this.expanded||!this.children&&!this.lazy?this.children&&this.children.length&&(g=d(this.children[0])):(this.setExpanded(),g=d(this));break;case i.UP:for(j=this.getPrevSibling();j&&!a(j.span).is(":visible");)j=j.getPrevSibling();for(;j&&j.expanded&&j.children&&j.children.length;)j=j.children[j.children.length-1];!j&&this.parent&&this.parent.parent&&(j=this.parent),g=d(j);break;case i.DOWN:if(this.expanded&&this.children&&this.children.length)j=this.children[0];else for(f=this.getParentList(!1,!0),e=f.length-1;e>=0;e--){for(j=f[e].getNextSibling();j&&!a(j.span).is(":visible");)j=j.getNextSibling();if(j)break}g=d(j);break;default:h=!1}return g||k()},remove:function(){return this.parent.removeChild(this)},removeChild:function(a){return this.tree._callHook("nodeRemoveChild",this,a)},removeChildren:function(){return this.tree._callHook("nodeRemoveChildren",this)},removeClass:function(a){return this.toggleClass(a,!1)},render:function(a,b){return this.tree._callHook("nodeRender",this,a,b)},renderTitle:function(){return this.tree._callHook("nodeRenderTitle",this)},renderStatus:function(){return this.tree._callHook("nodeRenderStatus",this)},replaceWith:function(b){var c,d=this.parent,f=a.inArray(this,d.children),g=this;return e(this.isPagingNode(),"replaceWith() currently requires a paging status node"),c=this.tree._callHook("nodeLoadChildren",this,b),c.done(function(a){var b=g.children;for(u=0;u<b.length;u++)b[u].parent=d;d.children.splice.apply(d.children,[f+1,0].concat(b)),g.children=null,g.remove(),d.render()}).fail(function(){g.setExpanded()}),c},resetLazy:function(){this.removeChildren(),this.expanded=!1,this.lazy=!0,this.children=d,this.renderStatus()},scheduleAction:function(b,c){this.tree.timer&&clearTimeout(this.tree.timer),this.tree.timer=null;var d=this;switch(b){case"cancel":break;case"expand":this.tree.timer=setTimeout(function(){d.tree.debug("setTimeout: trigger expand"),d.setExpanded(!0)},c);break;case"activate":this.tree.timer=setTimeout(function(){d.tree.debug("setTimeout: trigger activate"),d.setActive(!0)},c);break;default:a.error("Invalid mode "+b)}},scrollIntoView:function(f,h){h!==d&&g(h)&&(this.warn("scrollIntoView() with 'topNode' option is deprecated since 2014-05-08. Use 'options.topNode' instead."),h={topNode:h});var i,j,l,m,n=a.extend({effects:f===!0?{duration:200,queue:!1}:f,scrollOfs:this.tree.options.scrollOfs,scrollParent:this.tree.options.scrollParent||this.tree.$container,topNode:null},h),o=new a.Deferred,p=this,q=a(this.span).height(),r=a(n.scrollParent),s=n.scrollOfs.top||0,t=n.scrollOfs.bottom||0,u=r.height(),v=r.scrollTop(),w=r,x=r[0]===b,y=n.topNode||null,z=null;return a(this.span).is(":visible")?(x?(j=a(this.span).offset().top,i=y&&y.span?a(y.span).offset().top:0,w=a("html,body")):(e(r[0]!==c&&r[0]!==c.body,"scrollParent should be a simple element or `window`, not document or body."),m=r.offset().top,j=a(this.span).offset().top-m+v,i=y?a(y.span).offset().top-m+v:0,l=Math.max(0,r.innerHeight()-r[0].clientHeight),u-=l),j<v+s?z=j-s:j+q>v+u-t&&(z=j+q-u+t,y&&(e(y.isRootNode()||a(y.span).is(":visible"),"topNode must be visible"),i<z&&(z=i-s))),null!==z?n.effects?(n.effects.complete=function(){o.resolveWith(p)},w.stop(!0).animate({scrollTop:z},n.effects)):(w[0].scrollTop=z,o.resolveWith(this)):o.resolveWith(this),o.promise()):(this.warn("scrollIntoView(): node is invisible."),k())},setActive:function(a,b){return this.tree._callHook("nodeSetActive",this,a,b)},setExpanded:function(a,b){return this.tree._callHook("nodeSetExpanded",this,a,b)},setFocus:function(a){return this.tree._callHook("nodeSetFocus",this,a)},setSelected:function(a){return this.tree._callHook("nodeSetSelected",this,a)},setStatus:function(a,b,c){return this.tree._callHook("nodeSetStatus",this,a,b,c)},setTitle:function(a){this.title=a,this.renderTitle(),this.triggerModify("rename")},sortChildren:function(a,b){var c,d,e=this.children;if(e){if(a=a||function(a,b){var c=a.title.toLowerCase(),d=b.title.toLowerCase();return c===d?0:c>d?1:-1},e.sort(a),b)for(c=0,d=e.length;c<d;c++)e[c].children&&e[c].sortChildren(a,"$norender$");"$norender$"!==b&&this.render(),this.triggerModifyChild("sort")}},toDict:function(b,c){var d,e,f,g={},h=this;if(a.each(H,function(a,b){(h[b]||h[b]===!1)&&(g[b]=h[b])}),a.isEmptyObject(this.data)||(g.data=a.extend({},this.data),a.isEmptyObject(g.data)&&delete g.data),c&&c(g,h),b&&this.hasChildren())for(g.children=[],d=0,e=this.children.length;d<e;d++)f=this.children[d],f.isStatusNode()||g.children.push(f.toDict(!0,c));return g},toggleClass:function(b,c){var e,f,g=/\S+/g,h=b.match(g)||[],i=0,j=!1,k=this[this.tree.statusClassPropName],l=" "+(this.extraClasses||"")+" ";for(k&&a(k).toggleClass(b,c);e=h[i++];)if(f=l.indexOf(" "+e+" ")>=0,c=c===d?!f:!!c)f||(l+=e+" ",j=!0);else for(;l.indexOf(" "+e+" ")>-1;)l=l.replace(" "+e+" "," ");return this.extraClasses=a.trim(l),j},toggleExpanded:function(){return this.tree._callHook("nodeToggleExpanded",this)},toggleSelected:function(){return this.tree._callHook("nodeToggleSelected",this)},toString:function(){return"<FancytreeNode(#"+this.key+", '"+this.title+"')>"},triggerModifyChild:function(b,c,d){var e,f=this.tree.options.modifyChild;f&&(c&&c.parent!==this&&a.error("childNode "+c+" is not a child of "+this),e={node:this,tree:this.tree,operation:b,childNode:c||null},d&&a.extend(e,d),f({type:"modifyChild"},e))},triggerModify:function(a,b){this.parent.triggerModifyChild(a,this,b)},visit:function(a,b){var c,d,e=!0,f=this.children;if(b===!0&&(e=a(this),e===!1||"skip"===e))return e;if(f)for(c=0,d=f.length;c<d&&(e=f[c].visit(a,!0),e!==!1);c++);return e},visitAndLoad:function(b,c,d){var e,f,g,h=this;return b&&c===!0&&(f=b(h),f===!1||"skip"===f)?d?f:k():h.children||h.lazy?(e=new a.Deferred,g=[],h.load().done(function(){for(var c=0,d=h.children.length;c<d;c++){if(f=h.children[c].visitAndLoad(b,!0,!0),f===!1){e.reject();break}"skip"!==f&&g.push(f)}a.when.apply(this,g).then(function(){e.resolve()})}),e.promise()):k()},visitParents:function(a,b){if(b&&a(this)===!1)return!1;for(var c=this.parent;c;){if(a(c)===!1)return!1;c=c.parent}return!0},warn:function(a){Array.prototype.unshift.call(arguments,this.toString()),f("warn",arguments)}},t.prototype={_makeHookContext:function(b,c,e){var f,g;return b.node!==d?(c&&b.originalEvent!==c&&a.error("invalid args"),f=b):b.tree?(g=b.tree,f={node:b,tree:g,widget:g.widget,options:g.widget.options,originalEvent:c}):b.widget?f={node:null,tree:b,widget:b.widget,options:b.widget.options,originalEvent:c}:a.error("invalid args"),e&&a.extend(f,e),f},_callHook:function(b,c,d){var e=this._makeHookContext(c),f=this[b],g=Array.prototype.slice.call(arguments,2);return a.isFunction(f)||a.error("_callHook('"+b+"') is not a function"),g.unshift(e),f.apply(this,g)},_requireExtension:function(b,c,d,f){d=!!d;var g=this._local.name,h=this.options.extensions,i=a.inArray(b,h)<a.inArray(g,h),j=c&&null==this.ext[b],k=!j&&null!=d&&d!==i;return e(g&&g!==b,"invalid or same name"),!j&&!k||(f||(j||c?(f="'"+g+"' extension requires '"+b+"'",k&&(f+=" to be registered "+(d?"before":"after")+" itself")):f="If used together, `"+b+"` must be registered "+(d?"before":"after")+" `"+g+"`"),a.error(f),!1)},activateKey:function(a){var b=this.getNodeByKey(a);return b?b.setActive():this.activeNode&&this.activeNode.setActive(!1),b},addPagingNode:function(a,b){return this.rootNode.addPagingNode(a,b)},applyPatch:function(b){var c,d,f,g,h,i,j=b.length,k=[];for(d=0;d<j;d++)f=b[d],e(2===f.length,"patchList must be an array of length-2-arrays"),g=f[0],h=f[1],i=null===g?this.rootNode:this.getNodeByKey(g),i?(c=new a.Deferred,k.push(c),i.applyPatch(h).always(m(c,i))):this.warn("could not find node with key '"+g+"'");return a.when.apply(a,k).promise()},clear:function(a){this._callHook("treeClear",this)},count:function(){return this.rootNode.countChildren()},debug:function(a){this.options.debugLevel>=2&&(Array.prototype.unshift.call(arguments,this.toString()),f("log",arguments))},enableUpdate:function(a){return a=a!==!1,!!this._enableUpdate==!!a?a:(this._enableUpdate=a,a?(this.debug("enableUpdate(true): redraw ",this._dirtyRoots),this.render()):this.debug("enableUpdate(false)..."),!a)},findAll:function(a){return this.rootNode.findAll(a)},findFirst:function(a){return this.rootNode.findFirst(a)},findNextNode:function(b,c,d){var e=null,f=c.parent.children,g=null,h=function(a,b,c){var d,e,f=a.children,g=f.length,i=f[b];if(i&&c(i)===!1)return!1;if(i&&i.children&&i.expanded&&h(i,0,c)===!1)return!1;for(d=b+1;d<g;d++)if(h(a,d,c)===!1)return!1;return e=a.parent,e?h(e,e.children.indexOf(a)+1,c):h(a,0,c)};return b="string"==typeof b?r(b):b,c=c||this.getFirstChild(),h(c.parent,f.indexOf(c),function(d){return d!==e&&(e=e||d,a(d.span).is(":visible")?(!b(d)||(g=d,g===c))&&void 0:void d.debug("quicksearch: skipping hidden node"))}),g},generateFormElements:function(b,c,d){function e(b){j.append(a("<input>",{type:"checkbox",name:g,value:b.key,checked:!0}))}d=d||{};var f,g="string"==typeof b?b:"ft_"+this._id+"[]",h="string"==typeof c?c:"ft_"+this._id+"_active",i="fancytree_result_"+this._id,j=a("#"+i),k=3===this.options.selectMode&&d.stopOnParents!==!1;j.length?j.empty():j=a("<div>",{id:i}).hide().insertAfter(this.$container),c!==!1&&this.activeNode&&j.append(a("<input>",{type:"radio",name:h,value:this.activeNode.key,checked:!0})),d.filter?this.visit(function(a){var b=d.filter(a);return"skip"===b?b:void(b!==!1&&e(a))}):b!==!1&&(f=this.getSelectedNodes(k),a.each(f,function(a,b){e(b)}))},getActiveNode:function(){return this.activeNode},getFirstChild:function(){return this.rootNode.getFirstChild()},getFocusNode:function(){return this.focusNode},getNodeByKey:function(a,b){var d,e;return!b&&(d=c.getElementById(this.options.idPrefix+a))?d.ftnode?d.ftnode:null:(b=b||this.rootNode,e=null,b.visit(function(b){if(b.key===a)return e=b,!1},!0),e)},getRootNode:function(){return this.rootNode},getSelectedNodes:function(a){return this.rootNode.getSelectedNodes(a)},hasFocus:function(){return!!this._hasFocus},info:function(a){this.options.debugLevel>=1&&(Array.prototype.unshift.call(arguments,this.toString()),f("info",arguments))},loadKeyPath:function(b,c,e){function f(a,b,d){c.call(r,b,"loading"),b.load().done(function(){r.loadKeyPath.call(r,l[a],c,b).always(m(d,r))}).fail(function(e){r.warn("loadKeyPath: error loading: "+a+" (parent: "+o+")"),c.call(r,b,"error"),d.reject()})}var g,h,i,j,k,l,n,o,p,q=this.options.keyPathSeparator,r=this;for(c=c||a.noop,a.isArray(b)||(b=[b]),l={},i=0;i<b.length;i++)for(o=e||this.rootNode,j=b[i],j.charAt(0)===q&&(j=j.substr(1)),p=j.split(q);p.length;){if(k=p.shift(),n=o._findDirectChild(k),!n){this.warn("loadKeyPath: key not found: "+k+" (parent: "+o+")"),c.call(this,k,"error");break}if(0===p.length){c.call(this,n,"ok");break}if(n.lazy&&n.hasChildren()===d){c.call(this,n,"loaded"),l[k]?l[k].push(p.join(q)):l[k]=[p.join(q)];break}c.call(this,n,"loaded"),o=n}g=[];for(k in l)n=o._findDirectChild(k),null==n&&(n=r.getNodeByKey(k)),h=new a.Deferred,g.push(h),f(k,n,h);return a.when.apply(a,g).promise()},reactivate:function(a){var b,c=this.activeNode;return c?(this.activeNode=null,b=c.setActive(!0,{noFocus:!0}),a&&c.setFocus(),b):k()},reload:function(a){return this._callHook("treeClear",this),this._callHook("treeLoad",this,a)},render:function(a,b){return this.rootNode.render(a,b)},setFocus:function(a){return this._callHook("treeSetFocus",this,a)},toDict:function(a,b){var c=this.rootNode.toDict(!0,b);return a?c:c.children},toString:function(){return"<Fancytree(#"+this._id+")>"},_triggerNodeEvent:function(a,b,c,e){var f=this._makeHookContext(b,c,e),g=this.widget._trigger(a,c,f);return g!==!1&&f.result!==d?f.result:g},_triggerTreeEvent:function(a,b,c){var e=this._makeHookContext(this,b,c),f=this.widget._trigger(a,b,e);return f!==!1&&e.result!==d?e.result:f},visit:function(a){return this.rootNode.visit(a,!1)},warn:function(a){Array.prototype.unshift.call(arguments,this.toString()),f("warn",arguments)}},a.extend(t.prototype,{nodeClick:function(a){var b,c,d=a.targetType,e=a.node;if("expander"===d){if(e.isLoading())return void e.debug("Got 2nd click while loading: ignored");this._callHook("nodeToggleExpanded",a)}else if("checkbox"===d)this._callHook("nodeToggleSelected",a),a.options.focusOnSelect&&this._callHook("nodeSetFocus",a,!0);else{if(c=!1,b=!0,e.folder)switch(a.options.clickFolderMode){case 2:c=!0,b=!1;break;case 3:b=!0,c=!0}b&&(this.nodeSetFocus(a),this._callHook("nodeSetActive",a,!0)),c&&this._callHook("nodeToggleExpanded",a)}},nodeCollapseSiblings:function(a,b){var c,d,e,f=a.node;if(f.parent)for(c=f.parent.children,d=0,e=c.length;d<e;d++)c[d]!==f&&c[d].expanded&&this._callHook("nodeSetExpanded",c[d],!1,b)},nodeDblclick:function(a){"title"===a.targetType&&4===a.options.clickFolderMode&&this._callHook("nodeToggleExpanded",a),"title"===a.targetType&&a.originalEvent.preventDefault()},nodeKeydown:function(b){var c,d,e,f,g=b.originalEvent,h=b.node,i=b.tree,j=b.options,k=g.which,l=String.fromCharCode(k),m=!(g.altKey||g.ctrlKey||g.metaKey||g.shiftKey),n=a(g.target),o=!0,p=!(g.ctrlKey||!j.autoActivate);if(h||(f=this.getActiveNode()||this.getFirstChild(),f&&(f.setFocus(),h=b.node=this.focusNode,h.debug("Keydown force focus on active node"))),j.quicksearch&&m&&/\w/.test(l)&&!D[k]&&!n.is(":input:enabled"))return d=(new Date).getTime(),d-i.lastQuicksearchTime>500&&(i.lastQuicksearchTerm=""),i.lastQuicksearchTime=d,i.lastQuicksearchTerm+=l,c=i.findNextNode(i.lastQuicksearchTerm,i.getActiveNode()),c&&c.setActive(),void g.preventDefault();switch(w.eventToString(g)){case"+":case"=":i.nodeSetExpanded(b,!0);break;case"-":i.nodeSetExpanded(b,!1);break;case"space":h.isPagingNode()?i._triggerNodeEvent("clickPaging",b,g):j.checkbox?i.nodeToggleSelected(b):i.nodeSetActive(b,!0);break;case"return":i.nodeSetActive(b,!0);break;case"home":case"end":case"backspace":case"left":case"right":case"up":case"down":e=h.navigate(g.which,p,!0);break;default:o=!1}o&&g.preventDefault()},nodeLoadChildren:function(b,c){var d,f,g,h=b.tree,i=b.node,j=(new Date).getTime();return a.isFunction(c)&&(c=c.call(h,{type:"source"},b),e(!a.isFunction(c),"source callback must not return another function")),c.url&&(i._requestId&&i.warn("Recursive load request #"+j+" while #"+i._requestId+" is pending."),d=a.extend({},b.options.ajax,c),i._requestId=j,d.debugDelay?(f=d.debugDelay,a.isArray(f)&&(f=f[0]+Math.random()*(f[1]-f[0])),i.warn("nodeLoadChildren waiting debugDelay "+Math.round(f)+" ms ..."),d.debugDelay=!1,g=a.Deferred(function(b){setTimeout(function(){a.ajax(d).done(function(){b.resolveWith(this,arguments)}).fail(function(){b.rejectWith(this,arguments)})},f)})):g=a.ajax(d),c=new a.Deferred,g.done(function(d,e,f){var g,k;if("json"!==this.dataType&&"jsonp"!==this.dataType||"string"!=typeof d||a.error("Ajax request returned a string (did you get the JSON dataType wrong?)."),i._requestId&&i._requestId>j)return void c.rejectWith(this,[A]);if(b.options.postProcess){try{k=h._triggerNodeEvent("postProcess",b,b.originalEvent,{response:d,error:null,dataType:this.dataType})}catch(l){k={error:l,message:""+l,details:"postProcess failed"}}if(k.error)return g=a.isPlainObject(k.error)?k.error:{message:k.error},g=h._makeHookContext(i,null,g),void c.rejectWith(this,[g]);d=a.isArray(k)?k:d}else d&&d.hasOwnProperty("d")&&b.options.enableAspx&&(d="string"==typeof d.d?a.parseJSON(d.d):d.d);c.resolveWith(this,[d])}).fail(function(a,b,d){var e=h._makeHookContext(i,null,{error:a,args:Array.prototype.slice.call(arguments),message:d,details:a.status+": "+d});c.rejectWith(this,[e])})),a.isFunction(c.then)&&a.isFunction(c["catch"])&&(g=c,c=new a.Deferred,g.then(function(a){c.resolve(a)},function(a){c.reject(a)})),a.isFunction(c.promise)&&(h.nodeSetStatus(b,"loading"),c.done(function(a){h.nodeSetStatus(b,"ok"),i._requestId=null}).fail(function(a){var c;return a===A?void i.warn("Ignored response for obsolete load request #"+j+" (expected #"+i._requestId+")"):(a.node&&a.error&&a.message?c=a:(c=h._makeHookContext(i,null,{error:a,args:Array.prototype.slice.call(arguments),message:a?a.message||a.toString():""}),"[object Object]"===c.message&&(c.message="")),
i.warn("Load children failed ("+c.message+")",c),void(h._triggerNodeEvent("loadError",c,null)!==!1&&h.nodeSetStatus(b,"error",c.message,c.details)))})),a.when(c).done(function(b){var c;a.isPlainObject(b)&&(e(i.isRootNode(),"source may only be an object for root nodes (expecting an array of child objects otherwise)"),e(a.isArray(b.children),"if an object is passed as source, it must contain a 'children' array (all other properties are added to 'tree.data')"),c=b,b=b.children,delete c.children,a.extend(h.data,c)),e(a.isArray(b),"expected array of children"),i._setChildren(b),h._triggerNodeEvent("loadChildren",i)})},nodeLoadKeyPath:function(a,b){},nodeRemoveChild:function(b,c){var d,f=b.node,g=a.extend({},b,{node:c}),h=f.children;return 1===h.length?(e(c===h[0],"invalid single child"),this.nodeRemoveChildren(b)):(this.activeNode&&(c===this.activeNode||this.activeNode.isDescendantOf(c))&&this.activeNode.setActive(!1),this.focusNode&&(c===this.focusNode||this.focusNode.isDescendantOf(c))&&(this.focusNode=null),this.nodeRemoveMarkup(g),this.nodeRemoveChildren(g),d=a.inArray(c,h),e(d>=0,"invalid child"),f.triggerModifyChild("remove",c),c.visit(function(a){a.parent=null},!0),this._callHook("treeRegisterNode",this,!1,c),void h.splice(d,1))},nodeRemoveChildMarkup:function(b){var c=b.node;c.ul&&(c.isRootNode()?a(c.ul).empty():(a(c.ul).remove(),c.ul=null),c.visit(function(a){a.li=a.ul=null}))},nodeRemoveChildren:function(b){var c,d=b.tree,e=b.node,f=e.children;f&&(this.activeNode&&this.activeNode.isDescendantOf(e)&&this.activeNode.setActive(!1),this.focusNode&&this.focusNode.isDescendantOf(e)&&(this.focusNode=null),this.nodeRemoveChildMarkup(b),c=a.extend({},b),e.triggerModifyChild("remove",null),e.visit(function(a){a.parent=null,d._callHook("treeRegisterNode",d,!1,a)}),e.lazy?e.children=[]:e.children=null,e.isRootNode()||(e.expanded=!1),this.nodeRenderStatus(b))},nodeRemoveMarkup:function(b){var c=b.node;c.li&&(a(c.li).remove(),c.li=null),this.nodeRemoveChildMarkup(b)},nodeRender:function(b,d,f,g,h){var i,j,k,l,m,n,o,p=b.node,q=b.tree,r=b.options,s=r.aria,t=!1,u=p.parent,v=!u,w=p.children,x=null;if(q._enableUpdate!==!1&&(v||u.ul)){if(e(v||u.ul,"parent UL must exist"),v||(p.li&&(d||p.li.parentNode!==p.parent.ul)&&(p.li.parentNode===p.parent.ul?x=p.li.nextSibling:this.debug("Unlinking "+p+" (must be child of "+p.parent+")"),this.nodeRemoveMarkup(b)),p.li?this.nodeRenderStatus(b):(t=!0,p.li=c.createElement("li"),p.li.ftnode=p,p.key&&r.generateIds&&(p.li.id=r.idPrefix+p.key),p.span=c.createElement("span"),p.span.className="fancytree-node",s&&a(p.li).attr("aria-labelledby","ftal_"+r.idPrefix+p.key),p.li.appendChild(p.span),this.nodeRenderTitle(b),r.createNode&&r.createNode.call(q,{type:"createNode"},b)),r.renderNode&&r.renderNode.call(q,{type:"renderNode"},b)),w){if(v||p.expanded||f===!0){for(p.ul||(p.ul=c.createElement("ul"),(g!==!0||h)&&p.expanded||(p.ul.style.display="none"),s&&a(p.ul).attr("role","group"),p.li?p.li.appendChild(p.ul):p.tree.$div.append(p.ul)),l=0,m=w.length;l<m;l++)o=a.extend({},b,{node:w[l]}),this.nodeRender(o,d,f,!1,!0);for(i=p.ul.firstChild;i;)k=i.ftnode,k&&k.parent!==p?(p.debug("_fixParent: remove missing "+k,i),n=i.nextSibling,i.parentNode.removeChild(i),i=n):i=i.nextSibling;for(i=p.ul.firstChild,l=0,m=w.length-1;l<m;l++)j=w[l],k=i.ftnode,j!==k?p.ul.insertBefore(j.li,k.li):i=i.nextSibling}}else p.ul&&(this.warn("remove child markup for "+p),this.nodeRemoveChildMarkup(b));v||t&&u.ul.insertBefore(p.li,x)}},nodeRenderTitle:function(b,c){var e,f,g,h,i,j,k=b.node,l=b.tree,m=b.options,n=m.aria,q=k.getLevel(),r=[];c!==d&&(k.title=c),k.span&&l._enableUpdate!==!1&&(q<m.minExpandLevel?(k.lazy||(k.expanded=!0),q>1&&(n?r.push("<span role='button' class='fancytree-expander fancytree-expander-fixed'></span>"):r.push("<span class='fancytree-expander fancytree-expander-fixed''></span>"))):n?r.push("<span role='button' class='fancytree-expander'></span>"):r.push("<span class='fancytree-expander'></span>"),m.checkbox&&k.hideCheckbox!==!0&&!k.isStatusNode()&&(n?r.push("<span role='checkbox' class='fancytree-checkbox'></span>"):r.push("<span class='fancytree-checkbox'></span>")),k.data.iconClass!==d&&(k.icon?a.error("'iconClass' node option is deprecated since v2.14.0: use 'icon' only instead"):(k.warn("'iconClass' node option is deprecated since v2.14.0: use 'icon' instead"),k.icon=k.data.iconClass)),f=w.evalOption("icon",k,k,m,!0),"boolean"!=typeof f&&(f=""+f),f!==!1&&(h=n?" role='img'":"","string"==typeof f?x.test(f)?(f="/"===f.charAt(0)?f:(m.imagePath||"")+f,r.push("<img src='"+f+"' class='fancytree-icon' alt='' />")):r.push("<span "+h+" class='fancytree-custom-icon "+f+"'></span>"):r.push("<span "+h+" class='fancytree-icon'></span>")),g="",m.renderTitle&&(g=m.renderTitle.call(l,{type:"renderTitle"},b)||""),g||(k.tooltip?j=k.tooltip:m.tooltip&&(j=m.tooltip===!0?k.title:m.tooltip.call(l,k)),j=j?" title='"+p(j)+"'":"",e=n?" id='ftal_"+m.idPrefix+k.key+"'":"",h=n?" role='treeitem'":"",i=m.titlesTabbable?" tabindex='0'":"",g="<span "+h+" class='fancytree-title'"+e+j+i+">"+(m.escapeTitles?o(k.title):k.title)+"</span>"),r.push(g),k.span.innerHTML=r.join(""),this.nodeRenderStatus(b),m.enhanceTitle&&(b.$title=a(">span.fancytree-title",k.span),g=m.enhanceTitle.call(l,{type:"enhanceTitle"},b)||""))},nodeRenderStatus:function(b){var c=b.node,d=b.tree,e=b.options,f=c.hasChildren(),g=c.isLastSibling(),h=e.aria,i=a(c.span).find(".fancytree-title"),j=e._classNames,k=[],l=c[d.statusClassPropName];l&&d._enableUpdate!==!1&&(k.push(j.node),d.activeNode===c&&k.push(j.active),d.focusNode===c&&k.push(j.focused),c.expanded?(k.push(j.expanded),h&&i.attr("aria-expanded",!0)):h&&(f?i.attr("aria-expanded",!1):i.removeAttr("aria-expanded")),c.folder&&k.push(j.folder),f!==!1&&k.push(j.hasChildren),g&&k.push(j.lastsib),c.lazy&&null==c.children&&k.push(j.lazy),c.partload&&k.push(j.partload),c.partsel&&k.push(j.partsel),c.unselectable&&k.push(j.unselectable),c._isLoading&&k.push(j.loading),c._error&&k.push(j.error),c.statusNodeType&&k.push(j.statusNodePrefix+c.statusNodeType),c.selected?(k.push(j.selected),h&&i.attr("aria-selected",!0)):h&&i.attr("aria-selected",!1),c.extraClasses&&k.push(c.extraClasses),f===!1?k.push(j.combinedExpanderPrefix+"n"+(g?"l":"")):k.push(j.combinedExpanderPrefix+(c.expanded?"e":"c")+(c.lazy&&null==c.children?"d":"")+(g?"l":"")),k.push(j.combinedIconPrefix+(c.expanded?"e":"c")+(c.folder?"f":"")),l.className=k.join(" "),c.li&&a(c.li).toggleClass(j.lastsib,g))},nodeSetActive:function(b,c,d){d=d||{};var f,g=b.node,h=b.tree,i=b.options,j=d.noEvents===!0,m=d.noFocus===!0,n=g===h.activeNode;return c=c!==!1,n===c?k(g):c&&!j&&this._triggerNodeEvent("beforeActivate",g,b.originalEvent)===!1?l(g,["rejected"]):(c?(h.activeNode&&(e(h.activeNode!==g,"node was active (inconsistency)"),f=a.extend({},b,{node:h.activeNode}),h.nodeSetActive(f,!1),e(null===h.activeNode,"deactivate was out of sync?")),i.activeVisible&&g.makeVisible({scrollIntoView:m&&null==h.focusNode}),h.activeNode=g,h.nodeRenderStatus(b),m||h.nodeSetFocus(b),j||h._triggerNodeEvent("activate",g,b.originalEvent)):(e(h.activeNode===g,"node was not active (inconsistency)"),h.activeNode=null,this.nodeRenderStatus(b),j||b.tree._triggerNodeEvent("deactivate",g,b.originalEvent)),k(g))},nodeSetExpanded:function(b,c,e){e=e||{};var f,g,h,i,j,m,n=b.node,o=b.tree,p=b.options,q=e.noAnimation===!0,r=e.noEvents===!0;if(c=c!==!1,n.expanded&&c||!n.expanded&&!c)return k(n);if(c&&!n.lazy&&!n.hasChildren())return k(n);if(!c&&n.getLevel()<p.minExpandLevel)return l(n,["locked"]);if(!r&&this._triggerNodeEvent("beforeExpand",n,b.originalEvent)===!1)return l(n,["rejected"]);if(q||n.isVisible()||(q=e.noAnimation=!0),g=new a.Deferred,c&&!n.expanded&&p.autoCollapse){j=n.getParentList(!1,!0),m=p.autoCollapse;try{for(p.autoCollapse=!1,h=0,i=j.length;h<i;h++)this._callHook("nodeCollapseSiblings",j[h],e)}finally{p.autoCollapse=m}}return g.done(function(){var a=n.getLastChild();c&&p.autoScroll&&!q&&a?a.scrollIntoView(!0,{topNode:n}).always(function(){r||b.tree._triggerNodeEvent(c?"expand":"collapse",b)}):r||b.tree._triggerNodeEvent(c?"expand":"collapse",b)}),f=function(d){var e,f,g=p._classNames,h=p.toggleEffect;if(n.expanded=c,o._callHook("nodeRender",b,!1,!1,!0),n.ul)if(e="none"!==n.ul.style.display,f=!!n.expanded,e===f)n.warn("nodeSetExpanded: UL.style.display already set");else{if(h&&!q)return a(n.li).addClass(g.animating),void a(n.ul).addClass(g.animating).toggle(h.effect,h.options,h.duration,function(){a(this).removeClass(g.animating),a(n.li).removeClass(g.animating),d()});n.ul.style.display=n.expanded||!parent?"":"none"}d()},c&&n.lazy&&n.hasChildren()===d?n.load().done(function(){g.notifyWith&&g.notifyWith(n,["loaded"]),f(function(){g.resolveWith(n)})}).fail(function(a){f(function(){g.rejectWith(n,["load failed ("+a+")"])})}):f(function(){g.resolveWith(n)}),g.promise()},nodeSetFocus:function(b,d){var e,f=b.tree,g=b.node,h=f.options,i=!!b.originalEvent&&a(b.originalEvent.target).is(":input");if(d=d!==!1,f.focusNode){if(f.focusNode===g&&d)return;e=a.extend({},b,{node:f.focusNode}),f.focusNode=null,this._triggerNodeEvent("blur",e),this._callHook("nodeRenderStatus",e)}d&&(this.hasFocus()||(g.debug("nodeSetFocus: forcing container focus"),this._callHook("treeSetFocus",b,!0,{calledByNode:!0})),g.makeVisible({scrollIntoView:!1}),f.focusNode=g,h.titlesTabbable?i||a(g.span).find(".fancytree-title").focus():0===a(c.activeElement).closest(".fancytree-container").length&&a(f.$container).focus(),h.aria&&a(f.$container).attr("aria-activedescendant","ftal_"+h.idPrefix+g.key),this._triggerNodeEvent("focus",b),h.autoScroll&&g.scrollIntoView(),this._callHook("nodeRenderStatus",b))},nodeSetSelected:function(a,b){var c=a.node,d=a.tree,e=a.options;if(b=b!==!1,!c.unselectable){if(c.selected&&b||!c.selected&&!b)return!!c.selected;if(this._triggerNodeEvent("beforeSelect",c,a.originalEvent)===!1)return!!c.selected;b&&1===e.selectMode?d.lastSelectedNode&&d.lastSelectedNode.setSelected(!1):3===e.selectMode&&(c.selected=b,c.fixSelection3AfterClick()),c.selected=b,this.nodeRenderStatus(a),d.lastSelectedNode=b?c:null,d._triggerNodeEvent("select",a)}},nodeSetStatus:function(b,c,d,e){function f(){var a=h.children?h.children[0]:null;if(a&&a.isStatusNode()){try{h.ul&&(h.ul.removeChild(a.li),a.li=null)}catch(b){}1===h.children.length?h.children=[]:h.children.shift()}}function g(b,c){var d=h.children?h.children[0]:null;return d&&d.isStatusNode()?(a.extend(d,b),d.statusNodeType=c,i._callHook("nodeRenderTitle",d)):(h._setChildren([b]),h.children[0].statusNodeType=c,i.render()),h.children[0]}var h=b.node,i=b.tree;switch(c){case"ok":f(),h._isLoading=!1,h._error=null,h.renderStatus();break;case"loading":h.parent||g({title:i.options.strings.loading+(d?" ("+d+")":""),checkbox:!1,tooltip:e},c),h._isLoading=!0,h._error=null,h.renderStatus();break;case"error":g({title:i.options.strings.loadError+(d?" ("+d+")":""),checkbox:!1,tooltip:e},c),h._isLoading=!1,h._error={message:d,details:e},h.renderStatus();break;case"nodata":g({title:i.options.strings.noData,checkbox:!1,tooltip:e},c),h._isLoading=!1,h._error=null,h.renderStatus();break;default:a.error("invalid node status "+c)}},nodeToggleExpanded:function(a){return this.nodeSetExpanded(a,!a.node.expanded)},nodeToggleSelected:function(a){return this.nodeSetSelected(a,!a.node.selected)},treeClear:function(a){var b=a.tree;b.activeNode=null,b.focusNode=null,b.$div.find(">ul.fancytree-container").empty(),b.rootNode.children=null},treeCreate:function(a){},treeDestroy:function(a){this.$div.find(">ul.fancytree-container").remove(),this.$source&&this.$source.removeClass("ui-helper-hidden")},treeInit:function(a){this.treeLoad(a)},treeLoad:function(b,c){var d,f,g,h,i=b.tree,j=b.widget.element,k=a.extend({},b,{node:this.rootNode});if(i.rootNode.children&&this.treeClear(b),c=c||this.options.source)"string"==typeof c&&a.error("Not implemented");else switch(f=j.data("type")||"html"){case"html":g=j.find(">ul:first"),g.addClass("ui-fancytree-source ui-helper-hidden"),c=a.ui.fancytree.parseHtml(g),this.data=a.extend(this.data,n(g));break;case"json":c=a.parseJSON(j.text()),j.contents().filter(function(){return 3===this.nodeType}).remove(),a.isPlainObject(c)&&(e(a.isArray(c.children),"if an object is passed as source, it must contain a 'children' array (all other properties are added to 'tree.data')"),d=c,c=c.children,delete d.children,a.extend(i.data,d));break;default:a.error("Invalid data-type: "+f)}return h=this.nodeLoadChildren(k,c).done(function(){i.render(),3===b.options.selectMode&&i.rootNode.fixSelection3FromEndNodes(),i.activeNode&&i.options.activeVisible&&i.activeNode.makeVisible(),i._triggerTreeEvent("init",null,{status:!0})}).fail(function(){i.render(),i._triggerTreeEvent("init",null,{status:!1})})},treeRegisterNode:function(a,b,c){},treeSetFocus:function(b,c,d){function e(a){!a.activeNode&&a.getFirstChild()&&a.getFirstChild().setFocus()}if(c=c!==!1,c!==this.hasFocus()&&(this._hasFocus=c,!c&&this.focusNode?this.focusNode.setFocus(!1):!c||d&&d.calledByNode||a(this.$container).focus(),this.$container.toggleClass("fancytree-treefocus",c),this._triggerTreeEvent(c?"focusTree":"blurTree"),c)){var f=this;setTimeout(function(){e(f)},0)}},treeSetOption:function(b,c,d){var e=b.tree,f=!0,g=!1;switch(c){case"aria":case"checkbox":case"icon":case"minExpandLevel":case"tabindex":e._callHook("treeCreate",e),g=!0;break;case"escapeTitles":case"tooltip":g=!0;break;case"rtl":d===!1?e.$container.attr("DIR",null).removeClass("fancytree-rtl"):e.$container.attr("DIR","RTL").addClass("fancytree-rtl"),g=!0;break;case"source":f=!1,e._callHook("treeLoad",e,d),g=!0}e.debug("set option "+c+"="+d+" <"+typeof d+">"),f&&(this.widget._super?this.widget._super.call(this.widget,c,d):a.Widget.prototype._setOption.call(this.widget,c,d)),g&&e.render(!0,!1)}}),a.widget("ui.fancytree",{options:{activeVisible:!0,ajax:{type:"GET",cache:!1,dataType:"json"},aria:!1,autoActivate:!0,autoCollapse:!1,autoScroll:!1,checkbox:!1,clickFolderMode:4,debugLevel:null,disabled:!1,enableAspx:!0,escapeTitles:!1,extensions:[],toggleEffect:{effect:"blind",options:{direction:"vertical",scale:"box"},duration:200},generateIds:!1,icon:!0,idPrefix:"ft_",focusOnSelect:!1,keyboard:!0,keyPathSeparator:"/",minExpandLevel:1,quicksearch:!1,rtl:!1,scrollOfs:{top:0,bottom:0},scrollParent:null,selectMode:2,strings:{loading:"Loading&#8230;",loadError:"Load error!",moreData:"More&#8230;",noData:"No data."},tabindex:"0",titlesTabbable:!1,tooltip:!1,_classNames:{node:"fancytree-node",folder:"fancytree-folder",animating:"fancytree-animating",combinedExpanderPrefix:"fancytree-exp-",combinedIconPrefix:"fancytree-ico-",hasChildren:"fancytree-has-children",active:"fancytree-active",selected:"fancytree-selected",expanded:"fancytree-expanded",lazy:"fancytree-lazy",focused:"fancytree-focused",partload:"fancytree-partload",partsel:"fancytree-partsel",unselectable:"fancytree-unselectable",lastsib:"fancytree-lastsib",loading:"fancytree-loading",error:"fancytree-error",statusNodePrefix:"fancytree-statusnode-"},lazyLoad:null,postProcess:null},_create:function(){this.tree=new t(this),this.$source=this.source||"json"===this.element.data("type")?this.element:this.element.find(">ul:first");var b,c,f,g=this.options,h=g.extensions,i=this.tree;for(f=0;f<h.length;f++)c=h[f],b=a.ui.fancytree._extensions[c],b||a.error("Could not apply extension '"+c+"' (it is not registered, did you forget to include it?)"),this.tree.options[c]=a.extend(!0,{},b.options,this.tree.options[c]),e(this.tree.ext[c]===d,"Extension name must not exist as Fancytree.ext attribute: '"+c+"'"),this.tree.ext[c]={},j(this.tree,i,b,c),i=b;g.icons!==d&&(g.icon!==!0?a.error("'icons' tree option is deprecated since v2.14.0: use 'icon' only instead"):(this.tree.warn("'icons' tree option is deprecated since v2.14.0: use 'icon' instead"),g.icon=g.icons)),g.iconClass!==d&&(g.icon?a.error("'iconClass' tree option is deprecated since v2.14.0: use 'icon' only instead"):(this.tree.warn("'iconClass' tree option is deprecated since v2.14.0: use 'icon' instead"),g.icon=g.iconClass)),g.tabbable!==d&&(g.tabindex=g.tabbable?"0":"-1",this.tree.warn("'tabbable' tree option is deprecated since v2.17.0: use 'tabindex='"+g.tabindex+"' instead")),this.tree._callHook("treeCreate",this.tree)},_init:function(){this.tree._callHook("treeInit",this.tree),this._bind()},_setOption:function(a,b){return this.tree._callHook("treeSetOption",this.tree,a,b)},destroy:function(){this._unbind(),this.tree._callHook("treeDestroy",this.tree),a.Widget.prototype.destroy.call(this)},_unbind:function(){var b=this.tree._ns;this.element.off(b),this.tree.$container.off(b),a(c).off(b)},_bind:function(){var a=this,b=this.options,c=this.tree,d=c._ns;this._unbind(),c.$container.on("focusin"+d+" focusout"+d,function(a){var b=w.getNode(a),d="focusin"===a.type;b?c._callHook("nodeSetFocus",c._makeHookContext(b,a),d):c._callHook("treeSetFocus",c,d)}).on("selectstart"+d,"span.fancytree-title",function(a){a.preventDefault()}).on("keydown"+d,function(a){if(b.disabled||b.keyboard===!1)return!0;var d,e=c.focusNode,f=c._makeHookContext(e||c,a),g=c.phase;try{return c.phase="userEvent",d=e?c._triggerNodeEvent("keydown",e,a):c._triggerTreeEvent("keydown",a),"preventNav"===d?d=!0:d!==!1&&(d=c._callHook("nodeKeydown",f)),d}finally{c.phase=g}}).on("mousedown"+d+" dblclick"+d,function(c){if(b.disabled)return!0;var d,e=w.getEventTarget(c),f=e.node,g=a.tree,h=g.phase;if(!f)return!0;d=g._makeHookContext(f,c);try{switch(g.phase="userEvent",c.type){case"mousedown":return d.targetType=e.type,f.isPagingNode()?g._triggerNodeEvent("clickPaging",d,c)===!0:g._triggerNodeEvent("click",d,c)!==!1&&g._callHook("nodeClick",d);case"dblclick":return d.targetType=e.type,g._triggerNodeEvent("dblclick",d,c)!==!1&&g._callHook("nodeDblclick",d)}}finally{g.phase=h}})},getActiveNode:function(){return this.tree.activeNode},getNodeByKey:function(a){return this.tree.getNodeByKey(a)},getRootNode:function(){return this.tree.rootNode},getTree:function(){return this.tree}}),w=a.ui.fancytree,a.extend(a.ui.fancytree,{version:"2.22.1",buildType: "production",debugLevel: 1,_nextId:1,_nextNodeKey:1,_extensions:{},_FancytreeClass:t,_FancytreeNodeClass:s,jquerySupports:{positionMyOfs:h(a.ui.version,1,9)},assert:function(a,b){return e(a,b)},debounce:function(a,b,c,d){var e;return 3===arguments.length&&"boolean"!=typeof c&&(d=c,c=!1),function(){var f=arguments;d=d||this,c&&!e&&b.apply(d,f),clearTimeout(e),e=setTimeout(function(){c||b.apply(d,f),e=null},a)}},debug:function(b){a.ui.fancytree.debugLevel>=2&&f("log",arguments)},error:function(a){f("error",arguments)},escapeHtml:o,fixPositionOptions:function(b){if((b.offset||(""+b.my+b.at).indexOf("%")>=0)&&a.error("expected new position syntax (but '%' is not supported)"),!a.ui.fancytree.jquerySupports.positionMyOfs){var c=/(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(b.my),d=/(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(b.at),e=(c[2]?+c[2]:0)+(d[2]?+d[2]:0),f=(c[4]?+c[4]:0)+(d[4]?+d[4]:0);b=a.extend({},b,{my:c[1]+" "+c[3],at:d[1]+" "+d[3]}),(e||f)&&(b.offset=""+e+" "+f)}return b},getEventTargetType:function(a){return this.getEventTarget(a).type},getEventTarget:function(b){var c=b&&b.target?b.target.className:"",e={node:this.getNode(b.target),type:d};return/\bfancytree-title\b/.test(c)?e.type="title":/\bfancytree-expander\b/.test(c)?e.type=e.node.hasChildren()===!1?"prefix":"expander":/\bfancytree-checkbox\b/.test(c)||/\bfancytree-radio\b/.test(c)?e.type="checkbox":/\bfancytree-icon\b/.test(c)?e.type="icon":/\bfancytree-node\b/.test(c)?e.type="title":b&&b.target&&a(b.target).closest(".fancytree-title").length&&(e.type="title"),e},getNode:function(a){if(a instanceof s)return a;for(a instanceof jQuery?a=a[0]:a.originalEvent!==d&&(a=a.target);a;){if(a.ftnode)return a.ftnode;a=a.parentNode}return null},getTree:function(b){var c;return b instanceof t?b:(b===d&&(b=0),"number"==typeof b?b=a(".fancytree-container").eq(b):"string"==typeof b?b=a(b).eq(0):b.selector!==d?b=b.eq(0):b.originalEvent!==d&&(b=a(b.target)),b=b.closest(":ui-fancytree"),c=b.data("ui-fancytree")||b.data("fancytree"),c?c.tree:null)},evalOption:function(b,c,d,e,f){var g,h,i=c.tree,j=e[b],k=d[b];return a.isFunction(j)?(g={node:c,tree:i,widget:i.widget,options:i.widget.options},h=j.call(i,{type:b},g),null==h&&(h=k)):h=null!=k?k:j,null==h&&(h=f),h},eventToString:function(a){var b=a.which,c=a.type,d=[];return a.altKey&&d.push("alt"),a.ctrlKey&&d.push("ctrl"),a.metaKey&&d.push("meta"),a.shiftKey&&d.push("shift"),"click"===c||"dblclick"===c?d.push(E[a.button]+c):C[b]||d.push(D[b]||String.fromCharCode(b).toLowerCase()),d.join("+")},info:function(b){a.ui.fancytree.debugLevel>=1&&f("info",arguments)},keyEventToString:function(a){return this.warn("keyEventToString() is deprecated: use eventToString()"),this.eventToString(a)},overrideMethod:function(b,c,d){var e,f=b[c]||a.noop;b[c]=function(){try{return e=this._super,this._super=f,d.apply(this,arguments)}finally{this._super=e}}},parseHtml:function(b){var c,e,f,g,h,i,j,k,l=b.find(">li"),m=[];return l.each(function(){var l,o,p=a(this),q=p.find(">span:first",this),r=q.length?null:p.find(">a:first"),s={tooltip:null,data:{}};for(q.length?s.title=q.html():r&&r.length?(s.title=r.html(),s.data.href=r.attr("href"),s.data.target=r.attr("target"),s.tooltip=r.attr("title")):(s.title=p.html(),h=s.title.search(/<ul/i),h>=0&&(s.title=s.title.substring(0,h))),s.title=a.trim(s.title),g=0,i=F.length;g<i;g++)s[F[g]]=d;for(c=this.className.split(" "),f=[],g=0,i=c.length;g<i;g++)e=c[g],G[e]?s[e]=!0:f.push(e);if(s.extraClasses=f.join(" "),j=p.attr("title"),j&&(s.tooltip=j),j=p.attr("id"),j&&(s.key=j),l=n(p),l&&!a.isEmptyObject(l)){for(o in J)l.hasOwnProperty(o)&&(l[J[o]]=l[o],delete l[o]);for(g=0,i=H.length;g<i;g++)j=H[g],k=l[j],null!=k&&(delete l[j],s[j]=k);a.extend(s.data,l)}b=p.find(">ul:first"),b.length?s.children=a.ui.fancytree.parseHtml(b):s.children=s.lazy?d:null,m.push(s)}),m},registerExtension:function(b){e(null!=b.name,"extensions must have a `name` property."),e(null!=b.version,"extensions must have a `version` property."),a.ui.fancytree._extensions[b.name]=b},unescapeHtml:function(a){var b=c.createElement("div");return b.innerHTML=a,0===b.childNodes.length?"":b.childNodes[0].nodeValue},warn:function(a){f("warn",arguments)}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.childcounter.min.js' */
!function(a,b){"use strict";a.ui.fancytree._FancytreeClass.prototype.countSelected=function(a){var b=this;b.options;return b.getSelectedNodes(a).length},a.ui.fancytree._FancytreeNodeClass.prototype.updateCounters=function(){var b=this,c=a("span.fancytree-childcounter",b.span),d=b.tree.options.childcounter,e=b.countChildren(d.deep);b.data.childCounter=e,!e&&d.hideZeros||b.isExpanded()&&d.hideExpanded?c.remove():(c.length||(c=a("<span class='fancytree-childcounter'/>").appendTo(a("span.fancytree-icon",b.span))),c.text(e)),!d.deep||b.isTopLevel()||b.isRoot()||b.parent.updateCounters()},a.ui.fancytree.prototype.widgetMethod1=function(a){this.tree;return a},a.ui.fancytree.registerExtension({name:"childcounter",version:"2.22.1",options:{deep:!0,hideZeros:!0,hideExpanded:!1},foo:42,_appendCounter:function(a){},treeInit:function(a){a.options,a.options.childcounter;this._superApply(arguments),this.$container.addClass("fancytree-ext-childcounter")},treeDestroy:function(a){this._superApply(arguments)},nodeRenderTitle:function(b,c){var d=b.node,e=b.options.childcounter,f=null==d.data.childCounter?d.countChildren(e.deep):+d.data.childCounter;this._super(b,c),!f&&e.hideZeros||d.isExpanded()&&e.hideExpanded||a("span.fancytree-icon",d.span).append(a("<span class='fancytree-childcounter'/>").text(f))},nodeSetExpanded:function(a,b,c){var d=a.tree;a.node;return this._superApply(arguments).always(function(){d.nodeRenderTitle(a)})}})}(jQuery);

/*! Extension 'jquery.fancytree.clones.min.js' */
!function(a,b,c,d){"use strict";function e(b,c){b||(c=c?": "+c:"",a.error("Assertion failed"+c))}function f(a,b){var c;for(c=a.length-1;c>=0;c--)if(a[c]===b)return a.splice(c,1),!0;return!1}function g(a,b,c){for(var d,e,f=3&a.length,g=a.length-f,h=c,i=3432918353,j=461845907,k=0;k<g;)e=255&a.charCodeAt(k)|(255&a.charCodeAt(++k))<<8|(255&a.charCodeAt(++k))<<16|(255&a.charCodeAt(++k))<<24,++k,e=(65535&e)*i+(((e>>>16)*i&65535)<<16)&4294967295,e=e<<15|e>>>17,e=(65535&e)*j+(((e>>>16)*j&65535)<<16)&4294967295,h^=e,h=h<<13|h>>>19,d=5*(65535&h)+((5*(h>>>16)&65535)<<16)&4294967295,h=(65535&d)+27492+(((d>>>16)+58964&65535)<<16);switch(e=0,f){case 3:e^=(255&a.charCodeAt(k+2))<<16;case 2:e^=(255&a.charCodeAt(k+1))<<8;case 1:e^=255&a.charCodeAt(k),e=(65535&e)*i+(((e>>>16)*i&65535)<<16)&4294967295,e=e<<15|e>>>17,e=(65535&e)*j+(((e>>>16)*j&65535)<<16)&4294967295,h^=e}return h^=a.length,h^=h>>>16,h=2246822507*(65535&h)+((2246822507*(h>>>16)&65535)<<16)&4294967295,h^=h>>>13,h=3266489909*(65535&h)+((3266489909*(h>>>16)&65535)<<16)&4294967295,h^=h>>>16,b?("0000000"+(h>>>0).toString(16)).substr(-8):h>>>0}function h(b){var c,d=a.map(b.getParentList(!1,!0),function(a){return a.refKey||a.key});return d=d.join("/"),c="id_"+g(d,!0)}a.ui.fancytree._FancytreeNodeClass.prototype.getCloneList=function(b){var c,d=this.tree,e=d.refMap[this.refKey]||null,f=d.keyMap;return e&&(c=this.key,b?e=a.map(e,function(a){return f[a]}):(e=a.map(e,function(a){return a===c?null:f[a]}),e.length<1&&(e=null))),e},a.ui.fancytree._FancytreeNodeClass.prototype.isClone=function(){var a=this.refKey||null,b=a&&this.tree.refMap[a]||null;return!!(b&&b.length>1)},a.ui.fancytree._FancytreeNodeClass.prototype.reRegister=function(b,c){b=null==b?null:""+b,c=null==c?null:""+c;var d=this.tree,e=this.key,f=this.refKey,g=d.keyMap,h=d.refMap,i=h[f]||null,j=!1;return null!=b&&b!==this.key&&(g[b]&&a.error("[ext-clones] reRegister("+b+"): already exists: "+this),delete g[e],g[b]=this,i&&(h[f]=a.map(i,function(a){return a===e?b:a})),this.key=b,j=!0),null!=c&&c!==this.refKey&&(i&&(1===i.length?delete h[f]:h[f]=a.map(i,function(a){return a===e?null:a})),h[c]?h[c].append(b):h[c]=[this.key],this.refKey=c,j=!0),j},a.ui.fancytree._FancytreeNodeClass.prototype.setRefKey=function(a){return this.reRegister(null,a)},a.ui.fancytree._FancytreeClass.prototype.getNodesByRef=function(b,c){var d=this.keyMap,e=this.refMap[b]||null;return e&&(e=c?a.map(e,function(a){var b=d[a];return b.isDescendantOf(c)?b:null}):a.map(e,function(a){return d[a]}),e.length<1&&(e=null)),e},a.ui.fancytree._FancytreeClass.prototype.changeRefKey=function(a,b){var c,d,e=this.keyMap,f=this.refMap[a]||null;if(f){for(c=0;c<f.length;c++)d=e[f[c]],d.refKey=b;delete this.refMap[a],this.refMap[b]=f}},a.ui.fancytree.registerExtension({name:"clones",version:"2.22.1",options:{highlightActiveClones:!0,highlightClones:!1},treeCreate:function(a){this._superApply(arguments),a.tree.refMap={},a.tree.keyMap={}},treeInit:function(a){this.$container.addClass("fancytree-ext-clones"),e(null==a.options.defaultKey),a.options.defaultKey=function(a){return h(a)},this._superApply(arguments)},treeClear:function(a){return a.tree.refMap={},a.tree.keyMap={},this._superApply(arguments)},treeRegisterNode:function(b,c,d){var g,h,i=b.tree,j=i.keyMap,k=i.refMap,l=d.key,m=d&&null!=d.refKey?""+d.refKey:null;return d.isStatusNode()?this._super(b,c,d):(c?(null!=j[d.key]&&a.error("clones.treeRegisterNode: node.key already exists: "+d),j[l]=d,m&&(g=k[m],g?(g.push(l),2===g.length&&b.options.clones.highlightClones&&j[g[0]].renderStatus()):k[m]=[l])):(null==j[l]&&a.error("clones.treeRegisterNode: node.key not registered: "+d.key),delete j[l],m&&(g=k[m],g&&(h=g.length,h<=1?(e(1===h),e(g[0]===l),delete k[m]):(f(g,l),2===h&&b.options.clones.highlightClones&&j[g[0]].renderStatus())))),this._super(b,c,d))},nodeRenderStatus:function(b){var c,d,e=b.node;return d=this._super(b),b.options.clones.highlightClones&&(c=a(e[b.tree.statusClassPropName]),c.length&&e.isClone()&&c.addClass("fancytree-clone")),d},nodeSetActive:function(b,c){var d,e=b.tree.statusClassPropName,f=b.node;return d=this._superApply(arguments),b.options.clones.highlightActiveClones&&f.isClone()&&a.each(f.getCloneList(!0),function(b,d){a(d[e]).toggleClass("fancytree-active-clone",c!==!1)}),d}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.dnd.min.js' */
!function(a,b,c,d){"use strict";function e(a){return 0===a?"":a>0?"+"+a:""+a}function f(){h||(a.ui.plugin.add("draggable","connectToFancytree",{start:function(b,c){var d=a(this).data("ui-draggable")||a(this).data("draggable"),e=c.helper.data("ftSourceNode")||null;if(e)return d.offset.click.top=-2,d.offset.click.left=16,e.tree.ext.dnd._onDragEvent("start",e,null,b,c,d)},drag:function(b,c){var d,e,f,g=a(this).data("ui-draggable")||a(this).data("draggable"),h=c.helper.data("ftSourceNode")||null,i=c.helper.data("ftTargetNode")||null,j=a.ui.fancytree.getNode(b.target),k=h&&h.tree.options.dnd;return b.target&&!j&&(e=a(b.target).closest("div.fancytree-drag-helper,#fancytree-drop-marker").length>0)?(f=h||i||a.ui.fancytree,void f.debug("Drag event over helper: ignored.")):(c.helper.data("ftTargetNode",j),k&&k.updateHelper&&(d=h.tree._makeHookContext(h,b,{otherNode:j,ui:c,draggable:g,dropMarker:a("#fancytree-drop-marker")}),k.updateHelper.call(h.tree,h,d)),i&&i!==j&&i.tree.ext.dnd._onDragEvent("leave",i,h,b,c,g),void(j&&j.tree.options.dnd.dragDrop&&(j===i?j.tree.ext.dnd._onDragEvent("over",j,h,b,c,g):(j.tree.ext.dnd._onDragEvent("enter",j,h,b,c,g),j.tree.ext.dnd._onDragEvent("over",j,h,b,c,g)))))},stop:function(b,c){var d,e=a(this).data("ui-draggable")||a(this).data("draggable"),f=c.helper.data("ftSourceNode")||null,g=c.helper.data("ftTargetNode")||null,h="mouseup"===b.type&&1===b.which;h||(d=f||g||a.ui.fancytree,d.debug("Drag was cancelled")),g&&(h&&g.tree.ext.dnd._onDragEvent("drop",g,f,b,c,e),g.tree.ext.dnd._onDragEvent("leave",g,f,b,c,e)),f&&f.tree.ext.dnd._onDragEvent("stop",f,null,b,c,e)}}),h=!0)}function g(b){var c=b.options.dnd||null,d=b.options.glyph||null;c&&f(),c&&c.dragStart&&b.widget.element.draggable(a.extend({addClasses:!1,appendTo:b.$container,containment:!1,delay:0,distance:4,revert:!1,scroll:!0,scrollSpeed:7,scrollSensitivity:10,connectToFancytree:!0,helper:function(b){var c,e,f,g=a.ui.fancytree.getNode(b.target);return g?(f=g.tree.options.dnd,e=a(g.span),c=a("<div class='fancytree-drag-helper'><span class='fancytree-drag-helper-img' /></div>").css({zIndex:3,position:"relative"}).append(e.find("span.fancytree-title").clone()),c.data("ftSourceNode",g),d&&c.find(".fancytree-drag-helper-img").addClass(d.map.dragHelper),f.initHelper&&f.initHelper.call(g.tree,g,{node:g,tree:g.tree,originalEvent:b,ui:{helper:c}}),c):"<div>ERROR?: helper requested but sourceNode not found</div>"},start:function(a,b){var c=b.helper.data("ftSourceNode");return!!c}},b.options.dnd.draggable)),c&&c.dragDrop&&b.widget.element.droppable(a.extend({addClasses:!1,tolerance:"intersect",greedy:!1},b.options.dnd.droppable))}var h=!1,i="fancytree-drop-accept",j="fancytree-drop-after",k="fancytree-drop-before",l="fancytree-drop-over",m="fancytree-drop-reject",n="fancytree-drop-target";a.ui.fancytree.registerExtension({name:"dnd",version:"2.22.1",options:{autoExpandMS:1e3,draggable:null,droppable:null,focusOnClick:!1,preventVoidMoves:!0,preventRecursiveMoves:!0,smartRevert:!0,dropMarkerOffsetX:-24,dropMarkerInsertOffsetX:-16,dragStart:null,dragStop:null,initHelper:null,updateHelper:null,dragEnter:null,dragOver:null,dragExpand:null,dragDrop:null,dragLeave:null},treeInit:function(b){var c=b.tree;this._superApply(arguments),c.options.dnd.dragStart&&c.$container.on("mousedown",function(c){if(b.options.dnd.focusOnClick){var d=a.ui.fancytree.getNode(c);d&&d.debug("Re-enable focus that was prevented by jQuery UI draggable."),setTimeout(function(){a(c.target).closest(":tabbable").focus()},10)}}),g(c)},_setDndStatus:function(b,c,d,f,g){var h,o="center",p=this._local,q=this.options.dnd,r=this.options.glyph,s=b?a(b.span):null,t=a(c.span),u=t.find("span.fancytree-title");if(p.$dropMarker||(p.$dropMarker=a("<div id='fancytree-drop-marker'></div>").hide().css({"z-index":1e3}).prependTo(a(this.$div).parent()),r&&p.$dropMarker.addClass(r.map.dropMarker)),"after"===f||"before"===f||"over"===f){switch(h=q.dropMarkerOffsetX||0,f){case"before":o="top",h+=q.dropMarkerInsertOffsetX||0;break;case"after":o="bottom",h+=q.dropMarkerInsertOffsetX||0}p.$dropMarker.toggleClass(j,"after"===f).toggleClass(l,"over"===f).toggleClass(k,"before"===f).show().position(a.ui.fancytree.fixPositionOptions({my:"left"+e(h)+" center",at:"left "+o,of:u}))}else p.$dropMarker.hide();s&&s.toggleClass(i,g===!0).toggleClass(m,g===!1),t.toggleClass(n,"after"===f||"before"===f||"over"===f).toggleClass(j,"after"===f).toggleClass(k,"before"===f).toggleClass(i,g===!0).toggleClass(m,g===!1),d.toggleClass(i,g===!0).toggleClass(m,g===!1)},_onDragEvent:function(b,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s=this.options,t=s.dnd,u=this._makeHookContext(e,g,{otherNode:f,ui:h,draggable:i}),v=null,w=this,x=a(e.span);switch(t.smartRevert&&(i.options.revert="invalid"),b){case"start":e.isStatusNode()?v=!1:t.dragStart&&(v=t.dragStart(e,u)),v===!1?(this.debug("tree.dragStart() cancelled"),h.helper.trigger("mouseup").hide()):(t.smartRevert&&(m=e[u.tree.nodeContainerAttrName].getBoundingClientRect(),l=a(i.options.appendTo)[0].getBoundingClientRect(),i.originalPosition.left=Math.max(0,m.left-l.left),i.originalPosition.top=Math.max(0,m.top-l.top)),x.addClass("fancytree-drag-source"),a(c).on("keydown.fancytree-dnd,mousedown.fancytree-dnd",function(b){"keydown"===b.type&&b.which===a.ui.keyCode.ESCAPE?w.ext.dnd._cancelDrag():"mousedown"===b.type&&w.ext.dnd._cancelDrag()}));break;case"enter":r=(!t.preventRecursiveMoves||!e.isDescendantOf(f))&&(t.dragEnter?t.dragEnter(e,u):null),v=!!r&&(a.isArray(r)?{over:a.inArray("over",r)>=0,before:a.inArray("before",r)>=0,after:a.inArray("after",r)>=0}:{over:r===!0||"over"===r,before:r===!0||"before"===r,after:r===!0||"after"===r}),h.helper.data("enterResponse",v);break;case"over":p=h.helper.data("enterResponse"),q=null,p===!1||("string"==typeof p?q=p:(k=x.offset(),n={x:g.pageX-k.left,y:g.pageY-k.top},o={x:n.x/x.width(),y:n.y/x.height()},p.after&&o.y>.75?q="after":!p.over&&p.after&&o.y>.5?q="after":p.before&&o.y<=.25?q="before":!p.over&&p.before&&o.y<=.5?q="before":p.over&&(q="over"),t.preventVoidMoves&&(e===f?(this.debug("    drop over source node prevented"),q=null):"before"===q&&f&&e===f.getNextSibling()?(this.debug("    drop after source node prevented"),q=null):"after"===q&&f&&e===f.getPrevSibling()?(this.debug("    drop before source node prevented"),q=null):"over"===q&&f&&f.parent===e&&f.isLastSibling()&&(this.debug("    drop last child over own parent prevented"),q=null)),h.helper.data("hitMode",q))),"before"===q||"after"===q||!t.autoExpandMS||e.hasChildren()===!1||e.expanded||t.dragExpand&&t.dragExpand(e,u)===!1||e.scheduleAction("expand",t.autoExpandMS),q&&t.dragOver&&(u.hitMode=q,v=t.dragOver(e,u)),j=v!==!1&&null!==q,t.smartRevert&&(i.options.revert=!j),this._local._setDndStatus(f,e,h.helper,q,j);break;case"drop":q=h.helper.data("hitMode"),q&&t.dragDrop&&(u.hitMode=q,t.dragDrop(e,u));break;case"leave":e.scheduleAction("cancel"),h.helper.data("enterResponse",null),h.helper.data("hitMode",null),this._local._setDndStatus(f,e,h.helper,"out",d),t.dragLeave&&t.dragLeave(e,u);break;case"stop":x.removeClass("fancytree-drag-source"),a(c).off(".fancytree-dnd"),t.dragStop&&t.dragStop(e,u);break;default:a.error("Unsupported drag event: "+b)}return v},_cancelDrag:function(){var b=a.ui.ddmanager.current;b&&b.cancel()}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.dnd5.min.js' */
!function(a,b,c,d){"use strict";function e(a){return 0===a?"":a>0?"+"+a:""+a}function f(b){var c;return!!b&&(c=a.isPlainObject(b)?{over:!!b.over,before:!!b.before,after:!!b.after}:a.isArray(b)?{over:a.inArray("over",b)>=0,before:a.inArray("before",b)>=0,after:a.inArray("after",b)>=0}:{over:b===!0||"over"===b,before:b===!0||"before"===b,after:b===!0||"after"===b},0!==Object.keys(c).length&&c)}function g(d,e){var f,g,h,i=d.options.dnd5,j=d.$scrollParent[0],k=i.scrollSensitivity,l=i.scrollSpeed,m=0;return j!==c&&"HTML"!==j.tagName?(f=d.$scrollParent.offset(),g=j.scrollTop,f.top+j.offsetHeight-e.pageY<k?(h=j.scrollHeight-d.$scrollParent.innerHeight()-g,h>0&&(j.scrollTop=m=g+l)):g>0&&e.pageY-f.top<k&&(j.scrollTop=m=g-l)):(g=a(c).scrollTop(),g>0&&e.pageY-g<k?(m=g-l,a(c).scrollTop(m)):a(b).height()-(e.pageY-g)<k&&(m=g+l,a(c).scrollTop(m))),m&&d.debug("autoScroll: "+m+"px"),m}function h(b,c){if(c.options.dnd5.scroll&&g(c.tree,b),!c.node)return c.tree.warn("Ignore dragover for non-node"),u;var d,f,h,i=null,j=c.tree,q=j.options,s=q.dnd5,v=c.node,w=c.otherNode,x="center",y=a(v.span),z=y.find("span.fancytree-title");if(t===!1)return j.warn("Ignore dragover, since dragenter returned false"),!1;if("string"==typeof t?a.error("assert failed: dragenter returned string"):(f=y.offset(),h=(b.pageY-f.top)/y.height(),t.after&&h>.75?i="after":!t.over&&t.after&&h>.5?i="after":t.before&&h<=.25?i="before":!t.over&&t.before&&h<=.5?i="before":t.over&&(i="over"),s.preventVoidMoves&&(v===w?(v.debug("drop over source node prevented"),i=null):"before"===i&&w&&v===w.getNextSibling()?(v.debug("drop after source node prevented"),i=null):"after"===i&&w&&v===w.getPrevSibling()?(v.debug("drop before source node prevented"),i=null):"over"===i&&w&&w.parent===v&&w.isLastSibling()&&(v.debug("drop last child over own parent prevented"),i=null))),c.hitMode=i,i&&s.dragOver&&(s.dragOver(v,c),i=c.hitMode),u=i,"after"===i||"before"===i||"over"===i){switch(d=s.dropMarkerOffsetX||0,i){case"before":x="top",d+=s.dropMarkerInsertOffsetX||0;break;case"after":x="bottom",d+=s.dropMarkerInsertOffsetX||0}r.toggleClass(l,"after"===i).toggleClass(n,"over"===i).toggleClass(m,"before"===i).show().position(a.ui.fancytree.fixPositionOptions({my:"left"+e(d)+" center",at:"left "+x,of:z}))}else r.hide();return a(v.span).toggleClass(p,"after"===i||"before"===i||"over"===i).toggleClass(l,"after"===i).toggleClass(m,"before"===i).toggleClass(k,"over"===i).toggleClass(o,i===!1),i}var i="fancytree-drag-source",j="fancytree-drag-remove",k="fancytree-drop-accept",l="fancytree-drop-after",m="fancytree-drop-before",n="fancytree-drop-over",o="fancytree-drop-reject",p="fancytree-drop-target",q="application/x-fancytree-node",r=null,s=null,t=null,u=null;a.ui.fancytree.registerExtension({name:"dnd5",version:"2.22.1",options:{autoExpandMS:1500,setTextTypeJson:!1,preventForeignNodes:!1,preventNonNodes:!1,preventRecursiveMoves:!0,preventVoidMoves:!0,scroll:!0,scrollSensitivity:20,scrollSpeed:5,dropMarkerOffsetX:-24,dropMarkerInsertOffsetX:-16,dragStart:null,dragDrag:a.noop,dragEnd:a.noop,dragEnter:null,dragOver:a.noop,dragExpand:a.noop,dragDrop:a.noop,dragLeave:a.noop},treeInit:function(b){var c=b.tree,e=b.options,g=e.dnd5,l=a.ui.fancytree.getNode;a.inArray("dnd",e.extensions)>=0&&a.error("Extensions 'dnd' and 'dnd5' are mutually exclusive."),g.dragStop&&a.error("dragStop is not used by ext-dnd5. Use dragEnd instead."),g.dragStart&&a.ui.fancytree.overrideMethod(b.options,"createNode",function(a,b){this._super.apply(this,arguments),b.node.span.draggable=!0}),this._superApply(arguments),this.$container.addClass("fancytree-ext-dnd5"),this.$scrollParent=this.$container.children(":first").scrollParent(),r=a("#fancytree-drop-marker"),r.length||(r=a("<div id='fancytree-drop-marker'></div>").hide().css({"z-index":1e3,"pointer-events":"none"}).prependTo("body")),g.dragStart&&c.$container.on("dragstart drag dragend",function(b){var e,f=l(b),h=b.dataTransfer||b.originalEvent.dataTransfer,k="move"===h.dropEffect,m=f?a(f.span):null,n={node:f,tree:c,options:c.options,originalEvent:b,dataTransfer:h,isCancelled:d};switch(b.type){case"dragstart":a(f.span).addClass(i),s=f,e=JSON.stringify(f.toDict());try{h.setData(q,e),h.setData("text/html",a(f.span).html()),h.setData("text/plain",f.title)}catch(o){c.warn("Could not set data (IE only accepts 'text') - "+o)}return g.setTextTypeJson?h.setData("text",e):h.setData("text",f.title),h.effectAllowed="all",h.setDragImage&&h.setDragImage(a(f.span).find(".fancytree-title")[0],-10,-10),g.dragStart(f,n)!==!1;case"drag":m.toggleClass(j,k),g.dragDrag(f,n);break;case"dragend":a(f.span).removeClass(i+" "+j),s=null,t=null,n.isCancelled="none"===h.dropEffect,r.hide(),g.dragEnd(f,n)}}),g.dragEnter&&c.$container.on("dragenter dragover dragleave drop",function(b){var e,i,j,m,p=null,v=l(b),w=b.dataTransfer||b.originalEvent.dataTransfer,x={node:v,tree:c,options:c.options,hitMode:t,originalEvent:b,dataTransfer:w,otherNode:s||null,otherNodeData:null,dropEffect:d,isCancelled:d};switch(b.type){case"dragenter":if(!v){c.debug("Ignore non-node "+b.type+": "+b.target.tagName+"."+b.target.className),t=!1;break}if(a(v.span).addClass(n).removeClass(k+" "+o),g.preventNonNodes&&!i){v.debug("Reject dropping a non-node"),t=!1;break}if(g.preventForeignNodes&&(!s||s.tree!==v.tree)){v.debug("Reject dropping a foreign node"),t=!1;break}setTimeout(function(){!g.autoExpandMS||v.hasChildren()===!1||v.expanded||g.dragExpand&&g.dragExpand(v,x)===!1||v.scheduleAction("expand",g.autoExpandMS)},0),r.show(),g.preventRecursiveMoves&&v.isDescendantOf(x.otherNode)?m=!1:(j=g.dragEnter(v,x),m=f(j)),t=m,p=m&&(m.over||m.before||m.after);break;case"dragover":u=h(b,x),p=!!u;break;case"dragleave":if(!v){c.debug("Ignore non-node "+b.type+": "+b.target.tagName+"."+b.target.className);break}if(!a(v.span).hasClass(n)){v.debug("Ignore dragleave (multi)");break}a(v.span).removeClass(n+" "+k+" "+o),v.scheduleAction("cancel"),g.dragLeave(v,x),r.hide();break;case"drop":if(a.inArray(q,w.types)>=0&&(i=w.getData(q),c.info(b.type+": getData('application/x-fancytree-node'): '"+i+"'")),i||(i=w.getData("text"),c.info(b.type+": getData('text'): '"+i+"'")),i)try{e=JSON.parse(i),e.title!==d&&(x.otherNodeData=e)}catch(y){}c.debug(b.type+": nodeData: '"+i+"', otherNodeData: ",x.otherNodeData),a(v.span).removeClass(n+" "+k+" "+o),r.hide(),x.hitMode=u,x.dropEffect=w.dropEffect,x.isCancelled="none"===x.dropEffect,g.dragDrop(v,x),b.preventDefault()}if(p)return b.preventDefault(),!1})}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.edit.min.js' */
!function(a,b,c,d){"use strict";var e=/Mac/.test(navigator.platform),f=a.ui.fancytree.escapeHtml,g=a.ui.fancytree.unescapeHtml;a.ui.fancytree._FancytreeNodeClass.prototype.editStart=function(){var b,d=this,e=this.tree,f=e.ext.edit,h=e.options.edit,i=a(".fancytree-title",d.span),j={node:d,tree:e,options:e.options,isNew:a(d[e.statusClassPropName]).hasClass("fancytree-edit-new"),orgTitle:d.title,input:null,dirty:!1};return h.beforeEdit.call(d,{type:"beforeEdit"},j)!==!1&&(a.ui.fancytree.assert(!f.currentNode,"recursive edit"),f.currentNode=this,f.eventData=j,e.widget._unbind(),a(c).on("mousedown.fancytree-edit",function(b){a(b.target).hasClass("fancytree-edit-input")||d.editEnd(!0,b)}),b=a("<input />",{"class":"fancytree-edit-input",type:"text",value:e.options.escapeTitles?j.orgTitle:g(j.orgTitle)}),f.eventData.input=b,null!=h.adjustWidthOfs&&b.width(i.width()+h.adjustWidthOfs),null!=h.inputCss&&b.css(h.inputCss),i.html(b),b.focus().change(function(a){b.addClass("fancytree-edit-dirty")}).keydown(function(b){switch(b.which){case a.ui.keyCode.ESCAPE:d.editEnd(!1,b);break;case a.ui.keyCode.ENTER:return d.editEnd(!0,b),!1}b.stopPropagation()}).blur(function(a){return d.editEnd(!0,a)}),void h.edit.call(d,{type:"edit"},j))},a.ui.fancytree._FancytreeNodeClass.prototype.editEnd=function(b,d){var e,g=this,h=this.tree,i=h.ext.edit,j=i.eventData,k=h.options.edit,l=a(".fancytree-title",g.span),m=l.find("input.fancytree-edit-input");return k.trim&&m.val(a.trim(m.val())),e=m.val(),j.dirty=e!==g.title,j.originalEvent=d,b===!1?j.save=!1:j.isNew?j.save=""!==e:j.save=j.dirty&&""!==e,k.beforeClose.call(g,{type:"beforeClose"},j)!==!1&&((!j.save||k.save.call(g,{type:"save"},j)!==!1)&&(m.removeClass("fancytree-edit-dirty").off(),a(c).off(".fancytree-edit"),j.save?(g.setTitle(h.options.escapeTitles?e:f(e)),g.setFocus()):j.isNew?(g.remove(),g=j.node=null,i.relatedNode.setFocus()):(g.renderTitle(),g.setFocus()),i.eventData=null,i.currentNode=null,i.relatedNode=null,h.widget._bind(),a(h.$container).focus(),j.input=null,k.close.call(g,{type:"close"},j),!0))},a.ui.fancytree._FancytreeNodeClass.prototype.editCreateNode=function(b,c){var d,e=this.tree,f=this;return b=b||"child",null==c?c={title:""}:"string"==typeof c?c={title:c}:a.ui.fancytree.assert(a.isPlainObject(c)),"child"!==b||this.isExpanded()||this.hasChildren()===!1?(d=this.addNode(c,b),d.match=!0,a(d[e.statusClassPropName]).removeClass("fancytree-hide").addClass("fancytree-match"),void d.makeVisible().done(function(){a(d[e.statusClassPropName]).addClass("fancytree-edit-new"),f.tree.ext.edit.relatedNode=f,d.editStart()})):void this.setExpanded().done(function(){f.editCreateNode(b,c)})},a.ui.fancytree._FancytreeClass.prototype.isEditing=function(){return this.ext.edit?this.ext.edit.currentNode:null},a.ui.fancytree._FancytreeNodeClass.prototype.isEditing=function(){return!!this.tree.ext.edit&&this.tree.ext.edit.currentNode===this},a.ui.fancytree.registerExtension({name:"edit",version:"2.22.1",options:{adjustWidthOfs:4,allowEmpty:!1,inputCss:{minWidth:"3em"},triggerStart:["f2","shift+click","mac+enter"],trim:!0,beforeClose:a.noop,beforeEdit:a.noop,close:a.noop,edit:a.noop,save:a.noop},currentNode:null,treeInit:function(a){this._superApply(arguments),this.$container.addClass("fancytree-ext-edit")},nodeClick:function(b){return a.inArray("shift+click",b.options.edit.triggerStart)>=0&&b.originalEvent.shiftKey?(b.node.editStart(),!1):this._superApply(arguments)},nodeDblclick:function(b){return a.inArray("dblclick",b.options.edit.triggerStart)>=0?(b.node.editStart(),!1):this._superApply(arguments)},nodeKeydown:function(b){switch(b.originalEvent.which){case 113:if(a.inArray("f2",b.options.edit.triggerStart)>=0)return b.node.editStart(),!1;break;case a.ui.keyCode.ENTER:if(a.inArray("mac+enter",b.options.edit.triggerStart)>=0&&e)return b.node.editStart(),!1}return this._superApply(arguments)}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.filter.min.js' */
!function(a,b,c,d){"use strict";function e(a){return(a+"").replace(/([.?*+\^\$\[\]\\(){}|-])/g,"\\$1")}function f(b){return b.indexOf(">")>=0?a("<div/>").html(b).text():b}var g="__not_found__",h=a.ui.fancytree.escapeHtml;a.ui.fancytree._FancytreeClass.prototype._applyFilterImpl=function(b,c,d){var i,j,k,l,m=0,n=this.options,o=n.escapeTitles,p=n.autoCollapse,q=a.extend({},n.filter,d),r="hide"===q.mode,s=!!q.leavesOnly&&!c;return"string"==typeof b&&(i=q.fuzzy?b.split("").reduce(function(a,b){return a+"[^"+b+"]*"+b}):e(b),k=new RegExp(".*"+i+".*","i"),l=new RegExp(e(b),"gi"),b=function(a){var b,c=o?a.title:f(a.title),d=!!k.test(c);return d&&q.highlight&&(b=o?h(a.title):c,a.titleWithHighlight=b.replace(l,function(a){return"<mark>"+a+"</mark>"})),d}),this.enableFilter=!0,this.lastFilterArgs=arguments,this.$div.addClass("fancytree-ext-filter"),r?this.$div.addClass("fancytree-ext-filter-hide"):this.$div.addClass("fancytree-ext-filter-dimm"),this.$div.toggleClass("fancytree-ext-filter-hide-expanders",!!q.hideExpanders),this.visit(function(a){delete a.match,delete a.titleWithHighlight,a.subMatchCount=0}),j=this.getRootNode()._findDirectChild(g),j&&j.remove(),n.autoCollapse=!1,this.visit(function(a){if(!s||null==a.children){var d=b(a),e=!1;if("skip"===d)return a.visit(function(a){a.match=!1},!0),"skip";d||!c&&"branch"!==d||!a.parent.match||(d=!0,e=!0),d&&(m++,a.match=!0,a.visitParents(function(a){a.subMatchCount+=1,!q.autoExpand||e||a.expanded||(a.setExpanded(!0,{noAnimation:!0,noEvents:!0,scrollIntoView:!1}),a._filterAutoExpanded=!0)}))}}),n.autoCollapse=p,0===m&&q.nodata&&r&&(j=q.nodata,a.isFunction(j)&&(j=j()),j===!0?j={}:"string"==typeof j&&(j={title:j}),j=a.extend({statusNodeType:"nodata",key:g,title:this.options.strings.noData},j),this.getRootNode().addNode(j).match=!0),this.render(),m},a.ui.fancytree._FancytreeClass.prototype.filterNodes=function(a,b){return"boolean"==typeof b&&(b={leavesOnly:b},this.warn("Fancytree.filterNodes() leavesOnly option is deprecated since 2.9.0 / 2015-04-19. Use opts.leavesOnly instead.")),this._applyFilterImpl(a,!1,b)},a.ui.fancytree._FancytreeClass.prototype.applyFilter=function(a){return this.warn("Fancytree.applyFilter() is deprecated since 2.1.0 / 2014-05-29. Use .filterNodes() instead."),this.filterNodes.apply(this,arguments)},a.ui.fancytree._FancytreeClass.prototype.filterBranches=function(a,b){return this._applyFilterImpl(a,!0,b)},a.ui.fancytree._FancytreeClass.prototype.clearFilter=function(){var b,c=this.getRootNode()._findDirectChild(g),d=this.options.escapeTitles,e=this.options.enhanceTitle;c&&c.remove(),this.visit(function(c){c.match&&c.span&&(b=a(c.span).find(">span.fancytree-title"),d?b.text(c.title):b.html(c.title),e&&e({type:"enhanceTitle"},{node:c,$title:b})),delete c.match,delete c.subMatchCount,delete c.titleWithHighlight,c.$subMatchBadge&&(c.$subMatchBadge.remove(),delete c.$subMatchBadge),c._filterAutoExpanded&&c.expanded&&c.setExpanded(!1,{noAnimation:!0,noEvents:!0,scrollIntoView:!1}),delete c._filterAutoExpanded}),this.enableFilter=!1,this.lastFilterArgs=null,this.$div.removeClass("fancytree-ext-filter fancytree-ext-filter-dimm fancytree-ext-filter-hide"),this.render()},a.ui.fancytree._FancytreeClass.prototype.isFilterActive=function(){return!!this.enableFilter},a.ui.fancytree._FancytreeNodeClass.prototype.isMatched=function(){return!(this.tree.enableFilter&&!this.match)},a.ui.fancytree.registerExtension({name:"filter",version:"2.22.1",options:{autoApply:!0,autoExpand:!1,counter:!0,fuzzy:!1,hideExpandedCounter:!0,hideExpanders:!1,highlight:!0,leavesOnly:!1,nodata:!0,mode:"dimm"},nodeLoadChildren:function(a,b){return this._superApply(arguments).done(function(){a.tree.enableFilter&&a.tree.lastFilterArgs&&a.options.filter.autoApply&&a.tree._applyFilterImpl.apply(a.tree,a.tree.lastFilterArgs)})},nodeSetExpanded:function(a,b,c){return delete a.node._filterAutoExpanded,!b&&a.options.filter.hideExpandedCounter&&a.node.$subMatchBadge&&a.node.$subMatchBadge.show(),this._superApply(arguments)},nodeRenderStatus:function(b){var c,d=b.node,e=b.tree,f=b.options.filter,g=a(d.span).find("span.fancytree-title"),h=a(d[e.statusClassPropName]),i=b.options.enhanceTitle,j=b.options.escapeTitles;return c=this._super(b),h.length&&e.enableFilter?(h.toggleClass("fancytree-match",!!d.match).toggleClass("fancytree-submatch",!!d.subMatchCount).toggleClass("fancytree-hide",!(d.match||d.subMatchCount)),!f.counter||!d.subMatchCount||d.isExpanded()&&f.hideExpandedCounter?d.$subMatchBadge&&d.$subMatchBadge.hide():(d.$subMatchBadge||(d.$subMatchBadge=a("<span class='fancytree-childcounter'/>"),a("span.fancytree-icon, span.fancytree-custom-icon",d.span).append(d.$subMatchBadge)),d.$subMatchBadge.show().text(d.subMatchCount)),!d.span||d.isEditing&&d.isEditing.call(d)||(d.titleWithHighlight?g.html(d.titleWithHighlight):j?g.text(d.title):g.html(d.title),i&&i({type:"enhanceTitle"},{node:d,$title:g})),c):c}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.glyph.min.js' */
!function(a,b,c,d){"use strict";function e(a,b){return a.map[b]}a.ui.fancytree.registerExtension({name:"glyph",version:"2.22.1",options:{map:{checkbox:"icon-check-empty",checkboxSelected:"icon-check",checkboxUnknown:"icon-check icon-muted",error:"icon-exclamation-sign",expanderClosed:"icon-caret-right",expanderLazy:"icon-angle-right",expanderOpen:"icon-caret-down",nodata:"icon-meh",noExpander:"",dragHelper:"icon-caret-right",dropMarker:"icon-caret-right",doc:"icon-file-alt",docOpen:"icon-file-alt",loading:"icon-refresh icon-spin",folder:"icon-folder-close-alt",folderOpen:"icon-folder-open-alt"}},treeInit:function(a){var b=a.tree;this._superApply(arguments),b.$container.addClass("fancytree-ext-glyph")},nodeRenderStatus:function(b){var c,d,f,g=b.node,h=a(g.span),i=b.options.glyph,j=i.map;return d=this._super(b),g.isRoot()?d:(f=h.children("span.fancytree-expander").get(0),f&&(c=g.expanded&&g.hasChildren()?"expanderOpen":g.isUndefined()?"expanderLazy":g.hasChildren()?"expanderClosed":"noExpander",f.className="fancytree-expander "+j[c]),f=g.tr?a("td",g.tr).find("span.fancytree-checkbox").get(0):h.children("span.fancytree-checkbox").get(0),f&&(c=g.selected?"checkboxSelected":g.partsel?"checkboxUnknown":"checkbox",f.className="fancytree-checkbox "+j[c]),f=h.children("span.fancytree-icon").get(0),f&&(c=g.statusNodeType?e(i,g.statusNodeType):g.folder?g.expanded&&g.hasChildren()?e(i,"folderOpen"):e(i,"folder"):g.expanded?e(i,"docOpen"):e(i,"doc"),f.className="fancytree-icon "+c),d)},nodeSetStatus:function(b,c,d,f){var g,h,i=b.options.glyph,j=b.node;return g=this._superApply(arguments),"error"!==c&&"loading"!==c&&"nodata"!==c||(j.parent?(h=a("span.fancytree-expander",j.span).get(0),h&&(h.className="fancytree-expander "+e(i,c))):(h=a(".fancytree-statusnode-"+c,j[this.nodeContainerAttrName]).find("span.fancytree-icon").get(0),h&&(h.className="fancytree-icon "+e(i,c)))),g}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.gridnav.min.js' */
!function(a,b,c,d){"use strict";function e(b,c){var d,e=c.get(0),f=0;return b.children().each(function(){return this!==e&&(d=a(this).prop("colspan"),void(f+=d?d:1))}),f}function f(b,c){var d,e=null,f=0;return b.children().each(function(){return f>=c?(e=a(this),!1):(d=a(this).prop("colspan"),void(f+=d?d:1))}),e}function g(a,b){var c,d,g=a.closest("td"),i=null;switch(b){case h.LEFT:i=g.prev();break;case h.RIGHT:i=g.next();break;case h.UP:case h.DOWN:for(c=g.parent(),d=e(c,g);;){if(c=b===h.UP?c.prev():c.next(),!c.length)break;if(!c.is(":hidden")&&(i=f(c,d),i&&i.find(":input,a").length))break}}return i}var h=a.ui.keyCode,i={text:[h.UP,h.DOWN],checkbox:[h.UP,h.DOWN,h.LEFT,h.RIGHT],link:[h.UP,h.DOWN,h.LEFT,h.RIGHT],radiobutton:[h.UP,h.DOWN,h.LEFT,h.RIGHT],"select-one":[h.LEFT,h.RIGHT],"select-multiple":[h.LEFT,h.RIGHT]};a.ui.fancytree.registerExtension({name:"gridnav",version:"2.22.1",options:{autofocusInput:!1,handleCursorKeys:!0},treeInit:function(b){this._requireExtension("table",!0,!0),this._superApply(arguments),this.$container.addClass("fancytree-ext-gridnav"),this.$container.on("focusin",function(c){var d,e=a.ui.fancytree.getNode(c.target);e&&!e.isActive()&&(d=b.tree._makeHookContext(e,c),b.tree._callHook("nodeSetActive",d,!0))})},nodeSetActive:function(b,c){var d,e=b.options.gridnav,f=b.node,g=b.originalEvent||{},h=a(g.target).is(":input");c=c!==!1,this._superApply(arguments),c&&(b.options.titlesTabbable?(h||(a(f.span).find("span.fancytree-title").focus(),f.setFocus()),b.tree.$container.attr("tabindex","-1")):e.autofocusInput&&!h&&(d=a(f.tr||f.span),d.find(":input:enabled:first").focus()))},nodeKeydown:function(b){var c,d,e,f=b.options.gridnav,h=b.originalEvent,j=a(h.target);return j.is(":input:enabled")?c=j.prop("type"):j.is("a")&&(c="link"),c&&f.handleCursorKeys?(d=i[c],!(d&&a.inArray(h.which,d)>=0&&(e=g(j,h.which),e&&e.length))||(e.find(":input:enabled,a").focus(),!1)):this._superApply(arguments)}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.persist.min.js' */
!function(a,b,c,d){"use strict";function e(b,c,d,f,g){var h,i,j,l,m=!1,n=[],o=[];for(d=d||[],g=g||a.Deferred(),h=0,j=d.length;h<j;h++)i=d[h],l=b.getNodeByKey(i),l?f&&l.isUndefined()?(m=!0,b.debug("_loadLazyNodes: "+l+" is lazy: loading..."),"expand"===f?n.push(l.setExpanded()):n.push(l.load())):(b.debug("_loadLazyNodes: "+l+" already loaded."),l.setExpanded()):(o.push(i),b.debug("_loadLazyNodes: "+l+" was not yet found."));return a.when.apply(a,n).always(function(){if(m&&o.length>0)e(b,c,o,f,g);else{if(o.length)for(b.warn("_loadLazyNodes: could not load those keys: ",o),h=0,j=o.length;h<j;h++)i=d[h],c._appendKey(k,d[h],!1);g.resolve()}}),g}var f,g,h,i=a.ui.fancytree.assert,j="active",k="expanded",l="focus",m="selected";"function"==typeof Cookies?(h=Cookies.set,f=Cookies.get,g=Cookies.remove):(h=f=a.cookie,g=a.removeCookie),a.ui.fancytree._FancytreeClass.prototype.clearCookies=function(a){var b=this.ext.persist,c=b.cookiePrefix;a=a||"active expanded focus selected",a.indexOf(j)>=0&&b._data(c+j,null),a.indexOf(k)>=0&&b._data(c+k,null),a.indexOf(l)>=0&&b._data(c+l,null),a.indexOf(m)>=0&&b._data(c+m,null)},a.ui.fancytree._FancytreeClass.prototype.getPersistData=function(){var a=this.ext.persist,b=a.cookiePrefix,c=a.cookieDelimiter,d={};return d[j]=a._data(b+j),d[k]=(a._data(b+k)||"").split(c),d[m]=(a._data(b+m)||"").split(c),d[l]=a._data(b+l),d},a.ui.fancytree.registerExtension({name:"persist",version:"2.22.1",options:{cookieDelimiter:"~",cookiePrefix:d,cookie:{raw:!1,expires:"",path:"",domain:"",secure:!1},expandLazy:!1,fireActivate:!0,overrideSource:!0,store:"auto",types:"active expanded focus selected"},_data:function(a,b){var c=this._local.localStorage;return b===d?c?c.getItem(a):f(a):void(null===b?c?c.removeItem(a):g(a):c?c.setItem(a,b):h(a,b,this.options.persist.cookie))},_appendKey:function(b,c,d){c=""+c;var e=this._local,f=this.options.persist,g=f.cookieDelimiter,h=e.cookiePrefix+b,i=e._data(h),j=i?i.split(g):[],k=a.inArray(c,j);k>=0&&j.splice(k,1),d&&j.push(c),e._data(h,j.join(g))},treeInit:function(c){var g=c.tree,h=c.options,n=this._local,o=this.options.persist;return i("auto"!==o.store&&"cookie"!==o.store||f,"Missing required plugin for 'persist' extension: js.cookie.js or jquery.cookie.js"),n.cookiePrefix=o.cookiePrefix||"fancytree-"+g._id+"-",n.storeActive=o.types.indexOf(j)>=0,n.storeExpanded=o.types.indexOf(k)>=0,n.storeSelected=o.types.indexOf(m)>=0,n.storeFocus=o.types.indexOf(l)>=0,"cookie"!==o.store&&b.localStorage?n.localStorage="local"===o.store?b.localStorage:b.sessionStorage:n.localStorage=null,g.$div.bind("fancytreeinit",function(b){if(g._triggerTreeEvent("beforeRestore",null,{})!==!1){var c,f,i,p,q,r=n._data(n.cookiePrefix+l),s=o.fireActivate===!1;c=n._data(n.cookiePrefix+k),p=c&&c.split(o.cookieDelimiter),f=n.storeExpanded?e(g,n,p,!!o.expandLazy&&"expand",null):(new a.Deferred).resolve(),f.done(function(){if(n.storeSelected){if(c=n._data(n.cookiePrefix+m))for(p=c.split(o.cookieDelimiter),i=0;i<p.length;i++)q=g.getNodeByKey(p[i]),q?(q.selected===d||o.overrideSource&&q.selected===!1)&&(q.selected=!0,q.renderStatus()):n._appendKey(m,p[i],!1);3===g.options.selectMode&&g.visit(function(a){if(a.selected)return a.fixSelection3AfterClick(),"skip"})}n.storeActive&&(c=n._data(n.cookiePrefix+j),!c||!h.persist.overrideSource&&g.activeNode||(q=g.getNodeByKey(c),q&&(q.debug("persist: set active",c),q.setActive(!0,{noFocus:!0,noEvents:s})))),n.storeFocus&&r&&(q=g.getNodeByKey(r),q&&(g.options.titlesTabbable?a(q.span).find(".fancytree-title").focus():a(g.$container).focus())),g._triggerTreeEvent("restore",null,{})})}}),this._superApply(arguments)},nodeSetActive:function(a,b,c){var d,e=this._local;return b=b!==!1,d=this._superApply(arguments),e.storeActive&&e._data(e.cookiePrefix+j,this.activeNode?this.activeNode.key:null),d},nodeSetExpanded:function(a,b,c){var d,e=a.node,f=this._local;return b=b!==!1,d=this._superApply(arguments),f.storeExpanded&&f._appendKey(k,e.key,b),d},nodeSetFocus:function(a,b){var c,d=this._local;return b=b!==!1,c=this._superApply(arguments),d.storeFocus&&d._data(d.cookiePrefix+l,this.focusNode?this.focusNode.key:null),c},nodeSetSelected:function(b,c){var d,e,f=b.tree,g=b.node,h=this._local;return c=c!==!1,d=this._superApply(arguments),h.storeSelected&&(3===f.options.selectMode?(e=a.map(f.getSelectedNodes(!0),function(a){return a.key}),e=e.join(b.options.persist.cookieDelimiter),h._data(h.cookiePrefix+m,e)):h._appendKey(m,g.key,g.selected)),d}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.table.min.js' */
!function(a,b,c,d){"use strict";function e(b,c){c=c||"",b||a.error("Assertion failed "+c)}function f(a,b){a.insertBefore(b,a.firstChild)}function g(a,b){a.parentNode.insertBefore(b,a.nextSibling)}function h(a,b){a.visit(function(a){var c=a.tr;if(c&&(c.style.display=a.hide||!b?"none":""),!a.expanded)return"skip"})}function i(b){var c,d,f,g=b.parent,h=g?g.children:null;if(h&&h.length>1&&h[0]!==b)for(c=a.inArray(b,h),f=h[c-1],e(f.tr);f.children&&f.children.length&&(d=f.children[f.children.length-1],d.tr);)f=d;else f=g;return f}a.ui.fancytree.registerExtension({name:"table",version:"2.22.1",options:{checkboxColumnIdx:null,indentation:16,nodeColumnIdx:0},treeInit:function(b){var d,f,g,h,i,j=b.tree,k=b.options,l=k.table,m=j.widget.element;if(null!=l.customStatus&&(null!=k.renderStatusColumns?a.error("The 'customStatus' option is deprecated since v2.15.0. Use 'renderStatusColumns' only instead."):(j.warn("The 'customStatus' option is deprecated since v2.15.0. Use 'renderStatusColumns' instead."),k.renderStatusColumns=l.customStatus)),k.renderStatusColumns&&k.renderStatusColumns===!0&&(k.renderStatusColumns=k.renderColumns),m.addClass("fancytree-container fancytree-ext-table"),j.tbody=m.find(">tbody")[0],i=a(j.tbody),f=a("thead >tr:last >th",m).length,h=i.children("tr:first"),h.length)g=h.children("td").length,f&&g!==f&&(j.warn("Column count mismatch between thead ("+f+") and tbody ("+g+"): using tbody."),f=g),h=h.clone();else for(e(f>=1,"Need either <thead> or <tbody> with <td> elements to determine column count."),h=a("<tr />"),d=0;d<f;d++)h.append("<td />");h.find(">td").eq(l.nodeColumnIdx).html("<span class='fancytree-node' />"),k.aria&&(h.attr("role","row"),h.find("td").attr("role","gridcell")),j.rowFragment=c.createDocumentFragment(),j.rowFragment.appendChild(h.get(0)),i.empty(),j.statusClassPropName="tr",j.ariaPropName="tr",this.nodeContainerAttrName="tr",j.$container=m,this._superApply(arguments),a(j.rootNode.ul).remove(),j.rootNode.ul=null,this.$container.attr("tabindex",k.tabindex),k.aria&&j.$container.attr("role","treegrid").attr("aria-readonly",!0)},nodeRemoveChildMarkup:function(b){var c=b.node;c.visit(function(b){b.tr&&(a(b.tr).remove(),b.tr=null)})},nodeRemoveMarkup:function(b){var c=b.node;c.tr&&(a(c.tr).remove(),c.tr=null),this.nodeRemoveChildMarkup(b)},nodeRender:function(b,c,d,j,k){var l,m,n,o,p,q,r,s,t=b.tree,u=b.node,v=b.options,w=!u.parent;if(t._enableUpdate!==!1){if(k||(b.hasCollapsedParents=u.parent&&!u.parent.expanded),!w)if(u.tr&&c&&this.nodeRemoveMarkup(b),u.tr)c?this.nodeRenderTitle(b):this.nodeRenderStatus(b);else{if(b.hasCollapsedParents&&!d)return void u.debug("nodeRender ignored due to unrendered parent");p=t.rowFragment.firstChild.cloneNode(!0),q=i(u),e(q),j===!0&&k?p.style.display="none":d&&b.hasCollapsedParents&&(p.style.display="none"),q.tr?g(q.tr,p):(e(!q.parent,"prev. row must have a tr, or be system root"),f(t.tbody,p)),u.tr=p,u.key&&v.generateIds&&(u.tr.id=v.idPrefix+u.key),u.tr.ftnode=u,v.aria&&a(u.tr).attr("aria-labelledby","ftal_"+u.key),u.span=a("span.fancytree-node",u.tr).get(0),this.nodeRenderTitle(b),v.createNode&&v.createNode.call(t,{type:"createNode"},b)}if(v.renderNode&&v.renderNode.call(t,{type:"renderNode"},b),l=u.children,l&&(w||d||u.expanded))for(n=0,o=l.length;n<o;n++)s=a.extend({},b,{node:l[n]}),s.hasCollapsedParents=s.hasCollapsedParents||!u.expanded,this.nodeRender(s,c,d,j,!0);l&&!k&&(r=u.tr||null,m=t.tbody.firstChild,u.visit(function(a){if(a.tr){if(a.parent.expanded||"none"===a.tr.style.display||(a.tr.style.display="none",h(a,!1)),a.tr.previousSibling!==r){u.debug("_fixOrder: mismatch at node: "+a);var b=r?r.nextSibling:m;t.tbody.insertBefore(a.tr,b)}r=a.tr}}))}},nodeRenderTitle:function(b,c){var d,e,f=b.node,g=b.options,h=f.isStatusNode();return e=this._super(b,c),f.isRootNode()?e:(g.checkbox&&!h&&null!=g.table.checkboxColumnIdx&&(d=a("span.fancytree-checkbox",f.span),a(f.tr).find("td").eq(+g.table.checkboxColumnIdx).html(d)),this.nodeRenderStatus(b),h?g.renderStatusColumns&&g.renderStatusColumns.call(b.tree,{type:"renderStatusColumns"},b):g.renderColumns&&g.renderColumns.call(b.tree,{type:"renderColumns"},b),e)},nodeRenderStatus:function(b){var c,d=b.node,e=b.options;this._super(b),a(d.tr).removeClass("fancytree-node"),c=(d.getLevel()-1)*e.table.indentation,a(d.span).css({paddingLeft:c+"px"})},nodeSetExpanded:function(b,c,d){function e(a){h(b.node,c),a?c&&b.options.autoScroll&&!d.noAnimation&&b.node.hasChildren()?b.node.getLastChild().scrollIntoView(!0,{topNode:b.node}).always(function(){d.noEvents||b.tree._triggerNodeEvent(c?"expand":"collapse",b),f.resolveWith(b.node)}):(d.noEvents||b.tree._triggerNodeEvent(c?"expand":"collapse",b),f.resolveWith(b.node)):(d.noEvents||b.tree._triggerNodeEvent(c?"expand":"collapse",b),f.rejectWith(b.node))}if(c=c!==!1,b.node.expanded&&c||!b.node.expanded&&!c)return this._superApply(arguments);var f=new a.Deferred,g=a.extend({},d,{noEvents:!0,noAnimation:!0});return d=d||{},this._super(b,c,g).done(function(){e(!0)}).fail(function(){e(!1)}),f.promise()},nodeSetStatus:function(b,c,d,e){if("ok"===c){var f=b.node,g=f.children?f.children[0]:null;g&&g.isStatusNode()&&a(g.tr).remove()}return this._superApply(arguments)},treeClear:function(a){return this.nodeRemoveChildMarkup(this._makeHookContext(this.rootNode)),this._superApply(arguments)},treeDestroy:function(a){return this.$container.find("tbody").empty(),this.$source&&this.$source.removeClass("ui-helper-hidden"),this._superApply(arguments)}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.themeroller.min.js' */
!function(a,b,c,d){"use strict";a.ui.fancytree.registerExtension({name:"themeroller",version:"2.22.1",options:{activeClass:"ui-state-active",addClass:"ui-corner-all",focusClass:"ui-state-focus",hoverClass:"ui-state-hover",selectedClass:"ui-state-highlight"},treeInit:function(b){var c=b.widget.element,d=b.options.themeroller;this._superApply(arguments),"TABLE"===c[0].nodeName?(c.addClass("ui-widget ui-corner-all"),c.find(">thead tr").addClass("ui-widget-header"),c.find(">tbody").addClass("ui-widget-conent")):c.addClass("ui-widget ui-widget-content ui-corner-all"),c.delegate(".fancytree-node","mouseenter mouseleave",function(b){var c=a.ui.fancytree.getNode(b.target),e="mouseenter"===b.type;a(c.tr?c.tr:c.span).toggleClass(d.hoverClass+" "+d.addClass,e)})},treeDestroy:function(a){this._superApply(arguments),a.widget.element.removeClass("ui-widget ui-widget-content ui-corner-all")},nodeRenderStatus:function(b){var c={},d=b.node,e=a(d.tr?d.tr:d.span),f=b.options.themeroller;this._super(b),c[f.activeClass]=!1,c[f.focusClass]=!1,c[f.selectedClass]=!1,d.isActive()&&(c[f.activeClass]=!0),d.hasFocus()&&(c[f.focusClass]=!0),d.isSelected()&&!d.isActive()&&(c[f.selectedClass]=!0),e.toggleClass(f.activeClass,c[f.activeClass]),e.toggleClass(f.focusClass,c[f.focusClass]),e.toggleClass(f.selectedClass,c[f.selectedClass]),e.addClass(f.addClass)}})}(jQuery,window,document);

/*! Extension 'jquery.fancytree.wide.min.js' */
!function(a,b,c,d){"use strict";function e(b,c){b="fancytree-style-"+b;var d=a("#"+b);if(!c)return d.remove(),null;d.length||(d=a("<style />").attr("id",b).addClass("fancytree-style").prop("type","text/css").appendTo("head"));try{d.html(c)}catch(e){d[0].styleSheet.cssText=c}return d}function f(a,b,c,d,e,f){var g,h="#"+a+" span.fancytree-level-",i=[];for(g=0;g<b;g++)i.push(h+(g+1)+" span.fancytree-title { padding-left: "+(g*c+d)+f+"; }");return i.push("#"+a+" div.ui-effects-wrapper ul li span.fancytree-title, #"+a+" ul.fancytree-animating span.fancytree-title { padding-left: "+e+f+"; position: static; width: auto; }"),i.join("\n")}var g=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;a.ui.fancytree.registerExtension({name:"wide",version:"2.22.1",options:{iconWidth:null,iconSpacing:null,labelSpacing:null,levelOfs:null},treeCreate:function(b){this._superApply(arguments),this.$container.addClass("fancytree-ext-wide");var c,d,h,i,j,k,l=b.options.wide,m=a("<li id='fancytreeTemp'><span class='fancytree-node'><span class='fancytree-icon' /><span class='fancytree-title' /></span><ul />").appendTo(b.tree.$container),n=m.find(".fancytree-icon"),o=m.find("ul"),p=l.iconSpacing||n.css("margin-left"),q=l.iconWidth||n.css("width"),r=l.labelSpacing||"3px",s=l.levelOfs||o.css("padding-left");m.remove(),h=p.match(g)[2],p=parseFloat(p,10),i=r.match(g)[2],r=parseFloat(r,10),j=q.match(g)[2],q=parseFloat(q,10),k=s.match(g)[2],h===j&&k===j&&i===j||a.error("iconWidth, iconSpacing, and levelOfs must have the same css measure unit"),this._local.measureUnit=j,this._local.levelOfs=parseFloat(s),this._local.lineOfs=(1+(b.options.checkbox?1:0)+(b.options.icon===!1?0:1))*(q+p)+p,this._local.labelOfs=r,this._local.maxDepth=10,c=this.$container.uniqueId().attr("id"),d=f(c,this._local.maxDepth,this._local.levelOfs,this._local.lineOfs,this._local.labelOfs,this._local.measureUnit),e(c,d)},treeDestroy:function(a){return e(this.$container.attr("id"),null),this._superApply(arguments)},nodeRenderStatus:function(b){var c,d,g,h=b.node,i=h.getLevel();return g=this._super(b),i>this._local.maxDepth&&(c=this.$container.attr("id"),this._local.maxDepth*=2,h.debug("Define global ext-wide css up to level "+this._local.maxDepth),d=f(c,this._local.maxDepth,this._local.levelOfs,this._local.lineOfs,this._local.labelSpacing,this._local.measureUnit),e(c,d)),a(h.span).addClass("fancytree-level-"+i),g}})}(jQuery,window,document);
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js":
/*!**********************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * bootstrap-fileinput v4.4.0
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function(e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(e){"use strict";e.fn.fileinputLocales={},e.fn.fileinputThemes={};var i,t;i={FRAMES:".kv-preview-thumb",SORT_CSS:"file-sortable",STYLE_SETTING:'style="width:{width};height:{height};"',OBJECT_PARAMS:'<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',DEFAULT_PREVIEW:'<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',MODAL_ID:"kvFileinputModal",MODAL_EVENTS:["show","shown","hide","hidden","loaded"],objUrl:window.URL||window.webkitURL,compare:function(e,i,t){return void 0!==e&&(t?e===i:e.match(i))},isIE:function(e){if("Microsoft Internet Explorer"!==navigator.appName)return!1;if(10===e)return new RegExp("msie\\s"+e,"i").test(navigator.userAgent);var i,t=document.createElement("div");return t.innerHTML="<!--[if IE "+e+"]> <i></i> <![endif]-->",i=t.getElementsByTagName("i").length,document.body.appendChild(t),t.parentNode.removeChild(t),i},initModal:function(i){var t=e("body");t.length&&i.appendTo(t)},isEmpty:function(i,t){return void 0===i||null===i||0===i.length||t&&""===e.trim(i)},isArray:function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},ifSet:function(e,i,t){return t=t||"",i&&"object"==typeof i&&e in i?i[e]:t},cleanArray:function(e){return e instanceof Array||(e=[]),e.filter(function(e){return void 0!==e&&null!==e})},spliceArray:function(e,i){var t,a=0,r=[];if(!(e instanceof Array))return[];for(t=0;t<e.length;t++)t!==i&&(r[a]=e[t],a++);return r},getNum:function(e,i){return i=i||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?i:e)},hasFileAPISupport:function(){return!(!window.File||!window.FileReader)},hasDragDropSupport:function(){var e=document.createElement("div");return!i.isIE(9)&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},hasFileUploadSupport:function(){return i.hasFileAPISupport()&&window.FormData},addCss:function(e,i){e.removeClass(i).addClass(i)},getElement:function(t,a,r){return i.isEmpty(t)||i.isEmpty(t[a])?r:e(t[a])},uniqId:function(){return Math.round((new Date).getTime()+100*Math.random())},htmlEncode:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},replaceTags:function(i,t){var a=i;return t?(e.each(t,function(e,i){"function"==typeof i&&(i=i()),a=a.split(e).join(i)}),a):a},cleanMemory:function(e){var t=e.is("img")?e.attr("src"):e.find("source").attr("src");i.objUrl.revokeObjectURL(t)},findFileName:function(e){var i=e.lastIndexOf("/");return-1===i&&(i=e.lastIndexOf("\\")),e.split(e.substring(i,i+1)).pop()},checkFullScreen:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},toggleFullScreen:function(e){var t=document,a=t.documentElement;a&&e&&!i.checkFullScreen()?a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},moveArray:function(e,i,t){if(t>=e.length)for(var a=t-e.length;a--+1;)e.push(void 0);return e.splice(t,0,e.splice(i,1)[0]),e},cleanZoomCache:function(e){var i=e.closest(".kv-zoom-cache-theme");i.length||(i=e.closest(".kv-zoom-cache")),i.remove()}},t=function(t,a){var r=this;r.$element=e(t),r._validate()&&(r.isPreviewable=i.hasFileAPISupport(),r.isIE9=i.isIE(9),r.isIE10=i.isIE(10),r.isPreviewable||r.isIE9?(r._init(a),r._listen()):r.$element.removeClass("file-loading"))},t.prototype={constructor:t,_init:function(t){var a,r,n=this,o=n.$element;n.options=t,e.each(t,function(e,t){switch(e){case"minFileCount":case"maxFileCount":case"minFileSize":case"maxFileSize":case"maxFilePreviewSize":case"resizeImageQuality":case"resizeIfSizeMoreThan":case"progressUploadThreshold":case"initialPreviewCount":case"zoomModalHeight":case"minImageHeight":case"maxImageHeight":case"minImageWidth":case"maxImageWidth":n[e]=i.getNum(t);break;default:n[e]=t}}),n.$form=o.closest("form"),n._initTemplateDefaults(),n.fileInputCleared=!1,n.fileBatchCompleted=!0,n.isPreviewable||(n.showPreview=!1),n.uploadFileAttr=i.isEmpty(o.attr("name"))?"file_data":o.attr("name"),n.reader=null,n.formdata={},n.clearStack(),n.uploadCount=0,n.uploadStatus={},n.uploadLog=[],n.uploadAsyncCount=0,n.loadedImages=[],n.totalImagesCount=0,n.ajaxRequests=[],n.isError=!1,n.ajaxAborted=!1,n.cancelling=!1,r=n._getLayoutTemplate("progress"),n.progressTemplate=r.replace("{class}",n.progressClass),n.progressCompleteTemplate=r.replace("{class}",n.progressCompleteClass),n.progressErrorTemplate=r.replace("{class}",n.progressErrorClass),n.dropZoneEnabled=i.hasDragDropSupport()&&n.dropZoneEnabled,n.isDisabled=o.attr("disabled")||o.attr("readonly"),n.isDisabled&&o.attr("disabled",!0),n.isUploadable=i.hasFileUploadSupport()&&!i.isEmpty(n.uploadUrl),n.isClickable=n.browseOnZoneClick&&n.showPreview&&(n.isUploadable&&n.dropZoneEnabled||!i.isEmpty(n.defaultPreviewContent)),n.slug="function"==typeof t.slugCallback?t.slugCallback:n._slugDefault,n.mainTemplate=n.showCaption?n._getLayoutTemplate("main1"):n._getLayoutTemplate("main2"),n.captionTemplate=n._getLayoutTemplate("caption"),n.previewGenericTemplate=n._getPreviewTemplate("generic"),n.resizeImage&&(n.maxImageWidth||n.maxImageHeight)&&(n.imageCanvas=document.createElement("canvas"),n.imageCanvasContext=n.imageCanvas.getContext("2d")),i.isEmpty(o.attr("id"))&&o.attr("id",i.uniqId()),n.namespace=".fileinput_"+o.attr("id").replace(/-/g,"_"),void 0===n.$container?n.$container=n._createContainer():n._refreshContainer(),a=n.$container,n.$dropZone=a.find(".file-drop-zone"),n.$progress=a.find(".kv-upload-progress"),n.$btnUpload=a.find(".fileinput-upload"),n.$captionContainer=i.getElement(t,"elCaptionContainer",a.find(".file-caption")),n.$caption=i.getElement(t,"elCaptionText",a.find(".file-caption-name")),n.$previewContainer=i.getElement(t,"elPreviewContainer",a.find(".file-preview")),n.$preview=i.getElement(t,"elPreviewImage",a.find(".file-preview-thumbnails")),n.$previewStatus=i.getElement(t,"elPreviewStatus",a.find(".file-preview-status")),n.$errorContainer=i.getElement(t,"elErrorContainer",n.$previewContainer.find(".kv-fileinput-error")),i.isEmpty(n.msgErrorClass)||i.addCss(n.$errorContainer,n.msgErrorClass),n.$errorContainer.hide(),n.previewInitId="preview-"+i.uniqId(),n._initPreviewCache(),n._initPreview(!0),n._initPreviewActions(),n._setFileDropZoneTitle(),o.removeClass("file-loading"),o.attr("disabled")&&n.disable(),n._initZoom()},_initTemplateDefaults:function(){var t,a,r,n,o,l,s,d,c,p,u,f,m,g,v,h,w,_,b,C,y,E,x,T,S,F,I,P,k,z,A,$,D,U,j,R=this;t='{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>',a='{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',r='<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',o='<div class="close fileinput-remove">&times;</div>\n',n='<i class="glyphicon glyphicon-file kv-caption-icon"></i>',l='<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n',s='<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>',d='<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>',c='<div tabindex="500" class="{css}" {status}>{icon} {label}</div>',p='<div id="'+i.MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+i.MODAL_ID+'Label"></div>',u='<div class="modal-dialog modal-lg" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="kv-zoom-actions pull-right">{toggleheader}{fullscreen}{borderless}{close}</div>\n      <h3 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h3>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',f='<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>',m=" <samp>({sizeText})</samp>",g='<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}<br>{size}</div>\n    {progress} {actions}\n</div>',v='<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n{drag}\n<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload} {delete} {zoom} {other}    </div>\n    <div class="clearfix"></div>\n</div>',h='<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',w='<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>',_='<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',b='<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>',C='<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"',y=C+'><div class="kv-file-content">\n',E=C+' title="{caption}"><div class="kv-file-content">\n',x="</div>{footer}\n</div>\n",T="{content}\n",S='<div class="kv-preview-data file-preview-html" title="{caption}" '+i.STYLE_SETTING+">{data}</div>\n",F='<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}" '+i.STYLE_SETTING+">\n",I='<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly '+i.STYLE_SETTING+">{data}</textarea>\n",P='<video class="kv-preview-data file-preview-video" width="{width}" height="{height}" controls>\n<source src="{data}" type="{type}">\n'+i.DEFAULT_PREVIEW+"\n</video>\n",k='<div class="file-preview-audio"><audio class="kv-preview-data" controls>\n<source src="{data}" type="{type}">\n'+i.DEFAULT_PREVIEW+"\n</audio></div>\n",z='<object class="kv-preview-data file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n'+i.OBJECT_PARAMS+" "+i.DEFAULT_PREVIEW+"\n</object>\n",A='<object class="kv-preview-data file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n<param name="movie" value="{caption}" />\n'+i.OBJECT_PARAMS+" "+i.DEFAULT_PREVIEW+"\n</object>\n",$='<embed class="kv-preview-data" src="{data}" width="{width}" height="{height}" type="application/pdf">\n',D='<div class="kv-preview-data file-preview-other-frame">\n'+i.DEFAULT_PREVIEW+"\n</div>\n",U='<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>',j={width:"100%",height:"100%","min-height":"480px"},R.defaults={layoutTemplates:{main1:t,main2:a,preview:r,close:o,fileIcon:n,caption:l,modalMain:p,modal:u,progress:f,size:m,footer:g,actions:v,actionDelete:h,actionUpload:w,actionZoom:_,actionDrag:b,btnDefault:s,btnLink:d,btnBrowse:c,zoomCache:U},previewMarkupTags:{tagBefore1:y,tagBefore2:E,tagAfter:x},previewContentTemplates:{generic:T,html:S,image:F,text:I,video:P,audio:k,flash:z,object:A,pdf:$,other:D},allowedPreviewTypes:["image","html","text","video","audio","flash","pdf","object"],previewTemplates:{},previewSettings:{image:{width:"auto",height:"160px"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"213px",height:"80px"},flash:{width:"213px",height:"160px"},object:{width:"160px",height:"auto"},pdf:{width:"160px",height:"160px"},other:{width:"160px",height:"160px"}},previewZoomSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:j,text:j,video:{width:"auto",height:"100%","max-width":"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%","max-width":"100%","min-height":"480px"},pdf:j,other:{width:"auto",height:"100%","min-height":"480px"}},fileTypeSettings:{image:function(e,t){return i.compare(e,"image.*")||i.compare(t,/\.(gif|png|jpe?g)$/i)},html:function(e,t){return i.compare(e,"text/html")||i.compare(t,/\.(htm|html)$/i)},text:function(e,t){return i.compare(e,"text.*")||i.compare(t,/\.(xml|javascript)$/i)||i.compare(t,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,t){return i.compare(e,"video.*")&&(i.compare(e,/(ogg|mp4|mp?g|mov|webm|3gp)$/i)||i.compare(t,/\.(og?|mp4|webm|mp?g|mov|3gp)$/i))},audio:function(e,t){return i.compare(e,"audio.*")&&(i.compare(t,/(ogg|mp3|mp?g|wav)$/i)||i.compare(t,/\.(og?|mp3|mp?g|wav)$/i))},flash:function(e,t){return i.compare(e,"application/x-shockwave-flash",!0)||i.compare(t,/\.(swf)$/i)},pdf:function(e,t){return i.compare(e,"application/pdf",!0)||i.compare(t,/\.(pdf)$/i)},object:function(){return!0},other:function(){return!0}},fileActionSettings:{showRemove:!0,showUpload:!0,showZoom:!0,showDrag:!0,removeIcon:'<i class="glyphicon glyphicon-trash text-danger"></i>',removeClass:"btn btn-xs btn-default",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload text-info"></i>',uploadClass:"btn btn-xs btn-default",uploadTitle:"Upload file",zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:"btn btn-xs btn-default",zoomTitle:"View Details",dragIcon:'<i class="glyphicon glyphicon-menu-hamburger"></i>',dragClass:"text-info",dragTitle:"Move / Rearrange",dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-hand-down text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hand-up text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."}},e.each(R.defaults,function(i,t){return"allowedPreviewTypes"===i?void(void 0===R.allowedPreviewTypes&&(R.allowedPreviewTypes=t)):void(R[i]=e.extend(!0,{},t,R[i]))}),R._initPreviewTemplates()},_initPreviewTemplates:function(){var t,a=this,r=a.defaults,n=a.previewMarkupTags,o=n.tagAfter;e.each(r.previewContentTemplates,function(e,r){i.isEmpty(a.previewTemplates[e])&&(t=n.tagBefore2,"generic"!==e&&"image"!==e&&"html"!==e&&"text"!==e||(t=n.tagBefore1),a.previewTemplates[e]=t+r+o)})},_initPreviewCache:function(){var t=this;t.previewCache={data:{},init:function(){var e=t.initialPreview;e.length>0&&!i.isArray(e)&&(e=e.split(t.initialPreviewDelimiter)),t.previewCache.data={content:e,config:t.initialPreviewConfig,tags:t.initialPreviewThumbTags}},fetch:function(){return t.previewCache.data.content.filter(function(e){return null!==e})},count:function(e){return t.previewCache.data&&t.previewCache.data.content?e?t.previewCache.data.content.length:t.previewCache.fetch().length:0},get:function(a,r){var n,o,l,s,d,c,p,u="init_"+a,f=t.previewCache.data,m=f.config[a],g=f.content[a],v=t.previewInitId+"-"+u,h=i.ifSet("previewAsData",m,t.initialPreviewAsData),w=function(e,a,r,n,o,l,s,d,c){return d=" file-preview-initial "+i.SORT_CSS+(d?" "+d:""),t._generatePreviewTemplate(e,a,r,n,o,!1,null,d,l,s,c)};return g?(r=void 0===r?!0:r,l=i.ifSet("type",m,t.initialPreviewFileType||"generic"),d=i.ifSet("filename",m,i.ifSet("caption",m)),c=i.ifSet("filetype",m,l),s=t.previewCache.footer(a,r,m&&m.size||null),p=i.ifSet("frameClass",m),n=h?w(l,g,d,c,v,s,u,p):w("generic",g,d,c,v,s,u,p,l).replace(/\{content}/g,f.content[a]),f.tags.length&&f.tags[a]&&(n=i.replaceTags(n,f.tags[a])),i.isEmpty(m)||i.isEmpty(m.frameAttr)||(o=e(document.createElement("div")).html(n),o.find(".file-preview-initial").attr(m.frameAttr),n=o.html(),o.remove()),n):""},add:function(e,a,r,n){var o,l=t.previewCache.data;return i.isArray(e)||(e=e.split(t.initialPreviewDelimiter)),n?(o=l.content.push(e)-1,l.config[o]=a,l.tags[o]=r):(o=e.length-1,l.content=e,l.config=a,l.tags=r),t.previewCache.data=l,o},set:function(e,a,r,n){var o,l,s=t.previewCache.data;if(e&&e.length&&(i.isArray(e)||(e=e.split(t.initialPreviewDelimiter)),l=e.filter(function(e){return null!==e}),l.length)){if(void 0===s.content&&(s.content=[]),void 0===s.config&&(s.config=[]),void 0===s.tags&&(s.tags=[]),n){for(o=0;o<e.length;o++)e[o]&&s.content.push(e[o]);for(o=0;o<a.length;o++)a[o]&&s.config.push(a[o]);for(o=0;o<r.length;o++)r[o]&&s.tags.push(r[o])}else s.content=e,s.config=a,s.tags=r;t.previewCache.data=s}},unset:function(e){var i=t.previewCache.count();if(i){if(1===i)return t.previewCache.data.content=[],t.previewCache.data.config=[],t.previewCache.data.tags=[],t.initialPreview=[],t.initialPreviewConfig=[],void(t.initialPreviewThumbTags=[]);t.previewCache.data.content[e]=null,t.previewCache.data.config[e]=null,t.previewCache.data.tags[e]=null}},out:function(){var e,i,a="",r=t.previewCache.count(!0);if(0===r)return{content:"",caption:""};for(i=0;r>i;i++)a+=t.previewCache.get(i);return e=t._getMsgSelected(t.previewCache.count()),{content:a,caption:e}},footer:function(e,a,r){var n=t.previewCache.data;if(!n||!n.config||0===n.config.length||i.isEmpty(n.config[e]))return"";a=void 0===a?!0:a;var o=n.config[e],l=i.ifSet("caption",o),s="",d=i.ifSet("width",o,"auto"),c=i.ifSet("url",o,!1),p=i.ifSet("key",o,null),u=t.fileActionSettings,f=i.ifSet("showDelete",o,!0),m=i.ifSet("showZoom",o,u.showZoom),g=i.ifSet("showDrag",o,u.showDrag),v=c===!1&&a;return t.initialPreviewShowDelete&&(s=t._renderFileActions(!1,f,m,g,v,c,p,!0)),t._getLayoutTemplate("footer").replace(/\{progress}/g,t._renderThumbProgress()).replace(/\{actions}/g,s).replace(/\{caption}/g,l).replace(/\{size}/g,t._getSize(r)).replace(/\{width}/g,d).replace(/\{indicator}/g,"").replace(/\{indicatorTitle}/g,"")}},t.previewCache.init()},_handler:function(e,i,t){var a=this,r=a.namespace,n=i.split(" ").join(r+" ")+r;e&&e.length&&e.off(n).on(n,t)},_log:function(e){var i=this,t=i.$element.attr("id");t&&(e='"'+t+'": '+e),"undefined"!=typeof window.console.log?window.console.log(e):window.alert(e)},_validate:function(){var e=this,i="file"===e.$element.attr("type");return i||e._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'),i},_errorsExist:function(){var i,t=this;return t.$errorContainer.find("li").length?!0:(i=e(document.createElement("div")).html(t.$errorContainer.html()),i.find("span.kv-error-close").remove(),i.find("ul").remove(),!!e.trim(i.text()).length)},_errorHandler:function(e,i){var t=this,a=e.target.error;a.code===a.NOT_FOUND_ERR?t._showError(t.msgFileNotFound.replace("{name}",i)):a.code===a.SECURITY_ERR?t._showError(t.msgFileSecured.replace("{name}",i)):a.code===a.NOT_READABLE_ERR?t._showError(t.msgFileNotReadable.replace("{name}",i)):a.code===a.ABORT_ERR?t._showError(t.msgFilePreviewAborted.replace("{name}",i)):t._showError(t.msgFilePreviewError.replace("{name}",i))},_addError:function(e){var i=this,t=i.$errorContainer;e&&t.length&&(t.html(i.errorCloseButton+e),i._handler(t.find(".kv-error-close"),"click",function(){t.fadeOut("slow")}))},_resetErrors:function(e){var i=this,t=i.$errorContainer;i.isError=!1,i.$container.removeClass("has-error"),t.html(""),e?t.fadeOut("slow"):t.hide()},_showFolderError:function(e){var t,a=this,r=a.$errorContainer;e&&(t=a.msgFoldersNotAllowed.replace(/\{n}/g,e),a._addError(t),i.addCss(a.$container,"has-error"),r.fadeIn(800),a._raise("filefoldererror",[e,t]))},_showUploadError:function(e,t,a){var r=this,n=r.$errorContainer,o=a||"fileuploaderror",l=t&&t.id?'<li data-file-id="'+t.id+'">'+e+"</li>":"<li>"+e+"</li>";return 0===n.find("ul").length?r._addError("<ul>"+l+"</ul>"):n.find("ul").append(l),n.fadeIn(800),r._raise(o,[t,e]),r.$container.removeClass("file-input-new"),i.addCss(r.$container,"has-error"),!0},_showError:function(e,t,a){var r=this,n=r.$errorContainer,o=a||"fileerror";return t=t||{},t.reader=r.reader,r._addError(e),n.fadeIn(800),r._raise(o,[t,e]),r.isUploadable||r._clearFileInput(),r.$container.removeClass("file-input-new"),i.addCss(r.$container,"has-error"),r.$btnUpload.attr("disabled",!0),!0},_noFilesError:function(e){var t=this,a=t.minFileCount>1?t.filePlural:t.fileSingle,r=t.msgFilesTooLess.replace("{n}",t.minFileCount).replace("{files}",a),n=t.$errorContainer;t._addError(r),t.isError=!0,t._updateFileDetails(0),n.fadeIn(800),t._raise("fileerror",[e,r]),t._clearFileInput(),i.addCss(t.$container,"has-error")},_parseError:function(i,t,a,r){var n=this,o=e.trim(a+""),l="."===o.slice(-1)?"":".",s=void 0!==t.responseJSON&&void 0!==t.responseJSON.error?t.responseJSON.error:t.responseText;return n.cancelling&&n.msgUploadAborted&&(o=n.msgUploadAborted),n.showAjaxErrorDetails&&s?(s=e.trim(s.replace(/\n\s*\n/g,"\n")),s=s.length>0?"<pre>"+s+"</pre>":"",o+=l+s):o+=l,o===l&&(o=n.msgAjaxError.replace("{operation}",i)),n.cancelling=!1,r?"<b>"+r+": </b>"+o:o},_parseFileType:function(e){var t,a,r,n,o=this,l=o.allowedPreviewTypes||[];for(n=0;n<l.length;n++)if(r=l[n],t=o.fileTypeSettings[r],a=t(e.type,e.name)?r:"",!i.isEmpty(a))return a;return"other"},_getPreviewIcon:function(i){var t,a=this,r=null;return i&&i.indexOf(".")>-1&&(t=i.split(".").pop(),a.previewFileIconSettings&&a.previewFileIconSettings[t]&&(r=a.previewFileIconSettings[t]),a.previewFileExtSettings&&e.each(a.previewFileExtSettings,function(e,i){return a.previewFileIconSettings[e]&&i(t)?void(r=a.previewFileIconSettings[e]):void 0})),r},_parseFilePreviewIcon:function(e,i){var t=this,a=t._getPreviewIcon(i)||t.previewFileIcon;return e.indexOf("{previewFileIcon}")>-1&&(e=e.replace(/\{previewFileIconClass}/g,t.previewFileIconClass).replace(/\{previewFileIcon}/g,a)),e},_raise:function(i,t){var a=this,r=e.Event(i);if(void 0!==t?a.$element.trigger(r,t):a.$element.trigger(r),r.isDefaultPrevented()||r.result===!1)return!1;switch(i){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:a.ajaxAborted=r.result}return!0},_listenFullScreen:function(e){var i,t,a=this,r=a.$modal;r&&r.length&&(i=r&&r.find(".btn-fullscreen"),t=r&&r.find(".btn-borderless"),i.length&&t.length&&(i.removeClass("active").attr("aria-pressed","false"),t.removeClass("active").attr("aria-pressed","false"),e?i.addClass("active").attr("aria-pressed","true"):t.addClass("active").attr("aria-pressed","true"),r.hasClass("file-zoom-fullscreen")?a._maximizeZoomDialog():e?a._maximizeZoomDialog():t.removeClass("active").attr("aria-pressed","false")))},_listen:function(){var t,a=this,r=a.$element,n=a.$form,o=a.$container;a._handler(r,"change",e.proxy(a._change,a)),a.showBrowse&&a._handler(a.$btnFile,"click",e.proxy(a._browse,a)),a._handler(o.find(".fileinput-remove:not([disabled])"),"click",e.proxy(a.clear,a)),a._handler(o.find(".fileinput-cancel"),"click",e.proxy(a.cancel,a)),a._initDragDrop(),a._handler(n,"reset",e.proxy(a.reset,a)),a.isUploadable||a._handler(n,"submit",e.proxy(a._submitForm,a)),a._handler(a.$container.find(".fileinput-upload"),"click",e.proxy(a._uploadClick,a)),a._handler(e(window),"resize",function(){a._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight)}),t="webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",a._handler(e(document),t,function(){a._listenFullScreen(i.checkFullScreen())}),a._initClickable()},_initClickable:function(){var t,a=this;a.isClickable&&(t=a.isUploadable?a.$dropZone:a.$preview.find(".file-default-preview"),i.addCss(t,"clickable"),t.attr("tabindex",-1),a._handler(t,"click",function(i){var r=e(i.target);r.parents(".file-preview-thumbnails").length&&!r.parents(".file-default-preview").length||(a.$element.trigger("click"),t.blur())}))},_initDragDrop:function(){var i=this,t=i.$dropZone;i.isUploadable&&i.dropZoneEnabled&&i.showPreview&&(i._handler(t,"dragenter dragover",e.proxy(i._zoneDragEnter,i)),i._handler(t,"dragleave",e.proxy(i._zoneDragLeave,i)),i._handler(t,"drop",e.proxy(i._zoneDrop,i)),i._handler(e(document),"dragenter dragover drop",i._zoneDragDropInit))},_zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},_zoneDragEnter:function(t){var a=this,r=e.inArray("Files",t.originalEvent.dataTransfer.types)>-1;return a._zoneDragDropInit(t),a.isDisabled||!r?(t.originalEvent.dataTransfer.effectAllowed="none",void(t.originalEvent.dataTransfer.dropEffect="none")):void i.addCss(a.$dropZone,"file-highlighted")},_zoneDragLeave:function(e){var i=this;i._zoneDragDropInit(e),i.isDisabled||i.$dropZone.removeClass("file-highlighted")},_zoneDrop:function(e){var t=this;e.preventDefault(),t.isDisabled||i.isEmpty(e.originalEvent.dataTransfer.files)||(t._change(e,"dragdrop"),t.$dropZone.removeClass("file-highlighted"))},_uploadClick:function(e){var t,a=this,r=a.$container.find(".fileinput-upload"),n=!r.hasClass("disabled")&&i.isEmpty(r.attr("disabled"));if(!e||!e.isDefaultPrevented()){if(!a.isUploadable)return void(n&&"submit"!==r.attr("type")&&(t=r.closest("form"),t.length&&t.trigger("submit"),e.preventDefault()));e.preventDefault(),n&&a.upload()}},_submitForm:function(){var e=this,i=e.$element,t=i.get(0).files;return t&&e.minFileCount>0&&e._getFileCount(t.length)<e.minFileCount?(e._noFilesError({}),!1):!e._abort({})},_clearPreview:function(){var t=this,a=t.$preview,r=t.showUploadedThumbs?a.find(i.FRAMES+":not(.file-preview-success)"):a.find(i.FRAMES);r.each(function(){var t=e(this);t.remove(),i.cleanZoomCache(a.find("#zoom-"+t.attr("id")))}),t.$preview.find(i.FRAMES).length&&t.showPreview||t._resetUpload(),t._validateDefaultPreview()},_initSortable:function(){var t,a=this,r=a.$preview,n="."+i.SORT_CSS;window.KvSortable&&0!==r.find(n).length&&(t={handle:".drag-handle-init",dataIdAttr:"data-preview-id",draggable:n,onSort:function(t){var r,n,o=t.oldIndex,l=t.newIndex;a.initialPreview=i.moveArray(a.initialPreview,o,l),a.initialPreviewConfig=i.moveArray(a.initialPreviewConfig,o,l),a.previewCache.init();for(var s=0;s<a.initialPreviewConfig.length;s++)null!==a.initialPreviewConfig[s]&&(r=a.initialPreviewConfig[s].key,n=e(".kv-file-remove[data-key='"+r+"']").closest(i.FRAMES),n.attr("data-fileindex","init_"+s).data("fileindex","init_"+s));a._raise("filesorted",{previewId:e(t.item).attr("id"),oldIndex:o,newIndex:l,stack:a.initialPreviewConfig})}},r.data("kvsortable")&&r.kvsortable("destroy"),e.extend(!0,t,a.fileActionSettings.dragSettings),r.kvsortable(t))},_initPreview:function(e){var t,a=this,r=a.initialCaption||"";return a.previewCache.count()?(t=a.previewCache.out(),r=e&&a.initialCaption?a.initialCaption:t.caption,a.$preview.html(t.content),a._setInitThumbAttr(),a._setCaption(r),a._initSortable(),void(i.isEmpty(t.content)||a.$container.removeClass("file-input-new"))):(a._clearPreview(),void(e?a._setCaption(r):a._initCaption()))},_getZoomButton:function(e){var i=this,t=i.previewZoomButtonIcons[e],a=i.previewZoomButtonClasses[e],r=' title="'+(i.previewZoomButtonTitles[e]||"")+'" ',n=r+("close"===e?' data-dismiss="modal" aria-hidden="true"':"");return"fullscreen"!==e&&"borderless"!==e&&"toggleheader"!==e||(n+=' data-toggle="button" aria-pressed="false" autocomplete="off"'),'<button type="button" class="'+a+" btn-"+e+'"'+n+">"+t+"</button>"},_getModalContent:function(){var e=this;return e._getLayoutTemplate("modal").replace(/\{zoomFrameClass}/g,e.frameClass).replace(/\{heading}/g,e.msgZoomModalHeading).replace(/\{prev}/g,e._getZoomButton("prev")).replace(/\{next}/g,e._getZoomButton("next")).replace(/\{toggleheader}/g,e._getZoomButton("toggleheader")).replace(/\{fullscreen}/g,e._getZoomButton("fullscreen")).replace(/\{borderless}/g,e._getZoomButton("borderless")).replace(/\{close}/g,e._getZoomButton("close"))},_listenModalEvent:function(e){var t=this,a=t.$modal,r=function(e){return{sourceEvent:e,previewId:a.data("previewId"),modal:a}};a.on(e+".bs.modal",function(n){var o=a.find(".btn-fullscreen"),l=a.find(".btn-borderless");t._raise("filezoom"+e,r(n)),"shown"===e&&(l.removeClass("active").attr("aria-pressed","false"),o.removeClass("active").attr("aria-pressed","false"),a.hasClass("file-zoom-fullscreen")&&(t._maximizeZoomDialog(),i.checkFullScreen()?o.addClass("active").attr("aria-pressed","true"):l.addClass("active").attr("aria-pressed","true")))})},_initZoom:function(){var t,a=this,r=a._getLayoutTemplate("modalMain"),n="#"+i.MODAL_ID;a.showPreview&&(a.$modal=e(n),a.$modal&&a.$modal.length||(t=e(document.createElement("div")).html(r).insertAfter(a.$container),a.$modal=e(n).insertBefore(t),t.remove()),i.initModal(a.$modal),a.$modal.html(a._getModalContent()),e.each(i.MODAL_EVENTS,function(e,i){a._listenModalEvent(i)}))},_initZoomButtons:function(){var t,a,r=this,n=r.$modal.data("previewId")||"",o=r.$preview,l=o.find(i.FRAMES).toArray(),s=l.length,d=r.$modal.find(".btn-prev"),c=r.$modal.find(".btn-next");return l.length<2?(d.hide(),void c.hide()):(d.show(),c.show(),void(s&&(t=e(l[0]),a=e(l[s-1]),d.removeAttr("disabled"),c.removeAttr("disabled"),t.length&&t.attr("id")===n&&d.attr("disabled",!0),a.length&&a.attr("id")===n&&c.attr("disabled",!0))))},_maximizeZoomDialog:function(){var i=this,t=i.$modal,a=t.find(".modal-header:visible"),r=t.find(".modal-footer:visible"),n=t.find(".modal-body"),o=e(window).height(),l=0;t.addClass("file-zoom-fullscreen"),a&&a.length&&(o-=a.outerHeight(!0)),r&&r.length&&(o-=r.outerHeight(!0)),n&&n.length&&(l=n.outerHeight(!0)-n.height(),o-=l),t.find(".kv-zoom-body").height(o)},_resizeZoomDialog:function(e){var t=this,a=t.$modal,r=a.find(".btn-fullscreen"),n=a.find(".btn-borderless");if(a.hasClass("file-zoom-fullscreen"))i.toggleFullScreen(!1),e?r.hasClass("active")||(a.removeClass("file-zoom-fullscreen"),t._resizeZoomDialog(!0),n.hasClass("active")&&n.removeClass("active").attr("aria-pressed","false")):r.hasClass("active")?r.removeClass("active").attr("aria-pressed","false"):(a.removeClass("file-zoom-fullscreen"),t.$modal.find(".kv-zoom-body").css("height",t.zoomModalHeight));else{if(!e)return void t._maximizeZoomDialog();i.toggleFullScreen(!0)}a.focus()},_setZoomContent:function(t,a){var r,n,o,l,s,d,c,p,u,f,m=this,g=t.attr("id"),v=m.$modal,h=v.find(".btn-prev"),w=v.find(".btn-next"),_=v.find(".btn-fullscreen"),b=v.find(".btn-borderless"),C=v.find(".btn-toggleheader"),y=m.$preview.find("#zoom-"+g);n=y.attr("data-template")||"generic",r=y.find(".kv-file-content"),o=r.length?r.html():"",u=t.data("caption")||"",f=t.data("size")||"",l=u+" "+f,v.find(".kv-zoom-title").html(l),s=v.find(".kv-zoom-body"),v.removeClass("kv-single-content"),a?(p=s.clone().insertAfter(s),s.html(o).hide(),p.fadeOut("fast",function(){s.fadeIn("fast"),p.remove()})):s.html(o),c=m.previewZoomSettings[n],c&&(d=s.find(".kv-preview-data"),i.addCss(d,"file-zoom-detail"),e.each(c,function(e,i){d.css(e,i),(d.attr("width")&&"width"===e||d.attr("height")&&"height"===e)&&d.removeAttr(e)})),v.data("previewId",g),m._handler(h,"click",function(){m._zoomSlideShow("prev",g)}),m._handler(w,"click",function(){m._zoomSlideShow("next",g)}),m._handler(_,"click",function(){m._resizeZoomDialog(!0)}),m._handler(b,"click",function(){
m._resizeZoomDialog(!1)}),m._handler(C,"click",function(){var e,i=v.find(".modal-header"),t=v.find(".modal-body .floating-buttons"),a=i.find(".kv-zoom-actions"),r=function(e){var t=m.$modal.find(".kv-zoom-body"),a=m.zoomModalHeight;v.hasClass("file-zoom-fullscreen")&&(a=t.outerHeight(!0),e||(a-=i.outerHeight(!0))),t.css("height",e?a+e:a)};i.is(":visible")?(e=i.outerHeight(!0),i.slideUp("slow",function(){a.find(".btn").appendTo(t),r(e)})):(t.find(".btn").appendTo(a),i.slideDown("slow",function(){r()})),v.focus()}),m._handler(v,"keydown",function(e){var i=e.which||e.keyCode;37!==i||h.attr("disabled")||m._zoomSlideShow("prev",g),39!==i||w.attr("disabled")||m._zoomSlideShow("next",g)})},_zoomPreview:function(e){var t,a=this,r=a.$modal;if(!e.length)throw"Cannot zoom to detailed preview!";i.initModal(r),r.html(a._getModalContent()),t=e.closest(i.FRAMES),a._setZoomContent(t),r.modal("show"),a._initZoomButtons()},_zoomSlideShow:function(t,a){var r,n,o,l=this,s=l.$modal.find(".kv-zoom-actions .btn-"+t),d=l.$preview.find(i.FRAMES).toArray(),c=d.length;if(!s.attr("disabled")){for(n=0;c>n;n++)if(e(d[n]).attr("id")===a){o="prev"===t?n-1:n+1;break}0>o||o>=c||!d[o]||(r=e(d[o]),r.length&&l._setZoomContent(r,!0),l._initZoomButtons(),l._raise("filezoom"+t,{previewId:a,modal:l.$modal}))}},_initZoomButton:function(){var i=this;i.$preview.find(".kv-file-zoom").each(function(){var t=e(this);i._handler(t,"click",function(){i._zoomPreview(t)})})},_clearObjects:function(i){i.find("video audio").each(function(){this.pause(),e(this).remove()}),i.find("img object div").each(function(){e(this).remove()})},_clearFileInput:function(){var t,a,r,n=this,o=n.$element;n.fileInputCleared=!0,i.isEmpty(o.val())||(n.isIE9||n.isIE10?(t=o.closest("form"),a=e(document.createElement("form")),r=e(document.createElement("div")),o.before(r),t.length?t.after(a):r.after(a),a.append(o).trigger("reset"),r.before(o).remove(),a.remove()):o.val(""))},_resetUpload:function(){var e=this;e.uploadCache={content:[],config:[],tags:[],append:!0},e.uploadCount=0,e.uploadStatus={},e.uploadLog=[],e.uploadAsyncCount=0,e.loadedImages=[],e.totalImagesCount=0,e.$btnUpload.removeAttr("disabled"),e._setProgress(0),i.addCss(e.$progress,"hide"),e._resetErrors(!1),e.ajaxAborted=!1,e.ajaxRequests=[],e._resetCanvas(),e.cacheInitialPreview={},e.overwriteInitial&&(e.initialPreview=[],e.initialPreviewConfig=[],e.initialPreviewThumbTags=[],e.previewCache.data={content:[],config:[],tags:[]})},_resetCanvas:function(){var e=this;e.canvas&&e.imageCanvasContext&&e.imageCanvasContext.clearRect(0,0,e.canvas.width,e.canvas.height)},_hasInitialPreview:function(){var e=this;return!e.overwriteInitial&&e.previewCache.count()},_resetPreview:function(){var e,i,t=this;t.previewCache.count()?(e=t.previewCache.out(),t.$preview.html(e.content),t._setInitThumbAttr(),i=t.initialCaption?t.initialCaption:e.caption,t._setCaption(i)):(t._clearPreview(),t._initCaption()),t.showPreview&&(t._initZoom(),t._initSortable())},_clearDefaultPreview:function(){var e=this;e.$preview.find(".file-default-preview").remove()},_validateDefaultPreview:function(){var e=this;e.showPreview&&!i.isEmpty(e.defaultPreviewContent)&&(e.$preview.html('<div class="file-default-preview">'+e.defaultPreviewContent+"</div>"),e.$container.removeClass("file-input-new"),e._initClickable())},_resetPreviewThumbs:function(e){var i,t=this;return e?(t._clearPreview(),void t.clearStack()):void(t._hasInitialPreview()?(i=t.previewCache.out(),t.$preview.html(i.content),t._setInitThumbAttr(),t._setCaption(i.caption),t._initPreviewActions()):t._clearPreview())},_getLayoutTemplate:function(e){var t=this,a=t.layoutTemplates[e];return i.isEmpty(t.customLayoutTags)?a:i.replaceTags(a,t.customLayoutTags)},_getPreviewTemplate:function(e){var t=this,a=t.previewTemplates[e];return i.isEmpty(t.customPreviewTags)?a:i.replaceTags(a,t.customPreviewTags)},_getOutData:function(e,i,t){var a=this;return e=e||{},i=i||{},t=t||a.filestack.slice(0)||{},{form:a.formdata,files:t,filenames:a.filenames,filescount:a.getFilesCount(),extra:a._getExtraData(),response:i,reader:a.reader,jqXHR:e}},_getMsgSelected:function(e){var i=this,t=1===e?i.fileSingle:i.filePlural;return e>0?i.msgSelected.replace("{n}",e).replace("{files}",t):i.msgNoFilesSelected},_getThumbs:function(e){return e=e||"",this.$preview.find(i.FRAMES+":not(.file-preview-initial)"+e)},_getExtraData:function(e,i){var t=this,a=t.uploadExtraData;return"function"==typeof t.uploadExtraData&&(a=t.uploadExtraData(e,i)),a},_initXhr:function(e,i,t){var a=this;return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,n=e.total,o=e.loaded||e.position;e.lengthComputable&&(r=Math.floor(o/n*100)),i?a._setAsyncUploadStatus(i,r,t):a._setProgress(r)},!1),e},_ajaxSubmit:function(i,t,a,r,n,o){var l,s=this;s._raise("filepreajax",[n,o])&&(s._uploadExtra(n,o),l=e.extend(!0,{},{xhr:function(){var i=e.ajaxSettings.xhr();return s._initXhr(i,n,s.getFileStack().length)},url:s.uploadUrl,type:"POST",dataType:"json",data:s.formdata,cache:!1,processData:!1,contentType:!1,beforeSend:i,success:t,complete:a,error:r},s.ajaxSettings),s.ajaxRequests.push(e.ajax(l)))},_mergeArray:function(e,t){var a=this,r=i.cleanArray(a[e]),n=i.cleanArray(t);a[e]=r.concat(n)},_initUploadSuccess:function(t,a,r){var n,o,l,s,d,c,p,u,f,m=this;m.showPreview&&"object"==typeof t&&!e.isEmptyObject(t)&&void 0!==t.initialPreview&&t.initialPreview.length>0&&(m.hasInitData=!0,c=t.initialPreview||[],p=t.initialPreviewConfig||[],u=t.initialPreviewThumbTags||[],n=!(void 0!==t.append&&!t.append),c.length>0&&!i.isArray(c)&&(c=c.split(m.initialPreviewDelimiter)),m._mergeArray("initialPreview",c),m._mergeArray("initialPreviewConfig",p),m._mergeArray("initialPreviewThumbTags",u),void 0!==a?r?(f=a.attr("data-fileindex"),m.uploadCache.content[f]=c[0],m.uploadCache.config[f]=p[0]||[],m.uploadCache.tags[f]=u[0]||[],m.uploadCache.append=n):(l=m.previewCache.add(c,p[0],u[0],n),o=m.previewCache.get(l,!1),s=e(document.createElement("div")).html(o).hide().insertAfter(a),d=s.find(".kv-zoom-cache"),d&&d.length&&d.insertAfter(a),a.fadeOut("slow",function(){var e=s.find(".file-preview-frame");e&&e.length&&e.insertBefore(a).fadeIn("slow").css("display:inline-block"),m._initPreviewActions(),m._clearFileInput(),i.cleanZoomCache(m.$preview.find("#zoom-"+a.attr("id"))),a.remove(),s.remove(),m._initSortable()})):(m.previewCache.set(c,p,u,n),m._initPreview(),m._initPreviewActions()))},_initSuccessThumbs:function(){var t=this;t.showPreview&&t._getThumbs(i.FRAMES+".file-preview-success").each(function(){var a=e(this),r=t.$preview,n=a.find(".kv-file-remove");n.removeAttr("disabled"),t._handler(n,"click",function(){var e=a.attr("id"),n=t._raise("filesuccessremove",[e,a.data("fileindex")]);i.cleanMemory(a),n!==!1&&a.fadeOut("slow",function(){i.cleanZoomCache(r.find("#zoom-"+e)),a.remove(),r.find(i.FRAMES).length||t.reset()})})})},_checkAsyncComplete:function(){var i,t,a=this;for(t=0;t<a.filestack.length;t++)if(a.filestack[t]&&(i=a.previewInitId+"-"+t,-1===e.inArray(i,a.uploadLog)))return!1;return a.uploadAsyncCount===a.uploadLog.length},_uploadExtra:function(i,t){var a=this,r=a._getExtraData(i,t);0!==r.length&&e.each(r,function(e,i){a.formdata.append(e,i)})},_uploadSingle:function(t,a,r){var n,o,l,s,d,c,p,u,f,m,g=this,v=g.getFileStack().length,h=new FormData,w=g.previewInitId+"-"+t,_=g.filestack.length>0||!e.isEmptyObject(g.uploadExtraData),b=e("#"+w).find(".file-thumb-progress"),C={id:w,index:t};g.formdata=h,g.showPreview&&(o=e("#"+w+":not(.file-preview-initial)"),s=o.find(".kv-file-upload"),d=o.find(".kv-file-remove"),b.removeClass("hide")),0===v||!_||s&&s.hasClass("disabled")||g._abort(C)||(m=function(e,i){g.updateStack(e,void 0),g.uploadLog.push(i),g._checkAsyncComplete()&&(g.fileBatchCompleted=!0)},l=function(){var e,t,a,r=g.uploadCache,n=0,o=g.cacheInitialPreview;g.fileBatchCompleted&&(o&&o.content&&(n=o.content.length),setTimeout(function(){if(g.showPreview){if(g.previewCache.set(r.content,r.config,r.tags,r.append),n){for(t=0;t<r.content.length;t++)a=t+n,o.content[a]=r.content[t],o.config.length&&(o.config[a]=r.config[t]),o.tags.length&&(o.tags[a]=r.tags[t]);g.initialPreview=i.cleanArray(o.content),g.initialPreviewConfig=i.cleanArray(o.config),g.initialPreviewThumbTags=i.cleanArray(o.tags)}else g.initialPreview=r.content,g.initialPreviewConfig=r.config,g.initialPreviewThumbTags=r.tags;g.cacheInitialPreview={},g.hasInitData&&(g._initPreview(),g._initPreviewActions())}g.unlock(),g._clearFileInput(),e=g.$preview.find(".file-preview-initial"),g.uploadAsync&&e.length&&(i.addCss(e,i.SORT_CSS),g._initSortable()),g._raise("filebatchuploadcomplete",[g.filestack,g._getExtraData()]),g.uploadCount=0,g.uploadStatus={},g.uploadLog=[],g._setProgress(101)},100))},c=function(a){n=g._getOutData(a),g.fileBatchCompleted=!1,g.showPreview&&(o.hasClass("file-preview-success")||(g._setThumbStatus(o,"Loading"),i.addCss(o,"file-uploading")),s.attr("disabled",!0),d.attr("disabled",!0)),r||g.lock(),g._raise("filepreupload",[n,w,t]),e.extend(!0,C,n),g._abort(C)&&(a.abort(),g._setProgressCancelled())},p=function(a,l,d){var c=g.showPreview&&o.attr("id")?o.attr("id"):w;n=g._getOutData(d,a),e.extend(!0,C,n),setTimeout(function(){i.isEmpty(a)||i.isEmpty(a.error)?(g.showPreview&&(g._setThumbStatus(o,"Success"),s.hide(),g._initUploadSuccess(a,o,r),g._setProgress(101,b)),g._raise("fileuploaded",[n,c,t]),r?m(t,c):g.updateStack(t,void 0)):(g._showUploadError(a.error,C),g._setPreviewError(o,t),r&&m(t,c))},100)},u=function(){setTimeout(function(){g.showPreview&&(s.removeAttr("disabled"),d.removeAttr("disabled"),o.removeClass("file-uploading")),r?l():(g.unlock(!1),g._clearFileInput()),g._initSuccessThumbs()},100)},f=function(i,n,l){var s=g.ajaxOperations.uploadThumb,d=g._parseError(s,i,l,r?a[t].name:null);setTimeout(function(){r&&m(t,w),g.uploadStatus[w]=100,g._setPreviewError(o,t),e.extend(!0,C,g._getOutData(i)),g._setProgress(101,b,g.msgAjaxProgressError.replace("{operation}",s)),g._showUploadError(d,C)},100)},h.append(g.uploadFileAttr,a[t],g.filenames[t]),h.append("file_id",t),g._ajaxSubmit(c,p,u,f,w,t))},_uploadBatch:function(){var t,a,r,n,o,l=this,s=l.filestack,d=s.length,c={},p=l.filestack.length>0||!e.isEmptyObject(l.uploadExtraData);l.formdata=new FormData,0!==d&&p&&!l._abort(c)&&(o=function(){e.each(s,function(e){l.updateStack(e,void 0)}),l._clearFileInput()},t=function(t){l.lock();var a=l._getOutData(t);l.showPreview&&l._getThumbs().each(function(){var t=e(this),a=t.find(".kv-file-upload"),r=t.find(".kv-file-remove");t.hasClass("file-preview-success")||(l._setThumbStatus(t,"Loading"),i.addCss(t,"file-uploading")),a.attr("disabled",!0),r.attr("disabled",!0)}),l._raise("filebatchpreupload",[a]),l._abort(a)&&(t.abort(),l._setProgressCancelled())},a=function(t,a,r){var n=l._getOutData(r,t),s=l._getThumbs(":not(.file-preview-error)"),d=0,c=i.isEmpty(t)||i.isEmpty(t.errorkeys)?[]:t.errorkeys;i.isEmpty(t)||i.isEmpty(t.error)?(l._raise("filebatchuploadsuccess",[n]),o(),l.showPreview?(s.each(function(){var i=e(this),t=i.find(".kv-file-upload");i.find(".kv-file-upload").hide(),l._setThumbStatus(i,"Success"),i.removeClass("file-uploading"),t.removeAttr("disabled")}),l._initUploadSuccess(t)):l.reset(),l._setProgress(101)):(l.showPreview&&(s.each(function(){var i=e(this),t=i.find(".kv-file-remove"),a=i.find(".kv-file-upload");return i.removeClass("file-uploading"),a.removeAttr("disabled"),t.removeAttr("disabled"),0===c.length?void l._setPreviewError(i):(-1!==e.inArray(d,c)?l._setPreviewError(i):(i.find(".kv-file-upload").hide(),l._setThumbStatus(i,"Success"),l.updateStack(d,void 0)),void d++)}),l._initUploadSuccess(t)),l._showUploadError(t.error,n,"filebatchuploaderror"))},n=function(){l.unlock(),l._initSuccessThumbs(),l._clearFileInput(),l._raise("filebatchuploadcomplete",[l.filestack,l._getExtraData()])},r=function(i,t,a){var r=l._getOutData(i),n=l.ajaxOperations.uploadBatch,o=l._parseError(n,i,a);l._showUploadError(o,r,"filebatchuploaderror"),l.uploadFileCount=d-1,l.showPreview&&(l._getThumbs().each(function(){var i=e(this),t=i.attr("data-fileindex");i.removeClass("file-uploading"),void 0!==l.filestack[t]&&l._setPreviewError(i)}),l._getThumbs().removeClass("file-uploading"),l._getThumbs(" .kv-file-upload").removeAttr("disabled"),l._getThumbs(" .kv-file-delete").removeAttr("disabled"),l._setProgress(101,l.$progress,l.msgAjaxProgressError.replace("{operation}",n)))},e.each(s,function(e,t){i.isEmpty(s[e])||l.formdata.append(l.uploadFileAttr,t,l.filenames[e])}),l._ajaxSubmit(t,a,n,r))},_uploadExtraOnly:function(){var e,t,a,r,n=this,o={};n.formdata=new FormData,n._abort(o)||(e=function(e){n.lock();var i=n._getOutData(e);n._raise("filebatchpreupload",[i]),n._setProgress(50),o.data=i,o.xhr=e,n._abort(o)&&(e.abort(),n._setProgressCancelled())},t=function(e,t,a){var r=n._getOutData(a,e);i.isEmpty(e)||i.isEmpty(e.error)?(n._raise("filebatchuploadsuccess",[r]),n._clearFileInput(),n._initUploadSuccess(e),n._setProgress(101)):n._showUploadError(e.error,r,"filebatchuploaderror")},a=function(){n.unlock(),n._clearFileInput(),n._raise("filebatchuploadcomplete",[n.filestack,n._getExtraData()])},r=function(e,i,t){var a=n._getOutData(e),r=n.ajaxOperations.uploadExtra,l=n._parseError(r,e,t);o.data=a,n._showUploadError(l,a,"filebatchuploaderror"),n._setProgress(101,n.$progress,n.msgAjaxProgressError.replace("{operation}",r))},n._ajaxSubmit(e,t,a,r))},_deleteFileIndex:function(t){var a=this,r=t.attr("data-fileindex");"init_"===r.substring(0,5)&&(r=parseInt(r.replace("init_","")),a.initialPreview=i.spliceArray(a.initialPreview,r),a.initialPreviewConfig=i.spliceArray(a.initialPreviewConfig,r),a.initialPreviewThumbTags=i.spliceArray(a.initialPreviewThumbTags,r),a.$preview.find(i.FRAMES).each(function(){var i=e(this),t=i.attr("data-fileindex");"init_"===t.substring(0,5)&&(t=parseInt(t.replace("init_","")),t>r&&(t--,i.attr("data-fileindex","init_"+t)))}),a.uploadAsync&&(a.cacheInitialPreview=a.getPreview()))},_initFileActions:function(){var t=this,a=t.$preview;t.showPreview&&(t._initZoomButton(),a.find(i.FRAMES+" .kv-file-remove").each(function(){var r,n,o,l,s=e(this),d=s.closest(i.FRAMES),c=d.attr("id"),p=d.attr("data-fileindex");t._handler(s,"click",function(){return l=t._raise("filepreremove",[c,p]),l!==!1&&t._validateMinCount()?(r=d.hasClass("file-preview-error"),i.cleanMemory(d),void d.fadeOut("slow",function(){i.cleanZoomCache(a.find("#zoom-"+c)),t.updateStack(p,void 0),t._clearObjects(d),d.remove(),c&&r&&t.$errorContainer.find('li[data-file-id="'+c+'"]').fadeOut("fast",function(){e(this).remove(),t._errorsExist()||t._resetErrors()}),t._clearFileInput();var l=t.getFileStack(!0),s=t.previewCache.count(),u=l.length,f=t.showPreview&&a.find(i.FRAMES).length;0!==u||0!==s||f?(n=s+u,o=n>1?t._getMsgSelected(n):l[0]?t._getFileNames()[0]:"",t._setCaption(o)):t.reset(),t._raise("fileremoved",[c,p])})):!1})}),t.$preview.find(i.FRAMES+" .kv-file-upload").each(function(){var a=e(this);t._handler(a,"click",function(){var e=a.closest(i.FRAMES),r=e.attr("data-fileindex");e.hasClass("file-preview-error")||t._uploadSingle(r,t.filestack,!1)})}))},_initPreviewActions:function(){var t=this,a=t.$preview,r=t.deleteExtraData||{},n=i.FRAMES+" .kv-file-remove",o=function(){var e=t.isUploadable?t.previewCache.count():t.$element.get(0).files.length;0!==a.find(n).length||e||(t.reset(),t.initialCaption="")};t._initZoomButton(),a.find(n).each(function(){var n=e(this),l=n.data("url")||t.deleteUrl,s=n.data("key");if(!i.isEmpty(l)&&void 0!==s){var d,c,p,u,f=n.closest(i.FRAMES),m=t.previewCache.data,g=f.data("fileindex");g=parseInt(g.replace("init_","")),p=i.isEmpty(m.config)&&i.isEmpty(m.config[g])?null:m.config[g],u=i.isEmpty(p)||i.isEmpty(p.extra)?r:p.extra,"function"==typeof u&&(u=u()),c={id:n.attr("id"),key:s,extra:u},d=e.extend(!0,{},{url:l,type:"POST",dataType:"json",data:e.extend(!0,{},{key:s},u),beforeSend:function(e){t.ajaxAborted=!1,t._raise("filepredelete",[s,e,u]),t.ajaxAborted?e.abort():(i.addCss(f,"file-uploading"),i.addCss(n,"disabled"))},success:function(e,r,l){var d,p;return i.isEmpty(e)||i.isEmpty(e.error)?(t.previewCache.init(),g=parseInt(f.data("fileindex").replace("init_","")),t.previewCache.unset(g),d=t.previewCache.count(),p=d>0?t._getMsgSelected(d):"",t._deleteFileIndex(f),t._setCaption(p),t._raise("filedeleted",[s,l,u]),f.removeClass("file-uploading").addClass("file-deleted"),void f.fadeOut("slow",function(){i.cleanZoomCache(a.find("#zoom-"+f.attr("id"))),t._clearObjects(f),f.remove(),o(),d||0!==t.getFileStack().length||(t._setCaption(""),t.reset())})):(c.jqXHR=l,c.response=e,t._showError(e.error,c,"filedeleteerror"),f.removeClass("file-uploading"),n.removeClass("disabled"),void o())},error:function(e,i,a){var r=t.ajaxOperations.deleteThumb,n=t._parseError(r,e,a);c.jqXHR=e,c.response={},t._showError(n,c,"filedeleteerror"),f.removeClass("file-uploading"),o()}},t.ajaxDeleteSettings),t._handler(n,"click",function(){return t._validateMinCount()?void e.ajax(d):!1})}})},_hideFileIcon:function(){this.overwriteInitial&&this.$captionContainer.find(".kv-caption-icon").hide()},_showFileIcon:function(){this.$captionContainer.find(".kv-caption-icon").show()},_getSize:function(i){var t,a,r,n=this,o=parseFloat(i),l=n.fileSizeGetter;return e.isNumeric(i)&&e.isNumeric(o)?("function"==typeof l?r=l(o):0===o?r="0.00 B":(t=Math.floor(Math.log(o)/Math.log(1024)),a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=1*(o/Math.pow(1024,t)).toFixed(2)+" "+a[t]),n._getLayoutTemplate("size").replace("{sizeText}",r)):""},_generatePreviewTemplate:function(e,t,a,r,n,o,l,s,d,c,p){var u,f=this,m=f.slug(a),g="",v=f.previewSettings[e]||f.defaults.previewSettings[e],h=v&&v.width?v.width:"",w=v&&v.height?v.height:"",_=d||f._renderFileFooter(m,l,i.isEmpty(h)?"auto":h,o),b=f._getPreviewIcon(a),C=b&&f.preferIconicPreview,y=b&&f.preferIconicZoomPreview,E=function(t,o,l,d){var u=l?"zoom-"+n:n,g=f._getPreviewTemplate(t),v=(s||"")+" "+d;return f.frameClass&&(v=f.frameClass+" "+v),l&&(v=v.replace(" "+i.SORT_CSS,"")),g=f._parseFilePreviewIcon(g,a),"text"===t&&(o=i.htmlEncode(o)),g.replace(/\{previewId}/g,u).replace(/\{caption}/g,m).replace(/\{frameClass}/g,v).replace(/\{type}/g,r).replace(/\{fileindex}/g,c).replace(/\{width}/g,h).replace(/\{height}/g,w).replace(/\{footer}/g,_).replace(/\{data}/g,o).replace(/\{template}/g,p||e)};return c=c||n.slice(n.lastIndexOf("-")+1),f.fileActionSettings.showZoom&&(g=E(y?"other":e,t,!0,"kv-zoom-thumb")),g="\n"+f._getLayoutTemplate("zoomCache").replace("{zoomContent}",g),u=E(C?"other":e,t,!1,"kv-preview-thumb"),u+g},_previewDefault:function(t,a,r){var n=this,o=n.$preview;if(n.showPreview){var l,s=t?t.name:"",d=t?t.type:"",c=t.size||0,p=n.slug(s),u=r===!0&&!n.isUploadable,f=i.objUrl.createObjectURL(t);n._clearDefaultPreview(),l=n._generatePreviewTemplate("other",f,s,d,a,u,c),o.append("\n"+l),n._setThumbAttr(a,p,c),r===!0&&n.isUploadable&&n._setThumbStatus(e("#"+a),"Error")}},_previewFile:function(e,i,t,a,r){if(this.showPreview){var n,o=this,l=o._parseFileType(i),s=i?i.name:"",d=o.slug(s),c=o.allowedPreviewTypes,p=o.allowedPreviewMimeTypes,u=o.$preview,f=c&&c.indexOf(l)>=0,m=i.size||0,g="text"===l||"html"===l||"image"===l?t.target.result:r,v=p&&-1!==p.indexOf(i.type);"html"===l&&o.purifyHtml&&window.DOMPurify&&(g=window.DOMPurify.sanitize(g)),f||v?(n=o._generatePreviewTemplate(l,g,s,i.type,a,!1,m),o._clearDefaultPreview(),u.append("\n"+n),o._validateImage(a,d,i.type,i.size)):o._previewDefault(i,a),o._setThumbAttr(a,d,m),o._initSortable()}},_setThumbAttr:function(i,t,a){var r=this,n=e("#"+i);n.length&&(a=a&&a>0?r._getSize(a):"",n.data({caption:t,size:a}))},_setInitThumbAttr:function(){var e,t,a,r,n=this,o=n.previewCache.data,l=n.previewCache.count(!0);if(0!==l)for(var s=0;l>s;s++)e=o.config[s],r=n.previewInitId+"-init_"+s,t=i.ifSet("caption",e,i.ifSet("filename",e)),a=i.ifSet("size",e),n._setThumbAttr(r,t,a)},_slugDefault:function(e){return i.isEmpty(e)?"":String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},_readFiles:function(t){this.reader=new FileReader;var a,r=this,n=r.$element,o=r.$preview,l=r.reader,s=r.$previewContainer,d=r.$previewStatus,c=r.msgLoading,p=r.msgProgress,u=r.previewInitId,f=t.length,m=r.fileTypeSettings,g=r.filestack.length,v=r.allowedFileTypes,h=v?v.length:0,w=r.allowedFileExtensions,_=i.isEmpty(w)?"":w.join(", "),b=r.maxFilePreviewSize&&parseFloat(r.maxFilePreviewSize),C=o.length&&(!b||isNaN(b)),y=function(i,n,o,l){var s=e.extend(!0,{},r._getOutData({},{},t),{id:o,index:l}),d={id:o,index:l,file:n,files:t};return r._previewDefault(n,o,!0),r.isUploadable&&(r.addToStack(void 0),setTimeout(function(){a(l+1)},100)),r._initFileActions(),r.removeFromPreviewOnError&&e("#"+o).remove(),r.isUploadable?r._showUploadError(i,s):r._showError(i,d)};r.loadedImages=[],r.totalImagesCount=0,e.each(t,function(e,i){var t=r.fileTypeSettings.image;t&&t(i.type)&&r.totalImagesCount++}),a=function(e){if(i.isEmpty(n.attr("multiple"))&&(f=1),e>=f)return r.isUploadable&&r.filestack.length>0?r._raise("filebatchselected",[r.getFileStack()]):r._raise("filebatchselected",[t]),s.removeClass("file-thumb-loading"),void d.html("");var E,x,T,S,F,I,P,k,z,A,$=g+e,D=u+"-"+$,U=t[e],j=U.name?r.slug(U.name):"",R=(U.size||0)/1e3,M="",L=i.objUrl.createObjectURL(U),Z=0,O="";if(h>0)for(S=0;h>S;S++)k=v[S],z=r.msgFileTypes[k]||k,O+=0===S?z:", "+z;if(j===!1)return void a(e+1);if(0===j.length)return F=r.msgInvalidFileName.replace("{name}",i.htmlEncode(U.name)),void(r.isError=y(F,U,D,e));if(i.isEmpty(w)||(M=new RegExp("\\.("+w.join("|")+")$","i")),T=R.toFixed(2),r.maxFileSize>0&&R>r.maxFileSize)return F=r.msgSizeTooLarge.replace("{name}",j).replace("{size}",T).replace("{maxSize}",r.maxFileSize),void(r.isError=y(F,U,D,e));if(null!==r.minFileSize&&R<=i.getNum(r.minFileSize))return F=r.msgSizeTooSmall.replace("{name}",j).replace("{size}",T).replace("{minSize}",r.minFileSize),void(r.isError=y(F,U,D,e));if(!i.isEmpty(v)&&i.isArray(v)){for(S=0;S<v.length;S+=1)I=v[S],A=m[I],Z+=A&&"function"==typeof A&&A(U.type,U.name)?1:0;if(0===Z)return F=r.msgInvalidFileType.replace("{name}",j).replace("{types}",O),void(r.isError=y(F,U,D,e))}return 0!==Z||i.isEmpty(w)||!i.isArray(w)||i.isEmpty(M)||(P=i.compare(j,M),Z+=i.isEmpty(P)?0:P.length,0!==Z)?r.showPreview?!C&&R>b?(r.addToStack(U),s.addClass("file-thumb-loading"),r._previewDefault(U,D),r._initFileActions(),r._updateFileDetails(f),void a(e+1)):(o.length&&void 0!==FileReader?(d.html(c.replace("{index}",e+1).replace("{files}",f)),s.addClass("file-thumb-loading"),l.onerror=function(e){r._errorHandler(e,j)},l.onload=function(i){r._previewFile(e,U,i,D,L),r._initFileActions()},l.onloadend=function(){F=p.replace("{index}",e+1).replace("{files}",f).replace("{percent}",50).replace("{name}",j),setTimeout(function(){d.html(F),r._updateFileDetails(f),a(e+1)},100),r._raise("fileloaded",[U,D,e,l])},l.onprogress=function(i){if(i.lengthComputable){var t=i.loaded/i.total*100,a=Math.ceil(t);F=p.replace("{index}",e+1).replace("{files}",f).replace("{percent}",a).replace("{name}",j),setTimeout(function(){d.html(F)},100)}},E=m.text,x=m.image,E(U.type,j)?l.readAsText(U,r.textEncoding):x(U.type,j)?l.readAsDataURL(U):l.readAsArrayBuffer(U)):(r._previewDefault(U,D),setTimeout(function(){a(e+1),r._updateFileDetails(f)},100),r._raise("fileloaded",[U,D,e,l])),void r.addToStack(U)):(r.addToStack(U),setTimeout(function(){a(e+1)},100),void r._raise("fileloaded",[U,D,e,l])):(F=r.msgInvalidFileExtension.replace("{name}",j).replace("{extensions}",_),void(r.isError=y(F,U,D,e)))},a(0),r._updateFileDetails(f,!1)},_updateFileDetails:function(e){var t=this,a=t.$element,r=t.getFileStack(),n=i.isIE(9)&&i.findFileName(a.val())||a[0].files[0]&&a[0].files[0].name||r.length&&r[0].name||"",o=t.slug(n),l=t.isUploadable?r.length:e,s=t.previewCache.count()+l,d=l>1?t._getMsgSelected(s):o;t.isError?(t.$previewContainer.removeClass("file-thumb-loading"),t.$previewStatus.html(""),t.$captionContainer.find(".kv-caption-icon").hide()):t._showFileIcon(),t._setCaption(d,t.isError),t.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&t._raise("fileselect",[e,o]),t.previewCache.count()&&t._initPreviewActions()},_setThumbStatus:function(e,i){var t=this;if(t.showPreview){var a="indicator"+i,r=a+"Title",n="file-preview-"+i.toLowerCase(),o=e.find(".file-upload-indicator"),l=t.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"),"Error"===i&&e.find(".kv-file-upload").attr("disabled",!0),"Success"===i&&(e.find(".file-drag-handle").remove(),o.css("margin-left",0)),o.html(l[a]),o.attr("title",l[r]),e.addClass(n)}},_setProgressCancelled:function(){var e=this;e._setProgress(101,e.$progress,e.msgCancelled)},_setProgress:function(e,t,a){var r,n,o=this,l=Math.min(e,100),s=o.progressUploadThreshold,d=100>=e?o.progressTemplate:o.progressCompleteTemplate,c=100>l?o.progressTemplate:a?o.progressErrorTemplate:d;t=t||o.$progress,i.isEmpty(c)||(s&&l>s&&100>=e?r=c.replace(/\{percent}/g,s).replace(/\{status}/g,o.msgUploadThreshold):(n=e>100?o.msgUploadEnd:l+"%",r=c.replace(/\{percent}/g,l).replace(/\{status}/g,n)),t.html(r),a&&t.find('[role="progressbar"]').html(a))},_setFileDropZoneTitle:function(){var e,t=this,a=t.$container.find(".file-drop-zone"),r=t.dropZoneTitle;t.isClickable&&(e=i.isEmpty(t.$element.attr("multiple"))?t.fileSingle:t.filePlural,r+=t.dropZoneClickTitle.replace("{files}",e)),a.find("."+t.dropZoneTitleClass).remove(),t.isUploadable&&t.showPreview&&0!==a.length&&!(t.getFileStack().length>0)&&t.dropZoneEnabled&&(0===a.find(i.FRAMES).length&&i.isEmpty(t.defaultPreviewContent)&&a.prepend('<div class="'+t.dropZoneTitleClass+'">'+r+"</div>"),t.$container.removeClass("file-input-new"),i.addCss(t.$container,"file-input-ajax-new"))},_setAsyncUploadStatus:function(i,t,a){var r=this,n=0;r._setProgress(t,e("#"+i).find(".file-thumb-progress")),r.uploadStatus[i]=t,e.each(r.uploadStatus,function(e,i){n+=i}),r._setProgress(Math.floor(n/a))},_validateMinCount:function(){var e=this,i=e.isUploadable?e.getFileStack().length:e.$element.get(0).files.length;return e.validateInitialCount&&e.minFileCount>0&&e._getFileCount(i-1)<e.minFileCount?(e._noFilesError({}),!1):!0},_getFileCount:function(e){var i=this,t=0;return i.validateInitialCount&&!i.overwriteInitial&&(t=i.previewCache.count(),e+=t),e},_getFileId:function(e){var i,t=this,a=t.generateFileId;return"function"==typeof a?a(e,event):e?(i=e.webkitRelativePath||e.fileName||e.name||null,i?e.size+"-"+i.replace(/[^0-9a-zA-Z_-]/gim,""):null):null},_getFileName:function(e){return e&&e.name?this.slug(e.name):void 0},_getFileIds:function(e){var i=this;return i.fileids.filter(function(i){return e?void 0!==i:void 0!==i&&null!==i})},_getFileNames:function(e){var i=this;return i.filenames.filter(function(i){return e?void 0!==i:void 0!==i&&null!==i})},_setPreviewError:function(e,i,t){var a=this;void 0!==i&&a.updateStack(i,t),a.removeFromPreviewOnError?e.remove():a._setThumbStatus(e,"Error")},_checkDimensions:function(e,t,a,r,n,o,l){var s,d,c,p,u=this,f="Small"===t?"min":"max",m=u[f+"Image"+o];!i.isEmpty(m)&&a.length&&(c=a[0],d="Width"===o?c.naturalWidth||c.width:c.naturalHeight||c.height,p="Small"===t?d>=m:m>=d,p||(s=u["msgImage"+o+t].replace("{name}",n).replace("{size}",m),u._showUploadError(s,l),u._setPreviewError(r,e,null)))},_validateImage:function(e,i,t,a){var r,n,o,l=this,s=l.$preview,d=s.find("#"+e),c=d.attr("data-fileindex"),p=d.find("img");i=i||"Untitled",p.length&&l._handler(p,"load",function(){n=d.width(),o=s.width(),n>o&&(p.css("width","100%"),d.css("width","97%")),r={ind:c,id:e},l._checkDimensions(c,"Small",p,d,i,"Width",r),l._checkDimensions(c,"Small",p,d,i,"Height",r),l.resizeImage||(l._checkDimensions(c,"Large",p,d,i,"Width",r),l._checkDimensions(c,"Large",p,d,i,"Height",r)),l._raise("fileimageloaded",[e]),l.loadedImages.push({ind:c,img:p,thumb:d,pid:e,typ:t,siz:a,validated:!1}),l._validateAllImages()})},_validateAllImages:function(){var e,i,t,a=this,r={val:0},n=a.loadedImages.length,o=a.resizeIfSizeMoreThan;if(n===a.totalImagesCount&&(a._raise("fileimagesloaded"),a.resizeImage))for(e=0;e<a.loadedImages.length;e++)i=a.loadedImages[e],i.validated||(t=i.siz,t&&o&&t>1e3*o&&a._getResizedImage(i,r,n),a.loadedImages[e].validated=!0)},_getResizedImage:function(i,t,a){var r,n,o,l,s=this,d=e(i.img)[0],c=d.naturalWidth,p=d.naturalHeight,u=1,f=s.maxImageWidth||c,m=s.maxImageHeight||p,g=!(!c||!p),v=s.imageCanvas,h=s.imageCanvasContext,w=i.typ,_=i.pid,b=i.ind,C=i.thumb;if(o=function(e,i,t){s.isUploadable?s._showUploadError(e,i,t):s._showError(e,i,t),s._setPreviewError(C,b)},(!s.filestack[b]||!g||f>=c&&m>=p)&&(g&&s.filestack[b]&&s._raise("fileimageresized",[_,b]),t.val++,t.val===a&&s._raise("fileimagesresized"),!g))return void o(s.msgImageResizeError,{id:_,index:b},"fileimageresizeerror");w=w||s.resizeDefaultImageType,r=c>f,n=p>m,u="width"===s.resizePreference?r?f/c:n?m/p:1:n?m/p:r?f/c:1,s._resetCanvas(),c*=u,p*=u,v.width=c,v.height=p;try{h.drawImage(d,0,0,c,p),v.toBlob(function(e){s.filestack[b]=e,s._raise("fileimageresized",[_,b]),t.val++,t.val===a&&s._raise("fileimagesresized",[void 0,void 0]),e instanceof Blob||o(s.msgImageResizeError,{id:_,index:b},"fileimageresizeerror")},w,s.resizeQuality)}catch(y){t.val++,t.val===a&&s._raise("fileimagesresized",[void 0,void 0]),l=s.msgImageResizeException.replace("{errors}",y.message),o(l,{id:_,index:b},"fileimageresizeexception")}},_initBrowse:function(e){var i=this;i.showBrowse?(i.$btnFile=e.find(".btn-file"),i.$btnFile.append(i.$element)):i.$element.hide()},_initCaption:function(){var e=this,t=e.initialCaption||"";return e.overwriteInitial||i.isEmpty(t)?(e.$caption.html(""),!1):(e._setCaption(t),!0)},_setCaption:function(t,a){var r,n,o,l,s=this,d=s.getFileStack();if(s.$caption.length){if(a)r=e("<div>"+s.msgValidationError+"</div>").text(),o=d.length,l=o?1===o&&d[0]?s._getFileNames()[0]:s._getMsgSelected(o):s._getMsgSelected(s.msgNo),n='<span class="'+s.msgValidationErrorClass+'">'+s.msgValidationErrorIcon+(i.isEmpty(t)?l:t)+"</span>";else{if(i.isEmpty(t))return;r=e("<div>"+t+"</div>").text(),n=s._getLayoutTemplate("fileIcon")+r}s.$caption.html(n),s.$caption.attr("title",r),s.$captionContainer.find(".file-caption-ellipsis").attr("title",r)}},_createContainer:function(){var i=this,t=e(document.createElement("div")).attr({"class":"file-input file-input-new"}).html(i._renderMain());return i.$element.before(t),i._initBrowse(t),i.theme&&t.addClass("theme-"+i.theme),t},_refreshContainer:function(){var e=this,i=e.$container;i.before(e.$element),i.html(e._renderMain()),e._initBrowse(i)},_renderMain:function(){var e=this,i=e.isUploadable&&e.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",t=e.showClose?e._getLayoutTemplate("close"):"",a=e.showPreview?e._getLayoutTemplate("preview").replace(/\{class}/g,e.previewClass).replace(/\{dropClass}/g,i):"",r=e.isDisabled?e.captionClass+" file-caption-disabled":e.captionClass,n=e.captionTemplate.replace(/\{class}/g,r+" kv-fileinput-caption");return e.mainTemplate.replace(/\{class}/g,e.mainClass+(!e.showBrowse&&e.showCaption?" no-browse":"")).replace(/\{preview}/g,a).replace(/\{close}/g,t).replace(/\{caption}/g,n).replace(/\{upload}/g,e._renderButton("upload")).replace(/\{remove}/g,e._renderButton("remove")).replace(/\{cancel}/g,e._renderButton("cancel")).replace(/\{browse}/g,e._renderButton("browse"))},_renderButton:function(e){var t=this,a=t._getLayoutTemplate("btnDefault"),r=t[e+"Class"],n=t[e+"Title"],o=t[e+"Icon"],l=t[e+"Label"],s=t.isDisabled?" disabled":"",d="button";switch(e){case"remove":if(!t.showRemove)return"";break;case"cancel":if(!t.showCancel)return"";r+=" hide";break;case"upload":if(!t.showUpload)return"";t.isUploadable&&!t.isDisabled?a=t._getLayoutTemplate("btnLink").replace("{href}",t.uploadUrl):d="submit";break;case"browse":if(!t.showBrowse)return"";a=t._getLayoutTemplate("btnBrowse");break;default:return""}return r+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",i.isEmpty(l)||(l=' <span class="'+t.buttonLabelClass+'">'+l+"</span>"),a.replace("{type}",d).replace("{css}",r).replace("{title}",n).replace("{status}",s).replace("{icon}",o).replace("{label}",l);
},_renderThumbProgress:function(){var e=this;return'<div class="file-thumb-progress hide">'+e.progressTemplate.replace(/\{percent}/g,"0").replace(/\{status}/g,e.msgUploadBegin)+"</div>"},_renderFileFooter:function(e,t,a,r){var n,o=this,l=o.fileActionSettings,s=l.showRemove,d=l.showDrag,c=l.showUpload,p=l.showZoom,u=o._getLayoutTemplate("footer"),f=r?l.indicatorError:l.indicatorNew,m=r?l.indicatorErrorTitle:l.indicatorNewTitle;return t=o._getSize(t),n=o.isUploadable?u.replace(/\{actions}/g,o._renderFileActions(c,s,p,d,!1,!1,!1)).replace(/\{caption}/g,e).replace(/\{size}/g,t).replace(/\{width}/g,a).replace(/\{progress}/g,o._renderThumbProgress()).replace(/\{indicator}/g,f).replace(/\{indicatorTitle}/g,m):u.replace(/\{actions}/g,o._renderFileActions(!1,!1,p,d,!1,!1,!1)).replace(/\{caption}/g,e).replace(/\{size}/g,t).replace(/\{width}/g,a).replace(/\{progress}/g,"").replace(/\{indicator}/g,f).replace(/\{indicatorTitle}/g,m),n=i.replaceTags(n,o.previewThumbTags)},_renderFileActions:function(e,i,t,a,r,n,o,l){if(!(e||i||t||a))return"";var s,d=this,c=n===!1?"":' data-url="'+n+'"',p=o===!1?"":' data-key="'+o+'"',u="",f="",m="",g="",v=d._getLayoutTemplate("actions"),h=d.fileActionSettings,w=d.otherActionButtons.replace(/\{dataKey}/g,p),_=r?h.removeClass+" disabled":h.removeClass;return i&&(u=d._getLayoutTemplate("actionDelete").replace(/\{removeClass}/g,_).replace(/\{removeIcon}/g,h.removeIcon).replace(/\{removeTitle}/g,h.removeTitle).replace(/\{dataUrl}/g,c).replace(/\{dataKey}/g,p)),e&&(f=d._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g,h.uploadClass).replace(/\{uploadIcon}/g,h.uploadIcon).replace(/\{uploadTitle}/g,h.uploadTitle)),t&&(m=d._getLayoutTemplate("actionZoom").replace(/\{zoomClass}/g,h.zoomClass).replace(/\{zoomIcon}/g,h.zoomIcon).replace(/\{zoomTitle}/g,h.zoomTitle)),a&&l&&(s="drag-handle-init "+h.dragClass,g=d._getLayoutTemplate("actionDrag").replace(/\{dragClass}/g,s).replace(/\{dragTitle}/g,h.dragTitle).replace(/\{dragIcon}/g,h.dragIcon)),v.replace(/\{delete}/g,u).replace(/\{upload}/g,f).replace(/\{zoom}/g,m).replace(/\{drag}/g,g).replace(/\{other}/g,w)},_browse:function(e){var i=this;i._raise("filebrowse"),e&&e.isDefaultPrevented()||(i.isError&&!i.isUploadable&&i.clear(),i.$captionContainer.focus())},_filterDuplicate:function(e,i,t){var a=this,r=a._getFileId(e);r&&t&&t.indexOf(r)>-1||(t||(t=[]),i.push(e),t.push(r))},_change:function(t){var a=this,r=a.$element;if(!a.isUploadable&&i.isEmpty(r.val())&&a.fileInputCleared)return void(a.fileInputCleared=!1);a.fileInputCleared=!1;var n,o,l,s,d=[],c=arguments.length>1,p=a.isUploadable,u=c?t.originalEvent.dataTransfer.files:r.get(0).files,f=a.filestack.length,m=i.isEmpty(r.attr("multiple")),g=m&&f>0,v=0,h=a._getFileIds(),w=function(i,t,r,n){var o=e.extend(!0,{},a._getOutData({},{},u),{id:r,index:n}),l={id:r,index:n,file:t,files:u};return a.isUploadable?a._showUploadError(i,o):a._showError(i,l)};if(a.reader=null,a._resetUpload(),a._hideFileIcon(),a.isUploadable&&a.$container.find(".file-drop-zone ."+a.dropZoneTitleClass).remove(),c?e.each(u,function(e,i){i&&!i.type&&void 0!==i.size&&i.size%4096===0?v++:a._filterDuplicate(i,d,h)}):(u=t.target&&void 0===t.target.files?t.target.value?[{name:t.target.value.replace(/^.+\\/,"")}]:[]:t.target.files||{},e.each(u,function(e,i){a._filterDuplicate(i,d,h)})),i.isEmpty(d)||0===d.length)return p||a.clear(),a._showFolderError(v),void a._raise("fileselectnone");if(a._resetErrors(),s=d.length,o=a._getFileCount(a.isUploadable?a.getFileStack().length+s:s),a.maxFileCount>0&&o>a.maxFileCount){if(!a.autoReplace||s>a.maxFileCount)return l=a.autoReplace&&s>a.maxFileCount?s:o,n=a.msgFilesTooMany.replace("{m}",a.maxFileCount).replace("{n}",l),a.isError=w(n,null,null,null),a.$captionContainer.find(".kv-caption-icon").hide(),a._setCaption("",!0),void a.$container.removeClass("file-input-new file-input-ajax-new");o>a.maxFileCount&&a._resetPreviewThumbs(p)}else!p||g?(a._resetPreviewThumbs(!1),g&&a.clearStack()):!p||0!==f||a.previewCache.count()&&!a.overwriteInitial||a._resetPreviewThumbs(!0);a.isPreviewable?a._readFiles(d):a._updateFileDetails(1),a._showFolderError(v)},_abort:function(i){var t,a=this;return a.ajaxAborted&&"object"==typeof a.ajaxAborted&&void 0!==a.ajaxAborted.message?(t=e.extend(!0,{},a._getOutData(),i),t.abortData=a.ajaxAborted.data||{},t.abortMessage=a.ajaxAborted.message,a.cancel(),a._setProgress(101,a.$progress,a.msgCancelled),a._showUploadError(a.ajaxAborted.message,t,"filecustomerror"),!0):!1},_resetFileStack:function(){var t=this,a=0,r=[],n=[],o=[];t._getThumbs().each(function(){var l,s=e(this),d=s.attr("data-fileindex"),c=t.filestack[d],p=s.attr("id");"-1"!==d&&-1!==d&&(void 0!==c?(r[a]=c,n[a]=t._getFileName(c),o[a]=t._getFileId(c),s.attr({id:t.previewInitId+"-"+a,"data-fileindex":a}),a++):(l="uploaded-"+i.uniqId(),s.attr({id:l,"data-fileindex":"-1"}),t.$preview.find("#zoom-"+p).attr("id","zoom-"+l)))}),t.filestack=r,t.filenames=n,t.fileids=o},clearStack:function(){var e=this;return e.filestack=[],e.filenames=[],e.fileids=[],e.$element},updateStack:function(e,i){var t=this;return t.filestack[e]=i,t.filenames[e]=t._getFileName(i),t.fileids[e]=i&&t._getFileId(i)||null,t.$element},addToStack:function(e){var i=this;return i.filestack.push(e),i.filenames.push(i._getFileName(e)),i.fileids.push(i._getFileId(e)),i.$element},getFileStack:function(e){var i=this;return i.filestack.filter(function(i){return e?void 0!==i:void 0!==i&&null!==i})},getFilesCount:function(){var e=this,i=e.isUploadable?e.getFileStack().length:e.$element.get(0).files.length;return e._getFileCount(i)},lock:function(){var e=this;return e._resetErrors(),e.disable(),e.showRemove&&i.addCss(e.$container.find(".fileinput-remove"),"hide"),e.showCancel&&e.$container.find(".fileinput-cancel").removeClass("hide"),e._raise("filelock",[e.filestack,e._getExtraData()]),e.$element},unlock:function(e){var t=this;return void 0===e&&(e=!0),t.enable(),t.showCancel&&i.addCss(t.$container.find(".fileinput-cancel"),"hide"),t.showRemove&&t.$container.find(".fileinput-remove").removeClass("hide"),e&&t._resetFileStack(),t._raise("fileunlock",[t.filestack,t._getExtraData()]),t.$element},cancel:function(){var i,t=this,a=t.ajaxRequests,r=a.length;if(r>0)for(i=0;r>i;i+=1)t.cancelling=!0,a[i].abort();return t._setProgressCancelled(),t._getThumbs().each(function(){var i=e(this),a=i.attr("data-fileindex");i.removeClass("file-uploading"),void 0!==t.filestack[a]&&(i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),t.unlock()}),t.$element},clear:function(){var t,a=this;if(a._raise("fileclear"))return a.$btnUpload.removeAttr("disabled"),a._getThumbs().find("video,audio,img").each(function(){i.cleanMemory(e(this))}),a._resetUpload(),a.clearStack(),a._clearFileInput(),a._resetErrors(!0),a._hasInitialPreview()?(a._showFileIcon(),a._resetPreview(),a._initPreviewActions(),a.$container.removeClass("file-input-new")):(a._getThumbs().each(function(){a._clearObjects(e(this))}),a.isUploadable&&(a.previewCache.data={}),a.$preview.html(""),t=!a.overwriteInitial&&a.initialCaption.length>0?a.initialCaption:"",a.$caption.html(t),a.$caption.attr("title",""),i.addCss(a.$container,"file-input-new"),a._validateDefaultPreview()),0===a.$container.find(i.FRAMES).length&&(a._initCaption()||a.$captionContainer.find(".kv-caption-icon").hide()),a._hideFileIcon(),a._raise("filecleared"),a.$captionContainer.focus(),a._setFileDropZoneTitle(),a.$element},reset:function(){var e=this;if(e._raise("filereset"))return e._resetPreview(),e.$container.find(".fileinput-filename").text(""),i.addCss(e.$container,"file-input-new"),(e.$preview.find(i.FRAMES).length||e.isUploadable&&e.dropZoneEnabled)&&e.$container.removeClass("file-input-new"),e._setFileDropZoneTitle(),e.clearStack(),e.formdata={},e.$element},disable:function(){var e=this;return e.isDisabled=!0,e._raise("filedisabled"),e.$element.attr("disabled","disabled"),e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),e._initDragDrop(),e.$element},enable:function(){var e=this;return e.isDisabled=!1,e._raise("fileenabled"),e.$element.removeAttr("disabled"),e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),e._initDragDrop(),e.$element},upload:function(){var t,a,r,n=this,o=n.getFileStack().length,l={},s=!e.isEmptyObject(n._getExtraData());if(n.isUploadable&&!n.isDisabled){if(n.minFileCount>0&&n._getFileCount(o)<n.minFileCount)return void n._noFilesError(l);if(n._resetUpload(),0===o&&!s)return void n._showUploadError(n.msgUploadEmpty);if(n.$progress.removeClass("hide"),n.uploadCount=0,n.uploadStatus={},n.uploadLog=[],n.lock(),n._setProgress(2),0===o&&s)return void n._uploadExtraOnly();if(r=n.filestack.length,n.hasInitData=!1,!n.uploadAsync)return n._uploadBatch(),n.$element;for(a=n._getOutData(),n._raise("filebatchpreupload",[a]),n.fileBatchCompleted=!1,n.uploadCache={content:[],config:[],tags:[],append:!0},n.uploadAsyncCount=n.getFileStack().length,t=0;r>t;t++)n.uploadCache.content[t]=null,n.uploadCache.config[t]=null,n.uploadCache.tags[t]=null;for(n.$preview.find(".file-preview-initial").removeClass(i.SORT_CSS),n._initSortable(),n.cacheInitialPreview=n.getPreview(),t=0;r>t;t++)void 0!==n.filestack[t]&&n._uploadSingle(t,n.filestack,!0)}},destroy:function(){var i=this,t=i.$form,a=i.$container,r=i.$element,n=i.namespace;return e(document).off(n),e(window).off(n),t&&t.length&&t.off(n),r.insertBefore(a).off(n).removeData(),a.off().remove(),r},refresh:function(i){var t=this,a=t.$element;return i=i?e.extend(!0,{},t.options,i):t.options,t.destroy(),a.fileinput(i),a.val()&&a.trigger("change.fileinput"),a},zoom:function(t){var a=this,r=e("#"+t),n=a.$modal;return r.length?(i.initModal(n),n.html(a._getModalContent()),a._setZoomContent(r),n.modal("show"),void a._initZoomButtons()):void a._log('Cannot zoom to detailed preview! Invalid frame with id: "'+t+'".')},getPreview:function(){var e=this;return{content:e.initialPreview,config:e.initialPreviewConfig,tags:e.initialPreviewThumbTags}}},e.fn.fileinput=function(a){if(i.hasFileAPISupport()||i.isIE(9)){var r=Array.apply(null,arguments),n=[];switch(r.shift(),this.each(function(){var o,l=e(this),s=l.data("fileinput"),d="object"==typeof a&&a,c=d.theme||l.data("theme"),p={},u={},f=d.language||l.data("language")||e.fn.fileinput.defaults.language||"en";s||(c&&(u=e.fn.fileinputThemes[c]||{}),"en"===f||i.isEmpty(e.fn.fileinputLocales[f])||(p=e.fn.fileinputLocales[f]||{}),o=e.extend(!0,{},e.fn.fileinput.defaults,u,e.fn.fileinputLocales.en,p,d,l.data()),s=new t(this,o),l.data("fileinput",s)),"string"==typeof a&&n.push(s[a].apply(s,r))}),n.length){case 0:return this;case 1:return n[0];default:return n}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showBrowse:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,showClose:!0,showUploadedThumbs:!0,browseOnZoneClick:!1,autoReplace:!1,generateFileId:null,previewClass:"",captionClass:"",frameClass:"krajee-default",mainClass:"file-caption-main",mainTemplate:null,purifyHtml:!0,fileSizeGetter:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewAsData:!1,initialPreviewFileType:"image",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,removeFromPreviewOnError:!1,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:"btn btn-navigate",next:"btn btn-navigate",toggleheader:"btn btn-default btn-header-toggle",fullscreen:"btn btn-default",borderless:"btn btn-default",close:"btn btn-default"},preferIconicPreview:!1,preferIconicZoomPreview:!1,allowedPreviewTypes:void 0,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-other-icon",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"hidden-xs",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default",uploadUrl:null,uploadAsync:!0,uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",resizeIfSizeMoreThan:0,minFileSize:0,maxFileSize:0,maxFilePreviewSize:25600,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar progress-bar-success progress-bar-striped active",progressClass:"progress-bar progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar progress-bar-success",progressErrorClass:"progress-bar progress-bar-danger",progressUploadThreshold:99,previewFileType:"image",elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:'<span class="close kv-error-close">&times;</span>',slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear selected files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgNo:"No",msgNoFilesSelected:"No files selected",msgCancelled:"Cancelled",msgZoomModalHeading:"Detailed Preview",msgSizeTooSmall:'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileName:'Invalid or unsupported characters in file name "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgFileTypes:{image:"image",html:"HTML",text:"text",video:"video",audio:"audio",flash:"flash",pdf:"PDF",object:"object"},msgUploadAborted:"The file upload was aborted",msgUploadThreshold:"Processing...",msgUploadBegin:"Initializing...",msgUploadEnd:"Done",msgUploadEmpty:"No valid data available for upload.",msgValidationError:"Validation Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",msgAjaxError:"Something went wrong with the {operation} operation. Please try again later!",msgAjaxProgressError:"{operation} failed",ajaxOperations:{deleteThumb:"file delete",uploadThumb:"file upload",uploadBatch:"batch file upload",uploadExtra:"form data upload"},dropZoneTitle:"Drag & drop files here &hellip;",dropZoneClickTitle:"<br>(or click to select {files})",previewZoomButtonTitles:{prev:"View previous file",next:"View next file",toggleheader:"Toggle header",fullscreen:"Toggle full screen",borderless:"Toggle borderless mode",close:"Close detailed preview"}},e.fn.fileinput.Constructor=t,e(document).ready(function(){var i=e("input.file[type=file]");i.length&&i.fileinput()})});

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js":
/*!***************************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(e){"use strict";var t=typeof window==="undefined"?null:window;if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e(t)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}})(function e(t){"use strict";var r=function(t){return e(t)};r.version="0.7.4";if(!t||!t.document||t.document.nodeType!==9){r.isSupported=false;return r}var n=t.document;var a=n;var i=t.DocumentFragment;var o=t.HTMLTemplateElement;var l=t.NodeFilter;var s=t.NamedNodeMap||t.MozNamedAttrMap;var f=t.Text;var c=t.Comment;var u=t.DOMParser;if(typeof o==="function"){var d=n.createElement("template");if(d.content&&d.content.ownerDocument){n=d.content.ownerDocument}}var m=n.implementation;var p=n.createNodeIterator;var h=n.getElementsByTagName;var v=n.createDocumentFragment;var g=a.importNode;var y={};r.isSupported=typeof m.createHTMLDocument!=="undefined"&&n.documentMode!==9;var b=function(e,t){var r=t.length;while(r--){if(typeof t[r]==="string"){t[r]=t[r].toLowerCase()}e[t[r]]=true}return e};var T=function(e){var t={};var r;for(r in e){if(e.hasOwnProperty(r)){t[r]=e[r]}}return t};var x=null;var k=b({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]);var A=null;var w=b({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);var E=null;var S=null;var M=true;var O=false;var L=false;var D=false;var N=/\{\{[\s\S]*|[\s\S]*\}\}/gm;var _=/<%[\s\S]*|[\s\S]*%>/gm;var C=false;var z=false;var R=false;var F=false;var H=true;var B=true;var W=b({},["audio","head","math","script","style","svg","video"]);var j=b({},["audio","video","img","source"]);var G=b({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]);var I=null;var q=n.createElement("form");var P=function(e){if(typeof e!=="object"){e={}}x="ALLOWED_TAGS"in e?b({},e.ALLOWED_TAGS):k;A="ALLOWED_ATTR"in e?b({},e.ALLOWED_ATTR):w;E="FORBID_TAGS"in e?b({},e.FORBID_TAGS):{};S="FORBID_ATTR"in e?b({},e.FORBID_ATTR):{};M=e.ALLOW_DATA_ATTR!==false;O=e.ALLOW_UNKNOWN_PROTOCOLS||false;L=e.SAFE_FOR_JQUERY||false;D=e.SAFE_FOR_TEMPLATES||false;C=e.WHOLE_DOCUMENT||false;z=e.RETURN_DOM||false;R=e.RETURN_DOM_FRAGMENT||false;F=e.RETURN_DOM_IMPORT||false;H=e.SANITIZE_DOM!==false;B=e.KEEP_CONTENT!==false;if(D){M=false}if(R){z=true}if(e.ADD_TAGS){if(x===k){x=T(x)}b(x,e.ADD_TAGS)}if(e.ADD_ATTR){if(A===w){A=T(A)}b(A,e.ADD_ATTR)}if(B){x["#text"]=true}if(Object&&"freeze"in Object){Object.freeze(e)}I=e};var U=function(e){try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}};var V=function(e){var t,r;try{t=(new u).parseFromString(e,"text/html")}catch(n){}if(!t){t=m.createHTMLDocument("");r=t.body;r.parentNode.removeChild(r.parentNode.firstElementChild);r.outerHTML=e}if(typeof t.getElementsByTagName==="function"){return t.getElementsByTagName(C?"html":"body")[0]}return h.call(t,C?"html":"body")[0]};var K=function(e){return p.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},false)};var J=function(e){if(e instanceof f||e instanceof c){return false}if(typeof e.nodeName!=="string"||typeof e.textContent!=="string"||typeof e.removeChild!=="function"||!(e.attributes instanceof s)||typeof e.removeAttribute!=="function"||typeof e.setAttribute!=="function"){return true}return false};var Q=function(e){var t,r;re("beforeSanitizeElements",e,null);if(J(e)){U(e);return true}t=e.nodeName.toLowerCase();re("uponSanitizeElement",e,{tagName:t});if(!x[t]||E[t]){if(B&&!W[t]&&typeof e.insertAdjacentHTML==="function"){try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(n){}}U(e);return true}if(L&&!e.firstElementChild&&(!e.content||!e.content.firstElementChild)){e.innerHTML=e.textContent.replace(/</g,"&lt;")}if(D&&e.nodeType===3){r=e.textContent;r=r.replace(N," ");r=r.replace(_," ");e.textContent=r}re("afterSanitizeElements",e,null);return false};var X=/^data-[\w.\u00B7-\uFFFF-]/;var Y=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;var Z=/^(?:\w+script|data):/i;var $=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;var ee=function(e){var r,a,i,o,l,s,f,c;re("beforeSanitizeAttributes",e,null);s=e.attributes;if(!s){return}f={attrName:"",attrValue:"",keepAttr:true};c=s.length;while(c--){r=s[c];a=r.name;i=r.value;o=a.toLowerCase();f.attrName=o;f.attrValue=i;f.keepAttr=true;re("uponSanitizeAttribute",e,f);i=f.attrValue;if(o==="name"&&e.nodeName==="IMG"&&s.id){l=s.id;s=Array.prototype.slice.apply(s);e.removeAttribute("id");e.removeAttribute(a);if(s.indexOf(l)>c){e.setAttribute("id",l.value)}}else{if(a==="id"){e.setAttribute(a,"")}e.removeAttribute(a)}if(!f.keepAttr){continue}if(H&&(o==="id"||o==="name")&&(i in t||i in n||i in q)){continue}if(D){i=i.replace(N," ");i=i.replace(_," ")}if(A[o]&&!S[o]&&(G[o]||Y.test(i.replace($,""))||o==="src"&&i.indexOf("data:")===0&&j[e.nodeName.toLowerCase()])||M&&X.test(o)||O&&!Z.test(i.replace($,""))){try{e.setAttribute(a,i)}catch(u){}}}re("afterSanitizeAttributes",e,null)};var te=function(e){var t;var r=K(e);re("beforeSanitizeShadowDOM",e,null);while(t=r.nextNode()){re("uponSanitizeShadowNode",t,null);if(Q(t)){continue}if(t.content instanceof i){te(t.content)}ee(t)}re("afterSanitizeShadowDOM",e,null)};var re=function(e,t,n){if(!y[e]){return}y[e].forEach(function(e){e.call(r,t,n,I)})};r.sanitize=function(e,n){var o,l,s,f,c;if(!e){e=""}if(typeof e!=="string"){if(typeof e.toString!=="function"){throw new TypeError("toString is not a function")}else{e=e.toString()}}if(!r.isSupported){if(typeof t.toStaticHTML==="object"||typeof t.toStaticHTML==="function"){return t.toStaticHTML(e)}return e}P(n);if(!z&&!C&&e.indexOf("<")===-1){return e}o=V(e);if(!o){return z?null:""}f=K(o);while(l=f.nextNode()){if(l.nodeType===3&&l===s){continue}if(Q(l)){continue}if(l.content instanceof i){te(l.content)}ee(l);s=l}if(z){if(R){c=v.call(o.ownerDocument);while(o.firstChild){c.appendChild(o.firstChild)}}else{c=o}if(F){c=g.call(a,c,true)}return c}return C?o.outerHTML:o.innerHTML};r.addHook=function(e,t){if(typeof t!=="function"){return}y[e]=y[e]||[];y[e].push(t)};r.removeHook=function(e){if(y[e]){y[e].pop()}};r.removeHooks=function(e){if(y[e]){y[e]=[]}};r.removeAllHooks=function(){y=[]};return r});
//# sourceMappingURL=./dist/purify.min.js.map

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js":
/*!*****************************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Sortable 1.4.2 - MIT | git://github.com/rubaxa/Sortable.git */
!function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"KvSortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=b({},e),t[j]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"kvsortable-ghost",chosenClass:"kvsortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"kvsortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);z(e);for(var r in this)"_"===r.charAt(0)&&(this[r]=this[r].bind(this));this.nativeDraggable=e.forceFallback?!1:P,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),q.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){w&&w.state!==t&&(s(w,"display",t?"none":""),!t&&w.state&&S.insertBefore(w,_),w.state=t)}function n(t,e,n){if(t){n=n||U;do if(">*"===e&&t.parentNode===n||v(t,e))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function r(t,e,n){t.removeEventListener(e,n,!1)}function a(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(M," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(M," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return U.defaultView&&U.defaultView.getComputedStyle?n=U.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;r>o;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,r,a){var s=U.createEvent("Event"),l=(t||e[j]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=w,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,r){var a,s,l=t[j],d=l.options.onMove;return a=U.createEvent("Event"),a.initEvent("move",!0,!0),a.to=e,a.from=t,a.dragged=n,a.draggedRect=i,a.related=o||e,a.relatedRect=r||e.getBoundingClientRect(),t.dispatchEvent(a),d&&(s=d.call(l,a)),s}function u(t){t.draggable=!1}function h(){K=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&v(t,e)&&n++;return n}function v(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function m(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function b(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}if("undefined"==typeof window||"undefined"==typeof window.document)return function(){throw new Error("sortable.js requires a window with a document")};var _,D,y,w,S,T,C,E,x,N,B,k,O,X,Y,A,I,R={},M=/\s+/g,j="KvSortable"+(new Date).getTime(),L=window,U=L.document,H=L.parseInt,P=!!("draggable"in U.createElement("div")),W=function(t){return t=U.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),K=!1,F=Math.abs,q=([].slice,[]),V=m(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,u=window.innerWidth,h=window.innerHeight;if(E!==n&&(C=e.scroll,E=n,C===!0)){C=n;do if(C.offsetWidth<C.scrollWidth||C.offsetHeight<C.scrollHeight)break;while(C=C.parentNode)}C&&(i=C,o=C.getBoundingClientRect(),r=(F(o.right-d)<=s)-(F(o.left-d)<=s),a=(F(o.bottom-c)<=s)-(F(o.top-c)<=s)),r||a||(r=(s>=u-d)-(s>=d),a=(s>=h-c)-(s>=c),(r||a)&&(i=L)),(R.vx!==r||R.vy!==a||R.el!==i)&&(R.el=i,R.vx=r,R.vy=a,clearInterval(R.pid),i&&(R.pid=setInterval(function(){i===L?L.scrollTo(L.pageXOffset+r*l,L.pageYOffset+a*l):(a&&(i.scrollTop+=a*l),r&&(i.scrollLeft+=r*l))},24)))}},30),z=function(t){var e=t.group;e&&"object"==typeof e||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,r=t.type,a=t.touches&&t.touches[0],s=(a||t).target,l=s,c=o.filter;if(!("mousedown"===r&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(k=g(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,k),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){return t=n(l,t.trim(),i),t?(d(e,t,"filter",s,i,k),!0):void 0})))return void t.preventDefault();(!o.handle||n(l,o.handle,i))&&this._prepareDragStart(t,a,s)}},_prepareDragStart:function(t,e,n){var i,r=this,s=r.el,d=r.options,c=s.ownerDocument;n&&!_&&n.parentNode===s&&(Y=t,S=s,_=n,D=_.parentNode,T=_.nextSibling,X=d.group,i=function(){r._disableDelayedDrag(),_.draggable=!0,a(_,r.options.chosenClass,!0),r._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(_,t.trim(),u)}),o(c,"mouseup",r._onDrop),o(c,"touchend",r._onDrop),o(c,"touchcancel",r._onDrop),d.delay?(o(c,"mouseup",r._disableDelayedDrag),o(c,"touchend",r._disableDelayedDrag),o(c,"touchcancel",r._disableDelayedDrag),o(c,"mousemove",r._disableDelayedDrag),o(c,"touchmove",r._disableDelayedDrag),r._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),r(t,"mouseup",this._disableDelayedDrag),r(t,"touchend",this._disableDelayedDrag),r(t,"touchcancel",this._disableDelayedDrag),r(t,"mousemove",this._disableDelayedDrag),r(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(Y={target:_,clientX:t.clientX,clientY:t.clientY},this._onDragStart(Y,"touch")):this.nativeDraggable?(o(_,"dragend",this),o(S,"dragstart",this._onDragStart)):this._onDragStart(Y,!0);try{U.selection?U.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){S&&_&&(a(_,this.options.ghostClass,!0),t.active=this,d(this,S,"start",_,S,k))},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,W||s(y,"display","none");var t=U.elementFromPoint(A.clientX,A.clientY),e=t,n=" "+this.options.group.name,i=q.length;if(e)do{if(e[j]&&e[j].options.groups.indexOf(n)>-1){for(;i--;)q[i]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);W||s(y,"display","")}},_onTouchMove:function(e){if(Y){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-Y.clientX,o=n.clientY-Y.clientY,r=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";I=!0,A=n,s(y,"webkitTransform",r),s(y,"mozTransform",r),s(y,"msTransform",r),s(y,"transform",r),e.preventDefault()}},_appendGhost:function(){if(!y){var t,e=_.getBoundingClientRect(),n=s(_),i=this.options;y=_.cloneNode(!0),a(y,i.ghostClass,!1),a(y,i.fallbackClass,!0),s(y,"top",e.top-H(n.marginTop,10)),s(y,"left",e.left-H(n.marginLeft,10)),s(y,"width",e.width),s(y,"height",e.height),s(y,"opacity","0.8"),s(y,"position","fixed"),s(y,"zIndex","100000"),s(y,"pointerEvents","none"),i.fallbackOnBody&&U.body.appendChild(y)||S.appendChild(y),t=y.getBoundingClientRect(),s(y,"width",2*e.width-t.width),s(y,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==X.pull&&(w=_.cloneNode(!0),s(w,"display","none"),S.insertBefore(w,_)),e?("touch"===e?(o(U,"touchmove",this._onTouchMove),o(U,"touchend",this._onDrop),o(U,"touchcancel",this._onDrop)):(o(U,"mousemove",this._onTouchMove),o(U,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,_)),o(U,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,r,a=this.el,l=this.options,d=l.group,u=d.put,p=X===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),I=!0,X&&!l.disabled&&(p?g||(r=!S.contains(_)):X.pull&&u&&(X.name===d.name||u.indexOf&&~u.indexOf(X.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(V(t,l,this.el),K)return;if(i=n(t.target,l.draggable,a),o=_.getBoundingClientRect(),r)return e(!0),void(w||T?S.insertBefore(_,w||T):g||S.appendChild(_));if(0===a.children.length||a.children[0]===y||a===t.target&&(i=f(a,t))){if(i){if(i.animated)return;m=i.getBoundingClientRect()}e(p),c(S,a,_,o,i,m)!==!1&&(_.contains(a)||(a.appendChild(_),D=a),this._animate(o,_),i&&this._animate(m,i))}else if(i&&!i.animated&&i!==_&&void 0!==i.parentNode[j]){x!==i&&(x=i,N=s(i),B=s(i.parentNode));var v,m=i.getBoundingClientRect(),b=m.right-m.left,C=m.bottom-m.top,E=/left|right|inline/.test(N.cssFloat+N.display)||"flex"==B.display&&0===B["flex-direction"].indexOf("row"),k=i.offsetWidth>_.offsetWidth,O=i.offsetHeight>_.offsetHeight,Y=(E?(t.clientX-m.left)/b:(t.clientY-m.top)/C)>.5,A=i.nextElementSibling,R=c(S,a,_,o,i,m);if(R!==!1){if(K=!0,setTimeout(h,30),e(p),1===R||-1===R)v=1===R;else if(E){var M=_.offsetTop,L=i.offsetTop;v=M===L?i.previousElementSibling===_&&!k||Y&&k:L>M}else v=A!==_&&!O||Y&&O;_.contains(a)||(v&&!A?a.appendChild(_):i.parentNode.insertBefore(_,v?A:i)),D=_.parentNode,this._animate(o,_),this._animate(m,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;r(U,"touchmove",this._onTouchMove),r(t,"mouseup",this._onDrop),r(t,"touchend",this._onDrop),r(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(R.pid),clearTimeout(this._dragStartTimer),r(U,"mousemove",this._onTouchMove),this.nativeDraggable&&(r(U,"drop",this),r(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(I&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),y&&y.parentNode.removeChild(y),_&&(this.nativeDraggable&&r(_,"dragend",this),u(_),a(_,this.options.ghostClass,!1),a(_,this.options.chosenClass,!1),S!==D?(O=g(_,i.draggable),O>=0&&(d(null,D,"sort",_,S,k,O),d(this,S,"sort",_,S,k,O),d(null,D,"add",_,S,k,O),d(this,S,"remove",_,S,k,O))):(w&&w.parentNode.removeChild(w),_.nextSibling!==T&&(O=g(_,i.draggable),O>=0&&(d(this,S,"update",_,S,k,O),d(this,S,"sort",_,S,k,O)))),t.active&&((null===O||-1===O)&&(O=k),d(this,S,"end",_,S,k,O),this.save()))),this._nulling()},_nulling:function(){S=_=D=y=T=w=C=E=Y=A=I=O=x=N=X=t.active=null},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?_&&(this._onDragOver(t),i(t)):("drop"===e||"dragend"===e)&&this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;r>o;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&z(n)))},destroy:function(){var t=this.el;t[j]=null,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),q.splice(q.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:r,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:b,throttle:m,closest:n,toggleClass:a,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(t){"use strict";t.fn.kvsortable=function(e){var n,i=arguments;return this.each(function(){var o=t(this),r=o.data("kvsortable");if(r||!(e instanceof Object)&&e||(r=new KvSortable(this,e),o.data("kvsortable",r)),r){if("widget"===e)return r;"destroy"===e?(r.destroy(),o.removeData("kvsortable")):"function"==typeof r[e]?n=r[e].apply(r,[].slice.call(i,1)):e in r.options&&(n=r.option.apply(r,i))}}),void 0===n?this:n}});

/***/ }),

/***/ "./public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js":
/*!************************************************************************************!*\
  !*** ./public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}), true?(this.d3=ao,!(__WEBPACK_AMD_DEFINE_FACTORY__ = (ao),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}();

/***/ }),

/***/ "./resources/js/Admin/app.js":
/*!***********************************!*\
  !*** ./resources/js/Admin/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js ./public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js ./public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js ./public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js ./public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js ./public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js ./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js ./public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js ./public/bower_components/assets/Admin/js/core/app.js ./public/bower_components/assets/Admin/js/pages/uploader_bootstrap.js ./public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js ./public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js ./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js ./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js ./public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js ./public/bower_components/assets/Admin/js/pages/extra_trees.js ./resources/js/Admin/app.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js */"./public/bower_components/assets/Admin/js/plugins/loaders/pace.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js */"./public/bower_components/assets/Admin/js/core/libraries/bootstrap.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js */"./public/bower_components/assets/Admin/js/plugins/loaders/blockui.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js */"./public/bower_components/assets/Admin/js/plugins/visualization/d3/d3.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js */"./public/bower_components/assets/Admin/js/plugins/forms/styling/uniform.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js */"./public/bower_components/assets/Admin/js/plugins/forms/selects/bootstrap_multiselect.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js */"./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js */"./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js */"./public/bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js */"./public/bower_components/assets/Admin/js/plugins/forms/inputs/duallistbox.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/core/app.js */"./public/bower_components/assets/Admin/js/core/app.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/pages/uploader_bootstrap.js */"./public/bower_components/assets/Admin/js/pages/uploader_bootstrap.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js */"./public/bower_components/assets/Admin/js/pages/form_dual_listboxes.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js */"./public/bower_components/assets/Admin/js/charts/c3/c3_lines_areas.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js */"./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/effects.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js */"./public/bower_components/assets/Admin/js/core/libraries/jquery_ui/interactions.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js */"./public/bower_components/assets/Admin/js/plugins/trees/fancytree_all.min.js");
__webpack_require__(/*! /var/www/html/hard-working-buffalo/public/bower_components/assets/Admin/js/pages/extra_trees.js */"./public/bower_components/assets/Admin/js/pages/extra_trees.js");
module.exports = __webpack_require__(/*! /var/www/html/hard-working-buffalo/resources/js/Admin/app.js */"./resources/js/Admin/app.js");


/***/ })

/******/ });