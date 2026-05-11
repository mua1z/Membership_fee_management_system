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
"[project]/MCMS/MCMS/node_modules/pg-connection-string/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License
//parses a connection string
function parse(str, options = {}) {
    //unix socket
    if (str.charAt(0) === '/') {
        const config = str.split(' ');
        return {
            host: config[0],
            database: config[1]
        };
    }
    // Check for empty host in URL
    const config = {};
    let result;
    let dummyHost = false;
    if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
        // Ensure spaces are encoded as %20
        str = encodeURI(str).replace(/%25(\d\d)/g, '%$1');
    }
    try {
        try {
            result = new URL(str, 'postgres://base');
        } catch (e) {
            // The URL is invalid so try again with a dummy host
            result = new URL(str.replace('@/', '@___DUMMY___/'), 'postgres://base');
            dummyHost = true;
        }
    } catch (err) {
        // Remove the input from the error message to avoid leaking sensitive information
        err.input && (err.input = '*****REDACTED*****');
        throw err;
    }
    // We'd like to use Object.fromEntries() here but Node.js 10 does not support it
    for (const entry of result.searchParams.entries()){
        config[entry[0]] = entry[1];
    }
    config.user = config.user || decodeURIComponent(result.username);
    config.password = config.password || decodeURIComponent(result.password);
    if (result.protocol == 'socket:') {
        config.host = decodeURI(result.pathname);
        config.database = result.searchParams.get('db');
        config.client_encoding = result.searchParams.get('encoding');
        return config;
    }
    const hostname = dummyHost ? '' : result.hostname;
    if (!config.host) {
        // Only set the host if there is no equivalent query param.
        config.host = decodeURIComponent(hostname);
    } else if (hostname && /^%2f/i.test(hostname)) {
        // Only prepend the hostname to the pathname if it is not a URL encoded Unix socket host.
        result.pathname = hostname + result.pathname;
    }
    if (!config.port) {
        // Only set the port if there is no equivalent query param.
        config.port = result.port;
    }
    const pathname = result.pathname.slice(1) || null;
    config.database = pathname ? decodeURI(pathname) : null;
    if (config.ssl === 'true' || config.ssl === '1') {
        config.ssl = true;
    }
    if (config.ssl === '0') {
        config.ssl = false;
    }
    if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
        config.ssl = {};
    }
    // Only try to load fs if we expect to read from the disk
    const fs = config.sslcert || config.sslkey || config.sslrootcert ? __turbopack_context__.r("[externals]/fs [external] (fs, cjs)") : null;
    if (config.sslcert) {
        config.ssl.cert = fs.readFileSync(config.sslcert).toString();
    }
    if (config.sslkey) {
        config.ssl.key = fs.readFileSync(config.sslkey).toString();
    }
    if (config.sslrootcert) {
        config.ssl.ca = fs.readFileSync(config.sslrootcert).toString();
    }
    if (options.useLibpqCompat && config.uselibpqcompat) {
        throw new Error('Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.');
    }
    if (config.uselibpqcompat === 'true' || options.useLibpqCompat) {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
            case 'require':
                {
                    if (config.sslrootcert) {
                        // If a root CA is specified, behavior of `sslmode=require` will be the same as that of `verify-ca`
                        config.ssl.checkServerIdentity = function() {};
                    } else {
                        config.ssl.rejectUnauthorized = false;
                    }
                    break;
                }
            case 'verify-ca':
                {
                    if (!config.ssl.ca) {
                        throw new Error('SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security.');
                    }
                    config.ssl.checkServerIdentity = function() {};
                    break;
                }
            case 'verify-full':
                {
                    break;
                }
        }
    } else {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
            case 'require':
            case 'verify-ca':
            case 'verify-full':
                {
                    if (config.sslmode !== 'verify-full') {
                        deprecatedSslModeWarning(config.sslmode);
                    }
                    break;
                }
            case 'no-verify':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
        }
    }
    return config;
}
// convert pg-connection-string ssl config to a ClientConfig.ConnectionOptions
function toConnectionOptions(sslConfig) {
    const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value])=>{
        // we explicitly check for undefined and null instead of `if (value)` because some
        // options accept falsy values. Example: `ssl.rejectUnauthorized = false`
        if (value !== undefined && value !== null) {
            c[key] = value;
        }
        return c;
    }, {});
    return connectionOptions;
}
// convert pg-connection-string config to a ClientConfig
function toClientConfig(config) {
    const poolConfig = Object.entries(config).reduce((c, [key, value])=>{
        if (key === 'ssl') {
            const sslConfig = value;
            if (typeof sslConfig === 'boolean') {
                c[key] = sslConfig;
            }
            if (typeof sslConfig === 'object') {
                c[key] = toConnectionOptions(sslConfig);
            }
        } else if (value !== undefined && value !== null) {
            if (key === 'port') {
                // when port is not specified, it is converted into an empty string
                // we want to avoid NaN or empty string as a values in ClientConfig
                if (value !== '') {
                    const v = parseInt(value, 10);
                    if (isNaN(v)) {
                        throw new Error(`Invalid ${key}: ${value}`);
                    }
                    c[key] = v;
                }
            } else {
                c[key] = value;
            }
        }
        return c;
    }, {});
    return poolConfig;
}
// parses a connection string into ClientConfig
function parseIntoClientConfig(str) {
    return toClientConfig(parse(str));
}
function deprecatedSslModeWarning(sslmode) {
    if (!deprecatedSslModeWarning.warned && typeof process !== 'undefined' && process.emitWarning) {
        deprecatedSslModeWarning.warned = true;
        process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`);
    }
}
module.exports = parse;
parse.parse = parse;
parse.toClientConfig = toClientConfig;
parse.parseIntoClientConfig = parseIntoClientConfig;
}),
"[project]/MCMS/MCMS/node_modules/retry-as-promised/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retryAsPromised = exports.applyJitter = exports.TimeoutError = void 0;
class TimeoutError extends Error {
    constructor(message, previousError){
        super(message);
        this.name = "TimeoutError";
        this.previous = previousError;
    }
}
exports.TimeoutError = TimeoutError;
function matches(match, err) {
    if (typeof match === 'function') {
        try {
            if (err instanceof match) return true;
        } catch (_) {
            return !!match(err);
        }
    }
    if (match === err.toString()) return true;
    if (match === err.message) return true;
    return match instanceof RegExp && (match.test(err.message) || match.test(err.toString()));
}
function applyJitter(delayMs, maxJitterMs) {
    const newDelayMs = delayMs + Math.random() * maxJitterMs * (Math.random() > 0.5 ? 1 : -1);
    return Math.max(0, newDelayMs);
}
exports.applyJitter = applyJitter;
function retryAsPromised(callback, optionsInput) {
    if (!callback || !optionsInput) {
        throw new Error('retry-as-promised must be passed a callback and a options set');
    }
    optionsInput = typeof optionsInput === "number" ? {
        max: optionsInput
    } : optionsInput;
    const options = {
        $current: "$current" in optionsInput ? optionsInput.$current : 1,
        max: optionsInput.max,
        timeout: optionsInput.timeout || undefined,
        match: optionsInput.match ? Array.isArray(optionsInput.match) ? optionsInput.match : [
            optionsInput.match
        ] : [],
        backoffBase: optionsInput.backoffBase === undefined ? 100 : optionsInput.backoffBase,
        backoffExponent: optionsInput.backoffExponent || 1.1,
        backoffJitter: optionsInput.backoffJitter || 0.0,
        report: optionsInput.report,
        name: optionsInput.name || callback.name || 'unknown'
    };
    if (options.match && !Array.isArray(options.match)) options.match = [
        options.match
    ];
    if (options.report) options.report('Trying ' + options.name + ' #' + options.$current + ' at ' + new Date().toLocaleTimeString(), options);
    return new Promise(function(resolve, reject) {
        let timeout;
        let backoffTimeout;
        let lastError;
        if (options.timeout) {
            timeout = setTimeout(function() {
                if (backoffTimeout) clearTimeout(backoffTimeout);
                reject(new TimeoutError(options.name + ' timed out', lastError));
            }, options.timeout);
        }
        Promise.resolve(callback({
            current: options.$current
        })).then(resolve).then(function() {
            if (timeout) clearTimeout(timeout);
            if (backoffTimeout) clearTimeout(backoffTimeout);
        }).catch(function(err) {
            if (timeout) clearTimeout(timeout);
            if (backoffTimeout) clearTimeout(backoffTimeout);
            lastError = err;
            if (options.report) options.report(err && err.toString() || err, options, err);
            // Should not retry if max has been reached
            var shouldRetry = options.$current < options.max;
            if (!shouldRetry) return reject(err);
            shouldRetry = options.match.length === 0 || options.match.some(function(match) {
                return matches(match, err);
            });
            if (!shouldRetry) return reject(err);
            var retryDelay = options.backoffBase * Math.pow(options.backoffExponent, options.$current - 1);
            const backoffJitter = options.backoffJitter;
            if (backoffJitter !== undefined) {
                retryDelay = applyJitter(retryDelay, backoffJitter);
            }
            // Do some accounting
            options.$current++;
            if (options.report) options.report(`Retrying ${options.name} (${options.$current})`, options);
            if (retryDelay) {
                // Use backoff function to ease retry rate
                if (options.report) options.report(`Delaying retry of ${options.name} by ${retryDelay}`, options);
                backoffTimeout = setTimeout(function() {
                    retryAsPromised(callback, options).then(resolve).catch(reject);
                }, retryDelay);
            } else {
                retryAsPromised(callback, options).then(resolve).catch(reject);
            }
        });
    });
}
exports.retryAsPromised = retryAsPromised;
;
exports.default = retryAsPromised;
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    wkt: {
        Point: 'POINT',
        LineString: 'LINESTRING',
        Polygon: 'POLYGON',
        MultiPoint: 'MULTIPOINT',
        MultiLineString: 'MULTILINESTRING',
        MultiPolygon: 'MULTIPOLYGON',
        GeometryCollection: 'GEOMETRYCOLLECTION'
    },
    wkb: {
        Point: 1,
        LineString: 2,
        Polygon: 3,
        MultiPoint: 4,
        MultiLineString: 5,
        MultiPolygon: 6,
        GeometryCollection: 7
    },
    geoJSON: {
        Point: 'Point',
        LineString: 'LineString',
        Polygon: 'Polygon',
        MultiPoint: 'MultiPoint',
        MultiLineString: 'MultiLineString',
        MultiPolygon: 'MultiPolygon',
        GeometryCollection: 'GeometryCollection'
    }
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = BinaryWriter;
function BinaryWriter(size, allowResize) {
    this.buffer = new Buffer(size);
    this.position = 0;
    this.allowResize = allowResize;
}
function _write(write, size) {
    return function(value, noAssert) {
        this.ensureSize(size);
        write.call(this.buffer, value, this.position, noAssert);
        this.position += size;
    };
}
BinaryWriter.prototype.writeUInt8 = _write(Buffer.prototype.writeUInt8, 1);
BinaryWriter.prototype.writeUInt16LE = _write(Buffer.prototype.writeUInt16LE, 2);
BinaryWriter.prototype.writeUInt16BE = _write(Buffer.prototype.writeUInt16BE, 2);
BinaryWriter.prototype.writeUInt32LE = _write(Buffer.prototype.writeUInt32LE, 4);
BinaryWriter.prototype.writeUInt32BE = _write(Buffer.prototype.writeUInt32BE, 4);
BinaryWriter.prototype.writeInt8 = _write(Buffer.prototype.writeInt8, 1);
BinaryWriter.prototype.writeInt16LE = _write(Buffer.prototype.writeInt16LE, 2);
BinaryWriter.prototype.writeInt16BE = _write(Buffer.prototype.writeInt16BE, 2);
BinaryWriter.prototype.writeInt32LE = _write(Buffer.prototype.writeInt32LE, 4);
BinaryWriter.prototype.writeInt32BE = _write(Buffer.prototype.writeInt32BE, 4);
BinaryWriter.prototype.writeFloatLE = _write(Buffer.prototype.writeFloatLE, 4);
BinaryWriter.prototype.writeFloatBE = _write(Buffer.prototype.writeFloatBE, 4);
BinaryWriter.prototype.writeDoubleLE = _write(Buffer.prototype.writeDoubleLE, 8);
BinaryWriter.prototype.writeDoubleBE = _write(Buffer.prototype.writeDoubleBE, 8);
BinaryWriter.prototype.writeBuffer = function(buffer) {
    this.ensureSize(buffer.length);
    buffer.copy(this.buffer, this.position, 0, buffer.length);
    this.position += buffer.length;
};
BinaryWriter.prototype.writeVarInt = function(value) {
    var length = 1;
    while((value & 0xFFFFFF80) !== 0){
        this.writeUInt8(value & 0x7F | 0x80);
        value >>>= 7;
        length++;
    }
    this.writeUInt8(value & 0x7F);
    return length;
};
BinaryWriter.prototype.ensureSize = function(size) {
    if (this.buffer.length < this.position + size) {
        if (this.allowResize) {
            var tempBuffer = new Buffer(this.position + size);
            this.buffer.copy(tempBuffer, 0, 0, this.buffer.length);
            this.buffer = tempBuffer;
        } else {
            throw new RangeError('index out of range');
        }
    }
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/zigzag.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    encode: function(value) {
        return value << 1 ^ value >> 31;
    },
    decode: function(value) {
        return value >> 1 ^ -(value & 1);
    }
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Point;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
var ZigZag = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/zigzag.js [app-route] (ecmascript)");
function Point(x, y, z, m, srid) {
    Geometry.call(this);
    this.x = x;
    this.y = y;
    this.z = z;
    this.m = m;
    this.srid = srid;
    this.hasZ = typeof this.z !== 'undefined';
    this.hasM = typeof this.m !== 'undefined';
}
util.inherits(Point, Geometry);
Point.Z = function(x, y, z, srid) {
    var point = new Point(x, y, z, undefined, srid);
    point.hasZ = true;
    return point;
};
Point.M = function(x, y, m, srid) {
    var point = new Point(x, y, undefined, m, srid);
    point.hasM = true;
    return point;
};
Point.ZM = function(x, y, z, m, srid) {
    var point = new Point(x, y, z, m, srid);
    point.hasZ = true;
    point.hasM = true;
    return point;
};
Point._parseWkt = function(value, options) {
    var point = new Point();
    point.srid = options.srid;
    point.hasZ = options.hasZ;
    point.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return point;
    value.expectGroupStart();
    var coordinate = value.matchCoordinate(options);
    point.x = coordinate.x;
    point.y = coordinate.y;
    point.z = coordinate.z;
    point.m = coordinate.m;
    value.expectGroupEnd();
    return point;
};
Point._parseWkb = function(value, options) {
    var point = Point._readWkbPoint(value, options);
    point.srid = options.srid;
    return point;
};
Point._readWkbPoint = function(value, options) {
    return new Point(value.readDouble(), value.readDouble(), options.hasZ ? value.readDouble() : undefined, options.hasM ? value.readDouble() : undefined);
};
Point._parseTwkb = function(value, options) {
    var point = new Point();
    point.hasZ = options.hasZ;
    point.hasM = options.hasM;
    if (options.isEmpty) return point;
    point.x = ZigZag.decode(value.readVarInt()) / options.precisionFactor;
    point.y = ZigZag.decode(value.readVarInt()) / options.precisionFactor;
    point.z = options.hasZ ? ZigZag.decode(value.readVarInt()) / options.zPrecisionFactor : undefined;
    point.m = options.hasM ? ZigZag.decode(value.readVarInt()) / options.mPrecisionFactor : undefined;
    return point;
};
Point._readTwkbPoint = function(value, options, previousPoint) {
    previousPoint.x += ZigZag.decode(value.readVarInt()) / options.precisionFactor;
    previousPoint.y += ZigZag.decode(value.readVarInt()) / options.precisionFactor;
    if (options.hasZ) previousPoint.z += ZigZag.decode(value.readVarInt()) / options.zPrecisionFactor;
    if (options.hasM) previousPoint.m += ZigZag.decode(value.readVarInt()) / options.mPrecisionFactor;
    return new Point(previousPoint.x, previousPoint.y, previousPoint.z, previousPoint.m);
};
Point._parseGeoJSON = function(value) {
    return Point._readGeoJSONPoint(value.coordinates);
};
Point._readGeoJSONPoint = function(coordinates) {
    if (coordinates.length === 0) return new Point();
    if (coordinates.length > 2) return new Point(coordinates[0], coordinates[1], coordinates[2]);
    return new Point(coordinates[0], coordinates[1]);
};
Point.prototype.toWkt = function() {
    if (typeof this.x === 'undefined' && typeof this.y === 'undefined' && typeof this.z === 'undefined' && typeof this.m === 'undefined') return this._getWktType(Types.wkt.Point, true);
    return this._getWktType(Types.wkt.Point, false) + '(' + this._getWktCoordinate(this) + ')';
};
Point.prototype.toWkb = function(parentOptions) {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.Point, parentOptions);
    if (typeof this.x === 'undefined' && typeof this.y === 'undefined') {
        wkb.writeDoubleLE(NaN);
        wkb.writeDoubleLE(NaN);
        if (this.hasZ) wkb.writeDoubleLE(NaN);
        if (this.hasM) wkb.writeDoubleLE(NaN);
    } else {
        this._writeWkbPoint(wkb);
    }
    return wkb.buffer;
};
Point.prototype._writeWkbPoint = function(wkb) {
    wkb.writeDoubleLE(this.x);
    wkb.writeDoubleLE(this.y);
    if (this.hasZ) wkb.writeDoubleLE(this.z);
    if (this.hasM) wkb.writeDoubleLE(this.m);
};
Point.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = typeof this.x === 'undefined' && typeof this.y === 'undefined';
    this._writeTwkbHeader(twkb, Types.wkb.Point, precision, isEmpty);
    if (!isEmpty) this._writeTwkbPoint(twkb, precision, new Point(0, 0, 0, 0));
    return twkb.buffer;
};
Point.prototype._writeTwkbPoint = function(twkb, precision, previousPoint) {
    var x = this.x * precision.xyFactor;
    var y = this.y * precision.xyFactor;
    var z = this.z * precision.zFactor;
    var m = this.m * precision.mFactor;
    twkb.writeVarInt(ZigZag.encode(x - previousPoint.x));
    twkb.writeVarInt(ZigZag.encode(y - previousPoint.y));
    if (this.hasZ) twkb.writeVarInt(ZigZag.encode(z - previousPoint.z));
    if (this.hasM) twkb.writeVarInt(ZigZag.encode(m - previousPoint.m));
    previousPoint.x = x;
    previousPoint.y = y;
    previousPoint.z = z;
    previousPoint.m = m;
};
Point.prototype._getWkbSize = function() {
    var size = 1 + 4 + 8 + 8;
    if (this.hasZ) size += 8;
    if (this.hasM) size += 8;
    return size;
};
Point.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.Point;
    if (typeof this.x === 'undefined' && typeof this.y === 'undefined') geoJSON.coordinates = [];
    else if (typeof this.z !== 'undefined') geoJSON.coordinates = [
        this.x,
        this.y,
        this.z
    ];
    else geoJSON.coordinates = [
        this.x,
        this.y
    ];
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/linestring.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = LineString;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function LineString(points, srid) {
    Geometry.call(this);
    this.points = points || [];
    this.srid = srid;
    if (this.points.length > 0) {
        this.hasZ = this.points[0].hasZ;
        this.hasM = this.points[0].hasM;
    }
}
util.inherits(LineString, Geometry);
LineString.Z = function(points, srid) {
    var lineString = new LineString(points, srid);
    lineString.hasZ = true;
    return lineString;
};
LineString.M = function(points, srid) {
    var lineString = new LineString(points, srid);
    lineString.hasM = true;
    return lineString;
};
LineString.ZM = function(points, srid) {
    var lineString = new LineString(points, srid);
    lineString.hasZ = true;
    lineString.hasM = true;
    return lineString;
};
LineString._parseWkt = function(value, options) {
    var lineString = new LineString();
    lineString.srid = options.srid;
    lineString.hasZ = options.hasZ;
    lineString.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return lineString;
    value.expectGroupStart();
    lineString.points.push.apply(lineString.points, value.matchCoordinates(options));
    value.expectGroupEnd();
    return lineString;
};
LineString._parseWkb = function(value, options) {
    var lineString = new LineString();
    lineString.srid = options.srid;
    lineString.hasZ = options.hasZ;
    lineString.hasM = options.hasM;
    var pointCount = value.readUInt32();
    for(var i = 0; i < pointCount; i++)lineString.points.push(Point._readWkbPoint(value, options));
    return lineString;
};
LineString._parseTwkb = function(value, options) {
    var lineString = new LineString();
    lineString.hasZ = options.hasZ;
    lineString.hasM = options.hasM;
    if (options.isEmpty) return lineString;
    var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
    var pointCount = value.readVarInt();
    for(var i = 0; i < pointCount; i++)lineString.points.push(Point._readTwkbPoint(value, options, previousPoint));
    return lineString;
};
LineString._parseGeoJSON = function(value) {
    var lineString = new LineString();
    if (value.coordinates.length > 0) lineString.hasZ = value.coordinates[0].length > 2;
    for(var i = 0; i < value.coordinates.length; i++)lineString.points.push(Point._readGeoJSONPoint(value.coordinates[i]));
    return lineString;
};
LineString.prototype.toWkt = function() {
    if (this.points.length === 0) return this._getWktType(Types.wkt.LineString, true);
    return this._getWktType(Types.wkt.LineString, false) + this._toInnerWkt();
};
LineString.prototype._toInnerWkt = function() {
    var innerWkt = '(';
    for(var i = 0; i < this.points.length; i++)innerWkt += this._getWktCoordinate(this.points[i]) + ',';
    innerWkt = innerWkt.slice(0, -1);
    innerWkt += ')';
    return innerWkt;
};
LineString.prototype.toWkb = function(parentOptions) {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.LineString, parentOptions);
    wkb.writeUInt32LE(this.points.length);
    for(var i = 0; i < this.points.length; i++)this.points[i]._writeWkbPoint(wkb);
    return wkb.buffer;
};
LineString.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.points.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.LineString, precision, isEmpty);
    if (this.points.length > 0) {
        twkb.writeVarInt(this.points.length);
        var previousPoint = new Point(0, 0, 0, 0);
        for(var i = 0; i < this.points.length; i++)this.points[i]._writeTwkbPoint(twkb, precision, previousPoint);
    }
    return twkb.buffer;
};
LineString.prototype._getWkbSize = function() {
    var coordinateSize = 16;
    if (this.hasZ) coordinateSize += 8;
    if (this.hasM) coordinateSize += 8;
    return 1 + 4 + 4 + this.points.length * coordinateSize;
};
LineString.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.LineString;
    geoJSON.coordinates = [];
    for(var i = 0; i < this.points.length; i++){
        if (this.hasZ) geoJSON.coordinates.push([
            this.points[i].x,
            this.points[i].y,
            this.points[i].z
        ]);
        else geoJSON.coordinates.push([
            this.points[i].x,
            this.points[i].y
        ]);
    }
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/polygon.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Polygon;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function Polygon(exteriorRing, interiorRings, srid) {
    Geometry.call(this);
    this.exteriorRing = exteriorRing || [];
    this.interiorRings = interiorRings || [];
    this.srid = srid;
    if (this.exteriorRing.length > 0) {
        this.hasZ = this.exteriorRing[0].hasZ;
        this.hasM = this.exteriorRing[0].hasM;
    }
}
util.inherits(Polygon, Geometry);
Polygon.Z = function(exteriorRing, interiorRings, srid) {
    var polygon = new Polygon(exteriorRing, interiorRings, srid);
    polygon.hasZ = true;
    return polygon;
};
Polygon.M = function(exteriorRing, interiorRings, srid) {
    var polygon = new Polygon(exteriorRing, interiorRings, srid);
    polygon.hasM = true;
    return polygon;
};
Polygon.ZM = function(exteriorRing, interiorRings, srid) {
    var polygon = new Polygon(exteriorRing, interiorRings, srid);
    polygon.hasZ = true;
    polygon.hasM = true;
    return polygon;
};
Polygon._parseWkt = function(value, options) {
    var polygon = new Polygon();
    polygon.srid = options.srid;
    polygon.hasZ = options.hasZ;
    polygon.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return polygon;
    value.expectGroupStart();
    value.expectGroupStart();
    polygon.exteriorRing.push.apply(polygon.exteriorRing, value.matchCoordinates(options));
    value.expectGroupEnd();
    while(value.isMatch([
        ','
    ])){
        value.expectGroupStart();
        polygon.interiorRings.push(value.matchCoordinates(options));
        value.expectGroupEnd();
    }
    value.expectGroupEnd();
    return polygon;
};
Polygon._parseWkb = function(value, options) {
    var polygon = new Polygon();
    polygon.srid = options.srid;
    polygon.hasZ = options.hasZ;
    polygon.hasM = options.hasM;
    var ringCount = value.readUInt32();
    if (ringCount > 0) {
        var exteriorRingCount = value.readUInt32();
        for(var i = 0; i < exteriorRingCount; i++)polygon.exteriorRing.push(Point._readWkbPoint(value, options));
        for(i = 1; i < ringCount; i++){
            var interiorRing = [];
            var interiorRingCount = value.readUInt32();
            for(var j = 0; j < interiorRingCount; j++)interiorRing.push(Point._readWkbPoint(value, options));
            polygon.interiorRings.push(interiorRing);
        }
    }
    return polygon;
};
Polygon._parseTwkb = function(value, options) {
    var polygon = new Polygon();
    polygon.hasZ = options.hasZ;
    polygon.hasM = options.hasM;
    if (options.isEmpty) return polygon;
    var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
    var ringCount = value.readVarInt();
    var exteriorRingCount = value.readVarInt();
    for(var i = 0; i < exteriorRingCount; i++)polygon.exteriorRing.push(Point._readTwkbPoint(value, options, previousPoint));
    for(i = 1; i < ringCount; i++){
        var interiorRing = [];
        var interiorRingCount = value.readVarInt();
        for(var j = 0; j < interiorRingCount; j++)interiorRing.push(Point._readTwkbPoint(value, options, previousPoint));
        polygon.interiorRings.push(interiorRing);
    }
    return polygon;
};
Polygon._parseGeoJSON = function(value) {
    var polygon = new Polygon();
    if (value.coordinates.length > 0 && value.coordinates[0].length > 0) polygon.hasZ = value.coordinates[0][0].length > 2;
    for(var i = 0; i < value.coordinates.length; i++){
        if (i > 0) polygon.interiorRings.push([]);
        for(var j = 0; j < value.coordinates[i].length; j++){
            if (i === 0) polygon.exteriorRing.push(Point._readGeoJSONPoint(value.coordinates[i][j]));
            else polygon.interiorRings[i - 1].push(Point._readGeoJSONPoint(value.coordinates[i][j]));
        }
    }
    return polygon;
};
Polygon.prototype.toWkt = function() {
    if (this.exteriorRing.length === 0) return this._getWktType(Types.wkt.Polygon, true);
    return this._getWktType(Types.wkt.Polygon, false) + this._toInnerWkt();
};
Polygon.prototype._toInnerWkt = function() {
    var innerWkt = '((';
    for(var i = 0; i < this.exteriorRing.length; i++)innerWkt += this._getWktCoordinate(this.exteriorRing[i]) + ',';
    innerWkt = innerWkt.slice(0, -1);
    innerWkt += ')';
    for(i = 0; i < this.interiorRings.length; i++){
        innerWkt += ',(';
        for(var j = 0; j < this.interiorRings[i].length; j++){
            innerWkt += this._getWktCoordinate(this.interiorRings[i][j]) + ',';
        }
        innerWkt = innerWkt.slice(0, -1);
        innerWkt += ')';
    }
    innerWkt += ')';
    return innerWkt;
};
Polygon.prototype.toWkb = function(parentOptions) {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.Polygon, parentOptions);
    if (this.exteriorRing.length > 0) {
        wkb.writeUInt32LE(1 + this.interiorRings.length);
        wkb.writeUInt32LE(this.exteriorRing.length);
    } else {
        wkb.writeUInt32LE(0);
    }
    for(var i = 0; i < this.exteriorRing.length; i++)this.exteriorRing[i]._writeWkbPoint(wkb);
    for(i = 0; i < this.interiorRings.length; i++){
        wkb.writeUInt32LE(this.interiorRings[i].length);
        for(var j = 0; j < this.interiorRings[i].length; j++)this.interiorRings[i][j]._writeWkbPoint(wkb);
    }
    return wkb.buffer;
};
Polygon.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.exteriorRing.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.Polygon, precision, isEmpty);
    if (this.exteriorRing.length > 0) {
        twkb.writeVarInt(1 + this.interiorRings.length);
        twkb.writeVarInt(this.exteriorRing.length);
        var previousPoint = new Point(0, 0, 0, 0);
        for(var i = 0; i < this.exteriorRing.length; i++)this.exteriorRing[i]._writeTwkbPoint(twkb, precision, previousPoint);
        for(i = 0; i < this.interiorRings.length; i++){
            twkb.writeVarInt(this.interiorRings[i].length);
            for(var j = 0; j < this.interiorRings[i].length; j++)this.interiorRings[i][j]._writeTwkbPoint(twkb, precision, previousPoint);
        }
    }
    return twkb.buffer;
};
Polygon.prototype._getWkbSize = function() {
    var coordinateSize = 16;
    if (this.hasZ) coordinateSize += 8;
    if (this.hasM) coordinateSize += 8;
    var size = 1 + 4 + 4;
    if (this.exteriorRing.length > 0) size += 4 + this.exteriorRing.length * coordinateSize;
    for(var i = 0; i < this.interiorRings.length; i++)size += 4 + this.interiorRings[i].length * coordinateSize;
    return size;
};
Polygon.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.Polygon;
    geoJSON.coordinates = [];
    if (this.exteriorRing.length > 0) {
        var exteriorRing = [];
        for(var i = 0; i < this.exteriorRing.length; i++){
            if (this.hasZ) exteriorRing.push([
                this.exteriorRing[i].x,
                this.exteriorRing[i].y,
                this.exteriorRing[i].z
            ]);
            else exteriorRing.push([
                this.exteriorRing[i].x,
                this.exteriorRing[i].y
            ]);
        }
        geoJSON.coordinates.push(exteriorRing);
    }
    for(var j = 0; j < this.interiorRings.length; j++){
        var interiorRing = [];
        for(var k = 0; k < this.interiorRings[j].length; k++){
            if (this.hasZ) interiorRing.push([
                this.interiorRings[j][k].x,
                this.interiorRings[j][k].y,
                this.interiorRings[j][k].z
            ]);
            else interiorRing.push([
                this.interiorRings[j][k].x,
                this.interiorRings[j][k].y
            ]);
        }
        geoJSON.coordinates.push(interiorRing);
    }
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/multipoint.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = MultiPoint;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function MultiPoint(points, srid) {
    Geometry.call(this);
    this.points = points || [];
    this.srid = srid;
    if (this.points.length > 0) {
        this.hasZ = this.points[0].hasZ;
        this.hasM = this.points[0].hasM;
    }
}
util.inherits(MultiPoint, Geometry);
MultiPoint.Z = function(points, srid) {
    var multiPoint = new MultiPoint(points, srid);
    multiPoint.hasZ = true;
    return multiPoint;
};
MultiPoint.M = function(points, srid) {
    var multiPoint = new MultiPoint(points, srid);
    multiPoint.hasM = true;
    return multiPoint;
};
MultiPoint.ZM = function(points, srid) {
    var multiPoint = new MultiPoint(points, srid);
    multiPoint.hasZ = true;
    multiPoint.hasM = true;
    return multiPoint;
};
MultiPoint._parseWkt = function(value, options) {
    var multiPoint = new MultiPoint();
    multiPoint.srid = options.srid;
    multiPoint.hasZ = options.hasZ;
    multiPoint.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return multiPoint;
    value.expectGroupStart();
    multiPoint.points.push.apply(multiPoint.points, value.matchCoordinates(options));
    value.expectGroupEnd();
    return multiPoint;
};
MultiPoint._parseWkb = function(value, options) {
    var multiPoint = new MultiPoint();
    multiPoint.srid = options.srid;
    multiPoint.hasZ = options.hasZ;
    multiPoint.hasM = options.hasM;
    var pointCount = value.readUInt32();
    for(var i = 0; i < pointCount; i++)multiPoint.points.push(Geometry.parse(value, options));
    return multiPoint;
};
MultiPoint._parseTwkb = function(value, options) {
    var multiPoint = new MultiPoint();
    multiPoint.hasZ = options.hasZ;
    multiPoint.hasM = options.hasM;
    if (options.isEmpty) return multiPoint;
    var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
    var pointCount = value.readVarInt();
    for(var i = 0; i < pointCount; i++)multiPoint.points.push(Point._readTwkbPoint(value, options, previousPoint));
    return multiPoint;
};
MultiPoint._parseGeoJSON = function(value) {
    var multiPoint = new MultiPoint();
    if (value.coordinates.length > 0) multiPoint.hasZ = value.coordinates[0].length > 2;
    for(var i = 0; i < value.coordinates.length; i++)multiPoint.points.push(Point._parseGeoJSON({
        coordinates: value.coordinates[i]
    }));
    return multiPoint;
};
MultiPoint.prototype.toWkt = function() {
    if (this.points.length === 0) return this._getWktType(Types.wkt.MultiPoint, true);
    var wkt = this._getWktType(Types.wkt.MultiPoint, false) + '(';
    for(var i = 0; i < this.points.length; i++)wkt += this._getWktCoordinate(this.points[i]) + ',';
    wkt = wkt.slice(0, -1);
    wkt += ')';
    return wkt;
};
MultiPoint.prototype.toWkb = function() {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.MultiPoint);
    wkb.writeUInt32LE(this.points.length);
    for(var i = 0; i < this.points.length; i++)wkb.writeBuffer(this.points[i].toWkb({
        srid: this.srid
    }));
    return wkb.buffer;
};
MultiPoint.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.points.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.MultiPoint, precision, isEmpty);
    if (this.points.length > 0) {
        twkb.writeVarInt(this.points.length);
        var previousPoint = new Point(0, 0, 0, 0);
        for(var i = 0; i < this.points.length; i++)this.points[i]._writeTwkbPoint(twkb, precision, previousPoint);
    }
    return twkb.buffer;
};
MultiPoint.prototype._getWkbSize = function() {
    var coordinateSize = 16;
    if (this.hasZ) coordinateSize += 8;
    if (this.hasM) coordinateSize += 8;
    coordinateSize += 5;
    return 1 + 4 + 4 + this.points.length * coordinateSize;
};
MultiPoint.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.MultiPoint;
    geoJSON.coordinates = [];
    for(var i = 0; i < this.points.length; i++)geoJSON.coordinates.push(this.points[i].toGeoJSON().coordinates);
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/multilinestring.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = MultiLineString;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var LineString = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/linestring.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function MultiLineString(lineStrings, srid) {
    Geometry.call(this);
    this.lineStrings = lineStrings || [];
    this.srid = srid;
    if (this.lineStrings.length > 0) {
        this.hasZ = this.lineStrings[0].hasZ;
        this.hasM = this.lineStrings[0].hasM;
    }
}
util.inherits(MultiLineString, Geometry);
MultiLineString.Z = function(lineStrings, srid) {
    var multiLineString = new MultiLineString(lineStrings, srid);
    multiLineString.hasZ = true;
    return multiLineString;
};
MultiLineString.M = function(lineStrings, srid) {
    var multiLineString = new MultiLineString(lineStrings, srid);
    multiLineString.hasM = true;
    return multiLineString;
};
MultiLineString.ZM = function(lineStrings, srid) {
    var multiLineString = new MultiLineString(lineStrings, srid);
    multiLineString.hasZ = true;
    multiLineString.hasM = true;
    return multiLineString;
};
MultiLineString._parseWkt = function(value, options) {
    var multiLineString = new MultiLineString();
    multiLineString.srid = options.srid;
    multiLineString.hasZ = options.hasZ;
    multiLineString.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return multiLineString;
    value.expectGroupStart();
    do {
        value.expectGroupStart();
        multiLineString.lineStrings.push(new LineString(value.matchCoordinates(options)));
        value.expectGroupEnd();
    }while (value.isMatch([
        ','
    ]))
    value.expectGroupEnd();
    return multiLineString;
};
MultiLineString._parseWkb = function(value, options) {
    var multiLineString = new MultiLineString();
    multiLineString.srid = options.srid;
    multiLineString.hasZ = options.hasZ;
    multiLineString.hasM = options.hasM;
    var lineStringCount = value.readUInt32();
    for(var i = 0; i < lineStringCount; i++)multiLineString.lineStrings.push(Geometry.parse(value, options));
    return multiLineString;
};
MultiLineString._parseTwkb = function(value, options) {
    var multiLineString = new MultiLineString();
    multiLineString.hasZ = options.hasZ;
    multiLineString.hasM = options.hasM;
    if (options.isEmpty) return multiLineString;
    var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
    var lineStringCount = value.readVarInt();
    for(var i = 0; i < lineStringCount; i++){
        var lineString = new LineString();
        lineString.hasZ = options.hasZ;
        lineString.hasM = options.hasM;
        var pointCount = value.readVarInt();
        for(var j = 0; j < pointCount; j++)lineString.points.push(Point._readTwkbPoint(value, options, previousPoint));
        multiLineString.lineStrings.push(lineString);
    }
    return multiLineString;
};
MultiLineString._parseGeoJSON = function(value) {
    var multiLineString = new MultiLineString();
    if (value.coordinates.length > 0 && value.coordinates[0].length > 0) multiLineString.hasZ = value.coordinates[0][0].length > 2;
    for(var i = 0; i < value.coordinates.length; i++)multiLineString.lineStrings.push(LineString._parseGeoJSON({
        coordinates: value.coordinates[i]
    }));
    return multiLineString;
};
MultiLineString.prototype.toWkt = function() {
    if (this.lineStrings.length === 0) return this._getWktType(Types.wkt.MultiLineString, true);
    var wkt = this._getWktType(Types.wkt.MultiLineString, false) + '(';
    for(var i = 0; i < this.lineStrings.length; i++)wkt += this.lineStrings[i]._toInnerWkt() + ',';
    wkt = wkt.slice(0, -1);
    wkt += ')';
    return wkt;
};
MultiLineString.prototype.toWkb = function() {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.MultiLineString);
    wkb.writeUInt32LE(this.lineStrings.length);
    for(var i = 0; i < this.lineStrings.length; i++)wkb.writeBuffer(this.lineStrings[i].toWkb({
        srid: this.srid
    }));
    return wkb.buffer;
};
MultiLineString.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.lineStrings.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.MultiLineString, precision, isEmpty);
    if (this.lineStrings.length > 0) {
        twkb.writeVarInt(this.lineStrings.length);
        var previousPoint = new Point(0, 0, 0, 0);
        for(var i = 0; i < this.lineStrings.length; i++){
            twkb.writeVarInt(this.lineStrings[i].points.length);
            for(var j = 0; j < this.lineStrings[i].points.length; j++)this.lineStrings[i].points[j]._writeTwkbPoint(twkb, precision, previousPoint);
        }
    }
    return twkb.buffer;
};
MultiLineString.prototype._getWkbSize = function() {
    var size = 1 + 4 + 4;
    for(var i = 0; i < this.lineStrings.length; i++)size += this.lineStrings[i]._getWkbSize();
    return size;
};
MultiLineString.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.MultiLineString;
    geoJSON.coordinates = [];
    for(var i = 0; i < this.lineStrings.length; i++)geoJSON.coordinates.push(this.lineStrings[i].toGeoJSON().coordinates);
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/multipolygon.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = MultiPolygon;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var Polygon = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/polygon.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function MultiPolygon(polygons, srid) {
    Geometry.call(this);
    this.polygons = polygons || [];
    this.srid = srid;
    if (this.polygons.length > 0) {
        this.hasZ = this.polygons[0].hasZ;
        this.hasM = this.polygons[0].hasM;
    }
}
util.inherits(MultiPolygon, Geometry);
MultiPolygon.Z = function(polygons, srid) {
    var multiPolygon = new MultiPolygon(polygons, srid);
    multiPolygon.hasZ = true;
    return multiPolygon;
};
MultiPolygon.M = function(polygons, srid) {
    var multiPolygon = new MultiPolygon(polygons, srid);
    multiPolygon.hasM = true;
    return multiPolygon;
};
MultiPolygon.ZM = function(polygons, srid) {
    var multiPolygon = new MultiPolygon(polygons, srid);
    multiPolygon.hasZ = true;
    multiPolygon.hasM = true;
    return multiPolygon;
};
MultiPolygon._parseWkt = function(value, options) {
    var multiPolygon = new MultiPolygon();
    multiPolygon.srid = options.srid;
    multiPolygon.hasZ = options.hasZ;
    multiPolygon.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return multiPolygon;
    value.expectGroupStart();
    do {
        value.expectGroupStart();
        var exteriorRing = [];
        var interiorRings = [];
        value.expectGroupStart();
        exteriorRing.push.apply(exteriorRing, value.matchCoordinates(options));
        value.expectGroupEnd();
        while(value.isMatch([
            ','
        ])){
            value.expectGroupStart();
            interiorRings.push(value.matchCoordinates(options));
            value.expectGroupEnd();
        }
        multiPolygon.polygons.push(new Polygon(exteriorRing, interiorRings));
        value.expectGroupEnd();
    }while (value.isMatch([
        ','
    ]))
    value.expectGroupEnd();
    return multiPolygon;
};
MultiPolygon._parseWkb = function(value, options) {
    var multiPolygon = new MultiPolygon();
    multiPolygon.srid = options.srid;
    multiPolygon.hasZ = options.hasZ;
    multiPolygon.hasM = options.hasM;
    var polygonCount = value.readUInt32();
    for(var i = 0; i < polygonCount; i++)multiPolygon.polygons.push(Geometry.parse(value, options));
    return multiPolygon;
};
MultiPolygon._parseTwkb = function(value, options) {
    var multiPolygon = new MultiPolygon();
    multiPolygon.hasZ = options.hasZ;
    multiPolygon.hasM = options.hasM;
    if (options.isEmpty) return multiPolygon;
    var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
    var polygonCount = value.readVarInt();
    for(var i = 0; i < polygonCount; i++){
        var polygon = new Polygon();
        polygon.hasZ = options.hasZ;
        polygon.hasM = options.hasM;
        var ringCount = value.readVarInt();
        var exteriorRingCount = value.readVarInt();
        for(var j = 0; j < exteriorRingCount; j++)polygon.exteriorRing.push(Point._readTwkbPoint(value, options, previousPoint));
        for(j = 1; j < ringCount; j++){
            var interiorRing = [];
            var interiorRingCount = value.readVarInt();
            for(var k = 0; k < interiorRingCount; k++)interiorRing.push(Point._readTwkbPoint(value, options, previousPoint));
            polygon.interiorRings.push(interiorRing);
        }
        multiPolygon.polygons.push(polygon);
    }
    return multiPolygon;
};
MultiPolygon._parseGeoJSON = function(value) {
    var multiPolygon = new MultiPolygon();
    if (value.coordinates.length > 0 && value.coordinates[0].length > 0 && value.coordinates[0][0].length > 0) multiPolygon.hasZ = value.coordinates[0][0][0].length > 2;
    for(var i = 0; i < value.coordinates.length; i++)multiPolygon.polygons.push(Polygon._parseGeoJSON({
        coordinates: value.coordinates[i]
    }));
    return multiPolygon;
};
MultiPolygon.prototype.toWkt = function() {
    if (this.polygons.length === 0) return this._getWktType(Types.wkt.MultiPolygon, true);
    var wkt = this._getWktType(Types.wkt.MultiPolygon, false) + '(';
    for(var i = 0; i < this.polygons.length; i++)wkt += this.polygons[i]._toInnerWkt() + ',';
    wkt = wkt.slice(0, -1);
    wkt += ')';
    return wkt;
};
MultiPolygon.prototype.toWkb = function() {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.MultiPolygon);
    wkb.writeUInt32LE(this.polygons.length);
    for(var i = 0; i < this.polygons.length; i++)wkb.writeBuffer(this.polygons[i].toWkb({
        srid: this.srid
    }));
    return wkb.buffer;
};
MultiPolygon.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.polygons.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.MultiPolygon, precision, isEmpty);
    if (this.polygons.length > 0) {
        twkb.writeVarInt(this.polygons.length);
        var previousPoint = new Point(0, 0, 0, 0);
        for(var i = 0; i < this.polygons.length; i++){
            twkb.writeVarInt(1 + this.polygons[i].interiorRings.length);
            twkb.writeVarInt(this.polygons[i].exteriorRing.length);
            for(var j = 0; j < this.polygons[i].exteriorRing.length; j++)this.polygons[i].exteriorRing[j]._writeTwkbPoint(twkb, precision, previousPoint);
            for(j = 0; j < this.polygons[i].interiorRings.length; j++){
                twkb.writeVarInt(this.polygons[i].interiorRings[j].length);
                for(var k = 0; k < this.polygons[i].interiorRings[j].length; k++)this.polygons[i].interiorRings[j][k]._writeTwkbPoint(twkb, precision, previousPoint);
            }
        }
    }
    return twkb.buffer;
};
MultiPolygon.prototype._getWkbSize = function() {
    var size = 1 + 4 + 4;
    for(var i = 0; i < this.polygons.length; i++)size += this.polygons[i]._getWkbSize();
    return size;
};
MultiPolygon.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.MultiPolygon;
    geoJSON.coordinates = [];
    for(var i = 0; i < this.polygons.length; i++)geoJSON.coordinates.push(this.polygons[i].toGeoJSON().coordinates);
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/geometrycollection.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = GeometryCollection;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
function GeometryCollection(geometries, srid) {
    Geometry.call(this);
    this.geometries = geometries || [];
    this.srid = srid;
    if (this.geometries.length > 0) {
        this.hasZ = this.geometries[0].hasZ;
        this.hasM = this.geometries[0].hasM;
    }
}
util.inherits(GeometryCollection, Geometry);
GeometryCollection.Z = function(geometries, srid) {
    var geometryCollection = new GeometryCollection(geometries, srid);
    geometryCollection.hasZ = true;
    return geometryCollection;
};
GeometryCollection.M = function(geometries, srid) {
    var geometryCollection = new GeometryCollection(geometries, srid);
    geometryCollection.hasM = true;
    return geometryCollection;
};
GeometryCollection.ZM = function(geometries, srid) {
    var geometryCollection = new GeometryCollection(geometries, srid);
    geometryCollection.hasZ = true;
    geometryCollection.hasM = true;
    return geometryCollection;
};
GeometryCollection._parseWkt = function(value, options) {
    var geometryCollection = new GeometryCollection();
    geometryCollection.srid = options.srid;
    geometryCollection.hasZ = options.hasZ;
    geometryCollection.hasM = options.hasM;
    if (value.isMatch([
        'EMPTY'
    ])) return geometryCollection;
    value.expectGroupStart();
    do {
        geometryCollection.geometries.push(Geometry.parse(value));
    }while (value.isMatch([
        ','
    ]))
    value.expectGroupEnd();
    return geometryCollection;
};
GeometryCollection._parseWkb = function(value, options) {
    var geometryCollection = new GeometryCollection();
    geometryCollection.srid = options.srid;
    geometryCollection.hasZ = options.hasZ;
    geometryCollection.hasM = options.hasM;
    var geometryCount = value.readUInt32();
    for(var i = 0; i < geometryCount; i++)geometryCollection.geometries.push(Geometry.parse(value, options));
    return geometryCollection;
};
GeometryCollection._parseTwkb = function(value, options) {
    var geometryCollection = new GeometryCollection();
    geometryCollection.hasZ = options.hasZ;
    geometryCollection.hasM = options.hasM;
    if (options.isEmpty) return geometryCollection;
    var geometryCount = value.readVarInt();
    for(var i = 0; i < geometryCount; i++)geometryCollection.geometries.push(Geometry.parseTwkb(value));
    return geometryCollection;
};
GeometryCollection._parseGeoJSON = function(value) {
    var geometryCollection = new GeometryCollection();
    for(var i = 0; i < value.geometries.length; i++)geometryCollection.geometries.push(Geometry._parseGeoJSON(value.geometries[i], true));
    if (geometryCollection.geometries.length > 0) geometryCollection.hasZ = geometryCollection.geometries[0].hasZ;
    return geometryCollection;
};
GeometryCollection.prototype.toWkt = function() {
    if (this.geometries.length === 0) return this._getWktType(Types.wkt.GeometryCollection, true);
    var wkt = this._getWktType(Types.wkt.GeometryCollection, false) + '(';
    for(var i = 0; i < this.geometries.length; i++)wkt += this.geometries[i].toWkt() + ',';
    wkt = wkt.slice(0, -1);
    wkt += ')';
    return wkt;
};
GeometryCollection.prototype.toWkb = function() {
    var wkb = new BinaryWriter(this._getWkbSize());
    wkb.writeInt8(1);
    this._writeWkbType(wkb, Types.wkb.GeometryCollection);
    wkb.writeUInt32LE(this.geometries.length);
    for(var i = 0; i < this.geometries.length; i++)wkb.writeBuffer(this.geometries[i].toWkb({
        srid: this.srid
    }));
    return wkb.buffer;
};
GeometryCollection.prototype.toTwkb = function() {
    var twkb = new BinaryWriter(0, true);
    var precision = Geometry.getTwkbPrecision(5, 0, 0);
    var isEmpty = this.geometries.length === 0;
    this._writeTwkbHeader(twkb, Types.wkb.GeometryCollection, precision, isEmpty);
    if (this.geometries.length > 0) {
        twkb.writeVarInt(this.geometries.length);
        for(var i = 0; i < this.geometries.length; i++)twkb.writeBuffer(this.geometries[i].toTwkb());
    }
    return twkb.buffer;
};
GeometryCollection.prototype._getWkbSize = function() {
    var size = 1 + 4 + 4;
    for(var i = 0; i < this.geometries.length; i++)size += this.geometries[i]._getWkbSize();
    return size;
};
GeometryCollection.prototype.toGeoJSON = function(options) {
    var geoJSON = Geometry.prototype.toGeoJSON.call(this, options);
    geoJSON.type = Types.geoJSON.GeometryCollection;
    geoJSON.geometries = [];
    for(var i = 0; i < this.geometries.length; i++)geoJSON.geometries.push(this.geometries[i].toGeoJSON());
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/binaryreader.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = BinaryReader;
function BinaryReader(buffer, isBigEndian) {
    this.buffer = buffer;
    this.position = 0;
    this.isBigEndian = isBigEndian || false;
}
function _read(readLE, readBE, size) {
    return function() {
        var value;
        if (this.isBigEndian) value = readBE.call(this.buffer, this.position);
        else value = readLE.call(this.buffer, this.position);
        this.position += size;
        return value;
    };
}
BinaryReader.prototype.readUInt8 = _read(Buffer.prototype.readUInt8, Buffer.prototype.readUInt8, 1);
BinaryReader.prototype.readUInt16 = _read(Buffer.prototype.readUInt16LE, Buffer.prototype.readUInt16BE, 2);
BinaryReader.prototype.readUInt32 = _read(Buffer.prototype.readUInt32LE, Buffer.prototype.readUInt32BE, 4);
BinaryReader.prototype.readInt8 = _read(Buffer.prototype.readInt8, Buffer.prototype.readInt8, 1);
BinaryReader.prototype.readInt16 = _read(Buffer.prototype.readInt16LE, Buffer.prototype.readInt16BE, 2);
BinaryReader.prototype.readInt32 = _read(Buffer.prototype.readInt32LE, Buffer.prototype.readInt32BE, 4);
BinaryReader.prototype.readFloat = _read(Buffer.prototype.readFloatLE, Buffer.prototype.readFloatBE, 4);
BinaryReader.prototype.readDouble = _read(Buffer.prototype.readDoubleLE, Buffer.prototype.readDoubleBE, 8);
BinaryReader.prototype.readVarInt = function() {
    var nextByte, result = 0, bytesRead = 0;
    do {
        nextByte = this.buffer[this.position + bytesRead];
        result += (nextByte & 0x7F) << 7 * bytesRead;
        bytesRead++;
    }while (nextByte >= 0x80)
    this.position += bytesRead;
    return result;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/wktparser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = WktParser;
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
function WktParser(value) {
    this.value = value;
    this.position = 0;
}
WktParser.prototype.match = function(tokens) {
    this.skipWhitespaces();
    for(var i = 0; i < tokens.length; i++){
        if (this.value.substring(this.position).indexOf(tokens[i]) === 0) {
            this.position += tokens[i].length;
            return tokens[i];
        }
    }
    return null;
};
WktParser.prototype.matchRegex = function(tokens) {
    this.skipWhitespaces();
    for(var i = 0; i < tokens.length; i++){
        var match = this.value.substring(this.position).match(tokens[i]);
        if (match) {
            this.position += match[0].length;
            return match;
        }
    }
    return null;
};
WktParser.prototype.isMatch = function(tokens) {
    this.skipWhitespaces();
    for(var i = 0; i < tokens.length; i++){
        if (this.value.substring(this.position).indexOf(tokens[i]) === 0) {
            this.position += tokens[i].length;
            return true;
        }
    }
    return false;
};
WktParser.prototype.matchType = function() {
    var geometryType = this.match([
        Types.wkt.Point,
        Types.wkt.LineString,
        Types.wkt.Polygon,
        Types.wkt.MultiPoint,
        Types.wkt.MultiLineString,
        Types.wkt.MultiPolygon,
        Types.wkt.GeometryCollection
    ]);
    if (!geometryType) throw new Error('Expected geometry type');
    return geometryType;
};
WktParser.prototype.matchDimension = function() {
    var dimension = this.match([
        'ZM',
        'Z',
        'M'
    ]);
    switch(dimension){
        case 'ZM':
            return {
                hasZ: true,
                hasM: true
            };
        case 'Z':
            return {
                hasZ: true,
                hasM: false
            };
        case 'M':
            return {
                hasZ: false,
                hasM: true
            };
        default:
            return {
                hasZ: false,
                hasM: false
            };
    }
};
WktParser.prototype.expectGroupStart = function() {
    if (!this.isMatch([
        '('
    ])) throw new Error('Expected group start');
};
WktParser.prototype.expectGroupEnd = function() {
    if (!this.isMatch([
        ')'
    ])) throw new Error('Expected group end');
};
WktParser.prototype.matchCoordinate = function(options) {
    var match;
    if (options.hasZ && options.hasM) match = this.matchRegex([
        /^(\S*)\s+(\S*)\s+(\S*)\s+([^\s,)]*)/
    ]);
    else if (options.hasZ || options.hasM) match = this.matchRegex([
        /^(\S*)\s+(\S*)\s+([^\s,)]*)/
    ]);
    else match = this.matchRegex([
        /^(\S*)\s+([^\s,)]*)/
    ]);
    if (!match) throw new Error('Expected coordinates');
    if (options.hasZ && options.hasM) return new Point(parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3]), parseFloat(match[4]));
    else if (options.hasZ) return new Point(parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3]));
    else if (options.hasM) return new Point(parseFloat(match[1]), parseFloat(match[2]), undefined, parseFloat(match[3]));
    else return new Point(parseFloat(match[1]), parseFloat(match[2]));
};
WktParser.prototype.matchCoordinates = function(options) {
    var coordinates = [];
    do {
        var startsWithBracket = this.isMatch([
            '('
        ]);
        coordinates.push(this.matchCoordinate(options));
        if (startsWithBracket) this.expectGroupEnd();
    }while (this.isMatch([
        ','
    ]))
    return coordinates;
};
WktParser.prototype.skipWhitespaces = function() {
    while(this.position < this.value.length && this.value[this.position] === ' ')this.position++;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Geometry;
var Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
var Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
var LineString = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/linestring.js [app-route] (ecmascript)");
var Polygon = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/polygon.js [app-route] (ecmascript)");
var MultiPoint = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multipoint.js [app-route] (ecmascript)");
var MultiLineString = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multilinestring.js [app-route] (ecmascript)");
var MultiPolygon = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multipolygon.js [app-route] (ecmascript)");
var GeometryCollection = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometrycollection.js [app-route] (ecmascript)");
var BinaryReader = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binaryreader.js [app-route] (ecmascript)");
var BinaryWriter = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/binarywriter.js [app-route] (ecmascript)");
var WktParser = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/wktparser.js [app-route] (ecmascript)");
var ZigZag = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/zigzag.js [app-route] (ecmascript)");
function Geometry() {
    this.srid = undefined;
    this.hasZ = false;
    this.hasM = false;
}
Geometry.parse = function(value, options) {
    var valueType = typeof value;
    if (valueType === 'string' || value instanceof WktParser) return Geometry._parseWkt(value);
    else if (Buffer.isBuffer(value) || value instanceof BinaryReader) return Geometry._parseWkb(value, options);
    else throw new Error('first argument must be a string or Buffer');
};
Geometry._parseWkt = function(value) {
    var wktParser, srid;
    if (value instanceof WktParser) wktParser = value;
    else wktParser = new WktParser(value);
    var match = wktParser.matchRegex([
        /^SRID=(\d+);/
    ]);
    if (match) srid = parseInt(match[1], 10);
    var geometryType = wktParser.matchType();
    var dimension = wktParser.matchDimension();
    var options = {
        srid: srid,
        hasZ: dimension.hasZ,
        hasM: dimension.hasM
    };
    switch(geometryType){
        case Types.wkt.Point:
            return Point._parseWkt(wktParser, options);
        case Types.wkt.LineString:
            return LineString._parseWkt(wktParser, options);
        case Types.wkt.Polygon:
            return Polygon._parseWkt(wktParser, options);
        case Types.wkt.MultiPoint:
            return MultiPoint._parseWkt(wktParser, options);
        case Types.wkt.MultiLineString:
            return MultiLineString._parseWkt(wktParser, options);
        case Types.wkt.MultiPolygon:
            return MultiPolygon._parseWkt(wktParser, options);
        case Types.wkt.GeometryCollection:
            return GeometryCollection._parseWkt(wktParser, options);
    }
};
Geometry._parseWkb = function(value, parentOptions) {
    var binaryReader, wkbType, geometryType, options = {};
    if (value instanceof BinaryReader) binaryReader = value;
    else binaryReader = new BinaryReader(value);
    binaryReader.isBigEndian = !binaryReader.readInt8();
    wkbType = binaryReader.readUInt32();
    options.hasSrid = (wkbType & 0x20000000) === 0x20000000;
    options.isEwkb = wkbType & 0x20000000 || wkbType & 0x40000000 || wkbType & 0x80000000;
    if (options.hasSrid) options.srid = binaryReader.readUInt32();
    options.hasZ = false;
    options.hasM = false;
    if (!options.isEwkb && (!parentOptions || !parentOptions.isEwkb)) {
        if (wkbType >= 1000 && wkbType < 2000) {
            options.hasZ = true;
            geometryType = wkbType - 1000;
        } else if (wkbType >= 2000 && wkbType < 3000) {
            options.hasM = true;
            geometryType = wkbType - 2000;
        } else if (wkbType >= 3000 && wkbType < 4000) {
            options.hasZ = true;
            options.hasM = true;
            geometryType = wkbType - 3000;
        } else {
            geometryType = wkbType;
        }
    } else {
        if (wkbType & 0x80000000) options.hasZ = true;
        if (wkbType & 0x40000000) options.hasM = true;
        geometryType = wkbType & 0xF;
    }
    switch(geometryType){
        case Types.wkb.Point:
            return Point._parseWkb(binaryReader, options);
        case Types.wkb.LineString:
            return LineString._parseWkb(binaryReader, options);
        case Types.wkb.Polygon:
            return Polygon._parseWkb(binaryReader, options);
        case Types.wkb.MultiPoint:
            return MultiPoint._parseWkb(binaryReader, options);
        case Types.wkb.MultiLineString:
            return MultiLineString._parseWkb(binaryReader, options);
        case Types.wkb.MultiPolygon:
            return MultiPolygon._parseWkb(binaryReader, options);
        case Types.wkb.GeometryCollection:
            return GeometryCollection._parseWkb(binaryReader, options);
        default:
            throw new Error('GeometryType ' + geometryType + ' not supported');
    }
};
Geometry.parseTwkb = function(value) {
    var binaryReader, options = {};
    if (value instanceof BinaryReader) binaryReader = value;
    else binaryReader = new BinaryReader(value);
    var type = binaryReader.readUInt8();
    var metadataHeader = binaryReader.readUInt8();
    var geometryType = type & 0x0F;
    options.precision = ZigZag.decode(type >> 4);
    options.precisionFactor = Math.pow(10, options.precision);
    options.hasBoundingBox = metadataHeader >> 0 & 1;
    options.hasSizeAttribute = metadataHeader >> 1 & 1;
    options.hasIdList = metadataHeader >> 2 & 1;
    options.hasExtendedPrecision = metadataHeader >> 3 & 1;
    options.isEmpty = metadataHeader >> 4 & 1;
    if (options.hasExtendedPrecision) {
        var extendedPrecision = binaryReader.readUInt8();
        options.hasZ = (extendedPrecision & 0x01) === 0x01;
        options.hasM = (extendedPrecision & 0x02) === 0x02;
        options.zPrecision = ZigZag.decode((extendedPrecision & 0x1C) >> 2);
        options.zPrecisionFactor = Math.pow(10, options.zPrecision);
        options.mPrecision = ZigZag.decode((extendedPrecision & 0xE0) >> 5);
        options.mPrecisionFactor = Math.pow(10, options.mPrecision);
    } else {
        options.hasZ = false;
        options.hasM = false;
    }
    if (options.hasSizeAttribute) binaryReader.readVarInt();
    if (options.hasBoundingBox) {
        var dimensions = 2;
        if (options.hasZ) dimensions++;
        if (options.hasM) dimensions++;
        for(var i = 0; i < dimensions; i++){
            binaryReader.readVarInt();
            binaryReader.readVarInt();
        }
    }
    switch(geometryType){
        case Types.wkb.Point:
            return Point._parseTwkb(binaryReader, options);
        case Types.wkb.LineString:
            return LineString._parseTwkb(binaryReader, options);
        case Types.wkb.Polygon:
            return Polygon._parseTwkb(binaryReader, options);
        case Types.wkb.MultiPoint:
            return MultiPoint._parseTwkb(binaryReader, options);
        case Types.wkb.MultiLineString:
            return MultiLineString._parseTwkb(binaryReader, options);
        case Types.wkb.MultiPolygon:
            return MultiPolygon._parseTwkb(binaryReader, options);
        case Types.wkb.GeometryCollection:
            return GeometryCollection._parseTwkb(binaryReader, options);
        default:
            throw new Error('GeometryType ' + geometryType + ' not supported');
    }
};
Geometry.parseGeoJSON = function(value) {
    return Geometry._parseGeoJSON(value);
};
Geometry._parseGeoJSON = function(value, isSubGeometry) {
    var geometry;
    switch(value.type){
        case Types.geoJSON.Point:
            geometry = Point._parseGeoJSON(value);
            break;
        case Types.geoJSON.LineString:
            geometry = LineString._parseGeoJSON(value);
            break;
        case Types.geoJSON.Polygon:
            geometry = Polygon._parseGeoJSON(value);
            break;
        case Types.geoJSON.MultiPoint:
            geometry = MultiPoint._parseGeoJSON(value);
            break;
        case Types.geoJSON.MultiLineString:
            geometry = MultiLineString._parseGeoJSON(value);
            break;
        case Types.geoJSON.MultiPolygon:
            geometry = MultiPolygon._parseGeoJSON(value);
            break;
        case Types.geoJSON.GeometryCollection:
            geometry = GeometryCollection._parseGeoJSON(value);
            break;
        default:
            throw new Error('GeometryType ' + value.type + ' not supported');
    }
    if (value.crs && value.crs.type && value.crs.type === 'name' && value.crs.properties && value.crs.properties.name) {
        var crs = value.crs.properties.name;
        if (crs.indexOf('EPSG:') === 0) geometry.srid = parseInt(crs.substring(5));
        else if (crs.indexOf('urn:ogc:def:crs:EPSG::') === 0) geometry.srid = parseInt(crs.substring(22));
        else throw new Error('Unsupported crs: ' + crs);
    } else if (!isSubGeometry) {
        geometry.srid = 4326;
    }
    return geometry;
};
Geometry.prototype.toEwkt = function() {
    return 'SRID=' + this.srid + ';' + this.toWkt();
};
Geometry.prototype.toEwkb = function() {
    var ewkb = new BinaryWriter(this._getWkbSize() + 4);
    var wkb = this.toWkb();
    ewkb.writeInt8(1);
    ewkb.writeUInt32LE((wkb.slice(1, 5).readUInt32LE(0) | 0x20000000) >>> 0, true);
    ewkb.writeUInt32LE(this.srid);
    ewkb.writeBuffer(wkb.slice(5));
    return ewkb.buffer;
};
Geometry.prototype._getWktType = function(wktType, isEmpty) {
    var wkt = wktType;
    if (this.hasZ && this.hasM) wkt += ' ZM ';
    else if (this.hasZ) wkt += ' Z ';
    else if (this.hasM) wkt += ' M ';
    if (isEmpty && !this.hasZ && !this.hasM) wkt += ' ';
    if (isEmpty) wkt += 'EMPTY';
    return wkt;
};
Geometry.prototype._getWktCoordinate = function(point) {
    var coordinates = point.x + ' ' + point.y;
    if (this.hasZ) coordinates += ' ' + point.z;
    if (this.hasM) coordinates += ' ' + point.m;
    return coordinates;
};
Geometry.prototype._writeWkbType = function(wkb, geometryType, parentOptions) {
    var dimensionType = 0;
    if (typeof this.srid === 'undefined' && (!parentOptions || typeof parentOptions.srid === 'undefined')) {
        if (this.hasZ && this.hasM) dimensionType += 3000;
        else if (this.hasZ) dimensionType += 1000;
        else if (this.hasM) dimensionType += 2000;
    } else {
        if (this.hasZ) dimensionType |= 0x80000000;
        if (this.hasM) dimensionType |= 0x40000000;
    }
    wkb.writeUInt32LE(dimensionType + geometryType >>> 0, true);
};
Geometry.getTwkbPrecision = function(xyPrecision, zPrecision, mPrecision) {
    return {
        xy: xyPrecision,
        z: zPrecision,
        m: mPrecision,
        xyFactor: Math.pow(10, xyPrecision),
        zFactor: Math.pow(10, zPrecision),
        mFactor: Math.pow(10, mPrecision)
    };
};
Geometry.prototype._writeTwkbHeader = function(twkb, geometryType, precision, isEmpty) {
    var type = (ZigZag.encode(precision.xy) << 4) + geometryType;
    var metadataHeader = (this.hasZ || this.hasM) << 3;
    metadataHeader += isEmpty << 4;
    twkb.writeUInt8(type);
    twkb.writeUInt8(metadataHeader);
    if (this.hasZ || this.hasM) {
        var extendedPrecision = 0;
        if (this.hasZ) extendedPrecision |= 0x1;
        if (this.hasM) extendedPrecision |= 0x2;
        twkb.writeUInt8(extendedPrecision);
    }
};
Geometry.prototype.toGeoJSON = function(options) {
    var geoJSON = {};
    if (this.srid) {
        if (options) {
            if (options.shortCrs) {
                geoJSON.crs = {
                    type: 'name',
                    properties: {
                        name: 'EPSG:' + this.srid
                    }
                };
            } else if (options.longCrs) {
                geoJSON.crs = {
                    type: 'name',
                    properties: {
                        name: 'urn:ogc:def:crs:EPSG::' + this.srid
                    }
                };
            }
        }
    }
    return geoJSON;
};
}),
"[project]/MCMS/MCMS/node_modules/wkx/lib/wkx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.Types = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/types.js [app-route] (ecmascript)");
exports.Geometry = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometry.js [app-route] (ecmascript)");
exports.Point = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/point.js [app-route] (ecmascript)");
exports.LineString = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/linestring.js [app-route] (ecmascript)");
exports.Polygon = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/polygon.js [app-route] (ecmascript)");
exports.MultiPoint = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multipoint.js [app-route] (ecmascript)");
exports.MultiLineString = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multilinestring.js [app-route] (ecmascript)");
exports.MultiPolygon = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/multipolygon.js [app-route] (ecmascript)");
exports.GeometryCollection = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/wkx/lib/geometrycollection.js [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/MCMS/MCMS/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/MCMS/MCMS/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/MCMS/MCMS/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/MCMS/MCMS/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/MCMS/MCMS/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/MCMS/MCMS/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v1.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/parse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v35.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/parse.js [app-route] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function __TURBOPACK__default__export__(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/md5.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v3.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v35.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/md5.js [app-route] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
;
;
function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/sha1.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v5.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v35.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/sha1.js [app-route] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/nil.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/version.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v1.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v3.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/v5.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/nil.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/version.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/uuid/dist/esm-node/parse.js [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/inflection/lib/inflection.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */ (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory());
    } else if ("TURBOPACK compile-time truthy", 1) {
        module.exports = factory();
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    /**
   * @description This is a list of nouns that use the same form for both singular and plural.
   *              This list should remain entirely in lower case to correctly match Strings.
   * @private
   */ var uncountable_words = [
        // 'access',
        'accommodation',
        'adulthood',
        'advertising',
        'advice',
        'aggression',
        'aid',
        'air',
        'aircraft',
        'alcohol',
        'anger',
        'applause',
        'arithmetic',
        // 'art',
        'assistance',
        'athletics',
        // 'attention',
        'bacon',
        'baggage',
        // 'ballet',
        // 'beauty',
        'beef',
        // 'beer',
        // 'behavior',
        'biology',
        // 'billiards',
        'blood',
        'botany',
        // 'bowels',
        'bread',
        // 'business',
        'butter',
        'carbon',
        'cardboard',
        'cash',
        'chalk',
        'chaos',
        'chess',
        'crossroads',
        'countryside',
        // 'damage',
        'dancing',
        // 'danger',
        'deer',
        // 'delight',
        // 'dessert',
        'dignity',
        'dirt',
        // 'distribution',
        'dust',
        'economics',
        'education',
        'electricity',
        // 'employment',
        // 'energy',
        'engineering',
        'enjoyment',
        // 'entertainment',
        'envy',
        'equipment',
        'ethics',
        'evidence',
        'evolution',
        // 'failure',
        // 'faith',
        'fame',
        'fiction',
        // 'fish',
        'flour',
        'flu',
        'food',
        // 'freedom',
        // 'fruit',
        'fuel',
        'fun',
        // 'funeral',
        'furniture',
        'gallows',
        'garbage',
        'garlic',
        // 'gas',
        'genetics',
        // 'glass',
        'gold',
        'golf',
        'gossip',
        // 'grass',
        'gratitude',
        'grief',
        // 'ground',
        'guilt',
        'gymnastics',
        // 'hair',
        'happiness',
        'hardware',
        'harm',
        'hate',
        'hatred',
        'health',
        'heat',
        // 'height',
        'help',
        'homework',
        'honesty',
        'honey',
        'hospitality',
        'housework',
        'humour',
        'hunger',
        'hydrogen',
        'ice',
        'importance',
        'inflation',
        'information',
        // 'injustice',
        'innocence',
        // 'intelligence',
        'iron',
        'irony',
        'jam',
        // 'jealousy',
        // 'jelly',
        'jewelry',
        // 'joy',
        'judo',
        // 'juice',
        // 'justice',
        'karate',
        // 'kindness',
        'knowledge',
        // 'labour',
        'lack',
        // 'land',
        'laughter',
        'lava',
        'leather',
        'leisure',
        'lightning',
        'linguine',
        'linguini',
        'linguistics',
        'literature',
        'litter',
        'livestock',
        'logic',
        'loneliness',
        // 'love',
        'luck',
        'luggage',
        'macaroni',
        'machinery',
        'magic',
        // 'mail',
        'management',
        'mankind',
        'marble',
        'mathematics',
        'mayonnaise',
        'measles',
        // 'meat',
        // 'metal',
        'methane',
        'milk',
        'minus',
        'money',
        // 'moose',
        'mud',
        'music',
        'mumps',
        'nature',
        'news',
        'nitrogen',
        'nonsense',
        'nurture',
        'nutrition',
        'obedience',
        'obesity',
        // 'oil',
        'oxygen',
        // 'paper',
        // 'passion',
        'pasta',
        'patience',
        // 'permission',
        'physics',
        'poetry',
        'pollution',
        'poverty',
        // 'power',
        'pride',
        // 'production',
        // 'progress',
        // 'pronunciation',
        'psychology',
        'publicity',
        'punctuation',
        // 'quality',
        // 'quantity',
        'quartz',
        'racism',
        // 'rain',
        // 'recreation',
        'relaxation',
        'reliability',
        'research',
        'respect',
        'revenge',
        'rice',
        'rubbish',
        'rum',
        'safety',
        // 'salad',
        // 'salt',
        // 'sand',
        // 'satire',
        'scenery',
        'seafood',
        'seaside',
        'series',
        'shame',
        'sheep',
        'shopping',
        // 'silence',
        'sleep',
        // 'slang'
        'smoke',
        'smoking',
        'snow',
        'soap',
        'software',
        'soil',
        // 'sorrow',
        // 'soup',
        'spaghetti',
        // 'speed',
        'species',
        // 'spelling',
        // 'sport',
        'steam',
        // 'strength',
        'stuff',
        'stupidity',
        // 'success',
        // 'sugar',
        'sunshine',
        'symmetry',
        // 'tea',
        'tennis',
        'thirst',
        'thunder',
        'timber',
        // 'time',
        // 'toast',
        // 'tolerance',
        // 'trade',
        'traffic',
        'transportation',
        // 'travel',
        'trust',
        // 'understanding',
        'underwear',
        'unemployment',
        'unity',
        // 'usage',
        'validity',
        'veal',
        'vegetation',
        'vegetarianism',
        'vengeance',
        'violence',
        // 'vision',
        'vitality',
        'warmth',
        // 'water',
        'wealth',
        'weather',
        // 'weight',
        'welfare',
        'wheat',
        // 'whiskey',
        // 'width',
        'wildlife',
        // 'wine',
        'wisdom',
        // 'wood',
        // 'wool',
        // 'work',
        // 'yeast',
        'yoga',
        'zinc',
        'zoology'
    ];
    /**
   * @description These rules translate from the singular form of a noun to its plural form.
   * @private
   */ var regex = {
        plural: {
            men: new RegExp('^(m|wom)en$', 'gi'),
            people: new RegExp('(pe)ople$', 'gi'),
            children: new RegExp('(child)ren$', 'gi'),
            tia: new RegExp('([ti])a$', 'gi'),
            analyses: new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$', 'gi'),
            databases: new RegExp('(database)s$', 'gi'),
            drives: new RegExp('(drive)s$', 'gi'),
            hives: new RegExp('(hi|ti)ves$', 'gi'),
            curves: new RegExp('(curve)s$', 'gi'),
            lrves: new RegExp('([lr])ves$', 'gi'),
            aves: new RegExp('([a])ves$', 'gi'),
            foves: new RegExp('([^fo])ves$', 'gi'),
            movies: new RegExp('(m)ovies$', 'gi'),
            aeiouyies: new RegExp('([^aeiouy]|qu)ies$', 'gi'),
            series: new RegExp('(s)eries$', 'gi'),
            xes: new RegExp('(x|ch|ss|sh)es$', 'gi'),
            mice: new RegExp('([m|l])ice$', 'gi'),
            buses: new RegExp('(bus)es$', 'gi'),
            oes: new RegExp('(o)es$', 'gi'),
            shoes: new RegExp('(shoe)s$', 'gi'),
            crises: new RegExp('(cris|ax|test)es$', 'gi'),
            octopuses: new RegExp('(octop|vir)uses$', 'gi'),
            aliases: new RegExp('(alias|canvas|status|campus)es$', 'gi'),
            summonses: new RegExp('^(summons|bonus)es$', 'gi'),
            oxen: new RegExp('^(ox)en', 'gi'),
            matrices: new RegExp('(matr)ices$', 'gi'),
            vertices: new RegExp('(vert|ind)ices$', 'gi'),
            feet: new RegExp('^feet$', 'gi'),
            teeth: new RegExp('^teeth$', 'gi'),
            geese: new RegExp('^geese$', 'gi'),
            quizzes: new RegExp('(quiz)zes$', 'gi'),
            whereases: new RegExp('^(whereas)es$', 'gi'),
            criteria: new RegExp('^(criteri)a$', 'gi'),
            genera: new RegExp('^genera$', 'gi'),
            ss: new RegExp('ss$', 'gi'),
            s: new RegExp('s$', 'gi')
        },
        singular: {
            man: new RegExp('^(m|wom)an$', 'gi'),
            person: new RegExp('(pe)rson$', 'gi'),
            child: new RegExp('(child)$', 'gi'),
            drive: new RegExp('(drive)$', 'gi'),
            ox: new RegExp('^(ox)$', 'gi'),
            axis: new RegExp('(ax|test)is$', 'gi'),
            octopus: new RegExp('(octop|vir)us$', 'gi'),
            alias: new RegExp('(alias|status|canvas|campus)$', 'gi'),
            summons: new RegExp('^(summons|bonus)$', 'gi'),
            bus: new RegExp('(bu)s$', 'gi'),
            buffalo: new RegExp('(buffal|tomat|potat)o$', 'gi'),
            tium: new RegExp('([ti])um$', 'gi'),
            sis: new RegExp('sis$', 'gi'),
            ffe: new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),
            hive: new RegExp('(hi|ti)ve$', 'gi'),
            aeiouyy: new RegExp('([^aeiouy]|qu)y$', 'gi'),
            x: new RegExp('(x|ch|ss|sh)$', 'gi'),
            matrix: new RegExp('(matr)ix$', 'gi'),
            vertex: new RegExp('(vert|ind)ex$', 'gi'),
            mouse: new RegExp('([m|l])ouse$', 'gi'),
            foot: new RegExp('^foot$', 'gi'),
            tooth: new RegExp('^tooth$', 'gi'),
            goose: new RegExp('^goose$', 'gi'),
            quiz: new RegExp('(quiz)$', 'gi'),
            whereas: new RegExp('^(whereas)$', 'gi'),
            criterion: new RegExp('^(criteri)on$', 'gi'),
            genus: new RegExp('^genus$', 'gi'),
            s: new RegExp('s$', 'gi'),
            common: new RegExp('$', 'gi')
        }
    };
    var plural_rules = [
        // do not replace if its already a plural word
        [
            regex.plural.men
        ],
        [
            regex.plural.people
        ],
        [
            regex.plural.children
        ],
        [
            regex.plural.tia
        ],
        [
            regex.plural.analyses
        ],
        [
            regex.plural.databases
        ],
        [
            regex.plural.drives
        ],
        [
            regex.plural.hives
        ],
        [
            regex.plural.curves
        ],
        [
            regex.plural.lrves
        ],
        [
            regex.plural.foves
        ],
        [
            regex.plural.aeiouyies
        ],
        [
            regex.plural.series
        ],
        [
            regex.plural.movies
        ],
        [
            regex.plural.xes
        ],
        [
            regex.plural.mice
        ],
        [
            regex.plural.buses
        ],
        [
            regex.plural.oes
        ],
        [
            regex.plural.shoes
        ],
        [
            regex.plural.crises
        ],
        [
            regex.plural.octopuses
        ],
        [
            regex.plural.aliases
        ],
        [
            regex.plural.summonses
        ],
        [
            regex.plural.oxen
        ],
        [
            regex.plural.matrices
        ],
        [
            regex.plural.feet
        ],
        [
            regex.plural.teeth
        ],
        [
            regex.plural.geese
        ],
        [
            regex.plural.quizzes
        ],
        [
            regex.plural.whereases
        ],
        [
            regex.plural.criteria
        ],
        [
            regex.plural.genera
        ],
        // original rule
        [
            regex.singular.man,
            '$1en'
        ],
        [
            regex.singular.person,
            '$1ople'
        ],
        [
            regex.singular.child,
            '$1ren'
        ],
        [
            regex.singular.drive,
            '$1s'
        ],
        [
            regex.singular.ox,
            '$1en'
        ],
        [
            regex.singular.axis,
            '$1es'
        ],
        [
            regex.singular.octopus,
            '$1uses'
        ],
        [
            regex.singular.alias,
            '$1es'
        ],
        [
            regex.singular.summons,
            '$1es'
        ],
        [
            regex.singular.bus,
            '$1ses'
        ],
        [
            regex.singular.buffalo,
            '$1oes'
        ],
        [
            regex.singular.tium,
            '$1a'
        ],
        [
            regex.singular.sis,
            'ses'
        ],
        [
            regex.singular.ffe,
            '$1$2ves'
        ],
        [
            regex.singular.hive,
            '$1ves'
        ],
        [
            regex.singular.aeiouyy,
            '$1ies'
        ],
        [
            regex.singular.matrix,
            '$1ices'
        ],
        [
            regex.singular.vertex,
            '$1ices'
        ],
        [
            regex.singular.x,
            '$1es'
        ],
        [
            regex.singular.mouse,
            '$1ice'
        ],
        [
            regex.singular.foot,
            'feet'
        ],
        [
            regex.singular.tooth,
            'teeth'
        ],
        [
            regex.singular.goose,
            'geese'
        ],
        [
            regex.singular.quiz,
            '$1zes'
        ],
        [
            regex.singular.whereas,
            '$1es'
        ],
        [
            regex.singular.criterion,
            '$1a'
        ],
        [
            regex.singular.genus,
            'genera'
        ],
        [
            regex.singular.s,
            's'
        ],
        [
            regex.singular.common,
            's'
        ]
    ];
    /**
   * @description These rules translate from the plural form of a noun to its singular form.
   * @private
   */ var singular_rules = [
        // do not replace if its already a singular word
        [
            regex.singular.man
        ],
        [
            regex.singular.person
        ],
        [
            regex.singular.child
        ],
        [
            regex.singular.drive
        ],
        [
            regex.singular.ox
        ],
        [
            regex.singular.axis
        ],
        [
            regex.singular.octopus
        ],
        [
            regex.singular.alias
        ],
        [
            regex.singular.summons
        ],
        [
            regex.singular.bus
        ],
        [
            regex.singular.buffalo
        ],
        [
            regex.singular.tium
        ],
        [
            regex.singular.sis
        ],
        [
            regex.singular.ffe
        ],
        [
            regex.singular.hive
        ],
        [
            regex.singular.aeiouyy
        ],
        [
            regex.singular.x
        ],
        [
            regex.singular.matrix
        ],
        [
            regex.singular.mouse
        ],
        [
            regex.singular.foot
        ],
        [
            regex.singular.tooth
        ],
        [
            regex.singular.goose
        ],
        [
            regex.singular.quiz
        ],
        [
            regex.singular.whereas
        ],
        [
            regex.singular.criterion
        ],
        [
            regex.singular.genus
        ],
        // original rule
        [
            regex.plural.men,
            '$1an'
        ],
        [
            regex.plural.people,
            '$1rson'
        ],
        [
            regex.plural.children,
            '$1'
        ],
        [
            regex.plural.databases,
            '$1'
        ],
        [
            regex.plural.drives,
            '$1'
        ],
        [
            regex.plural.genera,
            'genus'
        ],
        [
            regex.plural.criteria,
            '$1on'
        ],
        [
            regex.plural.tia,
            '$1um'
        ],
        [
            regex.plural.analyses,
            '$1$2sis'
        ],
        [
            regex.plural.hives,
            '$1ve'
        ],
        [
            regex.plural.curves,
            '$1'
        ],
        [
            regex.plural.lrves,
            '$1f'
        ],
        [
            regex.plural.aves,
            '$1ve'
        ],
        [
            regex.plural.foves,
            '$1fe'
        ],
        [
            regex.plural.movies,
            '$1ovie'
        ],
        [
            regex.plural.aeiouyies,
            '$1y'
        ],
        [
            regex.plural.series,
            '$1eries'
        ],
        [
            regex.plural.xes,
            '$1'
        ],
        [
            regex.plural.mice,
            '$1ouse'
        ],
        [
            regex.plural.buses,
            '$1'
        ],
        [
            regex.plural.oes,
            '$1'
        ],
        [
            regex.plural.shoes,
            '$1'
        ],
        [
            regex.plural.crises,
            '$1is'
        ],
        [
            regex.plural.octopuses,
            '$1us'
        ],
        [
            regex.plural.aliases,
            '$1'
        ],
        [
            regex.plural.summonses,
            '$1'
        ],
        [
            regex.plural.oxen,
            '$1'
        ],
        [
            regex.plural.matrices,
            '$1ix'
        ],
        [
            regex.plural.vertices,
            '$1ex'
        ],
        [
            regex.plural.feet,
            'foot'
        ],
        [
            regex.plural.teeth,
            'tooth'
        ],
        [
            regex.plural.geese,
            'goose'
        ],
        [
            regex.plural.quizzes,
            '$1'
        ],
        [
            regex.plural.whereases,
            '$1'
        ],
        [
            regex.plural.ss,
            'ss'
        ],
        [
            regex.plural.s,
            ''
        ]
    ];
    /**
   * @description This is a list of words that should not be capitalized for title case.
   * @private
   */ var non_titlecased_words = [
        'and',
        'or',
        'nor',
        'a',
        'an',
        'the',
        'so',
        'but',
        'to',
        'of',
        'at',
        'by',
        'from',
        'into',
        'on',
        'onto',
        'off',
        'out',
        'in',
        'over',
        'with',
        'for'
    ];
    /**
   * @description These are regular expressions used for converting between String formats.
   * @private
   */ var id_suffix = new RegExp('(_ids|_id)$', 'g');
    var underbar = new RegExp('_', 'g');
    var space_or_underbar = new RegExp('[\ _]', 'g');
    var uppercase = new RegExp('([A-Z])', 'g');
    var underbar_prefix = new RegExp('^_');
    var inflector = {
        /**
   * A helper method that applies rules based replacement to a String.
   * @private
   * @function
   * @param {String} str String to modify and return based on the passed rules.
   * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
   * @param {Array: [String]} skip Strings to skip if they match
   * @param {String} override String to return as though this method succeeded (used to conform to APIs)
   * @returns {String} Return passed String modified by passed rules.
   * @example
   *
   *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
   */ _apply_rules: function(str, rules, skip, override) {
            if (override) {
                str = override;
            } else {
                var ignore = inflector.indexOf(skip, str.toLowerCase()) > -1;
                if (!ignore) {
                    var i = 0;
                    var j = rules.length;
                    for(; i < j; i++){
                        if (str.match(rules[i][0])) {
                            if (rules[i][1] !== undefined) {
                                str = str.replace(rules[i][0], rules[i][1]);
                            }
                            break;
                        }
                    }
                }
            }
            return str;
        },
        /**
   * This lets us detect if an Array contains a given element.
   * @public
   * @function
   * @param {Array} arr The subject array.
   * @param {Object} item Object to locate in the Array.
   * @param {Number} from_index Starts checking from this position in the Array.(optional)
   * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
   * @returns {Number} Return index position in the Array of the passed item.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
   *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
   */ indexOf: function(arr, item, from_index, compare_func) {
            if (!from_index) {
                from_index = -1;
            }
            var index = -1;
            var i = from_index;
            var j = arr.length;
            for(; i < j; i++){
                if (arr[i] === item || compare_func && compare_func(arr[i], item)) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        /**
   * This function adds pluralization support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {String} plural Overrides normal output with said String.(optional)
   * @returns {String} Singular English language nouns are returned in plural form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.pluralize( 'person' ); // === 'people'
   *     inflection.pluralize( 'octopus' ); // === 'octopuses'
   *     inflection.pluralize( 'Hat' ); // === 'Hats'
   *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
   */ pluralize: function(str, plural) {
            return inflector._apply_rules(str, plural_rules, uncountable_words, plural);
        },
        /**
   * This function adds singularization support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {String} singular Overrides normal output with said String.(optional)
   * @returns {String} Plural English language nouns are returned in singular form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.singularize( 'people' ); // === 'person'
   *     inflection.singularize( 'octopuses' ); // === 'octopus'
   *     inflection.singularize( 'Hats' ); // === 'Hat'
   *     inflection.singularize( 'guys', 'person' ); // === 'person'
   */ singularize: function(str, singular) {
            return inflector._apply_rules(str, singular_rules, uncountable_words, singular);
        },
        /**
   * This function will pluralize or singularlize a String appropriately based on a number value
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Number} count The number to base pluralization off of.
   * @param {String} singular Overrides normal output with said String.(optional)
   * @param {String} plural Overrides normal output with said String.(optional)
   * @returns {String} English language nouns are returned in the plural or singular form based on the count.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.inflect( 'people' 1 ); // === 'person'
   *     inflection.inflect( 'octopuses' 1 ); // === 'octopus'
   *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
   *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
   *     inflection.inflect( 'inches', 1.5 ); // === 'inches'
   *     inflection.inflect( 'person', 2 ); // === 'people'
   *     inflection.inflect( 'octopus', 2 ); // === 'octopuses'
   *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
   *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
   */ inflect: function(str, count, singular, plural) {
            count = parseFloat(count, 10);
            if (isNaN(count)) return str;
            if (count === 1) {
                return inflector._apply_rules(str, singular_rules, uncountable_words, singular);
            } else {
                return inflector._apply_rules(str, plural_rules, uncountable_words, plural);
            }
        },
        /**
   * This function adds camelization support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
   *                                 Passing true will lowercase it.
   * @returns {String} Lower case underscored words will be returned in camel case.
   *                  additionally '/' is translated to '::'
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
   *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
   */ camelize: function(str, low_first_letter) {
            var str_path = str.split('/');
            var i = 0;
            var j = str_path.length;
            var str_arr, init_x, k, l, first;
            for(; i < j; i++){
                str_arr = str_path[i].split('_');
                k = 0;
                l = str_arr.length;
                for(; k < l; k++){
                    if (k !== 0) {
                        str_arr[k] = str_arr[k].toLowerCase();
                    }
                    first = str_arr[k].charAt(0);
                    first = low_first_letter && i === 0 && k === 0 ? first.toLowerCase() : first.toUpperCase();
                    str_arr[k] = first + str_arr[k].substring(1);
                }
                str_path[i] = str_arr.join('');
            }
            return str_path.join('::');
        },
        /**
   * This function adds underscore support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
   *                  Passing true will return as entered.
   * @returns {String} Camel cased words are returned as lower cased and underscored.
   *                  additionally '::' is translated to '/'.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
   *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
   *     inflection.underscore( 'MP', true ); // === 'MP'
   */ underscore: function(str, all_upper_case) {
            if (all_upper_case && str === str.toUpperCase()) return str;
            var str_path = str.split('::');
            var i = 0;
            var j = str_path.length;
            for(; i < j; i++){
                str_path[i] = str_path[i].replace(uppercase, '_$1');
                str_path[i] = str_path[i].replace(underbar_prefix, '');
            }
            return str_path.join('/').toLowerCase();
        },
        /**
   * This function adds humanize support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
   *                                 Passing true will lowercase it.
   * @returns {String} Lower case underscored words will be returned in humanized form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.humanize( 'message_properties' ); // === 'Message properties'
   *     inflection.humanize( 'message_properties', true ); // === 'message properties'
   */ humanize: function(str, low_first_letter) {
            str = str.toLowerCase();
            str = str.replace(id_suffix, '');
            str = str.replace(underbar, ' ');
            if (!low_first_letter) {
                str = inflector.capitalize(str);
            }
            return str;
        },
        /**
   * This function adds capitalization support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} All characters will be lower case and the first will be upper.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
   *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
   */ capitalize: function(str) {
            str = str.toLowerCase();
            return str.substring(0, 1).toUpperCase() + str.substring(1);
        },
        /**
   * This function replaces underscores with dashes in the string.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Replaces all spaces or underscores with dashes.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
   *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
   */ dasherize: function(str) {
            return str.replace(space_or_underbar, '-');
        },
        /**
   * This function adds titleize support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Capitalizes words as you would for a book title.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
   *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
   */ titleize: function(str) {
            str = str.toLowerCase().replace(underbar, ' ');
            var str_arr = str.split(' ');
            var i = 0;
            var j = str_arr.length;
            var d, k, l;
            for(; i < j; i++){
                d = str_arr[i].split('-');
                k = 0;
                l = d.length;
                for(; k < l; k++){
                    if (inflector.indexOf(non_titlecased_words, d[k].toLowerCase()) < 0) {
                        d[k] = inflector.capitalize(d[k]);
                    }
                }
                str_arr[i] = d.join('-');
            }
            str = str_arr.join(' ');
            str = str.substring(0, 1).toUpperCase() + str.substring(1);
            return str;
        },
        /**
   * This function adds demodulize support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Removes module names leaving only class names.(Ruby style)
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
   */ demodulize: function(str) {
            var str_arr = str.split('::');
            return str_arr[str_arr.length - 1];
        },
        /**
   * This function adds tableize support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Return camel cased words into their underscored plural form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
   */ tableize: function(str) {
            str = inflector.underscore(str);
            str = inflector.pluralize(str);
            return str;
        },
        /**
   * This function adds classification support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Underscored plural nouns become the camel cased singular form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
   */ classify: function(str) {
            str = inflector.camelize(str);
            str = inflector.singularize(str);
            return str;
        },
        /**
   * This function adds foreign key support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
                                 you can pass true to skip it.(optional)
   * @returns {String} Underscored plural nouns become the camel cased singular form.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
   *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
   */ foreign_key: function(str, drop_id_ubar) {
            str = inflector.demodulize(str);
            str = inflector.underscore(str) + (drop_id_ubar ? '' : '_') + 'id';
            return str;
        },
        /**
   * This function adds ordinalize support to every String object.
   * @public
   * @function
   * @param {String} str The subject string.
   * @returns {String} Return all found numbers their sequence like '22nd'.
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
   */ ordinalize: function(str) {
            var str_arr = str.split(' ');
            var i = 0;
            var j = str_arr.length;
            for(; i < j; i++){
                var k = parseInt(str_arr[i], 10);
                if (!isNaN(k)) {
                    var ltd = str_arr[i].substring(str_arr[i].length - 2);
                    var ld = str_arr[i].substring(str_arr[i].length - 1);
                    var suf = 'th';
                    if (ltd != '11' && ltd != '12' && ltd != '13') {
                        if (ld === '1') {
                            suf = 'st';
                        } else if (ld === '2') {
                            suf = 'nd';
                        } else if (ld === '3') {
                            suf = 'rd';
                        }
                    }
                    str_arr[i] += suf;
                }
            }
            return str_arr.join(' ');
        },
        /**
   * This function performs multiple inflection methods on a string
   * @public
   * @function
   * @param {String} str The subject string.
   * @param {Array} arr An array of inflection methods.
   * @returns {String}
   * @example
   *
   *     var inflection = require( 'inflection' );
   *
   *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
   */ transform: function(str, arr) {
            var i = 0;
            var j = arr.length;
            for(; i < j; i++){
                var method = arr[i];
                if (inflector.hasOwnProperty(method)) {
                    str = inflector[method](str);
                }
            }
            return str;
        }
    };
    /**
 * @public
 */ inflector.version = '1.13.1';
    return inflector;
});
}),
"[project]/MCMS/MCMS/node_modules/dottie/dottie.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(undefined) {
    var root = this;
    // Weird IE shit, objects do not have hasOwn, but the prototype does...
    var hasOwnProp = Object.prototype.hasOwnProperty;
    var reverseDupArray = function(array) {
        var result = new Array(array.length);
        var index = array.length;
        var arrayMaxIndex = index - 1;
        while(index--){
            result[arrayMaxIndex - index] = array[index];
        }
        return result;
    };
    var Dottie = function() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length == 2) {
            return Dottie.find.apply(this, args);
        }
        return Dottie.transform.apply(this, args);
    };
    // Legacy syntax, changed syntax to have get/set be similar in arg order
    Dottie.find = function(path, object) {
        return Dottie.get(object, path);
    };
    // Dottie memoization flag
    Dottie.memoizePath = true;
    var memoized = {};
    // Traverse object according to path, return value if found - Return undefined if destination is unreachable
    Dottie.get = function(object, path, defaultVal) {
        if (object === undefined || object === null || path === undefined || path === null) {
            return defaultVal;
        }
        var names;
        if (typeof path === "string") {
            if (Dottie.memoizePath) {
                if (memoized[path]) {
                    names = memoized[path].slice(0);
                } else {
                    names = path.split('.').reverse();
                    memoized[path] = names.slice(0);
                }
            } else {
                names = path.split('.').reverse();
            }
        } else if (Array.isArray(path)) {
            names = reverseDupArray(path);
        }
        while(names.length && (object = object[names.pop()]) !== undefined && object !== null);
        // Handle cases where accessing a childprop of a null value
        if (object === null && names.length) object = undefined;
        return object === undefined ? defaultVal : object;
    };
    Dottie.exists = function(object, path) {
        return Dottie.get(object, path) !== undefined;
    };
    // Set nested value
    Dottie.set = function(object, path, value, options) {
        var pieces = Array.isArray(path) ? path : path.split('.'), current = object, piece, length = pieces.length;
        // Guard against prototype pollution at ANY position in the path
        // Covers __proto__, constructor, and prototype to prevent all known vectors
        var DANGEROUS_KEYS = [
            '__proto__',
            'constructor',
            'prototype'
        ];
        if (pieces.some(function(p) {
            return DANGEROUS_KEYS.indexOf(p) !== -1;
        })) return;
        if (typeof current !== 'object') {
            throw new Error('Parent is not an object.');
        }
        for(var index = 0; index < length; index++){
            piece = pieces[index];
            // Create namespace (object) where none exists.
            // If `force === true`, bruteforce the path without throwing errors.
            if (!hasOwnProp.call(current, piece) || current[piece] === undefined || (typeof current[piece] !== 'object' || current[piece] === null) && options && options.force === true) {
                current[piece] = {};
            }
            if (index == length - 1) {
                // Set final value
                current[piece] = value;
            } else {
                // We do not overwrite existing path pieces by default
                if (typeof current[piece] !== 'object' || current[piece] === null) {
                    throw new Error('Target key "' + piece + '" is not suitable for a nested value. (It is in use as non-object. Set `force` to `true` to override.)');
                }
                // Traverse next in path
                current = current[piece];
            }
        }
        // Is there any case when this is relevant? It's also the last line in the above for-loop
        current[piece] = value;
    };
    // Set default nested value
    Dottie['default'] = function(object, path, value) {
        if (Dottie.get(object, path) === undefined) {
            Dottie.set(object, path, value);
        }
    };
    // Transform unnested object with .-seperated keys into a nested object.
    Dottie.transform = function Dottie$transformfunction(object, options) {
        if (Array.isArray(object)) {
            return object.map(function(o) {
                return Dottie.transform(o, options);
            });
        }
        options = options || {};
        options.delimiter = options.delimiter || '.';
        var pieces, piecesLength, piece, current, transformed = {}, key, keys = Object.keys(object), length = keys.length, i;
        for(i = 0; i < length; i++){
            key = keys[i];
            if (key.indexOf(options.delimiter) !== -1) {
                pieces = key.split(options.delimiter);
                // Guard against prototype pollution at ANY position in the path
                var DANGEROUS_KEYS = [
                    '__proto__',
                    'constructor',
                    'prototype'
                ];
                if (pieces.some(function(p) {
                    return DANGEROUS_KEYS.indexOf(p) !== -1;
                })) break;
                piecesLength = pieces.length;
                current = transformed;
                for(var index = 0; index < piecesLength; index++){
                    piece = pieces[index];
                    if (index != piecesLength - 1 && !current.hasOwnProperty(piece)) {
                        current[piece] = {};
                    }
                    if (index == piecesLength - 1) {
                        current[piece] = object[key];
                    }
                    current = current[piece];
                    if (current === null) {
                        break;
                    }
                }
            } else {
                transformed[key] = object[key];
            }
        }
        return transformed;
    };
    Dottie.flatten = function(object, seperator) {
        if (typeof seperator === "undefined") seperator = '.';
        var flattened = {}, current, nested;
        for(var key in object){
            if (hasOwnProp.call(object, key)) {
                current = object[key];
                if (Object.prototype.toString.call(current) === "[object Object]") {
                    nested = Dottie.flatten(current, seperator);
                    for(var _key in nested){
                        flattened[key + seperator + _key] = nested[_key];
                    }
                } else {
                    flattened[key] = current;
                }
            }
        }
        return flattened;
    };
    Dottie.paths = function(object, prefixes) {
        var paths = [];
        var value;
        var key;
        prefixes = prefixes || [];
        if (typeof object === 'object') {
            for(key in object){
                value = object[key];
                if (typeof value === 'object' && value !== null) {
                    paths = paths.concat(Dottie.paths(value, prefixes.concat([
                        key
                    ])));
                } else {
                    paths.push(prefixes.concat(key).join('.'));
                }
            }
        } else {
            throw new Error('Paths was called with non-object argument.');
        }
        return paths;
    };
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        exports = module.exports = Dottie;
    } else {
        root['Dottie'] = Dottie;
        root['Dot'] = Dottie; //BC
        if (typeof define === "function") {
            ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                return Dottie;
            }());
        }
    }
})();
}),
"[project]/MCMS/MCMS/node_modules/toposort-class/build/toposort.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/****
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Gustavo Henke and Aaron Trent
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 ****/ (function(global, factory) {
    if (typeof define === "function" && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory(exports, module));
    } else if ("TURBOPACK compile-time truthy", 1) {
        factory(exports, module);
    } else //TURBOPACK unreachable
    {
        var mod;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(exports1, module1) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var Toposort = function() {
        function Toposort() {
            _classCallCheck(this, Toposort);
            this.edges = [];
            this.Toposort = Toposort;
        }
        /**
         * Adds dependency edges.
         *
         * @since   0.1.0
         * @param   {String} item               An dependent name. Must be an string and not empty
         * @param   {String[]|String} [deps]    An dependency or array of dependencies
         * @returns {Toposort}                  The Toposort instance
         */ Toposort.prototype.add = function add(item, deps) {
            if (typeof item !== "string" || !item) {
                throw new TypeError("Dependent name must be given as a not empty string");
            }
            deps = Array.isArray(deps) ? deps : [
                deps
            ];
            if (deps.length > 0) {
                for(var _iterator = deps, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;){
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) {
                            break;
                        }
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) {
                            break;
                        }
                        _ref = _i.value;
                    }
                    var dep = _ref;
                    if (typeof dep !== "string" || !dep) {
                        throw new TypeError("Dependency name must be given as a not empty string");
                    }
                    this.edges.push([
                        item,
                        dep
                    ]);
                }
            } else {
                this.edges.push([
                    item
                ]);
            }
            return this;
        };
        /**
         * Runs the toposorting and return an ordered array of strings
         *
         * @since   0.1.0
         * @returns {String[]}  The list of items topologically sorted.
         */ Toposort.prototype.sort = function sort() {
            var _this = this;
            var nodes = [];
            //accumulate unique nodes into a large list
            for(var _iterator2 = this.edges, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;){
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) {
                        break;
                    }
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) {
                        break;
                    }
                    _ref2 = _i2.value;
                }
                var edge = _ref2;
                for(var _iterator3 = edge, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;){
                    var _ref3;
                    if (_isArray3) {
                        if (_i3 >= _iterator3.length) {
                            break;
                        }
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) {
                            break;
                        }
                        _ref3 = _i3.value;
                    }
                    var node = _ref3;
                    if (nodes.indexOf(node) === -1) {
                        nodes.push(node);
                    }
                }
            }
            //initialize the placement of nodes into the sorted array at the end
            var place = nodes.length;
            //initialize the sorted array with the same length as the unique nodes array
            var sorted = new Array(nodes.length);
            //define a visitor function that recursively traverses dependencies.
            var visit = function visit(node, predecessors) {
                //check if a node is dependent of itself
                if (predecessors.length !== 0 && predecessors.indexOf(node) !== -1) {
                    throw new Error("Cyclic dependency found. " + node + " is dependent of itself.\nDependency chain: " + predecessors.join(" -> ") + " => " + node);
                }
                var index = nodes.indexOf(node);
                //if the node still exists, traverse its dependencies
                if (index !== -1) {
                    var copy = false;
                    //mark the node as false to exclude it from future iterations
                    nodes[index] = false;
                    //loop through all edges and follow dependencies of the current node
                    for(var _iterator4 = _this.edges, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;){
                        var _ref4;
                        if (_isArray4) {
                            if (_i4 >= _iterator4.length) {
                                break;
                            }
                            _ref4 = _iterator4[_i4++];
                        } else {
                            _i4 = _iterator4.next();
                            if (_i4.done) {
                                break;
                            }
                            _ref4 = _i4.value;
                        }
                        var edge = _ref4;
                        if (edge[0] === node) {
                            //lazily create a copy of predecessors with the current node concatenated onto it
                            copy = copy || predecessors.concat([
                                node
                            ]);
                            //recurse to node dependencies
                            visit(edge[1], copy);
                        }
                    }
                    //add the node to the next place in the sorted array
                    sorted[--place] = node;
                }
            };
            for(var i = 0; i < nodes.length; i++){
                var node = nodes[i];
                //ignore nodes that have been excluded
                if (node !== false) {
                    //mark the node as false to exclude it from future iterations
                    nodes[i] = false;
                    //loop through all edges and follow dependencies of the current node
                    for(var _iterator5 = this.edges, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;){
                        var _ref5;
                        if (_isArray5) {
                            if (_i5 >= _iterator5.length) {
                                break;
                            }
                            _ref5 = _iterator5[_i5++];
                        } else {
                            _i5 = _iterator5.next();
                            if (_i5.done) {
                                break;
                            }
                            _ref5 = _i5.value;
                        }
                        var edge = _ref5;
                        if (edge[0] === node) {
                            //recurse to node dependencies
                            visit(edge[1], [
                                node
                            ]);
                        }
                    }
                    //add the node to the next place in the sorted array
                    sorted[--place] = node;
                }
            }
            return sorted;
        };
        /**
         * Clears edges
         *
         * @since   0.4.0
         * @returns {Toposort}                  The Toposort instance
         */ Toposort.prototype.clear = function clear() {
            this.edges = [];
            return this;
        };
        return Toposort;
    }();
    module1.exports = Toposort;
});
}),
"[project]/MCMS/MCMS/node_modules/toposort-class/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/toposort-class/build/toposort.js [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/debug.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numeric identifiers include numeric identifiers but can be longer.
// Therefore non-numeric identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifier, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        if (this.major < other.major) {
            return -1;
        }
        if (this.major > other.major) {
            return 1;
        }
        if (this.minor < other.minor) {
            return -1;
        }
        if (this.minor > other.minor) {
            return 1;
        }
        if (this.patch < other.patch) {
            return -1;
        }
        if (this.patch > other.patch) {
            return 1;
        }
        return 0;
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/valid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/clean.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/inc.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/diff.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are prereleases
    return 'prerelease';
};
module.exports = diff;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/major.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/minor.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/patch.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/prerelease.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/rcompare.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-loose.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/sort.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/rsort.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/eq.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/neq.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gte.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lte.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/cmp.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const eq = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/eq.js [app-route] (ecmascript)");
const neq = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/neq.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/coerce.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/truncate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const constants = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const truncate = (version, truncation, options)=>{
    if (!constants.RELEASE_TYPES.includes(truncation)) {
        return null;
    }
    const clonedVersion = cloneInputVersion(version, options);
    return clonedVersion && doTruncation(clonedVersion, truncation);
};
const cloneInputVersion = (version, options)=>{
    const versionStringToParse = version instanceof SemVer ? version.version : version;
    return parse(versionStringToParse, options);
};
const doTruncation = (version, truncation)=>{
    if (isPrerelease(truncation)) {
        return version.version;
    }
    version.prerelease = [];
    switch(truncation){
        case 'major':
            version.minor = 0;
            version.patch = 0;
            break;
        case 'minor':
            version.patch = 0;
            break;
    }
    return version.format();
};
const isPrerelease = (type)=>{
    return type.startsWith('pre');
};
module.exports = truncate;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/lrucache.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/lrucache.js [app-route] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    comp = comp.replace(re[t.BUILD], '');
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/comparator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/parse-options.js [app-route] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/cmp.js [app-route] (ecmascript)");
const debug = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/debug.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/to-comparators.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/max-satisfying.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/min-satisfying.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/min-version.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/valid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/outside.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/gtr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/ltr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const outside = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/intersects.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/simplify.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/subset.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If LT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}),
"[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/re.js [app-route] (ecmascript)");
const constants = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/constants.js [app-route] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/semver.js [app-route] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/internal/identifiers.js [app-route] (ecmascript)");
const parse = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/parse.js [app-route] (ecmascript)");
const valid = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/valid.js [app-route] (ecmascript)");
const clean = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/clean.js [app-route] (ecmascript)");
const inc = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/inc.js [app-route] (ecmascript)");
const diff = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/diff.js [app-route] (ecmascript)");
const major = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/major.js [app-route] (ecmascript)");
const minor = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/minor.js [app-route] (ecmascript)");
const patch = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/patch.js [app-route] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/prerelease.js [app-route] (ecmascript)");
const compare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare.js [app-route] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/rcompare.js [app-route] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-loose.js [app-route] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/compare-build.js [app-route] (ecmascript)");
const sort = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/sort.js [app-route] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/rsort.js [app-route] (ecmascript)");
const gt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gt.js [app-route] (ecmascript)");
const lt = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lt.js [app-route] (ecmascript)");
const eq = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/eq.js [app-route] (ecmascript)");
const neq = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/neq.js [app-route] (ecmascript)");
const gte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/gte.js [app-route] (ecmascript)");
const lte = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/lte.js [app-route] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/cmp.js [app-route] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/coerce.js [app-route] (ecmascript)");
const truncate = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/truncate.js [app-route] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/comparator.js [app-route] (ecmascript)");
const Range = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/classes/range.js [app-route] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/functions/satisfies.js [app-route] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/to-comparators.js [app-route] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/max-satisfying.js [app-route] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/min-satisfying.js [app-route] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/min-version.js [app-route] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/valid.js [app-route] (ecmascript)");
const outside = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/outside.js [app-route] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/gtr.js [app-route] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/ltr.js [app-route] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/intersects.js [app-route] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/simplify.js [app-route] (ecmascript)");
const subset = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize/node_modules/semver/ranges/subset.js [app-route] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    truncate,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}),
"[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/TimeoutError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeoutError = void 0;
class TimeoutError extends Error {
}
exports.TimeoutError = TimeoutError;
}),
"[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/AggregateError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AggregateError = void 0;
class AggregateError extends Error {
    constructor(errors){
        super();
        this.errors = errors;
        this.name = 'AggregateError';
    }
    toString() {
        const message = `AggregateError of:\n${this.errors.map((error)=>error === this ? '[Circular AggregateError]' : error instanceof AggregateError ? String(error).replace(/\n$/, '').replace(/^/gm, '  ') : String(error).replace(/^/gm, '    ').substring(2)).join('\n')}\n`;
        return message;
    }
}
exports.AggregateError = AggregateError;
}),
"[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/Deferred.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Deferred = void 0;
const TimeoutError_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/TimeoutError.js [app-route] (ecmascript)");
class Deferred {
    constructor(){
        this._promise = new Promise((resolve, reject)=>{
            this._reject = reject;
            this._resolve = resolve;
        });
    }
    registerTimeout(timeoutInMillis, callback) {
        if (this._timeout) return;
        this._timeout = setTimeout(()=>{
            callback();
            this.reject(new TimeoutError_1.TimeoutError('Operation timeout'));
        }, timeoutInMillis);
    }
    _clearTimeout() {
        if (!this._timeout) return;
        clearTimeout(this._timeout);
    }
    resolve(value) {
        this._clearTimeout();
        this._resolve(value);
    }
    reject(error) {
        this._clearTimeout();
        this._reject(error);
    }
    promise() {
        return this._promise;
    }
}
exports.Deferred = Deferred;
}),
"[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/Pool.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pool = void 0;
const Deferred_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/Deferred.js [app-route] (ecmascript)");
const AggregateError_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/AggregateError.js [app-route] (ecmascript)");
class Pool {
    constructor(factory){
        this.log = false;
        if (!factory.create) {
            throw new Error('create function is required');
        }
        if (!factory.destroy) {
            throw new Error('destroy function is required');
        }
        if (!factory.validate) {
            throw new Error('validate function is required');
        }
        if (typeof factory.min !== 'number' || factory.min < 0 || factory.min !== Math.round(factory.min)) {
            throw new Error('min must be an integer >= 0');
        }
        if (typeof factory.max !== 'number' || factory.max <= 0 || factory.max !== Math.round(factory.max)) {
            throw new Error('max must be an integer > 0');
        }
        if (factory.min > factory.max) {
            throw new Error('max is smaller than min');
        }
        if (factory.maxUses !== undefined && (typeof factory.maxUses !== 'number' || factory.maxUses < 0)) {
            throw new Error('maxUses must be an integer >= 0');
        }
        this.idleTimeoutMillis = factory.idleTimeoutMillis || 30000;
        this.acquireTimeoutMillis = factory.acquireTimeoutMillis || 30000;
        this.reapIntervalMillis = factory.reapIntervalMillis || 1000;
        this.maxUsesPerResource = factory.maxUses || Infinity;
        this.log = factory.log || false;
        this._factory = factory;
        this._count = 0;
        this._draining = false;
        this._pendingAcquires = [];
        this._inUseObjects = [];
        this._availableObjects = [];
        this._removeIdleScheduled = false;
    }
    get size() {
        return this._count;
    }
    get name() {
        return this._factory.name;
    }
    get available() {
        return this._availableObjects.length;
    }
    get using() {
        return this._inUseObjects.length;
    }
    get waiting() {
        return this._pendingAcquires.length;
    }
    get maxSize() {
        return this._factory.max;
    }
    get minSize() {
        return this._factory.min;
    }
    _log(message, level) {
        if (typeof this.log === 'function') {
            this.log(message, level);
        } else if (this.log) {
            console.log(`${level.toUpperCase()} pool ${this.name || ''} - ${message}`);
        }
    }
    _removeIdle() {
        const toRemove = [];
        const now = Date.now();
        let i;
        let available = this._availableObjects.length;
        const maxRemovable = this.size - this.minSize;
        let timeout;
        this._removeIdleScheduled = false;
        for(i = 0; i < available && maxRemovable > toRemove.length; i++){
            timeout = this._availableObjects[i].timeout;
            if (now >= timeout) {
                this._log('removeIdle() destroying obj - now:' + now + ' timeout:' + timeout, 'verbose');
                toRemove.push(this._availableObjects[i].resource);
            }
        }
        toRemove.forEach(this.destroy, this);
        available = this._availableObjects.length;
        if (available > 0) {
            this._log('this._availableObjects.length=' + available, 'verbose');
            this._scheduleRemoveIdle();
        } else {
            this._log('removeIdle() all objects removed', 'verbose');
        }
    }
    _scheduleRemoveIdle() {
        if (!this._removeIdleScheduled) {
            this._removeIdleScheduled = true;
            this._removeIdleTimer = setTimeout(()=>{
                this._removeIdle();
            }, this.reapIntervalMillis);
        }
    }
    _dispense() {
        let wrappedResource = null;
        const waitingCount = this._pendingAcquires.length;
        this._log(`dispense() clients=${waitingCount} available=${this._availableObjects.length}`, 'info');
        if (waitingCount < 1) {
            return;
        }
        while(this._availableObjects.length > 0){
            this._log('dispense() - reusing obj', 'verbose');
            wrappedResource = this._availableObjects[this._availableObjects.length - 1];
            if (!this._factory.validate(wrappedResource.resource)) {
                this.destroy(wrappedResource.resource);
                continue;
            }
            this._availableObjects.pop();
            this._addResourceToInUseObjects(wrappedResource.resource, wrappedResource.useCount);
            const deferred = this._pendingAcquires.shift();
            return deferred.resolve(wrappedResource.resource);
        }
        if (this.size < this.maxSize) {
            this._createResource();
        }
    }
    _createResource() {
        this._count += 1;
        this._log(`createResource() - creating obj - count=${this.size} min=${this.minSize} max=${this.maxSize}`, 'verbose');
        this._factory.create().then((resource)=>{
            const deferred = this._pendingAcquires.shift();
            if (deferred) {
                this._addResourceToInUseObjects(resource, 0);
                deferred.resolve(resource);
            } else {
                this._addResourceToAvailableObjects(resource, 0);
            }
        }).catch((error)=>{
            const deferred = this._pendingAcquires.shift();
            this._count -= 1;
            if (this._count < 0) this._count = 0;
            if (deferred) {
                deferred.reject(error);
            }
            process.nextTick(()=>{
                this._dispense();
            });
        });
    }
    _addResourceToAvailableObjects(resource, useCount) {
        const wrappedResource = {
            resource: resource,
            useCount: useCount,
            timeout: Date.now() + this.idleTimeoutMillis
        };
        this._availableObjects.push(wrappedResource);
        this._dispense();
        this._scheduleRemoveIdle();
    }
    _addResourceToInUseObjects(resource, useCount) {
        const wrappedResource = {
            resource: resource,
            useCount: useCount
        };
        this._inUseObjects.push(wrappedResource);
    }
    _ensureMinimum() {
        let i, diff;
        if (!this._draining && this.size < this.minSize) {
            diff = this.minSize - this.size;
            for(i = 0; i < diff; i++){
                this._createResource();
            }
        }
    }
    acquire() {
        if (this._draining) {
            return Promise.reject(new Error('pool is draining and cannot accept work'));
        }
        const deferred = new Deferred_1.Deferred();
        deferred.registerTimeout(this.acquireTimeoutMillis, ()=>{
            this._pendingAcquires = this._pendingAcquires.filter((pending)=>pending !== deferred);
        });
        this._pendingAcquires.push(deferred);
        this._dispense();
        return deferred.promise();
    }
    release(resource) {
        if (this._availableObjects.some((resourceWithTimeout)=>resourceWithTimeout.resource === resource)) {
            this._log('release called twice for the same resource: ' + new Error().stack, 'error');
            return;
        }
        const index = this._inUseObjects.findIndex((wrappedResource)=>wrappedResource.resource === resource);
        if (index < 0) {
            this._log('attempt to release an invalid resource: ' + new Error().stack, 'error');
            return;
        }
        const wrappedResource = this._inUseObjects[index];
        wrappedResource.useCount += 1;
        if (wrappedResource.useCount >= this.maxUsesPerResource) {
            this._log('release() destroying obj - useCount:' + wrappedResource.useCount + ' maxUsesPerResource:' + this.maxUsesPerResource, 'verbose');
            this.destroy(wrappedResource.resource);
            this._dispense();
        } else {
            this._inUseObjects.splice(index, 1);
            this._addResourceToAvailableObjects(wrappedResource.resource, wrappedResource.useCount);
        }
    }
    async destroy(resource) {
        const available = this._availableObjects.length;
        const using = this._inUseObjects.length;
        this._availableObjects = this._availableObjects.filter((object)=>object.resource !== resource);
        this._inUseObjects = this._inUseObjects.filter((object)=>object.resource !== resource);
        if (available === this._availableObjects.length && using === this._inUseObjects.length) {
            this._ensureMinimum();
            return;
        }
        this._count -= 1;
        if (this._count < 0) this._count = 0;
        try {
            await this._factory.destroy(resource);
        } finally{
            this._ensureMinimum();
            if (!this._draining) {
                process.nextTick(()=>{
                    this._dispense();
                });
            }
        }
    }
    drain() {
        this._log('draining', 'info');
        this._draining = true;
        const check = (callback)=>{
            if (this._pendingAcquires.length > 0) {
                this._dispense();
                setTimeout(()=>{
                    check(callback);
                }, 100);
                return;
            }
            if (this._availableObjects.length !== this._count) {
                setTimeout(()=>{
                    check(callback);
                }, 100);
                return;
            }
            callback();
        };
        return new Promise((resolve)=>check(resolve));
    }
    async destroyAllNow() {
        this._log('force destroying all objects', 'info');
        this._removeIdleScheduled = false;
        clearTimeout(this._removeIdleTimer);
        const resources = this._availableObjects.map((resource)=>resource.resource);
        const errors = [];
        for (const resource of resources){
            try {
                await this.destroy(resource);
            } catch (ex) {
                this._log('Error destroying resource: ' + ex.stack, 'error');
                errors.push(ex);
            }
        }
        if (errors.length > 0) {
            throw new AggregateError_1.AggregateError(errors);
        }
    }
}
exports.Pool = Pool;
}),
"[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pool = exports.AggregateError = exports.TimeoutError = void 0;
var TimeoutError_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/TimeoutError.js [app-route] (ecmascript)");
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return TimeoutError_1.TimeoutError;
    }
});
var AggregateError_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/AggregateError.js [app-route] (ecmascript)");
Object.defineProperty(exports, "AggregateError", {
    enumerable: true,
    get: function() {
        return AggregateError_1.AggregateError;
    }
});
var Pool_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/sequelize-pool/lib/Pool.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Pool", {
    enumerable: true,
    get: function() {
        return Pool_1.Pool;
    }
});
}),
"[project]/MCMS/MCMS/node_modules/bcryptjs/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare,
    "compareSync",
    ()=>compareSync,
    "decodeBase64",
    ()=>decodeBase64,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeBase64",
    ()=>encodeBase64,
    "genSalt",
    ()=>genSalt,
    "genSaltSync",
    ()=>genSaltSync,
    "getRounds",
    ()=>getRounds,
    "getSalt",
    ()=>getSalt,
    "hash",
    ()=>hash,
    "hashSync",
    ()=>hashSync,
    "setRandomFallback",
    ()=>setRandomFallback,
    "truncates",
    ()=>truncates
]);
/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2025 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // The Node.js crypto module is used as a fallback for the Web Crypto API. When
// building for the browser, inclusion of the crypto module should be disabled,
// which the package hints at in its package.json for bundlers that support it.
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/**
 * The random implementation to use as a fallback.
 * @type {?function(number):!Array.<number>}
 * @inner
 */ var randomFallback = null;
/**
 * Generates cryptographically secure random bytes.
 * @function
 * @param {number} len Bytes length
 * @returns {!Array.<number>} Random bytes
 * @throws {Error} If no random implementation is available
 * @inner
 */ function randomBytes(len) {
    // Web Crypto API. Globally available in the browser and in Node.js >=23.
    try {
        return crypto.getRandomValues(new Uint8Array(len));
    } catch  {}
    // Node.js crypto module for non-browser environments.
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(len);
    } catch  {}
    // Custom fallback specified with `setRandomFallback`.
    if (!randomFallback) {
        throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
    }
    return randomFallback(len);
}
function setRandomFallback(random) {
    randomFallback = random;
}
function genSaltSync(rounds, seed_length) {
    rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof rounds !== "number") throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
    if (rounds < 4) rounds = 4;
    else if (rounds > 31) rounds = 31;
    var salt = [];
    salt.push("$2b$");
    if (rounds < 10) salt.push("0");
    salt.push(rounds.toString());
    salt.push("$");
    salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
    return salt.join("");
}
function genSalt(rounds, seed_length, callback) {
    if (typeof seed_length === "function") callback = seed_length, seed_length = undefined; // Not supported.
    if (typeof rounds === "function") callback = rounds, rounds = undefined;
    if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
    else if (typeof rounds !== "number") throw Error("illegal arguments: " + typeof rounds);
    function _async(callback) {
        nextTick(function() {
            // Pretty thin, but salting is fast enough
            try {
                callback(null, genSaltSync(rounds));
            } catch (err) {
                callback(err);
            }
        });
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function hashSync(password, salt) {
    if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof salt === "number") salt = genSaltSync(salt);
    if (typeof password !== "string" || typeof salt !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
    return _hash(password, salt);
}
function hash(password, salt, callback, progressCallback) {
    function _async(callback) {
        if (typeof password === "string" && typeof salt === "number") genSalt(salt, function(err, salt) {
            _hash(password, salt, callback, progressCallback);
        });
        else if (typeof password === "string" && typeof salt === "string") _hash(password, salt, callback, progressCallback);
        else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof salt)));
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
/**
 * Compares two strings of the same length in constant time.
 * @param {string} known Must be of the correct length
 * @param {string} unknown Must be the same length as `known`
 * @returns {boolean}
 * @inner
 */ function safeStringCompare(known, unknown) {
    var diff = known.length ^ unknown.length;
    for(var i = 0; i < known.length; ++i){
        diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
    }
    return diff === 0;
}
function compareSync(password, hash) {
    if (typeof password !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof hash);
    if (hash.length !== 60) return false;
    return safeStringCompare(hashSync(password, hash.substring(0, hash.length - 31)), hash);
}
function compare(password, hashValue, callback, progressCallback) {
    function _async(callback) {
        if (typeof password !== "string" || typeof hashValue !== "string") {
            nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof hashValue)));
            return;
        }
        if (hashValue.length !== 60) {
            nextTick(callback.bind(this, null, false));
            return;
        }
        hash(password, hashValue.substring(0, 29), function(err, comp) {
            if (err) callback(err);
            else callback(null, safeStringCompare(comp, hashValue));
        }, progressCallback);
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function getRounds(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    return parseInt(hash.split("$")[2], 10);
}
function getSalt(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
    return hash.substring(0, 29);
}
function truncates(password) {
    if (typeof password !== "string") throw Error("Illegal arguments: " + typeof password);
    return utf8Length(password) > 72;
}
/**
 * Continues with the callback after yielding to the event loop.
 * @function
 * @param {function(...[*])} callback Callback to execute
 * @inner
 */ var nextTick = typeof setImmediate === "function" ? setImmediate : typeof scheduler === "object" && typeof scheduler.postTask === "function" ? scheduler.postTask.bind(scheduler) : setTimeout;
/** Calculates the byte length of a string encoded as UTF8. */ function utf8Length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 0xfc00) === 0xd800 && (string.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
}
/** Converts a string to an array of UTF8 bytes. */ function utf8Array(string) {
    var offset = 0, c1, c2;
    var buffer = new Array(utf8Length(string));
    for(var i = 0, k = string.length; i < k; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 0xfc00) === 0xd800 && ((c2 = string.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return buffer;
}
// A base64 implementation for the bcrypt algorithm. This is partly non-standard.
/**
 * bcrypt's own non-standard base64 dictionary.
 * @type {!Array.<string>}
 * @const
 * @inner
 **/ var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
/**
 * @type {!Array.<number>}
 * @const
 * @inner
 **/ var BASE64_INDEX = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    -1,
    -1,
    -1,
    -1,
    -1
];
/**
 * Encodes a byte array to base64 with up to len bytes of input.
 * @param {!Array.<number>} b Byte array
 * @param {number} len Maximum input length
 * @returns {string}
 * @inner
 */ function base64_encode(b, len) {
    var off = 0, rs = [], c1, c2;
    if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
    while(off < len){
        c1 = b[off++] & 0xff;
        rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
        c1 = (c1 & 0x03) << 4;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 4 & 0x0f;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        c1 = (c2 & 0x0f) << 2;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 6 & 0x03;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        rs.push(BASE64_CODE[c2 & 0x3f]);
    }
    return rs.join("");
}
/**
 * Decodes a base64 encoded string to up to len bytes of output.
 * @param {string} s String to decode
 * @param {number} len Maximum output length
 * @returns {!Array.<number>}
 * @inner
 */ function base64_decode(s, len) {
    var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
    if (len <= 0) throw Error("Illegal len: " + len);
    while(off < slen - 1 && olen < len){
        code = s.charCodeAt(off++);
        c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        code = s.charCodeAt(off++);
        c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c1 == -1 || c2 == -1) break;
        o = c1 << 2 >>> 0;
        o |= (c2 & 0x30) >> 4;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c3 == -1) break;
        o = (c2 & 0x0f) << 4 >>> 0;
        o |= (c3 & 0x3c) >> 2;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        o = (c3 & 0x03) << 6 >>> 0;
        o |= c4;
        rs.push(String.fromCharCode(o));
        ++olen;
    }
    var res = [];
    for(off = 0; off < olen; off++)res.push(rs[off].charCodeAt(0));
    return res;
}
/**
 * @type {number}
 * @const
 * @inner
 */ var BCRYPT_SALT_LEN = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
/**
 * @type {number}
 * @const
 * @inner
 */ var BLOWFISH_NUM_ROUNDS = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var MAX_EXECUTION_TIME = 100;
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var P_ORIG = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917,
    0x9216d5d9,
    0x8979fb1b
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var S_ORIG = [
    0xd1310ba6,
    0x98dfb5ac,
    0x2ffd72db,
    0xd01adfb7,
    0xb8e1afed,
    0x6a267e96,
    0xba7c9045,
    0xf12c7f99,
    0x24a19947,
    0xb3916cf7,
    0x0801f2e2,
    0x858efc16,
    0x636920d8,
    0x71574e69,
    0xa458fea3,
    0xf4933d7e,
    0x0d95748f,
    0x728eb658,
    0x718bcd58,
    0x82154aee,
    0x7b54a41d,
    0xc25a59b5,
    0x9c30d539,
    0x2af26013,
    0xc5d1b023,
    0x286085f0,
    0xca417918,
    0xb8db38ef,
    0x8e79dcb0,
    0x603a180e,
    0x6c9e0e8b,
    0xb01e8a3e,
    0xd71577c1,
    0xbd314b27,
    0x78af2fda,
    0x55605c60,
    0xe65525f3,
    0xaa55ab94,
    0x57489862,
    0x63e81440,
    0x55ca396a,
    0x2aab10b6,
    0xb4cc5c34,
    0x1141e8ce,
    0xa15486af,
    0x7c72e993,
    0xb3ee1411,
    0x636fbc2a,
    0x2ba9c55d,
    0x741831f6,
    0xce5c3e16,
    0x9b87931e,
    0xafd6ba33,
    0x6c24cf5c,
    0x7a325381,
    0x28958677,
    0x3b8f4898,
    0x6b4bb9af,
    0xc4bfe81b,
    0x66282193,
    0x61d809cc,
    0xfb21a991,
    0x487cac60,
    0x5dec8032,
    0xef845d5d,
    0xe98575b1,
    0xdc262302,
    0xeb651b88,
    0x23893e81,
    0xd396acc5,
    0x0f6d6ff3,
    0x83f44239,
    0x2e0b4482,
    0xa4842004,
    0x69c8f04a,
    0x9e1f9b5e,
    0x21c66842,
    0xf6e96c9a,
    0x670c9c61,
    0xabd388f0,
    0x6a51a0d2,
    0xd8542f68,
    0x960fa728,
    0xab5133a3,
    0x6eef0b6c,
    0x137a3be4,
    0xba3bf050,
    0x7efb2a98,
    0xa1f1651d,
    0x39af0176,
    0x66ca593e,
    0x82430e88,
    0x8cee8619,
    0x456f9fb4,
    0x7d84a5c3,
    0x3b8b5ebe,
    0xe06f75d8,
    0x85c12073,
    0x401a449f,
    0x56c16aa6,
    0x4ed3aa62,
    0x363f7706,
    0x1bfedf72,
    0x429b023d,
    0x37d0d724,
    0xd00a1248,
    0xdb0fead3,
    0x49f1c09b,
    0x075372c9,
    0x80991b7b,
    0x25d479d8,
    0xf6e8def7,
    0xe3fe501a,
    0xb6794c3b,
    0x976ce0bd,
    0x04c006ba,
    0xc1a94fb6,
    0x409f60c4,
    0x5e5c9ec2,
    0x196a2463,
    0x68fb6faf,
    0x3e6c53b5,
    0x1339b2eb,
    0x3b52ec6f,
    0x6dfc511f,
    0x9b30952c,
    0xcc814544,
    0xaf5ebd09,
    0xbee3d004,
    0xde334afd,
    0x660f2807,
    0x192e4bb3,
    0xc0cba857,
    0x45c8740f,
    0xd20b5f39,
    0xb9d3fbdb,
    0x5579c0bd,
    0x1a60320a,
    0xd6a100c6,
    0x402c7279,
    0x679f25fe,
    0xfb1fa3cc,
    0x8ea5e9f8,
    0xdb3222f8,
    0x3c7516df,
    0xfd616b15,
    0x2f501ec8,
    0xad0552ab,
    0x323db5fa,
    0xfd238760,
    0x53317b48,
    0x3e00df82,
    0x9e5c57bb,
    0xca6f8ca0,
    0x1a87562e,
    0xdf1769db,
    0xd542a8f6,
    0x287effc3,
    0xac6732c6,
    0x8c4f5573,
    0x695b27b0,
    0xbbca58c8,
    0xe1ffa35d,
    0xb8f011a0,
    0x10fa3d98,
    0xfd2183b8,
    0x4afcb56c,
    0x2dd1d35b,
    0x9a53e479,
    0xb6f84565,
    0xd28e49bc,
    0x4bfb9790,
    0xe1ddf2da,
    0xa4cb7e33,
    0x62fb1341,
    0xcee4c6e8,
    0xef20cada,
    0x36774c01,
    0xd07e9efe,
    0x2bf11fb4,
    0x95dbda4d,
    0xae909198,
    0xeaad8e71,
    0x6b93d5a0,
    0xd08ed1d0,
    0xafc725e0,
    0x8e3c5b2f,
    0x8e7594b7,
    0x8ff6e2fb,
    0xf2122b64,
    0x8888b812,
    0x900df01c,
    0x4fad5ea0,
    0x688fc31c,
    0xd1cff191,
    0xb3a8c1ad,
    0x2f2f2218,
    0xbe0e1777,
    0xea752dfe,
    0x8b021fa1,
    0xe5a0cc0f,
    0xb56f74e8,
    0x18acf3d6,
    0xce89e299,
    0xb4a84fe0,
    0xfd13e0b7,
    0x7cc43b81,
    0xd2ada8d9,
    0x165fa266,
    0x80957705,
    0x93cc7314,
    0x211a1477,
    0xe6ad2065,
    0x77b5fa86,
    0xc75442f5,
    0xfb9d35cf,
    0xebcdaf0c,
    0x7b3e89a0,
    0xd6411bd3,
    0xae1e7e49,
    0x00250e2d,
    0x2071b35e,
    0x226800bb,
    0x57b8e0af,
    0x2464369b,
    0xf009b91e,
    0x5563911d,
    0x59dfa6aa,
    0x78c14389,
    0xd95a537f,
    0x207d5ba2,
    0x02e5b9c5,
    0x83260376,
    0x6295cfa9,
    0x11c81968,
    0x4e734a41,
    0xb3472dca,
    0x7b14a94a,
    0x1b510052,
    0x9a532915,
    0xd60f573f,
    0xbc9bc6e4,
    0x2b60a476,
    0x81e67400,
    0x08ba6fb5,
    0x571be91f,
    0xf296ec6b,
    0x2a0dd915,
    0xb6636521,
    0xe7b9f9b6,
    0xff34052e,
    0xc5855664,
    0x53b02d5d,
    0xa99f8fa1,
    0x08ba4799,
    0x6e85076a,
    0x4b7a70e9,
    0xb5b32944,
    0xdb75092e,
    0xc4192623,
    0xad6ea6b0,
    0x49a7df7d,
    0x9cee60b8,
    0x8fedb266,
    0xecaa8c71,
    0x699a17ff,
    0x5664526c,
    0xc2b19ee1,
    0x193602a5,
    0x75094c29,
    0xa0591340,
    0xe4183a3e,
    0x3f54989a,
    0x5b429d65,
    0x6b8fe4d6,
    0x99f73fd6,
    0xa1d29c07,
    0xefe830f5,
    0x4d2d38e6,
    0xf0255dc1,
    0x4cdd2086,
    0x8470eb26,
    0x6382e9c6,
    0x021ecc5e,
    0x09686b3f,
    0x3ebaefc9,
    0x3c971814,
    0x6b6a70a1,
    0x687f3584,
    0x52a0e286,
    0xb79c5305,
    0xaa500737,
    0x3e07841c,
    0x7fdeae5c,
    0x8e7d44ec,
    0x5716f2b8,
    0xb03ada37,
    0xf0500c0d,
    0xf01c1f04,
    0x0200b3ff,
    0xae0cf51a,
    0x3cb574b2,
    0x25837a58,
    0xdc0921bd,
    0xd19113f9,
    0x7ca92ff6,
    0x94324773,
    0x22f54701,
    0x3ae5e581,
    0x37c2dadc,
    0xc8b57634,
    0x9af3dda7,
    0xa9446146,
    0x0fd0030e,
    0xecc8c73e,
    0xa4751e41,
    0xe238cd99,
    0x3bea0e2f,
    0x3280bba1,
    0x183eb331,
    0x4e548b38,
    0x4f6db908,
    0x6f420d03,
    0xf60a04bf,
    0x2cb81290,
    0x24977c79,
    0x5679b072,
    0xbcaf89af,
    0xde9a771f,
    0xd9930810,
    0xb38bae12,
    0xdccf3f2e,
    0x5512721f,
    0x2e6b7124,
    0x501adde6,
    0x9f84cd87,
    0x7a584718,
    0x7408da17,
    0xbc9f9abc,
    0xe94b7d8c,
    0xec7aec3a,
    0xdb851dfa,
    0x63094366,
    0xc464c3d2,
    0xef1c1847,
    0x3215d908,
    0xdd433b37,
    0x24c2ba16,
    0x12a14d43,
    0x2a65c451,
    0x50940002,
    0x133ae4dd,
    0x71dff89e,
    0x10314e55,
    0x81ac77d6,
    0x5f11199b,
    0x043556f1,
    0xd7a3c76b,
    0x3c11183b,
    0x5924a509,
    0xf28fe6ed,
    0x97f1fbfa,
    0x9ebabf2c,
    0x1e153c6e,
    0x86e34570,
    0xeae96fb1,
    0x860e5e0a,
    0x5a3e2ab3,
    0x771fe71c,
    0x4e3d06fa,
    0x2965dcb9,
    0x99e71d0f,
    0x803e89d6,
    0x5266c825,
    0x2e4cc978,
    0x9c10b36a,
    0xc6150eba,
    0x94e2ea78,
    0xa5fc3c53,
    0x1e0a2df4,
    0xf2f74ea7,
    0x361d2b3d,
    0x1939260f,
    0x19c27960,
    0x5223a708,
    0xf71312b6,
    0xebadfe6e,
    0xeac31f66,
    0xe3bc4595,
    0xa67bc883,
    0xb17f37d1,
    0x018cff28,
    0xc332ddef,
    0xbe6c5aa5,
    0x65582185,
    0x68ab9802,
    0xeecea50f,
    0xdb2f953b,
    0x2aef7dad,
    0x5b6e2f84,
    0x1521b628,
    0x29076170,
    0xecdd4775,
    0x619f1510,
    0x13cca830,
    0xeb61bd96,
    0x0334fe1e,
    0xaa0363cf,
    0xb5735c90,
    0x4c70a239,
    0xd59e9e0b,
    0xcbaade14,
    0xeecc86bc,
    0x60622ca7,
    0x9cab5cab,
    0xb2f3846e,
    0x648b1eaf,
    0x19bdf0ca,
    0xa02369b9,
    0x655abb50,
    0x40685a32,
    0x3c2ab4b3,
    0x319ee9d5,
    0xc021b8f7,
    0x9b540b19,
    0x875fa099,
    0x95f7997e,
    0x623d7da8,
    0xf837889a,
    0x97e32d77,
    0x11ed935f,
    0x16681281,
    0x0e358829,
    0xc7e61fd6,
    0x96dedfa1,
    0x7858ba99,
    0x57f584a5,
    0x1b227263,
    0x9b83c3ff,
    0x1ac24696,
    0xcdb30aeb,
    0x532e3054,
    0x8fd948e4,
    0x6dbc3128,
    0x58ebf2ef,
    0x34c6ffea,
    0xfe28ed61,
    0xee7c3c73,
    0x5d4a14d9,
    0xe864b7e3,
    0x42105d14,
    0x203e13e0,
    0x45eee2b6,
    0xa3aaabea,
    0xdb6c4f15,
    0xfacb4fd0,
    0xc742f442,
    0xef6abbb5,
    0x654f3b1d,
    0x41cd2105,
    0xd81e799e,
    0x86854dc7,
    0xe44b476a,
    0x3d816250,
    0xcf62a1f2,
    0x5b8d2646,
    0xfc8883a0,
    0xc1c7b6a3,
    0x7f1524c3,
    0x69cb7492,
    0x47848a0b,
    0x5692b285,
    0x095bbf00,
    0xad19489d,
    0x1462b174,
    0x23820e00,
    0x58428d2a,
    0x0c55f5ea,
    0x1dadf43e,
    0x233f7061,
    0x3372f092,
    0x8d937e41,
    0xd65fecf1,
    0x6c223bdb,
    0x7cde3759,
    0xcbee7460,
    0x4085f2a7,
    0xce77326e,
    0xa6078084,
    0x19f8509e,
    0xe8efd855,
    0x61d99735,
    0xa969a7aa,
    0xc50c06c2,
    0x5a04abfc,
    0x800bcadc,
    0x9e447a2e,
    0xc3453484,
    0xfdd56705,
    0x0e1e9ec9,
    0xdb73dbd3,
    0x105588cd,
    0x675fda79,
    0xe3674340,
    0xc5c43465,
    0x713e38d8,
    0x3d28f89e,
    0xf16dff20,
    0x153e21e7,
    0x8fb03d4a,
    0xe6e39f2b,
    0xdb83adf7,
    0xe93d5a68,
    0x948140f7,
    0xf64c261c,
    0x94692934,
    0x411520f7,
    0x7602d4f7,
    0xbcf46b2e,
    0xd4a20068,
    0xd4082471,
    0x3320f46a,
    0x43b7d4b7,
    0x500061af,
    0x1e39f62e,
    0x97244546,
    0x14214f74,
    0xbf8b8840,
    0x4d95fc1d,
    0x96b591af,
    0x70f4ddd3,
    0x66a02f45,
    0xbfbc09ec,
    0x03bd9785,
    0x7fac6dd0,
    0x31cb8504,
    0x96eb27b3,
    0x55fd3941,
    0xda2547e6,
    0xabca0a9a,
    0x28507825,
    0x530429f4,
    0x0a2c86da,
    0xe9b66dfb,
    0x68dc1462,
    0xd7486900,
    0x680ec0a4,
    0x27a18dee,
    0x4f3ffea2,
    0xe887ad8c,
    0xb58ce006,
    0x7af4d6b6,
    0xaace1e7c,
    0xd3375fec,
    0xce78a399,
    0x406b2a42,
    0x20fe9e35,
    0xd9f385b9,
    0xee39d7ab,
    0x3b124e8b,
    0x1dc9faf7,
    0x4b6d1856,
    0x26a36631,
    0xeae397b2,
    0x3a6efa74,
    0xdd5b4332,
    0x6841e7f7,
    0xca7820fb,
    0xfb0af54e,
    0xd8feb397,
    0x454056ac,
    0xba489527,
    0x55533a3a,
    0x20838d87,
    0xfe6ba9b7,
    0xd096954b,
    0x55a867bc,
    0xa1159a58,
    0xcca92963,
    0x99e1db33,
    0xa62a4a56,
    0x3f3125f9,
    0x5ef47e1c,
    0x9029317c,
    0xfdf8e802,
    0x04272f70,
    0x80bb155c,
    0x05282ce3,
    0x95c11548,
    0xe4c66d22,
    0x48c1133f,
    0xc70f86dc,
    0x07f9c9ee,
    0x41041f0f,
    0x404779a4,
    0x5d886e17,
    0x325f51eb,
    0xd59bc0d1,
    0xf2bcc18f,
    0x41113564,
    0x257b7834,
    0x602a9c60,
    0xdff8e8a3,
    0x1f636c1b,
    0x0e12b4c2,
    0x02e1329e,
    0xaf664fd1,
    0xcad18115,
    0x6b2395e0,
    0x333e92e1,
    0x3b240b62,
    0xeebeb922,
    0x85b2a20e,
    0xe6ba0d99,
    0xde720c8c,
    0x2da2f728,
    0xd0127845,
    0x95b794fd,
    0x647d0862,
    0xe7ccf5f0,
    0x5449a36f,
    0x877d48fa,
    0xc39dfd27,
    0xf33e8d1e,
    0x0a476341,
    0x992eff74,
    0x3a6f6eab,
    0xf4f8fd37,
    0xa812dc60,
    0xa1ebddf8,
    0x991be14c,
    0xdb6e6b0d,
    0xc67b5510,
    0x6d672c37,
    0x2765d43b,
    0xdcd0e804,
    0xf1290dc7,
    0xcc00ffa3,
    0xb5390f92,
    0x690fed0b,
    0x667b9ffb,
    0xcedb7d9c,
    0xa091cf0b,
    0xd9155ea3,
    0xbb132f88,
    0x515bad24,
    0x7b9479bf,
    0x763bd6eb,
    0x37392eb3,
    0xcc115979,
    0x8026e297,
    0xf42e312d,
    0x6842ada7,
    0xc66a2b3b,
    0x12754ccc,
    0x782ef11c,
    0x6a124237,
    0xb79251e7,
    0x06a1bbe6,
    0x4bfb6350,
    0x1a6b1018,
    0x11caedfa,
    0x3d25bdd8,
    0xe2e1c3c9,
    0x44421659,
    0x0a121386,
    0xd90cec6e,
    0xd5abea2a,
    0x64af674e,
    0xda86a85f,
    0xbebfe988,
    0x64e4c3fe,
    0x9dbc8057,
    0xf0f7c086,
    0x60787bf8,
    0x6003604d,
    0xd1fd8346,
    0xf6381fb0,
    0x7745ae04,
    0xd736fccc,
    0x83426b33,
    0xf01eab71,
    0xb0804187,
    0x3c005e5f,
    0x77a057be,
    0xbde8ae24,
    0x55464299,
    0xbf582e61,
    0x4e58f48f,
    0xf2ddfda2,
    0xf474ef38,
    0x8789bdc2,
    0x5366f9c3,
    0xc8b38e74,
    0xb475f255,
    0x46fcd9b9,
    0x7aeb2661,
    0x8b1ddf84,
    0x846a0e79,
    0x915f95e2,
    0x466e598e,
    0x20b45770,
    0x8cd55591,
    0xc902de4c,
    0xb90bace1,
    0xbb8205d0,
    0x11a86248,
    0x7574a99e,
    0xb77f19b6,
    0xe0a9dc09,
    0x662d09a1,
    0xc4324633,
    0xe85a1f02,
    0x09f0be8c,
    0x4a99a025,
    0x1d6efe10,
    0x1ab93d1d,
    0x0ba5a4df,
    0xa186f20f,
    0x2868f169,
    0xdcb7da83,
    0x573906fe,
    0xa1e2ce9b,
    0x4fcd7f52,
    0x50115e01,
    0xa70683fa,
    0xa002b5c4,
    0x0de6d027,
    0x9af88c27,
    0x773f8641,
    0xc3604c06,
    0x61a806b5,
    0xf0177a28,
    0xc0f586e0,
    0x006058aa,
    0x30dc7d62,
    0x11e69ed7,
    0x2338ea63,
    0x53c2dd94,
    0xc2c21634,
    0xbbcbee56,
    0x90bcb6de,
    0xebfc7da1,
    0xce591d76,
    0x6f05e409,
    0x4b7c0188,
    0x39720a3d,
    0x7c927c24,
    0x86e3725f,
    0x724d9db9,
    0x1ac15bb4,
    0xd39eb8fc,
    0xed545578,
    0x08fca5b5,
    0xd83d7cd3,
    0x4dad0fc4,
    0x1e50ef5e,
    0xb161e6f8,
    0xa28514d9,
    0x6c51133c,
    0x6fd5c7e7,
    0x56e14ec4,
    0x362abfce,
    0xddc6c837,
    0xd79a3234,
    0x92638212,
    0x670efa8e,
    0x406000e0,
    0x3a39ce37,
    0xd3faf5cf,
    0xabc27737,
    0x5ac52d1b,
    0x5cb0679e,
    0x4fa33742,
    0xd3822740,
    0x99bc9bbe,
    0xd5118e9d,
    0xbf0f7315,
    0xd62d1c7e,
    0xc700c47b,
    0xb78c1b6b,
    0x21a19045,
    0xb26eb1be,
    0x6a366eb4,
    0x5748ab2f,
    0xbc946e79,
    0xc6a376d2,
    0x6549c2c8,
    0x530ff8ee,
    0x468dde7d,
    0xd5730a1d,
    0x4cd04dc6,
    0x2939bbdb,
    0xa9ba4650,
    0xac9526e8,
    0xbe5ee304,
    0xa1fad5f0,
    0x6a2d519a,
    0x63ef8ce2,
    0x9a86ee22,
    0xc089c2b8,
    0x43242ef6,
    0xa51e03aa,
    0x9cf2d0a4,
    0x83c061ba,
    0x9be96a4d,
    0x8fe51550,
    0xba645bd6,
    0x2826a2f9,
    0xa73a3ae1,
    0x4ba99586,
    0xef5562e9,
    0xc72fefd3,
    0xf752f7da,
    0x3f046f69,
    0x77fa0a59,
    0x80e4a915,
    0x87b08601,
    0x9b09e6ad,
    0x3b3ee593,
    0xe990fd5a,
    0x9e34d797,
    0x2cf0b7d9,
    0x022b8b51,
    0x96d5ac3a,
    0x017da67d,
    0xd1cf3ed6,
    0x7c7d2d28,
    0x1f9f25cf,
    0xadf2b89b,
    0x5ad6b472,
    0x5a88f54c,
    0xe029ac71,
    0xe019a5e6,
    0x47b0acfd,
    0xed93fa9b,
    0xe8d3c48d,
    0x283b57cc,
    0xf8d56629,
    0x79132e28,
    0x785f0191,
    0xed756055,
    0xf7960e44,
    0xe3d35e8c,
    0x15056dd4,
    0x88f46dba,
    0x03a16125,
    0x0564f0bd,
    0xc3eb9e15,
    0x3c9057a2,
    0x97271aec,
    0xa93a072a,
    0x1b3f6d9b,
    0x1e6321f5,
    0xf59c66fb,
    0x26dcf319,
    0x7533d928,
    0xb155fdf5,
    0x03563482,
    0x8aba3cbb,
    0x28517711,
    0xc20ad9f8,
    0xabcc5167,
    0xccad925f,
    0x4de81751,
    0x3830dc8e,
    0x379d5862,
    0x9320f991,
    0xea7a90c2,
    0xfb3e7bce,
    0x5121ce64,
    0x774fbe32,
    0xa8b6e37e,
    0xc3293d46,
    0x48de5369,
    0x6413e680,
    0xa2ae0810,
    0xdd6db224,
    0x69852dfd,
    0x09072166,
    0xb39a460a,
    0x6445c0dd,
    0x586cdecf,
    0x1c20c8ae,
    0x5bbef7dd,
    0x1b588d40,
    0xccd2017f,
    0x6bb4e3bb,
    0xdda26a7e,
    0x3a59ff45,
    0x3e350a44,
    0xbcb4cdd5,
    0x72eacea8,
    0xfa6484bb,
    0x8d6612ae,
    0xbf3c6f47,
    0xd29be463,
    0x542f5d9e,
    0xaec2771b,
    0xf64e6370,
    0x740e0d8d,
    0xe75b1357,
    0xf8721671,
    0xaf537d5d,
    0x4040cb08,
    0x4eb4e2cc,
    0x34d2466a,
    0x0115af84,
    0xe1b00428,
    0x95983a1d,
    0x06b89fb4,
    0xce6ea048,
    0x6f3f3b82,
    0x3520ab82,
    0x011a1d4b,
    0x277227f8,
    0x611560b1,
    0xe7933fdc,
    0xbb3a792b,
    0x344525bd,
    0xa08839e1,
    0x51ce794b,
    0x2f32c9b7,
    0xa01fbac9,
    0xe01cc87e,
    0xbcc7d1f6,
    0xcf0111c3,
    0xa1e8aac7,
    0x1a908749,
    0xd44fbd9a,
    0xd0dadecb,
    0xd50ada38,
    0x0339c32a,
    0xc6913667,
    0x8df9317c,
    0xe0b12b4f,
    0xf79e59b7,
    0x43f5bb3a,
    0xf2d519ff,
    0x27d9459c,
    0xbf97222c,
    0x15e6fc2a,
    0x0f91fc71,
    0x9b941525,
    0xfae59361,
    0xceb69ceb,
    0xc2a86459,
    0x12baa8d1,
    0xb6c1075e,
    0xe3056a0c,
    0x10d25065,
    0xcb03a442,
    0xe0ec6e0e,
    0x1698db3b,
    0x4c98a0be,
    0x3278e964,
    0x9f1f9532,
    0xe0d392df,
    0xd3a0342b,
    0x8971f21e,
    0x1b0a7441,
    0x4ba3348c,
    0xc5be7120,
    0xc37632d8,
    0xdf359f8d,
    0x9b992f2e,
    0xe60b6f47,
    0x0fe3f11d,
    0xe54cda54,
    0x1edad891,
    0xce6279cf,
    0xcd3e7e6f,
    0x1618b166,
    0xfd2c1d05,
    0x848fd2c5,
    0xf6fb2299,
    0xf523f357,
    0xa6327623,
    0x93a83531,
    0x56cccd02,
    0xacf08162,
    0x5a75ebb5,
    0x6e163697,
    0x88d273cc,
    0xde966292,
    0x81b949d0,
    0x4c50901b,
    0x71c65614,
    0xe6c6c7bd,
    0x327a140a,
    0x45e1d006,
    0xc3f27b9a,
    0xc9aa53fd,
    0x62a80f00,
    0xbb25bfe2,
    0x35bdd2f6,
    0x71126905,
    0xb2040222,
    0xb6cbcf7c,
    0xcd769c2b,
    0x53113ec0,
    0x1640e3d3,
    0x38abbd60,
    0x2547adf0,
    0xba38209c,
    0xf746ce76,
    0x77afa1c5,
    0x20756060,
    0x85cbfe4e,
    0x8ae88dd8,
    0x7aaaf9b0,
    0x4cf9aa7e,
    0x1948c25c,
    0x02fb8a8c,
    0x01c36ae4,
    0xd6ebe1f9,
    0x90d4f869,
    0xa65cdea0,
    0x3f09252d,
    0xc208e69f,
    0xb74e6132,
    0xce77e25b,
    0x578fdfe3,
    0x3ac372e6
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var C_ORIG = [
    0x4f727068,
    0x65616e42,
    0x65686f6c,
    0x64657253,
    0x63727944,
    0x6f756274
];
/**
 * @param {Array.<number>} lr
 * @param {number} off
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @returns {Array.<number>}
 * @inner
 */ function _encipher(lr, off, P, S) {
    // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
    var n, l = lr[off], r = lr[off + 1];
    l ^= P[0];
    /*
    for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
        // Feistel substitution on left word
        n  = S[l >>> 24],
        n += S[0x100 | ((l >> 16) & 0xff)],
        n ^= S[0x200 | ((l >> 8) & 0xff)],
        n += S[0x300 | (l & 0xff)],
        r ^= n ^ P[++i],
        // Feistel substitution on right word
        n  = S[r >>> 24],
        n += S[0x100 | ((r >> 16) & 0xff)],
        n ^= S[0x200 | ((r >> 8) & 0xff)],
        n += S[0x300 | (r & 0xff)],
        l ^= n ^ P[++i];
    */ //The following is an unrolled version of the above loop.
    //Iteration 0
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[1];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[2];
    //Iteration 1
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[3];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[4];
    //Iteration 2
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[5];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[6];
    //Iteration 3
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[7];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[8];
    //Iteration 4
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[9];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[10];
    //Iteration 5
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[11];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[12];
    //Iteration 6
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[13];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[14];
    //Iteration 7
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[15];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[16];
    lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
    lr[off + 1] = l;
    return lr;
}
/**
 * @param {Array.<number>} data
 * @param {number} offp
 * @returns {{key: number, offp: number}}
 * @inner
 */ function _streamtoword(data, offp) {
    for(var i = 0, word = 0; i < 4; ++i)word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;
    return {
        key: word,
        offp: offp
    };
}
/**
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _key(key, P, S) {
    var offset = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
    for(i = 0; i < plen; i += 2)lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Expensive key schedule Blowfish.
 * @param {Array.<number>} data
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _ekskey(data, key, P, S) {
    var offp = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
    offp = 0;
    for(i = 0; i < plen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Internaly crypts a string.
 * @param {Array.<number>} b Bytes to crypt
 * @param {Array.<number>} salt Salt bytes to use
 * @param {number} rounds Number of rounds
 * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
 *  omitted, the operation will be performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _crypt(b, salt, rounds, callback, progressCallback) {
    var cdata = C_ORIG.slice(), clen = cdata.length, err;
    // Validate
    if (rounds < 4 || rounds > 31) {
        err = Error("Illegal number of rounds (4-31): " + rounds);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.length !== BCRYPT_SALT_LEN) {
        err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    rounds = 1 << rounds >>> 0;
    var P, S, i = 0, j;
    //Use typed arrays when available - huge speedup!
    if (typeof Int32Array === "function") {
        P = new Int32Array(P_ORIG);
        S = new Int32Array(S_ORIG);
    } else {
        P = P_ORIG.slice();
        S = S_ORIG.slice();
    }
    _ekskey(salt, b, P, S);
    /**
   * Calcualtes the next round.
   * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
   * @inner
   */ function next() {
        if (progressCallback) progressCallback(i / rounds);
        if (i < rounds) {
            var start = Date.now();
            for(; i < rounds;){
                i = i + 1;
                _key(b, P, S);
                _key(salt, P, S);
                if (Date.now() - start > MAX_EXECUTION_TIME) break;
            }
        } else {
            for(i = 0; i < 64; i++)for(j = 0; j < clen >> 1; j++)_encipher(cdata, j << 1, P, S);
            var ret = [];
            for(i = 0; i < clen; i++)ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);
            if (callback) {
                callback(null, ret);
                return;
            } else return ret;
        }
        if (callback) nextTick(next);
    }
    // Async
    if (typeof callback !== "undefined") {
        next();
    // Sync
    } else {
        var res;
        while(true)if (typeof (res = next()) !== "undefined") return res || [];
    }
}
/**
 * Internally hashes a password.
 * @param {string} password Password to hash
 * @param {?string} salt Salt to use, actually never null
 * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
 *  hashing is performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _hash(password, salt, callback, progressCallback) {
    var err;
    if (typeof password !== "string" || typeof salt !== "string") {
        err = Error("Invalid string / salt: Not a string");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    // Validate the salt
    var minor, offset;
    if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
        err = Error("Invalid salt version: " + salt.substring(0, 2));
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
    else {
        minor = salt.charAt(2);
        if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        offset = 4;
    }
    // Extract number of rounds
    if (salt.charAt(offset + 2) > "$") {
        err = Error("Missing salt rounds");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
    password += minor >= "a" ? "\x00" : "";
    var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
    /**
   * Finishes hashing.
   * @param {Array.<number>} bytes Byte array
   * @returns {string}
   * @inner
   */ function finish(bytes) {
        var res = [];
        res.push("$2");
        if (minor >= "a") res.push(minor);
        res.push("$");
        if (rounds < 10) res.push("0");
        res.push(rounds.toString());
        res.push("$");
        res.push(base64_encode(saltb, saltb.length));
        res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
        return res.join("");
    }
    // Sync
    if (typeof callback == "undefined") return finish(_crypt(passwordb, saltb, rounds));
    else {
        _crypt(passwordb, saltb, rounds, function(err, bytes) {
            if (err) callback(err, null);
            else callback(null, finish(bytes));
        }, progressCallback);
    }
}
function encodeBase64(bytes, length) {
    return base64_encode(bytes, length);
}
function decodeBase64(string, length) {
    return base64_decode(string, length);
}
const __TURBOPACK__default__export__ = {
    setRandomFallback,
    genSaltSync,
    genSalt,
    hashSync,
    hash,
    compareSync,
    compare,
    getRounds,
    getSalt,
    truncates,
    encodeBase64,
    decodeBase64
};
}),
];

//# sourceMappingURL=012s_0zf.at8._.js.map