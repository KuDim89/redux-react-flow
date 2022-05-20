import React from "react";
import { useDispatch} from "react-redux";
import './style.css';
import {NodeActionTypes} from "../../types/node";


const ButtonAdd: React.FC = () => {
  const dispatch = useDispatch();

  const AddNode = () => {
    dispatch({
      type: NodeActionTypes.ADD_NODE,
      payload: {
        nodeType: "output",
        nodeName: "new Node"
      }});
  };

  return (
    <button className="button" onClick={AddNode}>Add</button>
  );
};

export default ButtonAdd;