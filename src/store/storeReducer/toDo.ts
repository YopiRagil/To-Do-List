const intialState: IToDos = {
	toDos: {
		data: [],
		loading: false,
	},
	isReset: true,
};

const ToDoStoreReducer = (
	state: IToDos = intialState,
	action: TAction,
): IToDos => {
	switch (action.type) {
		case "LOADING_INITIAL":
			return {
				...state,
				toDos: { ...state.toDos, loading: true },
			};

		case "INITIAL_DATA":
			return {
				...state,
				toDos: { ...state.toDos, data: action.payload, loading: false },
				isReset: false,
			};

		case "ADD_TO_DO":
			return {
				...state,
				toDos: { ...state.toDos, data: [...state.toDos.data, action.payload] },
			};

		case "SET_TO_DO":
			return {
				...state,
				toDos: { ...state.toDos, data: action.payload},
			};

		default:
			return state;
	}
};

export default ToDoStoreReducer;
