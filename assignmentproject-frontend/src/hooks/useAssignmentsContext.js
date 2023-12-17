import { AssignmentsContext } from "../context/AssignmentsContext";
import { useContext } from "react";

export const useAssignmentsContext = () => {
    // this object with the state and dispatch function
    const context = useContext(AssignmentsContext)

    if (!context) {
        throw Error('useAssignmentsContext needs to be used inside the provider')
    }

    return context
}