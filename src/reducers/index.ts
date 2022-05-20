import { combineReducers } from "redux";
import {nodeReducer} from "./nodeReducer";
import {edgeReducer} from "./edgeReducer";

export const rootReducer = combineReducers({
  nodes: nodeReducer,
  edges: edgeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

