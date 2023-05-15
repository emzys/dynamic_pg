const tri = (n) => {
  if (n === 1) return 1;
  return n + tri(n - 1);
};

// console.log(tri(9));
// console.log(tri(10));
// console.log(tri(11));
// console.log(tri(12));
// console.log(tri(13));
// console.log(tri(14));

// const tri_lin = (n) => {
//   return (n * (n + 1)) /2;
// };
