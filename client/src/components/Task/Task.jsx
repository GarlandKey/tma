import './Task.css'
import { Link } from 'react-router-dom';

export default function Task({ id, title, description, status }) {
	
	return (
		<>
			<section className="task">
				<section className="task-col-left">
					<section className="task-title">
						<h2>{title}</h2>
					</section>
				
					<section className="task-description">
						<p>id: {id} | {description}</p>
					</section>
				</section>

				<section className="task-col-right">
					<small>Status: {status}</small>
	
					<section className="task-btns">
						<Link to="edit" state={{ "_id": id, "title": title, "description": description, "status": status }}><button>Edit</button></Link>
					</section>
				</section>
			</section>
		</>
	)
}