// server/controllers/budgetController.js
import { Budget } from "../models/BudgetModel.js";

// GET: toate intrările
export const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find().sort({ date: -1 });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching budgets" });
  }
};

// POST: adaugă o intrare nouă
export const createBudget = async (req, res) => {
  try {
    const { category, amount, note } = req.body;
    const newBudget = new Budget({ category, amount, note });
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(400).json({ message: "Error saving budget entry" });
  }
};
