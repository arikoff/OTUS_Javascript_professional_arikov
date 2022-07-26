export function promiseReduce(asyncFunctions, reduce, initialValue) {
  let memo = initialValue;
  let isResolved = [];
  asyncFunctions.forEach((func) => {
    isResolved.push(
      func().then((result) => {
        memo = reduce(memo, result);
      })
    );
  });
 
  return Promise.all(isResolved).then((result) => memo);
}


