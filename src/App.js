import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    const newItem = {
      //create item with unique id
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of list of items
    const list = [...this.state.list];
    //add new items to list

    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== id);
    this.setState({ list: updateList });
  }
  render() {
    return (
      <>
      <h1 style={{textAlign:"center"}}>What's Your Plan Today?</h1>
      <hr style={{width:"100px"}}/>
      <div className="to-do-content">
        <div>
          <h3>Add an item...</h3>
          <br />
          <input
            type="text"
            placeholder="type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          ></input>
          <button onClick={() => this.addItem()}>Add</button>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </>
    );
  }
}
export default App;
