# MCMS-DDU Complete Setup & Testing Guide

## 📦 Quick Setup (5 Minutes)

### Prerequisites
- **Node.js** v18+ installed
- **MongoDB** v6+ running locally or MongoDB Atlas account
- **npm** or **yarn** package manager

### Step 1: Install Dependencies

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Configure Environment

The `backend/.env` file is already configured with defaults:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mcms-ddu
JWT_SECRET=mcms_ddu_secret_key_2026_dire_dawa_administration
JWT_EXPIRE=30d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**If using MongoDB Atlas:**
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Get your connection string
3. Update `MONGODB_URI` in `.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mcms-ddu
   ```

### Step 3: Seed Database with Sample Data

```bash
cd backend
npm run seed
```

This creates:
- ✅ Admin user: `admin@mcms.ddu` / `admin123`
- ✅ Operator user: `operator@mcms.ddu` / `operator123`
- ✅ **29 sample members** across all Urban/Rural sectors
- ✅ Sample payments and receipts
- ✅ Default settings with 13 branches

### Step 4: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend running on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend running on: `http://localhost:5173`

### Step 5: Login & Explore

1. Open browser: `http://localhost:5173`
2. Login with: `admin@mcms.ddu` / `admin123`
3. Navigate through:
   - **Dashboard** - View statistics, Urban vs Rural charts
   - **Members** - See 29 sample members with cluster/sector
   - **Payments** - Record new payments
   - **Reports** - Generate financial reports
   - **Settings** - Configure contribution rules

---

## 🧪 Testing Checklist

### 1. Authentication ✅
```bash
# Test Login
- Navigate to http://localhost:5173
- Login with admin@mcms.ddu / admin123
- Verify dashboard loads

# Test Role-Based Access
- Login as operator@mcms.ddu / operator123
- Verify operator cannot access admin-only features
```

### 2. Members Management ✅
```bash
# View Members
- Navigate to Members page
- Verify 29 sample members displayed
- Check cluster column shows Urban/Rural/N/A
- Check sector column shows sector names

# Test Filters
- Filter by Cluster (Urban/Rural)
- Filter by Branch
- Filter by Membership Type
- Filter by Status
- Filter by Payment Status
- Test search by name/ID/phone

# Test Add Member
- Click "Add Member"
- Fill in all fields including Cluster and Sector
- Submit and verify member created
- Verify auto-classification works

# Test Edit Member
- Click edit icon on any member
- Modify fields and save
- Verify calculations update

# Test Delete Member
- Click delete icon
- Confirm deletion
- Verify member removed

# Test Export
- Click "Export" button
- Verify Excel file downloads
- Open and verify data

# Test Import
- Click "Import" button
- Download template
- Fill with sample data
- Upload and verify import
```

### 3. Dashboard Analytics ✅
```bash
# Navigate to Dashboard
- Verify stat cards show correct data
- Check "Urban vs Rural Distribution" pie chart
- Check "Members by Sector" bar chart
- Check "Members by Branch" chart
- Check "Top 10 Contributors" list
- Verify payment trend line chart
```

### 4. Payments & Receipts ✅
```bash
# Record Payment
- Navigate to Payments page
- Click "Record Payment"
- Select a member
- Verify amount auto-fills
- Fill payment details
- Submit and verify payment recorded

# View Receipt
- After payment, click receipt ID
- Verify Receipt Modal opens
- Check all details are correct
- Click "Download PDF"
- Verify PDF downloads
- Open PDF and verify formatting

# Print Receipt
- In Receipt Modal, click "Print"
- Verify print dialog opens
- Print or save as PDF
```

### 5. Reports ✅
```bash
# Monthly Revenue Report
- Navigate to Reports
- Select "Monthly Revenue"
- Choose month/year
- Verify revenue data displays
- Check charts render correctly

# Yearly Revenue Report
- Select "Yearly Revenue"
- Choose year
- Verify monthly breakdown
- Check total revenue

# HQ vs Branch Distribution
- Select "HQ vs Branch Distribution"
- Verify 20%/80% split
- Check pie chart

# Defaulter Report
- Select "Defaulter Report"
- Verify list of unpaid members
- Check outstanding amounts

# Export All Data
- Click "Export All Data (Excel)"
- Verify Excel file downloads
- Open and verify all sheets
```

### 6. Settings ✅
```bash
# Contribution Rules
- Navigate to Settings
- Click "Contribution Rules" tab
- Verify all rules display
- Test editing a value
- Save and verify

# Branch Management
- Click "Branches" tab
- Verify 13 branches listed
- Check Cluster and Sector fields
- Test adding a new branch
- Test removing a branch
- Save changes

# System Settings
- Click "System" tab
- Verify organization name
- Check SMS/Email notification toggles
- Verify defaulter threshold

# Recalculate All
- Click "Recalculate" tab
- Click "Recalculate All"
- Confirm action
- Verify all members recalculated
```

### 7. Backup System ✅
```bash
# Create Backup (via API)
curl -X POST http://localhost:5000/api/backup/create \
  -H "Authorization: Bearer YOUR_TOKEN"

# List Backups
curl http://localhost:5000/api/backup/list \
  -H "Authorization: Bearer YOUR_TOKEN"

# Export to JSON
curl -X POST http://localhost:5000/api/backup/export-json \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 8. SMS Service ✅
```bash
# SMS service is configured but disabled by default
# Check backend logs when payments are made
# You should see: "📱 SMS disabled. Would have sent to: ..."

# To enable SMS:
# 1. Get Twilio or Africa's Talking account
# 2. Add credentials to .env:
#    ENABLE_SMS=true
#    SMS_PROVIDER=twilio
#    SMS_API_KEY=your_key
#    SMS_API_SECRET=your_secret
#    SMS_FROM_NUMBER=+1234567890
```

---

## 🎯 Feature Testing Scenarios

### Scenario 1: New Member Registration
1. Register a government employee with 15,000 ETB salary
2. Verify auto-classification:
   - Type: Salary-Based
   - Sub-Type: Government
   - Percentage: 3%
   - Monthly Fee: 450 ETB
3. Verify net salary calculation:
   - Gross: 15,000
   - Pension (7%): 1,050
   - Tax: (calculated)
   - Net: (after deductions)
   - Contribution: 450
   - Final Net: (net - contribution)

### Scenario 2: Business Member
1. Register a small business with 200,000 ETB income
2. Verify classification:
   - Type: Business
   - Sub-Type: Small
   - Monthly Fee: 10 ETB

### Scenario 3: Investor Member
1. Register an investor with 8,000,000 ETB capital
2. Verify classification:
   - Type: Investor
   - Sub-Type: Investor
   - Monthly Fee: 1,000 ETB (5M-10M tier)

### Scenario 4: Rural Farmer
1. Register a farmer in rural area
2. Verify classification:
   - Type: Non-Salary
   - Sub-Type: Farmer
   - Cluster: Rural
   - Sector: Farming
   - Monthly Fee: 5 ETB

### Scenario 5: Payment & Receipt
1. Record payment for any member
2. Verify:
   - Payment status changes to "Paid"
   - Receipt is auto-generated
   - Receipt ID is unique
   - PDF download works
   - PDF contains all details

### Scenario 6: Defaulter Detection
1. Find a member with "Unpaid" status
2. Navigate to Reports > Defaulter Report
3. Verify member appears in list
4. Check outstanding amount

### Scenario 7: Excel Import
1. Download import template
2. Fill with 10 sample members
3. Include various types (salary, business, farmer)
4. Upload file
5. Verify:
   - Import validation passes
   - Members auto-classified
   - Calculations correct
   - Success message shows count

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB service (Windows)
net start MongoDB

# Or use MongoDB Atlas
# Update MONGODB_URI in backend/.env
```

### Port Already in Use
```bash
# Change backend port
# Edit backend/.env
PORT=5001

# Change frontend port
# Edit frontend/vite.config.ts
server: { port: 5174 }
```

### Can't Login
```bash
# Re-seed database
cd backend
npm run seed
```

### CORS Error
```bash
# Ensure FRONTEND_URL in backend/.env matches frontend URL
# Default: FRONTEND_URL=http://localhost:5173
```

### PDF Not Downloading
```bash
# Check browser pop-up blocker
# Allow downloads from localhost
# Check backend logs for errors
```

### Import Fails
```bash
# Verify Excel file format (.xlsx, .xls, or .csv)
# Check required columns: Name, Phone, Cluster, Sector, Branch, etc.
# Ensure no duplicate phone numbers
# Verify salary values are numbers
```

---

## 📊 Sample Data Summary

After seeding, you'll have:

### Urban Members (19 members)
- Kebele: 2 members
- Government Office: 2 members
- Health Facility: 1 member
- Education Institution: 2 members
- Private Company: 2 members
- NGO: 1 member
- Bank: 1 member
- Embassy: 1 member (USD)
- Micro Enterprise: 1 member
- Small Business: 1 member
- Medium Business: 1 member
- Market: 1 member
- Factory: 1 member
- Student: 1 member
- Wings: 2 members (Women, Youth)

### Rural Members (10 members)
- Woreda: 1 member
- Farming: 1 member
- Pastoral: 1 member
- Agro Activity: 1 member
- Cooperative: 1 member
- Local Market: 1 member
- Labor: 1 member
- Informal Work: 1 member
- Self Employed: 1 member
- Rural School: 1 member
- Health Post: 1 member

---

## 🔐 Security Notes

1. **Change Default Passwords**
   - After first login, change admin password
   - Create new admin users as needed

2. **JWT Secret**
   - Change `JWT_SECRET` in production
   - Use a strong random string

3. **CORS Configuration**
   - Update `FRONTEND_URL` for production
   - Add all allowed origins

4. **Database Security**
   - Use MongoDB Atlas with IP whitelisting
   - Enable authentication
   - Regular backups

---

## 🚀 Production Deployment

### Backend
```bash
# Set production environment variables
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=strong_random_secret
FRONTEND_URL=https://yourdomain.com

# Build and start
npm start
```

### Frontend
```bash
# Build for production
npm run build

# Serve dist folder with nginx or any static server
```

---

## 📞 Support

For issues or questions:
- Check this guide
- Review API logs in backend terminal
- Check browser console for frontend errors
- Verify MongoDB connection

---

## 🎉 Success Criteria

✅ All 29 sample members created with correct classifications
✅ Dashboard shows Urban vs Rural charts
✅ PDF receipts generate and download correctly
✅ Excel import/export works with validation
✅ Filters and search function properly
✅ Settings can be modified and saved
✅ Backup system creates files
✅ Role-based access control works
✅ Dark mode toggles correctly
✅ Responsive design works on mobile

---

**Developed with ❤️ for Dire Dawa City Administration Finance Bureau**
