const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  try {
    const { page = 1, limit = 20, category, start, end } = req.query;
    const filter = { userId: req.user.id };
    if (category) filter.category = category;
    if (start || end) { filter.date = {}; if (start) filter.date.$gte = new Date(start); if (end) filter.date.$lte = new Date(end); }

    const total = await Expense.countDocuments(filter);
    const expenses = await Expense.find(filter).sort({ date: -1 }).skip((page - 1) * limit).limit(Number(limit));
    res.json({ success: true, data: expenses, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({ ...req.body, userId: req.user.id });
    res.status(201).json({ success: true, data: expense });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, req.body, { new: true, runValidators: true }
    );
    if (!expense) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: expense });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!expense) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAnalytics = async (req, res) => {
  try {
    const start = req.query.start || new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const end = req.query.end || new Date();
    const summary = await Expense.getSummary(req.user.id, start, end);
    const total = summary.reduce((acc, cur) => acc + cur.total, 0);
    res.json({ success: true, data: { summary, total } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};
