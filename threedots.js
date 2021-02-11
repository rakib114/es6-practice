const ages = [12, 14, 16, 18, 15];
const ages2 = [21, 23, 25, 27, 29];
const ages3 = [31, 35, 38, 39, 32];
const allAges = ages.concat(ages2).concat([7]).concat(ages3);
// console.log(allAges);
//After Came ES6>>
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 570;
const police = 530;
const sochib = 870;
const maximum = Math.max(business, police, sochib);
console.log(maximum);
//After Came ES6 >>
const blance = [570, 530, 870];
const max = Math.max(...blance);
console.log(max);
