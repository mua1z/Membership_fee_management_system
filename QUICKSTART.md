# MCMS-DDU Quick Start Guide

## First Time Setup (5 minutes)

### Step 1: Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Step 2: Start MongoDB
Make sure MongoDB is running on your system or use MongoDB Atlas.

### Step 3: Seed Database with Sample Data
```bash
cd backend
npm run seed
```

This will create:
- ✅ Admin user: `admin@mcms.ddu` / `admin123`
- ✅ Operator user: `operator@mcms.ddu` / `operator123`
- ✅ 12 sample members with auto-classification
- ✅ Sample payments and receipts

### Step 4: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
→ Backend runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
→ Frontend runs on `http://localhost:5173`

### Step 5: Login & Explore
1. Open browser: `http://localhost:5173`
2. Login with: `admin@mcms.ddu` / `admin123`
3. Explore Dashboard, Members, Payments, and Reports!

---

## Common Commands

```bash
# Start backend in development mode
cd backend && npm run dev

# Start frontend in development mode
cd frontend && npm run dev

# Re-seed database (WARNING: deletes all data)
cd backend && npm run seed

# Install new backend dependency
cd backend && npm install <package-name>

# Install new frontend dependency
cd frontend && npm install <package-name>
```

---

## Features to Try

1. **Dashboard** - View statistics, charts, top contributors
2. **Members** - Search, filter, add/edit/delete members, import from Excel
3. **Payments** - Record payments with automatic receipt generation
4. **Reports** - Monthly/yearly revenue, defaulter list, HQ vs Branch
5. **Import** - Download Excel template, upload filled file
6. **Export** - Export all data to Excel format
7. **Dark Mode** - Toggle in header

---

## Troubleshooting

**MongoDB not running?**
```bash
# Windows
net start MongoDB
```

**Port conflict?**
Change `PORT` in `backend/.env` or port in `frontend/vite.config.ts`

**Can't login?**
Run `npm run seed` again to reset users

---

**Enjoy using MCMS-DDU! 🎉**
