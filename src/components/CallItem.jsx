import React from "react";
import { BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill, BsVoicemail } from "react-icons/bs";
import { MdCallMissed, MdCallMissedOutgoing } from "react-icons/md";
import moment from "moment/moment";

function CallItem({ from, via, created_at, call_type, direction}) {
  const date = moment.utc(created_at).format("MMMM, DD YYYY")
  const time = moment.utc(created_at).format("hh:mm:A", { trim: false })

  return (
    <div className="call-item-wrapper">
      <div className="date">
        {date}
      </div>

      <button type="button" className="callerButton">
        {call_type==='answered' && direction==='inbound'  && <BsFillTelephoneInboundFill className="caller-icon" style={{color:'green'}}/>}
        {call_type==='answered' && direction==='outbound'  && <BsFillTelephoneOutboundFill className="caller-icon" style={{color:'green'}}/>}
        {call_type==='missed' && direction==='inbound' && <MdCallMissed className="caller-icon" style={{color:'red'}} />}
        {call_type==='missed' && direction==='outbound' && <MdCallMissedOutgoing className="caller-icon" style={{color:'red'}} />}
        {call_type==='voicemail' && <BsVoicemail className="caller-icon" />}
        <h5>{from}</h5>
        <p>tried to call on {via}</p>
        <div className="time">
          {time}
        </div>
      </button>
    </div>
  );
}

export default CallItem;
