import React from "react";

const styles = {
  margin: {
    marginRight: "10px",
  }
}

function ResultList(props) {

  return (
    <ul className="list-group">
      {props.shadowResults.map(result => (
        <li className="table-row" key={result.login.uuid}>
          <img className="col col-1" data-label="Job Id" src={result.picture.medium} />
          <div className="col col-2 d-flex justify-content-center" data-label="Name">{result.name.first} {result.name.last}</div>
          <div className="col col-3 d-flex justify-content-center" data-label="Gender">{result.gender}</div>
          <div className="col col-4 d-flex justify-content-center" data-label="Location">{result.location.city}</div>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
