import React from 'react'
import { useLocation } from "react-router-dom"

function CallDetails() {
  const location = useLocation()
  const direction = location.state.direction
  const from = location.state.from
  const to = location.state.to
  const via = location.state.via
  const duration = location.state.duration
  const is_archived = location.state.is_archived
  const date = location.state.date
  const time = location.state.time
  const call_type = location.state.call_type

  return (
    <div>
      <h1></h1>
      <p>Call Type: {call_type}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Direction: {direction}</p>
      <p>Duration: {duration}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Via: {via}</p>
      <p>Archived: {is_archived ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default CallDetails