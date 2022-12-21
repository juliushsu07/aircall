import React from "react";
import { HiOutlineArchive } from "react-icons/hi";
import useFilterCalls from "../hooks/useFilterCalls.js";
import CallItem from "./CallItem.jsx";

function AllCalls({ calls }) {
  const { all } = useFilterCalls();

  return (
    <div>
        {/* All CALLS! */}
      <ul>
        {calls &&
          all(calls).map((call) => (
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

export default AllCalls;
