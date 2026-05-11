module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[project]/MCMS/MCMS/src/models/Contribution.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class Contribution extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    memberDbId;
    memberId;
    baseFee;
    extraContribution;
    totalFee;
    monthlyFee;
    annualFee;
    percentage;
    currency;
    hqShare;
    branchShare;
    month;
    year;
    status;
    calculatedAt;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        return v;
    }
}
Contribution.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    memberDbId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    memberId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        allowNull: false
    },
    baseFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    extraContribution: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    totalFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    monthlyFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    annualFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    percentage: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(10, 4),
        defaultValue: 0
    },
    currency: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('ETB', 'USD'),
        defaultValue: 'ETB'
    },
    hqShare: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    branchShare: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    month: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    year: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    status: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Pending', 'Paid', 'Partial', 'Overpaid'),
        defaultValue: 'Pending'
    },
    calculatedAt: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DATE,
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].NOW
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'contributions',
    timestamps: true,
    indexes: [
        {
            fields: [
                'memberId',
                'month',
                'year'
            ]
        },
        {
            fields: [
                'status'
            ]
        }
    ]
});
const __TURBOPACK__default__export__ = Contribution;
}),
"[project]/MCMS/MCMS/src/models/Payment.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class Payment extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    receiptId;
    memberDbId;
    memberId;
    contributionDbId;
    amount;
    currency;
    frequency;
    method;
    paymentDate;
    periodMonth;
    periodYear;
    receivedBy;
    status;
    notes;
    receiptGenerated;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        v.period = {
            month: v.periodMonth,
            year: v.periodYear
        };
        // Reconstruct member populate-like object if memberInfo is included (managed in controller)
        if (this.memberInfo) {
            v.member = this.memberInfo;
        }
        return v;
    }
}
Payment.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    receiptId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        unique: true,
        allowNull: false
    },
    memberDbId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    memberId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        allowNull: false
    },
    contributionDbId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: true
    },
    amount: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    currency: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('ETB', 'USD'),
        defaultValue: 'ETB'
    },
    frequency: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Monthly', 'Quarterly', 'Semi-Annual', 'Annual'),
        defaultValue: 'Monthly'
    },
    method: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Cash', 'Bank Transfer', 'Mobile Money', 'Check'),
        allowNull: false
    },
    paymentDate: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DATE,
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].NOW
    },
    periodMonth: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    periodYear: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    receivedBy: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    status: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Paid', 'Partial', 'Overpaid'),
        defaultValue: 'Paid'
    },
    notes: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].TEXT,
        allowNull: true
    },
    receiptGenerated: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'payments',
    timestamps: true,
    indexes: [
        {
            fields: [
                'receiptId'
            ]
        },
        {
            fields: [
                'memberId',
                'periodYear',
                'periodMonth'
            ]
        },
        {
            fields: [
                'paymentDate'
            ]
        }
    ]
});
const __TURBOPACK__default__export__ = Payment;
}),
"[project]/MCMS/MCMS/src/models/Receipt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class Receipt extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    receiptId;
    paymentDbId;
    memberDbId;
    memberId;
    memberName;
    amount;
    currency;
    periodMonth;
    periodYear;
    paymentMethod;
    issuedBy;
    issuedAt;
    branch;
    status;
    pdfPath;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        v.period = {
            month: v.periodMonth,
            year: v.periodYear
        };
        if (this.memberInfo) v.member = this.memberInfo;
        if (this.paymentInfo) v.payment = this.paymentInfo;
        return v;
    }
}
Receipt.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    receiptId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        unique: true,
        allowNull: false,
        defaultValue: ()=>`RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`
    },
    paymentDbId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    memberDbId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    memberId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        allowNull: false
    },
    memberName: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    amount: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: false
    },
    currency: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('ETB', 'USD'),
        defaultValue: 'ETB'
    },
    periodMonth: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    periodYear: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false
    },
    paymentMethod: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: false
    },
    issuedBy: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    issuedAt: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DATE,
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].NOW
    },
    branch: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: false
    },
    status: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Issued', 'Voided'),
        defaultValue: 'Issued'
    },
    pdfPath: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(500),
        allowNull: true
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'receipts',
    timestamps: true,
    indexes: [
        {
            fields: [
                'receiptId'
            ]
        },
        {
            fields: [
                'memberId'
            ]
        },
        {
            fields: [
                'issuedAt'
            ]
        }
    ]
});
const __TURBOPACK__default__export__ = Receipt;
}),
"[project]/MCMS/MCMS/src/models/SectorType.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class SectorType extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    name;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        return v;
    }
}
SectorType.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'sector_types',
    timestamps: false
});
const __TURBOPACK__default__export__ = SectorType;
}),
"[project]/MCMS/MCMS/src/models/SectorUnit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorType$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorType.ts [app-route] (ecmascript)");
;
;
;
class SectorUnit extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    name;
    sectorTypeId;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        return v;
    }
}
SectorUnit.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    sectorTypeId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: false,
        references: {
            model: 'sector_types',
            key: 'id'
        }
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'sector_units',
    timestamps: false
});
SectorUnit.belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorType$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
    foreignKey: 'sectorTypeId',
    as: 'sectorType'
});
const __TURBOPACK__default__export__ = SectorUnit;
}),
"[project]/MCMS/MCMS/src/models/MemberCategory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class MemberCategory extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    name;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        return v;
    }
}
MemberCategory.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false,
        unique: true
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'member_categories',
    timestamps: false
});
const __TURBOPACK__default__export__ = MemberCategory;
}),
"[project]/MCMS/MCMS/src/models/SectorUnitCategory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
;
;
class SectorUnitCategory extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    sectorUnitId;
    memberCategoryId;
}
SectorUnitCategory.init({
    sectorUnitId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        references: {
            model: 'sector_units',
            key: 'id'
        }
    },
    memberCategoryId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        references: {
            model: 'member_categories',
            key: 'id'
        }
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'sector_unit_categories',
    timestamps: false
});
const __TURBOPACK__default__export__ = SectorUnitCategory;
}),
"[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "sequelize",
    ()=>sequelize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Member.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Contribution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Contribution.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Payment.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Receipt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorType$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorType.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorUnit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/MemberCategory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnitCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorUnitCategory.ts [app-route] (ecmascript)");
;
const dbUrl = process.env.MYSQL_URL || process.env.DATABASE_URL;
const sequelize = dbUrl ? new __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sequelize"](dbUrl, {
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    }
}) : new __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sequelize"](process.env.DB_NAME || 'mcms', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    }
});
;
;
;
;
;
;
;
;
// Define Associations
const initModels = ()=>{
    // Payment ↔ Member
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'memberInfo',
        onDelete: 'CASCADE'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hasMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'payments',
        onDelete: 'CASCADE'
    });
    // Receipt ↔ Member
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'memberInfo',
        onDelete: 'CASCADE'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hasMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'receipts',
        onDelete: 'CASCADE'
    });
    // Receipt ↔ Payment
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'paymentDbId',
        as: 'paymentInfo',
        onDelete: 'CASCADE'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hasMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'paymentDbId',
        as: 'receipts',
        onDelete: 'CASCADE'
    });
    // Contribution ↔ Member
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Contribution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'memberInfo',
        onDelete: 'CASCADE'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hasMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Contribution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'memberDbId',
        as: 'contributions',
        onDelete: 'CASCADE'
    });
    // Sector Associations
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorType$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hasMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'sectorTypeId',
        as: 'units'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorType$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        foreignKey: 'sectorTypeId',
        as: 'sectorType'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsToMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        through: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnitCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
        foreignKey: 'sectorUnitId',
        otherKey: 'memberCategoryId',
        as: 'categories'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].belongsToMany(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
        through: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnitCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
        foreignKey: 'memberCategoryId',
        otherKey: 'sectorUnitId',
        as: 'units'
    });
};
initModels();
;
const __TURBOPACK__default__export__ = sequelize;
}),
"[project]/MCMS/MCMS/src/models/Member.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorUnit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/MemberCategory.ts [app-route] (ecmascript)");
;
;
;
;
class Member extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    memberId;
    fullName;
    gender;
    age;
    phone;
    email;
    nationalId;
    addressRegion;
    addressCity;
    addressWoreda;
    sectorUnitId;
    memberCategoryId;
    branch;
    cluster;
    sector;
    membershipType;
    subType;
    classificationRuleId;
    financialSalary;
    financialEmploymentType;
    financialCurrency;
    financialAllowances;
    financialOccupationType;
    financialEstimatedIncome;
    financialBusinessType;
    financialBusinessName;
    financialEmployees;
    financialIncome;
    financialCapital;
    financialInvestmentType;
    financialCustomMonthlyFee;
    wingType;
    wingParentMemberId;
    registrationDate;
    status;
    contributionMonthlyFee;
    contributionPercentage;
    contributionAnnualFee;
    contributionHqShare;
    contributionBranchShare;
    netSalaryGrossSalary;
    netSalaryPensionDeduction;
    netSalaryTaxDeduction;
    netSalaryTotalDeductions;
    netSalaryNetSalary;
    netSalaryContributionFee;
    netSalaryFinalNetSalary;
    paymentSchedule;
    paymentStatus;
    importedFrom;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        v.address = {
            region: v.addressRegion,
            city: v.addressCity,
            woreda: v.addressWoreda
        };
        v.financial = {
            salary: Number(v.financialSalary) || 0,
            employmentType: v.financialEmploymentType,
            currency: v.financialCurrency,
            allowances: Number(v.financialAllowances) || 0,
            occupationType: v.financialOccupationType,
            estimatedIncome: Number(v.financialEstimatedIncome) || 0,
            businessType: v.financialBusinessType,
            businessName: v.financialBusinessName,
            employees: Number(v.financialEmployees) || 0,
            income: Number(v.financialIncome) || 0,
            capital: Number(v.financialCapital) || 0,
            investmentType: v.financialInvestmentType,
            customMonthlyFee: v.financialCustomMonthlyFee ? Number(v.financialCustomMonthlyFee) : null
        };
        v.contribution = {
            monthlyFee: Number(v.contributionMonthlyFee) || 0,
            percentage: Number(v.contributionPercentage) || 0,
            annualFee: Number(v.contributionAnnualFee) || 0,
            hqShare: Number(v.contributionHqShare) || 0,
            branchShare: Number(v.contributionBranchShare) || 0
        };
        v.netSalary = {
            grossSalary: Number(v.netSalaryGrossSalary) || 0,
            pensionDeduction: Number(v.netSalaryPensionDeduction) || 0,
            taxDeduction: Number(v.netSalaryTaxDeduction) || 0,
            totalDeductions: Number(v.netSalaryTotalDeductions) || 0,
            netSalary: Number(v.netSalaryNetSalary) || 0,
            contributionFee: Number(v.netSalaryContributionFee) || 0,
            finalNetSalary: Number(v.netSalaryFinalNetSalary) || 0
        };
        v.wing = {
            wingType: v.wingType,
            parentMemberId: v.wingParentMemberId
        };
        v.branch = v.sectorUnit?.name || v.sector || v.branch;
        return v;
    }
}
Member.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    memberId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        unique: true,
        defaultValue: ()=>`DD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
    },
    fullName: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    gender: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Male', 'Female'),
        allowNull: false
    },
    age: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: true
    },
    phone: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        allowNull: false
    },
    email: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: true
    },
    nationalId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    addressRegion: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        defaultValue: 'Dire Dawa'
    },
    addressCity: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        defaultValue: 'Dire Dawa'
    },
    addressWoreda: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: false,
        defaultValue: '01'
    },
    sectorUnitId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: true,
        references: {
            model: 'sector_units',
            key: 'id'
        }
    },
    memberCategoryId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: true,
        references: {
            model: 'member_categories',
            key: 'id'
        }
    },
    branch: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    cluster: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Urban', 'Rural', 'Institution', 'N/A'),
        defaultValue: 'N/A'
    },
    sector: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    membershipType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Salary-Based', 'Non-Salary', 'Student', 'Business', 'Investor', 'Special', 'Wing'),
        allowNull: false
    },
    subType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    classificationRuleId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    financialSalary: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    financialEmploymentType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    financialCurrency: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('ETB', 'USD'),
        defaultValue: 'ETB'
    },
    financialAllowances: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    financialOccupationType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    financialEstimatedIncome: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    financialBusinessType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    financialBusinessName: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: true
    },
    financialEmployees: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        defaultValue: 0
    },
    financialIncome: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    financialCapital: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    financialInvestmentType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: true
    },
    financialCustomMonthlyFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        allowNull: true
    },
    wingType: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Women', 'Youth'),
        allowNull: true
    },
    wingParentMemberId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(50),
        allowNull: true
    },
    registrationDate: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DATE,
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].NOW
    },
    status: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Active', 'Inactive', 'Suspended', 'Defaulted'),
        defaultValue: 'Active'
    },
    contributionMonthlyFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    contributionPercentage: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(10, 4),
        defaultValue: 0
    },
    contributionAnnualFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    contributionHqShare: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    contributionBranchShare: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryGrossSalary: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryPensionDeduction: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryTaxDeduction: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryTotalDeductions: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryNetSalary: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryContributionFee: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    netSalaryFinalNetSalary: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].DECIMAL(15, 2),
        defaultValue: 0
    },
    paymentSchedule: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].JSON,
        defaultValue: []
    },
    paymentStatus: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('Paid', 'Unpaid', 'Partial', 'Overpaid', 'Defaulted'),
        defaultValue: 'Unpaid'
    },
    importedFrom: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: true
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'members',
    timestamps: true,
    indexes: [
        {
            fields: [
                'memberId'
            ]
        },
        {
            fields: [
                'branch',
                'membershipType'
            ]
        },
        {
            fields: [
                'status',
                'paymentStatus'
            ]
        }
    ]
});
Member.belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
    foreignKey: 'sectorUnitId',
    as: 'sectorUnit'
});
Member.belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
    foreignKey: 'memberCategoryId',
    as: 'memberCategory'
});
const __TURBOPACK__default__export__ = Member;
}),
"[project]/MCMS/MCMS/src/models/Setting.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
const DEFAULT_CONTRIBUTION_RULES = {
    salaryBased: {
        calculationBase: 'Net',
        pensionPercentage: 7,
        taxBrackets: [
            {
                threshold: 2000,
                rate: 0,
                deduction: 0
            },
            {
                threshold: 4000,
                rate: 0.15,
                deduction: 300
            },
            {
                threshold: 7000,
                rate: 0.20,
                deduction: 500
            },
            {
                threshold: 10000,
                rate: 0.25,
                deduction: 850
            },
            {
                threshold: 14000,
                rate: 0.30,
                deduction: 1350
            },
            {
                threshold: 9999999,
                rate: 0.35,
                deduction: 2050
            }
        ],
        government: [
            {
                minSalary: 0,
                maxSalary: 4000,
                percentage: 0.6
            },
            {
                minSalary: 4001,
                maxSalary: 5000,
                percentage: 0.8
            },
            {
                minSalary: 5001,
                maxSalary: 6000,
                percentage: 1.0
            },
            {
                minSalary: 6001,
                maxSalary: 7000,
                percentage: 1.2
            },
            {
                minSalary: 7001,
                maxSalary: 8000,
                percentage: 1.4
            },
            {
                minSalary: 8001,
                maxSalary: 9000,
                percentage: 1.6
            },
            {
                minSalary: 9001,
                maxSalary: 10000,
                percentage: 1.8
            },
            {
                minSalary: 10001,
                maxSalary: 999999999,
                percentage: 2.0
            }
        ]
    },
    fixedFees: {
        student: 1,
        farmer: 5,
        pastoralist: 5,
        labor: 5,
        informal: 5
    },
    business: {
        micro: 5,
        small: 10,
        medium: 20
    },
    investor: [
        {
            minCapital: 0,
            maxCapital: 5000000,
            fee: 500
        },
        {
            minCapital: 5000001,
            maxCapital: 10000000,
            fee: 1000
        },
        {
            minCapital: 10000001,
            maxCapital: 999999999999,
            fee: 2000
        }
    ],
    wing: {
        salary_1k_3k: 2,
        salary_3k_5k: 5,
        salary_5k_10k: 10,
        salary_10k_plus: 20,
        farmer: 1,
        informal: 1,
        micro_small: 2,
        general_annual: 10
    }
};
const DEFAULT_DISTRIBUTION = {
    hqPercentage: 20,
    branchPercentage: 80
};
const DEFAULT_BRANCHES = [
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Dire Dawa Main',
        code: 'MAIN',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 01',
        code: 'K01',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 02',
        code: 'K02',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 03',
        code: 'K03',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 04',
        code: 'K04',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 05',
        code: 'K05',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 06',
        code: 'K06',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 07',
        code: 'K07',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 08',
        code: 'K08',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 09',
        code: 'K09',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Kebele 10',
        code: 'K10',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Women Wing',
        code: 'WOMEN',
        cluster: 'Urban',
        isActive: true
    },
    {
        _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        name: 'Youth Wing',
        code: 'YOUTH',
        cluster: 'Urban',
        isActive: true
    }
];
const DEFAULT_SYSTEM = {
    organizationName: 'Dire Dawa City Administration Finance Bureau',
    currency: 'ETB',
    fiscalYearStart: 1,
    defaultLanguage: 'en',
    enableSmsNotifications: false,
    enableEmailNotifications: false,
    defaulterThreshold: 3,
    receiptPrefix: 'RCP'
};
class Setting extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    contributionRules;
    distribution;
    branches;
    system;
    toJSON() {
        const v = Object.assign({}, this.get());
        v._id = v.id;
        return v;
    }
}
Setting.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contributionRules: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].JSON,
        defaultValue: DEFAULT_CONTRIBUTION_RULES
    },
    distribution: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].JSON,
        defaultValue: DEFAULT_DISTRIBUTION
    },
    branches: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].JSON,
        defaultValue: DEFAULT_BRANCHES
    },
    system: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].JSON,
        defaultValue: DEFAULT_SYSTEM
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'settings',
    timestamps: true
});
const __TURBOPACK__default__export__ = Setting;
}),
"[project]/MCMS/MCMS/src/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/sequelize/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorUnit.ts [app-route] (ecmascript)");
;
;
;
;
class User extends __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Model"] {
    id;
    username;
    email;
    password;
    role;
    sectorUnitId;
    fullName;
    isActive;
    profilePic;
    createdAt;
    updatedAt;
    async comparePassword(candidatePassword) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(candidatePassword, this.password);
    }
}
User.init({
    id: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(100),
        allowNull: false,
        unique: true
    },
    email: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false,
        unique: true,
        set (val) {
            this.setDataValue('email', val ? val.toLowerCase().trim() : val);
        }
    },
    password: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    role: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].ENUM('admin', 'sector_officer', 'expert'),
        defaultValue: 'sector_officer'
    },
    sectorUnitId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].INTEGER,
        allowNull: true,
        references: {
            model: 'sector_units',
            key: 'id'
        }
    },
    fullName: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(255),
        allowNull: false
    },
    isActive: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].BOOLEAN,
        defaultValue: true
    },
    profilePic: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$sequelize$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataTypes"].STRING(500),
        allowNull: true,
        defaultValue: null
    }
}, {
    sequelize: __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sequelize"],
    tableName: 'users',
    timestamps: true,
    hooks: {
        beforeCreate: async (user)=>{
            if (user.password) {
                user.password = await __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(user.password, 10);
            }
        },
        beforeUpdate: async (user)=>{
            if (user.changed('password')) {
                user.password = await __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(user.password, 10);
            }
        }
    }
});
User.belongsTo(__TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {
    foreignKey: 'sectorUnitId',
    as: 'assignedSectorUnit'
});
const __TURBOPACK__default__export__ = User;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[project]/MCMS/MCMS/src/lib/neo4j.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeQuery",
    ()=>executeQuery,
    "getNeo4jDriver",
    ()=>getNeo4jDriver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$neo4j$2d$driver$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/neo4j-driver/lib/index.js [app-route] (ecmascript)");
;
let driver;
function getNeo4jDriver() {
    if (!driver) {
        const uri = process.env.NEO4J_URI || '';
        const user = process.env.NEO4J_USERNAME || 'neo4j';
        const password = process.env.NEO4J_PASSWORD || '';
        const database = process.env.NEO4J_DATABASE || 'neo4j';
        driver = __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$neo4j$2d$driver$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].driver(uri, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$neo4j$2d$driver$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth.basic(user, password));
    }
    return driver;
}
async function executeQuery(query, params = {}) {
    const driver = getNeo4jDriver();
    const session = driver.session({
        database: process.env.NEO4J_DATABASE || 'neo4j'
    });
    try {
        const result = await session.run(query, params);
        return result;
    } finally{
        await session.close();
    }
}
}),
"[project]/MCMS/MCMS/src/app/api/neo4j/import/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Member.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Payment.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Receipt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Setting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/Setting.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/SectorUnit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/MemberCategory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/lib/neo4j.ts [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/api-middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
async function POST(req) {
    const auth = await validateAuth(req);
    if (!auth || auth.user.role !== 'admin') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Unauthorized'
        }, {
            status: 401
        });
    }
    try {
        // 1. Fetch all data from MySQL
        const [members, payments, receipts, settings, users, units, categories] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Member$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Receipt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$Setting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$SectorUnit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll(),
            __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$MemberCategory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll()
        ]);
        // 2. Clear Neo4j
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])('MATCH (n) DETACH DELETE n');
        // 3. Create Constraints
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])('CREATE CONSTRAINT member_id IF NOT EXISTS FOR (m:Member) REQUIRE m.id IS UNIQUE');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])('CREATE CONSTRAINT payment_id IF NOT EXISTS FOR (p:Payment) REQUIRE p.id IS UNIQUE');
        // 4. Import Categories
        for (const cat of categories){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])('CREATE (c:Category {id: $id, name: $name})', {
                id: cat.id,
                name: cat.name
            });
        }
        // 5. Import Units
        for (const unit of units){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])('CREATE (u:SectorUnit {id: $id, name: $name, type: $type})', {
                id: unit.id,
                name: unit.name,
                type: unit.type
            });
        }
        // 6. Import Members
        for (const member of members){
            const m = member.toJSON();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])(`
        CREATE (m:Member {
          id: $id,
          fullName: $fullName,
          memberId: $memberId,
          phone: $phone,
          membershipType: $membershipType,
          branch: $branch,
          sector: $sector,
          status: $status,
          contributionMonthlyFee: $monthlyFee,
          contributionAnnualFee: $annualFee
        })
        WITH m
        MATCH (c:Category {id: $categoryId})
        CREATE (m)-[:HAS_CATEGORY]->(c)
        WITH m
        MATCH (u:SectorUnit {id: $unitId})
        CREATE (m)-[:BELONGS_TO]->(u)
      `, {
                id: m.id,
                fullName: m.fullName,
                memberId: m.memberId,
                phone: m.phone,
                membershipType: m.membershipType,
                branch: m.branch,
                sector: m.sector,
                status: m.status,
                monthlyFee: m.contributionMonthlyFee,
                annualFee: m.contributionAnnualFee,
                categoryId: m.memberCategoryId,
                unitId: m.sectorUnitId
            });
        }
        // 7. Import Payments
        for (const payment of payments){
            const p = payment.toJSON();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$lib$2f$neo4j$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeQuery"])(`
        CREATE (p:Payment {
          id: $id,
          amount: $amount,
          method: $method,
          periodMonth: $month,
          periodYear: $year,
          status: $status,
          paymentDate: $date
        })
        WITH p
        MATCH (m:Member {id: $memberId})
        CREATE (m)-[:MADE_PAYMENT]->(p)
      `, {
                id: p.id,
                amount: p.amount,
                method: p.method,
                month: p.periodMonth,
                year: p.periodYear,
                status: p.status,
                date: p.paymentDate?.toISOString(),
                memberId: p.memberDbId
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Data successfully migrated from MySQL to Neo4j',
            stats: {
                members: members.length,
                payments: payments.length,
                units: units.length,
                categories: categories.length
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d8oi9d._.js.map