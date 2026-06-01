import React from 'react';

const COLORS = {
  Food: 'bg-orange-100 text-orange-700', Transport: 'bg-blue-100 text-blue-700',
  Shopping: 'bg-purple-100 text-purple-700', Health: 'bg-green-100 text-green-700',
  Other: 'bg-gray-100 text-gray-700',
};

const ExpenseCard = ({ expense, onEdit, onDelete }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border">
    <div className="flex items-center gap-3">
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${COLORS[expense.category] || COLORS.Other}`}>
        {expense.category}
      </span>
      <div>
        <p className="font-medium text-gray-800">{expense.title}</p>
        <p className="text-xs text-gray-400">{new Date(expense.date).toLocaleDateString('en-IN')} · {expense.paymentMethod}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="font-bold">Rs.{expense.amount.toLocaleString('en-IN')}</span>
      <button onClick={() => onEdit(expense)} className="text-blue-500 text-sm">Edit</button>
      <button onClick={() => onDelete(expense._id)} className="text-red-400 text-sm">Delete</button>
    </div>
  </div>
);

export default ExpenseCard;
