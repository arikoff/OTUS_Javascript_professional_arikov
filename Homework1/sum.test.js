import { sum } from "./sum.js";
import { test, expect } from "vitest";

test("тест1", () => expect(sum()).toBe(0));
test("тест2", () => expect(sum(1)(2)(3)()).toBe(6));
test("тест3", () => expect(sum(-1)(2)(3)()).toBe(4));
