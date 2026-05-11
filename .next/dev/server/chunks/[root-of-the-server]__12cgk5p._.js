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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
"[project]/MCMS/MCMS/src/app/api/admin/migrate-users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/node_modules/@clerk/backend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/MCMS/MCMS/src/models/User.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    // Only allow admin to trigger migration
    // const authCheck = await validateAuth(req)
    // if (!authCheck || authCheck.user.role !== 'admin') {
    //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    // }
    const clerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClerkClient"])({
        secretKey: process.env.CLERK_SECRET_KEY
    });
    try {
        const localUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findAll();
        const results = [];
        for (const localUser of localUsers){
            try {
                // Create user in Clerk
                const clerkUser = await clerk.users.createUser({
                    emailAddress: [
                        localUser.email
                    ],
                    firstName: localUser.fullName.split(' ')[0],
                    lastName: localUser.fullName.split(' ').slice(1).join(' ') || '',
                    password: 'TemporaryPassword123!',
                    publicMetadata: {
                        role: localUser.role,
                        sectorUnitId: localUser.sectorUnitId,
                        legacyId: localUser.id
                    }
                });
                results.push({
                    email: localUser.email,
                    status: 'Migrated',
                    clerkId: clerkUser.id
                });
            } catch (error) {
                results.push({
                    email: localUser.email,
                    status: 'Failed',
                    error: error.message
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$MCMS$2f$MCMS$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            migrated: results
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

//# sourceMappingURL=%5Broot-of-the-server%5D__12cgk5p._.js.map