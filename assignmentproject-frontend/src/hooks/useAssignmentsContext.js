import { AssignmentsContext } from "../context/AssignmentsContext";
import { useContext } from "react";

export const useAssignmentsContext = () => {
    // Accessing the context object containing state and dispatch function using useContext
    const context = useContext(AssignmentsContext)

    if (!context) {
        throw Error('useAssignmentsContext needs to be used inside the provider')
    }

    return context
}