import React, {memo, useContext} from 'react'
import { GlobalContext} from './GlobalContext';
import { hideScreen, showFinish } from './nav';


export default memo( function Choice() {
  const context = useContext(GlobalContext)
  const handleAnswer = (num) => {
    if (num == context.data[context.QuestionIndex].answer){
      console.log("Đúng")
      document.querySelector(`.choice${num}`).classList.add('isTrue')
      context.updateNumberOfCorrect()
      // context.updateHistory(1)
    }
    else {
      document.querySelector(`.choice${num}`).classList.add('isFalse')
      console.log("Sai")
      // context.updateHistory(0)
    }
    setTimeout(() => {   
      if (context.QuestionIndex + 1 == context.total){
        hideScreen()
        showFinish()
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
          <div className='screen__choiceList__choice choice1' onClick={() => {handleAnswer(1)}}>{context.data[context.QuestionIndex].choice1}</div>
          <div className='screen__choiceList__choice choice2' onClick={() => {handleAnswer(2)}}>{context.data[context.QuestionIndex].choice2}</div>
          <div className='screen__choiceList__choice choice3' onClick={() => {handleAnswer(3)}}>{context.data[context.QuestionIndex].choice3}</div>
      </div>
  )
})

