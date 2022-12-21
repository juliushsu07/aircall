import React from 'react';
import {FcMissedCall} from 'react-icons/fc';
import moment from 'moment/moment';

function CallListItem({from, via, created_at}) {  

  return (
    <div className="callerWrapper">

      <div className='date'>
        {moment.utc(created_at).format('MMMM, DD YYYY')}
      </div>

      <button type="button" className="callerButton">
      <FcMissedCall className="caller-icon" />
        <h5>
          {from}
        </h5>
        <p>tried to call on {via}</p>
        <div className='time'>
          {moment.utc(created_at).format('hh:mm:A', { trim: false })}
        </div>
      </button>
      
    </div>
  )
  
}

export default CallListItem