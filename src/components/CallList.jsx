import React, { useState, useEffect } from "react";
import { HiOutlineArchive } from "react-icons/hi";
import useFilterCalls from "../hooks/useFilterCalls.js";
import MissedCalls from "./MissedCalls.jsx";


function CallList({calls}) {
  const { all, missedInboundUnarchived } = useFilterCalls();
  
  return (
    <div>
      <button type="button" className="callerButton">
        <HiOutlineArchive className="caller-icon" />
        Archive all calls
      </button>

      <ul>
        {calls &&
          missedInboundUnarchived(calls).map((call) => (
            <MissedCalls
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
  );
}

export default CallList;
