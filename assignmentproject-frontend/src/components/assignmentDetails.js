import { useAssignmentsContext } from "../hooks/useAssignmentsContext"


const AssignmentDetails = ({ assignment }) => {
    // Accessing the assignments context and dispatch function
    const { dispatch } = useAssignmentsContext()
    const handleClick = async () => {
        // Sending a DELETE request to delete the assignment by ID
        const response = await fetch('/api/assignments/' + assignment._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_ASSIGNMENTS', payload: json })
        }
    }

    return (
        <div className="assignment-details">
            <h4>{assignment.title}</h4>
            <p><strong>Due Date: </strong>{assignment.dueDate}</p>
            <p><strong>Module Name: </strong>{assignment.whichModule}</p>
            <p><strong>Assignment ID: </strong>{assignment._id}</p>
            <p>{assignment.createdAt}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )

}

export default AssignmentDetails