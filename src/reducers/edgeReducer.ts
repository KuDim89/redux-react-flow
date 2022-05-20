import {EdgeActionTypes, EdgeState, EdgeAction}  from "../types/edge";


const initialState: Array<EdgeState> = [
  {
    id: 'e3-4',
    source: '1',
    target: '2',
    label: 'edge'
  }
]

export const edgeReducer = (state = initialState, action: EdgeAction ): (EdgeState | { id: string; source: string; label: string | undefined; animate: boolean; target: string })[] => {
  switch (action.type) {
    case EdgeActionTypes.ADD_EDGE:
      return [
        ...state,
        {
          id: Math.random().toString(),
          source: action.payload.source,
          target: action.payload.target,
          animate: action.payload.animate,
          label: action.payload?.label
        }
      ];
    default:
      return state
  }
}