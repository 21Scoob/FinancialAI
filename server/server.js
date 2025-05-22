import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import budgetRoutes from "./routes/budgetRoutes.js";

dotenv.config();
connectDB(); // <--- conectare DB

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

app.use("/api/budget", budgetRoutes);

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
