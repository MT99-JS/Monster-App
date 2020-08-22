import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/cardList";
import "./App.css";
import { SearchBox } from "./components/search/search";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //  string: "Hello Taimoor",
    //};
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      // <div className="App">
      //<header className="App-header">
      // <img src={logo} className="App-logo" alt="logo" />
      // <p>{this.state.string}</p>
      // <button
      //   onClick={() =>
      //    this.setState({ string: "Hello MERN STACK DEVELOPER" })
      //  }
      // >
      //   Change Text
      // </button>
      // </header>
      // </div>
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
