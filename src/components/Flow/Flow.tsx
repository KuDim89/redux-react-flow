import React from 'react';
import './style.css';
import ReactFlow, {ReactFlowProvider} from "react-flow-renderer";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Flow = () => {
  const state = useTypedSelector((state) => state);

  return (
    <div className="flow-container">
      <ReactFlowProvider>
        <ReactFlow
          edges={state.edges}
          nodes={state.nodes}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;