import puppeteer from "puppeteer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs-extra";
import data from "./dummyData.js";
import write from "../writeConsole.js";

function generatePdf(req, res) {
  const compile = async function (templateName, data) {
    const filePath = path.join(
      process.cwd(),
      "service",
      "invoiceTemplate",
      `${templateName}.hbs`
    );

    // generate HTML
    const html = await fs.readFile(filePath, "utf-8");

    return handlebars.compile(html)(data);
  };

  (async function () {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // PDF content
      const content = await compile("index", data);

      await page.setContent(content, { waitUntil: "networkidle2" });

      // create PDF
      await page.pdf({
        path: "invoice.pdf",
        // format: "A4",
        width: "302.36220472441 px",
        printBackground: true,
      });

      write("SUCCESS --> Pdf generated");
      // shutdown the puppeteer browser
      await browser.close();

      res.sendFile(path.join(process.cwd(), "invoice.pdf"));
      // res.writeHead(200, { "Content-Type": "text/html" });
      // res.end();
    } catch (err) {
      res.json({
        "response-type": "error",
        error: `Error: Something went wrong in the Generate PDF module more info available(${
          err ? err : "no"
        })`,
      });
      write(
        `Error: Something went wrong in the Generate PDF module more info available(${
          err ? err : "no"
        })`
      );
    }
  })();
}

export default generatePdf;
