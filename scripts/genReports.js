const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = './reports';

function setup() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
}

function deduceHtmlFile(folderPath) {
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    if (file.endsWith('.html')) {
      return path.join(folderPath, file);
    }
  }
}

function deduceFiles() {
  const files = [];

  // Default files
  files.push({ path: './apps/website/.next/analyze/client.html', name: 'website-client-bundle' });
  files.push({ path: './apps/website/.next/analyze/nodejs.html', name: 'website-nodejs-bundle' });
  files.push({ path: deduceHtmlFile("./apps/website/.lighthouseci"), name: 'website-lighthouse-report' });

  return files;
}

async function run() {
  setup();
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH,
  });
  const page = await browser.newPage();

  const files = deduceFiles();
  for (const file of files) {
    console.info(`Generating PDF for ${file.name}`);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`file://${process.cwd()}/${file.path}`, { waitUntil: 'networkidle2' });
    await page.addStyleTag({
      content: `
        .Sidebar__container {
            display: none !important;
        }
    `});
    await page.pdf({ path: path.join(outDir, `${file.name}.pdf`), width: '1920px', height: '1080px' });
  }

  await browser.close();
}

run();