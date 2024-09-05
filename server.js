const express = require("express");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const docxParser = require("docx-parser");
const path = require("path");
// const fs = require("fs");

// const spellChecker = require("spellchecker");
// const GrammarBot = require("grammarbot");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
