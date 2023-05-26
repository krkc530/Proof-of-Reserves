import React, { createContext, useReducer, useContext } from 'react';

export default function usersReducer(state, action) {
    switch (action.type) {
        case "GET":
            return state;
        
        case "SET":
            return action.data;
        default:
            return state;
    }
}