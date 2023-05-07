/***
 * Where I left off: State is properly passed from
 * TaskList when the edit button is clicked. Typing 
 * new content updates the state of task. Save button
 * is not successfully passing data to the api. I've
 * checked everything on the front end and it seems
 * to be a backend issue. Need to check backend router
 * and controller.
 ***/

import './EditTask.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../../components/DeleteButton/DeleteButton'

// const BASE_URL = 'http://127.0.0.1:2121/tasks'

export default function EditTask() {

	const navigateTo = useNavigate()
	const location = useLocation()
	const id = location.state._id
	console.log(id, typeof id)

	const [task, setTask] = useState({
		"title": location.state.title,
		"description": location.state.description,
		"status": location.state.status		
	})

	const handleChange = event => {
		setTask({
			...task,
			[event.target.name]: event.target.value,
		})
		console.log(`${event.target.name}: ${event.target.value}`)
	}

	const putTask = task => {
		axios
		.put(`http://127.0.0.1:2121/tasks/${id}`, task )
		.then((res) => {
			console.log(res.data)
		})
		.catch( err => {
			console.error(err)
		})
	}


	const handleSubmit = () => {
		putTask(task)
		navigateTo('/')
	}

	return (
		<>
			<h1 className="edit-task-top">Edit Task</h1>
			<form className="edit-task-form" id="task" onSubmit={handleSubmit}>
				<section className="title">
					<label htmlFor="title">Title</label>
					<input form="task" id="title" maxLength="80" name="title" required={true} onChange={handleChange} value={task.title} />
				</section>
				<textarea form="task" cols="50" id="description" maxLength="250" name="description" required={true} rows="5" onChange={handleChange} value={task.description} />
				<section className="bottom-row">
					<div>
						<label htmlFor="status">Status</label>
						<select form="task" id="status" name="status" required={true} onChange={handleChange} value={task.status}>
							<option value="pending">pending</option>
							<option value="in progress">in progress</option>
							<option value="completed">completed</option>
						</select>
					</div>
					<div className="button-list">
						<DeleteButton id={location.state._id} />
						<button type="submit" id="save">Save</button>
					</div>
				</section>
			</form>
		</>
	)
}