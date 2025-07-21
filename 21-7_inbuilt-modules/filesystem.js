// const { unlink } = require('node:fs/promises');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('./something.txt');

// const { unlink } = require('node:fs');

// unlink('./something.txt', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });


// import { readFile } from 'node:fs';

// const { readFile} = require('node:fs');

// readFile('./something.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// =============================================================


// const fs = require('node:fs');
// console.log("THIS IS START");

// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// console.log("END");



////////////////////////////

// READ FILE WITH SYNCHRONOUS 

// const fs = require('node:fs');
// console.log("HELLO");

// try {
//   const data = fs.readFileSync('./something.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// console.log("END");



////////////////////////////

// const fs = require('node:fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('./something.txt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// example();


//////////////////////////////////////////////////////////

// import fs from 'fs';
// import { pipeline } from 'node:stream/promises';
// import path from 'path';

// const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
// const outputFilePath = path.join(process.cwd(), 'moby.md');

// async function downloadFile(url, outputPath) {
//   const response = await fetch(url);

//   if (!response.ok || !response.body) {
//     throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
//   }

//   const fileStream = fs.createWriteStream(outputPath);
//   console.log(`Downloading file from ${url} to ${outputPath}`);

//   await pipeline(response.body, fileStream);
//   console.log('File downloaded successfully');
// }

// async function readFile(filePath) {
//   const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

//   try {
//     for await (const chunk of readStream) {
//       console.log('--- File chunk start ---');
//       console.log(chunk);
//       console.log('--- File chunk end ---');
//     }
//     console.log('Finished reading the file.');
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//   }
// }

// try {
//   await downloadFile(fileUrl, outputFilePath);
//   await readFile(outputFilePath);
// } catch (error) {
//   console.error(`Error: ${error.message}`);
// }

/////////////////////////////////////////////////////////////

// WRITE IN FS NODE 

// const fs = require('node:fs');

// const content = 'Some content!';

// fs.writeFile('./something2.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });



///////////////////////////////////////

// APPEND IN FS 

const fs = require('node:fs');

const content = 'Some content MORE ADDED!';

fs.appendFile('./something2.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});