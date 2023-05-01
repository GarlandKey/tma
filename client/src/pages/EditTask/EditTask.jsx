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
				<label htmlFor="title">Title</label>
				<input form="task" id="title" name="title" required={true} onChange={handleChange} value={task.title} />
				
				<label htmlFor="description">Description</label>
				<textarea form="task" id="description" name="description" required={true} onChange={handleChange} value={task.description} />

				<label htmlFor="status">Status</label>
				<select form="task" id="status" name="status" required={true} onChange={handleChange} value={task.status}>
					<option value="pending">pending</option>
					<option value="in progress">in progress</option>
					<option value="completed">completed</option>
				</select>
				<label htmlFor="save">Save</label>
				<Link to='/'><button type="submit" id="save">💾</button></Link>
				<Link to='edit'><button id={task.id} onClick={handleDelete}>🗑️</button></Link>
			</form>
		</>
	)
}