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
    state2: false
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


  handleAction = () => {
    if (this.state.state1 == false) {
      var b = this.state.shadowResults.sort((a, b) => {
        var nameA = a.name.first.toUpperCase();
        var nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      this.setState({ shadowB: b })
      this.state.state1 = true;
      return;
    }
    if (this.state.state1 == true) {
      var b = this.state.shadowResults.sort((a, b) => {
        var nameA = a.name.first.toUpperCase();
        var nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      })
      this.setState({ shadowB: b })
      this.state.state1 = false;
      return;
    }
  }

  genderSort = () => {
    if (this.state.state2 == false) {
      var c = this.state.shadowResults.sort((a, b) => {
        var genderA = a.gender.toUpperCase();
        var genderB = b.gender.toUpperCase();
        if (genderA <= genderB) {
          return -1;
        }
        if (genderA >= genderB) {
          return 1;
        }
        return 0;
      })
      this.setState({ shadowB: c })
      this.state.state2 = true;
      return;
    }
    if (this.state.state2 == true) {
      var c = this.state.shadowResults.sort((a, b) => {
        var genderA = a.gender.toUpperCase();
        var genderB = b.gender.toUpperCase();
        if (genderA <= genderB) {
          return 1;
        }
        if (genderA >= genderB) {
          return -1;
        }
        return 0;
      })
      this.setState({ shadowB: c })
      this.state.state2 = false;
      return;
    }
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
              <button onClick={this.handleAction} className="col col-2">Name</button>
              <button onClick={this.genderSort} className="col col-3">Gender</button>
              <button className="col col-4">Location</button>
            </li>
            <ResultList
              results={this.state.results.filter(value => value.name.first.toLowerCase().search(this.state.search.toLowerCase()) !== -1)}
              shadowResults={this.state.shadowResults.filter(value => value.name.first.toLowerCase().search(this.state.search.toLowerCase()) !== -1)} />
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
