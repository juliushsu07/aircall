import React from "react";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";
import axios from "axios";

import { CallListContainer } from "./styles/CallListContainer.styles";

function ArchivedCalls({ calls, setCalls }) {
  const { archived } = useFilterCalls();

  const updateArchived = (id) => {
    axios.patch('http://cors-anywhere.herokuapp.com/https://cerulean-marlin-wig.cyclic.app/activities/'+id,{
      is_archived: false
    })
      .then( (res) => {
        archived(calls).map((call) => {
          if (id === call.id)
          call.is_archived = false;
        });
        setCalls([...calls]);
      })
      .catch( err => console.log(err.response));
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
              actionType={"Unarchive"}
            />
          ))}
      </ul>
    </CallListContainer>
  );
}

export default ArchivedCalls;
