function useFilterCalls() {
  const allUnarchived = (calls) => {
    return calls.filter((call) => {
      return !call.is_archived;
    });
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

  const archived = (calls) => {
    return calls.filter((call) => {
      return call.is_archived;
    });
  };

  return { allUnarchived, missedInboundUnarchived, archived };
}

export default useFilterCalls;
