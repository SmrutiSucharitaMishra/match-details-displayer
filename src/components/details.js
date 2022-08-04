/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./details.css";
import { Link } from "react-router-dom";
import detailsContext from "../Contexts/DetailsContext";
function Details() {
  const {
    start,
    end,
    location,
    tournamentname,
    comment,
    setStart,
    setEnd,
    setLocation,
    setTournamentname,
    setComment,
    matchType,
  } = React.useContext(detailsContext);
  return (
    <>
      <h3>Enter Match Details</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Start date and time
              </label>
              <input
                value={start}
                onChange={(e) => {
                  setStart(e.target.value);
                }}
                type="datetime-local"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                End date and time
              </label>
              <input
                value={end}
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
                type="datetime-local"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Match Location
              </label>
              <input
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            {matchType !== "Friendly" && (
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Tournament name
                </label>
                <input
                  value={tournamentname}
                  onChange={(e) => {
                    setTournamentname(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <label htmlFor="floatingTextarea">Comments</label>

            <textarea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
          </div>
          <div className="col-sm-6">{"  "}</div>
          <div className="row">
            <div className="col-sm-6">
              <Link to="/matchdetails">
                <button type="button" className="btn btn-secondary pre">
                  Previous
                </button>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/teamdetails">
                <button type="button" className="btn btn-success">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
