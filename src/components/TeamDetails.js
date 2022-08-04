/* eslint-disable no-unused-vars */
import React from "react";
import "./details.css";
import { Link } from "react-router-dom";
import detailsContext from "../Contexts/DetailsContext";
const TeamDetails = () => {
  const { tn1, tn2, tv1, tv2, settn1, settn2, settv1, settv2 } =
    React.useContext(detailsContext);
  return (
    <>
      <h3>Enter Team Details</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Team 1 name
              </label>
              <input
                onChange={(e) => {
                  settn1(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={tn1}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Select Whether Home or Away</label>
            <select
              value={tv1}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                settv1(e.target.value);
              }}
            >
              <option value="none">Choose Home/Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>
          </div>
        </div>
        <div className="vs">VS.</div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Team 2 name
              </label>
              <input
                value={tn2}
                onChange={(e) => {
                  settn2(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Select Whether Home or Away</label>
            <select
              value={tv2}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                settv2(e.target.value);
              }}
            >
              <option value="none">Choose Home/Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>
          </div>
          <div className="row">
            <div className="col-sm-6">
              {" "}
              <Link to="/details">
                <button type="button" className="btn btn-secondary pre">
                  Previous
                </button>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/">
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
};

export default TeamDetails;
