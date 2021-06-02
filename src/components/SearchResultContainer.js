import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import "./table.css"

class SearchResultContainer extends Component {
  state = {
    shadowResults: [],
    shadowB: [],
    results: [],
    search: "",
    state1: false,
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    API.search()
      .then(res => {
        this.setState({ ...this.state, results: res.data.results, shadowResults: res.data.results });
      }
      )
      .catch(err => console.log(err));
  };


  handleAction = (sortKey) => {
    var b = this.state.shadowResults.sort((a, b) => {
      var valueA = sortKey === "name" ? a.name.first.toUpperCase() : a[sortKey].toUpperCase();
      var valueB = sortKey === "name" ? b.name.first.toUpperCase() : b[sortKey].toUpperCase();
      if (valueA < valueB) {
        return this.state.state1 === false ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.state.state1 === false ? 1 : -1;
      }
      return 0;
    })
    const flipState = !this.state.state1;
    this.setState({ shadowB: b, state1: flipState });
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={(e) => this.setState({ [e.target.name]: e.target.value })}
        />
        <div className="container">
          <h2>Employee Directory</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <button className="col col-1">Picture</button>
              <button onClick={() => this.handleAction("name")} className="col col-2">Name</button>
              <button onClick={() => this.handleAction("gender")} className="col col-3">Gender</button>
              <button className="col col-4">Location</button>
            </li>
            <ResultList
              shadowResults={this.state.shadowResults.filter(value => value.name.first.toLowerCase().search(this.state.search.toLowerCase()) !== -1)} />
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
