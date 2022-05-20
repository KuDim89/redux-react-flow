import {NodeAction, NodeActionTypes, NodeState} from "../types/node";

const initialState: Array<NodeState> = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 200, y: 0 }
  },
  {
    id: "2",
    type: "output",
    data: { label: "Input Node" },
    position: { x: 200, y: 300 }
  },
]

export const nodeReducer = (state = initialState, action: NodeAction): NodeState[] => {
  switch (action.type) {
    case NodeActionTypes.ADD_NODE:
      return [
        ...state,
        {
          id: Math.random().toString(),
          type: action.payload.nodeType,
          data: {label: action.payload.nodeName},
          position: {x: 200, y: 150},
        }
      ];

    default:
      return state
  }
}