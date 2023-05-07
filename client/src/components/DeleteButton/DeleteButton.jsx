import axios from 'axios'

export default function DeleteButton (id) {

    const handleDelete = () => {
		console.log('DeleteButton:' + id, typeof id)
		axios
			.delete(`http://127.0.0.1:2121/tasks/${id}`)
			.then((response) => {
				console.log(response)
				console.log(response.data)
			})
			.catch( err => {
				console.error(err)
			})
	}

    return (
        <button onClick={handleDelete}>Delete</button>
    )

}