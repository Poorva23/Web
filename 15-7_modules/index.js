// setTimeout(()=>{
//     console.log("ST")
// },2000)
// setTimeout(()=>{
//     console.log("ST")
// },2000)
// setTimeout(()=>{
//     console.log("ST")
// },2000)
// setTimeout(()=>{
//     console.log("ST")
// },2000)
// setTimeout(()=>{
//     console.log("ST")
// },2000)
// setTimeout(()=>{
//     console.log("ST")
// },2000)


// const {
//   scryptSync,
// } = require('node:crypto');
// // Using the factory defaults.

// const key1 = scryptSync('password', 'salt', 64);
// console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// // Using a custom N parameter. Must be a power of two.
// const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
// console.log(key2.toString('hex'));  // '3745e48...aa39b34'

//ASYNC - HASHING

const {
  pbkdf2,
} = require('node:crypto');


console.log("ITERATION 1 ke UPAR")

pbkdf2('secret', 'salt', 1200000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 2 ke UPAR")


pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 3 ke UPAR")

pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 4 ke UPAR")


pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 5 ke UPAR")


pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 6 ke UPAR")


pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("ITERATION 7 ke UPAR")


pbkdf2('secret', 'salt', 1800000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});


// pbkdf2('secret', 'salt', 2800000, 64, 'sha512', (err, derivedKey) => {
//   if (err) throw err;
//   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });

// SYNC HASHING

// const {
//   pbkdf2Sync,
// } = require('node:crypto');

// console.log("ITERATION 1 ke UPAR")


// const key = pbkdf2Sync('secret', 'salt', 200000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'

// console.log("ITERATION 2 ke UPAR")


// const key2 = pbkdf2Sync('secret', 'salt', 200000, 64, 'sha512');
// console.log(key2.toString('hex'));  // '3745e48...08d59ae'

// console.log("ITERATION 3 ke UPAR")


// const key3 = pbkdf2Sync('secret', 'salt', 200000, 64, 'sha512');
// console.log(key3.toString('hex'));  // '3745e48...08d59ae'

// console.log("ITERATION 4 ke UPAR")

// const key4 = pbkdf2Sync('secret', 'salt', 200000, 64, 'sha512');
// console.log(key4.toString('hex'));  // '3745e48...08d59ae'