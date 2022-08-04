/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import detailsContext from "./DetailsContext";
function DetailsState(props) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [location, setLocation] = useState();
  const [tournamentname, setTournamentname] = useState();
  const [comment, setComment] = useState();
  const [tn1, settn1] = useState();
  const [tn2, settn2] = useState();
  const [tv1, settv1] = useState();
  const [tv2, settv2] = useState();
  const [matchType, setmatchType] = useState();
  const [details, setDetails] = useState([]);
  return (
    <detailsContext.Provider
      value={{
        setStart,
        setEnd,
        setLocation,
        setTournamentname,
        setComment,
        settn1,
        settn2,
        settv1,
        settv2,
        setmatchType,
        matchType,
        start,
        end,
        location,
        tournamentname,
        comment,
        tn1,
        tn2,
        tv1,
        tv2,
        details,
        setDetails,
      }}
    >
      {props.children}
    </detailsContext.Provider>
  );
}

export default DetailsState;
