import React, {useState} from "react";
import Display from "./components/display/display";
import ButtonsPad from "./components/btnPad/buttonsPad";
import operation from "./logic/operation";
import style from './App.module.css'

function App() {

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = btnName => {
    setState(operation(state, btnName))
    console.log('estado: ', state);
    console.log('nombre:', btnName);
  };

  return (
    <div className={style['app']}>
      <div>
        <Display value={state.next || state.total || '0'} />
        <ButtonsPad clickHandle={handleClick} />
      </div>
      <p> total: {state.total}</p>
      <p> next: {state.next}</p>
      <p> operation: {state.operation}</p>
    </div>
  );
}

export default App;
