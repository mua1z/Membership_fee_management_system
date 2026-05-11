module.exports = [
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
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
const rnds8 = new Uint8Array(16);
function rng() {
    return crypto.getRandomValues(rnds8);
}
}),
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/validate.js [app-route] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/stringify.js [app-route] (ecmascript)");
;
;
function v4(options, buf, offset) {
    if (!buf && !options && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/MCMS/MCMS/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript)");
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
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/result-rx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ /* eslint-disable-next-line no-unused-vars */ var neo4j_driver_core_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)");
var rxjs_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var operators_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/operators/index.js [app-route] (ecmascript)");
var States = {
    READY: 0,
    STREAMING: 1,
    COMPLETED: 2
};
/**
 * The reactive result interface.
 */ var RxResult = function() {
    /**
     * @constructor
     * @protected
     * @param {Observable<Result>} result - An observable of single Result instance to relay requests.
     * @param {number} state - The streaming state
     */ function RxResult(result, state) {
        var replayedResult = result.pipe((0, operators_1.publishReplay)(1), (0, operators_1.refCount)());
        this._result = replayedResult;
        this._keys = replayedResult.pipe((0, operators_1.mergeMap)(function(r) {
            return (0, rxjs_1.from)(r.keys());
        }), (0, operators_1.publishReplay)(1), (0, operators_1.refCount)());
        this._records = undefined;
        this._controls = new StreamControl();
        this._summary = new rxjs_1.ReplaySubject();
        this._state = state || States.READY;
    }
    /**
     * Returns an observable that exposes a single item containing field names
     * returned by the executing query.
     *
     * Errors raised by actual query execution can surface on the returned
     * observable stream.
     *
     * @public
     * @returns {Observable<string[]>} - An observable stream (with exactly one element) of field names.
     */ RxResult.prototype.keys = function() {
        return this._keys;
    };
    /**
     * Returns an observable that exposes each record returned by the executing query.
     *
     * Errors raised during the streaming phase can surface on the returned observable stream.
     *
     * @public
     * @returns {Observable<Record>} - An observable stream of records.
     */ RxResult.prototype.records = function() {
        var _this = this;
        var result = this._result.pipe((0, operators_1.mergeMap)(function(result) {
            return new rxjs_1.Observable(function(recordsObserver) {
                return _this._startStreaming({
                    result: result,
                    recordsObserver: recordsObserver
                });
            });
        }));
        result.push = function() {
            return _this._push();
        };
        return result;
    };
    /**
     * Returns an observable that exposes a single item of {@link ResultSummary} that is generated by
     * the server after the streaming of the executing query is completed.
     *
     * *Subscribing to this stream before subscribing to records() stream causes the results to be discarded on the server.*
     *
     * @public
     * @returns {Observable<ResultSummary>} - An observable stream (with exactly one element) of result summary.
     */ RxResult.prototype.consume = function() {
        var _this = this;
        return this._result.pipe((0, operators_1.mergeMap)(function(result) {
            return new rxjs_1.Observable(function(summaryObserver) {
                return _this._startStreaming({
                    result: result,
                    summaryObserver: summaryObserver
                });
            });
        }));
    };
    /**
     * Pauses the automatic streaming of records.
     *
     * This method provides a way of control the flow of records
     *
     * @experimental
     */ RxResult.prototype.pause = function() {
        this._controls.pause();
    };
    /**
     * Resumes the automatic streaming of records.
     *
     * This method won't need to be called in normal stream operation. It only applies to the case when the stream is paused.
     *
     * This method is method won't start the consuming records if the {@link records} stream didn't get subscribed.
     * @experimental
     * @returns {Promise<void>} - A promise that resolves when the stream is resumed.
     */ RxResult.prototype.resume = function() {
        return this._controls.resume();
    };
    /**
     * Pushes the next record to the stream.
     *
     * This method automatic pause the auto-streaming of records and then push next record to the stream.
     *
     * For returning the automatic streaming of records, use {@link resume} method.
     *
     * @experimental
     * @returns {Promise<void>} - A promise that resolves when the push is completed.
     */ RxResult.prototype.push = function() {
        return this._controls.push();
    };
    RxResult.prototype._startStreaming = function(_a) {
        var _b = _a === void 0 ? {} : _a, result = _b.result, _c = _b.recordsObserver, recordsObserver = _c === void 0 ? null : _c, _d = _b.summaryObserver, summaryObserver = _d === void 0 ? null : _d;
        var subscriptions = [];
        if (summaryObserver) {
            subscriptions.push(this._summary.subscribe(summaryObserver));
        }
        if (this._state < States.STREAMING) {
            this._state = States.STREAMING;
            this._setupRecordsStream(result);
            if (recordsObserver) {
                subscriptions.push(this._records.subscribe(recordsObserver));
            } else {
                result._cancel();
            }
            subscriptions.push({
                unsubscribe: function() {
                    if (result._cancel) {
                        result._cancel();
                    }
                }
            });
        } else if (recordsObserver) {
            recordsObserver.error((0, neo4j_driver_core_1.newError)('Streaming has already started/consumed with a previous records or summary subscription.'));
        }
        return function() {
            subscriptions.forEach(function(s) {
                return s.unsubscribe();
            });
        };
    };
    /**
     * Create a {@link Observable} for the current {@link RxResult}
     *
     *
     * @package
     * @experimental
     * @since 5.0
     * @return {Observable<RxResult>}
     */ RxResult.prototype._toObservable = function() {
        var _this = this;
        function wrap(result) {
            return new rxjs_1.Observable(function(observer) {
                observer.next(result);
                observer.complete();
            });
        }
        return new rxjs_1.Observable(function(observer) {
            _this._result.subscribe({
                complete: function() {
                    return observer.complete();
                },
                next: function(result) {
                    return observer.next(new RxResult(wrap(result)), _this._state);
                },
                error: function(e) {
                    return observer.error(e);
                }
            });
        });
    };
    RxResult.prototype._setupRecordsStream = function(result) {
        var _this = this;
        if (this._records) {
            return this._records;
        }
        this._records = createFullyControlledSubject(result[Symbol.asyncIterator](), {
            complete: function() {
                return __awaiter(_this, void 0, void 0, function() {
                    var _a, _b;
                    return __generator(this, function(_c) {
                        switch(_c.label){
                            case 0:
                                this._state = States.COMPLETED;
                                _b = (_a = this._summary).next;
                                return [
                                    4 /*yield*/ ,
                                    result.summary()
                                ];
                            case 1:
                                _b.apply(_a, [
                                    _c.sent()
                                ]);
                                this._summary.complete();
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            },
            error: function(error) {
                _this._state = States.COMPLETED;
                _this._summary.error(error);
            }
        }, this._controls);
        return this._records;
    };
    return RxResult;
}();
exports.default = RxResult;
function createFullyControlledSubject(iterator, completeObserver, streamControl) {
    var _this = this;
    if (streamControl === void 0) {
        streamControl = new StreamControl();
    }
    var subject = new rxjs_1.Subject();
    var pushNextValue = function(result) {
        return __awaiter(_this, void 0, void 0, function() {
            var _a, done, value, error_1;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _b.trys.push([
                            0,
                            2,
                            3,
                            4
                        ]);
                        streamControl.pushing = true;
                        return [
                            4 /*yield*/ ,
                            result
                        ];
                    case 1:
                        _a = _b.sent(), done = _a.done, value = _a.value;
                        if (done) {
                            subject.complete();
                            completeObserver.complete();
                        } else {
                            subject.next(value);
                            if (!streamControl.paused) {
                                pushNextValue(iterator.next()).catch(function() {});
                            }
                        }
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 2:
                        error_1 = _b.sent();
                        subject.error(error_1);
                        completeObserver.error(error_1);
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        streamControl.pushing = false;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    function push(value) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            pushNextValue(iterator.next(value))
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }
    streamControl.pusher = push;
    push();
    return subject;
}
var StreamControl = function() {
    function StreamControl(push) {
        if (push === void 0) {
            push = function() {
                return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        return [
                            2 /*return*/ 
                        ];
                    });
                });
            };
        }
        var _this = this;
        this._paused = false;
        this._pushing = false;
        this._push = push;
    }
    StreamControl.prototype.pause = function() {
        this._paused = true;
    };
    Object.defineProperty(StreamControl.prototype, "paused", {
        get: function() {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamControl.prototype, "pushing", {
        get: function() {
            return this._pushing;
        },
        set: function(pushing) {
            this._pushing = pushing;
        },
        enumerable: false,
        configurable: true
    });
    StreamControl.prototype.resume = function() {
        return __awaiter(this, void 0, void 0, function() {
            var wasPaused;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        wasPaused = this._paused;
                        this._paused = false;
                        if (!(wasPaused && !this._pushing)) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this._push()
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    StreamControl.prototype.push = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        this.pause();
                        return [
                            4 /*yield*/ ,
                            this._push()
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Object.defineProperty(StreamControl.prototype, "pusher", {
        get: function() {
            return this._push;
        },
        set: function(push) {
            this._push = push;
        },
        enumerable: false,
        configurable: true
    });
    return StreamControl;
}();
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-rx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ var rxjs_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var result_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/result-rx.js [app-route] (ecmascript)"));
// eslint-disable-next-line no-unused-vars
var neo4j_driver_core_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)"));
/**
 * A reactive transaction, which provides the same functionality as {@link Transaction} but through a Reactive API.
 */ var RxTransaction = function() {
    /**
     * @constructor
     * @protected
     * @param {Transaction} txc - The underlying transaction instance to relay requests
     */ function RxTransaction(txc) {
        this._txc = txc;
    }
    /**
     * Creates a reactive result that will execute the query in this transaction, with the provided parameters.
     *
     * @public
     * @param {string} query - Query to be executed.
     * @param {Object} parameters - Parameter values to use in query execution.
     * @returns {RxResult} - A reactive result
     */ RxTransaction.prototype.run = function(query, parameters) {
        var _this = this;
        return new result_rx_1.default(new rxjs_1.Observable(function(observer) {
            try {
                observer.next(_this._txc.run(query, parameters));
                observer.complete();
            } catch (err) {
                observer.error(err);
            }
            return function() {};
        }));
    };
    /**
     *  Commits the transaction.
     *
     * @public
     * @returns {Observable} - An empty observable
     */ RxTransaction.prototype.commit = function() {
        var _this = this;
        return new rxjs_1.Observable(function(observer) {
            _this._txc.commit().then(function() {
                observer.complete();
            }).catch(function(err) {
                return observer.error(err);
            });
        });
    };
    /**
     *  Rolls back the transaction.
     *
     * @public
     * @returns {Observable} - An empty observable
     */ RxTransaction.prototype.rollback = function() {
        var _this = this;
        return new rxjs_1.Observable(function(observer) {
            _this._txc.rollback().then(function() {
                observer.complete();
            }).catch(function(err) {
                return observer.error(err);
            });
        });
    };
    /**
     * Check if this transaction is active, which means commit and rollback did not happen.
     * @return {boolean} `true` when not committed and not rolled back, `false` otherwise.
     */ RxTransaction.prototype.isOpen = function() {
        return this._txc.isOpen();
    };
    /**
     * Closes the transaction
     *
     * This method will roll back the transaction if it is not already committed or rolled back.
     *
     * @returns {Observable} - An empty observable
     */ RxTransaction.prototype.close = function() {
        var _this = this;
        return new rxjs_1.Observable(function(observer) {
            _this._txc.close().then(function() {
                observer.complete();
            }).catch(function(err) {
                return observer.error(err);
            });
        });
    };
    return RxTransaction;
}();
exports.default = RxTransaction;
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-managed-rx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ // eslint-disable-next-line no-unused-vars
var result_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/result-rx.js [app-route] (ecmascript)"));
// eslint-disable-next-line no-unused-vars
var transaction_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-rx.js [app-route] (ecmascript)"));
/**
 * Represents a rx transaction that is managed by the transaction executor.
 *
 * @public
 */ var RxManagedTransaction = function() {
    /**
     * @private
     */ function RxManagedTransaction(_a) {
        var run = _a.run;
        this._run = run;
    }
    /**
     * @private
     * @param {RxTransaction} txc - The transaction to be wrapped
     * @returns {RxManagedTransaction} The managed transaction
     */ RxManagedTransaction.fromTransaction = function(txc) {
        return new RxManagedTransaction({
            run: txc.run.bind(txc)
        });
    };
    /**
     * Creates a reactive result that will execute the query in this transaction, with the provided parameters.
     *
     * @public
     * @param {string} query - Query to be executed.
     * @param {Object} parameters - Parameter values to use in query execution.
     * @returns {RxResult} - A reactive result
     */ RxManagedTransaction.prototype.run = function(query, parameters) {
        return this._run(query, parameters);
    };
    return RxManagedTransaction;
}();
exports.default = RxManagedTransaction;
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/internal/retry-logic-rx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
var neo4j_driver_core_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)");
// eslint-disable-next-line no-unused-vars
var rxjs_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var operators_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/operators/index.js [app-route] (ecmascript)");
var // eslint-disable-next-line no-unused-vars
Logger = neo4j_driver_core_1.internal.logger.Logger;
var SERVICE_UNAVAILABLE = neo4j_driver_core_1.error.SERVICE_UNAVAILABLE;
var DEFAULT_MAX_RETRY_TIME_MS = 30 * 1000; // 30 seconds
var DEFAULT_INITIAL_RETRY_DELAY_MS = 1000; // 1 seconds
var DEFAULT_RETRY_DELAY_MULTIPLIER = 2.0;
var DEFAULT_RETRY_DELAY_JITTER_FACTOR = 0.2;
var RxRetryLogic = function() {
    /**
     *
     * @param {Object} args
     * @param {Logger} args.logger
     */ function RxRetryLogic(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.maxRetryTimeout, maxRetryTimeout = _c === void 0 ? DEFAULT_MAX_RETRY_TIME_MS : _c, _d = _b.initialDelay, initialDelay = _d === void 0 ? DEFAULT_INITIAL_RETRY_DELAY_MS : _d, _e = _b.delayMultiplier, delayMultiplier = _e === void 0 ? DEFAULT_RETRY_DELAY_MULTIPLIER : _e, _f = _b.delayJitter, delayJitter = _f === void 0 ? DEFAULT_RETRY_DELAY_JITTER_FACTOR : _f, _g = _b.logger, logger = _g === void 0 ? null : _g;
        this._maxRetryTimeout = valueOrDefault(maxRetryTimeout, DEFAULT_MAX_RETRY_TIME_MS);
        this._initialDelay = valueOrDefault(initialDelay, DEFAULT_INITIAL_RETRY_DELAY_MS);
        this._delayMultiplier = valueOrDefault(delayMultiplier, DEFAULT_RETRY_DELAY_MULTIPLIER);
        this._delayJitter = valueOrDefault(delayJitter, DEFAULT_RETRY_DELAY_JITTER_FACTOR);
        this._logger = logger;
    }
    /**
     *
     * @param {Observable<Any>} work
     */ RxRetryLogic.prototype.retry = function(work) {
        var _this = this;
        return work.pipe((0, operators_1.retryWhen)(function(failedWork) {
            var handledExceptions = [];
            var startTime = Date.now();
            var retryCount = 1;
            var delayDuration = _this._initialDelay;
            return failedWork.pipe((0, operators_1.mergeMap)(function(err) {
                if (!(0, neo4j_driver_core_1.isRetryableError)(err)) {
                    return (0, rxjs_1.throwError)(function() {
                        return err;
                    });
                }
                handledExceptions.push(err);
                if (retryCount >= 2 && Date.now() - startTime >= _this._maxRetryTimeout) {
                    var error_1 = (0, neo4j_driver_core_1.newError)("Failed after retried for ".concat(retryCount, " times in ").concat(_this._maxRetryTimeout, " ms. Make sure that your database is online and retry again."), SERVICE_UNAVAILABLE);
                    error_1.seenErrors = handledExceptions;
                    return (0, rxjs_1.throwError)(function() {
                        return error_1;
                    });
                }
                var nextDelayDuration = _this._computeNextDelay(delayDuration);
                delayDuration = delayDuration * _this._delayMultiplier;
                retryCount++;
                if (_this._logger) {
                    _this._logger.warn("Transaction failed and will be retried in ".concat(nextDelayDuration));
                }
                return (0, rxjs_1.of)(1).pipe((0, operators_1.delay)(nextDelayDuration));
            }));
        }));
    };
    RxRetryLogic.prototype._computeNextDelay = function(delay) {
        var jitter = delay * this._delayJitter;
        return delay - jitter + 2 * jitter * Math.random();
    };
    return RxRetryLogic;
}();
exports.default = RxRetryLogic;
function valueOrDefault(value, defaultValue) {
    if (value || value === 0) {
        return value;
    }
    return defaultValue;
}
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/session-rx.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ var rxjs_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var operators_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/rxjs/dist/cjs/operators/index.js [app-route] (ecmascript)");
var result_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/result-rx.js [app-route] (ecmascript)"));
// eslint-disable-next-line no-unused-vars
var neo4j_driver_core_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)");
var transaction_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-rx.js [app-route] (ecmascript)"));
var transaction_managed_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-managed-rx.js [app-route] (ecmascript)"));
var retry_logic_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/internal/retry-logic-rx.js [app-route] (ecmascript)"));
var _a = neo4j_driver_core_1.internal.constants, ACCESS_MODE_READ = _a.ACCESS_MODE_READ, ACCESS_MODE_WRITE = _a.ACCESS_MODE_WRITE, TELEMETRY_APIS = _a.TELEMETRY_APIS, TxConfig = neo4j_driver_core_1.internal.txConfig.TxConfig;
/**
 * A Reactive session, which provides the same functionality as {@link Session} but through a Reactive API.
 */ var RxSession = function() {
    /**
     * Constructs a reactive session with given default session instance and provided driver configuration.
     *
     * @protected
     * @param {Object} param - Object parameter
     * @param {Session} param.session - The underlying session instance to relay requests
     */ function RxSession(_a) {
        var _b = _a === void 0 ? {} : _a, session = _b.session, config = _b.config, log = _b.log;
        this._session = session;
        this._retryLogic = _createRetryLogic(config);
        this._log = log;
    }
    /**
     * Creates a reactive result that will execute the  query with the provided parameters and the provided
     * transaction configuration that applies to the underlying auto-commit transaction.
     *
     * @public
     * @param {string} query - Query to be executed.
     * @param {Object} parameters - Parameter values to use in query execution.
     * @param {TransactionConfig} transactionConfig - Configuration for the new auto-commit transaction.
     * @returns {RxResult} - A reactive result
     */ RxSession.prototype.run = function(query, parameters, transactionConfig) {
        var _this = this;
        return new result_rx_1.default(new rxjs_1.Observable(function(observer) {
            try {
                observer.next(_this._session.run(query, parameters, transactionConfig));
                observer.complete();
            } catch (err) {
                observer.error(err);
            }
            return function() {};
        }));
    };
    /**
     * Starts a new explicit transaction with the provided transaction configuration.
     *
     * @public
     * @param {TransactionConfig} transactionConfig - Configuration for the new transaction.
     * @returns {Observable<RxTransaction>} - A reactive stream that will generate at most **one** RxTransaction instance.
     */ RxSession.prototype.beginTransaction = function(transactionConfig) {
        return this._beginTransaction(this._session._mode, transactionConfig, {
            api: TELEMETRY_APIS.UNMANAGED_TRANSACTION
        });
    };
    /**
     * Executes the provided unit of work in a {@link READ} reactive transaction which is created with the provided
     * transaction configuration.
     * @public
     * @param {function(txc: RxManagedTransaction): Observable} work - A unit of work to be executed.
     * @param {TransactionConfig} transactionConfig - Configuration for the enclosing transaction created by the driver.
     * @returns {Observable} - A reactive stream returned by the unit of work.
     */ RxSession.prototype.executeRead = function(work, transactionConfig) {
        return this._executeInTransaction(ACCESS_MODE_READ, work, transactionConfig);
    };
    /**
     * Executes the provided unit of work in a {@link WRITE} reactive transaction which is created with the provided
     * transaction configuration.
     * @public
     * @param {function(txc: RxManagedTransaction): Observable} work - A unit of work to be executed.
     * @param {TransactionConfig} transactionConfig - Configuration for the enclosing transaction created by the driver.
     * @returns {Observable} - A reactive stream returned by the unit of work.
     */ RxSession.prototype.executeWrite = function(work, transactionConfig) {
        return this._executeInTransaction(ACCESS_MODE_WRITE, work, transactionConfig);
    };
    /**
     * @private
     * @param {function(txc: RxManagedTransaction): Observable} work
     * @param {TransactionConfig} transactionConfig
     * @returns {Observable}
     */ RxSession.prototype._executeInTransaction = function(accessMode, work, transactionConfig) {
        var wrapper = function(txc) {
            return new transaction_managed_rx_1.default({
                run: txc.run.bind(txc)
            });
        };
        return this._runTransaction(accessMode, work, transactionConfig, wrapper);
    };
    /**
     * Closes this reactive session.
     *
     * @public
     * @returns {Observable} - An empty reactive stream
     */ RxSession.prototype.close = function() {
        var _this = this;
        return new rxjs_1.Observable(function(observer) {
            _this._session.close().then(function() {
                observer.complete();
            }).catch(function(err) {
                return observer.error(err);
            });
        });
    };
    RxSession.prototype[Symbol.asyncDispose] = function() {
        return this.close();
    };
    /**
     * Returns the bookmarks received following the last successfully completed query, which is executed
     * either in an {@link RxTransaction} obtained from this session instance or directly through one of
     * the {@link RxSession#run} method of this session instance.
     *
     * If no bookmarks were received or if this transaction was rolled back, the bookmarks value will not be
     * changed.
     *
     * @public
     * @returns {string[]}
     */ RxSession.prototype.lastBookmarks = function() {
        return this._session.lastBookmarks();
    };
    /**
     * @private
     */ RxSession.prototype._beginTransaction = function(accessMode, transactionConfig, apiTelemetryConfig) {
        var _this = this;
        var txConfig = TxConfig.empty();
        if (transactionConfig) {
            txConfig = new TxConfig(transactionConfig, this._log);
        }
        return new rxjs_1.Observable(function(observer) {
            try {
                _this._session._beginTransaction(accessMode, txConfig, apiTelemetryConfig).then(function(tx) {
                    observer.next(new transaction_rx_1.default(tx));
                    observer.complete();
                }).catch(function(err) {
                    return observer.error(err);
                });
            } catch (err) {
                observer.error(err);
            }
            return function() {};
        });
    };
    /**
     * @private
     */ RxSession.prototype._runTransaction = function(accessMode, work, transactionConfig, transactionWrapper) {
        var _this = this;
        if (transactionWrapper === void 0) {
            transactionWrapper = function(tx) {
                return tx;
            };
        }
        var txConfig = TxConfig.empty();
        if (transactionConfig) {
            txConfig = new TxConfig(transactionConfig);
        }
        var context = {
            apiTelemetryConfig: {
                api: TELEMETRY_APIS.MANAGED_TRANSACTION,
                onTelemetrySuccess: function() {
                    context.apiTelemetryConfig = undefined;
                }
            }
        };
        return this._retryLogic.retry((0, rxjs_1.of)(1).pipe((0, operators_1.mergeMap)(function() {
            return _this._beginTransaction(accessMode, txConfig, context.apiTelemetryConfig);
        }), (0, operators_1.mergeMap)(function(txc) {
            return (0, rxjs_1.defer)(function() {
                try {
                    return work(transactionWrapper(txc));
                } catch (err) {
                    return (0, rxjs_1.throwError)(function() {
                        return err;
                    });
                }
            }).pipe((0, operators_1.catchError)(function(err) {
                return txc.rollback().pipe((0, operators_1.concatWith)((0, rxjs_1.throwError)(function() {
                    return err;
                })));
            }), (0, operators_1.concatWith)(txc.commit()));
        })));
    };
    return RxSession;
}();
exports.default = RxSession;
function _createRetryLogic(config) {
    var maxRetryTimeout = config && config.maxTransactionRetryTime ? config.maxTransactionRetryTime : null;
    return new retry_logic_rx_1.default({
        maxRetryTimeout: maxRetryTimeout
    });
}
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/driver.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WRITE = exports.READ = exports.Driver = void 0;
var neo4j_driver_core_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)");
var session_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/session-rx.js [app-route] (ecmascript)"));
var FETCH_ALL = neo4j_driver_core_1.internal.constants.FETCH_ALL;
var READ = neo4j_driver_core_1.driver.READ, WRITE = neo4j_driver_core_1.driver.WRITE;
exports.READ = READ;
exports.WRITE = WRITE;
/**
 * A driver maintains one or more {@link Session}s with a remote
 * Neo4j instance. Through the {@link Session}s you can send queries
 * and retrieve results from the database.
 *
 * Drivers are reasonably expensive to create - you should strive to keep one
 * driver instance around per Neo4j Instance you connect to.
 *
 * @access public
 */ var Driver = function(_super) {
    __extends(Driver, _super);
    function Driver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Acquire a reactive session to communicate with the database. The session will
     * borrow connections from the underlying connection pool as required and
     * should be considered lightweight and disposable.
     *
     * This comes with some responsibility - make sure you always call
     * {@link close} when you are done using a session, and likewise,
     * make sure you don't close your session before you are done using it. Once
     * it is closed, the underlying connection will be released to the connection
     * pool and made available for others to use.
     *
     * @public
     * @param {SessionConfig} config
     * @returns {RxSession} new reactive session.
     */ Driver.prototype.rxSession = function(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.defaultAccessMode, defaultAccessMode = _c === void 0 ? WRITE : _c, bookmarks = _b.bookmarks, _d = _b.database, database = _d === void 0 ? '' : _d, fetchSize = _b.fetchSize, impersonatedUser = _b.impersonatedUser, bookmarkManager = _b.bookmarkManager, notificationFilter = _b.notificationFilter, auth = _b.auth;
        return new session_rx_1.default({
            session: this._newSession({
                defaultAccessMode: defaultAccessMode,
                bookmarkOrBookmarks: bookmarks,
                database: database,
                impersonatedUser: impersonatedUser,
                auth: auth,
                reactive: false,
                fetchSize: validateFetchSizeValue(fetchSize, this._config.fetchSize),
                bookmarkManager: bookmarkManager,
                notificationFilter: notificationFilter,
                log: this._log
            }),
            config: this._config,
            log: this._log
        });
    };
    return Driver;
}(neo4j_driver_core_1.Driver);
exports.Driver = Driver;
/**
 * @private
 */ function validateFetchSizeValue(rawValue, defaultWhenAbsent) {
    var fetchSize = parseInt(rawValue, 10);
    if (fetchSize > 0 || fetchSize === FETCH_ALL) {
        return fetchSize;
    } else if (fetchSize === 0 || fetchSize < 0) {
        throw new Error("The fetch size can only be a positive value or ".concat(FETCH_ALL, " for ALL. However fetchSize = ").concat(fetchSize));
    } else {
        return defaultWhenAbsent;
    }
}
exports.default = Driver;
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/version.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
// DO NOT CHANGE THE VERSION BELOW HERE
// This is set by the build system at release time, using
//
// gulp set --x <releaseversion>
//
// This is set up this way to keep the version in the code in
// sync with the npm package version, and to allow the build
// system to control version names at packaging time.
exports.default = '6.0.1';
}),
"[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnboundRelationship = exports.Relationship = exports.Node = exports.Record = exports.ServerInfo = exports.GqlStatusObject = exports.Notification = exports.QueryStatistics = exports.ProfiledPlan = exports.Plan = exports.ResultSummary = exports.RxResult = exports.RxManagedTransaction = exports.RxTransaction = exports.RxSession = exports.EagerResult = exports.Result = exports.ManagedTransaction = exports.Transaction = exports.Session = exports.Driver = exports.temporal = exports.spatial = exports.graph = exports.error = exports.routing = exports.session = exports.types = exports.logging = exports.auth = exports.isRetryableError = exports.isRetriableError = exports.Neo4jError = exports.integer = exports.isUnsupportedType = exports.isUnboundRelationship = exports.isRelationship = exports.isPathSegment = exports.isPath = exports.isNode = exports.isDateTime = exports.isLocalDateTime = exports.isDate = exports.isTime = exports.isLocalTime = exports.isDuration = exports.isPoint = exports.isInt = exports.int = exports.authTokenManagers = void 0;
exports.ProtocolVersion = exports.StandardCase = exports.RecordObjectMapping = exports.mappingDecorators = exports.rule = exports.Rules = exports.Rule = exports.Vector = exports.vector = exports.isVector = exports.clientCertificateProviders = exports.notificationFilterMinimumSeverityLevel = exports.notificationFilterDisabledClassification = exports.notificationFilterDisabledCategory = exports.notificationSeverityLevel = exports.notificationClassification = exports.notificationCategory = exports.resultTransformers = exports.bookmarkManager = exports.DateTime = exports.LocalDateTime = exports.Date = exports.Time = exports.LocalTime = exports.Duration = exports.Integer = exports.Point = exports.PathSegment = exports.Path = void 0;
exports.driver = driver;
exports.hasReachableServer = hasReachableServer;
/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [https://neo4j.com]
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
 */ var driver_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/driver.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Driver", {
    enumerable: true,
    get: function() {
        return driver_1.Driver;
    }
});
var version_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/version.js [app-route] (ecmascript)"));
var neo4j_driver_core_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-core/lib/index.js [app-route] (ecmascript)");
Object.defineProperty(exports, "authTokenManagers", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.authTokenManagers;
    }
});
Object.defineProperty(exports, "Neo4jError", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Neo4jError;
    }
});
Object.defineProperty(exports, "isRetriableError", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isRetriableError;
    }
});
Object.defineProperty(exports, "isRetryableError", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isRetryableError;
    }
});
Object.defineProperty(exports, "error", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.error;
    }
});
Object.defineProperty(exports, "Integer", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Integer;
    }
});
Object.defineProperty(exports, "int", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.int;
    }
});
Object.defineProperty(exports, "isInt", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isInt;
    }
});
Object.defineProperty(exports, "isPoint", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isPoint;
    }
});
Object.defineProperty(exports, "Point", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Point;
    }
});
Object.defineProperty(exports, "Date", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Date;
    }
});
Object.defineProperty(exports, "DateTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.DateTime;
    }
});
Object.defineProperty(exports, "Duration", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Duration;
    }
});
Object.defineProperty(exports, "isDate", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isDate;
    }
});
Object.defineProperty(exports, "isDateTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isDateTime;
    }
});
Object.defineProperty(exports, "isDuration", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isDuration;
    }
});
Object.defineProperty(exports, "isLocalDateTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isLocalDateTime;
    }
});
Object.defineProperty(exports, "isLocalTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isLocalTime;
    }
});
Object.defineProperty(exports, "isNode", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isNode;
    }
});
Object.defineProperty(exports, "isPath", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isPath;
    }
});
Object.defineProperty(exports, "isPathSegment", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isPathSegment;
    }
});
Object.defineProperty(exports, "isRelationship", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isRelationship;
    }
});
Object.defineProperty(exports, "isTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isTime;
    }
});
Object.defineProperty(exports, "isUnboundRelationship", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isUnboundRelationship;
    }
});
Object.defineProperty(exports, "isUnsupportedType", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isUnsupportedType;
    }
});
Object.defineProperty(exports, "LocalDateTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.LocalDateTime;
    }
});
Object.defineProperty(exports, "LocalTime", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.LocalTime;
    }
});
Object.defineProperty(exports, "Time", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Time;
    }
});
Object.defineProperty(exports, "Node", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Node;
    }
});
Object.defineProperty(exports, "Path", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Path;
    }
});
Object.defineProperty(exports, "PathSegment", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.PathSegment;
    }
});
Object.defineProperty(exports, "Relationship", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Relationship;
    }
});
Object.defineProperty(exports, "UnboundRelationship", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.UnboundRelationship;
    }
});
Object.defineProperty(exports, "Record", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Record;
    }
});
Object.defineProperty(exports, "ResultSummary", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.ResultSummary;
    }
});
Object.defineProperty(exports, "Plan", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Plan;
    }
});
Object.defineProperty(exports, "ProfiledPlan", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.ProfiledPlan;
    }
});
Object.defineProperty(exports, "QueryStatistics", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.QueryStatistics;
    }
});
Object.defineProperty(exports, "Notification", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Notification;
    }
});
Object.defineProperty(exports, "GqlStatusObject", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.GqlStatusObject;
    }
});
Object.defineProperty(exports, "ServerInfo", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.ServerInfo;
    }
});
Object.defineProperty(exports, "Result", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Result;
    }
});
Object.defineProperty(exports, "EagerResult", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.EagerResult;
    }
});
Object.defineProperty(exports, "auth", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.auth;
    }
});
Object.defineProperty(exports, "Session", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Session;
    }
});
Object.defineProperty(exports, "Transaction", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Transaction;
    }
});
Object.defineProperty(exports, "ManagedTransaction", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.ManagedTransaction;
    }
});
Object.defineProperty(exports, "bookmarkManager", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.bookmarkManager;
    }
});
Object.defineProperty(exports, "routing", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.routing;
    }
});
Object.defineProperty(exports, "resultTransformers", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.resultTransformers;
    }
});
Object.defineProperty(exports, "notificationCategory", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationCategory;
    }
});
Object.defineProperty(exports, "notificationClassification", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationClassification;
    }
});
Object.defineProperty(exports, "notificationSeverityLevel", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationSeverityLevel;
    }
});
Object.defineProperty(exports, "notificationFilterDisabledCategory", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationFilterDisabledCategory;
    }
});
Object.defineProperty(exports, "notificationFilterDisabledClassification", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationFilterDisabledClassification;
    }
});
Object.defineProperty(exports, "notificationFilterMinimumSeverityLevel", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.notificationFilterMinimumSeverityLevel;
    }
});
Object.defineProperty(exports, "clientCertificateProviders", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.clientCertificateProviders;
    }
});
Object.defineProperty(exports, "isVector", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.isVector;
    }
});
Object.defineProperty(exports, "Vector", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Vector;
    }
});
Object.defineProperty(exports, "vector", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.vector;
    }
});
Object.defineProperty(exports, "Rule", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Rule;
    }
});
Object.defineProperty(exports, "Rules", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.Rules;
    }
});
Object.defineProperty(exports, "rule", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.rule;
    }
});
Object.defineProperty(exports, "mappingDecorators", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.mappingDecorators;
    }
});
Object.defineProperty(exports, "RecordObjectMapping", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.RecordObjectMapping;
    }
});
Object.defineProperty(exports, "StandardCase", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.StandardCase;
    }
});
Object.defineProperty(exports, "ProtocolVersion", {
    enumerable: true,
    get: function() {
        return neo4j_driver_core_1.ProtocolVersion;
    }
});
var neo4j_driver_bolt_connection_1 = __turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver-bolt-connection/lib/index.js [app-route] (ecmascript)");
var session_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/session-rx.js [app-route] (ecmascript)"));
exports.RxSession = session_rx_1.default;
var transaction_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-rx.js [app-route] (ecmascript)"));
exports.RxTransaction = transaction_rx_1.default;
var transaction_managed_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/transaction-managed-rx.js [app-route] (ecmascript)"));
exports.RxManagedTransaction = transaction_managed_rx_1.default;
var result_rx_1 = __importDefault(__turbopack_context__.r("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/result-rx.js [app-route] (ecmascript)"));
exports.RxResult = result_rx_1.default;
var _a = neo4j_driver_core_1.internal.util, ENCRYPTION_ON = _a.ENCRYPTION_ON, assertString = _a.assertString, isEmptyObjectOrNull = _a.isEmptyObjectOrNull, ServerAddress = neo4j_driver_core_1.internal.serverAddress.ServerAddress, urlUtil = neo4j_driver_core_1.internal.urlUtil;
var USER_AGENT = 'neo4j-javascript/' + version_1.default;
function isAuthTokenManager(value) {
    return typeof value === 'object' && value != null && 'getToken' in value && 'handleSecurityException' in value && typeof value.getToken === 'function' && typeof value.handleSecurityException === 'function';
}
function createAuthManager(authTokenOrManager) {
    if (isAuthTokenManager(authTokenOrManager)) {
        return authTokenOrManager;
    }
    var authToken = authTokenOrManager;
    // Sanitize authority token. Nicer error from server when a scheme is set.
    authToken = authToken || {};
    authToken.scheme = authToken.scheme || 'none';
    return (0, neo4j_driver_core_1.staticAuthTokenManager)({
        authToken: authToken
    });
}
/**
 * Construct a new Neo4j Driver. This is your main entry point for this
 * library.
 *
 * @param {string} url The URL for the Neo4j database, for instance "neo4j://localhost" and/or "bolt://localhost"
 * @param {Map<string,string>} authToken Authentication credentials. See {@link auth} for helpers.
 * @param {Config} config Configuration object.
 * @returns {Driver}
 */ function driver(url, authToken, config) {
    if (config === void 0) {
        config = {};
    }
    assertString(url, 'Bolt URL');
    var parsedUrl = urlUtil.parseDatabaseUrl(url);
    // Determine encryption/trust options from the URL.
    var routing = false;
    var encrypted = false;
    var trust;
    switch(parsedUrl.scheme){
        case 'bolt':
            break;
        case 'bolt+s':
            encrypted = true;
            trust = 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES';
            break;
        case 'bolt+ssc':
            encrypted = true;
            trust = 'TRUST_ALL_CERTIFICATES';
            break;
        case 'neo4j':
            routing = true;
            break;
        case 'neo4j+s':
            encrypted = true;
            trust = 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES';
            routing = true;
            break;
        case 'neo4j+ssc':
            encrypted = true;
            trust = 'TRUST_ALL_CERTIFICATES';
            routing = true;
            break;
        default:
            throw new Error("Unknown scheme: ".concat(parsedUrl.scheme));
    }
    // Encryption enabled on URL, propagate trust to the config.
    if (encrypted) {
        // Check for configuration conflict between URL and config.
        if ('encrypted' in config || 'trust' in config) {
            throw new Error('Encryption/trust can only be configured either through URL or config, not both');
        }
        config.encrypted = ENCRYPTION_ON;
        config.trust = trust;
        config.clientCertificate = (0, neo4j_driver_core_1.resolveCertificateProvider)(config.clientCertificate);
    }
    var authTokenManager = createAuthManager(authToken);
    // Use default user agent or user agent specified by user.
    config.userAgent = config.userAgent || USER_AGENT;
    config.boltAgent = neo4j_driver_core_1.internal.boltAgent.fromVersion(version_1.default);
    var address = ServerAddress.fromUrl(parsedUrl.hostAndPort);
    var meta = {
        address: address,
        typename: routing ? 'Routing' : 'Direct',
        routing: routing
    };
    return new driver_1.Driver(meta, config, createConnectionProviderFunction());
    //TURBOPACK unreachable
    ;
    function createConnectionProviderFunction() {
        if (routing) {
            return function(id, config, log, hostNameResolver) {
                return new neo4j_driver_bolt_connection_1.RoutingConnectionProvider({
                    id: id,
                    config: config,
                    log: log,
                    hostNameResolver: hostNameResolver,
                    authTokenManager: authTokenManager,
                    address: address,
                    userAgent: config.userAgent,
                    boltAgent: config.boltAgent,
                    routingContext: parsedUrl.query
                });
            };
        } else {
            if (!isEmptyObjectOrNull(parsedUrl.query)) {
                throw new Error("Parameters are not supported with none routed scheme. Given URL: '".concat(url, "'"));
            }
            return function(id, config, log) {
                return new neo4j_driver_bolt_connection_1.DirectConnectionProvider({
                    id: id,
                    config: config,
                    log: log,
                    authTokenManager: authTokenManager,
                    address: address,
                    userAgent: config.userAgent,
                    boltAgent: config.boltAgent
                });
            };
        }
    }
}
/**
 * Verifies if the driver can reach a server at the given url.
 *
 * @experimental
 * @since 5.0.0
 * @param {string} url The URL for the Neo4j database, for instance "neo4j://localhost" and/or "bolt://localhost"
 * @param {object} config Configuration object. See the {@link driver}
 * @returns {true} When the server is reachable
 * @throws {Error} When the server is not reachable or the url is invalid
 */ function hasReachableServer(url, config) {
    return __awaiter(this, void 0, void 0, function() {
        var nonLoggedDriver;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    nonLoggedDriver = driver(url, {
                        scheme: 'none',
                        principal: '',
                        credentials: ''
                    }, config);
                    _a.label = 1;
                case 1:
                    _a.trys.push([
                        1,
                        ,
                        3,
                        5
                    ]);
                    return [
                        4 /*yield*/ ,
                        nonLoggedDriver.getNegotiatedProtocolVersion()
                    ];
                case 2:
                    _a.sent();
                    return [
                        2 /*return*/ ,
                        true
                    ];
                case 3:
                    return [
                        4 /*yield*/ ,
                        nonLoggedDriver.close()
                    ];
                case 4:
                    _a.sent();
                    return [
                        7 /*endfinally*/ 
                    ];
                case 5:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
/**
 * Object containing predefined logging configurations. These are expected to be used as values of the driver config's `logging` property.
 * @property {function(level: ?string): object} console the function to create a logging config that prints all messages to `console.log` with
 * timestamp, level and message. It takes an optional `level` parameter which represents the maximum log level to be logged. Default value is 'info'.
 */ var logging = {
    console: function(level) {
        return {
            level: level,
            logger: function(level, message) {
                return console.log("".concat(/*TURBOPACK member replacement*/ __turbopack_context__.g.Date.now(), " ").concat(level.toUpperCase(), " ").concat(message));
            }
        };
    }
};
exports.logging = logging;
/**
 * Object containing constructors for all neo4j types.
 */ var types = {
    Node: neo4j_driver_core_1.Node,
    Relationship: neo4j_driver_core_1.Relationship,
    UnboundRelationship: neo4j_driver_core_1.UnboundRelationship,
    PathSegment: neo4j_driver_core_1.PathSegment,
    Path: neo4j_driver_core_1.Path,
    Result: neo4j_driver_core_1.Result,
    EagerResult: neo4j_driver_core_1.EagerResult,
    ResultSummary: neo4j_driver_core_1.ResultSummary,
    Record: neo4j_driver_core_1.Record,
    Point: neo4j_driver_core_1.Point,
    Date: neo4j_driver_core_1.Date,
    DateTime: neo4j_driver_core_1.DateTime,
    Duration: neo4j_driver_core_1.Duration,
    LocalDateTime: neo4j_driver_core_1.LocalDateTime,
    LocalTime: neo4j_driver_core_1.LocalTime,
    Time: neo4j_driver_core_1.Time,
    Integer: neo4j_driver_core_1.Integer,
    Vector: neo4j_driver_core_1.Vector,
    Rule: neo4j_driver_core_1.Rule,
    Rules: neo4j_driver_core_1.Rules,
    ProtocolVersion: neo4j_driver_core_1.ProtocolVersion
};
exports.types = types;
/**
 * Object containing string constants representing session access modes.
 */ var session = {
    READ: driver_1.READ,
    WRITE: driver_1.WRITE
};
exports.session = session;
/**
 * Object containing functions to work with {@link Integer} objects.
 */ var integer = {
    toNumber: neo4j_driver_core_1.toNumber,
    toString: neo4j_driver_core_1.toString,
    inSafeRange: neo4j_driver_core_1.inSafeRange
};
exports.integer = integer;
/**
 * Object containing functions to work with spatial types, like {@link Point}.
 */ var spatial = {
    isPoint: neo4j_driver_core_1.isPoint
};
exports.spatial = spatial;
/**
 * Object containing functions to work with temporal types, like {@link Time} or {@link Duration}.
 */ var temporal = {
    isDuration: neo4j_driver_core_1.isDuration,
    isLocalTime: neo4j_driver_core_1.isLocalTime,
    isTime: neo4j_driver_core_1.isTime,
    isDate: neo4j_driver_core_1.isDate,
    isLocalDateTime: neo4j_driver_core_1.isLocalDateTime,
    isDateTime: neo4j_driver_core_1.isDateTime
};
exports.temporal = temporal;
/**
 * Object containing functions to work with graph types, like {@link Node} or {@link Relationship}.
 */ var graph = {
    isNode: neo4j_driver_core_1.isNode,
    isPath: neo4j_driver_core_1.isPath,
    isPathSegment: neo4j_driver_core_1.isPathSegment,
    isRelationship: neo4j_driver_core_1.isRelationship,
    isUnboundRelationship: neo4j_driver_core_1.isUnboundRelationship
};
exports.graph = graph;
/**
 * @private
 */ var forExport = {
    authTokenManagers: neo4j_driver_core_1.authTokenManagers,
    driver: driver,
    hasReachableServer: hasReachableServer,
    int: neo4j_driver_core_1.int,
    isInt: neo4j_driver_core_1.isInt,
    isPoint: neo4j_driver_core_1.isPoint,
    isDuration: neo4j_driver_core_1.isDuration,
    isLocalTime: neo4j_driver_core_1.isLocalTime,
    isTime: neo4j_driver_core_1.isTime,
    isDate: neo4j_driver_core_1.isDate,
    isLocalDateTime: neo4j_driver_core_1.isLocalDateTime,
    isDateTime: neo4j_driver_core_1.isDateTime,
    isNode: neo4j_driver_core_1.isNode,
    isPath: neo4j_driver_core_1.isPath,
    isPathSegment: neo4j_driver_core_1.isPathSegment,
    isRelationship: neo4j_driver_core_1.isRelationship,
    isUnboundRelationship: neo4j_driver_core_1.isUnboundRelationship,
    isUnsupportedType: neo4j_driver_core_1.isUnsupportedType,
    integer: integer,
    Neo4jError: neo4j_driver_core_1.Neo4jError,
    isRetriableError: neo4j_driver_core_1.isRetriableError,
    isRetryableError: neo4j_driver_core_1.isRetryableError,
    auth: neo4j_driver_core_1.auth,
    logging: logging,
    types: types,
    session: session,
    routing: neo4j_driver_core_1.routing,
    error: neo4j_driver_core_1.error,
    graph: graph,
    spatial: spatial,
    temporal: temporal,
    Driver: driver_1.Driver,
    Session: neo4j_driver_core_1.Session,
    Transaction: neo4j_driver_core_1.Transaction,
    ManagedTransaction: neo4j_driver_core_1.ManagedTransaction,
    Result: neo4j_driver_core_1.Result,
    EagerResult: neo4j_driver_core_1.EagerResult,
    RxSession: session_rx_1.default,
    RxTransaction: transaction_rx_1.default,
    RxManagedTransaction: transaction_managed_rx_1.default,
    RxResult: result_rx_1.default,
    ResultSummary: neo4j_driver_core_1.ResultSummary,
    Plan: neo4j_driver_core_1.Plan,
    ProfiledPlan: neo4j_driver_core_1.ProfiledPlan,
    QueryStatistics: neo4j_driver_core_1.QueryStatistics,
    Notification: neo4j_driver_core_1.Notification,
    GqlStatusObject: neo4j_driver_core_1.GqlStatusObject,
    ServerInfo: neo4j_driver_core_1.ServerInfo,
    Record: neo4j_driver_core_1.Record,
    Node: neo4j_driver_core_1.Node,
    Relationship: neo4j_driver_core_1.Relationship,
    UnboundRelationship: neo4j_driver_core_1.UnboundRelationship,
    Path: neo4j_driver_core_1.Path,
    PathSegment: neo4j_driver_core_1.PathSegment,
    Point: neo4j_driver_core_1.Point,
    Integer: neo4j_driver_core_1.Integer,
    Duration: neo4j_driver_core_1.Duration,
    LocalTime: neo4j_driver_core_1.LocalTime,
    Time: neo4j_driver_core_1.Time,
    Date: neo4j_driver_core_1.Date,
    LocalDateTime: neo4j_driver_core_1.LocalDateTime,
    DateTime: neo4j_driver_core_1.DateTime,
    bookmarkManager: neo4j_driver_core_1.bookmarkManager,
    resultTransformers: neo4j_driver_core_1.resultTransformers,
    notificationCategory: neo4j_driver_core_1.notificationCategory,
    notificationSeverityLevel: neo4j_driver_core_1.notificationSeverityLevel,
    notificationFilterDisabledCategory: neo4j_driver_core_1.notificationFilterDisabledCategory,
    notificationFilterMinimumSeverityLevel: neo4j_driver_core_1.notificationFilterMinimumSeverityLevel,
    clientCertificateProviders: neo4j_driver_core_1.clientCertificateProviders,
    isVector: neo4j_driver_core_1.isVector,
    vector: neo4j_driver_core_1.vector,
    Vector: neo4j_driver_core_1.Vector,
    rule: neo4j_driver_core_1.rule,
    mappingDecorators: neo4j_driver_core_1.mappingDecorators,
    RecordObjectMapping: neo4j_driver_core_1.RecordObjectMapping,
    StandardCase: neo4j_driver_core_1.StandardCase,
    ProtocolVersion: neo4j_driver_core_1.ProtocolVersion
};
exports.default = forExport;
}),
];

//# sourceMappingURL=012s_057sk7q._.js.map