// Returns combined string (removing undefined) used for setting className
const createClassName = (...args) =>
	Array.from(
		new Set(
			args
				.filter(x => x && typeof x === "string")
				.map(x => x.split(" "))
				.flat()
		)
	).join(" ");

export default { createClassName };
export { createClassName };
