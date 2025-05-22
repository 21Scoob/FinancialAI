// server/models/BudgetModel.js
import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ["Income", "Expense", "Savings", "Investment"],
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
  },
});

export const Budget = mongoose.model("Budget", budgetSchema);
