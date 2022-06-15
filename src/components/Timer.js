import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';


export default function MyStopwatch() {
  const context = useContext(GlobalContext)

  return (
    <div className='screen__status__right__timer timer'>
        <span>{context.days}</span>:<span>{context.hours}</span>:<span>{context.minutes}</span>:<span>{context.seconds}</span>
    </div>
  );
}

