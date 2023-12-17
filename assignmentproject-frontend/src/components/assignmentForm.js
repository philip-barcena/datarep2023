import { useState } from "react"
import { useAssignmentsContext } from "../hooks/useAssignmentsContext"


const AssignmentForm = () => {
    const { dispatch } = useAssignmentsContext()
    const [assignmentId, setAssignmentId] = useState('');
    const [title, setTitle] = useState('')
    const [dueDate, setdueDate] = useState('')
    const [whichModule, setModule] = useState('')
    const [error, setError] = useState('null')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const assignment = { title, dueDate, whichModule }

        if (assignmentId) {
            // Updating an existing assignment
            const response = await fetch(`/api/assignments/${assignmentId}`, {
                method: 'PATCH',
                body: JSON.stringify(assignment),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setTitle('');
                setdueDate('');
                setModule('');
                setError(null);
                dispatch({ type: 'UPDATE_ASSIGNMENT', payload: json });
            }
        } else {
            // Creating a new assignment
            const response = await fetch('/api/assignments', {
                method: 'POST',
                body: JSON.stringify(assignment),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setTitle('');
                setdueDate('');
                setModule('');
                setError(null);
                dispatch({ type: 'CREATE_ASSIGNMENT', payload: json });
            }
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>{assignmentId ? 'Update Assignment' : 'Add a New Assignment'}</h3>

            
            <label>Assignment ID:</label>
            <input
                type="text"
                onChange={(e) => setAssignmentId(e.target.value)}
                value={assignmentId}
            />

            <label>Assignment Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Due date:</label>
            <input
                type="text"
                onChange={(e) => setdueDate(e.target.value)}
                value={dueDate}
            />

            <label>Module Name:</label>
            <input
                type="text"
                onChange={(e) => setModule(e.target.value)}
                value={whichModule}
            />

            <button type="submit">
                {assignmentId ? 'Update Assignment' : 'Add Assignment'}
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default AssignmentForm