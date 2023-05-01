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
			
	}
	

	return (
		<>
			<form id="task" onSubmit={handleSubmit}>
				<section className="title">
					<label htmlFor="title">Title</label>
					<input form="task" id="title" maxLength="80" name="title" required={true} onChange={handleChange} />
				</section>
				<textarea form="task" cols="50" id="description" maxLength="250" name="description" required={true} rows="5" onChange={handleChange} />
				<section className="bottom-row">
					<div>
						<label htmlFor="status">Status</label>
						<select form="task" id="status" name="status" required={true} onChange={handleChange}>
							<option value="pending">pending</option>
							<option value="in progress">in progress</option>
							<option value="completed">completed</option>
						</select>
					</div>
					<button type="submit" id="save">Save</button>
				</section>
			</form>
		</>
	)
}