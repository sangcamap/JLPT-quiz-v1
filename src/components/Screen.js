import React, { useContext } from 'react';
import Background from './Background';
import Choices from './Choices';
import Question from './Question';
import { QuestionInfoContext, QuestionInfoProvider } from './provider/QuestionInfoProvider';

export default function Screen() {
const data_QuestionInfoContext = useContext(QuestionInfoContext) 
// console.log(data_QuestionInfoContext)

  return (
    <div className='screen'>
            <Background></Background>
            <Question>{data_QuestionInfoContext[0].question}</Question>
            <Choices
                choice1={data_QuestionInfoContext[0].choice1} 
                choice2={data_QuestionInfoContext[0].choice2}
                choice3={data_QuestionInfoContext[0].choice3}
                >
            </Choices>
    </div>
  )
}
