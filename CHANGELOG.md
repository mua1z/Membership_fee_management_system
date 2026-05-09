# MCMS-DDU Changelog

All notable changes to this project will be documented in this file.

---

## [2.0.0] - 2026-04-14

### 🎉 Major Features Added

#### 🏗️ Cluster/Sector Hierarchy System
- **Added** `cluster` field to Member model (Urban/Rural/N/A)
- **Added** `sector` field to Member model with 25+ sectors
- **Updated** Setting model to include cluster and sector in branches
- **Implemented** auto-detection of cluster based on sector
- **Updated** all controllers to handle cluster/sector fields
- **Modified** seed data to include 29 members across all sectors

**Urban Sectors Supported:**
- Kebele, Government Office, Public Institution, Health Facility
- Education Institution, Micro Enterprise, Small Business, Medium Business
- Market, Private Company, NGO, Bank, Factory, Embassy

**Rural Sectors Supported:**
- Woreda, Farming, Pastoral, Agro Activity, Cooperative
- Local Market, Labor, Informal Work, Self Employed
- Rural School, Health Post

#### 📄 PDF Receipt Generation
- **Created** `ReceiptPDF` utility with pdfkit
- **Implemented** professional PDF receipt generation
- **Added** receipt download endpoint (`/api/receipts/:id/download`)
- **Created** ReceiptModal component for viewing/downloading receipts
- **Receipt includes:**
  - Organization header
  - Member information
  - Payment details
  - Contribution breakdown
  - Revenue distribution (20/80 split)
  - Official footer

#### 📊 Enhanced Dashboard Analytics
- **Added** Urban vs Rural distribution pie chart
- **Added** Members by Sector bar chart
- **Enhanced** backend to provide cluster and sector statistics
- **Updated** frontend to display new charts

#### 💾 Backup System
- **Created** `BackupService` utility
- **Implemented** database backup via mongodump
- **Added** JSON export functionality
- **Created** backup management routes and controller
- **Features:**
  - Create backups
  - List all backups
  - Delete old backups
  - Clean old backups automatically
  - Export to JSON format

#### 📱 SMS Notification Service
- **Created** `SMSService` utility (placeholder)
- **Supports** Twilio and Africa's Talking providers
- **Implemented** notification methods:
  - Payment reminders
  - Payment confirmations
  - Defaulter alerts
  - Batch SMS support
- **Note:** Disabled by default, requires provider configuration

#### 🌍 Multi-Language Support
- **Created** `I18nService` utility
- **Added** English and Amharic translation frameworks
- **Implemented** dot-notation translation keys
- **Created** default translations for all major UI elements
- **Auto-creates** translation files on first run

---

### 🔧 Backend Changes

#### Models Updated
- **Member.js:** Added `cluster` and `sector` fields, removed branch enum
- **Setting.js:** Enhanced branches with `cluster`, `sector`, `parentBranch`, `statistics`

#### Controllers Enhanced
- **memberController.js:** 
  - Handles cluster/sector in create/update
  - Added cluster/sector filtering in getMembers
  - Recalculates cluster on sector change
  
- **dashboardController.js:**
  - Added `membersByCluster` aggregation
  - Added `membersBySector` aggregation
  
- **receiptController.js:**
  - Integrated PDF generation
  - Added download endpoint

#### New Utilities Created
- `utils/classificationEngine.js` - Enhanced with `determineCluster()` method
- `utils/receiptPDF.js` - PDF receipt generation
- `utils/smsService.js` - SMS notification service
- `utils/backupService.js` - Database backup management
- `utils/i18n.js` - Multi-language translation system

#### New Routes Added
- `routes/backupRoutes.js` - Backup management endpoints

#### Dependencies Added
- `pdfkit` - PDF generation library

---

### 🎨 Frontend Changes

#### New Components
- **ReceiptModal.tsx** - View, print, and download PDF receipts

#### Updated Components
- **Members.tsx:**
  - Added cluster and sector columns to table
  - Added cluster filter dropdown
  - Updated interface to include new fields
  
- **Dashboard.tsx:**
  - Added Urban vs Rural pie chart
  - Added Members by Sector bar chart
  - Updated interface for new data structure
  
- **MemberModal.tsx:**
  - Added cluster dropdown
  - Added sector dropdown with grouped options (Urban/Rural)
  - Updated form state to include new fields
  
- **Settings.tsx:**
  - Updated branch management to include cluster/sector fields
  - Changed grid layout for better UX

#### Updated Interfaces
- All member interfaces now include `cluster` and `sector`
- Dashboard data interface includes `membersByCluster` and `membersBySector`

---

### 📚 Documentation

#### New Documents
- **SETUP_GUIDE.md** - Comprehensive setup and testing guide
- **API_DOCUMENTATION.md** - Complete API endpoint reference
- **CHANGELOG.md** - This file

#### Updated Documents
- **README.md:**
  - Added new features section
  - Updated feature list
  - Added backup API documentation
  - Enhanced setup instructions

---

### 🌱 Seed Data

#### Enhanced Sample Data
- **Increased** sample members from 12 to 29
- **Coverage** of all Urban sectors (14 types)
- **Coverage** of all Rural sectors (11 types)
- **Includes** all membership types:
  - Salary-Based (Government, Private, NGO, Embassy)
  - Non-Salary (Farmer, Pastoralist, Labor, Informal)
  - Business (Micro, Small, Medium)
  - Investor (3 tiers)
  - Student
  - Wing (Women, Youth)
  - Special categories

---

### 🔒 Security Enhancements

- **Maintained** JWT authentication
- **Maintained** Role-based access control
- **Added** backup management (admin only)
- **SMS service** ready for secure provider integration

---

### 🐛 Bug Fixes

- Fixed branch enum restriction allowing dynamic branches
- Updated cluster auto-detection logic
- Fixed receipt PDF download headers
- Enhanced error handling in backup service

---

### ⚡ Performance Improvements

- Added indexes for cluster and sector fields
- Optimized dashboard aggregations
- Improved PDF generation efficiency

---

### 📝 Configuration Changes

#### Environment Variables (Optional)
```env
# SMS Configuration
ENABLE_SMS=false
SMS_PROVIDER=twilio  # or africas-talking
SMS_API_KEY=your_key
SMS_API_SECRET=your_secret
SMS_FROM_NUMBER=+1234567890
```

---

### 🚀 Deployment Notes

1. **Database Migration:**
   - Existing members will have `cluster: 'N/A'` and empty `sector`
   - Run recalculation from Settings to auto-populate
   - Or manually update existing members

2. **Backward Compatibility:**
   - All existing APIs remain functional
   - New fields are optional in queries
   - Old data remains accessible

3. **New Dependencies:**
   - `pdfkit` added (auto-installed with `npm install`)
   - MongoDB tools recommended for backup (mongodump/mongorestore)

---

### 📊 Statistics

**Files Modified:** 15  
**Files Created:** 8  
**Lines Added:** ~3,500  
**Features Added:** 6 major, 12 minor  
**Sectors Supported:** 25+  
**Sample Members:** 29 (was 12)  

---

## [1.0.0] - Previous Release

### Features
- Basic member CRUD operations
- Auto-classification engine
- Contribution calculation
- Payment tracking
- Receipt generation (basic)
- Excel import/export
- Dashboard analytics
- Financial reports
- Role-based access control
- Dark mode support

---

**For questions or issues, please refer to SETUP_GUIDE.md or API_DOCUMENTATION.md**
