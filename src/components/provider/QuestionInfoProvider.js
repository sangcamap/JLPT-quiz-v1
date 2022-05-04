import { createContext } from "react";
import React from 'react'
import { data } from '../_test';

const QuestionInfoContext = createContext() 
function QuestionInfoProvider({children}) {
  return (
    <QuestionInfoContext.Provider value={data}>
        {children}
    </QuestionInfoContext.Provider>
  )
}

export {QuestionInfoContext, QuestionInfoProvider}
