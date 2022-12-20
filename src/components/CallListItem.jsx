import React from 'react';
import {FcMissedCall} from 'react-icons/fc';

function CallListItem({ from, time, date, via, call_type, is_archived  }) {
  return (
    <div className="callerWrapper">

      <div className='date'>
        {date}
      </div>

      <button type="button" className="callerButton">
      <FcMissedCall className="caller-icon" />
        <p>{from}</p>
        <p>tried to call on {via}</p>
        <p>{time}</p>
      </button>

    </div>
  )
}

export default CallListItem