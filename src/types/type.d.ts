type ButtonType = {
	onClick: () => void;
	label: string;
	type?: "gray" | "red" | "primary" | "blue";
	className?: string;
	disabled?: boolean;
	color?: string
};

type InputType = {
	onChange: (e:any) => void;
	name: string
	className?: string
	value?: any
	placeholder?: string
};