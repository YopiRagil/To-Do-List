type TableHistoryType = {
	combineHistory: TypeHistory[];
};

type ButtonType = {
	onClick: () => void;
	label: string;
	type?: "positive" | "negative";
	className?: string;
	disabled?: boolean;
	color?: string
};
