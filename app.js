const express = require("express");
const generatePdf = require("./service/generatePdf.service");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/invoice", generatePdf);

app.listen(PORT, () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Server is UP and Running on port ${PORT}`);
});
