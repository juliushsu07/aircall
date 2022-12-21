import React, {useState, useEffect} from 'react';
import CallListItem from './CallListItem.jsx';
import {HiOutlineArchive} from 'react-icons/hi';
import useFilterCalls from '../hooks/useFilterCalls.js';
import calls from "../data/calls.json";

function CallList() {
  const {all, missedInboundUnarchived} = useFilterCalls(calls);

  return (
      <div>
        <button type="button" className="callerButton">
          <HiOutlineArchive className="caller-icon" />
          Archive all calls
        </button>

        <ul>
        {missedInboundUnarchived(calls).map((call) => (
          <CallListItem
          key={call.id}
          direction={call.direction}
          from={call.from}
          via={call.via}
          duration={call.duration}
          call_type={call.call_type}
          is_archived={call.is_archived}
          created_at={call.created_at}
          />
        ))}
      </ul>
    </div>
  )
}

export default CallList