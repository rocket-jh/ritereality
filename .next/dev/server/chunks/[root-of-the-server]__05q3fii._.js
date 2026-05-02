module.exports = [
"[project]/node_modules/is-node-process/lib/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeProcess",
    ()=>isNodeProcess
]);
// src/index.ts
function isNodeProcess() {
    if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        return true;
    }
    if (typeof process !== "undefined") {
        const type = process.type;
        if (type === "renderer" || type === "worker") {
            return false;
        }
        return !!(process.versions && process.versions.node);
    }
    return false;
}
;
}),
"[project]/node_modules/is-buffer/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ module.exports = function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};
}),
"[project]/node_modules/retry/lib/retry_operation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function RetryOperation(timeouts, options) {
    // Compatibility for the old (timeouts, retryForever) signature
    if (typeof options === 'boolean') {
        options = {
            forever: options
        };
    }
    this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
    this._timeouts = timeouts;
    this._options = options || {};
    this._maxRetryTime = options && options.maxRetryTime || Infinity;
    this._fn = null;
    this._errors = [];
    this._attempts = 1;
    this._operationTimeout = null;
    this._operationTimeoutCb = null;
    this._timeout = null;
    this._operationStart = null;
    this._timer = null;
    if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
    }
}
module.exports = RetryOperation;
RetryOperation.prototype.reset = function() {
    this._attempts = 1;
    this._timeouts = this._originalTimeouts.slice(0);
};
RetryOperation.prototype.stop = function() {
    if (this._timeout) {
        clearTimeout(this._timeout);
    }
    if (this._timer) {
        clearTimeout(this._timer);
    }
    this._timeouts = [];
    this._cachedTimeouts = null;
};
RetryOperation.prototype.retry = function(err) {
    if (this._timeout) {
        clearTimeout(this._timeout);
    }
    if (!err) {
        return false;
    }
    var currentTime = new Date().getTime();
    if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.push(err);
        this._errors.unshift(new Error('RetryOperation timeout occurred'));
        return false;
    }
    this._errors.push(err);
    var timeout = this._timeouts.shift();
    if (timeout === undefined) {
        if (this._cachedTimeouts) {
            // retry forever, only keep last error
            this._errors.splice(0, this._errors.length - 1);
            timeout = this._cachedTimeouts.slice(-1);
        } else {
            return false;
        }
    }
    var self = this;
    this._timer = setTimeout(function() {
        self._attempts++;
        if (self._operationTimeoutCb) {
            self._timeout = setTimeout(function() {
                self._operationTimeoutCb(self._attempts);
            }, self._operationTimeout);
            if (self._options.unref) {
                self._timeout.unref();
            }
        }
        self._fn(self._attempts);
    }, timeout);
    if (this._options.unref) {
        this._timer.unref();
    }
    return true;
};
RetryOperation.prototype.attempt = function(fn, timeoutOps) {
    this._fn = fn;
    if (timeoutOps) {
        if (timeoutOps.timeout) {
            this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
            this._operationTimeoutCb = timeoutOps.cb;
        }
    }
    var self = this;
    if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
            self._operationTimeoutCb();
        }, self._operationTimeout);
    }
    this._operationStart = new Date().getTime();
    this._fn(this._attempts);
};
RetryOperation.prototype.try = function(fn) {
    console.log('Using RetryOperation.try() is deprecated');
    this.attempt(fn);
};
RetryOperation.prototype.start = function(fn) {
    console.log('Using RetryOperation.start() is deprecated');
    this.attempt(fn);
};
RetryOperation.prototype.start = RetryOperation.prototype.try;
RetryOperation.prototype.errors = function() {
    return this._errors;
};
RetryOperation.prototype.attempts = function() {
    return this._attempts;
};
RetryOperation.prototype.mainError = function() {
    if (this._errors.length === 0) {
        return null;
    }
    var counts = {};
    var mainError = null;
    var mainErrorCount = 0;
    for(var i = 0; i < this._errors.length; i++){
        var error = this._errors[i];
        var message = error.message;
        var count = (counts[message] || 0) + 1;
        counts[message] = count;
        if (count >= mainErrorCount) {
            mainError = error;
            mainErrorCount = count;
        }
    }
    return mainError;
};
}),
"[project]/node_modules/retry/lib/retry.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var RetryOperation = __turbopack_context__.r("[project]/node_modules/retry/lib/retry_operation.js [app-route] (ecmascript)");
exports.operation = function(options) {
    var timeouts = exports.timeouts(options);
    return new RetryOperation(timeouts, {
        forever: options && (options.forever || options.retries === Infinity),
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
    });
};
exports.timeouts = function(options) {
    if (options instanceof Array) {
        return [].concat(options);
    }
    var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1000,
        maxTimeout: Infinity,
        randomize: false
    };
    for(var key in options){
        opts[key] = options[key];
    }
    if (opts.minTimeout > opts.maxTimeout) {
        throw new Error('minTimeout is greater than maxTimeout');
    }
    var timeouts = [];
    for(var i = 0; i < opts.retries; i++){
        timeouts.push(this.createTimeout(i, opts));
    }
    if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
    }
    // sort the array numerically ascending
    timeouts.sort(function(a, b) {
        return a - b;
    });
    return timeouts;
};
exports.createTimeout = function(attempt, opts) {
    var random = opts.randomize ? Math.random() + 1 : 1;
    var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
    timeout = Math.min(timeout, opts.maxTimeout);
    return timeout;
};
exports.wrap = function(obj, options, methods) {
    if (options instanceof Array) {
        methods = options;
        options = null;
    }
    if (!methods) {
        methods = [];
        for(var key in obj){
            if (typeof obj[key] === 'function') {
                methods.push(key);
            }
        }
    }
    for(var i = 0; i < methods.length; i++){
        var method = methods[i];
        var original = obj[method];
        obj[method] = (function retryWrapper(original) {
            var op = exports.operation(options);
            var args = Array.prototype.slice.call(arguments, 1);
            var callback = args.pop();
            args.push(function(err) {
                if (op.retry(err)) {
                    return;
                }
                if (err) {
                    arguments[0] = op.mainError();
                }
                callback.apply(this, arguments);
            });
            op.attempt(function() {
                original.apply(obj, args);
            });
        }).bind(obj, original);
        obj[method].options = options;
    }
};
}),
"[project]/node_modules/retry/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/retry/lib/retry.js [app-route] (ecmascript)");
}),
"[project]/node_modules/async-retry/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Packages
var retrier = __turbopack_context__.r("[project]/node_modules/retry/index.js [app-route] (ecmascript)");
function retry(fn, opts) {
    function run(resolve, reject) {
        var options = opts || {};
        var op;
        // Default `randomize` to true
        if (!('randomize' in options)) {
            options.randomize = true;
        }
        op = retrier.operation(options);
        // We allow the user to abort retrying
        // this makes sense in the cases where
        // knowledge is obtained that retrying
        // would be futile (e.g.: auth errors)
        function bail(err) {
            reject(err || new Error('Aborted'));
        }
        function onError(err, num) {
            if (err.bail) {
                bail(err);
                return;
            }
            if (!op.retry(err)) {
                reject(op.mainError());
            } else if (options.onRetry) {
                options.onRetry(err, num);
            }
        }
        function runAttempt(num) {
            var val;
            try {
                val = fn(bail, num);
            } catch (err) {
                onError(err, num);
                return;
            }
            Promise.resolve(val).then(resolve).catch(function catchIt(err) {
                onError(err, num);
            });
        }
        op.attempt(runAttempt);
    }
    return new Promise(run);
}
module.exports = retry;
}),
"[project]/node_modules/throttleit/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function throttle(function_, wait) {
    if (typeof function_ !== 'function') {
        throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
    }
    // TODO: Add `wait` validation too in the next major version.
    let timeoutId;
    let lastCallTime = 0;
    return function throttled(...arguments_) {
        clearTimeout(timeoutId);
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        const delayForNextCall = wait - timeSinceLastCall;
        if (delayForNextCall <= 0) {
            lastCallTime = now;
            function_.apply(this, arguments_);
        } else {
            timeoutId = setTimeout(()=>{
                lastCallTime = Date.now();
                function_.apply(this, arguments_);
            }, delayForNextCall);
        }
    };
}
module.exports = throttle;
}),
"[project]/node_modules/@vercel/blob/dist/chunk-WLMB4XQD.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlobAccessError",
    ()=>BlobAccessError,
    "BlobClientTokenExpiredError",
    ()=>BlobClientTokenExpiredError,
    "BlobContentTypeNotAllowedError",
    ()=>BlobContentTypeNotAllowedError,
    "BlobError",
    ()=>BlobError,
    "BlobFileTooLargeError",
    ()=>BlobFileTooLargeError,
    "BlobNotFoundError",
    ()=>BlobNotFoundError,
    "BlobPathnameMismatchError",
    ()=>BlobPathnameMismatchError,
    "BlobPreconditionFailedError",
    ()=>BlobPreconditionFailedError,
    "BlobRequestAbortedError",
    ()=>BlobRequestAbortedError,
    "BlobServiceNotAvailable",
    ()=>BlobServiceNotAvailable,
    "BlobServiceRateLimited",
    ()=>BlobServiceRateLimited,
    "BlobStoreNotFoundError",
    ()=>BlobStoreNotFoundError,
    "BlobStoreSuspendedError",
    ()=>BlobStoreSuspendedError,
    "BlobUnknownError",
    ()=>BlobUnknownError,
    "MAXIMUM_PATHNAME_LENGTH",
    ()=>MAXIMUM_PATHNAME_LENGTH,
    "createCompleteMultipartUploadMethod",
    ()=>createCompleteMultipartUploadMethod,
    "createCreateMultipartUploadMethod",
    ()=>createCreateMultipartUploadMethod,
    "createCreateMultipartUploaderMethod",
    ()=>createCreateMultipartUploaderMethod,
    "createFolder",
    ()=>createFolder,
    "createPutMethod",
    ()=>createPutMethod,
    "createUploadPartMethod",
    ()=>createUploadPartMethod,
    "disallowedPathnameCharacters",
    ()=>disallowedPathnameCharacters,
    "getDownloadUrl",
    ()=>getDownloadUrl,
    "getTokenFromOptionsOrEnv",
    ()=>getTokenFromOptionsOrEnv,
    "requestApi",
    ()=>requestApi
]);
// src/helpers.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$node$2d$process$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-node-process/lib/index.mjs [app-route] (ecmascript)");
// src/multipart/helpers.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$buffer$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-buffer/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
// src/api.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$async$2d$retry$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/async-retry/lib/index.js [app-route] (ecmascript)");
// src/fetch.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/undici/index.js [app-route] (ecmascript)");
// src/multipart/upload.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/throttleit/index.js [app-route] (ecmascript)");
;
;
;
var supportsNewBlobFromArrayBuffer = new Promise((resolve)=>{
    try {
        const helloAsArrayBuffer = new Uint8Array([
            104,
            101,
            108,
            108,
            111
        ]);
        const blob = new Blob([
            helloAsArrayBuffer
        ]);
        blob.text().then((text)=>{
            resolve(text === "hello");
        }).catch(()=>{
            resolve(false);
        });
    } catch  {
        resolve(false);
    }
});
async function toReadableStream(value) {
    if (value instanceof ReadableStream) {
        return value;
    }
    if (value instanceof Blob) {
        return value.stream();
    }
    if (isNodeJsReadableStream(value)) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"].toWeb(value);
    }
    let streamValue;
    if (value instanceof ArrayBuffer) {
        streamValue = new Uint8Array(value);
    } else if (isNodeJsBuffer(value)) {
        streamValue = value;
    } else {
        streamValue = stringToUint8Array(value);
    }
    if (await supportsNewBlobFromArrayBuffer) {
        return new Blob([
            streamValue
        ]).stream();
    }
    return new ReadableStream({
        start (controller) {
            controller.enqueue(streamValue);
            controller.close();
        }
    });
}
function isNodeJsReadableStream(value) {
    return typeof value === "object" && typeof value.pipe === "function" && value.readable && typeof value._read === "function" && // @ts-expect-error _readableState does exists on Readable
    typeof value._readableState === "object";
}
function stringToUint8Array(s) {
    const enc = new TextEncoder();
    return enc.encode(s);
}
function isNodeJsBuffer(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$buffer$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(value);
}
// src/bytes.ts
var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
var map = {
    b: 1,
    kb: 1 << 10,
    mb: 1 << 20,
    gb: 1 << 30,
    tb: 1024 ** 4,
    pb: 1024 ** 5
};
function bytes(val) {
    if (typeof val === "number" && !Number.isNaN(val)) {
        return val;
    }
    if (typeof val !== "string") {
        return null;
    }
    const results = parseRegExp.exec(val);
    let floatValue;
    let unit = "b";
    if (!results) {
        floatValue = parseInt(val, 10);
    } else {
        const [, res, , , unitMatch] = results;
        if (!res) {
            return null;
        }
        floatValue = parseFloat(res);
        if (unitMatch) {
            unit = unitMatch.toLowerCase();
        }
    }
    if (Number.isNaN(floatValue)) {
        return null;
    }
    return Math.floor(map[unit] * floatValue);
}
// src/helpers.ts
var defaultVercelBlobApiUrl = "https://vercel.com/api/blob";
function getTokenFromOptionsOrEnv(options) {
    if (options == null ? void 0 : options.token) {
        return options.token;
    }
    if (process.env.BLOB_READ_WRITE_TOKEN) {
        return process.env.BLOB_READ_WRITE_TOKEN;
    }
    throw new BlobError("No token found. Either configure the `BLOB_READ_WRITE_TOKEN` environment variable, or pass a `token` option to your calls.");
}
var BlobError = class extends Error {
    constructor(message){
        super(`Vercel Blob: ${message}`);
    }
};
function getDownloadUrl(blobUrl) {
    const url = new URL(blobUrl);
    url.searchParams.set("download", "1");
    return url.toString();
}
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var disallowedPathnameCharacters = [
    "//"
];
var supportsRequestStreams = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$node$2d$process$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeProcess"])()) {
        return true;
    }
    const apiUrl = getApiUrl();
    if (apiUrl.startsWith("http://localhost")) {
        return false;
    }
    let duplexAccessed = false;
    const hasContentType = new Request(getApiUrl(), {
        body: new ReadableStream(),
        method: "POST",
        // @ts-expect-error -- TypeScript doesn't yet have duplex but it's in the spec: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1729
        get duplex () {
            duplexAccessed = true;
            return "half";
        }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
})();
function getApiUrl(pathname = "") {
    let baseUrl = null;
    try {
        baseUrl = process.env.VERCEL_BLOB_API_URL || process.env.NEXT_PUBLIC_VERCEL_BLOB_API_URL;
    } catch  {}
    return `${baseUrl || defaultVercelBlobApiUrl}${pathname}`;
}
var TEXT_ENCODER = typeof TextEncoder === "function" ? new TextEncoder() : null;
function computeBodyLength(body) {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
        }
        return new Blob([
            body
        ]).size;
    }
    if ("byteLength" in body && typeof body.byteLength === "number") {
        return body.byteLength;
    }
    if ("size" in body && typeof body.size === "number") {
        return body.size;
    }
    return 0;
}
var createChunkTransformStream = (chunkSize, onProgress)=>{
    let buffer = new Uint8Array(0);
    return new TransformStream({
        transform (chunk, controller) {
            const newBuffer = new Uint8Array(buffer.length + chunk.byteLength);
            newBuffer.set(buffer);
            newBuffer.set(new Uint8Array(chunk), buffer.length);
            buffer = newBuffer;
            while(buffer.length >= chunkSize){
                const newChunk = buffer.slice(0, chunkSize);
                controller.enqueue(newChunk);
                onProgress == null ? void 0 : onProgress(newChunk.byteLength);
                buffer = buffer.slice(chunkSize);
            }
        },
        flush (controller) {
            if (buffer.length > 0) {
                controller.enqueue(buffer);
                onProgress == null ? void 0 : onProgress(buffer.byteLength);
            }
        }
    });
};
function isReadableStream(value) {
    return globalThis.ReadableStream && // TODO: Can be removed once Node.js 16 is no more required internally
    value instanceof ReadableStream;
}
function isStream(value) {
    if (isReadableStream(value)) {
        return true;
    }
    if (isNodeJsReadableStream(value)) {
        return true;
    }
    return false;
}
;
// src/debug.ts
var debugIsActive = false;
var _a, _b;
try {
    if (((_a = process.env.DEBUG) == null ? void 0 : _a.includes("blob")) || ((_b = process.env.NEXT_PUBLIC_DEBUG) == null ? void 0 : _b.includes("blob"))) {
        debugIsActive = true;
    }
} catch  {}
function debug(message, ...args) {
    if (debugIsActive) {
        console.debug(`vercel-blob: ${message}`, ...args);
    }
}
// src/dom-exception.ts
var _a2;
var DOMException2 = (_a2 = globalThis.DOMException) != null ? _a2 : (()=>{
    try {
        atob("~");
    } catch (err) {
        return Object.getPrototypeOf(err).constructor;
    }
})();
// src/is-network-error.ts
var objectToString = Object.prototype.toString;
var isError = (value)=>objectToString.call(value) === "[object Error]";
var errorMessages = /* @__PURE__ */ new Set([
    "network error",
    // Chrome
    "Failed to fetch",
    // Chrome
    "NetworkError when attempting to fetch resource.",
    // Firefox
    "The Internet connection appears to be offline.",
    // Safari 16
    "Load failed",
    // Safari 17+
    "Network request failed",
    // `cross-fetch`
    "fetch failed",
    // Undici (Node.js)
    "terminated"
]);
function isNetworkError(error) {
    const isValid = error && isError(error) && error.name === "TypeError" && typeof error.message === "string";
    if (!isValid) {
        return false;
    }
    if (error.message === "Load failed") {
        return error.stack === void 0;
    }
    return errorMessages.has(error.message);
}
;
var hasFetch = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"] === "function";
var hasFetchWithUploadProgress = hasFetch && supportsRequestStreams;
var CHUNK_SIZE = 64 * 1024;
var blobFetch = async ({ input, init, onUploadProgress })=>{
    debug("using fetch");
    let body;
    if (init.body) {
        if (onUploadProgress) {
            const stream = await toReadableStream(init.body);
            let loaded = 0;
            const chunkTransformStream = createChunkTransformStream(CHUNK_SIZE, (newLoaded)=>{
                loaded += newLoaded;
                onUploadProgress(loaded);
            });
            body = stream.pipeThrough(chunkTransformStream);
        } else {
            body = init.body;
        }
    }
    const duplex = supportsRequestStreams && body && isStream(body) ? "half" : void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"])(input, // @ts-expect-error -- Blob and Nodejs Blob are triggering type errors, fine with it
    {
        ...init,
        ...init.body ? {
            body
        } : {},
        duplex
    });
};
// src/xhr.ts
var hasXhr = typeof XMLHttpRequest !== "undefined";
var blobXhr = async ({ input, init, onUploadProgress })=>{
    debug("using xhr");
    let body = null;
    if (init.body) {
        if (isReadableStream(init.body)) {
            body = await new Response(init.body).blob();
        } else {
            body = init.body;
        }
    }
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(init.method || "GET", input.toString(), true);
        if (onUploadProgress) {
            xhr.upload.addEventListener("progress", (event)=>{
                if (event.lengthComputable) {
                    onUploadProgress(event.loaded);
                }
            });
        }
        xhr.onload = ()=>{
            var _a3;
            if ((_a3 = init.signal) == null ? void 0 : _a3.aborted) {
                reject(new DOMException("The user aborted the request.", "AbortError"));
                return;
            }
            const headers = new Headers();
            const rawHeaders = xhr.getAllResponseHeaders().trim().split(/[\r\n]+/);
            rawHeaders.forEach((line)=>{
                const parts = line.split(": ");
                const key = parts.shift();
                const value = parts.join(": ");
                if (key) headers.set(key.toLowerCase(), value);
            });
            const response = new Response(xhr.response, {
                status: xhr.status,
                statusText: xhr.statusText,
                headers
            });
            resolve(response);
        };
        xhr.onerror = ()=>{
            reject(new TypeError("Network request failed"));
        };
        xhr.ontimeout = ()=>{
            reject(new TypeError("Network request timed out"));
        };
        xhr.onabort = ()=>{
            reject(new DOMException("The user aborted a request.", "AbortError"));
        };
        if (init.headers) {
            const headers = new Headers(init.headers);
            headers.forEach((value, key)=>{
                xhr.setRequestHeader(key, value);
            });
        }
        if (init.signal) {
            init.signal.addEventListener("abort", ()=>{
                xhr.abort();
            });
            if (init.signal.aborted) {
                xhr.abort();
                return;
            }
        }
        xhr.send(body);
    });
};
// src/request.ts
var blobRequest = async ({ input, init, onUploadProgress })=>{
    if (onUploadProgress) {
        if (hasFetchWithUploadProgress) {
            return blobFetch({
                input,
                init,
                onUploadProgress
            });
        }
        if (hasXhr) {
            return blobXhr({
                input,
                init,
                onUploadProgress
            });
        }
    }
    if (hasFetch) {
        return blobFetch({
            input,
            init
        });
    }
    if (hasXhr) {
        return blobXhr({
            input,
            init
        });
    }
    throw new Error("No request implementation available");
};
// src/api.ts
var MAXIMUM_PATHNAME_LENGTH = 950;
var BlobAccessError = class extends BlobError {
    constructor(){
        super("Access denied, please provide a valid token for this resource.");
    }
};
var BlobContentTypeNotAllowedError = class extends BlobError {
    constructor(message){
        super(`Content type mismatch, ${message}.`);
    }
};
var BlobPathnameMismatchError = class extends BlobError {
    constructor(message){
        super(`Pathname mismatch, ${message}. Check the pathname used in upload() or put() matches the one from the client token.`);
    }
};
var BlobClientTokenExpiredError = class extends BlobError {
    constructor(){
        super("Client token has expired.");
    }
};
var BlobFileTooLargeError = class extends BlobError {
    constructor(message){
        super(`File is too large, ${message}.`);
    }
};
var BlobStoreNotFoundError = class extends BlobError {
    constructor(){
        super("This store does not exist.");
    }
};
var BlobStoreSuspendedError = class extends BlobError {
    constructor(){
        super("This store has been suspended.");
    }
};
var BlobUnknownError = class extends BlobError {
    constructor(){
        super("Unknown error, please visit https://vercel.com/help.");
    }
};
var BlobNotFoundError = class extends BlobError {
    constructor(){
        super("The requested blob does not exist");
    }
};
var BlobServiceNotAvailable = class extends BlobError {
    constructor(){
        super("The blob service is currently not available. Please try again.");
    }
};
var BlobServiceRateLimited = class extends BlobError {
    constructor(seconds){
        super(`Too many requests please lower the number of concurrent requests ${seconds ? ` - try again in ${seconds} seconds` : ""}.`);
        this.retryAfter = seconds != null ? seconds : 0;
    }
};
var BlobRequestAbortedError = class extends BlobError {
    constructor(){
        super("The request was aborted.");
    }
};
var BlobPreconditionFailedError = class extends BlobError {
    constructor(){
        super("Precondition failed: ETag mismatch.");
    }
};
var BLOB_API_VERSION = 12;
function getApiVersion() {
    let versionOverride = null;
    try {
        versionOverride = process.env.VERCEL_BLOB_API_VERSION_OVERRIDE || process.env.NEXT_PUBLIC_VERCEL_BLOB_API_VERSION_OVERRIDE;
    } catch  {}
    return `${versionOverride != null ? versionOverride : BLOB_API_VERSION}`;
}
function getRetries() {
    try {
        const retries = process.env.VERCEL_BLOB_RETRIES || "10";
        return parseInt(retries, 10);
    } catch  {
        return 10;
    }
}
function createBlobServiceRateLimited(response) {
    const retryAfter = response.headers.get("retry-after");
    return new BlobServiceRateLimited(retryAfter ? parseInt(retryAfter, 10) : void 0);
}
async function getBlobError(response) {
    var _a3, _b2, _c;
    let code;
    let message;
    try {
        const data = await response.json();
        code = (_b2 = (_a3 = data.error) == null ? void 0 : _a3.code) != null ? _b2 : "unknown_error";
        message = (_c = data.error) == null ? void 0 : _c.message;
    } catch  {
        code = "unknown_error";
    }
    if ((message == null ? void 0 : message.includes("contentType")) && message.includes("is not allowed")) {
        code = "content_type_not_allowed";
    }
    if ((message == null ? void 0 : message.includes('"pathname"')) && message.includes("does not match the token payload")) {
        code = "client_token_pathname_mismatch";
    }
    if (message === "Token expired") {
        code = "client_token_expired";
    }
    if (message == null ? void 0 : message.includes("the file length cannot be greater than")) {
        code = "file_too_large";
    }
    let error;
    switch(code){
        case "store_suspended":
            error = new BlobStoreSuspendedError();
            break;
        case "forbidden":
            error = new BlobAccessError();
            break;
        case "content_type_not_allowed":
            error = new BlobContentTypeNotAllowedError(message);
            break;
        case "client_token_pathname_mismatch":
            error = new BlobPathnameMismatchError(message);
            break;
        case "client_token_expired":
            error = new BlobClientTokenExpiredError();
            break;
        case "file_too_large":
            error = new BlobFileTooLargeError(message);
            break;
        case "not_found":
            error = new BlobNotFoundError();
            break;
        case "store_not_found":
            error = new BlobStoreNotFoundError();
            break;
        case "bad_request":
            error = new BlobError(message != null ? message : "Bad request");
            break;
        case "service_unavailable":
            error = new BlobServiceNotAvailable();
            break;
        case "rate_limited":
            error = createBlobServiceRateLimited(response);
            break;
        case "precondition_failed":
            error = new BlobPreconditionFailedError();
            break;
        case "unknown_error":
        case "not_allowed":
        default:
            error = new BlobUnknownError();
            break;
    }
    return {
        code,
        error
    };
}
async function requestApi(pathname, init, commandOptions) {
    const apiVersion = getApiVersion();
    const token = getTokenFromOptionsOrEnv(commandOptions);
    const extraHeaders = getProxyThroughAlternativeApiHeaderFromEnv();
    const [, , , storeId = ""] = token.split("_");
    const requestId = `${storeId}:${Date.now()}:${Math.random().toString(16).slice(2)}`;
    let retryCount = 0;
    let bodyLength = 0;
    let totalLoaded = 0;
    const sendBodyLength = (commandOptions == null ? void 0 : commandOptions.onUploadProgress) || shouldUseXContentLength();
    if (init.body && // 1. For upload progress we always need to know the total size of the body
    // 2. In development we need the header for put() to work correctly when passing a stream
    sendBodyLength) {
        bodyLength = computeBodyLength(init.body);
    }
    if (commandOptions == null ? void 0 : commandOptions.onUploadProgress) {
        commandOptions.onUploadProgress({
            loaded: 0,
            total: bodyLength,
            percentage: 0
        });
    }
    const apiResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$async$2d$retry$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(async (bail)=>{
        let res;
        try {
            res = await blobRequest({
                input: getApiUrl(pathname),
                init: {
                    ...init,
                    headers: {
                        "x-api-blob-request-id": requestId,
                        "x-api-blob-request-attempt": String(retryCount),
                        "x-api-version": apiVersion,
                        ...sendBodyLength ? {
                            "x-content-length": String(bodyLength)
                        } : {},
                        authorization: `Bearer ${token}`,
                        ...extraHeaders,
                        ...init.headers
                    }
                },
                onUploadProgress: (commandOptions == null ? void 0 : commandOptions.onUploadProgress) ? (loaded)=>{
                    var _a3;
                    const total = bodyLength !== 0 ? bodyLength : loaded;
                    totalLoaded = loaded;
                    const percentage = bodyLength > 0 ? Number((loaded / total * 100).toFixed(2)) : 0;
                    if (percentage === 100 && bodyLength > 0) {
                        return;
                    }
                    (_a3 = commandOptions.onUploadProgress) == null ? void 0 : _a3.call(commandOptions, {
                        loaded,
                        // When passing a stream to put(), we have no way to know the total size of the body.
                        // Instead of defining total as total?: number we decided to set the total to the currently
                        // loaded number. This is not inaccurate and way more practical for DX.
                        // Passing down a stream to put() is very rare
                        total,
                        percentage
                    });
                } : void 0
            });
        } catch (error2) {
            if (error2 instanceof DOMException2 && error2.name === "AbortError") {
                bail(new BlobRequestAbortedError());
                return;
            }
            if (isNetworkError(error2)) {
                throw error2;
            }
            if (error2 instanceof TypeError) {
                bail(error2);
                return;
            }
            throw error2;
        }
        if (res.ok) {
            return res;
        }
        const { code, error } = await getBlobError(res);
        if (code === "unknown_error" || code === "service_unavailable" || code === "internal_server_error") {
            throw error;
        }
        bail(error);
    }, {
        retries: getRetries(),
        onRetry: (error)=>{
            if (error instanceof Error) {
                debug(`retrying API request to ${pathname}`, error.message);
            }
            retryCount = retryCount + 1;
        }
    });
    if (!apiResponse) {
        throw new BlobUnknownError();
    }
    if (commandOptions == null ? void 0 : commandOptions.onUploadProgress) {
        commandOptions.onUploadProgress({
            loaded: totalLoaded,
            total: totalLoaded,
            percentage: 100
        });
    }
    return await apiResponse.json();
}
function getProxyThroughAlternativeApiHeaderFromEnv() {
    const extraHeaders = {};
    try {
        if ("VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API" in process.env && process.env.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0) {
            extraHeaders["x-proxy-through-alternative-api"] = process.env.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API;
        } else if ("NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API" in process.env && process.env.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0) {
            extraHeaders["x-proxy-through-alternative-api"] = process.env.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API;
        }
    } catch  {}
    return extraHeaders;
}
function shouldUseXContentLength() {
    try {
        return process.env.VERCEL_BLOB_USE_X_CONTENT_LENGTH === "1";
    } catch  {
        return false;
    }
}
// src/put-helpers.ts
var putOptionHeaderMap = {
    cacheControlMaxAge: "x-cache-control-max-age",
    addRandomSuffix: "x-add-random-suffix",
    allowOverwrite: "x-allow-overwrite",
    contentType: "x-content-type",
    access: "x-vercel-blob-access",
    ifMatch: "x-if-match"
};
function createPutHeaders(allowedOptions, options) {
    const headers = {};
    headers[putOptionHeaderMap.access] = options.access;
    if (allowedOptions.includes("contentType") && options.contentType) {
        headers[putOptionHeaderMap.contentType] = options.contentType;
    }
    if (allowedOptions.includes("addRandomSuffix") && options.addRandomSuffix !== void 0) {
        headers[putOptionHeaderMap.addRandomSuffix] = options.addRandomSuffix ? "1" : "0";
    }
    if (allowedOptions.includes("ifMatch") && options.ifMatch) {
        if (options.allowOverwrite === false) {
            throw new BlobError("ifMatch and allowOverwrite: false are contradictory. ifMatch is used for conditional overwrites, which requires allowOverwrite to be true.");
        }
        headers[putOptionHeaderMap.ifMatch] = options.ifMatch;
        if (allowedOptions.includes("allowOverwrite") && options.allowOverwrite === void 0) {
            headers[putOptionHeaderMap.allowOverwrite] = "1";
        }
    }
    if (allowedOptions.includes("allowOverwrite") && options.allowOverwrite !== void 0) {
        headers[putOptionHeaderMap.allowOverwrite] = options.allowOverwrite ? "1" : "0";
    }
    if (allowedOptions.includes("cacheControlMaxAge") && options.cacheControlMaxAge !== void 0) {
        headers[putOptionHeaderMap.cacheControlMaxAge] = options.cacheControlMaxAge.toString();
    }
    return headers;
}
async function createPutOptions({ pathname, options, extraChecks, getToken }) {
    if (!pathname) {
        throw new BlobError("pathname is required");
    }
    if (pathname.length > MAXIMUM_PATHNAME_LENGTH) {
        throw new BlobError(`pathname is too long, maximum length is ${MAXIMUM_PATHNAME_LENGTH}`);
    }
    for (const invalidCharacter of disallowedPathnameCharacters){
        if (pathname.includes(invalidCharacter)) {
            throw new BlobError(`pathname cannot contain "${invalidCharacter}", please encode it if needed`);
        }
    }
    if (!options) {
        throw new BlobError("missing options, see usage");
    }
    if (options.access !== "public" && options.access !== "private") {
        throw new BlobError('access must be "private" or "public", see https://vercel.com/docs/vercel-blob');
    }
    if (extraChecks) {
        extraChecks(options);
    }
    if (getToken) {
        options.token = await getToken(pathname, options);
    }
    return options;
}
// src/multipart/complete.ts
function createCompleteMultipartUploadMethod({ allowedOptions, getToken, extraChecks }) {
    return async (pathname, parts, optionsInput)=>{
        const options = await createPutOptions({
            pathname,
            options: optionsInput,
            extraChecks,
            getToken
        });
        const headers = createPutHeaders(allowedOptions, options);
        return completeMultipartUpload({
            uploadId: options.uploadId,
            key: options.key,
            pathname,
            headers,
            options,
            parts
        });
    };
}
async function completeMultipartUpload({ uploadId, key, pathname, parts, headers, options }) {
    const params = new URLSearchParams({
        pathname
    });
    try {
        const response = await requestApi(`/mpu?${params.toString()}`, {
            method: "POST",
            headers: {
                ...headers,
                "content-type": "application/json",
                "x-mpu-action": "complete",
                "x-mpu-upload-id": uploadId,
                // key can be any utf8 character so we need to encode it as HTTP headers can only be us-ascii
                // https://www.rfc-editor.org/rfc/rfc7230#swection-3.2.4
                "x-mpu-key": encodeURIComponent(key)
            },
            body: JSON.stringify(parts),
            signal: options.abortSignal
        }, options);
        debug("mpu: complete", response);
        return response;
    } catch (error) {
        if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "fetch failed")) {
            throw new BlobServiceNotAvailable();
        } else {
            throw error;
        }
    }
}
// src/multipart/create.ts
function createCreateMultipartUploadMethod({ allowedOptions, getToken, extraChecks }) {
    return async (pathname, optionsInput)=>{
        const options = await createPutOptions({
            pathname,
            options: optionsInput,
            extraChecks,
            getToken
        });
        const headers = createPutHeaders(allowedOptions, options);
        const createMultipartUploadResponse = await createMultipartUpload(pathname, headers, options);
        return {
            key: createMultipartUploadResponse.key,
            uploadId: createMultipartUploadResponse.uploadId
        };
    };
}
async function createMultipartUpload(pathname, headers, options) {
    debug("mpu: create", "pathname:", pathname);
    const params = new URLSearchParams({
        pathname
    });
    try {
        const response = await requestApi(`/mpu?${params.toString()}`, {
            method: "POST",
            headers: {
                ...headers,
                "x-mpu-action": "create"
            },
            signal: options.abortSignal
        }, options);
        debug("mpu: create", response);
        return response;
    } catch (error) {
        if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "fetch failed")) {
            throw new BlobServiceNotAvailable();
        }
        throw error;
    }
}
;
function createUploadPartMethod({ allowedOptions, getToken, extraChecks }) {
    return async (pathname, body, optionsInput)=>{
        const options = await createPutOptions({
            pathname,
            options: optionsInput,
            extraChecks,
            getToken
        });
        const headers = createPutHeaders(allowedOptions, options);
        if (isPlainObject(body)) {
            throw new BlobError("Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.");
        }
        const result = await uploadPart({
            uploadId: options.uploadId,
            key: options.key,
            pathname,
            part: {
                blob: body,
                partNumber: options.partNumber
            },
            headers,
            options
        });
        return {
            etag: result.etag,
            partNumber: options.partNumber
        };
    };
}
async function uploadPart({ uploadId, key, pathname, headers, options, internalAbortController = new AbortController(), part }) {
    var _a3, _b2, _c;
    const params = new URLSearchParams({
        pathname
    });
    const responsePromise = requestApi(`/mpu?${params.toString()}`, {
        signal: internalAbortController.signal,
        method: "POST",
        headers: {
            ...headers,
            "x-mpu-action": "upload",
            "x-mpu-key": encodeURIComponent(key),
            "x-mpu-upload-id": uploadId,
            "x-mpu-part-number": part.partNumber.toString()
        },
        // weird things between undici types and native fetch types
        body: part.blob
    }, options);
    function handleAbort() {
        internalAbortController.abort();
    }
    if ((_a3 = options.abortSignal) == null ? void 0 : _a3.aborted) {
        handleAbort();
    } else {
        (_b2 = options.abortSignal) == null ? void 0 : _b2.addEventListener("abort", handleAbort);
    }
    const response = await responsePromise;
    (_c = options.abortSignal) == null ? void 0 : _c.removeEventListener("abort", handleAbort);
    return response;
}
var maxConcurrentUploads = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 8;
var partSizeInBytes = 8 * 1024 * 1024;
var maxBytesInMemory = maxConcurrentUploads * partSizeInBytes * 2;
function uploadAllParts({ uploadId, key, pathname, stream, headers, options, totalToLoad }) {
    debug("mpu: upload init", "key:", key);
    const internalAbortController = new AbortController();
    return new Promise((resolve, reject)=>{
        const partsToUpload = [];
        const completedParts = [];
        const reader = stream.getReader();
        let activeUploads = 0;
        let reading = false;
        let currentPartNumber = 1;
        let rejected = false;
        let currentBytesInMemory = 0;
        let doneReading = false;
        let bytesSent = 0;
        let arrayBuffers = [];
        let currentPartBytesRead = 0;
        let onUploadProgress;
        const totalLoadedPerPartNumber = {};
        if (options.onUploadProgress) {
            onUploadProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(()=>{
                var _a3;
                const loaded = Object.values(totalLoadedPerPartNumber).reduce((acc, cur)=>{
                    return acc + cur;
                }, 0);
                const total = totalToLoad || loaded;
                const percentage = totalToLoad > 0 ? Number(((loaded / totalToLoad || loaded) * 100).toFixed(2)) : 0;
                (_a3 = options.onUploadProgress) == null ? void 0 : _a3.call(options, {
                    loaded,
                    total,
                    percentage
                });
            }, 150);
        }
        read().catch(cancel);
        async function read() {
            debug("mpu: upload read start", "activeUploads:", activeUploads, "currentBytesInMemory:", `${bytes(currentBytesInMemory)}/${bytes(maxBytesInMemory)}`, "bytesSent:", bytes(bytesSent));
            reading = true;
            while(currentBytesInMemory < maxBytesInMemory && !rejected){
                try {
                    const { value, done } = await reader.read();
                    if (done) {
                        doneReading = true;
                        debug("mpu: upload read consumed the whole stream");
                        if (arrayBuffers.length > 0) {
                            partsToUpload.push({
                                partNumber: currentPartNumber++,
                                blob: new Blob(arrayBuffers, {
                                    type: "application/octet-stream"
                                })
                            });
                            sendParts();
                        } else if (activeUploads === 0) {
                            reader.releaseLock();
                            resolve(completedParts);
                        }
                        reading = false;
                        return;
                    }
                    currentBytesInMemory += value.byteLength;
                    let valueOffset = 0;
                    while(valueOffset < value.byteLength){
                        const remainingPartSize = partSizeInBytes - currentPartBytesRead;
                        const endOffset = Math.min(valueOffset + remainingPartSize, value.byteLength);
                        const chunk = value.slice(valueOffset, endOffset);
                        arrayBuffers.push(chunk);
                        currentPartBytesRead += chunk.byteLength;
                        valueOffset = endOffset;
                        if (currentPartBytesRead === partSizeInBytes) {
                            partsToUpload.push({
                                partNumber: currentPartNumber++,
                                blob: new Blob(arrayBuffers, {
                                    type: "application/octet-stream"
                                })
                            });
                            arrayBuffers = [];
                            currentPartBytesRead = 0;
                            sendParts();
                        }
                    }
                } catch (error) {
                    cancel(error);
                }
            }
            debug("mpu: upload read end", "activeUploads:", activeUploads, "currentBytesInMemory:", `${bytes(currentBytesInMemory)}/${bytes(maxBytesInMemory)}`, "bytesSent:", bytes(bytesSent));
            reading = false;
        }
        async function sendPart(part) {
            activeUploads++;
            debug("mpu: upload send part start", "partNumber:", part.partNumber, "size:", part.blob.size, "activeUploads:", activeUploads, "currentBytesInMemory:", `${bytes(currentBytesInMemory)}/${bytes(maxBytesInMemory)}`, "bytesSent:", bytes(bytesSent));
            try {
                const uploadProgressForPart = options.onUploadProgress ? (event)=>{
                    totalLoadedPerPartNumber[part.partNumber] = event.loaded;
                    if (onUploadProgress) {
                        onUploadProgress();
                    }
                } : void 0;
                const completedPart = await uploadPart({
                    uploadId,
                    key,
                    pathname,
                    headers,
                    options: {
                        ...options,
                        onUploadProgress: uploadProgressForPart
                    },
                    internalAbortController,
                    part
                });
                debug("mpu: upload send part end", "partNumber:", part.partNumber, "activeUploads", activeUploads, "currentBytesInMemory:", `${bytes(currentBytesInMemory)}/${bytes(maxBytesInMemory)}`, "bytesSent:", bytes(bytesSent));
                if (rejected) {
                    return;
                }
                completedParts.push({
                    partNumber: part.partNumber,
                    etag: completedPart.etag
                });
                currentBytesInMemory -= part.blob.size;
                activeUploads--;
                bytesSent += part.blob.size;
                if (partsToUpload.length > 0) {
                    sendParts();
                }
                if (doneReading) {
                    if (activeUploads === 0) {
                        reader.releaseLock();
                        resolve(completedParts);
                    }
                    return;
                }
                if (!reading) {
                    read().catch(cancel);
                }
            } catch (error) {
                cancel(error);
            }
        }
        function sendParts() {
            if (rejected) {
                return;
            }
            debug("send parts", "activeUploads", activeUploads, "partsToUpload", partsToUpload.length);
            while(activeUploads < maxConcurrentUploads && partsToUpload.length > 0){
                const partToSend = partsToUpload.shift();
                if (partToSend) {
                    void sendPart(partToSend);
                }
            }
        }
        function cancel(error) {
            if (rejected) {
                return;
            }
            rejected = true;
            internalAbortController.abort();
            reader.releaseLock();
            if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "fetch failed")) {
                reject(new BlobServiceNotAvailable());
            } else {
                reject(error);
            }
        }
    });
}
// src/multipart/create-uploader.ts
function createCreateMultipartUploaderMethod({ allowedOptions, getToken, extraChecks }) {
    return async (pathname, optionsInput)=>{
        const options = await createPutOptions({
            pathname,
            options: optionsInput,
            extraChecks,
            getToken
        });
        const headers = createPutHeaders(allowedOptions, options);
        const createMultipartUploadResponse = await createMultipartUpload(pathname, headers, options);
        return {
            key: createMultipartUploadResponse.key,
            uploadId: createMultipartUploadResponse.uploadId,
            async uploadPart (partNumber, body) {
                if (isPlainObject(body)) {
                    throw new BlobError("Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.");
                }
                const result = await uploadPart({
                    uploadId: createMultipartUploadResponse.uploadId,
                    key: createMultipartUploadResponse.key,
                    pathname,
                    part: {
                        partNumber,
                        blob: body
                    },
                    headers,
                    options
                });
                return {
                    etag: result.etag,
                    partNumber
                };
            },
            async complete (parts) {
                return completeMultipartUpload({
                    uploadId: createMultipartUploadResponse.uploadId,
                    key: createMultipartUploadResponse.key,
                    pathname,
                    parts,
                    headers,
                    options
                });
            }
        };
    };
}
;
// src/multipart/uncontrolled.ts
async function uncontrolledMultipartUpload(pathname, body, headers, options) {
    debug("mpu: init", "pathname:", pathname, "headers:", headers);
    const optionsWithoutOnUploadProgress = {
        ...options,
        onUploadProgress: void 0
    };
    if (options.maximumSizeInBytes !== void 0 && !isStream(body) && computeBodyLength(body) > options.maximumSizeInBytes) {
        throw new BlobError(`Body size of ${computeBodyLength(body)} bytes exceeds the maximum allowed size of ${options.maximumSizeInBytes} bytes`);
    }
    const createMultipartUploadResponse = await createMultipartUpload(pathname, headers, optionsWithoutOnUploadProgress);
    const totalToLoad = computeBodyLength(body);
    const stream = await toReadableStream(body);
    const parts = await uploadAllParts({
        uploadId: createMultipartUploadResponse.uploadId,
        key: createMultipartUploadResponse.key,
        pathname,
        // @ts-expect-error ReadableStream<ArrayBuffer | Uint8Array> is compatible at runtime
        stream,
        headers,
        options,
        totalToLoad
    });
    const blob = await completeMultipartUpload({
        uploadId: createMultipartUploadResponse.uploadId,
        key: createMultipartUploadResponse.key,
        pathname,
        parts,
        headers,
        options: optionsWithoutOnUploadProgress
    });
    return blob;
}
// src/put.ts
function createPutMethod({ allowedOptions, getToken, extraChecks }) {
    return async function put(pathname, body, optionsInput) {
        if (!body) {
            throw new BlobError("body is required");
        }
        if (isPlainObject(body)) {
            throw new BlobError("Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.");
        }
        const options = await createPutOptions({
            pathname,
            options: optionsInput,
            extraChecks,
            getToken
        });
        const headers = createPutHeaders(allowedOptions, options);
        if (options.multipart === true) {
            return uncontrolledMultipartUpload(pathname, body, headers, options);
        }
        const onUploadProgress = options.onUploadProgress ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(options.onUploadProgress, 100) : void 0;
        const params = new URLSearchParams({
            pathname
        });
        const response = await requestApi(`/?${params.toString()}`, {
            method: "PUT",
            body,
            headers,
            signal: options.abortSignal
        }, {
            ...options,
            onUploadProgress
        });
        return {
            url: response.url,
            downloadUrl: response.downloadUrl,
            pathname: response.pathname,
            contentType: response.contentType,
            contentDisposition: response.contentDisposition,
            etag: response.etag
        };
    };
}
// src/create-folder.ts
async function createFolder(pathname, options = {
    access: "public"
}) {
    var _a3;
    const access = (_a3 = options.access) != null ? _a3 : "public";
    const folderPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const headers = {};
    headers[putOptionHeaderMap.access] = access;
    headers[putOptionHeaderMap.addRandomSuffix] = "0";
    const params = new URLSearchParams({
        pathname: folderPathname
    });
    const response = await requestApi(`/?${params.toString()}`, {
        method: "PUT",
        headers,
        signal: options.abortSignal
    }, options);
    return {
        url: response.url,
        pathname: response.pathname
    };
}
;
 /*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */ }),
"[project]/node_modules/@vercel/blob/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completeMultipartUpload",
    ()=>completeMultipartUpload,
    "copy",
    ()=>copy,
    "createMultipartUpload",
    ()=>createMultipartUpload,
    "createMultipartUploader",
    ()=>createMultipartUploader,
    "del",
    ()=>del,
    "get",
    ()=>get,
    "head",
    ()=>head,
    "list",
    ()=>list,
    "put",
    ()=>put,
    "uploadPart",
    ()=>uploadPart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/blob/dist/chunk-WLMB4XQD.js [app-route] (ecmascript)");
// src/get.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/undici/index.js [app-route] (ecmascript)");
;
// src/del.ts
async function del(urlOrPathname, options) {
    const urls = Array.isArray(urlOrPathname) ? urlOrPathname : [
        urlOrPathname
    ];
    if ((options == null ? void 0 : options.ifMatch) && urls.length > 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("ifMatch can only be used when deleting a single URL.");
    }
    const headers = {
        "content-type": "application/json"
    };
    if (options == null ? void 0 : options.ifMatch) {
        headers["x-if-match"] = options.ifMatch;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestApi"])("/delete", {
        method: "POST",
        headers,
        body: JSON.stringify({
            urls
        }),
        signal: options == null ? void 0 : options.abortSignal
    }, options);
}
// src/head.ts
async function head(urlOrPathname, options) {
    const searchParams = new URLSearchParams({
        url: urlOrPathname
    });
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestApi"])(`?${searchParams.toString()}`, // HEAD can't have body as a response, so we use GET
    {
        method: "GET",
        signal: options == null ? void 0 : options.abortSignal
    }, options);
    return {
        url: response.url,
        downloadUrl: response.downloadUrl,
        pathname: response.pathname,
        size: response.size,
        contentType: response.contentType,
        contentDisposition: response.contentDisposition,
        cacheControl: response.cacheControl,
        uploadedAt: new Date(response.uploadedAt),
        etag: response.etag
    };
}
;
function isUrl(urlOrPathname) {
    return urlOrPathname.startsWith("http://") || urlOrPathname.startsWith("https://");
}
function extractPathnameFromUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname.slice(1);
    } catch  {
        return url;
    }
}
function getStoreIdFromToken(token) {
    const [, , , storeId = ""] = token.split("_");
    return storeId;
}
function constructBlobUrl(storeId, pathname, access) {
    return `https://${storeId}.${access}.blob.vercel-storage.com/${pathname}`;
}
async function get(urlOrPathname, options) {
    if (!urlOrPathname) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("url or pathname is required");
    }
    if (!options) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("missing options, see usage");
    }
    if (options.access !== "public" && options.access !== "private") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]('access must be "private" or "public", see https://vercel.com/docs/vercel-blob');
    }
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTokenFromOptionsOrEnv"])(options);
    let blobUrl;
    let pathname;
    const access = options.access;
    if (isUrl(urlOrPathname)) {
        blobUrl = urlOrPathname;
        pathname = extractPathnameFromUrl(urlOrPathname);
        try {
            const { hostname } = new URL(blobUrl);
            if (!hostname.endsWith(".blob.vercel-storage.com")) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("Invalid URL: the URL does not point to a Vercel Blob store. Use a pathname instead, see https://vercel.com/docs/vercel-blob");
            }
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("Invalid URL: unable to parse the provided URL");
        }
    } else {
        const storeId = getStoreIdFromToken(token);
        if (!storeId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("Invalid token: unable to extract store ID");
        }
        pathname = urlOrPathname;
        blobUrl = constructBlobUrl(storeId, pathname, access);
    }
    const requestHeaders = {
        ...options.ifNoneMatch ? {
            "If-None-Match": options.ifNoneMatch
        } : {},
        authorization: `Bearer ${token}`,
        ...options.headers
    };
    let fetchUrl = blobUrl;
    if (options.useCache === false) {
        const url = new URL(blobUrl);
        url.searchParams.set("cache", "0");
        fetchUrl = url.toString();
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"])(fetchUrl, {
        method: "GET",
        headers: requestHeaders,
        signal: options.abortSignal
    });
    if (response.status === 304) {
        const downloadUrlObj = new URL(blobUrl);
        downloadUrlObj.searchParams.set("download", "1");
        const lastModified2 = response.headers.get("last-modified");
        return {
            statusCode: 304,
            stream: null,
            headers: response.headers,
            blob: {
                url: blobUrl,
                downloadUrl: downloadUrlObj.toString(),
                pathname,
                contentType: null,
                contentDisposition: response.headers.get("content-disposition") || "",
                cacheControl: response.headers.get("cache-control") || "",
                size: null,
                uploadedAt: lastModified2 ? new Date(lastModified2) : /* @__PURE__ */ new Date(),
                etag: response.headers.get("etag") || ""
            }
        };
    }
    if (response.status === 404) {
        return null;
    }
    if (!response.ok) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"](`Failed to fetch blob: ${response.status} ${response.statusText}`);
    }
    const stream = response.body;
    if (!stream) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("Response body is null");
    }
    const contentLength = response.headers.get("content-length");
    const lastModified = response.headers.get("last-modified");
    const downloadUrl = new URL(blobUrl);
    downloadUrl.searchParams.set("download", "1");
    return {
        statusCode: 200,
        stream,
        headers: response.headers,
        blob: {
            url: blobUrl,
            downloadUrl: downloadUrl.toString(),
            pathname,
            contentType: response.headers.get("content-type") || "application/octet-stream",
            contentDisposition: response.headers.get("content-disposition") || "",
            cacheControl: response.headers.get("cache-control") || "",
            size: contentLength ? parseInt(contentLength, 10) : 0,
            uploadedAt: lastModified ? new Date(lastModified) : /* @__PURE__ */ new Date(),
            etag: response.headers.get("etag") || ""
        }
    };
}
// src/list.ts
async function list(options) {
    var _a;
    const searchParams = new URLSearchParams();
    if (options == null ? void 0 : options.limit) {
        searchParams.set("limit", options.limit.toString());
    }
    if (options == null ? void 0 : options.prefix) {
        searchParams.set("prefix", options.prefix);
    }
    if (options == null ? void 0 : options.cursor) {
        searchParams.set("cursor", options.cursor);
    }
    if (options == null ? void 0 : options.mode) {
        searchParams.set("mode", options.mode);
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestApi"])(`?${searchParams.toString()}`, {
        method: "GET",
        signal: options == null ? void 0 : options.abortSignal
    }, options);
    if ((options == null ? void 0 : options.mode) === "folded") {
        return {
            folders: (_a = response.folders) != null ? _a : [],
            cursor: response.cursor,
            hasMore: response.hasMore,
            blobs: response.blobs.map(mapBlobResult)
        };
    }
    return {
        cursor: response.cursor,
        hasMore: response.hasMore,
        blobs: response.blobs.map(mapBlobResult)
    };
}
function mapBlobResult(blobResult) {
    return {
        url: blobResult.url,
        downloadUrl: blobResult.downloadUrl,
        pathname: blobResult.pathname,
        size: blobResult.size,
        uploadedAt: new Date(blobResult.uploadedAt),
        etag: blobResult.etag
    };
}
// src/copy.ts
async function copy(fromUrlOrPathname, toPathname, options) {
    if (!options) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]("missing options, see usage");
    }
    if (options.access !== "public" && options.access !== "private") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"]('access must be "private" or "public", see https://vercel.com/docs/vercel-blob');
    }
    if (toPathname.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAXIMUM_PATHNAME_LENGTH"]) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"](`pathname is too long, maximum length is ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAXIMUM_PATHNAME_LENGTH"]}`);
    }
    for (const invalidCharacter of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["disallowedPathnameCharacters"]){
        if (toPathname.includes(invalidCharacter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlobError"](`pathname cannot contain "${invalidCharacter}", please encode it if needed`);
        }
    }
    const headers = {};
    headers["x-vercel-blob-access"] = options.access;
    if (options.addRandomSuffix !== void 0) {
        headers["x-add-random-suffix"] = options.addRandomSuffix ? "1" : "0";
    }
    if (options.allowOverwrite !== void 0) {
        headers["x-allow-overwrite"] = options.allowOverwrite ? "1" : "0";
    }
    if (options.contentType) {
        headers["x-content-type"] = options.contentType;
    }
    if (options.cacheControlMaxAge !== void 0) {
        headers["x-cache-control-max-age"] = options.cacheControlMaxAge.toString();
    }
    if (options.ifMatch) {
        headers["x-if-match"] = options.ifMatch;
    }
    const params = new URLSearchParams({
        pathname: toPathname,
        fromUrl: fromUrlOrPathname
    });
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestApi"])(`?${params.toString()}`, {
        method: "PUT",
        headers,
        signal: options.abortSignal
    }, options);
    return {
        url: response.url,
        downloadUrl: response.downloadUrl,
        pathname: response.pathname,
        contentType: response.contentType,
        contentDisposition: response.contentDisposition,
        etag: response.etag
    };
}
// src/index.ts
var put = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPutMethod"])({
    allowedOptions: [
        "cacheControlMaxAge",
        "addRandomSuffix",
        "allowOverwrite",
        "contentType",
        "ifMatch"
    ]
});
var createMultipartUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCreateMultipartUploadMethod"])({
    allowedOptions: [
        "cacheControlMaxAge",
        "addRandomSuffix",
        "allowOverwrite",
        "contentType",
        "ifMatch"
    ]
});
var createMultipartUploader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCreateMultipartUploaderMethod"])({
    allowedOptions: [
        "cacheControlMaxAge",
        "addRandomSuffix",
        "allowOverwrite",
        "contentType",
        "ifMatch"
    ]
});
var uploadPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUploadPartMethod"])({
    allowedOptions: [
        "cacheControlMaxAge",
        "addRandomSuffix",
        "allowOverwrite",
        "contentType"
    ]
});
var completeMultipartUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$chunk$2d$WLMB4XQD$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCompleteMultipartUploadMethod"])({
    allowedOptions: [
        "cacheControlMaxAge",
        "addRandomSuffix",
        "allowOverwrite",
        "contentType"
    ]
});
;
}),
"[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb-438b504308ffa4be", () => require("mongodb-438b504308ffa4be"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-8b99e611e7552af3", () => require("mongoose-8b99e611e7552af3"));

module.exports = mod;
}),
"[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat,
    "decoder",
    ()=>decoder,
    "encode",
    ()=>encode,
    "encoder",
    ()=>encoder,
    "uint32be",
    ()=>uint32be,
    "uint64be",
    ()=>uint64be
]);
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function encode(string) {
    const bytes = new Uint8Array(string.length);
    for(let i = 0; i < string.length; i++){
        const code = string.charCodeAt(i);
        if (code > 127) {
            throw new TypeError('non-ASCII string encountered in encode()');
        }
        bytes[i] = code;
    }
    return bytes;
}
}),
"[project]/node_modules/jose/dist/webapi/lib/base64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBase64",
    ()=>decodeBase64,
    "encodeBase64",
    ()=>encodeBase64
]);
function encodeBase64(input) {
    if (Uint8Array.prototype.toBase64) {
        return input.toBase64();
    }
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for(let i = 0; i < input.length; i += CHUNK_SIZE){
        arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(''));
}
function decodeBase64(encoded) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(encoded);
    }
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
}),
"[project]/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/base64.js [app-route] (ecmascript)");
;
;
function decode(input) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(typeof input === 'string' ? input : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(input), {
            alphabet: 'base64url'
        });
    }
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(encoded);
    }
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64"])(encoded);
    } catch  {
        throw new TypeError('The input to be decoded is not correctly encoded.');
    }
}
function encode(input) {
    let unencoded = input;
    if (typeof unencoded === 'string') {
        unencoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(unencoded);
    }
    if (Uint8Array.prototype.toBase64) {
        return unencoded.toBase64({
            alphabet: 'base64url',
            omitPadding: true
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeBase64"])(unencoded).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
}),
"[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEAlgNotAllowed",
    ()=>JOSEAlgNotAllowed,
    "JOSEError",
    ()=>JOSEError,
    "JOSENotSupported",
    ()=>JOSENotSupported,
    "JWEDecryptionFailed",
    ()=>JWEDecryptionFailed,
    "JWEInvalid",
    ()=>JWEInvalid,
    "JWKInvalid",
    ()=>JWKInvalid,
    "JWKSInvalid",
    ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys",
    ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey",
    ()=>JWKSNoMatchingKey,
    "JWKSTimeout",
    ()=>JWKSTimeout,
    "JWSInvalid",
    ()=>JWSInvalid,
    "JWSSignatureVerificationFailed",
    ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed",
    ()=>JWTClaimValidationFailed,
    "JWTExpired",
    ()=>JWTExpired,
    "JWTInvalid",
    ()=>JWTInvalid
]);
class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWEDecryptionFailed extends JOSEError {
    static code = 'ERR_JWE_DECRYPTION_FAILED';
    code = 'ERR_JWE_DECRYPTION_FAILED';
    constructor(message = 'decryption operation failed', options){
        super(message, options);
    }
}
class JWEInvalid extends JOSEError {
    static code = 'ERR_JWE_INVALID';
    code = 'ERR_JWE_INVALID';
}
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
class JWKInvalid extends JOSEError {
    static code = 'ERR_JWK_INVALID';
    code = 'ERR_JWK_INVALID';
}
class JWKSInvalid extends JOSEError {
    static code = 'ERR_JWKS_INVALID';
    code = 'ERR_JWKS_INVALID';
}
class JWKSNoMatchingKey extends JOSEError {
    static code = 'ERR_JWKS_NO_MATCHING_KEY';
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSTimeout extends JOSEError {
    static code = 'ERR_JWKS_TIMEOUT';
    code = 'ERR_JWKS_TIMEOUT';
    constructor(message = 'request timed out', options){
        super(message, options);
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options){
        super(message, options);
    }
}
}),
"[project]/node_modules/jose/dist/webapi/lib/crypto_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEncCryptoKey",
    ()=>checkEncCryptoKey,
    "checkSigCryptoKey",
    ()=>checkSigCryptoKey
]);
const unusable = (name, prop = 'algorithm.name')=>new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
const isAlgorithm = (algorithm, name)=>algorithm.name === name;
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function checkHashLength(algorithm, expected) {
    const actual = getHashLength(algorithm.hash);
    if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usage) {
    if (usage && !key.usages.includes(usage)) {
        throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
    }
}
function checkSigCryptoKey(key, alg, usage) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
                break;
            }
        case 'Ed25519':
        case 'EdDSA':
            {
                if (!isAlgorithm(key.algorithm, 'Ed25519')) throw unusable('Ed25519');
                break;
            }
        case 'ML-DSA-44':
        case 'ML-DSA-65':
        case 'ML-DSA-87':
            {
                if (!isAlgorithm(key.algorithm, alg)) throw unusable(alg);
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usage);
}
function checkEncCryptoKey(key, alg, usage) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                        break;
                    default:
                        throw unusable('ECDH or X25519');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                checkHashLength(key.algorithm, parseInt(alg.slice(9), 10) || 1);
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usage);
}
}),
"[project]/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invalidKeyInput",
    ()=>invalidKeyInput,
    "withAlg",
    ()=>withAlg
]);
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
const invalidKeyInput = (actual, ...types)=>message('Key must be ', actual, ...types);
const withAlg = (alg, actual, ...types)=>message(`Key for the ${alg} algorithm must be `, actual, ...types);
}),
"[project]/node_modules/jose/dist/webapi/lib/signing.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkKeyLength",
    ()=>checkKeyLength,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/crypto_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-route] (ecmascript)");
;
;
;
function checkKeyLength(alg, key) {
    if (alg.startsWith('RS') || alg.startsWith('PS')) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== 'number' || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
    }
}
function subtleAlgorithm(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            return {
                hash,
                name: 'HMAC'
            };
        case 'PS256':
        case 'PS384':
        case 'PS512':
            return {
                hash,
                name: 'RSA-PSS',
                saltLength: parseInt(alg.slice(-3), 10) >> 3
            };
        case 'RS256':
        case 'RS384':
        case 'RS512':
            return {
                hash,
                name: 'RSASSA-PKCS1-v1_5'
            };
        case 'ES256':
        case 'ES384':
        case 'ES512':
            return {
                hash,
                name: 'ECDSA',
                namedCurve: algorithm.namedCurve
            };
        case 'Ed25519':
        case 'EdDSA':
            return {
                name: 'Ed25519'
            };
        case 'ML-DSA-44':
        case 'ML-DSA-65':
        case 'ML-DSA-87':
            return {
                name: alg
            };
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
async function getSigKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidKeyInput"])(key, 'CryptoKey', 'KeyObject', 'JSON Web Key'));
        }
        return crypto.subtle.importKey('raw', key, {
            hash: `SHA-${alg.slice(-3)}`,
            name: 'HMAC'
        }, false, [
            usage
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(key, alg, usage);
    return key;
}
async function sign(alg, key, data) {
    const cryptoKey = await getSigKey(alg, key, 'sign');
    checkKeyLength(alg, cryptoKey);
    const signature = await crypto.subtle.sign(subtleAlgorithm(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
}
async function verify(alg, key, signature, data) {
    const cryptoKey = await getSigKey(alg, key, 'verify');
    checkKeyLength(alg, cryptoKey);
    const algorithm = subtleAlgorithm(alg, cryptoKey.algorithm);
    try {
        return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
    } catch  {
        return false;
    }
}
}),
"[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDisjoint",
    ()=>isDisjoint,
    "isJWK",
    ()=>isJWK,
    "isObject",
    ()=>isObject,
    "isPrivateJWK",
    ()=>isPrivateJWK,
    "isPublicJWK",
    ()=>isPublicJWK,
    "isSecretJWK",
    ()=>isSecretJWK
]);
const isObjectLike = (value)=>typeof value === 'object' && value !== null;
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}
function isDisjoint(...headers) {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
}
const isJWK = (key)=>isObject(key) && typeof key.kty === 'string';
const isPrivateJWK = (key)=>key.kty !== 'oct' && (key.kty === 'AKP' && typeof key.priv === 'string' || typeof key.d === 'string');
const isPublicJWK = (key)=>key.kty !== 'oct' && key.d === undefined && key.priv === undefined;
const isSecretJWK = (key)=>key.kty === 'oct' && typeof key.k === 'string';
}),
"[project]/node_modules/jose/dist/webapi/lib/is_key_like.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCryptoKey",
    ()=>assertCryptoKey,
    "isCryptoKey",
    ()=>isCryptoKey,
    "isKeyLike",
    ()=>isKeyLike,
    "isKeyObject",
    ()=>isKeyObject
]);
function assertCryptoKey(key) {
    if (!isCryptoKey(key)) {
        throw new Error('CryptoKey instance expected');
    }
}
const isCryptoKey = (key)=>{
    if (key?.[Symbol.toStringTag] === 'CryptoKey') return true;
    try {
        return key instanceof CryptoKey;
    } catch  {
        return false;
    }
};
const isKeyObject = (key)=>key?.[Symbol.toStringTag] === 'KeyObject';
const isKeyLike = (key)=>isCryptoKey(key) || isKeyObject(key);
}),
"[project]/node_modules/jose/dist/webapi/lib/check_key_type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkKeyType",
    ()=>checkKeyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)");
;
;
;
const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined) {
        let expected;
        switch(usage){
            case 'sign':
            case 'verify':
                expected = 'sig';
                break;
            case 'encrypt':
            case 'decrypt':
                expected = 'enc';
                break;
        }
        if (key.use !== expected) {
            throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
        }
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
    }
    if (Array.isArray(key.key_ops)) {
        let expectedKeyOp;
        switch(true){
            case usage === 'sign' || usage === 'verify':
            case alg === 'dir':
            case alg.includes('CBC-HS'):
                expectedKeyOp = usage;
                break;
            case alg.startsWith('PBES2'):
                expectedKeyOp = 'deriveBits';
                break;
            case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
                if (!alg.includes('GCM') && alg.endsWith('KW')) {
                    expectedKeyOp = usage === 'encrypt' ? 'wrapKey' : 'unwrapKey';
                } else {
                    expectedKeyOp = usage;
                }
                break;
            case usage === 'encrypt' && alg.startsWith('RSA'):
                expectedKeyOp = 'wrapKey';
                break;
            case usage === 'decrypt':
                expectedKeyOp = alg.startsWith('RSA') ? 'unwrapKey' : 'deriveBits';
                break;
        }
        if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
            throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
        }
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage)=>{
    if (key instanceof Uint8Array) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSecretJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyLike"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key', 'Uint8Array'));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        switch(usage){
            case 'decrypt':
            case 'sign':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPrivateJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation must be a private JWK`);
            case 'encrypt':
            case 'verify':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPublicJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation must be a public JWK`);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyLike"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key'));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (key.type === 'public') {
        switch(usage){
            case 'sign':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
            case 'decrypt':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
        }
    }
    if (key.type === 'private') {
        switch(usage){
            case 'verify':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
            case 'encrypt':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
        }
    }
};
function checkKeyType(alg, key, usage) {
    switch(alg.substring(0, 2)){
        case 'A1':
        case 'A2':
        case 'di':
        case 'HS':
        case 'PB':
            symmetricTypeCheck(alg, key, usage);
            break;
        default:
            asymmetricTypeCheck(alg, key, usage);
    }
}
}),
"[project]/node_modules/jose/dist/webapi/lib/validate_crit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateCrit",
    ()=>validateCrit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
;
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
}),
"[project]/node_modules/jose/dist/webapi/lib/jwk_to_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwkToKey",
    ()=>jwkToKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
;
const unsupportedAlg = 'Invalid or unsupported JWK "alg" (Algorithm) Parameter value';
function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch(jwk.kty){
        case 'AKP':
            {
                switch(jwk.alg){
                    case 'ML-DSA-44':
                    case 'ML-DSA-65':
                    case 'ML-DSA-87':
                        algorithm = {
                            name: jwk.alg
                        };
                        keyUsages = jwk.priv ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](unsupportedAlg);
                }
                break;
            }
        case 'RSA':
            {
                switch(jwk.alg){
                    case 'PS256':
                    case 'PS384':
                    case 'PS512':
                        algorithm = {
                            name: 'RSA-PSS',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RS256':
                    case 'RS384':
                    case 'RS512':
                        algorithm = {
                            name: 'RSASSA-PKCS1-v1_5',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RSA-OAEP':
                    case 'RSA-OAEP-256':
                    case 'RSA-OAEP-384':
                    case 'RSA-OAEP-512':
                        algorithm = {
                            name: 'RSA-OAEP',
                            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
                        };
                        keyUsages = jwk.d ? [
                            'decrypt',
                            'unwrapKey'
                        ] : [
                            'encrypt',
                            'wrapKey'
                        ];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](unsupportedAlg);
                }
                break;
            }
        case 'EC':
            {
                switch(jwk.alg){
                    case 'ES256':
                    case 'ES384':
                    case 'ES512':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: ({
                                ES256: 'P-256',
                                ES384: 'P-384',
                                ES512: 'P-521'
                            })[jwk.alg]
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: 'ECDH',
                            namedCurve: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](unsupportedAlg);
                }
                break;
            }
        case 'OKP':
            {
                switch(jwk.alg){
                    case 'Ed25519':
                    case 'EdDSA':
                        algorithm = {
                            name: 'Ed25519'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](unsupportedAlg);
                }
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm,
        keyUsages
    };
}
async function jwkToKey(jwk) {
    if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const keyData = {
        ...jwk
    };
    if (keyData.kty !== 'AKP') {
        delete keyData.alg;
    }
    delete keyData.use;
    return crypto.subtle.importKey('jwk', keyData, algorithm, jwk.ext ?? (jwk.d || jwk.priv ? false : true), jwk.key_ops ?? keyUsages);
}
}),
"[project]/node_modules/jose/dist/webapi/lib/normalize_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeKey",
    ()=>normalizeKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/jwk_to_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/is_key_like.js [app-route] (ecmascript)");
;
;
;
;
const unusableForAlg = 'given KeyObject instance cannot be used for this algorithm';
let cache;
const handleJWK = async (key, jwk, alg, freeze = false)=>{
    cache ||= new WeakMap();
    let cached = cache.get(key);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwkToKey"])({
        ...jwk,
        alg
    });
    if (freeze) Object.freeze(key);
    if (!cached) {
        cache.set(key, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
const handleKeyObject = (keyObject, alg)=>{
    cache ||= new WeakMap();
    let cached = cache.get(keyObject);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const isPublic = keyObject.type === 'public';
    const extractable = isPublic ? true : false;
    let cryptoKey;
    if (keyObject.asymmetricKeyType === 'x25519') {
        switch(alg){
            case 'ECDH-ES':
            case 'ECDH-ES+A128KW':
            case 'ECDH-ES+A192KW':
            case 'ECDH-ES+A256KW':
                break;
            default:
                throw new TypeError(unusableForAlg);
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : [
            'deriveBits'
        ]);
    }
    if (keyObject.asymmetricKeyType === 'ed25519') {
        if (alg !== 'EdDSA' && alg !== 'Ed25519') {
            throw new TypeError(unusableForAlg);
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
            isPublic ? 'verify' : 'sign'
        ]);
    }
    switch(keyObject.asymmetricKeyType){
        case 'ml-dsa-44':
        case 'ml-dsa-65':
        case 'ml-dsa-87':
            {
                if (alg !== keyObject.asymmetricKeyType.toUpperCase()) {
                    throw new TypeError(unusableForAlg);
                }
                cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
                    isPublic ? 'verify' : 'sign'
                ]);
            }
    }
    if (keyObject.asymmetricKeyType === 'rsa') {
        let hash;
        switch(alg){
            case 'RSA-OAEP':
                hash = 'SHA-1';
                break;
            case 'RS256':
            case 'PS256':
            case 'RSA-OAEP-256':
                hash = 'SHA-256';
                break;
            case 'RS384':
            case 'PS384':
            case 'RSA-OAEP-384':
                hash = 'SHA-384';
                break;
            case 'RS512':
            case 'PS512':
            case 'RSA-OAEP-512':
                hash = 'SHA-512';
                break;
            default:
                throw new TypeError(unusableForAlg);
        }
        if (alg.startsWith('RSA-OAEP')) {
            return keyObject.toCryptoKey({
                name: 'RSA-OAEP',
                hash
            }, extractable, isPublic ? [
                'encrypt'
            ] : [
                'decrypt'
            ]);
        }
        cryptoKey = keyObject.toCryptoKey({
            name: alg.startsWith('PS') ? 'RSA-PSS' : 'RSASSA-PKCS1-v1_5',
            hash
        }, extractable, [
            isPublic ? 'verify' : 'sign'
        ]);
    }
    if (keyObject.asymmetricKeyType === 'ec') {
        const nist = new Map([
            [
                'prime256v1',
                'P-256'
            ],
            [
                'secp384r1',
                'P-384'
            ],
            [
                'secp521r1',
                'P-521'
            ]
        ]);
        const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
        if (!namedCurve) {
            throw new TypeError(unusableForAlg);
        }
        const expectedCurve = {
            ES256: 'P-256',
            ES384: 'P-384',
            ES512: 'P-521'
        };
        if (expectedCurve[alg] && namedCurve === expectedCurve[alg]) {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDSA',
                namedCurve
            }, extractable, [
                isPublic ? 'verify' : 'sign'
            ]);
        }
        if (alg.startsWith('ECDH-ES')) {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDH',
                namedCurve
            }, extractable, isPublic ? [] : [
                'deriveBits'
            ]);
        }
    }
    if (!cryptoKey) {
        throw new TypeError(unusableForAlg);
    }
    if (!cached) {
        cache.set(keyObject, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
async function normalizeKey(key, alg) {
    if (key instanceof Uint8Array) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyObject"])(key)) {
        if (key.type === 'secret') {
            return key.export();
        }
        if ('toCryptoKey' in key && typeof key.toCryptoKey === 'function') {
            try {
                return handleKeyObject(key, alg);
            } catch (err) {
                if (err instanceof TypeError) {
                    throw err;
                }
            }
        }
        let jwk = key.export({
            format: 'jwk'
        });
        return handleJWK(key, jwk, alg);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
        if (key.k) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(key.k);
        }
        return handleJWK(key, key, alg, true);
    }
    throw new Error('unreachable');
}
}),
"[project]/node_modules/jose/dist/webapi/lib/helpers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertNotSet",
    ()=>assertNotSet,
    "decodeBase64url",
    ()=>decodeBase64url,
    "digest",
    ()=>digest,
    "unprotected",
    ()=>unprotected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
;
const unprotected = Symbol();
function assertNotSet(value, name) {
    if (value) {
        throw new TypeError(`${name} can only be called once`);
    }
}
function decodeBase64url(value, label, ErrorClass) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(value);
    } catch  {
        throw new ErrorClass(`Failed to base64url decode the ${label}`);
    }
}
async function digest(algorithm, data) {
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await crypto.subtle.digest(subtleDigest, data));
}
}),
"[project]/node_modules/jose/dist/webapi/jws/flattened/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlattenedSign",
    ()=>FlattenedSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/signing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/check_key_type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/validate_crit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/normalize_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/helpers.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
class FlattenedSign {
    #payload;
    #protectedHeader;
    #unprotectedHeader;
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this.#payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNotSet"])(this.#protectedHeader, 'setProtectedHeader');
        this.#protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNotSet"])(this.#unprotectedHeader, 'setUnprotectedHeader');
        this.#unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this.#protectedHeader && !this.#unprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDisjoint"])(this.#protectedHeader, this.#unprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this.#protectedHeader,
            ...this.#unprotectedHeader
        };
        const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCrit"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this.#protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this.#protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyType"])(alg, key, 'sign');
        let payloadS;
        let payloadB;
        if (b64) {
            payloadS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(this.#payload);
            payloadB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payloadS);
        } else {
            payloadB = this.#payload;
            payloadS = '';
        }
        let protectedHeaderString;
        let protectedHeaderBytes;
        if (this.#protectedHeader) {
            protectedHeaderString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(JSON.stringify(this.#protectedHeader));
            protectedHeaderBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(protectedHeaderString);
        } else {
            protectedHeaderString = '';
            protectedHeaderBytes = new Uint8Array();
        }
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(protectedHeaderBytes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])('.'), payloadB);
        const k = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeKey"])(key, alg);
        const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sign"])(alg, k, data);
        const jws = {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(signature),
            payload: payloadS
        };
        if (this.#unprotectedHeader) {
            jws.header = this.#unprotectedHeader;
        }
        if (this.#protectedHeader) {
            jws.protected = protectedHeaderString;
        }
        return jws;
    }
}
}),
"[project]/node_modules/jose/dist/webapi/jws/compact/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactSign",
    ()=>CompactSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jws/flattened/sign.js [app-route] (ecmascript)");
;
class CompactSign {
    #flattened;
    constructor(payload){
        this.#flattened = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FlattenedSign"](payload);
    }
    setProtectedHeader(protectedHeader) {
        this.#flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this.#flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
}),
"[project]/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWTClaimsBuilder",
    ()=>JWTClaimsBuilder,
    "secs",
    ()=>secs,
    "validateClaimsSet",
    ()=>validateClaimsSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)");
;
;
;
const epoch = (date)=>Math.floor(date.getTime() / 1000);
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
function secs(str) {
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
}
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
const normalizeTyp = (value)=>{
    if (value.includes('/')) {
        return value.toLowerCase();
    }
    return `application/${value.toLowerCase()}`;
};
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(encodedPayload));
    } catch  {}
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(payload)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = secs(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = epoch(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : secs(maxTokenAge);
        if (age - tolerance > max) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
}
class JWTClaimsBuilder {
    #payload;
    constructor(payload){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this.#payload = structuredClone(payload);
    }
    data() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this.#payload));
    }
    get iss() {
        return this.#payload.iss;
    }
    set iss(value) {
        this.#payload.iss = value;
    }
    get sub() {
        return this.#payload.sub;
    }
    set sub(value) {
        this.#payload.sub = value;
    }
    get aud() {
        return this.#payload.aud;
    }
    set aud(value) {
        this.#payload.aud = value;
    }
    set jti(value) {
        this.#payload.jti = value;
    }
    set nbf(value) {
        if (typeof value === 'number') {
            this.#payload.nbf = validateInput('setNotBefore', value);
        } else if (value instanceof Date) {
            this.#payload.nbf = validateInput('setNotBefore', epoch(value));
        } else {
            this.#payload.nbf = epoch(new Date()) + secs(value);
        }
    }
    set exp(value) {
        if (typeof value === 'number') {
            this.#payload.exp = validateInput('setExpirationTime', value);
        } else if (value instanceof Date) {
            this.#payload.exp = validateInput('setExpirationTime', epoch(value));
        } else {
            this.#payload.exp = epoch(new Date()) + secs(value);
        }
    }
    set iat(value) {
        if (value === undefined) {
            this.#payload.iat = epoch(new Date());
        } else if (value instanceof Date) {
            this.#payload.iat = validateInput('setIssuedAt', epoch(value));
        } else if (typeof value === 'string') {
            this.#payload.iat = validateInput('setIssuedAt', epoch(new Date()) + secs(value));
        } else {
            this.#payload.iat = validateInput('setIssuedAt', value);
        }
    }
}
}),
"[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignJWT",
    ()=>SignJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jws/compact/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)");
;
;
;
class SignJWT {
    #protectedHeader;
    #jwt;
    constructor(payload = {}){
        this.#jwt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimsBuilder"](payload);
    }
    setIssuer(issuer) {
        this.#jwt.iss = issuer;
        return this;
    }
    setSubject(subject) {
        this.#jwt.sub = subject;
        return this;
    }
    setAudience(audience) {
        this.#jwt.aud = audience;
        return this;
    }
    setJti(jwtId) {
        this.#jwt.jti = jwtId;
        return this;
    }
    setNotBefore(input) {
        this.#jwt.nbf = input;
        return this;
    }
    setExpirationTime(input) {
        this.#jwt.exp = input;
        return this;
    }
    setIssuedAt(input) {
        this.#jwt.iat = input;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this.#protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactSign"](this.#jwt.data());
        sig.setProtectedHeader(this.#protectedHeader);
        if (Array.isArray(this.#protectedHeader?.crit) && this.#protectedHeader.crit.includes('b64') && this.#protectedHeader.b64 === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
}),
"[project]/node_modules/jose/dist/webapi/lib/validate_algorithms.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateAlgorithms",
    ()=>validateAlgorithms
]);
function validateAlgorithms(option, algorithms) {
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
}
}),
"[project]/node_modules/jose/dist/webapi/jws/flattened/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenedVerify",
    ()=>flattenedVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/signing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/helpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/type_checks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/check_key_type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/validate_crit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/validate_algorithms.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/normalize_key.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function flattenedVerify(jws, key, options) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(jws)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(jws.protected);
            parsedProt = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader));
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header is invalid');
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$type_checks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDisjoint"])(parsedProt, jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCrit"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
        [
            'b64',
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAlgorithms"])('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string');
        }
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyType"])(alg, key, 'verify');
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(jws.protected !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(jws.protected) : new Uint8Array(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])('.'), typeof jws.payload === 'string' ? b64 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(jws.payload) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload) : jws.payload);
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64url"])(jws.signature, 'signature', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]);
    const k = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeKey"])(key, alg);
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"])(alg, k, signature, data);
    if (!verified) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
    }
    let payload;
    if (b64) {
        payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64url"])(jws.payload, 'payload', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]);
    } else if (typeof jws.payload === 'string') {
        payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key: k
        };
    }
    return result;
}
}),
"[project]/node_modules/jose/dist/webapi/jws/compact/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compactVerify",
    ()=>compactVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jws/flattened/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
;
;
;
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Invalid Compact JWS');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenedVerify"])({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
"[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtVerify",
    ()=>jwtVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jws/compact/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
;
;
;
async function jwtVerify(jwt, key, options) {
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactVerify"])(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateClaimsSet"])(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05q3fii._.js.map