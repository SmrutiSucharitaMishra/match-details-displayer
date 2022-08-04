/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import detailsContext from "../Contexts/DetailsContext";
function Table() {
  const {
    start,
    matchType,
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
  } = React.useContext(detailsContext);
  useEffect(() => {
    setDetails([
      ...details,
      {
        start,
        matchType,
        end,
        location,
        tournamentname,
        comment,
        tn1,
        tn2,
        tv1,
        tv2,
      },
    ]);
    
  }, []);
  return (
    <div>
      {details.length > 0 ? (
        <div  className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Team 1</th>
                <th scope="col">Team 2</th>
                <th scope="col">Match Type</th>
                <th scope="col">Tournament Name</th>
                <th scope="col">Start Date and Time</th>
                <th scope="col">End Date and Time</th>
                <th scope="col">Location</th>
                <th scope="col">Comments</th>
              </tr>
            </thead>
            <tbody style={{ overflow: "scroll" }}>
              {details.map((match, index) => {
                let tn = match.tournamentname;
                if (!match.tournamentname) {
                  tn = " ";
                }
                const s = new Date(match.start).toDateString();
                const e = new Date(match.end).toDateString();
                return (
                  <tr key={match.tn1 + match.tn2}>
                    <th scope="row">{index + 1}</th>
                    <td>{match.tn1}</td>
                    <td>{match.tn2}</td>
                    <td>{match.matchType}</td>
                    <td>{tn}</td>
                    <td>{s}</td>
                    <td>{e}</td>
                    <td>{match.location}</td>
                    <td>{match.comment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No Matches Scheduled Yet</h2>
      )}

      <Link to="/matchdetails">
        <button type="button" className="btn btn-danger pre">
          Schedule a match
        </button>
      </Link>
    </div>
  );
}

export default Table;
