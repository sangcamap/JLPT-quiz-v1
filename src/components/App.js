import React, { useContext } from 'react';
import './fontAwesome';
import Screen from './Screen';
import Prepare from './Prepare';
import Background from './Background';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from './GlobalContext';
import Finish from './Finish';
import { Routes, Route } from 'react-router-dom';

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
        <ToastContainer theme='dark' />
        <Routes>
          <Route index path='/' element = {<Prepare notify={notify}></Prepare>}></Route>
          <Route path='/quiz' element = {<Screen></Screen>}></Route>
          <Route path='/finish' element = {<Finish></Finish>}></Route>
        </Routes>
    </div>
  );
}

export default App;
