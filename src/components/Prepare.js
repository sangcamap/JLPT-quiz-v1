import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from './GlobalContext'
import { hideApp, hidePrepare, hideScreen, showApp, showScreen } from './nav'



export default function Prepare({notify}) {
const context = useContext(GlobalContext)
useEffect(() =>{
  hideScreen()
},[])

const [valid, setValid] = useState(false)
const checkValid = (e) => {
  if (e.target.value <= 0){
    setValid(false)
  }
  if (context.haveN2 == false && context.haveN3 == false && context.haveN4 == false ){
    setValid(false)
  }  
  setValid(true)
}

const handleClick = () =>{
  context.updateStartStatus()
  if (valid == true){
    showScreen()
    hidePrepare()
    notify(1)
    context.updateStartStatus(true)
  }
  else{
    notify(0)
  }
}


console.log(valid)

  return (
    <div className='prepare'>
      <input className='prepare__numberOfQuestion' placeholder='Số câu' type='number' onChange={(e) => checkValid(e)}/>
      <div className='prepare__level'>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN2} onClick = {() => {context.setN2(!context.haveN2)}}/>
          <lable>N2</lable>
        </div>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN3} onClick = {() => {context.setN3(!context.haveN3)}}/>
          <lable>N3</lable>
        </div>
        <div className ="prepare__level__inputGroup">
          <input type="checkbox" checked={context.haveN4} onClick = {() => {context.setN4(!context.haveN4)}}/>
          <lable>N4</lable>
        </div>
      </div>
      <button className='prepare__startBtn' type='button' onClick={handleClick}>Bắt đầu</button>
    </div>
  )
}
