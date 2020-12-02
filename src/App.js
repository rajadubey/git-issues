import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Redirect, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "facebook",
      repository: "react",
      issues: "",
      forksCount: '',
      starCount: '',
      watchersCount: ''
    };
  }
  handleUser = (type, value) => {
    if (type === "user") this.setState({ user: value });
    else if (type === "repo") this.setState({ repository: value });
  };
  fetchData = () => {
    axios.get(`https://api.github.com/repos/${this.state.user}/${this.state.repository}`).then((response)=>{
      console.log(response);
      this.setState({
        forksCount: response.data.forks,
        starCount: response.data.stargazers_count,
        watchersCount: response.data.watchers_count
      })
    });


    axios
      .get(
        `https://api.github.com/repos/${this.state.user}/${this.state.repository}/issues`
      )
      .then((response) => {
        this.setState({
          issues: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
    console.log(this.state.data);
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/issues"
            render={(props) => (
              <Home
                data={this.state}
                handleUser={this.handleUser}
                fetchData={this.fetchData}
                {...props}
              />
            )}
          />
          <Redirect to="/issues" />
        </Switch>
      </>
    );
  }
}
