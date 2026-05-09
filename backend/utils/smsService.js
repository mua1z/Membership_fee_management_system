// utils/smsService.js - SMS Notification Service (Placeholder)
// This service provides SMS notification functionality for payment reminders, receipts, etc.

class SMSService {
  constructor() {
    // SMS provider configuration (e.g., Twilio, Africa's Talking, etc.)
    this.provider = process.env.SMS_PROVIDER || 'none';
    this.apiKey = process.env.SMS_API_KEY || '';
    this.apiSecret = process.env.SMS_API_SECRET || '';
    this.fromNumber = process.env.SMS_FROM_NUMBER || '';
    this.enabled = process.env.ENABLE_SMS === 'true';
  }

  /**
   * Send SMS message
   * @param {string} to - Recipient phone number
   * @param {string} message - Message content
   * @returns {Promise} - SMS send result
   */
  async sendSMS(to, message) {
    if (!this.enabled) {
      console.log('📱 SMS disabled. Would have sent to:', to);
      console.log('📱 Message:', message);
      return { success: false, reason: 'SMS disabled' };
    }

    try {
      switch (this.provider) {
        case 'twilio':
          return await this._sendViaTwilio(to, message);
        case 'africas-talking':
          return await this._sendViaAfricasTalking(to, message);
        default:
          console.log('📱 SMS Provider not configured. Message:', message);
          return { success: false, reason: 'No SMS provider configured' };
      }
    } catch (error) {
      console.error('❌ SMS sending failed:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Send payment reminder to member
   * @param {Object} member - Member object
   * @param {Object} contribution - Contribution details
   */
  async sendPaymentReminder(member, contribution) {
    const message = `PP Dire Dawa Reminder: Your monthly contribution of ETB ${contribution.monthlyFee} is due. Please pay at your earliest convenience. Thank you.`;
    
    return await this.sendSMS(member.phone, message);
  }

  /**
   * Send payment confirmation with receipt ID
   * @param {Object} member - Member object
   * @param {Object} receipt - Receipt object
   */
  async sendPaymentConfirmation(member, receipt) {
    const message = `PP Dire Dawa: Payment received! Receipt ID: ${receipt.receiptId}, Amount: ${receipt.amount} ${receipt.currency}. Thank you for your contribution.`;
    
    return await this.sendSMS(member.phone, message);
  }

  /**
   * Send defaulter notification
   * @param {Object} member - Member object
   * @param {number} monthsOverdue - Number of months overdue
   */
  async sendDefaulterNotification(member, monthsOverdue) {
    const message = `PP Dire Dawa Alert: Your contribution is ${monthsOverdue} months overdue. Please settle your account to avoid penalties. Contact your branch for assistance.`;
    
    return await this.sendSMS(member.phone, message);
  }

  /**
   * Twilio SMS provider
   */
  async _sendViaTwilio(to, message) {
    // Placeholder for Twilio integration
    // const twilio = require('twilio');
    // const client = twilio(this.apiKey, this.apiSecret);
    // const result = await client.messages.create({
    //   body: message,
    //   from: this.fromNumber,
    //   to: to
    // });
    // return { success: true, messageId: result.sid };
    
    console.log('📱 [Twilio Placeholder] To:', to, 'Message:', message);
    return { success: false, reason: 'Twilio not configured' };
  }

  /**
   * Africa's Talking SMS provider
   */
  async _sendViaAfricasTalking(to, message) {
    // Placeholder for Africa's Talking integration
    // const AfricaTalking = require('africastalking');
    // const at = AfricaTalking({
    //   apiKey: this.apiKey,
    //   username: this.fromNumber
    // });
    // const sms = at.SMS;
    // const result = await sms.send({
    //   message: message,
    //   to: [to],
    //   from: this.fromNumber
    // });
    // return { success: true, messageId: result.SMSMessageData };
    
    console.log('📱 [Africa\'s Talking Placeholder] To:', to, 'Message:', message);
    return { success: false, reason: 'Africa\'s Talking not configured' };
  }

  /**
   * Batch SMS - Send to multiple members
   * @param {Array} members - Array of member objects
   * @param {string} message - Message content
   */
  async sendBatchSMS(members, message) {
    const results = [];
    
    for (const member of members) {
      const result = await this.sendSMS(member.phone, message);
      results.push({
        memberId: member.memberId,
        phone: member.phone,
        ...result
      });
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return results;
  }
}

// Export singleton instance
module.exports = new SMSService();
