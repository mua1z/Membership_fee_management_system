// controllers/backupController.js - Backup Controller
const backupService = require('../utils/backupService');

// Create backup
exports.createBackup = async (req, res) => {
  try {
    const result = await backupService.createBackup();
    res.json({
      success: true,
      message: 'Backup created successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Backup failed'
    });
  }
};

// Export to JSON
exports.exportToJSON = async (req, res) => {
  try {
    const result = await backupService.exportToJSON();
    res.json({
      success: true,
      message: 'JSON export completed',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Export failed'
    });
  }
};

// List backups
exports.listBackups = async (req, res) => {
  try {
    const backups = await backupService.listBackups();
    res.json({
      success: true,
      data: backups
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to list backups'
    });
  }
};

// Delete backup
exports.deleteBackup = async (req, res) => {
  try {
    const { backupPath } = req.body;
    if (!backupPath) {
      return res.status(400).json({
        success: false,
        message: 'backupPath is required'
      });
    }
    
    const result = await backupService.deleteBackup(backupPath);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to delete backup'
    });
  }
};

// Clean old backups
exports.cleanOldBackups = async (req, res) => {
  try {
    const { keepCount = 10 } = req.body;
    const result = await backupService.cleanOldBackups(keepCount);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to clean old backups'
    });
  }
};
