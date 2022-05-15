/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { addToDoList } from "../store/storeAction/toDo";

const AddToDo = (props: any) => {
	const { isAdd } = props;
	const dispatch: any = useDispatch();
	const [isAddOn, setIsAddOn] = useState(false);
	const [form, setForm] = useState<AddToDoType>({ title: "", description: "" });

	const handleChangeEdit = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleAdd = () => {
		dispatch(addToDoList(form));
		setForm({ title: "", description: "" });
		setIsAddOn(false);
	};

	if (isAdd) {
		return (
			<div>
				{isAddOn ? (
					<div className="border bg-gray-100 rounded p-2 mt-2 flex flex-col gap-y-2">
						<Input
							value={form.title}
							onChange={handleChangeEdit}
							name="title"
							placeholder="Title"
						/>
						<TextArea
							value={form.description}
							onChange={handleChangeEdit}
							name="description"
							placeholder="Description"
						/>
						<div className="flex justify-end gap-x-2 mt-2">
							<Button
								label="Cancel"
								type="red"
								onClick={() => setIsAddOn(false)}
							/>
							<Button
								disabled={!form.title}
								type="primary"
								label="Add"
								onClick={handleAdd}
							/>
						</div>
					</div>
				) : (
					<div className="flex justify-end">
						<Button label="+ Add New To Do" onClick={() => setIsAddOn(true)} />
					</div>
				)}
			</div>
		);
	} else {
		return null;
	}
};

export default AddToDo;