import React, {useContext, useEffect, useState, memo} from 'react'
import { GlobalContext } from './GlobalContext'
import { Link } from "react-router-dom";



export default memo( function Prepare({notify}) {

const context = useContext(GlobalContext)


const [valid, setValid] = useState(false)
const checkValid = (e) => {
  setValid(true)
  context.getDataFromStorage(e.target.value)

  if (e.target.value <= 0 || e.target.value.length === 0){
    setValid(false)
  }
  if (context.haveN2 == false && context.haveN3 == false && context.haveN4 == false ){
    setValid(false)
  }  
}

const handleClick = () =>{
  context.updateStartStatus()
  
  if (valid == true){
    // showScreen()
    // hidePrepare()
    notify(1)
    context.updateStartStatus(true)
    context.timerStart()
  }
  else{
    notify(0)
    context.updateStartStatus(false)
  }
}


// console.log(valid)

  return (
    <div className='prepare'>
      <input className='prepare__numberOfQuestion' placeholder='Số câu' type='number' onChange={(e) => {
        checkValid(e)
        // context.setNumberOfQuestion(e)
      }
        }/>
      <div className='prepare__level'>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN2} onChange = {() => {context.setN2(!context.haveN2)}}/>
          <span>N2</span>
        </div>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN3} onChange = {() => {context.setN3(!context.haveN3)}}/>
          <span>N3</span>
        </div>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN4} onChange = {() => {context.setN4(!context.haveN4)}}/>
          <span>N4</span>
        </div>
      </div>
      {
        valid ? (<Link to='quiz' className='prepare__startBtn' type='button' onClick={handleClick}>Bắt đầu</Link>) : ''
      }
    </div>
  )
})
