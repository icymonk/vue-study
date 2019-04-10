// function makeRangeIter(start, end, step) {
//   let i = 0;
//   return {
//     next: function() {
//       return { done: i > 10, value: i++ };
//     },
//     [Symbol.iterator]: makeRangeIter
//   };
// }
// const range = makeRangeIter();

const iter = {
  i: 0,
  next: function() {
    return { done: this.i > 10, value: this.i++ };
  },
  [Symbol.iterator]: function() {
    return this;
  }
};

for (const value of iter) {
  console.log(value);
}
