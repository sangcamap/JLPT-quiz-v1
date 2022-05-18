import React , {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { QuestionInfoContext } from './GlobalContext'


export default function Status(props) {
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
  

  return (
    <div className='screen__status'>
        <div className='screen__status__left'>
            <button className='screen__status__left__settingBtn btn' type='button' onClick={hideApp}><FontAwesomeIcon icon="fa-solid fa-sliders" /></button>
            <span className='screen__status__left__questionNumber'>{props.current + 1}/{props.allQuestion}</span>
        </div>
        <div className='screen__status__right'>
            <button className='screen__status__right__expandBtn btn' type='button' 
            onClick={ openFullscreen }>
              <FontAwesomeIcon icon="fa-solid fa-expand" /></button>
        </div>
    </div>
  )
}
