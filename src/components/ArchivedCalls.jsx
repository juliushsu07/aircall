import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";

import { CallListContainer } from "./styles/CallListContainer.styles";

function ArchivedCalls({ calls }) {
  const { archived } = useFilterCalls();

  return (
    <CallListContainer>
      <ul>
        {calls &&
          archived(calls).map((call) => (
            <CallItem
              key={call.id}
              direction={call.direction}
              from={call.from}
              to={call.to}
              via={call.via}
              duration={call.duration}
              call_type={call.call_type}
              is_archived={call.is_archived}
              created_at={call.created_at}
            />
          ))}
      </ul>
    </CallListContainer>
  );
}

export default ArchivedCalls;
