const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true, trim: true, maxlength: 100 },
    amount: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      required: true,
      enum: ['Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Utilities', 'Education', 'Other'],
      default: 'Other',
    },
    note: { type: String, trim: true, maxlength: 300 },
    date: { type: Date, required: true, default: Date.now },
    paymentMethod: { type: String, enum: ['Cash', 'Card', 'UPI', 'Net Banking'], default: 'Cash' },
  },
  { timestamps: true }
);

expenseSchema.index({ userId: 1, date: -1 });

expenseSchema.statics.getSummary = async function (userId, startDate, endDate) {
  return this.aggregate([
    { $match: { userId: mongoose.Types.ObjectId(userId), date: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
    { $group: { _id: '$category', total: { $sum: '$amount' }, count: { $sum: 1 } } },
    { $sort: { total: -1 } },
  ]);
};

module.exports = mongoose.model('Expense', expenseSchema);
