import React, { Component } from "react";
import './App.css'
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Redirect, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "facebook",
      repository: "react",
      data: "",
      pageUrl: "",
      pages: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/repos/${this.state.organization}/${this.state.repository}/issues`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log(this.state.data);
  }
  render() {
    return (
      <>
        <Switch>
          <Route path='/issues' render={(props)=><Home data={this.state} {...props}/>}/>
        </Switch>
      </>
    );
  }
}