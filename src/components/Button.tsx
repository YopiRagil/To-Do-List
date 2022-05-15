export const Button = (props: ButtonType) => {
	const { onClick, label, type = "primary", className, disabled} = props;
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${className} text-sm text-white px-2 py-1 rounded shadow font-semibold border ${
				type === "red"
					? "border-red-700  bg-red-700"
					: type === "gray"
					? "border-gray-500  bg-gray-500"
					: type === "blue"
					? "border-blue-400  bg-blue-400"
					: " border-primary bg-primary"
			}`}
		>
			{label}
		</button>
	);
};
