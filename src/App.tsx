import React from 'react';
import "./style.css"
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Flow from "./components/Flow/Flow";

const App = () => {
  return (
    <>
      <h1>React flow library integrate with Redux store</h1>
      <ButtonAdd />
      <Flow />
    </>
  );
};

export default App;
