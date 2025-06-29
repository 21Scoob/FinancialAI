import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
dotenv.config();
const app = express();
connectDB(); // <--- conectare DB

const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/budget", budgetRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
