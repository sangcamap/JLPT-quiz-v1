import { createContext, useState , reducer, initialState, useReducer } from "react";
import React from 'react'
import { data } from './_test';
import { useStopwatch } from "react-timer-hook";

const GlobalContext = createContext() 

function GlobalContextProvider({children}) {
  const [QuestionIndex, SetQuestionIndex] = useState(0)
  const NextQuestion = () => {
    SetQuestionIndex(QuestionIndex + 1)
  }
  const PrevQuestion = () => {
    SetQuestionIndex(QuestionIndex - 1)
  }

  const [started, setStarted] = useState(false)
  const updateStartStatus = () =>{
    setStarted(!started)
  } 

  const [haveN2, setN2] = useState(false)
  const [haveN3, setN3] = useState(true)
  const [haveN4, setN4] = useState(false)

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({autoStart: false});

  const [endTime, setEndtime] =  useState()
  const updateEndTime = () => {
    setEndtime(`${hours}:${minutes}:${seconds}`)
  }
  


  const [numberOfCorrect, setNumberOfCorrect] = useState(0)
  const updateNumberOfCorrect = () =>{
    setNumberOfCorrect(numberOfCorrect+1)
  }

  // const history = [
  //   // {
  //   //   questionIndex: QuestionIndex,
  //   //   question: data[QuestionIndex].question,
  //   //   answer: data[QuestionIndex].answer,
  //   //   isCorrect: e == 1 ? true : false
  //   // }
  // ]
  const [history, setHistory] = useState([])

  const updateHistory = (e) => {
    setHistory([...history, 
      {
        questionIndex: QuestionIndex,
        question: data[QuestionIndex].question,
        answer: data[QuestionIndex].answer,
        isCorrect: e == 1 ? true : false
      }
    ]);
  }


  return (
    <GlobalContext.Provider value={
    {
      data,
      QuestionIndex,
      NextQuestion,
      PrevQuestion,
      started,
      updateStartStatus,
      haveN2,
      setN2,
      haveN3,
      setN3,
      haveN4,
      setN4,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      timerStart: start,
      timerPause: pause,
      timerReset: reset,
      endTime,
      updateEndTime,
      total: data.length,
      numberOfCorrect,
      updateNumberOfCorrect,
      history,
      updateHistory
    }
    }>
        {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalContextProvider}
