import { maxItemAssociation } from "./maxItemAssotiation.js";
import { test, expect } from "vitest";

let shoppingList1 = [
    ["e", "d"],
    ["d", "c"],
    ["c", "b"],
    ["b", "a"],
  ];

let expectedResult1 = ["a", "b", "c", "d"];

let shoppingList2 = [
  ["e", "d"],
  ["e", "b", "f"],
  ["a", "n"],
  ["e", "c"],
  ["a", "q"],
];

let expectedResult2 = ["b", "c", "d", "e", "f"];

let shoppingList3 = [
  ["q", "w", "a"],
  ["a", "b"],
  ["a", "c"],
  ["q", "e"],
  ["q", "r"],
];

let expectedResult3 = ["a", "b", "c", "e", "q", "r", "w"];

test("тест1", () =>
  expect(maxItemAssociation(shoppingList1)).toEqual(expectedResult1));
test("тест2", () =>
  expect(maxItemAssociation(shoppingList2)).toEqual(expectedResult2));
test("тест3", () =>
  expect(maxItemAssociation(shoppingList3)).toEqual(expectedResult3));
