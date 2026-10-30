import { access } from 'node:fs/promises';

const requiredFiles = [
  'public/index.html',
  'public/assets/bolos-editados.png',
  'public/assets/favicon.ico',
  'public/assets/docinhos/misto-editado.png',
  'public/assets/docinhos/coco-editado.png',
  'public/assets/docinhos/amendoim-editado.png'
];

for (const file of requiredFiles) {
  await access(new URL(file, import.meta.url));
  console.log(`OK  ${file}`);
}

console.log('\nEstrutura do site verificada com sucesso.');
