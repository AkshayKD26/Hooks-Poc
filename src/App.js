import React from "react";
import "./App.css";
// import HooksObject from'./HooksObject' //useState
// import EffectOne from './EffectOne'  //useEffect

// import FetchRed from './FetchRed'  //data fetch using useReducer and useEffect
import DataFetch from "./DataFetch"; // data fetch using useEffect
// import RedUse from './RedUse' // useReducer stateMangement

function App() {
  return (
    <div className="App">
      {/* <FetchRed/> */}
      <DataFetch />
      {/* <HooksObject/> */}
      {/* <EffectOne/> */}
      {/* <RedUse/> */}
    </div>
  );
}

export default App;
