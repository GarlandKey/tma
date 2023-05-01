import './Task.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:2121/tasks'

export default function Task({ id, title, description, status }) {

	const handleDelete = event => {
		event.preventDefault()

		axios
			.delete(`${BASE_URL}/${id}`)
			.then((response) => {
				console.log(response)
				console.log(response.data)
				console.log('sucessfully deleted!')
			})
	}

	return (
		<>
			<section className="task">
				<section className="task-col-left">
					<section className="task-title">
						<h2>{title}</h2>
					</section>
				
					<section className="task-description">
						<p>{description}</p>
					</section>
				</section>

				<section className="task-col-right">
					<small>Status: {status}</small>
	
					<section className="task-btns">
						<Link to='edit'><button id={id}>Edit</button></Link>
					</section>
				</section>
			</section>
		</>
	)
}