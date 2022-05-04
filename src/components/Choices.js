import React from 'react'
import { QuestionInfoContext, QuestionInfoProvider } from './provider/QuestionInfoProvider';

export default function Choice(props) {
  const data_QuestionInfoContext = React.useContext(QuestionInfoContext)
  const handleAnswer = (num) => {
    if (num == data_QuestionInfoContext[0].answer){
      console.log("Đúng")
      document.querySelector(`.choice${num}`).classList.add('isTrue')
    }
    else {
      document.querySelector(`.choice${num}`).classList.add('isFalse')
      console.log("Sai")
    }
  }
  return (
      <div className='screen__choiceList'>
          <div className='screen__choiceList__choice choice1' onClick={() => {handleAnswer(1)}}>{props.choice1}</div>
          <div className='screen__choiceList__choice choice2' onClick={() => {handleAnswer(2)}}>{props.choice2}</div>
          <div className='screen__choiceList__choice choice3' onClick={() => {handleAnswer(3)}}>{props.choice3}</div>
      </div>
  )
}
