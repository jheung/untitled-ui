import { createClassName } from "./class-name";

describe("createClassName", () => {
	test("if no arguments are passed into function", () => {
		expect(createClassName()).toBe("");
	});

	test("if multiple arguments are passed into function", () => {
		expect(createClassName("a", "b", "c")).toBe("a b c");
	});

	test("if multiple arguments with duplicates are passed into function", () => {
		expect(createClassName("a", "b", "b")).toBe("a b");
	});

	test("if multiple arguments with undefined and empty are passed into function", () => {
		expect(createClassName("a", "b", "", undefined, null)).toBe("a b");
	});

	test("if multiple arguments with boolean are passed into function", () => {
		expect(createClassName("a", "b", true, false)).toBe("a b");
	});

	test("if multiple arguments with number are passed into function", () => {
		expect(createClassName("a", "b", 1)).toBe("a b");
	});
});
