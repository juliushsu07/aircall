import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";

import { HiOutlineArchive } from "react-icons/hi";

function UnArchived({ calls, setCalls }) {
  const { allUnarchived } = useFilterCalls();
  
  const onArchivedAll = () => {
    allUnarchived(calls).map((call) => {
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
          allUnarchived(calls).map((call) => (
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

export default UnArchived;
