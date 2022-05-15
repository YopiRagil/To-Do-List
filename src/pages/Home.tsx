/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TypeOfCard from "../components/TypeOfCard";
import { getInitialList } from "../store/storeAction/toDo";

const Home = () => {
	const dispatch: any = useDispatch();

	const store = useSelector((state: IState) => state.store);

	useEffect(() => {
		if(store.isReset){
			dispatch(getInitialList());
		}
	}, []);

	const notDoneList = store.toDos.data.filter((item) => item.status === 0)
	const doneList = store.toDos.data.filter((item) => item.status === 1).reverse();

	return (
		<div className="relative py-2">
			<p className="font-bold text-xl text-primary">To Do Application</p>
			<div className=" sticky top-0 grid md:grid-cols-4 lg:grid-cols-6 py-2 gap-2">
				<TypeOfCard dataList={notDoneList} title="To Do" color="primary" />
				<TypeOfCard dataList={doneList} title="Done" color="blue-400" />
			</div>
		</div>
	);
};

export default Home;

