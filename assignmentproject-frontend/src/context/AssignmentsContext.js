//Instead of using local state I am now using a global context
//Inside the home component


import { createContext, useReducer } from 'react'

export const AssignmentsContext = createContext()
//keep local state in sync with the database
export const AssignmentReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ASSIGNMENTS':
            return {
                assignments: action.payload
            }

        case 'CREATE_ASSIGNMENTS':
            return {
                assignments: [action.payload, ...state.assignments]
            }
        case 'DELETE_ASSIGNMENTS':
            return {
                assignments: state.assignments.filter((w) => w._id !== action.payload._id)
            }

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


    return (
        <AssignmentsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AssignmentsContext.Provider>
    )
}