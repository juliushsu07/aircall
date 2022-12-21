import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";

function ArchivedCalls({ calls }) {
  const { archived } = useFilterCalls();

  return (
    <div>
      <ul>
        {calls &&
          archived(calls).map((call) => (
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

export default ArchivedCalls;
