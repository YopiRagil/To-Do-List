/* eslint-disable react-hooks/exhaustive-deps */
import AddToDo from "./AddToDo";
import Card from "./Card";


const TypeOfCard = (props: any) => {
	const { dataList, title, color } = props;
	return (
		<div className="relative col-span-2 border rounded border-gray-300 bg-gray-300 max-h-[90vh] overflow-y-auto">
			<p
				className={`sticky top-0 text-white bg-${color} p-2 rounded font-bold`}
			>
				{title}
			</p>
			<div className="p-2 flex flex-col gap-y-2">
				{dataList?.map((el: IToDoType, index: number) => (
					<Card key={index} {...el} />
				))}
				<AddToDo isAdd={title === "To Do"} />
			</div>
		</div>
	);
};

export default TypeOfCard;
