import React, { Component } from "react";
import Header from "./Components/layout/Header";
import { Provider } from "react-redux";
import { Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./Redux/store";
import Dashboard from "./Components/campaign/Dashboard";
import Alert from "./Components/layout/Alerts";
import "bootstrap/dist/css/bootstrap.min.css";

//alert options
const alertOption = {
  timeout: 3000,
  position: "bottom center",
  containerStyle: { width: "100%" },
  transition: transitions.SCALE
};
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
          <div>
            <div className="container">
              <Dashboard />
            </div>
          </div>

      </Provider>
    );
  }
}

export default App;
