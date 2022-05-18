import React from 'react';
import '../sass/main.scss';
import './fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Status from './Status';
import Screen from './Screen';
import Prepare from './Prepare';
import { showApp, hideApp } from './nav';
import Background from './Background';
import { ToastContainer, toast } from 'react-toastify';

function App() {
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
    </div>
  );
}

export default App;
