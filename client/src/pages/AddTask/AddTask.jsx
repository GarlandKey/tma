import './AddTask.css'
import { useState } from 'react'
import axios from 'axios'

export default function AddTask() {

	const [task, setTask] = useState({
		"title": "",
		"description": "",
		"status": "pending",
	})

	const handleChange = event => {
		setTask({
			...task,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault();

		axios
			.post('http://127.0.0.1:2121/tasks', task)
			.then( res => {
				console.log(res.data)
			})
			.catch( err => {
				console.log(err)
			})
			setTask({
				"title": "",
				"description": "",
				"status": "pending",
			})
	}
	

	return (
		<>
			<form id="task" onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input form="task" id="title" name="title" required={true} onChange={handleChange} />
				
				<label htmlFor="description">Description</label>
				<textarea form="task" id="description" name="description" required={true} onChange={handleChange} />

				<label htmlFor="status">Status</label>
				<select form="task" id="status" name="status" required={true} onChange={handleChange}>
					<option value="pending">pending</option>
					<option value="in progress">in progress</option>
					<option value="completed">completed</option>
				</select>
				<label htmlFor="save">Save</label>
				<button type="submit" id="save">💾</button>
			</form>
		</>
	)
}