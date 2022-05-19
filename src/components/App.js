import React, { useContext } from 'react';
import './fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Status from './Status';
import Screen from './Screen';
import Prepare from './Prepare';
import { showApp, hideApp } from './nav';
import Background from './Background';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from './GlobalContext';
import Finish from './Finish';

function App() {
  const context = useContext(GlobalContext)
  const notify = (e) => {
    if (e == 1){
      
    }
    else {
      toast('Vui lòng lựa số câu và cấp độ')
    }
  }

  return (
    <div className="App app">
        <Background></Background>
        <Prepare notify={notify}></Prepare>
        <Screen></Screen>
        <ToastContainer theme='dark' />
        <Finish></Finish>
    </div>
  );
}

export default App;
