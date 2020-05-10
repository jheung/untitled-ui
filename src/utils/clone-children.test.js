import React from "react";
import { cloneChildrenWithProps } from "./clone-children";

describe("cloneChildrenWithProps", () => {
	test("clones React components with props", () => {
		const MockComponent = ({ passedProps }) => <div>{passedProps}</div>;

		expect(cloneChildrenWithProps(<MockComponent />, { passedProps: "Cloned" }))
			.toMatchInlineSnapshot(`
		Array [
		  <MockComponent
		    passedProps="Cloned"
		  />,
		]
	`);
	});

	test("clones HTML DOM elements without props", () => {
		expect(cloneChildrenWithProps(<div />, { passedProps: "Cloned" })).toMatchInlineSnapshot(`
		Array [
		  <div />,
		]
	`);
	});

	test("clones children when it is just a string without props", () => {
		expect(cloneChildrenWithProps("Random string", { passedProps: "Cloned" }))
			.toMatchInlineSnapshot(`
		Array [
		  "Random string",
		]
	`);
	});

	test("clones array of children (React + DOM elements) with and without props", () => {
		const MockComponent = ({ passedProps }) => <div>{passedProps}</div>;

		expect(
			cloneChildrenWithProps([<MockComponent />, <div />], {
				passedProps: "Cloned"
			})
		).toMatchInlineSnapshot(`
		Array [
		  <MockComponent
		    passedProps="Cloned"
		  />,
		  <div />,
		]
	`);
	});
});
