/* eslint-disable react-hooks/exhaustive-deps */
import AddToDo from "./AddToDo";
import Card from "./Card";


const TypeOfCard = (props: any) => {
	const { dataList, title } = props;
	return (
		<div className="relative col-span-2 border rounded border-gray-300 bg-gray-300 max-h-[90vh] overflow-y-auto">
			<p
				className={
					title === "Done"
						? `sticky top-0 text-white bg-blue-400 p-2 rounded font-bold`
						: `sticky top-0 text-white bg-primary p-2 rounded font-bold`
				}
			>
				{title}
			</p>
			<div className="p-2 flex flex-col gap-y-2">
				{dataList?.length === 0?
                <p className="text-center font-bold bg-gray-200 p-2 rounded text-gray-600">Data is Empty</p>
                :
                dataList?.map((el: IToDoType, index: number) => (
					<Card key={index} {...el} />
				))}
				<AddToDo isAdd={title === "To Do"} />
			</div>
		</div>
	);
};

export default TypeOfCard;
