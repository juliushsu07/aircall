import React, {useState} from 'react';
import CallListItem from './CallListItem.jsx';
import callerData from "../data/calls.json";
import {HiOutlineArchive} from 'react-icons/hi';

function CallList() {
  const [callers] = useState(callerData);

  return (
      <div>
        <button type="button" className="callerButton">
          <HiOutlineArchive className="caller-icon" />
          Archive all calls
        </button>

        <ul>
        {callers.map((caller) => (
          <CallListItem
          key={caller.id}
          from={caller.from}
          time={caller.time}
          date={caller.date}
          via={caller.via}
          call_type={caller.call_type}
          is_archived={caller.is_archived}
          />
        ))}
      </ul>
    </div>
  )
}

export default CallList