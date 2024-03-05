const puppeteer = require('puppeteer');
const path = require('path');

// Ruta local al directorio donde está el informe Allure
const allureReportURL = 'http://192.168.1.12:55030/index.html';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(allureReportURL, { waitUntil: 'networkidle2' });

  // Obtén el contenido HTML de la página
  const htmlContent = await page.content();

  // Guarda el HTML en un archivo (por ejemplo, 'output.html')
  const fs = require('fs');
  fs.writeFileSync('output.html', htmlContent);

  await browser.close();
})();
