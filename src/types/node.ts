export enum NodeActionTypes {
  ADD_NODE = "ADD_NODE",
  REMOVE_NODE = 'REMOVE_NODE'
}

export interface NodeState {
  id: string,
  type?: string | undefined,
  data: {label: string | undefined},
  position: {x: number, y: number}
}

interface AddNodeAction {
  type: NodeActionTypes.ADD_NODE;
  payload: {
    nodeType: string | undefined,
    nodeName: string
  };
}

export type NodeAction = AddNodeAction
