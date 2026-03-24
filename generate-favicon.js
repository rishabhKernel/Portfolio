const sharp = require('sharp');
const fs = require('fs');
const toIco = require('to-ico');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'logo.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function run() {
  try {
    console.log('Generating high-res PNG variants...');
    await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(__dirname, 'public', 'logo512.png'));
    await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(__dirname, 'public', 'logo192.png'));
    
    console.log('Compiling 32x32 and 16x16 variants into standard favicon.ico...');
    const buf32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
    const buf16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
    
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon-32x32.png'), buf32);
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon-16x16.png'), buf16);
    
    const icoBuf = await toIco([buf16, buf32]);
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoBuf);
    
    console.log('Favicons generated successfully!');
  } catch (err) {
    console.error('Failed to parse or create favicons!', err);
    process.exit(1);
  }
}

run();
