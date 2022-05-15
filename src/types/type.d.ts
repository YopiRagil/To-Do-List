type TableHistoryType = {
	combineHistory: TypeHistory[];
};

type ButtonType = {
	onClick: () => void;
	label: string;
	type?: "gray" | "red" | "primary" | "blue";
	className?: string;
	disabled?: boolean;
	color?: string
};
