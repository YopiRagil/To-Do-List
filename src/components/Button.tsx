export const Button = (props: ButtonType) => {
	const { onClick, label, type = "positive", className, disabled, color="primary" } = props;
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${className} text-sm text-white px-2 py-1 rounded shadow font-semibold border ${
				type === "negative"
					? "border-red-500  bg-red-700"
					: ` border-${color} bg-${color}`
			}`}
		>
			{label}
		</button>
	);
};
