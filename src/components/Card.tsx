/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import {
	deleteToDo,
	editToDo,
} from "../store/storeAction/toDo";

const Card = (props: IToDoType) => {
	const isDone = props.status === 1;
	const dispatch: any = useDispatch();
	const color = !isDone ? "primary" : "blue";
	const [edit, setEdit] = useState(false);
	const [form, setForm] = useState(props);

	const handleChangeEdit = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleCancelSave = () => {
		setForm(props);
		setEdit(false);
	};

	const handleSaveEdit = () => {
		dispatch(editToDo(form));
		setEdit(false);
	};

	const handleDoneNotDone = () => {
		dispatch(editToDo({ ...props, status: isDone ? 0 : 1 }));
	};

	const handleDelete = () => {
		dispatch(deleteToDo(props.id));
	};

	return (
		<div className="p-2 border-2 rounded bg-gray-100">
			{edit ? (
				<Input
					onChange={handleChangeEdit}
					value={form.title}
					name="title"
					className={`font-bold ${isDone? "text-blue-400":"text-primary"}`}
				/>
			) : (
				<p className={`font-bold ${isDone? "text-blue-400":"text-primary"}`}>{props.title}</p>
			)}
			<p className="text-sm text-gray-600">Created At {props.createdAt}</p>
			{edit ? (
				<TextArea
					onChange={handleChangeEdit}
					value={form.description}
					name="description"
					className={"text-sm text-gray-600"}
				/>
			) : (
				<p>{props.description}</p>
			)}
			{edit ? (
				<div className="flex justify-end gap-x-2 mt-2">
					<Button label="Cancel" type="red" onClick={handleCancelSave} />
					<Button
						disabled={!form.title}
						type={color}
						label="Save"
						onClick={handleSaveEdit}
					/>
				</div>
			) : (
				<div className="flex justify-between gap-x-2  mt-2">
					<Button type="red" label="Delete" onClick={handleDelete} />
					<div className="flex justify-end gap-x-2 ">
						<Button type="gray" label="Edit" onClick={() => setEdit(!edit)} />
						<Button
							type={color}
							label={isDone ? "Mark as Not Done" : "Mars as Done"}
							onClick={handleDoneNotDone}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;