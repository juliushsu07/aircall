import React, { useState, useEffect } from "react";
import { HiOutlineArchive } from "react-icons/hi";
import useFilterCalls from "../hooks/useFilterCalls.js";
import MissedCalls from "./MissedCalls.jsx";
import axios from "axios";

function CallList() {
  const [calls, setCalls] = useState();

  const { all, missedInboundUnarchived } = useFilterCalls(calls);

  useEffect(() => {
    axios
      .get(
        "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
      )
      .then((res) => {
        const calls = [...res.data];
        setCalls(calls);
      });
  }, []);

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
