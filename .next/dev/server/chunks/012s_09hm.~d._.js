module.exports = [
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-D1yr0yUs.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>isProductionEnvironment,
    "r",
    ()=>isTestEnvironment,
    "t",
    ()=>isDevelopmentEnvironment
]);
//#region src/utils/runtimeEnvironment.ts
const isDevelopmentEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "development";
    } catch  {}
    return false;
};
const isTestEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "test";
    } catch  {}
    return false;
};
const isProductionEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "production";
    } catch  {}
    return false;
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/deprecated--jK9xTNh.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>deprecatedObjectProperty,
    "r",
    ()=>deprecatedProperty,
    "t",
    ()=>deprecated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$D1yr0yUs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-D1yr0yUs.mjs [app-route] (ecmascript)");
;
//#region src/deprecated.ts
/**
* Mark class method / function as deprecated.
*
* A console WARNING will be displayed when class method / function is invoked.
*
* Examples
* 1. Deprecate class method
* class Example {
*   getSomething = (arg1, arg2) => {
*       deprecated('Example.getSomething', 'Use `getSomethingElse` instead.');
*       return `getSomethingValue:${arg1 || '-'}:${arg2 || '-'}`;
*   };
* }
*
* 2. Deprecate function
* const getSomething = () => {
*   deprecated('getSomething', 'Use `getSomethingElse` instead.');
*   return 'getSomethingValue';
* };
*/ const displayedWarnings = /* @__PURE__ */ new Set();
const deprecated = (fnName, warning, key)=>{
    const hideWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$D1yr0yUs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$D1yr0yUs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])();
    const messageId = key ?? fnName;
    if (displayedWarnings.has(messageId) || hideWarning) return;
    displayedWarnings.add(messageId);
    console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.\n${warning}`);
};
const deprecatedProperty = (cls, propName, warning, isStatic = false)=>{
    const target = isStatic ? cls : cls.prototype;
    let value = target[propName];
    Object.defineProperty(target, propName, {
        get () {
            deprecated(propName, warning, `${cls.name}:${propName}`);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
/**
* Mark object property as deprecated.
*
* A console WARNING will be displayed when object property is being accessed.
*
* 1. Deprecate object property
* const obj = { something: 'aloha' };
*
* deprecatedObjectProperty(obj, 'something', 'Use `somethingElse` instead.');
*/ const deprecatedObjectProperty = (obj, propName, warning, key)=>{
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
        get () {
            deprecated(propName, warning, key);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/deprecated.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$deprecated$2d2d$jK9xTNh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/deprecated--jK9xTNh.mjs [app-route] (ecmascript)");
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/deprecated--jK9xTNh.mjs [app-route] (ecmascript) <export t as deprecated>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecated",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$deprecated$2d2d$jK9xTNh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$deprecated$2d2d$jK9xTNh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/deprecated--jK9xTNh.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/constants-Bta24VLk.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>LOCAL_API_URL,
    "c",
    ()=>PROD_API_URL,
    "d",
    ()=>STAGING_ENV_SUFFIXES,
    "f",
    ()=>STAGING_FAPI_URL,
    "i",
    ()=>LEGACY_DEV_INSTANCE_SUFFIXES,
    "l",
    ()=>PROD_FAPI_URL,
    "n",
    ()=>DEFAULT_PROXY_PATH,
    "o",
    ()=>LOCAL_ENV_SUFFIXES,
    "p",
    ()=>iconImageUrl,
    "r",
    ()=>DEV_OR_STAGING_SUFFIXES,
    "s",
    ()=>LOCAL_FAPI_URL,
    "t",
    ()=>CURRENT_DEV_INSTANCE_SUFFIXES,
    "u",
    ()=>STAGING_API_URL
]);
//#region src/constants.ts
const LEGACY_DEV_INSTANCE_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
const CURRENT_DEV_INSTANCE_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
const DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
];
const LOCAL_ENV_SUFFIXES = [
    ".lcl.dev",
    "lclstage.dev",
    ".lclclerk.com",
    ".accounts.lclclerk.com"
];
const STAGING_ENV_SUFFIXES = [
    ".accountsstage.dev"
];
const LOCAL_API_URL = "https://api.lclclerk.com";
const STAGING_API_URL = "https://api.clerkstage.dev";
const PROD_API_URL = "https://api.clerk.com";
const LOCAL_FAPI_URL = "https://frontend-api.lclclerk.com";
const STAGING_FAPI_URL = "https://frontend-api.clerkstage.dev";
const PROD_FAPI_URL = "https://frontend-api.clerk.dev";
const DEFAULT_PROXY_PATH = "/__clerk";
/**
* Returns the URL for a static image
* using the new img.clerk.com service
*/ function iconImageUrl(id, format = "svg") {
    return `https://img.clerk.com/static/${id}.${format}`;
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-CoF80qYz.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>isomorphicAtob
]);
//#region src/isomorphicAtob.ts
/**
* A function that decodes a string of data which has been encoded using base-64 encoding.
* Uses `atob` if available, otherwise uses `Buffer` from `globalThis`. If neither are available, returns the data as-is.
*/ const isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") return atob(data);
    else if (typeof globalThis.Buffer !== "undefined") return globalThis.Buffer.from(data, "base64").toString();
    return data;
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-DWmLcIHi.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>isomorphicBtoa
]);
//#region src/isomorphicBtoa.ts
const isomorphicBtoa = (data)=>{
    if (typeof btoa !== "undefined" && typeof btoa === "function") return btoa(data);
    else if (typeof globalThis.Buffer !== "undefined") return globalThis.Buffer.from(data).toString("base64");
    return data;
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isDevelopmentFromPublishableKey,
    "c",
    ()=>isProductionFromSecretKey,
    "d",
    ()=>publishableKeyFromHost,
    "i",
    ()=>getSuffixedCookieName,
    "l",
    ()=>isPublishableKey,
    "n",
    ()=>createDevOrStagingUrlCache,
    "o",
    ()=>isDevelopmentFromSecretKey,
    "r",
    ()=>getCookieSuffix,
    "s",
    ()=>isProductionFromPublishableKey,
    "t",
    ()=>buildPublishableKey,
    "u",
    ()=>parsePublishableKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/constants-Bta24VLk.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-CoF80qYz.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$DWmLcIHi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-DWmLcIHi.mjs [app-route] (ecmascript)");
;
;
;
//#region src/keys.ts
/** Prefix used for production publishable keys */ const PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
/** Prefix used for development publishable keys */ const PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
/**
* Regular expression that matches development frontend API keys.
* Matches patterns like: foo-bar-13.clerk.accounts.dev.
*/ const PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
/**
* Converts a frontend API URL into an unpadded base64-encoded publishable key.
*
* @param frontendApi - The frontend API URL (e.g., 'clerk.example.com').
* @returns An unpadded base64-encoded publishable key with appropriate prefix (pk_live_ or pk_test_).
*/ function buildPublishableKey(frontendApi) {
    return `${PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"].some((s)=>frontendApi.endsWith(s)) ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$DWmLcIHi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(`${frontendApi}$`).replace(/=+$/, "")}`;
}
/**
* Derives a publishable key from the current hostname. Intended for multi-domain
* setups (e.g. custom domains on top of a default domain) where the correct key
* must be resolved per request.
*
* Pass the configured publishable key as `fallbackKey` so that development
* instances (pk_test_) are returned as-is instead of being incorrectly derived
* from the host (e.g. localhost).
*
* @example
* // React (use window.location.hostname, not window.location.host, to avoid including the port)
* <ClerkProvider publishableKey={publishableKeyFromHost(window.location.hostname, import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)}>
*
* @example
* // Express (inside clerkMiddleware callback)
* // Validate req.hostname against a known allowlist before passing it in.
* // When `trust proxy` is enabled, req.hostname reads from X-Forwarded-Host
* // and can be spoofed if your proxy is not properly configured.
* const ALLOWED_HOSTS = ['domain-a.com', 'domain-b.com'];
* clerkMiddleware((req) => {
*   if (!ALLOWED_HOSTS.includes(req.hostname)) throw new Error('Unknown host');
*   return { publishableKey: publishableKeyFromHost(req.hostname, process.env.CLERK_PUBLISHABLE_KEY) };
* })
*/ function publishableKeyFromHost(host, fallbackKey) {
    if (fallbackKey && isDevelopmentFromPublishableKey(fallbackKey)) return fallbackKey;
    const hostname = host.toLowerCase().replace(/:\d+$/, "");
    if (!hostname) throw new Error("Host must not be empty.");
    return buildPublishableKey(`clerk.${hostname}`);
}
/**
* Validates that a decoded publishable key has the correct format.
* The decoded value should be a frontend API followed by exactly one '$' at the end.
*
* @param decoded - The decoded publishable key string to validate.
* @returns `true` if the decoded key has valid format, `false` otherwise.
*/ function isValidDecodedPublishableKey(decoded) {
    if (!decoded.endsWith("$")) return false;
    const withoutTrailing = decoded.slice(0, -1);
    if (withoutTrailing.includes("$")) return false;
    return withoutTrailing.includes(".");
}
/**
* Parses and validates a publishable key, extracting the frontend API and instance type.
*
* @param key - The publishable key to parse.
* @param options - Configuration options for parsing.
* @param options.fatal
* @param options.domain
* @param options.proxyUrl
* @param options.isSatellite
* @returns Parsed publishable key object with instanceType and frontendApi, or null if invalid.
*
* @throws {Error} When options.fatal is true and key is missing or invalid.
*/ function parsePublishableKey(key, options = {}) {
    key = key || "";
    if (!key || !isPublishableKey(key)) {
        if (options.fatal && !key) throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
        if (options.fatal && !isPublishableKey(key)) throw new Error("Publishable key not valid.");
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let decodedFrontendApi;
    try {
        decodedFrontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(key.split("_")[2]);
    } catch  {
        if (options.fatal) throw new Error("Publishable key not valid: Failed to decode key.");
        return null;
    }
    if (!isValidDecodedPublishableKey(decodedFrontendApi)) {
        if (options.fatal) throw new Error("Publishable key not valid: Decoded key has invalid format.");
        return null;
    }
    let frontendApi = decodedFrontendApi.slice(0, -1);
    if (options.proxyUrl) frontendApi = options.proxyUrl;
    else if (instanceType !== "development" && options.domain && options.isSatellite) frontendApi = `clerk.${options.domain}`;
    return {
        instanceType,
        frontendApi
    };
}
/**
* Checks if the provided key is a valid publishable key.
*
* @param key - The key to be checked. Defaults to an empty string if not provided.
* @returns `true` if 'key' is a valid publishable key, `false` otherwise.
*/ function isPublishableKey(key = "") {
    try {
        if (!(key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX))) return false;
        const parts = key.split("_");
        if (parts.length !== 3) return false;
        const encodedPart = parts[2];
        if (!encodedPart) return false;
        return isValidDecodedPublishableKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(encodedPart));
    } catch  {
        return false;
    }
}
/**
* Creates a memoized cache for checking if URLs are development or staging environments.
* Uses a Map to cache results for better performance on repeated checks.
*
* @returns An object with an isDevOrStagingUrl method that checks if a URL is dev/staging.
*/ function createDevOrStagingUrlCache() {
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) return false;
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
/**
* Checks if a publishable key is for a development environment.
* Supports both legacy format (test_) and new format (pk_test_).
*
* @param apiKey - The API key to check.
* @returns `true` if the key is for development, `false` otherwise.
*/ function isDevelopmentFromPublishableKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
/**
* Checks if a publishable key is for a production environment.
* Supports both legacy format (live_) and new format (pk_live_).
*
* @param apiKey - The API key to check.
* @returns `true` if the key is for production, `false` otherwise.
*/ function isProductionFromPublishableKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
}
/**
* Checks if a secret key is for a development environment.
* Supports both legacy format (test_) and new format (sk_test_).
*
* @param apiKey - The secret key to check.
* @returns `true` if the key is for development, `false` otherwise.
*/ function isDevelopmentFromSecretKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
/**
* Checks if a secret key is for a production environment.
* Supports both legacy format (live_) and new format (sk_live_).
*
* @param apiKey - The secret key to check.
* @returns `true` if the key is for production, `false` otherwise.
*/ function isProductionFromSecretKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
/**
* Generates a unique cookie suffix based on the publishable key using SHA-1 hashing.
* The suffix is base64-encoded and URL-safe (+ and / characters are replaced).
*
* @param publishableKey - The publishable key to generate suffix from.
* @param subtle - The SubtleCrypto interface to use for hashing (defaults to globalThis.crypto.subtle).
* @returns A promise that resolves to an 8-character URL-safe base64 string.
*/ async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
    const data = new TextEncoder().encode(publishableKey);
    const digest = await subtle.digest("sha-1", data);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$DWmLcIHi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
/**
* Creates a suffixed cookie name by appending the cookie suffix to the base name.
* Used to create unique cookie names based on the publishable key.
*
* @param cookieName - The base cookie name.
* @param cookieSuffix - The suffix to append (typically generated by getCookieSuffix).
* @returns The suffixed cookie name in format: `${cookieName}_${cookieSuffix}`.
*/ const getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return `${cookieName}_${cookieSuffix}`;
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript) <export r as getCookieSuffix>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCookieSuffix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript) <export i as getSuffixedCookieName>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSuffixedCookieName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript) <export o as isDevelopmentFromSecretKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDevelopmentFromSecretKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript) <export u as parsePublishableKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePublishableKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/retry-DqRIhHV5.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>retry
]);
//#region src/retry.ts
const defaultOptions = {
    initialDelay: 125,
    maxDelayBetweenRetries: 0,
    factor: 2,
    shouldRetry: (_, iteration)=>iteration < 5,
    retryImmediately: false,
    jitter: true
};
const RETRY_IMMEDIATELY_DELAY = 100;
const sleep = async (ms)=>new Promise((s)=>setTimeout(s, ms));
const applyJitter = (delay, jitter)=>{
    return jitter ? delay * (1 + Math.random()) : delay;
};
const createExponentialDelayAsyncFn = (opts)=>{
    let timesCalled = 0;
    const calculateDelayInMs = ()=>{
        const constant = opts.initialDelay;
        const base = opts.factor;
        let delay = constant * Math.pow(base, timesCalled);
        delay = applyJitter(delay, opts.jitter);
        return Math.min(opts.maxDelayBetweenRetries || delay, delay);
    };
    return async ()=>{
        await sleep(calculateDelayInMs());
        timesCalled++;
    };
};
/**
* Retries a callback until it succeeds or the shouldRetry function returns false.
* See {@link RetryOptions} for the available options.
*/ const retry = async (callback, options = {})=>{
    let iterations = 0;
    const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter, onBeforeRetry } = {
        ...defaultOptions,
        ...options
    };
    const delay = createExponentialDelayAsyncFn({
        initialDelay,
        maxDelayBetweenRetries,
        factor,
        jitter
    });
    while(true)try {
        return await callback();
    } catch (e) {
        iterations++;
        if (!shouldRetry(e, iterations)) throw e;
        if (onBeforeRetry) await onBeforeRetry(iterations);
        if (retryImmediately && iterations === 1) await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
        else await delay();
    }
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/retry.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DqRIhHV5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/retry-DqRIhHV5.mjs [app-route] (ecmascript)");
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/retry-DqRIhHV5.mjs [app-route] (ecmascript) <export t as retry>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "retry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DqRIhHV5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DqRIhHV5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/retry-DqRIhHV5.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/instance-BmZr0cdE.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>isStaging
]);
//#region src/utils/instance.ts
/**
* Check if the frontendApi ends with a staging domain
*/ function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>withoutTrailingSlash,
    "a",
    ()=>hasLeadingSlash,
    "c",
    ()=>isCurrentDevAccountPortalOrigin,
    "d",
    ()=>joinURL,
    "f",
    ()=>parseSearchParams,
    "g",
    ()=>withoutLeadingSlash,
    "h",
    ()=>withTrailingSlash,
    "i",
    ()=>getScriptUrl,
    "l",
    ()=>isLegacyDevAccountPortalOrigin,
    "m",
    ()=>withLeadingSlash,
    "n",
    ()=>cleanDoubleSlashes,
    "o",
    ()=>hasTrailingSlash,
    "p",
    ()=>stripScheme,
    "r",
    ()=>getClerkJsMajorVersionOrTag,
    "s",
    ()=>isAbsoluteUrl,
    "t",
    ()=>addClerkPrefix,
    "u",
    ()=>isNonEmptyURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/constants-Bta24VLk.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$BmZr0cdE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/instance-BmZr0cdE.mjs [app-route] (ecmascript)");
;
;
//#region src/url.ts
/**
*
*/ function parseSearchParams(queryString = "") {
    if (queryString.startsWith("?")) queryString = queryString.slice(1);
    return new URLSearchParams(queryString);
}
/**
*
*/ function stripScheme(url = "") {
    return (url || "").replace(/^.+:\/\//, "");
}
/**
*
*/ function addClerkPrefix(str) {
    if (!str) return "";
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) regex = /(clerk\.)*(?=clerk\.)/;
    else if (str.match(/\.clerk.accounts/)) return str;
    else regex = /^(clerk\.)*/gi;
    return `clerk.${str.replace(regex, "")}`;
}
/**
*
* Retrieve the clerk-js major tag using the major version from the pkgVersion
* param or use the frontendApi to determine if the canary tag should be used.
* The default tag is `latest`.
*/ const getClerkJsMajorVersionOrTag = (frontendApi, version)=>{
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$BmZr0cdE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(frontendApi)) return "canary";
    if (!version) return "latest";
    return version.split(".")[0] || "latest";
};
/**
*
* Retrieve the clerk-js script url from the frontendApi and the major tag
* using the {@link getClerkJsMajorVersionOrTag} or a provided clerkJSVersion tag.
*/ const getScriptUrl = (frontendApi, { clerkJSVersion })=>{
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
    return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
};
/**
*
*/ function isLegacyDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
/**
*
*/ function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$Bta24VLk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
/**
*
*/ function hasTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) return input.endsWith("/");
    return TRAILING_SLASH_RE.test(input);
}
/**
*
*/ function withTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) return input.endsWith("/") ? input : input + "/";
    if (hasTrailingSlash(input, true)) return input || "/";
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) return fragment;
    }
    const [s0, ...s] = path.split("?");
    return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
/**
*
*/ function withoutTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    if (!hasTrailingSlash(input, true)) return input || "/";
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
    }
    const [s0, ...s] = path.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
/**
*
*/ function hasLeadingSlash(input = "") {
    return input.startsWith("/");
}
/**
*
*/ function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
/**
*
*/ function withLeadingSlash(input = "") {
    return hasLeadingSlash(input) ? input : "/" + input;
}
/**
*
*/ function cleanDoubleSlashes(input = "") {
    return input.split("://").map((string_)=>string_.replace(/\/{2,}/g, "/")).join("://");
}
/**
*
*/ function isNonEmptyURL(url) {
    return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
/**
*
*/ function joinURL(base, ...input) {
    let url = base || "";
    for (const segment of input.filter((url$1)=>isNonEmptyURL(url$1)))if (url) {
        const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
        url = withTrailingSlash(url) + _segment;
    } else url = segment;
    return url;
}
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$C6gPMFx5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/clerkRuntimeError-DqAmLuLY.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>createErrorTypeGuard,
    "i",
    ()=>isClerkError,
    "n",
    ()=>isClerkRuntimeError,
    "r",
    ()=>ClerkError,
    "t",
    ()=>ClerkRuntimeError
]);
//#region src/errors/createErrorTypeGuard.ts
/**
* Creates a type guard function for any error class.
* The returned function can be called as a standalone function or as a method on an error object.
*
* @example
* ```typescript
* class MyError extends Error {}
* const isMyError = createErrorTypeGuard(MyError);
*
* // As a standalone function
* if (isMyError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isMyError()) { ... }
* ```
*/ function createErrorTypeGuard(ErrorClass) {
    function typeGuard(error) {
        const target = error ?? this;
        if (!target) throw new TypeError(`${ErrorClass.kind || ErrorClass.name} type guard requires an error object`);
        if (ErrorClass.kind && typeof target === "object" && target !== null && "constructor" in target) {
            if (target.constructor?.kind === ErrorClass.kind) return true;
        }
        return target instanceof ErrorClass;
    }
    return typeGuard;
}
//#endregion
//#region src/errors/clerkError.ts
var ClerkError = class ClerkError extends Error {
    static kind = "ClerkError";
    clerkError = true;
    code;
    longMessage;
    docsUrl;
    cause;
    get name() {
        return this.constructor.name;
    }
    constructor(opts){
        super(new.target.formatMessage(new.target.kind, opts.message, opts.code, opts.docsUrl), {
            cause: opts.cause
        });
        Object.setPrototypeOf(this, ClerkError.prototype);
        this.code = opts.code;
        this.docsUrl = opts.docsUrl;
        this.longMessage = opts.longMessage;
        this.cause = opts.cause;
    }
    toString() {
        return `[${this.name}]\nMessage:${this.message}`;
    }
    static formatMessage(name, msg, code, docsUrl) {
        const prefix = "Clerk:";
        const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
        msg = msg.replace(regex, "");
        msg = `${prefix} ${msg.trim()}\n\n(code="${code}")\n\n`;
        if (docsUrl) msg += `\n\nDocs: ${docsUrl}`;
        return msg;
    }
};
/**
* Type guard to check if a value is a ClerkError instance.
*/ function isClerkError(val) {
    return createErrorTypeGuard(ClerkError)(val) || !!val && typeof val === "object" && "clerkError" in val && val.clerkError === true;
}
//#endregion
//#region src/errors/clerkRuntimeError.ts
/**
* Custom error class for representing Clerk runtime errors.
*
* @class ClerkRuntimeError
*
* @example
*   throw new ClerkRuntimeError('An error occurred', { code: 'password_invalid' });
*/ var ClerkRuntimeError = class ClerkRuntimeError extends ClerkError {
    static kind = "ClerkRuntimeError";
    /**
	* @deprecated Use `clerkError` property instead. This property is maintained for backward compatibility.
	*/ clerkRuntimeError = true;
    constructor(message, options){
        super({
            ...options,
            message
        });
        Object.setPrototypeOf(this, ClerkRuntimeError.prototype);
    }
};
/**
* Type guard to check if an error is a ClerkRuntimeError.
* Can be called as a standalone function or as a method on an error object.
*
* @example
* // As a standalone function
* if (isClerkRuntimeError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isClerkRuntimeError()) { ... }
*/ const isClerkRuntimeError = createErrorTypeGuard(ClerkRuntimeError);
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>isClerkAPIResponseError,
    "D",
    ()=>ClerkAPIError,
    "E",
    ()=>parseErrors,
    "O",
    ()=>isClerkAPIError,
    "S",
    ()=>ClerkAPIResponseError,
    "T",
    ()=>parseError,
    "_",
    ()=>EmailLinkErrorCode,
    "a",
    ()=>isEmailLinkError,
    "b",
    ()=>ClerkOfflineError,
    "c",
    ()=>isNetworkError,
    "d",
    ()=>isReverificationCancelledError,
    "f",
    ()=>isUnauthenticatedError,
    "g",
    ()=>EmailLinkError,
    "h",
    ()=>ClerkWebAuthnError,
    "i",
    ()=>isCaptchaError,
    "l",
    ()=>isPasswordCompromisedError,
    "m",
    ()=>isUserLockedError,
    "n",
    ()=>is429Error,
    "o",
    ()=>isKnownError,
    "p",
    ()=>isUnauthorizedError,
    "r",
    ()=>is4xxError,
    "s",
    ()=>isMetamaskError,
    "t",
    ()=>createClerkGlobalHookError,
    "u",
    ()=>isPasswordPwnedError,
    "v",
    ()=>EmailLinkErrorCodeStatus,
    "w",
    ()=>errorToJSON,
    "x",
    ()=>MissingExpiredTokenError,
    "y",
    ()=>buildErrorThrower
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/clerkRuntimeError-DqAmLuLY.mjs [app-route] (ecmascript)");
;
//#region src/errors/clerkApiError.ts
/**
* This error contains the specific error message, code, and any additional metadata that was returned by the Clerk API.
*/ var ClerkAPIError = class {
    static kind = "ClerkAPIError";
    code;
    message;
    longMessage;
    meta;
    constructor(json){
        const parsedError = {
            code: json.code,
            message: json.message,
            longMessage: json.long_message,
            meta: {
                paramName: json.meta?.param_name,
                sessionId: json.meta?.session_id,
                emailAddresses: json.meta?.email_addresses,
                identifiers: json.meta?.identifiers,
                zxcvbn: json.meta?.zxcvbn,
                plan: json.meta?.plan,
                isPlanUpgradePossible: json.meta?.is_plan_upgrade_possible
            }
        };
        this.code = parsedError.code;
        this.message = parsedError.message;
        this.longMessage = parsedError.longMessage;
        this.meta = parsedError.meta;
    }
};
/**
* Type guard to check if a value is a ClerkAPIError instance.
*/ const isClerkAPIError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(ClerkAPIError);
//#endregion
//#region src/errors/parseError.ts
/**
* Parses an array of ClerkAPIErrorJSON objects into an array of ClerkAPIError objects.
*
* @internal
*/ function parseErrors(data = []) {
    return data.length > 0 ? data.map((e)=>new ClerkAPIError(e)) : [];
}
/**
* Parses a ClerkAPIErrorJSON object into a ClerkAPIError object.
*
* @deprecated Use `ClerkAPIError` class instead
*
* @internal
*/ function parseError(error) {
    return new ClerkAPIError(error);
}
/**
* Converts a ClerkAPIError object into a ClerkAPIErrorJSON object.
*
* @internal
*/ function errorToJSON(error) {
    return {
        code: error?.code || "",
        message: error?.message || "",
        long_message: error?.longMessage,
        meta: {
            param_name: error?.meta?.paramName,
            session_id: error?.meta?.sessionId,
            email_addresses: error?.meta?.emailAddresses,
            identifiers: error?.meta?.identifiers,
            zxcvbn: error?.meta?.zxcvbn,
            plan: error?.meta?.plan,
            is_plan_upgrade_possible: error?.meta?.isPlanUpgradePossible
        }
    };
}
//#endregion
//#region src/errors/clerkApiResponseError.ts
var ClerkAPIResponseError = class ClerkAPIResponseError extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"] {
    static kind = "ClerkAPIResponseError";
    status;
    clerkTraceId;
    retryAfter;
    errors;
    constructor(message, options){
        const { data: errorsJson, status, clerkTraceId, retryAfter } = options;
        super({
            ...options,
            message,
            code: "api_response_error"
        });
        Object.setPrototypeOf(this, ClerkAPIResponseError.prototype);
        this.status = status;
        this.clerkTraceId = clerkTraceId;
        this.retryAfter = retryAfter;
        this.errors = (errorsJson || []).map((e)=>new ClerkAPIError(e));
    }
    toString() {
        let message = `[${this.name}]\nMessage:${this.message}\nStatus:${this.status}\nSerialized errors: ${this.errors.map((e)=>JSON.stringify(e))}`;
        if (this.clerkTraceId) message += `\nClerk Trace ID: ${this.clerkTraceId}`;
        return message;
    }
    static formatMessage(name, msg, _, __) {
        return msg;
    }
};
/**
* Type guard to check if an error is a ClerkAPIResponseError.
* Can be called as a standalone function or as a method on an error object.
*
* @example
* // As a standalone function
* if (isClerkAPIResponseError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isClerkAPIResponseError()) { ... }
*/ const isClerkAPIResponseError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(ClerkAPIResponseError);
//#endregion
//#region src/errors/missingExpiredTokenError.ts
/**
* Error class representing a missing expired token error from the API.
* This error occurs when the server requires an expired token to mint a new session token.
*
* Use the static `is` method to check if a ClerkAPIResponseError matches this error type.
*
* @example
* ```typescript
* if (MissingExpiredTokenError.is(error)) {
*   // Handle the missing expired token error
* }
* ```
*/ var MissingExpiredTokenError = class MissingExpiredTokenError extends ClerkAPIResponseError {
    static kind = "MissingExpiredTokenError";
    static ERROR_CODE = "missing_expired_token";
    static STATUS = 422;
    /**
	* Type guard to check if an error is a MissingExpiredTokenError.
	* This checks the error's properties (status and error code) rather than instanceof,
	* allowing it to work with ClerkAPIResponseError instances thrown from the API layer.
	*
	* @example
	* ```typescript
	* try {
	*   await someApiCall();
	* } catch (e) {
	*   if (MissingExpiredTokenError.is(e)) {
	*     // e is typed as ClerkAPIResponseError with the specific error properties
	*   }
	* }
	* ```
	*/ static is(err) {
        return isClerkAPIResponseError(err) && err.status === MissingExpiredTokenError.STATUS && err.errors.length > 0 && err.errors[0].code === MissingExpiredTokenError.ERROR_CODE;
    }
};
//#endregion
//#region src/errors/clerkOfflineError.ts
/**
* Error thrown when a network request fails due to the client being offline.
*
* This error is thrown instead of returning `null` to make it explicit that
* the failure was due to network conditions, not authentication state.
*
* @example
* ```typescript
* try {
*   const token = await session.getToken();
* } catch (error) {
*   if (ClerkOfflineError.is(error)) {
*     // Handle offline scenario
*     showOfflineScreen();
*   }
* }
* ```
*/ var ClerkOfflineError = class ClerkOfflineError extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"] {
    static kind = "ClerkOfflineError";
    static ERROR_CODE = "clerk_offline";
    constructor(message){
        super(message, {
            code: ClerkOfflineError.ERROR_CODE
        });
        Object.setPrototypeOf(this, ClerkOfflineError.prototype);
    }
    /**
	* Type guard to check if an error is a ClerkOfflineError.
	* This checks both instanceof and the error code to support cross-bundle/cross-realm errors
	*
	* @example
	* ```typescript
	* try {
	*   const token = await session.getToken();
	* } catch (error) {
	*   if (ClerkOfflineError.is(error)) {
	*     // error is typed as ClerkOfflineError
	*     console.log('User is offline');
	*   }
	* }
	* ```
	*/ static is(error) {
        if (error === null || error === void 0) return false;
        return error instanceof ClerkOfflineError || (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(error) && error.code === ClerkOfflineError.ERROR_CODE;
    }
};
//#endregion
//#region src/errors/errorThrower.ts
const DefaultMessages = Object.freeze({
    InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
    InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
    MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
/**
* Builds an error thrower.
*
* @internal
*/ function buildErrorThrower({ packageName, customMessages }) {
    let pkg = packageName;
    /**
	* Builds a message from a raw message and replacements.
	*
	* @internal
	*/ function buildMessage(rawMessage, replacements) {
        if (!replacements) return `${pkg}: ${rawMessage}`;
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches){
            const replacement = (replacements[match[1]] || "").toString();
            msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
    }
    const messages = {
        ...DefaultMessages,
        ...customMessages
    };
    return {
        setPackageName ({ packageName: packageName$1 }) {
            if (typeof packageName$1 === "string") pkg = packageName$1;
            return this;
        },
        setMessages ({ customMessages: customMessages$1 }) {
            Object.assign(messages, customMessages$1 || {});
            return this;
        },
        throwInvalidPublishableKeyError (params) {
            throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl (params) {
            throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError () {
            throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError () {
            throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError (params) {
            throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw (message) {
            throw new Error(buildMessage(message));
        }
    };
}
//#endregion
//#region src/errors/emailLinkError.ts
var EmailLinkError = class EmailLinkError extends Error {
    code;
    constructor(code){
        super(code);
        this.code = code;
        this.name = "EmailLinkError";
        Object.setPrototypeOf(this, EmailLinkError.prototype);
    }
};
/**
* @deprecated Use `EmailLinkErrorCodeStatus` instead.
*
* @internal
*/ const EmailLinkErrorCode = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
const EmailLinkErrorCodeStatus = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
//#endregion
//#region src/errors/webAuthNError.ts
var ClerkWebAuthnError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"] {
    /**
	* A unique code identifying the error, can be used for localization.
	*/ code;
    constructor(message, options){
        super(message, options);
        this.code = options.code;
    }
};
//#endregion
//#region src/errors/helpers.ts
/**
* Checks if the provided error object is an unauthorized error.
*
* @internal
*
* @deprecated This is no longer used, and will be removed in the next major version.
*/ function isUnauthorizedError(e) {
    const status = e?.status;
    return e?.errors?.[0]?.code === "authentication_invalid" && status === 401;
}
/**
* Checks if the provided error object is a captcha error.
*
* @internal
*/ function isCaptchaError(e) {
    return [
        "captcha_invalid",
        "captcha_not_enabled",
        "captcha_missing_token"
    ].includes(e.errors[0].code);
}
/**
* Checks if the provided error is a 4xx error.
*
* @internal
*/ function is4xxError(e) {
    const status = e?.status;
    return !!status && status >= 400 && status < 500;
}
/**
* Checks if the provided error is a 429 (Too Many Requests) error.
*
* @internal
*/ function is429Error(e) {
    return e?.status === 429;
}
/**
* Checks if the provided error indicates the user's session is no longer valid
* and should trigger the unauthenticated flow (e.g. sign-out / redirect to sign-in).
*
* Only matches explicit authentication failure status codes:
* - 401: session is invalid or expired
* - 422: invalid session state (e.g. missing_expired_token)
*
* 404 is intentionally excluded despite being returned for "session not found",
* because it's also returned for unrelated resources (org not found, JWT template
* not found) and shares the same `resource_not_found` error code, making it
* impossible to distinguish. Session-not-found 401s are already handled directly
* by Base._fetch.
*
* @internal
*/ function isUnauthenticatedError(e) {
    const status = e?.status;
    return status === 401 || status === 422;
}
/**
* Checks if the provided error is a network error.
*
* @internal
*/ function isNetworkError(e) {
    return (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "").includes("networkerror");
}
/**
* Checks if the provided error is either a ClerkAPIResponseError, a ClerkRuntimeError, or a MetamaskError.
*
* @internal
*/ function isKnownError(error) {
    return isClerkAPIResponseError(error) || isMetamaskError(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(error);
}
/**
* Checks if the provided error is a Clerk runtime error indicating a reverification was cancelled.
*
* @internal
*/ function isReverificationCancelledError(err) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(err) && err.code === "reverification_cancelled";
}
/**
* Checks if the provided error is a Metamask error.
*
* @internal
*/ function isMetamaskError(err) {
    return "code" in err && [
        4001,
        32602,
        32603
    ].includes(err.code) && "message" in err;
}
/**
* Checks if the provided error is clerk api response error indicating a user is locked.
*
* @internal
*/ function isUserLockedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "user_locked";
}
/**
* Checks if the provided error is a clerk api response error indicating a password was pwned.
*
* @internal
*/ function isPasswordPwnedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "form_password_pwned";
}
/**
* Checks if the provided error is a clerk api response error indicating a password was compromised.
*
* @internal
*/ function isPasswordCompromisedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "form_password_compromised";
}
/**
* Checks if the provided error is an EmailLinkError.
*
* @internal
*/ function isEmailLinkError(err) {
    return err.name === "EmailLinkError";
}
//#endregion
//#region src/errors/globalHookError.ts
/**
* Creates a ClerkGlobalHookError object from a ClerkError instance.
* It's a wrapper for all the different instances of Clerk errors that can
* be returned when using Clerk hooks.
*/ function createClerkGlobalHookError(error) {
    const predicates = {
        isClerkAPIResponseError,
        isClerkRuntimeError: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
    };
    for (const [name, fn] of Object.entries(predicates))Object.assign(error, {
        [name]: fn
    });
    return error;
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/clerkRuntimeError-DqAmLuLY.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)");
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript) <export y as buildErrorThrower>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildErrorThrower",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript) <export n as createDevOrStagingUrlCache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDevOrStagingUrlCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/clerkRuntimeError-DqAmLuLY.mjs [app-route] (ecmascript) <export r as ClerkError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClerkError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$clerkRuntimeError$2d$DqAmLuLY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/clerkRuntimeError-DqAmLuLY.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript) <export S as ClerkAPIResponseError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClerkAPIResponseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript) <export C as isClerkAPIResponseError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isClerkAPIResponseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-CoF80qYz.mjs [app-route] (ecmascript)");
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-CoF80qYz.mjs [app-route] (ecmascript) <export t as isomorphicAtob>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isomorphicAtob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$CoF80qYz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-CoF80qYz.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/buildAccountsBaseUrl.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAccountsBaseUrl",
    ()=>buildAccountsBaseUrl
]);
//#region src/buildAccountsBaseUrl.ts
/**
* Builds a full origin string pointing to the Account Portal for the given frontend API.
*/ function buildAccountsBaseUrl(frontendApi) {
    if (!frontendApi) return "";
    return `https://${frontendApi.replace(/clerk\.accountsstage\./, "accountsstage.").replace(/clerk\.accounts\.|clerk\./, "accounts.")}`;
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/proxy-uGxHFpDF.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isValidProxyUrl,
    "i",
    ()=>isProxyUrlRelative,
    "n",
    ()=>getAutoProxyUrlFromEnvironment,
    "o",
    ()=>proxyUrlToAbsoluteURL,
    "r",
    ()=>isHttpOrHttps,
    "s",
    ()=>shouldAutoProxy,
    "t",
    ()=>AUTO_PROXY_PATH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
;
//#region src/proxy.ts
/**
*
*/ function isValidProxyUrl(key) {
    if (!key) return true;
    return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
/**
*
*/ function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
/**
*
*/ function isProxyUrlRelative(key) {
    return key.startsWith("/");
}
/**
*
*/ function proxyUrlToAbsoluteURL(url) {
    if (!url) return "";
    if (!isProxyUrlRelative(url)) return url;
    if (("TURBOPACK compile-time value", "undefined") === "undefined" || !window.location?.origin) return url;
    //TURBOPACK unreachable
    ;
}
const AUTO_PROXY_HOST_SUFFIXES = [
    ".vercel.app"
];
const AUTO_PROXY_PATH = "/__clerk";
function shouldAutoProxy(hostname) {
    return AUTO_PROXY_HOST_SUFFIXES.some((hostSuffix)=>hostname?.endsWith(hostSuffix)) ?? false;
}
function getDefaultEnvironment() {
    return typeof process !== "undefined" && process.env ? process.env : {};
}
function normalizeHostname(hostnameOrUrl) {
    if (hostnameOrUrl.startsWith("http://") || hostnameOrUrl.startsWith("https://")) try {
        return new URL(hostnameOrUrl).hostname;
    } catch  {
        return "";
    }
    return hostnameOrUrl.split("/")[0] || "";
}
/**
* Determines if the current Vercel environment should use auto-proxy.
* Note: This runs both at build time (static generation) and at runtime
* (server-side rendering) via mergeNextClerkPropsWithEnv in providers.
* The return value may become the proxyUrl or the script src prefix.
*/ function getAutoProxyUrlFromEnvironment({ publishableKey, hasDomain = false, hasProxyUrl = false, environment = getDefaultEnvironment() }) {
    if (hasProxyUrl || hasDomain || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(publishableKey)) return "";
    if (environment.VERCEL_TARGET_ENV !== "production") return "";
    const vercelProductionHostname = environment.VERCEL_PROJECT_PRODUCTION_URL;
    if (!vercelProductionHostname || !shouldAutoProxy(normalizeHostname(vercelProductionHostname))) return "";
    return AUTO_PROXY_PATH;
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/proxy.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$uGxHFpDF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/proxy-uGxHFpDF.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/proxy-uGxHFpDF.mjs [app-route] (ecmascript) <export n as getAutoProxyUrlFromEnvironment>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAutoProxyUrlFromEnvironment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$uGxHFpDF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$uGxHFpDF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/proxy-uGxHFpDF.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript) <export c as isCurrentDevAccountPortalOrigin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCurrentDevAccountPortalOrigin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$C6gPMFx5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$C6gPMFx5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript) <export l as isLegacyDevAccountPortalOrigin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLegacyDevAccountPortalOrigin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$C6gPMFx5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$C6gPMFx5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/url-C6gPMFx5.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-Bayl2soX.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>validateReverificationConfig,
    "n",
    ()=>resolveAuthState,
    "r",
    ()=>splitByScope,
    "t",
    ()=>createCheckAuthorization
]);
//#region src/authorization.ts
const TYPES_TO_OBJECTS = {
    strict_mfa: {
        afterMinutes: 10,
        level: "multi_factor"
    },
    strict: {
        afterMinutes: 10,
        level: "second_factor"
    },
    moderate: {
        afterMinutes: 60,
        level: "second_factor"
    },
    lax: {
        afterMinutes: 1440,
        level: "second_factor"
    }
};
const ALLOWED_LEVELS = new Set([
    "first_factor",
    "second_factor",
    "multi_factor"
]);
const ALLOWED_TYPES = new Set([
    "strict_mfa",
    "strict",
    "moderate",
    "lax"
]);
const ORG_SCOPES = new Set([
    "o",
    "org",
    "organization"
]);
const USER_SCOPES = new Set([
    "u",
    "user"
]);
const isValidMaxAge = (maxAge)=>typeof maxAge === "number" && maxAge > 0;
const isValidLevel = (level)=>ALLOWED_LEVELS.has(level);
const isValidVerificationType = (type)=>ALLOWED_TYPES.has(type);
const isValidFactorAge = (x)=>typeof x === "number" && Number.isFinite(x) && (x === -1 || x >= 0);
const prefixWithOrg = (value)=>value.replace(/^(org:)*/, "org:");
/**
* Checks if a user has the required organization-level authorization.
* If both role and permission are provided, both must match (AND).
*/ const checkOrgAuthorization = (params, options)=>{
    const { orgId, orgRole, orgPermissions } = options;
    const roleAsked = params.role !== void 0;
    const permissionAsked = params.permission !== void 0;
    if (!roleAsked && !permissionAsked) return "skip";
    if (roleAsked && typeof params.role !== "string") return "fail";
    if (permissionAsked && typeof params.permission !== "string") return "fail";
    if (!orgId) return "fail";
    if (roleAsked) {
        if (typeof orgRole !== "string" || !orgRole) return "fail";
        if (prefixWithOrg(orgRole) !== prefixWithOrg(params.role)) return "fail";
    }
    if (permissionAsked) {
        if (!Array.isArray(orgPermissions)) return "fail";
        if (!orgPermissions.includes(prefixWithOrg(params.permission))) return "fail";
    }
    return "pass";
};
const checkForFeatureOrPlan = (claim, featureOrPlan)=>{
    const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
    const [rawScope, rawId] = featureOrPlan.split(":");
    const hasExplicitScope = rawId !== void 0;
    const scope = rawScope;
    const id = rawId || rawScope;
    if (hasExplicitScope && !ORG_SCOPES.has(scope) && !USER_SCOPES.has(scope)) throw new Error(`Invalid scope: ${scope}`);
    if (hasExplicitScope) {
        if (ORG_SCOPES.has(scope)) return orgFeatures.includes(id);
        if (USER_SCOPES.has(scope)) return userFeatures.includes(id);
    }
    return [
        ...orgFeatures,
        ...userFeatures
    ].includes(id);
};
/**
* Checks if a user is entitled to the requested feature or plan.
* If both feature and plan are provided, both must match (AND).
*/ const checkBillingAuthorization = (params, options)=>{
    const { features, plans } = options;
    const featureAsked = params.feature !== void 0;
    const planAsked = params.plan !== void 0;
    if (!featureAsked && !planAsked) return "skip";
    if (featureAsked && typeof params.feature !== "string") return "fail";
    if (planAsked && typeof params.plan !== "string") return "fail";
    if (featureAsked) {
        if (typeof features !== "string" || !features) return "fail";
        try {
            if (!checkForFeatureOrPlan(features, params.feature)) return "fail";
        } catch  {
            return "fail";
        }
    }
    if (planAsked) {
        if (typeof plans !== "string" || !plans) return "fail";
        try {
            if (!checkForFeatureOrPlan(plans, params.plan)) return "fail";
        } catch  {
            return "fail";
        }
    }
    return "pass";
};
const splitByScope = (fea)=>{
    const org = [];
    const user = [];
    if (!fea) return {
        org,
        user
    };
    const parts = fea.split(",");
    for(let i = 0; i < parts.length; i++){
        const part = parts[i].trim();
        const colonIndex = part.indexOf(":");
        if (colonIndex === -1) throw new Error(`Invalid claim element (missing colon): ${part}`);
        const scope = part.slice(0, colonIndex);
        const value = part.slice(colonIndex + 1);
        if (scope === "o") org.push(value);
        else if (scope === "u") user.push(value);
        else if (scope === "ou" || scope === "uo") {
            org.push(value);
            user.push(value);
        }
    }
    return {
        org,
        user
    };
};
const validateReverificationConfig = (config)=>{
    if (!config) return false;
    const convertConfigToObject = (config$1)=>{
        if (typeof config$1 === "string") return TYPES_TO_OBJECTS[config$1];
        return config$1;
    };
    const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
    const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
    if (isValidStringValue || isValidObjectValue) return convertConfigToObject.bind(null, config);
    return false;
};
/**
* Evaluates if the user meets re-verification authentication requirements.
* Handles different verification levels (first factor, second factor, multi-factor).
*/ const checkReverificationAuthorization = (params, { factorVerificationAge })=>{
    if (params.reverification === void 0) return "skip";
    if (!factorVerificationAge) return "fail";
    if (!Array.isArray(factorVerificationAge) || factorVerificationAge.length !== 2 || !isValidFactorAge(factorVerificationAge[0]) || !isValidFactorAge(factorVerificationAge[1])) return "fail";
    const getConfig = validateReverificationConfig(params.reverification);
    if (!getConfig) return "fail";
    const { level, afterMinutes } = getConfig();
    const [factor1Age, factor2Age] = factorVerificationAge;
    if (factor1Age === -1 && factor2Age === -1) return "fail";
    const factor1FreshEnough = factor1Age !== -1 && afterMinutes > factor1Age;
    const factor2FreshEnough = factor2Age !== -1 && afterMinutes > factor2Age;
    switch(level){
        case "first_factor":
            return factor1FreshEnough ? "pass" : "fail";
        case "second_factor":
            if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
            if (factor1Age === -1) return factor2FreshEnough ? "pass" : "fail";
            return factor2FreshEnough ? "pass" : "fail";
        case "multi_factor":
            if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
            if (factor1Age === -1) return "fail";
            return factor1FreshEnough && factor2FreshEnough ? "pass" : "fail";
    }
};
const combine = (results)=>results.some((r)=>r === "pass") && results.every((r)=>r === "pass" || r === "skip");
/**
* Creates a function for comprehensive user authorization checks.
* Combines organization, billing, and reverification checks. The returned function
* authorizes only when every requested dimension passes; any requested dimension
* that cannot be satisfied (including missing or malformed session data) denies
* the request. Fails if `userId` is missing.
*/ const createCheckAuthorization = (options)=>{
    return (params)=>{
        if (!options.userId) return false;
        return combine([
            checkOrgAuthorization(params, options),
            checkBillingAuthorization(params, options),
            checkReverificationAuthorization(params, options)
        ]);
    };
};
/**
* Shared utility function that centralizes auth state resolution logic,
* preventing duplication across different packages.
*
* @internal
*/ const resolveAuthState = ({ authObject: { sessionId, sessionStatus, userId, actor, orgId, orgRole, orgSlug, signOut, getToken, has, sessionClaims }, options: { treatPendingAsSignedOut = true } })=>{
    if (sessionId === void 0 && userId === void 0) return {
        actor: void 0,
        getToken,
        has: ()=>false,
        isLoaded: false,
        isSignedIn: void 0,
        orgId: void 0,
        orgRole: void 0,
        orgSlug: void 0,
        sessionClaims: void 0,
        sessionId,
        signOut,
        userId
    };
    if (sessionId === null && userId === null) return {
        actor: null,
        getToken,
        has: ()=>false,
        isLoaded: true,
        isSignedIn: false,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        sessionClaims: null,
        sessionId,
        signOut,
        userId
    };
    if (treatPendingAsSignedOut && sessionStatus === "pending") return {
        actor: null,
        getToken,
        has: ()=>false,
        isLoaded: true,
        isSignedIn: false,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        sessionClaims: null,
        sessionId: null,
        signOut,
        userId: null
    };
    if (!!sessionId && !!sessionClaims && !!userId && !!orgId && !!orgRole) return {
        actor: actor || null,
        getToken,
        has,
        isLoaded: true,
        isSignedIn: true,
        orgId,
        orgRole,
        orgSlug: orgSlug || null,
        sessionClaims,
        sessionId,
        signOut,
        userId
    };
    if (!!sessionId && !!sessionClaims && !!userId && !orgId) return {
        actor: actor || null,
        getToken,
        has,
        isLoaded: true,
        isSignedIn: true,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        sessionClaims,
        sessionId,
        signOut,
        userId
    };
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$Bayl2soX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-Bayl2soX.mjs [app-route] (ecmascript)");
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-Bayl2soX.mjs [app-route] (ecmascript) <export t as createCheckAuthorization>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCheckAuthorization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$Bayl2soX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$Bayl2soX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-Bayl2soX.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/jwtPayloadParser.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__experimental_JWTPayloadToAuthObjectProperties",
    ()=>__experimental_JWTPayloadToAuthObjectProperties,
    "parsePermissions",
    ()=>parsePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$Bayl2soX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-Bayl2soX.mjs [app-route] (ecmascript)");
;
//#region src/jwtPayloadParser.ts
const parsePermissions = ({ per, fpm })=>{
    if (!per || !fpm) return {
        permissions: [],
        featurePermissionMap: []
    };
    const permissions = per.split(",").map((p)=>p.trim());
    return {
        permissions,
        featurePermissionMap: fpm.split(",").map((permission)=>Number.parseInt(permission.trim(), 10)).map((permission)=>permission.toString(2).padStart(permissions.length, "0").split("").map((bit)=>Number.parseInt(bit, 10)).reverse()).filter(Boolean)
    };
};
/**
*
*/ function buildOrgPermissions({ features, permissions, featurePermissionMap }) {
    if (!features || !permissions || !featurePermissionMap) return [];
    const orgPermissions = [];
    for(let featureIndex = 0; featureIndex < features.length; featureIndex++){
        const feature = features[featureIndex];
        if (featureIndex >= featurePermissionMap.length) continue;
        const permissionBits = featurePermissionMap[featureIndex];
        if (!permissionBits) continue;
        for(let permIndex = 0; permIndex < permissionBits.length; permIndex++)if (permissionBits[permIndex] === 1) orgPermissions.push(`org:${feature}:${permissions[permIndex]}`);
    }
    return orgPermissions;
}
/**
* Resolves the signed-in auth state from JWT claims.
*
* @experimental
*/ const __experimental_JWTPayloadToAuthObjectProperties = (claims)=>{
    let orgId;
    let orgRole;
    let orgSlug;
    let orgPermissions;
    const factorVerificationAge = claims.fva ?? null;
    const sessionStatus = claims.sts ?? null;
    switch(claims.v){
        case 2:
            if (claims.o) {
                orgId = claims.o?.id;
                orgSlug = claims.o?.slg;
                if (claims.o?.rol) orgRole = `org:${claims.o?.rol}`;
                const { org } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$Bayl2soX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(claims.fea);
                const { permissions, featurePermissionMap } = parsePermissions({
                    per: claims.o?.per,
                    fpm: claims.o?.fpm
                });
                orgPermissions = buildOrgPermissions({
                    features: org,
                    featurePermissionMap,
                    permissions
                });
            }
            break;
        default:
            orgId = claims.org_id;
            orgRole = claims.org_role;
            orgSlug = claims.org_slug;
            orgPermissions = claims.org_permissions;
            break;
    }
    return {
        sessionClaims: claims,
        sessionId: claims.sid,
        sessionStatus,
        actor: claims.act,
        userId: claims.sub,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        factorVerificationAge
    };
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript) <export T as parseError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$NXMTfCAv$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/error-NXMTfCAv.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/pathToRegexp-7eww5BY6.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>pathToRegexp,
    "t",
    ()=>match
]);
//#region src/compiled/path-to-regexp/index.js
function _(r) {
    for(var n = [], e = 0; e < r.length;){
        var a = r[e];
        if (a === "*" || a === "+" || a === "?") {
            n.push({
                type: "MODIFIER",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "\\") {
            n.push({
                type: "ESCAPED_CHAR",
                index: e++,
                value: r[e++]
            });
            continue;
        }
        if (a === "{") {
            n.push({
                type: "OPEN",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "}") {
            n.push({
                type: "CLOSE",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === ":") {
            for(var u = "", t = e + 1; t < r.length;){
                var c = r.charCodeAt(t);
                if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
                    u += r[t++];
                    continue;
                }
                break;
            }
            if (!u) throw new TypeError("Missing parameter name at ".concat(e));
            n.push({
                type: "NAME",
                index: e,
                value: u
            }), e = t;
            continue;
        }
        if (a === "(") {
            var o = 1, m = "", t = e + 1;
            if (r[t] === "?") throw new TypeError("Pattern cannot start with \"?\" at ".concat(t));
            for(; t < r.length;){
                if (r[t] === "\\") {
                    m += r[t++] + r[t++];
                    continue;
                }
                if (r[t] === ")") {
                    if (o--, o === 0) {
                        t++;
                        break;
                    }
                } else if (r[t] === "(" && (o++, r[t + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(t));
                m += r[t++];
            }
            if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
            if (!m) throw new TypeError("Missing pattern at ".concat(e));
            n.push({
                type: "PATTERN",
                index: e,
                value: m
            }), e = t;
            continue;
        }
        n.push({
            type: "CHAR",
            index: e,
            value: r[e++]
        });
    }
    return n.push({
        type: "END",
        index: e,
        value: ""
    }), n;
}
function F(r, n) {
    n === void 0 && (n = {});
    for(var e = _(r), a = n.prefixes, u = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m = 0, h = 0, p = "", f = function(l) {
        if (h < e.length && e[h].type === l) return e[h++].value;
    }, w = function(l) {
        var v = f(l);
        if (v !== void 0) return v;
        var E = e[h], N = E.type, S = E.index;
        throw new TypeError("Unexpected ".concat(N, " at ").concat(S, ", expected ").concat(l));
    }, d = function() {
        for(var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR");)l += v;
        return l;
    }, M = function(l) {
        for(var v = 0, E = c; v < E.length; v++){
            var N = E[v];
            if (l.indexOf(N) > -1) return !0;
        }
        return !1;
    }, A = function(l) {
        var v = o[o.length - 1], E = l || (v && typeof v == "string" ? v : "");
        if (v && !E) throw new TypeError("Must have text between two parameters, missing text after \"".concat(v.name, "\""));
        return !E || M(E) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E), ")[^").concat(s(c), "])+?");
    }; h < e.length;){
        var T = f("CHAR"), x = f("NAME"), C = f("PATTERN");
        if (x || C) {
            var g = T || "";
            u.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
                name: x || m++,
                prefix: g,
                suffix: "",
                pattern: C || A(g),
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        var i = T || f("ESCAPED_CHAR");
        if (i) {
            p += i;
            continue;
        }
        p && (o.push(p), p = "");
        if (f("OPEN")) {
            var g = d(), y = f("NAME") || "", O = f("PATTERN") || "", b = d();
            w("CLOSE"), o.push({
                name: y || (O ? m++ : ""),
                pattern: y && !O ? A(g) : O,
                prefix: g,
                suffix: b,
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        w("END");
    }
    return o;
}
function H(r, n) {
    var e = [];
    return I(P(r, e, n), e, n);
}
function I(r, n, e) {
    e === void 0 && (e = {});
    var a = e.decode, u = a === void 0 ? function(t) {
        return t;
    } : a;
    return function(t) {
        var c = r.exec(t);
        if (!c) return !1;
        for(var o = c[0], m = c.index, h = Object.create(null), p = function(w) {
            if (c[w] === void 0) return "continue";
            var d = n[w - 1];
            d.modifier === "*" || d.modifier === "+" ? h[d.name] = c[w].split(d.prefix + d.suffix).map(function(M) {
                return u(M, d);
            }) : h[d.name] = u(c[w], d);
        }, f = 1; f < c.length; f++)p(f);
        return {
            path: o,
            index: m,
            params: h
        };
    };
}
function s(r) {
    return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function D(r) {
    return r && r.sensitive ? "" : "i";
}
function $(r, n) {
    if (!n) return r;
    for(var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = e.exec(r.source); u;)n.push({
        name: u[1] || a++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
    }), u = e.exec(r.source);
    return r;
}
function W(r, n, e) {
    var a = r.map(function(u) {
        return P(u, n, e).source;
    });
    return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
function L(r, n, e) {
    return U(F(r, e), n, e);
}
function U(r, n, e) {
    e === void 0 && (e = {});
    for(var a = e.strict, u = a === void 0 ? !1 : a, t = e.start, c = t === void 0 ? !0 : t, o = e.end, m = o === void 0 ? !0 : o, h = e.encode, p = h === void 0 ? function(v) {
        return v;
    } : h, f = e.delimiter, w = f === void 0 ? "/#?" : f, d = e.endsWith, M = d === void 0 ? "" : d, A = "[".concat(s(M), "]|$"), T = "[".concat(s(w), "]"), x = c ? "^" : "", C = 0, g = r; C < g.length; C++){
        var i = g[C];
        if (typeof i == "string") x += s(p(i));
        else {
            var R = s(p(i.prefix)), y = s(p(i.suffix));
            if (i.pattern) if (n && n.push(i), R || y) if (i.modifier === "+" || i.modifier === "*") {
                var O = i.modifier === "*" ? "?" : "";
                x += "(?:".concat(R, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
            } else x += "(?:".concat(R, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
            else {
                if (i.modifier === "+" || i.modifier === "*") throw new TypeError("Can not repeat \"".concat(i.name, "\" without a prefix and suffix"));
                x += "(".concat(i.pattern, ")").concat(i.modifier);
            }
            else x += "(?:".concat(R).concat(y, ")").concat(i.modifier);
        }
    }
    if (m) u || (x += "".concat(T, "?")), x += e.endsWith ? "(?=".concat(A, ")") : "$";
    else {
        var b = r[r.length - 1], l = typeof b == "string" ? T.indexOf(b[b.length - 1]) > -1 : b === void 0;
        u || (x += "(?:".concat(T, "(?=").concat(A, "))?")), l || (x += "(?=".concat(T, "|").concat(A, ")"));
    }
    return new RegExp(x, D(e));
}
function P(r, n, e) {
    return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
//#endregion
//#region src/pathToRegexp.ts
const pathToRegexp = (path)=>{
    try {
        return P(path);
    } catch (e) {
        throw new Error(`Invalid path: ${path}.\nConsult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x\n${e.message}`);
    }
};
/**
*
*/ function match(str, options) {
    try {
        return H(str, options);
    } catch (e) {
        throw new Error(`Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x\n${e.message}`);
    }
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/pathToRegexp.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$pathToRegexp$2d$7eww5BY6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/pathToRegexp-7eww5BY6.mjs [app-route] (ecmascript)");
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/pathToRegexp-7eww5BY6.mjs [app-route] (ecmascript) <export t as match>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$pathToRegexp$2d$7eww5BY6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$pathToRegexp$2d$7eww5BY6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/pathToRegexp-7eww5BY6.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>reverificationError,
    "r",
    ()=>reverificationErrorResponse,
    "t",
    ()=>isReverificationHint
]);
//#region src/authorization-errors.ts
const REVERIFICATION_REASON = "reverification-error";
const reverificationError = (missingConfig)=>({
        clerk_error: {
            type: "forbidden",
            reason: REVERIFICATION_REASON,
            metadata: {
                reverification: missingConfig
            }
        }
    });
const reverificationErrorResponse = (...args)=>new Response(JSON.stringify(reverificationError(...args)), {
        status: 403
    });
const isReverificationHint = (result)=>{
    return result && typeof result === "object" && "clerk_error" in result && result.clerk_error?.type === "forbidden" && result.clerk_error?.reason === REVERIFICATION_REASON;
};
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CBHAr6Ld$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript)");
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript) <export n as reverificationError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverificationError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CBHAr6Ld$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CBHAr6Ld$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript) <export r as reverificationErrorResponse>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverificationErrorResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CBHAr6Ld$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CBHAr6Ld$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/authorization-errors-CBHAr6Ld.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/underscore-ClYSgvuy.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isIPV4Address,
    "c",
    ()=>titleize,
    "i",
    ()=>getNonUndefinedValues,
    "l",
    ()=>toSentence,
    "n",
    ()=>deepCamelToSnake,
    "o",
    ()=>isTruthy,
    "r",
    ()=>deepSnakeToCamel,
    "s",
    ()=>snakeToCamel,
    "t",
    ()=>camelToSnake
]);
//#region src/underscore.ts
/**
* Convert words to a sentence.
*
* @param items - An array of words to be joined.
* @returns A string with the items joined by a comma and the last item joined by ", or".
*/ const toSentence = (items)=>{
    if (items.length == 0) return "";
    if (items.length == 1) return items[0];
    let sentence = items.slice(0, -1).join(", ");
    sentence += `, or ${items.slice(-1)}`;
    return sentence;
};
const IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
* Checks if a string is a valid IPv4 address.
*
* @returns True if the string is a valid IPv4 address, false otherwise.
*/ function isIPV4Address(str) {
    return IP_V4_ADDRESS_REGEX.test(str || "");
}
/**
* Converts the first character of a string to uppercase.
*
* @param str - The string to be converted.
* @returns The modified string with the rest of the string unchanged.
*
* @example
* ```ts
* titleize('hello world') // 'Hello world'
* ```
*/ function titleize(str) {
    const s = str || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
* Converts a string from snake_case to camelCase.
*/ function snakeToCamel(str) {
    return str ? str.replace(/([-_][a-z])/g, (match)=>match.toUpperCase().replace(/-|_/, "")) : "";
}
/**
* Converts a string from camelCase to snake_case.
*/ function camelToSnake(str) {
    return str ? str.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`) : "";
}
const createDeepObjectTransformer = (transform)=>{
    const deepTransform = (obj)=>{
        if (!obj) return obj;
        if (Array.isArray(obj)) return obj.map((el)=>{
            if (typeof el === "object" || Array.isArray(el)) return deepTransform(el);
            return el;
        });
        const copy = {
            ...obj
        };
        const keys = Object.keys(copy);
        for (const oldName of keys){
            const newName = transform(oldName.toString());
            if (newName !== oldName) {
                copy[newName] = copy[oldName];
                delete copy[oldName];
            }
            if (typeof copy[newName] === "object") copy[newName] = deepTransform(copy[newName]);
        }
        return copy;
    };
    return deepTransform;
};
/**
* Transforms camelCased objects/ arrays to snake_cased.
* This function recursively traverses all objects and arrays of the passed value
* camelCased keys are removed.
*
* @function
*/ const deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
/**
* Transforms snake_cased objects/ arrays to camelCased.
* This function recursively traverses all objects and arrays of the passed value
* camelCased keys are removed.
*
* @function
*/ const deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
/**
* A function to determine if a value is truthy.
*
* @returns True for `true`, true, positive numbers. False for `false`, false, 0, negative integers and anything else.
*/ function isTruthy(value) {
    if (typeof value === `boolean`) return value;
    if (value === void 0 || value === null) return false;
    if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) return true;
        if (value.toLowerCase() === `false`) return false;
    }
    const number = parseInt(value, 10);
    if (isNaN(number)) return false;
    if (number > 0) return true;
    return false;
}
/**
* Get all non-undefined values from an object.
*/ function getNonUndefinedValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0) acc[key] = value;
        return acc;
    }, {});
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/telemetry-ZzMitk4y.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>eventMethodCalled,
    "c",
    ()=>eventPrebuiltComponentOpened,
    "i",
    ()=>eventFrameworkMetadata,
    "l",
    ()=>TelemetryCollector,
    "n",
    ()=>EVENT_THEME_USAGE,
    "o",
    ()=>eventComponentMounted,
    "r",
    ()=>eventThemeUsage,
    "s",
    ()=>eventPrebuiltComponentMounted,
    "t",
    ()=>EVENT_SAMPLING_RATE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$ClYSgvuy$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/underscore-ClYSgvuy.mjs [app-route] (ecmascript)");
;
;
//#region src/telemetry/throttler.ts
const DEFAULT_CACHE_TTL_MS = 864e5;
/**
* Manages throttling for telemetry events using a configurable cache implementation
* to mitigate event flooding in frequently executed code paths.
*/ var TelemetryEventThrottler = class {
    #cache;
    #cacheTtl = DEFAULT_CACHE_TTL_MS;
    constructor(cache){
        this.#cache = cache;
    }
    isEventThrottled(payload) {
        const now = Date.now();
        const key = this.#generateKey(payload);
        const entry = this.#cache.getItem(key);
        if (!entry) {
            this.#cache.setItem(key, now);
            return false;
        }
        if (now - entry > this.#cacheTtl) {
            this.#cache.setItem(key, now);
            return false;
        }
        return true;
    }
    /**
	* Generates a consistent unique key for telemetry events by sorting payload properties.
	* This ensures that payloads with identical content in different orders produce the same key.
	*/ #generateKey(event) {
        const { sk: _sk, pk: _pk, payload, ...rest } = event;
        const sanitizedEvent = {
            ...payload,
            ...rest
        };
        return JSON.stringify(Object.keys({
            ...payload,
            ...rest
        }).sort().map((key)=>sanitizedEvent[key]));
    }
};
/**
* LocalStorage-based cache implementation for browser environments.
*/ var LocalStorageThrottlerCache = class {
    #storageKey = "clerk_telemetry_throttler";
    getItem(key) {
        return this.#getCache()[key];
    }
    setItem(key, value) {
        try {
            const cache = this.#getCache();
            cache[key] = value;
            localStorage.setItem(this.#storageKey, JSON.stringify(cache));
        } catch (err) {
            if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED") && localStorage.length > 0) localStorage.removeItem(this.#storageKey);
        }
    }
    removeItem(key) {
        try {
            const cache = this.#getCache();
            delete cache[key];
            localStorage.setItem(this.#storageKey, JSON.stringify(cache));
        } catch  {}
    }
    #getCache() {
        try {
            const cacheString = localStorage.getItem(this.#storageKey);
            if (!cacheString) return {};
            return JSON.parse(cacheString);
        } catch  {
            return {};
        }
    }
    static isSupported() {
        return ("TURBOPACK compile-time value", "undefined") !== "undefined" && !!window.localStorage;
    }
};
/**
* In-memory cache implementation for non-browser environments (e.g., React Native).
*/ var InMemoryThrottlerCache = class {
    #cache = /* @__PURE__ */ new Map();
    #maxSize = 1e4;
    getItem(key) {
        if (this.#cache.size > this.#maxSize) {
            this.#cache.clear();
            return;
        }
        return this.#cache.get(key);
    }
    setItem(key, value) {
        this.#cache.set(key, value);
    }
    removeItem(key) {
        this.#cache.delete(key);
    }
};
//#endregion
//#region src/telemetry/collector.ts
/**
* The `TelemetryCollector` class handles collection of telemetry events from Clerk SDKs. Telemetry is opt-out and can be disabled by setting a CLERK_TELEMETRY_DISABLED environment variable.
* The `ClerkProvider` also accepts a `telemetry` prop that will be passed to the collector during initialization:.
*
* ```jsx
* <ClerkProvider telemetry={false}>
*    ...
* </ClerkProvider>
* ```
*
* For more information, please see the telemetry documentation page: https://clerk.com/docs/telemetry.
*/ /**
* Type guard to check if window.Clerk exists and has the expected structure.
*/ function isWindowClerkWithMetadata(clerk) {
    return typeof clerk === "object" && clerk !== null && "constructor" in clerk && typeof clerk.constructor === "function";
}
const VALID_LOG_LEVELS = new Set([
    "error",
    "warn",
    "info",
    "debug",
    "trace"
]);
const DEFAULT_CONFIG = {
    samplingRate: 1,
    maxBufferSize: 5,
    endpoint: "https://clerk-telemetry.com"
};
var TelemetryCollector = class {
    #config;
    #eventThrottler;
    #metadata = {};
    #buffer = [];
    #pendingFlush = null;
    constructor(options){
        this.#config = {
            maxBufferSize: options.maxBufferSize ?? DEFAULT_CONFIG.maxBufferSize,
            samplingRate: options.samplingRate ?? DEFAULT_CONFIG.samplingRate,
            perEventSampling: options.perEventSampling ?? true,
            disabled: options.disabled ?? false,
            debug: options.debug ?? false,
            endpoint: DEFAULT_CONFIG.endpoint
        };
        if (!options.clerkVersion && ("TURBOPACK compile-time value", "undefined") === "undefined") this.#metadata.clerkVersion = "";
        else this.#metadata.clerkVersion = options.clerkVersion ?? "";
        this.#metadata.sdk = options.sdk;
        this.#metadata.sdkVersion = options.sdkVersion;
        this.#metadata.publishableKey = options.publishableKey ?? "";
        const parsedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(options.publishableKey);
        if (parsedKey) this.#metadata.instanceType = parsedKey.instanceType;
        if (options.secretKey) this.#metadata.secretKey = options.secretKey.substring(0, 16);
        this.#eventThrottler = new TelemetryEventThrottler(LocalStorageThrottlerCache.isSupported() ? new LocalStorageThrottlerCache() : new InMemoryThrottlerCache());
    }
    get isEnabled() {
        if (this.#metadata.instanceType !== "development") return false;
        if (this.#config.disabled || typeof process !== "undefined" && process.env && (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$ClYSgvuy$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(process.env.CLERK_TELEMETRY_DISABLED)) return false;
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !!window?.navigator?.webdriver) //TURBOPACK unreachable
        ;
        return true;
    }
    get isDebug() {
        return this.#config.debug || typeof process !== "undefined" && process.env && (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$ClYSgvuy$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(process.env.CLERK_TELEMETRY_DEBUG);
    }
    record(event) {
        try {
            const preparedPayload = this.#preparePayload(event.event, event.payload);
            this.#logEvent(preparedPayload.event, preparedPayload);
            if (!this.#shouldRecord(preparedPayload, event.eventSamplingRate)) return;
            this.#buffer.push({
                kind: "event",
                value: preparedPayload
            });
            this.#scheduleFlush();
        } catch (error) {
            console.error("[clerk/telemetry] Error recording telemetry event", error);
        }
    }
    /**
	* Records a telemetry log entry if logging is enabled and not in debug mode.
	*
	* @param entry - The telemetry log entry to record.
	*/ recordLog(entry) {
        try {
            if (!this.#shouldRecordLog(entry)) return;
            const levelIsValid = typeof entry?.level === "string" && VALID_LOG_LEVELS.has(entry.level);
            const messageIsValid = typeof entry?.message === "string" && entry.message.trim().length > 0;
            let normalizedTimestamp = null;
            const timestampInput = entry?.timestamp;
            if (typeof timestampInput === "number" || typeof timestampInput === "string") {
                const candidate = new Date(timestampInput);
                if (!Number.isNaN(candidate.getTime())) normalizedTimestamp = candidate;
            }
            if (!levelIsValid || !messageIsValid || normalizedTimestamp === null) {
                if (this.isDebug && typeof console !== "undefined") console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
                    levelIsValid,
                    messageIsValid,
                    timestampIsValid: normalizedTimestamp !== null
                });
                return;
            }
            const sdkMetadata = this.#getSDKMetadata();
            const logData = {
                sdk: sdkMetadata.name,
                sdkv: sdkMetadata.version,
                cv: this.#metadata.clerkVersion ?? "",
                lvl: entry.level,
                msg: entry.message,
                ts: normalizedTimestamp.toISOString(),
                pk: this.#metadata.publishableKey || null,
                payload: this.#sanitizeContext(entry.context)
            };
            this.#buffer.push({
                kind: "log",
                value: logData
            });
            this.#scheduleFlush();
        } catch (error) {
            console.error("[clerk/telemetry] Error recording telemetry log entry", error);
        }
    }
    #shouldRecord(preparedPayload, eventSamplingRate) {
        return this.isEnabled && !this.isDebug && this.#shouldBeSampled(preparedPayload, eventSamplingRate);
    }
    #shouldRecordLog(_entry) {
        return true;
    }
    #shouldBeSampled(preparedPayload, eventSamplingRate) {
        const randomSeed = Math.random();
        if (!(randomSeed <= this.#config.samplingRate && (this.#config.perEventSampling === false || typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate))) return false;
        return !this.#eventThrottler.isEventThrottled(preparedPayload);
    }
    #scheduleFlush() {
        if ("TURBOPACK compile-time truthy", 1) {
            this.#flush();
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    #flush() {
        const itemsToSend = [
            ...this.#buffer
        ];
        this.#buffer = [];
        this.#pendingFlush = null;
        if (itemsToSend.length === 0) return;
        const eventsToSend = itemsToSend.filter((item)=>item.kind === "event").map((item)=>item.value);
        const logsToSend = itemsToSend.filter((item)=>item.kind === "log").map((item)=>item.value);
        if (eventsToSend.length > 0) {
            const eventsUrl = new URL("/v1/event", this.#config.endpoint);
            fetch(eventsUrl, {
                headers: {
                    "Content-Type": "application/json"
                },
                keepalive: true,
                method: "POST",
                body: JSON.stringify({
                    events: eventsToSend
                })
            }).catch(()=>void 0);
        }
        if (logsToSend.length > 0) {
            const logsUrl = new URL("/v1/logs", this.#config.endpoint);
            fetch(logsUrl, {
                headers: {
                    "Content-Type": "application/json"
                },
                keepalive: true,
                method: "POST",
                body: JSON.stringify({
                    logs: logsToSend
                })
            }).catch(()=>void 0);
        }
    }
    /**
	* If running in debug mode, log the event and its payload to the console.
	*/ #logEvent(event, payload) {
        if (!this.isDebug) return;
        if (typeof console.groupCollapsed !== "undefined") {
            console.groupCollapsed("[clerk/telemetry]", event);
            console.log(payload);
            console.groupEnd();
        } else console.log("[clerk/telemetry]", event, payload);
    }
    /**
	* If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
	*
	* This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
	*/ #getSDKMetadata() {
        const sdkMetadata = {
            name: this.#metadata.sdk,
            version: this.#metadata.sdkVersion
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return sdkMetadata;
    }
    /**
	* Append relevant metadata from the Clerk singleton to the event payload.
	*/ #preparePayload(event, payload) {
        const sdkMetadata = this.#getSDKMetadata();
        return {
            event,
            cv: this.#metadata.clerkVersion ?? "",
            it: this.#metadata.instanceType ?? "",
            sdk: sdkMetadata.name,
            sdkv: sdkMetadata.version,
            ...this.#metadata.publishableKey ? {
                pk: this.#metadata.publishableKey
            } : {},
            ...this.#metadata.secretKey ? {
                sk: this.#metadata.secretKey
            } : {},
            payload
        };
    }
    /**
	* Best-effort sanitization of the context payload. Returns a plain object with JSON-serializable
	* values or null when the input is missing or not serializable. Arrays are not accepted.
	*/ #sanitizeContext(context) {
        if (context === null || typeof context === "undefined") return null;
        if (typeof context !== "object") return null;
        try {
            const cleaned = JSON.parse(JSON.stringify(context));
            if (cleaned && typeof cleaned === "object" && !Array.isArray(cleaned)) return cleaned;
            return null;
        } catch  {
            return null;
        }
    }
};
//#endregion
//#region src/telemetry/events/component-mounted.ts
const EVENT_COMPONENT_MOUNTED = "COMPONENT_MOUNTED";
const EVENT_COMPONENT_OPENED = "COMPONENT_OPENED";
const EVENT_SAMPLING_RATE$3 = .1;
/** Increase sampling for high-signal auth components on mount. */ const AUTH_COMPONENTS = new Set([
    "SignIn",
    "SignUp"
]);
/**
* Returns the per-event sampling rate for component-mounted telemetry events.
* Uses a higher rate for SignIn/SignUp to improve signal quality.
*
*  @internal
*/ function getComponentMountedSamplingRate(component) {
    return AUTH_COMPONENTS.has(component) ? 1 : EVENT_SAMPLING_RATE$3;
}
/**
* Factory for prebuilt component telemetry events.
*
* @internal
*/ function createPrebuiltComponentEvent(event) {
    return function(component, props, additionalPayload) {
        return {
            event,
            eventSamplingRate: event === EVENT_COMPONENT_MOUNTED ? getComponentMountedSamplingRate(component) : EVENT_SAMPLING_RATE$3,
            payload: {
                component,
                appearanceProp: Boolean(props?.appearance),
                theme: Boolean(props?.appearance?.theme),
                elements: Boolean(props?.appearance?.elements),
                variables: Boolean(props?.appearance?.variables),
                ...additionalPayload
            }
        };
    };
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a prebuilt (AIO) component is mounted.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Will be filtered to a known list of props.
* @param additionalPayload - Additional data to send with the event.
* @example
* telemetry.record(eventPrebuiltComponentMounted('SignUp', props));
*/ function eventPrebuiltComponentMounted(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_MOUNTED)(component, props, additionalPayload);
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a prebuilt (AIO) component is opened as a modal.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Will be filtered to a known list of props.
* @param additionalPayload - Additional data to send with the event.
* @example
* telemetry.record(eventPrebuiltComponentOpened('GoogleOneTap', props));
*/ function eventPrebuiltComponentOpened(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_OPENED)(component, props, additionalPayload);
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a component is mounted. Use `eventPrebuiltComponentMounted` for prebuilt components.
*
* **Caution:** Filter the `props` you pass to this function to avoid sending too much data.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Ideally you only pass a handful of props here.
* @example
* telemetry.record(eventComponentMounted('SignUp', props));
*/ function eventComponentMounted(component, props = {}) {
    return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: getComponentMountedSamplingRate(component),
        payload: {
            component,
            ...props
        }
    };
}
//#endregion
//#region src/telemetry/events/method-called.ts
const EVENT_METHOD_CALLED = "METHOD_CALLED";
const EVENT_SAMPLING_RATE$2 = .1;
/**
* Fired when a helper method is called from a Clerk SDK.
*/ function eventMethodCalled(method, payload) {
    return {
        event: EVENT_METHOD_CALLED,
        eventSamplingRate: EVENT_SAMPLING_RATE$2,
        payload: {
            method,
            ...payload
        }
    };
}
//#endregion
//#region src/telemetry/events/framework-metadata.ts
const EVENT_FRAMEWORK_METADATA = "FRAMEWORK_METADATA";
const EVENT_SAMPLING_RATE$1 = .1;
/**
* Fired when a helper method is called from a Clerk SDK.
*/ function eventFrameworkMetadata(payload) {
    return {
        event: EVENT_FRAMEWORK_METADATA,
        eventSamplingRate: EVENT_SAMPLING_RATE$1,
        payload
    };
}
//#endregion
//#region src/telemetry/events/theme-usage.ts
const EVENT_THEME_USAGE = "THEME_USAGE";
const EVENT_SAMPLING_RATE = 1;
/**
* Helper function for `telemetry.record()`. Create a consistent event object for tracking theme usage in ClerkProvider.
*
* @param appearance - The appearance prop from ClerkProvider.
* @example
* telemetry.record(eventThemeUsage(appearance));
*/ function eventThemeUsage(appearance) {
    return {
        event: EVENT_THEME_USAGE,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: analyzeThemeUsage(appearance)
    };
}
/**
* Analyzes the appearance prop to extract theme usage information for telemetry.
*
* @internal
*/ function analyzeThemeUsage(appearance) {
    if (!appearance || typeof appearance !== "object") return {};
    const themeProperty = appearance.theme;
    if (!themeProperty) return {};
    let themeName;
    if (Array.isArray(themeProperty)) for (const theme of themeProperty){
        const name = extractThemeName(theme);
        if (name) {
            themeName = name;
            break;
        }
    }
    else themeName = extractThemeName(themeProperty);
    return {
        themeName
    };
}
/**
* Extracts the theme name from a theme object.
*
* @internal
*/ function extractThemeName(theme) {
    if (typeof theme === "string") return theme;
    if (typeof theme === "object" && theme !== null) {
        if ("name" in theme && typeof theme.name === "string") return theme.name;
    }
}
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/telemetry.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$ChIG_Ewf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/keys-ChIG_Ewf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$ClYSgvuy$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/underscore-ClYSgvuy.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$ZzMitk4y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/telemetry-ZzMitk4y.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/telemetry-ZzMitk4y.mjs [app-route] (ecmascript) <export l as TelemetryCollector>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelemetryCollector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$ZzMitk4y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$ZzMitk4y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/shared/dist/runtime/telemetry-ZzMitk4y.mjs [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/sql-escaper/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Adapted from https://github.com/mysqljs/sqlstring/blob/cd528556b4b6bcf300c3db515026935dedf7cfa1/lib/SqlString.js
 * MIT LICENSE: https://github.com/mysqljs/sqlstring/blob/cd528556b4b6bcf300c3db515026935dedf7cfa1/LICENSE
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raw = exports.format = exports.escape = exports.arrayToList = exports.bufferToString = exports.objectToValues = exports.escapeId = exports.dateToString = void 0;
const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const regex = {
    backtick: /`/g,
    dot: /\./g,
    timezone: /([+\-\s])(\d\d):?(\d\d)?/,
    escapeChars: /[\0\b\t\n\r\x1a"'\\]/g
};
const CHARS_ESCAPE_MAP = {
    '\0': '\\0',
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\r': '\\r',
    '\x1a': '\\Z',
    '"': '\\"',
    "'": "\\'",
    '\\': '\\\\'
};
const charCode = {
    singleQuote: 39,
    backtick: 96,
    backslash: 92,
    dash: 45,
    slash: 47,
    asterisk: 42,
    questionMark: 63,
    newline: 10,
    space: 32,
    tab: 9,
    carriageReturn: 13
};
const isRecord = (value)=>typeof value === 'object' && value !== null && !Array.isArray(value);
const isWordChar = (code)=>code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 48 && code <= 57 || code === 95;
const isWhitespace = (code)=>code === charCode.space || code === charCode.tab || code === charCode.newline || code === charCode.carriageReturn;
const hasOnlyWhitespaceBetween = (sql, start, end)=>{
    if (start >= end) return true;
    for(let i = start; i < end; i++){
        const code = sql.charCodeAt(i);
        if (code !== charCode.space && code !== charCode.tab && code !== charCode.newline && code !== charCode.carriageReturn) return false;
    }
    return true;
};
const toLower = (code)=>code | 32;
const matchesWord = (sql, position, word, length)=>{
    for(let offset = 0; offset < word.length; offset++)if (toLower(sql.charCodeAt(position + offset)) !== word.charCodeAt(offset)) return false;
    return (position === 0 || !isWordChar(sql.charCodeAt(position - 1))) && (position + word.length >= length || !isWordChar(sql.charCodeAt(position + word.length)));
};
const skipSqlContext = (sql, position)=>{
    const currentChar = sql.charCodeAt(position);
    const nextChar = sql.charCodeAt(position + 1);
    if (currentChar === charCode.singleQuote) {
        for(let cursor = position + 1; cursor < sql.length; cursor++){
            if (sql.charCodeAt(cursor) === charCode.backslash) cursor++;
            else if (sql.charCodeAt(cursor) === charCode.singleQuote) return cursor + 1;
        }
        return sql.length;
    }
    if (currentChar === charCode.backtick) {
        const length = sql.length;
        for(let cursor = position + 1; cursor < length; cursor++){
            if (sql.charCodeAt(cursor) !== charCode.backtick) continue;
            if (sql.charCodeAt(cursor + 1) === charCode.backtick) {
                cursor++;
                continue;
            }
            return cursor + 1;
        }
        return length;
    }
    if (currentChar === charCode.dash && nextChar === charCode.dash) {
        const lineBreak = sql.indexOf('\n', position + 2);
        return lineBreak === -1 ? sql.length : lineBreak + 1;
    }
    if (currentChar === charCode.slash && nextChar === charCode.asterisk) {
        const commentEnd = sql.indexOf('*/', position + 2);
        return commentEnd === -1 ? sql.length : commentEnd + 2;
    }
    return -1;
};
const findNextPlaceholder = (sql, start)=>{
    const sqlLength = sql.length;
    for(let position = start; position < sqlLength; position++){
        const code = sql.charCodeAt(position);
        if (code === charCode.questionMark) return position;
        if (code === charCode.singleQuote || code === charCode.backtick || code === charCode.dash || code === charCode.slash) {
            const contextEnd = skipSqlContext(sql, position);
            if (contextEnd !== -1) position = contextEnd - 1;
        }
    }
    return -1;
};
const findSetKeyword = (sql, startFrom = 0)=>{
    const length = sql.length;
    for(let position = startFrom; position < length; position++){
        const code = sql.charCodeAt(position);
        const lower = code | 32;
        if (code === charCode.singleQuote || code === charCode.backtick || code === charCode.dash || code === charCode.slash) {
            const contextEnd = skipSqlContext(sql, position);
            if (contextEnd !== -1) {
                position = contextEnd - 1;
                continue;
            }
        }
        if (lower === 115 && matchesWord(sql, position, 'set', length)) return position + 3;
        if (lower === 107 && matchesWord(sql, position, 'key', length)) {
            let cursor = position + 3;
            while(cursor < length && isWhitespace(sql.charCodeAt(cursor)))cursor++;
            if (matchesWord(sql, cursor, 'update', length)) return cursor + 6;
        }
    }
    return -1;
};
const isDate = (value)=>Object.prototype.toString.call(value) === '[object Date]';
const hasSqlString = (value)=>typeof value === 'object' && value !== null && 'toSqlString' in value && typeof value.toSqlString === 'function';
const escapeString = (value)=>{
    regex.escapeChars.lastIndex = 0;
    let chunkIndex = 0;
    let escapedValue = '';
    let match;
    for(match = regex.escapeChars.exec(value); match !== null; match = regex.escapeChars.exec(value)){
        escapedValue += value.slice(chunkIndex, match.index);
        escapedValue += CHARS_ESCAPE_MAP[match[0]];
        chunkIndex = regex.escapeChars.lastIndex;
    }
    if (chunkIndex === 0) return `'${value}'`;
    if (chunkIndex < value.length) return `'${escapedValue}${value.slice(chunkIndex)}'`;
    return `'${escapedValue}'`;
};
const pad2 = (value)=>value < 10 ? '0' + value : '' + value;
const pad3 = (value)=>value < 10 ? '00' + value : value < 100 ? '0' + value : '' + value;
const pad4 = (value)=>value < 10 ? '000' + value : value < 100 ? '00' + value : value < 1000 ? '0' + value : '' + value;
const convertTimezone = (tz)=>{
    if (tz === 'Z') return 0;
    const timezoneMatch = tz.match(regex.timezone);
    if (timezoneMatch) return (timezoneMatch[1] === '-' ? -1 : 1) * (Number.parseInt(timezoneMatch[2], 10) + (timezoneMatch[3] ? Number.parseInt(timezoneMatch[3], 10) : 0) / 60) * 60;
    return false;
};
const dateToString = (date, timezone)=>{
    if (Number.isNaN(date.getTime())) return 'NULL';
    let year;
    let month;
    let day;
    let hour;
    let minute;
    let second;
    let millisecond;
    if (timezone === 'local') {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        hour = date.getHours();
        minute = date.getMinutes();
        second = date.getSeconds();
        millisecond = date.getMilliseconds();
    } else {
        const timezoneOffsetMinutes = convertTimezone(timezone);
        let time = date.getTime();
        if (timezoneOffsetMinutes !== false && timezoneOffsetMinutes !== 0) time += timezoneOffsetMinutes * 60000;
        const adjustedDate = new Date(time);
        year = adjustedDate.getUTCFullYear();
        month = adjustedDate.getUTCMonth() + 1;
        day = adjustedDate.getUTCDate();
        hour = adjustedDate.getUTCHours();
        minute = adjustedDate.getUTCMinutes();
        second = adjustedDate.getUTCSeconds();
        millisecond = adjustedDate.getUTCMilliseconds();
    }
    // YYYY-MM-DD HH:mm:ss.mmm
    return escapeString(pad4(year) + '-' + pad2(month) + '-' + pad2(day) + ' ' + pad2(hour) + ':' + pad2(minute) + ':' + pad2(second) + '.' + pad3(millisecond));
};
exports.dateToString = dateToString;
const escapeId = (value, forbidQualified)=>{
    if (Array.isArray(value)) {
        const length = value.length;
        const parts = new Array(length);
        for(let i = 0; i < length; i++)parts[i] = (0, exports.escapeId)(value[i], forbidQualified);
        return parts.join(', ');
    }
    const identifier = String(value);
    const hasJsonOperator = identifier.indexOf('->') !== -1;
    if (forbidQualified || hasJsonOperator) {
        if (identifier.indexOf('`') === -1) return `\`${identifier}\``;
        return `\`${identifier.replace(regex.backtick, '``')}\``;
    }
    if (identifier.indexOf('`') === -1 && identifier.indexOf('.') === -1) return `\`${identifier}\``;
    return `\`${identifier.replace(regex.backtick, '``').replace(regex.dot, '`.`')}\``;
};
exports.escapeId = escapeId;
const objectToValues = (object, timezone)=>{
    const keys = Object.keys(object);
    const keysLength = keys.length;
    if (keysLength === 0) return '';
    let sql = '';
    for(let i = 0; i < keysLength; i++){
        const key = keys[i];
        const value = object[key];
        if (typeof value === 'function') continue;
        if (sql.length > 0) sql += ', ';
        sql += (0, exports.escapeId)(key);
        sql += ' = ';
        sql += (0, exports.escape)(value, true, timezone);
    }
    return sql;
};
exports.objectToValues = objectToValues;
const bufferToString = (buffer)=>`X${escapeString(buffer.toString('hex'))}`;
exports.bufferToString = bufferToString;
const arrayToList = (array, timezone)=>{
    const length = array.length;
    const parts = new Array(length);
    for(let i = 0; i < length; i++){
        const value = array[i];
        if (Array.isArray(value)) parts[i] = `(${(0, exports.arrayToList)(value, timezone)})`;
        else parts[i] = (0, exports.escape)(value, true, timezone);
    }
    return parts.join(', ');
};
exports.arrayToList = arrayToList;
const escape = (value, stringifyObjects, timezone)=>{
    if (value === undefined || value === null) return 'NULL';
    switch(typeof value){
        case 'boolean':
            return value ? 'true' : 'false';
        case 'number':
        case 'bigint':
            return value + '';
        case 'object':
            {
                if (isDate(value)) return (0, exports.dateToString)(value, timezone || 'local');
                if (Array.isArray(value)) return (0, exports.arrayToList)(value, timezone);
                if (node_buffer_1.Buffer.isBuffer(value)) return (0, exports.bufferToString)(value);
                if (value instanceof Uint8Array) return (0, exports.bufferToString)(node_buffer_1.Buffer.from(value));
                if (hasSqlString(value)) return String(value.toSqlString());
                if (!(stringifyObjects === undefined || stringifyObjects === null)) return escapeString(String(value));
                if (isRecord(value)) return (0, exports.objectToValues)(value, timezone);
                return escapeString(String(value));
            }
        case 'string':
            return escapeString(value);
        default:
            return escapeString(String(value));
    }
};
exports.escape = escape;
const format = (sql, values, stringifyObjects, timezone)=>{
    if (values === undefined || values === null) return sql;
    const valuesArray = Array.isArray(values) ? values : [
        values
    ];
    const length = valuesArray.length;
    let setIndex = -2; // -2 = not yet computed, -1 = no SET found
    let result = '';
    let chunkIndex = 0;
    let valuesIndex = 0;
    let placeholderPosition = findNextPlaceholder(sql, 0);
    while(valuesIndex < length && placeholderPosition !== -1){
        // Count consecutive question marks to detect ? vs ?? vs ???+
        let placeholderEnd = placeholderPosition + 1;
        let escapedValue;
        while(sql.charCodeAt(placeholderEnd) === 63)placeholderEnd++;
        const placeholderLength = placeholderEnd - placeholderPosition;
        const currentValue = valuesArray[valuesIndex];
        if (placeholderLength > 2) {
            placeholderPosition = findNextPlaceholder(sql, placeholderEnd);
            continue;
        }
        if (placeholderLength === 2) escapedValue = (0, exports.escapeId)(currentValue);
        else if (typeof currentValue === 'number') escapedValue = `${currentValue}`;
        else if (typeof currentValue === 'object' && currentValue !== null && !stringifyObjects) {
            // Lazy: compute SET position only when we first encounter an object
            if (setIndex === -2) setIndex = findSetKeyword(sql);
            if (setIndex !== -1 && setIndex <= placeholderPosition && hasOnlyWhitespaceBetween(sql, setIndex, placeholderPosition) && !hasSqlString(currentValue) && !Array.isArray(currentValue) && !node_buffer_1.Buffer.isBuffer(currentValue) && !(currentValue instanceof Uint8Array) && !isDate(currentValue) && isRecord(currentValue)) {
                escapedValue = (0, exports.objectToValues)(currentValue, timezone);
                setIndex = findSetKeyword(sql, placeholderEnd);
            } else escapedValue = (0, exports.escape)(currentValue, true, timezone);
        } else escapedValue = (0, exports.escape)(currentValue, stringifyObjects, timezone);
        result += sql.slice(chunkIndex, placeholderPosition);
        result += escapedValue;
        chunkIndex = placeholderEnd;
        valuesIndex++;
        placeholderPosition = findNextPlaceholder(sql, placeholderEnd);
    }
    if (chunkIndex === 0) return sql;
    if (chunkIndex < sql.length) return result + sql.slice(chunkIndex);
    return result;
};
exports.format = format;
const raw = (sql)=>{
    if (typeof sql !== 'string') throw new TypeError('argument sql must be a string');
    return {
        toSqlString: ()=>sql
    };
};
exports.raw = raw;
}),
"[project]/MCMS/MCMS/node_modules/lru.min/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createLRU = void 0;
const createLRU = (options)=>{
    let { max } = options;
    if (!(Number.isInteger(max) && max > 0)) throw new TypeError('`max` must be a positive integer');
    let size = 0;
    let head = 0;
    let tail = 0;
    let free = [];
    const { onEviction } = options;
    const keyMap = new Map();
    const keyList = new Array(max).fill(undefined);
    const valList = new Array(max).fill(undefined);
    const next = new Array(max).fill(0);
    const prev = new Array(max).fill(0);
    const linkTail = (index)=>{
        next[tail] = index;
        prev[index] = tail;
        next[index] = 0;
        tail = index;
    };
    const moveToTail = (index)=>{
        if (index === tail) return;
        const nextIndex = next[index];
        const prevIndex = prev[index];
        if (index === head) head = nextIndex;
        else next[prevIndex] = nextIndex;
        prev[nextIndex] = prevIndex;
        linkTail(index);
    };
    const _shrink = (newMax)=>{
        let current = tail;
        const preserve = Math.min(size, newMax);
        const remove = size - preserve;
        const newKeyList = new Array(preserve);
        const newValList = new Array(preserve);
        for(let i = 0; i < remove; i++){
            const key = keyList[head];
            onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[head]);
            keyMap.delete(key);
            head = next[head];
        }
        for(let i = preserve - 1; i >= 0; i--){
            newKeyList[i] = keyList[current];
            newValList[i] = valList[current];
            keyMap.set(keyList[current], i);
            current = prev[current];
        }
        head = 0;
        tail = preserve - 1;
        size = preserve;
        keyList.length = newMax;
        valList.length = newMax;
        next.length = newMax;
        prev.length = newMax;
        for(let i = 0; i < preserve; i++){
            keyList[i] = newKeyList[i];
            valList[i] = newValList[i];
            next[i] = i + 1;
            prev[i] = i - 1;
        }
        free = [];
        for(let i = preserve; i < newMax; i++)free.push(i);
    };
    const _grow = (newMax)=>{
        keyList.length = newMax;
        valList.length = newMax;
        next.length = newMax;
        prev.length = newMax;
        keyList.fill(undefined, max);
        valList.fill(undefined, max);
        next.fill(0, max);
        prev.fill(0, max);
    };
    return {
        /** Adds a key-value pair to the cache. Updates the value if the key already exists. */ set (key, value) {
            if (key === undefined) return;
            let index = keyMap.get(key);
            if (index === undefined) {
                if (size === max) {
                    index = head;
                    const evictKey = keyList[index];
                    onEviction === null || onEviction === void 0 ? void 0 : onEviction(evictKey, valList[index]);
                    keyMap.delete(evictKey);
                    head = next[index];
                    prev[head] = 0;
                } else {
                    index = free.length > 0 ? free.pop() : size;
                    size++;
                }
                keyMap.set(key, index);
                keyList[index] = key;
                valList[index] = value;
                if (size === 1) head = tail = index;
                else linkTail(index);
            } else {
                onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[index]);
                valList[index] = value;
                moveToTail(index);
            }
        },
        /** Retrieves the value for a given key and moves the key to the most recent position. */ get (key) {
            const index = keyMap.get(key);
            if (index === undefined) return;
            if (index !== tail) moveToTail(index);
            return valList[index];
        },
        /** Retrieves the value for a given key without changing its position. */ peek: (key)=>{
            const index = keyMap.get(key);
            return index !== undefined ? valList[index] : undefined;
        },
        /** Checks if a key exists in the cache. */ has: (key)=>keyMap.has(key),
        /** Iterates over all keys in the cache, from most recent to least recent. */ *keys () {
            let current = tail;
            for(let i = 0; i < size; i++){
                yield keyList[current];
                current = prev[current];
            }
        },
        /** Iterates over all values in the cache, from most recent to least recent. */ *values () {
            let current = tail;
            for(let i = 0; i < size; i++){
                yield valList[current];
                current = prev[current];
            }
        },
        /** Iterates over `[key, value]` pairs in the cache, from most recent to least recent. */ *entries () {
            let current = tail;
            for(let i = 0; i < size; i++){
                yield [
                    keyList[current],
                    valList[current]
                ];
                current = prev[current];
            }
        },
        /** Iterates over each value-key pair in the cache, from most recent to least recent. */ forEach: (callback)=>{
            let current = tail;
            for(let i = 0; i < size; i++){
                const key = keyList[current];
                const value = valList[current];
                callback(value, key);
                current = prev[current];
            }
        },
        /** Deletes a key-value pair from the cache. */ delete (key) {
            const index = keyMap.get(key);
            if (index === undefined) return false;
            onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[index]);
            keyMap.delete(key);
            free.push(index);
            keyList[index] = undefined;
            valList[index] = undefined;
            const prevIndex = prev[index];
            const nextIndex = next[index];
            if (index === head) head = nextIndex;
            else next[prevIndex] = nextIndex;
            if (index === tail) tail = prevIndex;
            else prev[nextIndex] = prevIndex;
            size--;
            return true;
        },
        /** Evicts the oldest item or the specified number of the oldest items from the cache. */ evict: (number)=>{
            let toPrune = Math.min(number, size);
            while(toPrune > 0){
                const evictHead = head;
                const key = keyList[evictHead];
                onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[evictHead]);
                keyMap.delete(key);
                keyList[evictHead] = undefined;
                valList[evictHead] = undefined;
                head = next[evictHead];
                prev[head] = 0;
                size--;
                free.push(evictHead);
                toPrune--;
            }
            if (size === 0) head = tail = 0;
        },
        /** Clears all key-value pairs from the cache. */ clear () {
            if (onEviction) {
                let current = head;
                for(let i = 0; i < size; i++){
                    onEviction(keyList[current], valList[current]);
                    current = next[current];
                }
            }
            keyMap.clear();
            keyList.fill(undefined);
            valList.fill(undefined);
            free = [];
            size = 0;
            head = tail = 0;
        },
        /** Resizes the cache to a new maximum size, evicting items if necessary. */ resize: (newMax)=>{
            if (!(Number.isInteger(newMax) && newMax > 0)) throw new TypeError('`max` must be a positive integer');
            if (newMax === max) return;
            if (newMax < max) _shrink(newMax);
            else _grow(newMax);
            max = newMax;
        },
        /** Returns the maximum number of items that can be stored in the cache. */ get max () {
            return max;
        },
        /** Returns the number of items currently stored in the cache. */ get size () {
            return size;
        },
        /** Returns the number of currently available slots in the cache before reaching the maximum size. */ get available () {
            return max - size;
        }
    };
};
exports.createLRU = createLRU;
}),
"[project]/MCMS/MCMS/node_modules/denque/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Custom implementation of a double ended queue.
 */ function Denque(array, options) {
    var options = options || {};
    this._capacity = options.capacity;
    this._head = 0;
    this._tail = 0;
    if (Array.isArray(array)) {
        this._fromArray(array);
    } else {
        this._capacityMask = 0x3;
        this._list = new Array(4);
    }
}
/**
 * --------------
 *  PUBLIC API
 * -------------
 */ /**
 * Returns the item at the specified index from the list.
 * 0 is the first element, 1 is the second, and so on...
 * Elements at negative values are that many from the end: -1 is one before the end
 * (the last element), -2 is two before the end (one before last), etc.
 * @param index
 * @returns {*}
 */ Denque.prototype.peekAt = function peekAt(index) {
    var i = index;
    // expect a number or return undefined
    if (i !== (i | 0)) {
        return void 0;
    }
    var len = this.size();
    if (i >= len || i < -len) return undefined;
    if (i < 0) i += len;
    i = this._head + i & this._capacityMask;
    return this._list[i];
};
/**
 * Alias for peekAt()
 * @param i
 * @returns {*}
 */ Denque.prototype.get = function get(i) {
    return this.peekAt(i);
};
/**
 * Returns the first item in the list without removing it.
 * @returns {*}
 */ Denque.prototype.peek = function peek() {
    if (this._head === this._tail) return undefined;
    return this._list[this._head];
};
/**
 * Alias for peek()
 * @returns {*}
 */ Denque.prototype.peekFront = function peekFront() {
    return this.peek();
};
/**
 * Returns the item that is at the back of the queue without removing it.
 * Uses peekAt(-1)
 */ Denque.prototype.peekBack = function peekBack() {
    return this.peekAt(-1);
};
/**
 * Returns the current length of the queue
 * @return {Number}
 */ Object.defineProperty(Denque.prototype, 'length', {
    get: function length() {
        return this.size();
    }
});
/**
 * Return the number of items on the list, or 0 if empty.
 * @returns {number}
 */ Denque.prototype.size = function size() {
    if (this._head === this._tail) return 0;
    if (this._head < this._tail) return this._tail - this._head;
    else return this._capacityMask + 1 - (this._head - this._tail);
};
/**
 * Add an item at the beginning of the list.
 * @param item
 */ Denque.prototype.unshift = function unshift(item) {
    if (arguments.length === 0) return this.size();
    var len = this._list.length;
    this._head = this._head - 1 + len & this._capacityMask;
    this._list[this._head] = item;
    if (this._tail === this._head) this._growArray();
    if (this._capacity && this.size() > this._capacity) this.pop();
    if (this._head < this._tail) return this._tail - this._head;
    else return this._capacityMask + 1 - (this._head - this._tail);
};
/**
 * Remove and return the first item on the list,
 * Returns undefined if the list is empty.
 * @returns {*}
 */ Denque.prototype.shift = function shift() {
    var head = this._head;
    if (head === this._tail) return undefined;
    var item = this._list[head];
    this._list[head] = undefined;
    this._head = head + 1 & this._capacityMask;
    if (head < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2) this._shrinkArray();
    return item;
};
/**
 * Add an item to the bottom of the list.
 * @param item
 */ Denque.prototype.push = function push(item) {
    if (arguments.length === 0) return this.size();
    var tail = this._tail;
    this._list[tail] = item;
    this._tail = tail + 1 & this._capacityMask;
    if (this._tail === this._head) {
        this._growArray();
    }
    if (this._capacity && this.size() > this._capacity) {
        this.shift();
    }
    if (this._head < this._tail) return this._tail - this._head;
    else return this._capacityMask + 1 - (this._head - this._tail);
};
/**
 * Remove and return the last item on the list.
 * Returns undefined if the list is empty.
 * @returns {*}
 */ Denque.prototype.pop = function pop() {
    var tail = this._tail;
    if (tail === this._head) return undefined;
    var len = this._list.length;
    this._tail = tail - 1 + len & this._capacityMask;
    var item = this._list[this._tail];
    this._list[this._tail] = undefined;
    if (this._head < 2 && tail > 10000 && tail <= len >>> 2) this._shrinkArray();
    return item;
};
/**
 * Remove and return the item at the specified index from the list.
 * Returns undefined if the list is empty.
 * @param index
 * @returns {*}
 */ Denque.prototype.removeOne = function removeOne(index) {
    var i = index;
    // expect a number or return undefined
    if (i !== (i | 0)) {
        return void 0;
    }
    if (this._head === this._tail) return void 0;
    var size = this.size();
    var len = this._list.length;
    if (i >= size || i < -size) return void 0;
    if (i < 0) i += size;
    i = this._head + i & this._capacityMask;
    var item = this._list[i];
    var k;
    if (index < size / 2) {
        for(k = index; k > 0; k--){
            this._list[i] = this._list[i = i - 1 + len & this._capacityMask];
        }
        this._list[i] = void 0;
        this._head = this._head + 1 + len & this._capacityMask;
    } else {
        for(k = size - 1 - index; k > 0; k--){
            this._list[i] = this._list[i = i + 1 + len & this._capacityMask];
        }
        this._list[i] = void 0;
        this._tail = this._tail - 1 + len & this._capacityMask;
    }
    return item;
};
/**
 * Remove number of items from the specified index from the list.
 * Returns array of removed items.
 * Returns undefined if the list is empty.
 * @param index
 * @param count
 * @returns {array}
 */ Denque.prototype.remove = function remove(index, count) {
    var i = index;
    var removed;
    var del_count = count;
    // expect a number or return undefined
    if (i !== (i | 0)) {
        return void 0;
    }
    if (this._head === this._tail) return void 0;
    var size = this.size();
    var len = this._list.length;
    if (i >= size || i < -size || count < 1) return void 0;
    if (i < 0) i += size;
    if (count === 1 || !count) {
        removed = new Array(1);
        removed[0] = this.removeOne(i);
        return removed;
    }
    if (i === 0 && i + count >= size) {
        removed = this.toArray();
        this.clear();
        return removed;
    }
    if (i + count > size) count = size - i;
    var k;
    removed = new Array(count);
    for(k = 0; k < count; k++){
        removed[k] = this._list[this._head + i + k & this._capacityMask];
    }
    i = this._head + i & this._capacityMask;
    if (index + count === size) {
        this._tail = this._tail - count + len & this._capacityMask;
        for(k = count; k > 0; k--){
            this._list[i = i + 1 + len & this._capacityMask] = void 0;
        }
        return removed;
    }
    if (index === 0) {
        this._head = this._head + count + len & this._capacityMask;
        for(k = count - 1; k > 0; k--){
            this._list[i = i + 1 + len & this._capacityMask] = void 0;
        }
        return removed;
    }
    if (i < size / 2) {
        this._head = this._head + index + count + len & this._capacityMask;
        for(k = index; k > 0; k--){
            this.unshift(this._list[i = i - 1 + len & this._capacityMask]);
        }
        i = this._head - 1 + len & this._capacityMask;
        while(del_count > 0){
            this._list[i = i - 1 + len & this._capacityMask] = void 0;
            del_count--;
        }
        if (index < 0) this._tail = i;
    } else {
        this._tail = i;
        i = i + count + len & this._capacityMask;
        for(k = size - (count + index); k > 0; k--){
            this.push(this._list[i++]);
        }
        i = this._tail;
        while(del_count > 0){
            this._list[i = i + 1 + len & this._capacityMask] = void 0;
            del_count--;
        }
    }
    if (this._head < 2 && this._tail > 10000 && this._tail <= len >>> 2) this._shrinkArray();
    return removed;
};
/**
 * Native splice implementation.
 * Remove number of items from the specified index from the list and/or add new elements.
 * Returns array of removed items or empty array if count == 0.
 * Returns undefined if the list is empty.
 *
 * @param index
 * @param count
 * @param {...*} [elements]
 * @returns {array}
 */ Denque.prototype.splice = function splice(index, count) {
    var i = index;
    // expect a number or return undefined
    if (i !== (i | 0)) {
        return void 0;
    }
    var size = this.size();
    if (i < 0) i += size;
    if (i > size) return void 0;
    if (arguments.length > 2) {
        var k;
        var temp;
        var removed;
        var arg_len = arguments.length;
        var len = this._list.length;
        var arguments_index = 2;
        if (!size || i < size / 2) {
            temp = new Array(i);
            for(k = 0; k < i; k++){
                temp[k] = this._list[this._head + k & this._capacityMask];
            }
            if (count === 0) {
                removed = [];
                if (i > 0) {
                    this._head = this._head + i + len & this._capacityMask;
                }
            } else {
                removed = this.remove(i, count);
                this._head = this._head + i + len & this._capacityMask;
            }
            while(arg_len > arguments_index){
                this.unshift(arguments[--arg_len]);
            }
            for(k = i; k > 0; k--){
                this.unshift(temp[k - 1]);
            }
        } else {
            temp = new Array(size - (i + count));
            var leng = temp.length;
            for(k = 0; k < leng; k++){
                temp[k] = this._list[this._head + i + count + k & this._capacityMask];
            }
            if (count === 0) {
                removed = [];
                if (i != size) {
                    this._tail = this._head + i + len & this._capacityMask;
                }
            } else {
                removed = this.remove(i, count);
                this._tail = this._tail - leng + len & this._capacityMask;
            }
            while(arguments_index < arg_len){
                this.push(arguments[arguments_index++]);
            }
            for(k = 0; k < leng; k++){
                this.push(temp[k]);
            }
        }
        return removed;
    } else {
        return this.remove(i, count);
    }
};
/**
 * Soft clear - does not reset capacity.
 */ Denque.prototype.clear = function clear() {
    this._list = new Array(this._list.length);
    this._head = 0;
    this._tail = 0;
};
/**
 * Returns true or false whether the list is empty.
 * @returns {boolean}
 */ Denque.prototype.isEmpty = function isEmpty() {
    return this._head === this._tail;
};
/**
 * Returns an array of all queue items.
 * @returns {Array}
 */ Denque.prototype.toArray = function toArray() {
    return this._copyArray(false);
};
/**
 * -------------
 *   INTERNALS
 * -------------
 */ /**
 * Fills the queue with items from an array
 * For use in the constructor
 * @param array
 * @private
 */ Denque.prototype._fromArray = function _fromArray(array) {
    var length = array.length;
    var capacity = this._nextPowerOf2(length);
    this._list = new Array(capacity);
    this._capacityMask = capacity - 1;
    this._tail = length;
    for(var i = 0; i < length; i++)this._list[i] = array[i];
};
/**
 *
 * @param fullCopy
 * @param size Initialize the array with a specific size. Will default to the current list size
 * @returns {Array}
 * @private
 */ Denque.prototype._copyArray = function _copyArray(fullCopy, size) {
    var src = this._list;
    var capacity = src.length;
    var length = this.length;
    size = size | length;
    // No prealloc requested and the buffer is contiguous
    if (size == length && this._head < this._tail) {
        // Simply do a fast slice copy
        return this._list.slice(this._head, this._tail);
    }
    var dest = new Array(size);
    var k = 0;
    var i;
    if (fullCopy || this._head > this._tail) {
        for(i = this._head; i < capacity; i++)dest[k++] = src[i];
        for(i = 0; i < this._tail; i++)dest[k++] = src[i];
    } else {
        for(i = this._head; i < this._tail; i++)dest[k++] = src[i];
    }
    return dest;
};
/**
 * Grows the internal list array.
 * @private
 */ Denque.prototype._growArray = function _growArray() {
    if (this._head != 0) {
        // double array size and copy existing data, head to end, then beginning to tail.
        var newList = this._copyArray(true, this._list.length << 1);
        this._tail = this._list.length;
        this._head = 0;
        this._list = newList;
    } else {
        this._tail = this._list.length;
        this._list.length <<= 1;
    }
    this._capacityMask = this._capacityMask << 1 | 1;
};
/**
 * Shrinks the internal list array.
 * @private
 */ Denque.prototype._shrinkArray = function _shrinkArray() {
    this._list.length >>>= 1;
    this._capacityMask >>>= 1;
};
/**
 * Find the next power of 2, at least 4
 * @private
 * @param {number} num 
 * @returns {number}
 */ Denque.prototype._nextPowerOf2 = function _nextPowerOf2(num) {
    var log2 = Math.log(num) / Math.log(2);
    var nextPow2 = 1 << log2 + 1;
    return Math.max(nextPow2, 4);
};
module.exports = Denque;
}),
"[project]/MCMS/MCMS/node_modules/long/umd/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// GENERATED FILE. DO NOT EDIT.
(function(global, factory) {
    function preferDefault(exports1) {
        return exports1.default || exports1;
    }
    if (typeof define === "function" && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            var exports1 = {};
            factory(exports1);
            return preferDefault(exports1);
        }());
    } else if ("TURBOPACK compile-time truthy", 1) {
        factory(exports);
        if ("TURBOPACK compile-time truthy", 1) module.exports = preferDefault(exports);
    } else //TURBOPACK unreachable
    ;
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : /*TURBOPACK member replacement*/ __turbopack_context__.e, function(_exports) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    /**
     * @license
     * Copyright 2009 The Closure Library Authors
     * Copyright 2020 Daniel Wirtz / The long.js Authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * SPDX-License-Identifier: Apache-2.0
     */ // WebAssembly optimizations to do native i64 multiplication and divide
    var wasm = null;
    try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            // \0asm
            0,
            97,
            115,
            109,
            // version 1
            1,
            0,
            0,
            0,
            // section "type"
            1,
            13,
            2,
            // 0, () => i32
            96,
            0,
            1,
            127,
            // 1, (i32, i32, i32, i32) => i32
            96,
            4,
            127,
            127,
            127,
            127,
            1,
            127,
            // section "function"
            3,
            7,
            6,
            // 0, type 0
            0,
            // 1, type 1
            1,
            // 2, type 1
            1,
            // 3, type 1
            1,
            // 4, type 1
            1,
            // 5, type 1
            1,
            // section "global"
            6,
            6,
            1,
            // 0, "high", mutable i32
            127,
            1,
            65,
            0,
            11,
            // section "export"
            7,
            50,
            6,
            // 0, "mul"
            3,
            109,
            117,
            108,
            0,
            1,
            // 1, "div_s"
            5,
            100,
            105,
            118,
            95,
            115,
            0,
            2,
            // 2, "div_u"
            5,
            100,
            105,
            118,
            95,
            117,
            0,
            3,
            // 3, "rem_s"
            5,
            114,
            101,
            109,
            95,
            115,
            0,
            4,
            // 4, "rem_u"
            5,
            114,
            101,
            109,
            95,
            117,
            0,
            5,
            // 5, "get_high"
            8,
            103,
            101,
            116,
            95,
            104,
            105,
            103,
            104,
            0,
            0,
            // section "code"
            10,
            191,
            1,
            6,
            // 0, "get_high"
            4,
            0,
            35,
            0,
            11,
            // 1, "mul"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            126,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 2, "div_s"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            127,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 3, "div_u"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            128,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 4, "rem_s"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            129,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 5, "rem_u"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            130,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11
        ])), {}).exports;
    } catch  {
    // no wasm support :(
    }
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @constructor
     */ function Long(low, high, unsigned) {
        /**
       * The low 32 bits as a signed value.
       * @type {number}
       */ this.low = low | 0;
        /**
       * The high 32 bits as a signed value.
       * @type {number}
       */ this.high = high | 0;
        /**
       * Whether unsigned or not.
       * @type {boolean}
       */ this.unsigned = !!unsigned;
    }
    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.
    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */ Long.prototype.__isLong__;
    Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
    });
    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */ function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }
    /**
     * @function
     * @param {*} value number
     * @returns {number}
     * @inner
     */ function ctz32(value) {
        var c = Math.clz32(value & -value);
        return value ? 31 - c : c;
    }
    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */ Long.isLong = isLong;
    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */ var INT_CACHE = {};
    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */ var UINT_CACHE = {};
    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
                cachedObj = INT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
        }
    }
    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromInt = fromInt;
    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromNumber = fromNumber;
    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromBits = fromBits;
    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */ var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */ function fromString(str, unsigned, radix) {
        if (str.length === 0) throw Error("empty string");
        if (typeof unsigned === "number") {
            // For goog.math.long compatibility
            radix = unsigned;
            unsigned = false;
        } else {
            unsigned = !!unsigned;
        }
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return unsigned ? UZERO : ZERO;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
        else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }
        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for(var i = 0; i < str.length; i += 8){
            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */ Long.fromString = fromString;
    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromValue(val, unsigned) {
        if (typeof val === "number") return fromNumber(val, unsigned);
        if (typeof val === "string") return fromString(val, unsigned);
        // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    /**
     * Converts the specified value to a Long using the appropriate from* function for its type.
     * @function
     * @param {!Long|number|bigint|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long}
     */ Long.fromValue = fromValue;
    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_16_DBL = 1 << 16;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_24_DBL = 1 << 24;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    /**
     * @type {!Long}
     * @const
     * @inner
     */ var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    /**
     * @type {!Long}
     * @inner
     */ var ZERO = fromInt(0);
    /**
     * Signed zero.
     * @type {!Long}
     */ Long.ZERO = ZERO;
    /**
     * @type {!Long}
     * @inner
     */ var UZERO = fromInt(0, true);
    /**
     * Unsigned zero.
     * @type {!Long}
     */ Long.UZERO = UZERO;
    /**
     * @type {!Long}
     * @inner
     */ var ONE = fromInt(1);
    /**
     * Signed one.
     * @type {!Long}
     */ Long.ONE = ONE;
    /**
     * @type {!Long}
     * @inner
     */ var UONE = fromInt(1, true);
    /**
     * Unsigned one.
     * @type {!Long}
     */ Long.UONE = UONE;
    /**
     * @type {!Long}
     * @inner
     */ var NEG_ONE = fromInt(-1);
    /**
     * Signed negative one.
     * @type {!Long}
     */ Long.NEG_ONE = NEG_ONE;
    /**
     * @type {!Long}
     * @inner
     */ var MAX_VALUE = fromBits(0xffffffff | 0, 0x7fffffff | 0, false);
    /**
     * Maximum signed value.
     * @type {!Long}
     */ Long.MAX_VALUE = MAX_VALUE;
    /**
     * @type {!Long}
     * @inner
     */ var MAX_UNSIGNED_VALUE = fromBits(0xffffffff | 0, 0xffffffff | 0, true);
    /**
     * Maximum unsigned value.
     * @type {!Long}
     */ Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    /**
     * @type {!Long}
     * @inner
     */ var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
    /**
     * Minimum signed value.
     * @type {!Long}
     */ Long.MIN_VALUE = MIN_VALUE;
    /**
     * @alias Long.prototype
     * @inner
     */ var LongPrototype = Long.prototype;
    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    /**
     * Converts the Long to a string written in the specified radix.
     * @this {!Long}
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If `radix` is out of range
     */ LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else return "-" + this.neg().toString(radix);
        }
        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while(true){
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;
            else {
                while(digits.length < 6)digits = "0" + digits;
                result = "" + digits + result;
            }
        }
    };
    /**
     * Gets the high 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed high bits
     */ LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };
    /**
     * Gets the high 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned high bits
     */ LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };
    /**
     * Gets the low 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed low bits
     */ LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };
    /**
     * Gets the low 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned low bits
     */ LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };
    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for(var bit = 31; bit > 0; bit--)if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    /**
     * Tests if this Long can be safely represented as a JavaScript number.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isSafeInteger = function isSafeInteger() {
        // 2^53-1 is the maximum safe value
        var top11Bits = this.high >> 21;
        // [0, 2^53-1]
        if (!top11Bits) return true;
        // > 2^53-1
        if (this.unsigned) return false;
        // [-2^53, -1] except -2^53
        return top11Bits === -1 && !(this.low === 0 && this.high === -0x200000);
    };
    /**
     * Tests if this Long's value equals zero.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };
    /**
     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
     * @returns {boolean}
     */ LongPrototype.eqz = LongPrototype.isZero;
    /**
     * Tests if this Long's value is negative.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };
    /**
     * Tests if this Long's value is positive or zero.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };
    /**
     * Tests if this Long's value is odd.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };
    /**
     * Tests if this Long's value is even.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };
    /**
     * Tests if this Long's value equals the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.equals = function equals(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    };
    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.eq = LongPrototype.equals;
    /**
     * Tests if this Long's value differs from the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(/* validates */ other);
    };
    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.neq = LongPrototype.notEquals;
    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.ne = LongPrototype.notEquals;
    /**
     * Tests if this Long's value is less than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lessThan = function lessThan(other) {
        return this.comp(/* validates */ other) < 0;
    };
    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lt = LongPrototype.lessThan;
    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    };
    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lte = LongPrototype.lessThanOrEqual;
    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.le = LongPrototype.lessThanOrEqual;
    /**
     * Tests if this Long's value is greater than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(/* validates */ other) > 0;
    };
    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.gt = LongPrototype.greaterThan;
    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(/* validates */ other) >= 0;
    };
    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    /**
     * Compares this Long's value with the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */ LongPrototype.compare = function compare(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        // At this point the sign bits are the same
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */ LongPrototype.comp = LongPrototype.compare;
    /**
     * Negates this Long's value.
     * @this {!Long}
     * @returns {!Long} Negated Long
     */ LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
    };
    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */ LongPrototype.neg = LongPrototype.negate;
    /**
     * Returns the sum of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} addend Addend
     * @returns {!Long} Sum
     */ LongPrototype.add = function add(addend) {
        if (!isLong(addend)) addend = fromValue(addend);
        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xffff;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xffff;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xffff;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xffff;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 + b48;
        c48 &= 0xffff;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
     * Returns the difference of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */ LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */ LongPrototype.sub = LongPrototype.subtract;
    /**
     * Returns the product of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */ LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return this;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier);
        // use wasm support if present
        if (wasm) {
            var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
            else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xffff;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xffff;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xffff;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xffff;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xffff;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */ LongPrototype.mul = LongPrototype.multiply;
    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */ LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error("division by zero");
        // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned && this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
                // be consistent with non-wasm code path
                return this;
            }
            var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE)) return ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    var halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    } else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative()) return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
            res = UZERO;
        }
        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while(rem.gte(divisor)){
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while(approxRem.isNegative() || approxRem.gt(rem)){
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero()) approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */ LongPrototype.div = LongPrototype.divide;
    /**
     * Returns this Long modulo the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        // use wasm support if present
        if (wasm) {
            var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    };
    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.mod = LongPrototype.modulo;
    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.rem = LongPrototype.modulo;
    /**
     * Returns the bitwise NOT of this Long.
     * @this {!Long}
     * @returns {!Long}
     */ LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    /**
     * Returns count leading zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */ LongPrototype.countLeadingZeros = function countLeadingZeros() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    };
    /**
     * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */ LongPrototype.clz = LongPrototype.countLeadingZeros;
    /**
     * Returns count trailing zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */ LongPrototype.countTrailingZeros = function countTrailingZeros() {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
    };
    /**
     * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */ LongPrototype.ctz = LongPrototype.countTrailingZeros;
    /**
     * Returns the bitwise AND of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.and = function and(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    /**
     * Returns the bitwise OR of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.or = function or(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.xor = function xor(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shl = LongPrototype.shiftLeft;
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shr = LongPrototype.shiftRight;
    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
        return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
    };
    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    /**
     * Returns this Long with bits rotated to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotateLeft = function rotateLeft(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
    };
    /**
     * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotl = LongPrototype.rotateLeft;
    /**
     * Returns this Long with bits rotated to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotateRight = function rotateRight(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
    };
    /**
     * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotr = LongPrototype.rotateRight;
    /**
     * Converts this Long to signed.
     * @this {!Long}
     * @returns {!Long} Signed long
     */ LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
    };
    /**
     * Converts this Long to unsigned.
     * @this {!Long}
     * @returns {!Long} Unsigned long
     */ LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
    };
    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @this {!Long}
     * @returns {!Array.<number>} Byte representation
     */ LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    /**
     * Converts this Long to its little endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Little endian byte representation
     */ LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            lo >>> 8 & 0xff,
            lo >>> 16 & 0xff,
            lo >>> 24,
            hi & 0xff,
            hi >>> 8 & 0xff,
            hi >>> 16 & 0xff,
            hi >>> 24
        ];
    };
    /**
     * Converts this Long to its big endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Big endian byte representation
     */ LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            hi >>> 16 & 0xff,
            hi >>> 8 & 0xff,
            hi & 0xff,
            lo >>> 24,
            lo >>> 16 & 0xff,
            lo >>> 8 & 0xff,
            lo & 0xff
        ];
    };
    /**
     * Creates a Long from its byte representation.
     * @param {!Array.<number>} bytes Byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {Long} The corresponding Long value
     */ Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };
    /**
     * Creates a Long from its little endian byte representation.
     * @param {!Array.<number>} bytes Little endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */ Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    /**
     * Creates a Long from its big endian byte representation.
     * @param {!Array.<number>} bytes Big endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */ Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
    // Support conversion to/from BigInt where available
    if (typeof BigInt === "function") {
        /**
       * Returns a Long representing the given big integer.
       * @function
       * @param {number} value The big integer value
       * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
       * @returns {!Long} The corresponding Long value
       */ Long.fromBigInt = function fromBigInt(value, unsigned) {
            var lowBits = Number(BigInt.asIntN(32, value));
            var highBits = Number(BigInt.asIntN(32, value >> BigInt(32)));
            return fromBits(lowBits, highBits, unsigned);
        };
        // Override
        Long.fromValue = function fromValueWithBigInt(value, unsigned) {
            if (typeof value === "bigint") return Long.fromBigInt(value, unsigned);
            return fromValue(value, unsigned);
        };
        /**
       * Converts the Long to its big integer representation.
       * @this {!Long}
       * @returns {bigint}
       */ LongPrototype.toBigInt = function toBigInt() {
            var lowBigInt = BigInt(this.low >>> 0);
            var highBigInt = BigInt(this.unsigned ? this.high >>> 0 : this.high);
            return highBigInt << BigInt(32) | lowBigInt;
        };
    }
    var _default = _exports.default = Long;
});
}),
"[project]/MCMS/MCMS/node_modules/safer-buffer/safer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
var safer = {};
var key;
for(key in buffer){
    if (!buffer.hasOwnProperty(key)) continue;
    if (key === 'SlowBuffer' || key === 'Buffer') continue;
    safer[key] = buffer[key];
}
var Safer = safer.Buffer = {};
for(key in Buffer){
    if (!Buffer.hasOwnProperty(key)) continue;
    if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue;
    Safer[key] = Buffer[key];
}
safer.Buffer.prototype = Buffer.prototype;
if (!Safer.from || Safer.from === Uint8Array.from) {
    Safer.from = function(value, encodingOrOffset, length) {
        if (typeof value === 'number') {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
        }
        if (value && typeof value.length === 'undefined') {
            throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value);
        }
        return Buffer(value, encodingOrOffset, length);
    };
}
if (!Safer.alloc) {
    Safer.alloc = function(size, fill, encoding) {
        if (typeof size !== 'number') {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
        }
        if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
        var buf = Buffer(size);
        if (!fill || fill.length === 0) {
            buf.fill(0);
        } else if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
        return buf;
    };
}
if (!safer.kStringMaxLength) {
    try {
        safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
    } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
    }
}
if (!safer.constants) {
    safer.constants = {
        MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) {
        safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
    }
}
module.exports = safer;
}),
"[project]/MCMS/MCMS/node_modules/is-property/is-property.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isProperty(str) {
    return /^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(str);
}
module.exports = isProperty;
}),
"[project]/MCMS/MCMS/node_modules/generate-function/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var isProperty = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/is-property/is-property.js [app-route] (ecmascript)");
var INDENT_START = /[\{\[]/;
var INDENT_END = /[\}\]]/;
// from https://mathiasbynens.be/notes/reserved-keywords
var RESERVED = [
    'do',
    'if',
    'in',
    'for',
    'let',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'eval',
    'null',
    'this',
    'true',
    'void',
    'with',
    'await',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'yield',
    'delete',
    'export',
    'import',
    'public',
    'return',
    'static',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'package',
    'private',
    'continue',
    'debugger',
    'function',
    'arguments',
    'interface',
    'protected',
    'implements',
    'instanceof',
    'NaN',
    'undefined'
];
var RESERVED_MAP = {};
for(var i = 0; i < RESERVED.length; i++){
    RESERVED_MAP[RESERVED[i]] = true;
}
var isVariable = function(name) {
    return isProperty(name) && !RESERVED_MAP.hasOwnProperty(name);
};
var formats = {
    s: function(s) {
        return '' + s;
    },
    d: function(d) {
        return '' + Number(d);
    },
    o: function(o) {
        return JSON.stringify(o);
    }
};
var genfun = function() {
    var lines = [];
    var indent = 0;
    var vars = {};
    var push = function(str) {
        var spaces = '';
        while(spaces.length < indent * 2)spaces += '  ';
        lines.push(spaces + str);
    };
    var pushLine = function(line) {
        if (INDENT_END.test(line.trim()[0]) && INDENT_START.test(line[line.length - 1])) {
            indent--;
            push(line);
            indent++;
            return;
        }
        if (INDENT_START.test(line[line.length - 1])) {
            push(line);
            indent++;
            return;
        }
        if (INDENT_END.test(line.trim()[0])) {
            indent--;
            push(line);
            return;
        }
        push(line);
    };
    var line = function(fmt) {
        if (!fmt) return line;
        if (arguments.length === 1 && fmt.indexOf('\n') > -1) {
            var lines = fmt.trim().split('\n');
            for(var i = 0; i < lines.length; i++){
                pushLine(lines[i].trim());
            }
        } else {
            pushLine(util.format.apply(util, arguments));
        }
        return line;
    };
    line.scope = {};
    line.formats = formats;
    line.sym = function(name) {
        if (!name || !isVariable(name)) name = 'tmp';
        if (!vars[name]) vars[name] = 0;
        return name + (vars[name]++ || '');
    };
    line.property = function(obj, name) {
        if (arguments.length === 1) {
            name = obj;
            obj = '';
        }
        name = name + '';
        if (isProperty(name)) return obj ? obj + '.' + name : name;
        return obj ? obj + '[' + JSON.stringify(name) + ']' : JSON.stringify(name);
    };
    line.toString = function() {
        return lines.join('\n');
    };
    line.toFunction = function(scope) {
        if (!scope) scope = {};
        var src = 'return (' + line.toString() + ')';
        Object.keys(line.scope).forEach(function(key) {
            if (!scope[key]) scope[key] = line.scope[key];
        });
        var keys = Object.keys(scope).map(function(key) {
            return key;
        });
        var vals = keys.map(function(key) {
            return scope[key];
        });
        return Function.apply(null, keys.concat(src)).apply(null, vals);
    };
    if (arguments.length) line.apply(null, arguments);
    return line;
};
genfun.formats = formats;
module.exports = genfun;
}),
"[project]/MCMS/MCMS/node_modules/named-placeholders/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// based on code from Brian White @mscdex mariasql library - https://github.com/mscdex/node-mariasql/blob/master/lib/Client.js#L272-L332
// License: https://github.com/mscdex/node-mariasql/blob/master/LICENSE
const RE_PARAM = /(?:\?)|(?::(\d+|(?:[a-zA-Z][a-zA-Z0-9_]*)))/g, DQUOTE = 34, SQUOTE = 39, BSLASH = 92;
function parse(query) {
    let ppos = RE_PARAM.exec(query);
    let curpos = 0;
    let start = 0;
    let end;
    const parts = [];
    let inQuote = false;
    let escape = false;
    let qchr;
    const tokens = [];
    let qcnt = 0;
    let lastTokenEndPos = 0;
    let i;
    if (ppos) {
        do {
            for(i = curpos, end = ppos.index; i < end; ++i){
                const chr = query.charCodeAt(i);
                if (chr === BSLASH) escape = !escape;
                else {
                    if (escape) {
                        escape = false;
                        continue;
                    }
                    if (inQuote && chr === qchr) {
                        if (query.charCodeAt(i + 1) === qchr) {
                            // quote escaped via "" or ''
                            ++i;
                            continue;
                        }
                        inQuote = false;
                    } else if (!inQuote && (chr === DQUOTE || chr === SQUOTE)) {
                        inQuote = true;
                        qchr = chr;
                    }
                }
            }
            if (!inQuote) {
                parts.push(query.substring(start, end));
                tokens.push(ppos[0].length === 1 ? qcnt++ : ppos[1]);
                start = end + ppos[0].length;
                lastTokenEndPos = start;
            }
            curpos = end + ppos[0].length;
        }while (ppos = RE_PARAM.exec(query))
        if (tokens.length) {
            if (curpos < query.length) {
                parts.push(query.substring(lastTokenEndPos));
            }
            return [
                parts,
                tokens
            ];
        }
    }
    return [
        query
    ];
}
function createCompiler(config) {
    if (!config) config = {};
    if (!config.placeholder) {
        config.placeholder = '?';
    }
    let ncache = 100;
    let cache;
    if (typeof config.cache === 'number') {
        ncache = config.cache;
    }
    if (typeof config.cache === 'object') {
        cache = config.cache;
    }
    if (config.cache !== false && !cache) {
        cache = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/lru.min/lib/index.js [app-route] (ecmascript)").createLRU({
            max: ncache
        });
    }
    function toArrayParams(tree, params) {
        const arr = [];
        if (tree.length === 1) {
            return [
                tree[0],
                []
            ];
        }
        if (typeof params === 'undefined') throw new Error('Named query contains placeholders, but parameters object is undefined');
        const tokens = tree[1];
        for(let i = 0; i < tokens.length; ++i){
            arr.push(params[tokens[i]]);
        }
        return [
            tree[0],
            arr
        ];
    }
    function noTailingSemicolon(s) {
        if (s.slice(-1) === ':') {
            return s.slice(0, -1);
        }
        return s;
    }
    function join(tree) {
        if (tree.length === 1) {
            return tree;
        }
        let unnamed = noTailingSemicolon(tree[0][0]);
        for(let i = 1; i < tree[0].length; ++i){
            if (tree[0][i - 1].slice(-1) === ':') {
                unnamed += config.placeholder;
            }
            unnamed += config.placeholder;
            unnamed += noTailingSemicolon(tree[0][i]);
        }
        const last = tree[0][tree[0].length - 1];
        if (tree[0].length === tree[1].length) {
            if (last.slice(-1) === ':') {
                unnamed += config.placeholder;
            }
            unnamed += config.placeholder;
        }
        return [
            unnamed,
            tree[1]
        ];
    }
    function compile(query, paramsObj) {
        let tree;
        if (cache && (tree = cache.get(query))) {
            return toArrayParams(tree, paramsObj);
        }
        tree = join(parse(query));
        if (cache) {
            cache.set(query, tree);
        }
        return toArrayParams(tree, paramsObj);
    }
    compile.parse = parse;
    return compile;
}
// named :one :two to postgres-style numbered $1 $2 $3
function toNumbered(q, params) {
    const tree = parse(q);
    const paramsArr = [];
    if (tree.length === 1) {
        return [
            tree[0],
            paramsArr
        ];
    }
    const pIndexes = {};
    let pLastIndex = 0;
    let qs = '';
    let varIndex;
    const varNames = [];
    for(let i = 0; i < tree[0].length; ++i){
        varIndex = pIndexes[tree[1][i]];
        if (!varIndex) {
            varIndex = ++pLastIndex;
            pIndexes[tree[1][i]] = varIndex;
        }
        if (tree[1][i]) {
            varNames[varIndex - 1] = tree[1][i];
            qs += `${tree[0][i]}$${varIndex}`;
        } else {
            qs += tree[0][i];
        }
    }
    return [
        qs,
        varNames.map((n)=>params[n])
    ];
}
module.exports = createCompiler;
module.exports.toNumbered = toNumbered;
}),
];

//# sourceMappingURL=012s_09hm.~d._.js.map