import React from "react";

// Clone children with props only if child is a React Element (function), otherwise, return child
// If it is not a function, the element would not have access to the props anyways.
const cloneChildrenWithProps = (children, props) =>
	React.Children.map(children, child =>
		typeof child.type === "function" ? React.cloneElement(child, props) : child
	);

export default { cloneChildrenWithProps };
export { cloneChildrenWithProps };
