import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import appRoute from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());
app.use("/ebay", appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Hi suraj");
  //console.log(products);
});
