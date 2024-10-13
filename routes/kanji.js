import express from "express";
import path from "path";
import fs from "fs";
const router = express.Router();

// Read JSON data files using fs
const kanjiDataPath = path.join(process.cwd(), "kanji_data/ALL_KANJI.json");
const kanjiCompPath = path.join(process.cwd(), "kanji_data/composition.json");

const kanji_data = JSON.parse(fs.readFileSync(kanjiDataPath, "utf8"));
const kanji_comp = JSON.parse(fs.readFileSync(kanjiCompPath, "utf8"));

// Kanji route
router.get("/:kanji", (req, res) => {
  const kanji = req.params.kanji;

  const data = kanji_data[kanji];
  const composition = kanji_comp[kanji];

  let kanjiData = { ...data, ...composition };
  if (!data && !composition) {
    kanjiData = null;
  }

  if (kanjiData) {
    res.send(kanjiData);
  } else {
    res.status(404).send("Not found!");
  }
});

export default router;
