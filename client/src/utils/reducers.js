import { useReducer } from 'react';
import {
  UPDATE_VIEW,
  ADD_WAVES,
  UPDATE_WAVES,
  UPDATE_USER,
} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_VIEW:
            return {
                ...state,
                views: [...action.views],
            };
        case UPDATE_WAVES:
            return {
                ...state,
                waves: [...action.waves],
            };
            case UPDATE_USER:
            return {
                ...state,
                user: [...action.user],
            };
            case ADD_WAVES:
            return {
                ...state,
                waves: [...state.waves, action.views],
            };
        
            default: return state;
    }
}
export function useWaveReducer(initialState) {
    return useReducer(reducer, initialState);
  }

