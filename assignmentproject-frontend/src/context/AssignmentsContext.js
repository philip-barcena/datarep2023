//Instead of using local state I am now using a global context
//Inside the home component


import { createContext, useReducer } from 'react'
export const AssignmentsContext = createContext()
//keep local state in sync with the database
export const AssignmentReducer = (state, action) => {
    switch (action.type) {
        // Setting assignments based on the payload received
        case 'SET_ASSIGNMENTS':
            return {
                assignments: action.payload
            }
        // Adding a new assignment to the existing list of assignments
        case 'CREATE_ASSIGNMENTS':
            return {
                assignments: [action.payload, ...state.assignments]
            }
        // Removing an assignment based on its ID
        case 'DELETE_ASSIGNMENTS':
            return {
                assignments: state.assignments.filter((w) => w._id !== action.payload._id)
            }
        // Updating an assignment with new data
        case 'UPDATE_ASSIGNMENT':
            return {
                assignments: state.assignments.map((assignment) =>
                    assignment._id === action.payload._id ? action.payload : assignment
                )
            }

        default:
            return state
    }
}

export const AssignmentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AssignmentReducer, {
        assignments: null
    })

    // Providing state and dispatch function to the context
    return (
        <AssignmentsContext.Provider value={{ ...state, dispatch }}>
            {/*children property represents the <app> component in index.js */}
            {children}
        </AssignmentsContext.Provider>
    )
}