import { Component } from "react";
import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(5);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header>
        <h1>Counter</h1>
      </header>
      <Counter />
    </div>
  );
};

// class App extends Component {
//   state = {
//     count: 20,
//     name: "Alex",
//     family: "Morfi",
//   };
//   render() {
//     const { count, name, family } = this.state;
//     return (
//       <div>
//         <header>
//           <h1>شمارنده من</h1>
//         </header>
//         <p>{count}</p>
//         <p>{name}</p>
//         <p>{family}</p>
//       </div>
//     );
//   }
// }

export default App;
