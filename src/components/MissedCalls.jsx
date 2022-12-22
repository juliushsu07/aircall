import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";
import axios from "axios";

import { HiOutlineArchive } from "react-icons/hi";

import { CallListContainer } from "./styles/CallListContainer.styles";


function MissedCalls({ calls, setCalls }) {
  const { missedInboundUnarchived } = useFilterCalls();

  const onArchivedAll = () => {
    missedInboundUnarchived(calls).map((call) => {
      call.is_archived = true;
    });
    setCalls([...calls]);
  };

  const updateArchived = (id) => {
    missedInboundUnarchived(calls).map((call) => {
      if (id === call.id)
      call.is_archived = true;
    });
    setCalls([...calls]);
  }

  return (
    <CallListContainer>
      <button type="button" onClick={onArchivedAll} className="callerButton">
        <HiOutlineArchive className="caller-icon" />
        Archive all missed calls
      </button>

      <ul>
      {calls &&
          missedInboundUnarchived(calls).map((call, i) => (
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
              buttonType={"Archive"}
            />
          ))}
      </ul>
    </CallListContainer>
  );
}

export default MissedCalls;
