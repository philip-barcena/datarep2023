import { useEffect } from "react"
// Custom hook for accessing assignments context
import { useAssignmentsContext } from "../hooks/useAssignmentsContext"

// components
import AssignmentDetails from '../components/assignmentDetails'
import AssignmentForm from '../components/assignmentForm'
import AssignmentTimer from '../components/assignmentTimer';


const Home = () => {
    const { assignments, dispatch } = useAssignmentsContext()

    useEffect(() => {
        // Function to fetch assignments
        const fetchAssignments = async () => {
            // Fetching assignments
            const response = await fetch('/api/assignments')
            const json = await response.json()
            // Checking if the response is successful and updating the assignments in the context
            if (response.ok) {
                dispatch({ type: 'SET_ASSIGNMENTS', payload: json })
            }
        }

        fetchAssignments()
    }, []) // Empty dependency array to run the effect only once on mount



    return (
        <div className="home">
            <AssignmentTimer />
            <div className='assignments'>
                {assignments && assignments.map((assignment) => (
                    <AssignmentDetails key={assignment._id} assignment={assignment} />
                ))}
            </div>
            <AssignmentForm />
        </div>
    )
}

export default Home