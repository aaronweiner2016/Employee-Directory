import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import "./table.css"

class SearchResultContainer extends Component {
  state = {
    shadowResults: [],
    results: [],
    search: "",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.search();
  }

  search = () => {
    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ ...this.state, results: res.data.results, shadowResults: res.data.results });
      }
      )
      .catch(err => console.log(err));
  };

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
              <button className="col col-2">Name</button>
              <button className="col col-3">Gender</button>
              <button className="col col-4">Location</button>
            </li>
            <ResultList results={this.state.results.filter(value => value.name.first.search(this.state.search) !== -1)} />
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
