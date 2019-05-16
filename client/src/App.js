import React, { Component } from "react";
import Burger from "./components/Burger";
import { FormBtn, Input } from "./components/Form";
import axios from "axios";
import API from "./utils/API"

// import Container from "./components/Container";



class App extends Component {

  state = {
    burgers: [],
    name: "",
    devoured: false,

  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBurgers();
  }

  // Loads all books  and sets them to this.state.books
  loadBurgers = () => {
    console.log("sending request api");
    axios.get("/burgers")
      .then(res => {
        console.log("got results from API");
        console.log(res);
        this.setState({ burgers: res.data, name: "", devoured: res.devoured })
      }

      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBurgers = id => {
    API.deleteBurger(id)
      .then(res => this.loadBurgers())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  };

  changeBurgerState = (e) => {
    console.log(e.target.id)
    axios.put("/burgers/update", {
      id: e.target.id,
      devoured: this.state.devoured
    });

  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {

      axios.post("/burgers/add", {
        name: this.state.name,
        devoured: this.state.devoured

      })
        .then(res => this.loadBurgers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div >
          {this.state.burgers && this.state.burgers.map(burger => {
            return (
              <Burger name={burger.name} key={burger.id} id={burger.id} devoured={burger.devoured}
                _handleClick={this.changeBurgerState}
              >
                {this.state.devoured ? "" : "not"}
              </Burger>

            );
          })};

        </div>

        <div>
          <form>

            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Enter a name of burger"
            />


            <FormBtn
              disabled={!(this.state.name)}
              onClick={this.handleFormSubmit}
              onChange={this.handleInputChange}
            >
              Submit Burger
           </FormBtn>
          </form>
        </div>
      </div>

    )
  }
}

export default App;