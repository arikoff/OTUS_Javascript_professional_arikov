function sum(x) {
  if (x === undefined) {
    return 0;
  }

  let s = x;

  function f(b) {
    if (b === undefined) {
      return s;
    }
    s += b;
    return f;
  }
  return f;
}
