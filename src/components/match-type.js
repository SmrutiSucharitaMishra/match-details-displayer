/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "react-router-dom";
import "./match-type.css";
import detailsContext from "../Contexts/DetailsContext";
function MatchType() {
  const { matchType, setmatchType } = React.useContext(detailsContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <label className="form-label">
            <h3>Choose Match Type</h3>
          </label>
          <select
            value={matchType}
            onChange={(event) => {
              setmatchType(event.target.value);
            }}
            className="form-select"
          >
            <option value="none">
              Choose Match Type (default - Tournament)
            </option>
            <option value="tournament">Tournament</option>
            <option value="Friendly">Friendly</option>
          </select>
        </div>
        <div className="col-sm-6"> </div>
        <div className="col-sm-6">
          <Link to={`/details`}>
            <button type="button" className="btn btn-success">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MatchType;
