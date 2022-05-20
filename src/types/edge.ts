export enum EdgeActionTypes {
  ADD_EDGE = "ADD_EDGE",
}

export interface EdgeState {
  id: string,
  source: string,
  target: string,
  animated?: boolean | undefined,
  label?: string | undefined,
}

export type EdgeAction = AddEdgeAction;

interface AddEdgeAction {
  type: EdgeActionTypes.ADD_EDGE;
  payload: {
    id: string
    source: string,
    target: string,
    animate: boolean,
    label: string | undefined
  };
}
