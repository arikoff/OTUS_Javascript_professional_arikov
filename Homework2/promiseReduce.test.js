import { promiseReduce } from "./promiseReduce.js";
import { test, expect } from "vitest";

var fn1 = () => {
  console.log("fn1");
  return Promise.resolve(1);
};

var fn2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("fn2");
      resolve(2);
    }, 1000);
  });

var fn3 = () => {
  console.log("fn3");
  return Promise.resolve(3);
};

var reduce = function (memo, value) {
  console.log("reduce");
  return memo * value;
};

test("test1", () => {
  return promiseReduce([fn1, fn2, fn3], reduce, 1).then((result) => {
    expect(result).toBe(6);
  });
});

test("test2", () => {
  expect(promiseReduce([fn1, fn2, fn3], reduce, 1)).resolves.toBe(6);
}); 
