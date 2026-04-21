// 185. Fence Post I
//  22
// Print the following pattern n times in a single line. |==

// Example 1:
// Input: n = 2
// Print Output: |==|==
// Example 2:
// Input: n = 3
// Print Output: |==|==|==
// Constraints
// 1 ≤ n ≤ 100

// const n = 3;
// const fence_post_i = (n) => {
//   const str = "|==";
//   let sum = "";

//   for (let i = 0; i < n; i++) {
//     sum = sum + str;
//   }
//   return sum;
// };

// console.log(fence_post_i(n));

//-----------------------------

// const n = 3;
// const fence_post_i = (n) => {
//   const str = "|==";

//   console.log(str.repeat(n));
// };

// fence_post_i(n);

//======================================
// 186. Fence Post II
//  20
// Our job is to build a fence that has n fences but n + 1 post. Print the following pattern: |==|==| ... |==|

// Example 1:
// Input: n = 2
// Print Output: |==|==|
// Example 2:
// Input: n = 3
// Print Output: |==|==|==|
// Constraints
// 1 ≤ n ≤ 100

// const n = 3;
// const fence_post_ii = (n) => {
//   const str = "|==";
//   let sum = "";
//   for (let i = 0; i < n; i++) {
//     sum = sum + str;
//   }
//   console.log(sum + "|");
// };

// fence_post_ii(n);

//===========================================
// 178. Draw Stars I
//  00
// Print out "*****" using only one "*". This means you cannot simply type print("*****").

const stars_i = () => {
  const str = "*";
  console.log(str.repeat(5));
};

stars_i();
