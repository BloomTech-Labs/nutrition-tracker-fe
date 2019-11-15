import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AppWrapper from "../../Global/styled/components/AppWrapper";
import DailyLog from "../../DailyLog/index";
import PrivateRoute from "../../PrivateRoute/index";

class AppBar extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>React Router Mini</h1>
          <div>
            <Link to="/">
              <a href="">DailyLog</a>
            </Link>
          </div>
          <div>
            <Link to="/recipies">
              <a href="">recipies</a>
            </Link>
          </div>
          <div>
            <Link to="/Progress">
              <a href="">Progress</a>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/Settings">
            <img src="https://img.icons8.com/carbon-copy/100/000000/settings.png" />
          </Link>
        </div>
      </div>
    );
  }
}

export default AppBar;
