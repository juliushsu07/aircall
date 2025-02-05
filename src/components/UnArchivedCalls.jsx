import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";
import axios from "axios";

import { HiOutlineArchive } from "react-icons/hi";

import { CallListContainer } from "./styles/CallListContainer.styles";

function UnArchivedCall({ calls, setCalls }) {
  const { allUnarchived } = useFilterCalls();

  const updateAllArchived = () => {
    allUnarchived(calls).map((call) => {
      call.is_archived = true;
    });
    setCalls([...calls]);
  };

  const updateArchived = (id) => {
    axios.patch('https://cors-anywhere.herokuapp.com/https://cerulean-marlin-wig.cyclic.app/activities/'+id,{
      is_archived: true
    })
      .then( (res) => {
        allUnarchived(calls).map((call) => {
          if (id === call.id)
          call.is_archived = true;
        });
        setCalls([...calls]);
      })
      .catch( err => console.log(err.response));
  }

  return (
    <CallListContainer>
      <button type="button" onClick={updateAllArchived} className="callerButton">
        <HiOutlineArchive className="caller-icon" />
        Archive all calls
      </button>
      <ul>
        {calls &&
          allUnarchived(calls).map((call, i) => (
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
              actionType={"Archive"}
            />
          ))}
      </ul>
    </CallListContainer>
  );
}

export default UnArchivedCall;
