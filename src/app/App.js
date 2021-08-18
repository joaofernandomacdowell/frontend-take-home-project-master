import React, { Component } from "react";
import Countries from "../pages/Countries";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Countries />
      </div>
    );
  }
}

export default App;
