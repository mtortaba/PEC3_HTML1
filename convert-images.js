const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/images'; // Carpeta d'entrada
const outputDir = './src/images'; // Carpeta de sortida


if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


fs.readdirSync(inputDir).forEach((file) => {
  const inputFile = path.join(inputDir, file);
  const fileName = path.parse(file).name;

  // Verifiquem si l'arxiu es imatge
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    // Convertim a webp
    sharp(inputFile)
      .webp({ quality: 80 })
      .toFile(`${outputDir}/${fileName}.webp`)
      .then(() => console.log(`Converted ${file} to WebP`));

    // Convertim a avif
    sharp(inputFile)
      .avif({ quality: 50 })
      .toFile(`${outputDir}/${fileName}.avif`)
      .then(() => console.log(`Converted ${file} to AVIF`));
  }
});
