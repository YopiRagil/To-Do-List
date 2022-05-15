export const Input = (props: any) => {
	const { onChange, name, className, value, placeholder } = props;
	return (
		<input
			onChange={onChange}
			name={name}
			placeholder={placeholder}
			value={value}
			className={`w-full focus:outline-none focus:ring-none ${className} p-1 bg-none border-b-2`}
		/>
	);
};
