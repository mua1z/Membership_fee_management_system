// utils/backupService.js - Backup Service (MySQL / Sequelize)
const fs   = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, '../backups');

// Ensure backups directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Create a full JSON backup of all MySQL tables
exports.createBackup = async () => {
  try {
    const Member       = require('../models/Member');
    const Payment      = require('../models/Payment');
    const Receipt      = require('../models/Receipt');
    const Contribution = require('../models/Contribution');
    const Setting      = require('../models/Setting');
    const User         = require('../models/User');

    const [members, payments, receipts, contributions, settings, users] = await Promise.all([
      Member.findAll(),
      Payment.findAll(),
      Receipt.findAll(),
      Contribution.findAll(),
      Setting.findAll(),
      User.findAll({ attributes: { exclude: ['password'] } })
    ]);

    const backup = {
      version:     '2.0-mysql',
      createdAt:   new Date().toISOString(),
      data: {
        members:       members.map(m => m.toJSON()),
        payments:      payments.map(p => p.toJSON()),
        receipts:      receipts.map(r => r.toJSON()),
        contributions: contributions.map(c => c.toJSON()),
        settings:      settings.map(s => s.toJSON()),
        users
      }
    };

    const filename = `backup-${Date.now()}.json`;
    const filepath = path.join(BACKUP_DIR, filename);
    fs.writeFileSync(filepath, JSON.stringify(backup, null, 2));

    return {
      filename,
      filepath,
      size: fs.statSync(filepath).size,
      records: {
        members:       members.length,
        payments:      payments.length,
        receipts:      receipts.length,
        contributions: contributions.length
      }
    };
  } catch (error) {
    throw new Error(`Backup failed: ${error.message}`);
  }
};

// Export all data as JSON (same as backup, returned as object)
exports.exportToJSON = async () => {
  try {
    const Member       = require('../models/Member');
    const Payment      = require('../models/Payment');
    const Receipt      = require('../models/Receipt');
    const Contribution = require('../models/Contribution');

    const [members, payments, receipts, contributions] = await Promise.all([
      Member.findAll(),
      Payment.findAll(),
      Receipt.findAll(),
      Contribution.findAll()
    ]);

    return {
      exportedAt:    new Date().toISOString(),
      members:       members.map(m => m.toJSON()),
      payments:      payments.map(p => p.toJSON()),
      receipts:      receipts.map(r => r.toJSON()),
      contributions: contributions.map(c => c.toJSON())
    };
  } catch (error) {
    throw new Error(`Export failed: ${error.message}`);
  }
};

// List available backups
exports.listBackups = async () => {
  try {
    if (!fs.existsSync(BACKUP_DIR)) return [];
    const files = fs.readdirSync(BACKUP_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => {
        const filepath = path.join(BACKUP_DIR, f);
        const stat     = fs.statSync(filepath);
        return { filename: f, filepath, size: stat.size, createdAt: stat.mtime };
      })
      .sort((a, b) => b.createdAt - a.createdAt);
    return files;
  } catch (error) {
    throw new Error(`List backups failed: ${error.message}`);
  }
};

// Delete a specific backup
exports.deleteBackup = async (backupPath) => {
  try {
    if (!fs.existsSync(backupPath)) {
      return { success: false, message: 'Backup file not found' };
    }
    // Safety: only delete files inside the backup directory
    const resolved = path.resolve(backupPath);
    if (!resolved.startsWith(path.resolve(BACKUP_DIR))) {
      return { success: false, message: 'Invalid backup path' };
    }
    fs.unlinkSync(resolved);
    return { success: true, message: 'Backup deleted successfully' };
  } catch (error) {
    throw new Error(`Delete backup failed: ${error.message}`);
  }
};

// Clean old backups, keeping the N most recent
exports.cleanOldBackups = async (keepCount = 10) => {
  try {
    const files = await exports.listBackups();
    const toDelete = files.slice(keepCount);
    let deleted = 0;
    for (const file of toDelete) {
      fs.unlinkSync(file.filepath);
      deleted++;
    }
    return { success: true, message: `Cleaned ${deleted} old backups`, deleted };
  } catch (error) {
    throw new Error(`Clean backups failed: ${error.message}`);
  }
};
