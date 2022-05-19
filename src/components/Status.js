import React , {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext, QuestionInfoContext } from './GlobalContext'
import MyStopwatch from './Timer'



export default function Status(props) {
  const context = useContext(GlobalContext)

  const hideApp = () => {
    document.querySelector('.app').style.display = "none"
  }
  let screenFlag = 1 
  const openFullscreen = () => {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    screenFlag = 0
  }
  
  // Lấy tg 
  const getTime = () => {
    context.timerPause()
    console.log(`${context.hours}  ${context.minutes}  ${context.seconds}`) 
  }

  return (
    <div className='screen__status'>
        <div className='screen__status__left'>
            <button className='screen__status__left__settingBtn btn' type='button' onClick={getTime}><FontAwesomeIcon icon="fa-solid fa-sliders" /></button>
            <span className='screen__status__left__questionNumber'>{props.current + 1}/{props.allQuestion}</span>
        </div>
        <div className='screen__status__right'>
          <MyStopwatch />
            <button className='screen__status__right__expandBtn btn' type='button' onClick={ openFullscreen }><FontAwesomeIcon icon="fa-solid fa-expand" /></button>
        </div>
    </div>
  )
}
