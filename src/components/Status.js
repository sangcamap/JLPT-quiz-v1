import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Status() {
  return (
    <div className='status'>
        <div className='status__left'>
            <button className='status__left__settingBtn btn' type='button'><FontAwesomeIcon icon="fa-solid fa-sliders" /></button>
            <span className='status__left__questionNumber'>10/20</span>
        </div>
        <div className='status__right'>
            <button className='status__right__expandBtn btn' type='button'><FontAwesomeIcon icon="fa-solid fa-expand" /></button>
        </div>
    </div>
  )
}
