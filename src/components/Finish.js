import React, { useContext, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'

export default function Finish() {
    const context = useContext(GlobalContext)
    useEffect(() => {
        let ppc = document.querySelector('.progress-pie-chart')
        let percent =  Math.floor((context.numberOfCorrect / context.total) * 100) 
        let deg = 360*percent/100;
        if (percent > 50) {
          ppc.classList.add('gt-50');
        }
        document.querySelector('.ppc-progress-fill').style = `transform: rotate(${deg}deg);`;
        document.querySelector('.ppc-percents span').innerHTML = `${percent} %`;
    }, [context.numberOfCorrect])

// console.log(context.history)
  return (
    <div className='finish'>
        <div className='finish__left'>
            <div className="progress-pie-chart" data-percent="43">
                <div className="ppc-progress">
                    <div className="ppc-progress-fill"></div>
                </div>
                <div className="ppc-percents">
                    <div className="pcc-percents-wrapper">
                    <span>%</span>
                    </div>
                </div>
            </div>
            <div className='finish__left__info'>
                <div className='finish__left__info__box' id='totalQuestion'>Số tổng số câu: {context.total}</div>
                <div className='finish__left__info__box' id='totalCorrect'>Số câu đúng: {context.numberOfCorrect}</div>
                <div className='finish__left__info__box' id='totalCorrect'>Tổng thời gian: {context.endTime}</div>
            </div>
        </div>
        <div className='finish__right'>
            <h4 className='finish__right__title'>Lịch sử câu hỏi</h4>
            <div className='finish__right__history'>
                {context.history.map(e => 
                        e.isCorrect == true ? 
                        (<div className='finish__right__history__item isTrue' key = {e.questionId}>
                            <span className='finish__right__history__item__question'>{e.question}</span>
                            <span className='finish__right__history__item__answer'>{context.data[e.questionIndex].choice[e.answer - 1]}</span>
                        </div>)
                        :
                        (<span className='finish__right__history__item isFalse' key = {e.questionId}>
                            <span className='finish__right__history__item__question'>{e.question}</span>
                            <span className='finish__right__history__item__answer'>{context.data[e.questionIndex].choice[e.answer - 1]}</span>
                        </span>)
                )}
            </div>
        </div>
    </div>
  )
}
