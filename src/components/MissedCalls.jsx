import React from "react";
import { HiOutlineArchive } from "react-icons/hi";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";
import axios from "axios";

function MissedCalls({ calls, setCalls }) {
  const { missedInboundUnarchived } = useFilterCalls();

  const onArchivedAll = () => {
    missedInboundUnarchived(calls).map((call) => {
      call.is_archived = "archived";
    });
    setCalls([...calls]);
  };

  return (
    <div>
      <button type="button" onClick={onArchivedAll} className="callerButton">
        <HiOutlineArchive className="caller-icon" />
        Archive all calls
      </button>

      <ul>
        {calls &&
          missedInboundUnarchived(calls).map((call) => (
            <CallItem
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

export default MissedCalls;
