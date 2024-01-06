import { useState } from 'react';
import './App.css';
import EffectDemo from './components/EffectDemo';
import Header from './components/Header';
import LifeCycleExample from './components/LifeCycleExample';
import StateDemo from './components/StateDemo';
import Userlist from './components/Userlist';

function App() {
  const [flag,setFlag]=useState(true);
  const change=()=>{
    setFlag(!flag);
  }
  return (
    <div className="App">
      <Header />
      <StateDemo />
      <Userlist />
      <EffectDemo />
     {flag?<LifeCycleExample />:''}
     <button onClick={change}>
      {flag?'Hide':'show'}</button>
    </div>
  );
}

export default App;
