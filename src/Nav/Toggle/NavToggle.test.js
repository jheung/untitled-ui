import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NavToggle } from ".";

describe("NavToggle component", () => {
	afterEach(() => cleanup());

	describe("- default (no children)", () => {
		test("renders correctly and updates aria-expanded when clicked on", async () => {
			const { getByTestId, asFragment } = render(<NavToggle />);

			expect(asFragment()).toMatchSnapshot();

			const navToggleButton = getByTestId("nav-toggle--default");
			await fireEvent.click(navToggleButton);

			expect(navToggleButton).toHaveAttribute("aria-expanded", "true");
		});

		test("with defaultStyling = true adds css module class names", async () => {
			const { asFragment } = render(<NavToggle defaultStyling={true} />);

			expect(asFragment()).toMatchSnapshot();
		});

		test("with custom callback for onToggleBefore and onToggleAfter", async () => {
			const mockToggleBeforeFN = jest.fn();
			const mockToggleAfterFN = jest.fn();

			const { getByTestId } = render(
				<NavToggle onToggleBefore={mockToggleBeforeFN} onToggleAfter={mockToggleAfterFN} />
			);
			const navToggleButton = getByTestId("nav-toggle--default");
			await fireEvent.click(navToggleButton);

			// Returns correct state
			expect(mockToggleBeforeFN).toHaveBeenCalledTimes(1);
			expect(mockToggleBeforeFN).toHaveBeenCalledWith(true);
			expect(mockToggleAfterFN).toHaveBeenCalledTimes(1);
			expect(mockToggleAfterFN).toHaveBeenCalledWith(true);

			await fireEvent.click(navToggleButton);

			expect(mockToggleBeforeFN).toHaveBeenCalledTimes(2);
			expect(mockToggleBeforeFN).toHaveBeenCalledWith(false);
			expect(mockToggleAfterFN).toHaveBeenCalledTimes(2);
			expect(mockToggleAfterFN).toHaveBeenCalledWith(false);
		});
	});

	describe("- with children", () => {
		test("renders correctly with one child element", async () => {
			const { asFragment } = render(
				<NavToggle>
					<span>Icon</span>
				</NavToggle>
			);

			expect(asFragment()).toMatchSnapshot();
		});

		test("renders correctly with one child component with isOpened props", async () => {
			const MockComponent = ({ isOpened }) => <div>{isOpened.toString()}</div>;
			const { asFragment, getByTestId } = render(
				<NavToggle>
					<MockComponent />
				</NavToggle>
			);

			expect(asFragment()).toMatchSnapshot();

			const navToggleButton = getByTestId("nav-toggle");
			await fireEvent.click(navToggleButton);

			expect(navToggleButton).toHaveTextContent(true);
		});

		test("renders correctly with multiple children elements", async () => {
			const { asFragment } = render(
				<NavToggle>
					<span>Icon</span>
					<span>Icon</span>
					<span>Icon</span>
				</NavToggle>
			);

			expect(asFragment()).toMatchSnapshot();
		});
	});
});
