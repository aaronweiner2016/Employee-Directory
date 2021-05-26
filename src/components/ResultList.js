import React from "react";

const styles = {
  margin: {
    marginRight: "10px",
  }
}

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="table-row" key={result.login.uuid}>
          <img style={styles.margin} className="col col-1" data-label="Job Id" src={result.picture.medium} />
          <div className="col col-2" data-label="Customer Name">{result.name.first} {result.name.last}</div>
          <div className="col col-3" data-label="Amount">{result.gender}</div>
          <div className="col col-4" data-label="Payment Status">{result.location.city}</div>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
