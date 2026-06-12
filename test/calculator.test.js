import assert from "node:assert/strict";
import test from "node:test";

import { add, divide, multiply, subtract } from "../src/calculator.js";

test("add returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(7, 4), 3);
});

test("multiply returns the product of two numbers", () => {
  assert.equal(multiply(6, 5), 30);
});

test("divide returns the quotient of two numbers", () => {
  assert.equal(divide(10, 2), 5);
});

test("divide throws when dividing by zero", () => {
  assert.throws(() => divide(10, 0), /Cannot divide by zero/);
});
