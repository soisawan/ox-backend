import express from "express";
import indexRoute from "./index.routes.js";
import cors from 'cors'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: '*'
  }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRoute);
app.get("/api", (req,res) => {
  res.send("Success")
})

app.listen(port, () => {
  console.log(`Server Running At ${port}`);
});
