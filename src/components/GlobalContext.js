import { createContext, useState , reducer, initialState, useReducer } from "react";
import React from 'react'
import { data } from './_test';

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
      setN4
    }
    }>
        {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalContextProvider}
