import { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    name: "Hamed",
    family: "Zibandeh",
  };
  render() {
    const { count, name, family } = this.state;
    return (
      <div>
        <header>
          <h1>شمارنده من</h1>
        </header>
        <p>{count}</p>
        <p>{name}</p>
        <p>{family}</p>
      </div>
    );
  }
}

export default App;
