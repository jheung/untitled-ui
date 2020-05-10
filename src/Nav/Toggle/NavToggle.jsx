import * as React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createClassName, cloneChildrenWithProps } from "../../utils";
import defaultStyles from "./NavToggle.scss";

const NavToggle = ({
	children,
	aria: { controls: ariaControls, label: ariaLabel },
	defaultStyling,
	className,
	onToggleBefore,
	onToggleAfter
}) => {
	const isInitialized = useRef(false);
	const [isOpened, setIsOpened] = useState(false);

	const ariaLabels = {
		"aria-expanded": isOpened,
		"aria-controls": ariaControls,
		"aria-label": ariaLabel
	};

	const handleClick = event => {
		event.preventDefault();
		if (onToggleBefore) {
			onToggleBefore(!isOpened);
		}
		setIsOpened(!isOpened);
	};

	useEffect(() => {
		if (isInitialized.current && onToggleAfter) {
			onToggleAfter(isOpened);
		}
		isInitialized.current = true;
	}, [isOpened]);

	let styles = {};
	if (defaultStyling) {
		styles = defaultStyles;
	}

	// Render Component
	if (children) {
		return (
			<button
				className={createClassName("nav__toggle", styles.toggle, className.toggle)}
				{...ariaLabels}
				type="button"
				onClick={handleClick}
				data-testid="nav-toggle">
				{cloneChildrenWithProps(children, { isOpened })}
			</button>
		);
	}

	return (
		<DefaultToggle
			styles={styles}
			className={className}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...ariaLabels}
			onClick={handleClick}
		/>
	);
};

NavToggle.propTypes = {
	/**
	 * If none, it will default to the default toggle button with 3 toggle icons
	 */
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	/**
	 * aria.controls = id of menu element
	 *
	 * aria.label = screen reader label
	 */
	aria: PropTypes.shape({
		controls: PropTypes.string,
		label: PropTypes.string
	}),
	/**
	 * If using the default toggle button, if set to true, it will include the default styling
	 */
	defaultStyling: PropTypes.bool,
	/**
	 * className.toggle = main wrapper for button
	 *
	 * **If using default toggle button**
	 *
	 * toggleIcon = common class for the three spans inside of button
	 *
	 * toggleIconTop / toggleIconMiddle / toggleIconBottom = styling for each of the three spans
	 */
	className: PropTypes.shape({
		toggle: PropTypes.string,
		toggleIcon: PropTypes.string,
		toggleIconTop: PropTypes.string,
		toggleIconMiddle: PropTypes.string,
		toggleIconBottom: PropTypes.string
	}),
	/**
	 * Callback function which returns the new state of menu (true = opened / false = closed)
	 */
	onToggleBefore: PropTypes.func,
	/**
	 * Callback function which returns the new state of menu (true = opened / false = closed)
	 */
	onToggleAfter: PropTypes.func
};

NavToggle.defaultProps = {
	children: null,
	aria: {
		controls: "navMenu",
		label: "Toggle navigation"
	},
	defaultStyling: false,
	className: {
		toggle: "nav__toggle",
		toggleIcon: "nav__toggle-icon",
		toggleIconTop: "nav__toggle-icon--top",
		toggleIconMiddle: "nav__toggle-icon--middle",
		toggleIconBottom: "nav__toggle-icon--bottom"
	},
	onToggleBefore: null,
	onToggleAfter: null
};

const DefaultToggle = ({ styles, className, onClick, ...ariaLabels }) => (
	<button
		className={createClassName("nav__toggle", styles.toggle, className.toggle)}
		{...ariaLabels}
		type="button"
		onClick={onClick}
		data-testid="nav-toggle--default">
		<span
			className={createClassName(
				"nav__toggle-icon nav__toggle-icon--top",
				styles.toggleIcon,
				styles.toggleIconTop,
				className.toggleIcon,
				className.toggleIconTop
			)}
		/>
		<span
			className={createClassName(
				"nav__toggle-icon nav__toggle-icon--middle",
				styles.toggleIcon,
				styles.toggleIconMiddle,
				className.toggleIcon,
				className.toggleIconMiddle
			)}
		/>
		<span
			className={createClassName(
				"nav__toggle-icon nav__toggle-icon--bottom",
				styles.toggleIcon,
				styles.toggleIconBottom,
				className.toggleIcon,
				className.toggleIconBottom
			)}
		/>
	</button>
);

export default NavToggle;
export { NavToggle };
