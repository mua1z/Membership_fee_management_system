# MCMS-DDU API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://yourdomain.com/api
```

## Authentication
All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 🔐 Authentication Endpoints

### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string (min 6 chars)",
  "fullName": "string",
  "role": "admin|operator|viewer"
}

Response: 201 Created
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "jwt_token",
    "user": { ... }
  }
}
```

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "token": "jwt_token",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "fullName": "string",
      "role": "string"
    }
  }
}
```

### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { user_object }
}
```

### Get All Users (Admin Only)
```http
GET /api/auth/users
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [user_objects]
}
```

---

## 👥 Members Endpoints

### Create Member
```http
POST /api/members
Authorization: Bearer <token>
Content-Type: application/json

{
  "fullName": "string",
  "gender": "Male|Female",
  "phone": "string",
  "email": "string",
  "nationalId": "string",
  "address": {
    "region": "Dire Dawa",
    "city": "string",
    "woreda": "string"
  },
  "branch": "string",
  "cluster": "Urban|Rural|N/A",
  "sector": "string",
  "membershipType": "Salary-Based|Non-Salary|Business|Investor|Student|Wing|Special",
  "financial": {
    "salary": number,
    "employmentType": "Government|Private|NGO|Embassy",
    "currency": "ETB|USD",
    "allowances": number
  },
  "wing": {
    "wingType": "Women|Youth",
    "parentMemberId": "string"
  }
}

Response: 201 Created
{
  "success": true,
  "message": "Member created successfully",
  "data": {
    "memberId": "DD-2026-XXXX",
    ...all_fields,
    "contribution": {
      "monthlyFee": number,
      "percentage": number,
      "annualFee": number,
      "hqShare": number,
      "branchShare": number
    },
    "netSalary": {
      "grossSalary": number,
      "pensionDeduction": number,
      "taxDeduction": number,
      "totalDeductions": number,
      "netSalary": number,
      "contributionFee": number,
      "finalNetSalary": number
    }
  }
}
```

### Get Members (Paginated with Filters)
```http
GET /api/members?page=1&limit=50&search=abebe&cluster=Urban&branch=Kebele+01&membershipType=Salary-Based&status=Active&paymentStatus=Paid&minSalary=10000&maxSalary=50000
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [member_objects],
  "pagination": {
    "total": number,
    "page": number,
    "limit": number,
    "pages": number
  }
}
```

### Get Single Member
```http
GET /api/members/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { member_object }
}
```

### Update Member
```http
PUT /api/members/:id
Authorization: Bearer <token>
Content-Type: application/json

{ ...fields_to_update }

Response: 200 OK
{
  "success": true,
  "message": "Member updated successfully",
  "data": { updated_member }
}
```

### Delete Member
```http
DELETE /api/members/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Member deleted successfully"
}
```

### Bulk Create Members
```http
POST /api/members/bulk
Authorization: Bearer <token>
Content-Type: application/json

[member_object_1, member_object_2, ...]

Response: 201 Created
{
  "success": true,
  "message": "Created X members successfully",
  "data": [created_members],
  "errors": [
    {
      "index": number,
      "member": {...},
      "error": "string"
    }
  ]
}
```

### Get Member Statistics
```http
GET /api/members/stats
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "overall": {
      "totalMembers": number,
      "activeMembers": number,
      "totalMonthlyRevenue": number,
      "totalAnnualRevenue": number
    },
    "byType": [{ _id: "string", count: number }],
    "byBranch": [{ _id: "string", count: number }]
  }
}
```

---

## 💰 Payments Endpoints

### Create Payment
```http
POST /api/payments
Authorization: Bearer <token>
Content-Type: application/json

{
  "member": "member_id",
  "amount": number,
  "currency": "ETB|USD",
  "frequency": "Monthly|Quarterly|Semi-Annual|Annual",
  "method": "Cash|Bank Transfer|Mobile Money|Check",
  "receivedBy": "string",
  "period": {
    "month": 1-12,
    "year": number
  },
  "notes": "string"
}

Response: 201 Created
{
  "success": true,
  "message": "Payment recorded successfully",
  "data": {
    "payment": {...},
    "receipt": {
      "receiptId": "RCP-timestamp-random",
      ...receipt_details
    }
  }
}
```

### Get Payments
```http
GET /api/payments?page=1&limit=50&memberId=string&status=Paid
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [payment_objects],
  "pagination": {...}
}
```

### Get Single Payment
```http
GET /api/payments/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { payment_object }
}
```

### Get Payments by Member
```http
GET /api/payments/member/:memberId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [payment_objects]
}
```

### Bulk Payments
```http
POST /api/payments/bulk
Authorization: Bearer <token>
Content-Type: application/json

[payment_object_1, payment_object_2, ...]

Response: 201 Created
{
  "success": true,
  "message": "Processed X payments successfully",
  "data": [payments],
  "errors": [...]
}
```

---

## 🧾 Receipts Endpoints

### Get Receipts
```http
GET /api/receipts?page=1&limit=50&memberId=string&status=Issued
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [receipt_objects],
  "pagination": {...}
}
```

### Get Single Receipt
```http
GET /api/receipts/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { receipt_object }
}
```

### Get Receipt by Receipt ID
```http
GET /api/receipts/id/:receiptId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { receipt_object }
}
```

### Download Receipt PDF
```http
GET /api/receipts/:id/download
Authorization: Bearer <token>

Response: 200 OK
Content-Type: application/pdf
Content-Disposition: attachment; filename="RCP-xxx.pdf"

[PDF Binary Data]
```

### Get Receipt PDF Data
```http
GET /api/receipts/:id/pdf
Authorization: Bearer <token>

Response: 200 OK
Content-Type: application/pdf

[PDF Binary Data]
```

### Void Receipt (Admin Only)
```http
PUT /api/receipts/:id/void
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Receipt voided successfully",
  "data": { receipt_object }
}
```

---

## 📊 Reports Endpoints

### Monthly Revenue Report
```http
GET /api/reports/monthly-revenue?month=4&year=2026
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "summary": {
      "totalRevenue": number,
      "totalPayments": number,
      "avgPayment": number
    },
    "byType": [{ _id: "string", totalRevenue: number }],
    "byBranch": [{ _id: "string", totalRevenue: number }]
  }
}
```

### Yearly Revenue Report
```http
GET /api/reports/yearly-revenue?year=2026
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "totalRevenue": number,
    "totalPayments": number,
    "monthlyBreakdown": [{ _id: number, monthlyRevenue: number }]
  }
}
```

### HQ vs Branch Distribution
```http
GET /api/reports/hq-branch?year=2026
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "hqShare": {
      "amount": number,
      "percentage": 20
    },
    "branchShare": {
      "amount": number,
      "percentage": 80
    }
  }
}
```

### Defaulter Report
```http
GET /api/reports/defaulters
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "totalDefaulters": number,
    "totalOutstanding": number,
    "defaulters": [member_objects]
  }
}
```

### Export All Data
```http
GET /api/reports/export
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "members": [...],
    "payments": [...],
    "receipts": [...]
  }
}
```

---

## 📈 Dashboard Endpoints

### Get Dashboard Statistics
```http
GET /api/dashboard/stats
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "summary": {
      "totalMembers": number,
      "activeMembers": number,
      "yearlyRevenue": number,
      "monthlyRevenue": number,
      "pendingPayments": number,
      "defaultedMembers": number
    },
    "membersByType": [{ _id: "string", count: number }],
    "membersByBranch": [{ _id: "string", count: number }],
    "membersByCluster": [{ _id: "string", count: number }],
    "membersBySector": [{ _id: "string", count: number }],
    "paymentTrend": [{ _id: { year, month }, revenue, count }],
    "topContributors": [member_objects],
    "revenueByType": [{ _id: "string", totalRevenue: number }]
  }
}
```

### Get Growth Rate
```http
GET /api/dashboard/growth
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "currentYear": number,
    "currentYearMembers": number,
    "lastYearMembers": number,
    "growthRate": "string"
  }
}
```

---

## 📥 Import Endpoints

### Import Members from Excel
```http
POST /api/import
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <excel_file.xlsx>

Response: 200 OK
{
  "success": true,
  "message": "Import completed",
  "data": {
    "success": number,
    "errors": [...],
    "duplicates": [...]
  }
}
```

### Get Import Template
```http
GET /api/import/template
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "columns": ["Name", "Gender", "Phone", "Email", "Branch", ...],
  "sampleData": [{...}]
}
```

---

## ⚙️ Settings Endpoints

### Get Settings
```http
GET /api/settings
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "contributionRules": {...},
    "distribution": {
      "hqPercentage": 20,
      "branchPercentage": 80
    },
    "branches": [...],
    "system": {...}
  }
}
```

### Update Settings (Admin Only)
```http
PUT /api/settings
Authorization: Bearer <token>
Content-Type: application/json

{
  "contributionRules": {...},
  "distribution": {...},
  "branches": [...],
  "system": {...}
}

Response: 200 OK
{
  "success": true,
  "message": "Settings updated successfully",
  "data": { updated_settings }
}
```

### Recalculate All Members (Admin Only)
```http
POST /api/settings/recalculate
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Recalculated X members",
  "data": {
    "success": number,
    "errors": number
  }
}
```

### Add Branch (Admin Only)
```http
POST /api/settings/branches
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "string",
  "code": "string",
  "cluster": "Urban|Rural|N/A",
  "sector": "string",
  "isActive": true
}

Response: 201 Created
{
  "success": true,
  "message": "Branch added successfully",
  "data": { branch_object }
}
```

### Update Branch (Admin Only)
```http
PUT /api/settings/branches/:branchId
Authorization: Bearer <token>
Content-Type: application/json

{ ...fields_to_update }

Response: 200 OK
{
  "success": true,
  "message": "Branch updated successfully",
  "data": { branch_object }
}
```

### Delete Branch (Admin Only)
```http
DELETE /api/settings/branches/:branchId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Branch deleted successfully"
}
```

---

## 💾 Backup Endpoints

### Create Backup (Admin Only)
```http
POST /api/backup/create
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Backup created successfully",
  "data": {
    "backupPath": "string",
    "timestamp": "string",
    "metadata": {...}
  }
}
```

### Export to JSON
```http
POST /api/backup/export-json
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "JSON export completed",
  "data": {
    "exportPath": "string",
    "timestamp": "string",
    "collections": ["string"],
    "totalDocuments": number
  }
}
```

### List Backups (Admin Only)
```http
GET /api/backup/list
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "name": "string",
      "path": "string",
      "size": number,
      "createdAt": "string",
      "metadata": {...}
    }
  ]
}
```

### Delete Backup (Admin Only)
```http
DELETE /api/backup/delete
Authorization: Bearer <token>
Content-Type: application/json

{
  "backupPath": "string"
}

Response: 200 OK
{
  "success": true,
  "message": "Backup deleted"
}
```

### Clean Old Backups (Admin Only)
```http
POST /api/backup/clean
Authorization: Bearer <token>
Content-Type: application/json

{
  "keepCount": 10
}

Response: 200 OK
{
  "success": true,
  "deleted": number
}
```

---

## 🔍 Query Parameters

### Members
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50)
- `search`: Search by name, memberId, or phone
- `cluster`: Filter by Urban/Rural/N/A
- `sector`: Filter by sector name
- `branch`: Filter by branch name
- `membershipType`: Filter by type
- `status`: Filter by Active/Inactive/Suspended
- `paymentStatus`: Filter by Paid/Unpaid/Partial/Defaulted
- `minSalary`: Minimum salary filter
- `maxSalary`: Maximum salary filter

### Payments
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50)
- `memberId`: Filter by member ID
- `status`: Filter by Paid/Partial/Overpaid

### Receipts
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50)
- `memberId`: Filter by member ID
- `status`: Filter by Issued/Voided

### Reports
- `month`: Month number (1-12)
- `year`: Year number (2024, 2025, 2026)

---

## 📝 Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error message"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized, token failed"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Not authorized to access this resource"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## 🔐 Role-Based Access Control

| Endpoint | Admin | Operator | Viewer |
|----------|-------|----------|--------|
| Auth (Login/Register) | ✅ | ✅ | ✅ |
| Members (CRUD) | ✅ | ✅ (No Delete) | ✅ (Read Only) |
| Payments (CRUD) | ✅ | ✅ | ✅ (Read Only) |
| Receipts (Read) | ✅ | ✅ | ✅ |
| Receipts (Void) | ✅ | ❌ | ❌ |
| Reports (Read) | ✅ | ✅ | ✅ |
| Dashboard (Read) | ✅ | ✅ | ✅ |
| Settings (Read) | ✅ | ✅ | ✅ |
| Settings (Update) | ✅ | ❌ | ❌ |
| Import | ✅ | ✅ | ❌ |
| Backup | ✅ | ❌ | ❌ |

---

**API Version:** 1.0.0  
**Last Updated:** April 14, 2026
