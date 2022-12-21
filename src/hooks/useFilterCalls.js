function useFilterCalls(calls) {
  const all = (calls) => {
    return calls;
  };

  const missedInboundUnarchived = (calls) => {
    return calls.filter((call) => {
      return (
        call.call_type == "missed" &&
        call.direction == "inbound" &&
        !call.is_archived
      );
    });
  };

  return { all, missedInboundUnarchived };
}

export default useFilterCalls;
