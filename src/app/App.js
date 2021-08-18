import React, { Component } from "react";
import CountryCard from "../components/CountryCard";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CountryCard />
      </div>
    );
  }
}

export default App;
