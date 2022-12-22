import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";

import { CallListContainer } from "./styles/CallListContainer.styles";

function ArchivedCalls({ calls, setCalls }) {
  const { archived } = useFilterCalls();

  const updateArchived = (id) => {
    archived(calls).map((call) => {
      if (id === call.id)
      call.is_archived = false;
    });
    setCalls([...calls]);
  }

  return (
    <CallListContainer>
      <ul>
      {calls &&
          archived(calls).map((call, i) => (
            <CallItem
              key={i}
              id={call.id}
              direction={call.direction}
              from={call.from}
              to={call.to}
              via={call.via}
              duration={call.duration}
              call_type={call.call_type}
              is_archived={call.is_archived}
              created_at={call.created_at}
              onArchive={updateArchived}
              buttonType={"Unarchive"}
            />
          ))}
      </ul>
    </CallListContainer>
  );
}

export default ArchivedCalls;
