interface IToDos {
	toDos: typeToDos;
	isReset: boolean;
}

interface IToDoType {
	createdAt: string;
	description: string;
	id: number;
	status: number | boolean;
	title: string
}

type AddToDoType =  {
	description: string;
	title: string;
}

type typeToDos = {
	data: IToDoType[];
	loading: boolean
};

type TAction = {
	type: string;
	payload?: any;
};

type DispatcType = (args: TAction | Function) => TAction;

interface IState {
	store: IToDos;
}

