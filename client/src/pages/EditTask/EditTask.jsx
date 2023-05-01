import './EditTask.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:2121/tasks'


export default function EditTask(id) {

	const [task, setTask] = useState({})

	useEffect(() => {
		axios.get(`${BASE_URL}/${id}`)
		.then((res) => {
			setTask(res.data)
			handleChange()
		})
	}, [])

	const handleChange = event => {
		setTask({
			...task,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		
		axios
		.put(`${BASE_URL}/${task.id}`, task )
		.then((res) => {
			console.log(res)
			console.log(res.data)
		})
	}

	const handleDelete = event => {
		event.preventDefault()

		axios
			.delete(`http://127.0.0.1:2121/tasks/${task.id}`)
			.then((response) => {
				console.log(response)
				console.log(response.data)
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
					<div className="button-list">
						<button id={task.id} onClick={handleDelete}>Delete</button>
						<button type="submit" id="save">Save</button>
					</div>
				</section>
			</form>
		</>
	)
}