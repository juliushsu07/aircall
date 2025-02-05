import React, {useState} from "react";
import {Link} from 'react-router-dom'
import moment from "moment/moment";

import { BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill, BsVoicemail } from "react-icons/bs";
import { MdOutlineDeviceUnknown, MdCallMissed, MdCallMissedOutgoing } from "react-icons/md";

import styled from "styled-components";

const CallItemContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    border: 0.5px solid #868e96;
    border-radius: .4rem;
    color: #868e96;  
`;

const Date = styled.div`
  text-align: center;
  padding: 1rem 0 1rem;
  color: #868e96;
  &:before {
    content: "..........................   ";
  }
  &:after {
    content: "   ..........................";
  }
`;

const CallerID = styled.h1`
  color: #333333;
`

const Time = styled.div`
  margin: auto 0 auto;
  height: 50%;
  padding-right: .2rem;
`;


function CallItem({id, via, created_at, call_type, direction, from, to, duration, is_archived, onArchive, actionType}) {
  const date = moment.utc(created_at).format("MMMM, DD YYYY");
  const time = moment.utc(created_at).format("hh:mmA", { trim: false });
  
  const inbound = direction==='inbound';
  const outbound = direction==='outbound'; 

  const inboundAnswered = call_type==='answered' && direction==='inbound';
  const outboundAnswered = call_type==='answered' && direction==='outbound';
  const inboundMissed= call_type==='missed' && direction==='inbound';
  const outboundMissed = call_type==='missed' && direction==='outbound';
  const inboundVoiced = call_type==='voicemail' && direction==='inbound';
  const outboundVoiced = call_type==='voicemail' && direction==='outbound';
  const unknown = call_type===undefined || direction===undefined;

  const updateArchive = () => {
    onArchive(id)
  };

  return (
    <div>
      <Date>{date}</Date>
      <CallItemContainer type="button" className="callerButton">
        
        {inboundAnswered && <BsFillTelephoneInboundFill size={20} className="caller-icon" style={{color:'green'}}/>}
        {outboundAnswered && <BsFillTelephoneOutboundFill size={20} className="caller-icon" style={{color:'green'}}/>}
        {inboundMissed && <MdCallMissed size={20} className="caller-icon" style={{color:'red'}} />}
        {outboundMissed && <MdCallMissedOutgoing size={20} className="caller-icon" style={{color:'red'}} />}
        {(inboundVoiced || outboundVoiced ) && <BsVoicemail size={20} className="caller-icon" />}
        {unknown && <MdOutlineDeviceUnknown size={20} className="caller-icon" />}

        <div>
          <CallerID>
            {!from && "Unknown"}
            {inbound && from}
            {outbound && to } 
          </CallerID>
          <p>
            {inboundAnswered && "called on " + via }
            {outboundAnswered && "answered call on " + via }
            {inboundMissed && "tried to call on " + via }
            {outboundMissed && "missed call on " + via }
            {inboundVoiced && "left a voicemail on " + via }
            {outboundVoiced && "voicemailed on " + via }
          </p>
        </div>
        <Link onClick={updateArchive}>{actionType}</Link>
        <Link to={"/details/"+id} state={{
          direction: direction,
          from: from,
          to: to,
          via: via,
          duration: duration,
          is_archived: is_archived,
          date: date,
          time: time,
          call_type: call_type,
        }} 
        >Details
        </Link>

        <Time>{time}</Time>
      </CallItemContainer>
    </div>
  );
}

export default CallItem;
