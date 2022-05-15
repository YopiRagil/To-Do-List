export const TextArea = (props: any) => {
	const { onChange, name, className, value, placeholder } = props;
	return (
		<textarea
			onChange={onChange}
			name={name}
			placeholder={placeholder}
			value={value}
			className={`w-full appearance-none focus:outline-none focus:ring-none ${className} p-1 bg-none border-b-2`}
		/>
	);
};
