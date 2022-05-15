import { getInitialListData } from "../network";
import store from "../index";
import moment from "moment";

export const getInitialList = () => {
	return async (dispatch: DispatcType) => {
		dispatch({ type: "LOADING_INITIAL" });
		getInitialListData()
			.then(({ data }) => {
				dispatch({ type: "INITIAL_DATA", payload: data });
			})
			.catch((err: any) => {});
	};
};

export const addToDoList = (data: AddToDoType) => {
	const list = store.getState().store.toDos.data;
	const lastID = list?.[list.length-1]?.id;
	return async (dispatch: DispatcType) => {
		dispatch({
			type: "ADD_TO_DO",
			payload: {
				...data,
				createdAt: moment().format("YYYY-MM-DD HH:mm"),
				status: 0,
				id: lastID + 1,
			},
		});
	};
};

export const deleteToDo = (id: number) => {
	const newlist = store.getState().store.toDos.data.filter((data) => data.id !== id)
	
	return async (dispatch: DispatcType) => {
		dispatch({ type: "SET_TO_DO", payload: newlist });
	};
};

export const editToDo = (dataEdit: IToDoType) => {
	const newList = store.getState().store.toDos.data.reduce((a:IToDoType[], b:IToDoType) => [...a, b.id === dataEdit.id? {...b, ...dataEdit}:b],[])
	return async (dispatch: DispatcType) => {
		dispatch({ type: "SET_TO_DO", payload: newList });
	};
};