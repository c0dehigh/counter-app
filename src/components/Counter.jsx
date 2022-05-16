import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      name: " hamed",
    };
  }

  changeName = () => {
    this.setState({ name: "Leyla" });
  };
  render() {
    return (
      <div>
        <p>My Counter</p>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default Counter;
