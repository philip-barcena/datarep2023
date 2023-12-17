import { useEffect} from "react"
import { useAssignmentsContext} from "../hooks/useAssignmentsContext"

// components
import AssignmentDetails from '../components/assignmentDetails'
import AssignmentForm from '../components/assignmentForm'
import AssignmentTimer from '../components/assignmentTimer';


const Home = () => {
   const {assignments, dispatch} = useAssignmentsContext()

    useEffect(() => {
        const fetchAssignments = async () => {
            const response = await fetch('/api/assignments')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_ASSIGNMENTS', payload: json})
            }
        }

        fetchAssignments()
    }, [])


    return (
        <div className="home">
            <AssignmentTimer />
            <div className='assignments'>
                {assignments && assignments.map((assignment) => (
                    <AssignmentDetails key={assignment._id} assignment={assignment}/>
                ))}
            </div>
            <AssignmentForm />
        </div>
    )
}

export default Home