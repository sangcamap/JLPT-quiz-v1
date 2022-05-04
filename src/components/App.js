import React from 'react';
import '../sass/main.scss';
import './fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Status from './Status';
import Screen from './Screen';
import { QuestionInfoContext, QuestionInfoProvider } from './provider/QuestionInfoProvider';



function App() {
  return (
    <div className="App app">
      <QuestionInfoProvider>
        <Status></Status>
        <Screen></Screen>
      </QuestionInfoProvider>
    </div>
  );
}

export default App;
