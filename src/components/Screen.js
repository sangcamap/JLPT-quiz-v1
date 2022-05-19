import React, { useContext, useState, memo, useEffect } from 'react';
import Background from './Background';
import Choices from './Choices';
import Question from './Question';
import { GlobalContext } from './GlobalContext';
import Status from './Status';


export default function Screen() {

const context = useContext(GlobalContext) 
  return (
    <div className='screen-wrapper'>
      <Status current = {context.QuestionIndex} allQuestion = {context.data.length}></Status>    
      <div className='screen'>
        <Question>{context.data[context.QuestionIndex].question}</Question>
        <Choices></Choices>
      </div>
    </div>
  )
}

