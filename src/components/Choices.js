import React, {memo, useContext} from 'react'
import { GlobalContext} from './GlobalContext';
import { useNavigate } from "react-router-dom";

export default memo( function Choice() {
  const context = useContext(GlobalContext)
  let navigate = useNavigate();

  const handleAnswer = (num) => {
    if (num == context.data[context.QuestionIndex].answer){
      console.log("Đúng")
      document.querySelector(`.choice${num}`).classList.add('isTrue')
      context.updateNumberOfCorrect()
      context.updateHistory(1)
      
    }
    else {
      document.querySelector(`.choice${num}`).classList.add('isFalse')
      console.log("Sai")
      context.updateHistory(0)
    }
    setTimeout(() => {   
      if (context.QuestionIndex + 1 == context.total){
        context.updateEndTime()
        navigate("../finish", { replace: true })
      }
      else {
        context.NextQuestion()
        console.log(`Câu ${context.QuestionIndex + 1}: ` + context.data[context.QuestionIndex].question)
        document.querySelectorAll('.screen__choiceList__choice').forEach((e) =>{
          e.classList.remove('isTrue')
          e.classList.remove('isFalse')
        })
      }
    }, 1000);

  }


  return (
      <div className='screen__choiceList'>
          <div className='screen__choiceList__choice choice1' onClick={() => {handleAnswer(1)}}>{context.data[context.QuestionIndex].choice[0]}</div>
          <div className='screen__choiceList__choice choice2' onClick={() => {handleAnswer(2)}}>{context.data[context.QuestionIndex].choice[1]}</div>
          <div className='screen__choiceList__choice choice3' onClick={() => {handleAnswer(3)}}>{context.data[context.QuestionIndex].choice[2]}</div>
      </div>
  )
})

