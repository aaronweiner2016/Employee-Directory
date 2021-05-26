import React from "react";

const styles = {
  margin: {
    marginLeft: "40%",
    marginRight: "40%",
    marginBottom: "50px",
    marginTop: "50px"
  }
};

function SearchForm(props) {
  return (
    <form>
      <div style={styles.margin} className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />

      </div>
    </form>
  );
}

export default SearchForm;