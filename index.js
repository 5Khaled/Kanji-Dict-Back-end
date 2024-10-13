import express from "express";
import kanjiRoutes from "./routes/kanji.js";
import svgRoutes from "./routes/svg.js";

import cors from "cors";

const app = express();

app.use(cors());

// Routes
app.use("/kanji", kanjiRoutes);
app.use("/svg", svgRoutes);

app.get("/", (req, res) => {
  res.send("Main");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on: http://localhost:${port}`);
});
