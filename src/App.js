import { Component } from "react";
import { useState } from "react";



const App = () => {
  const [count,setCount] = useState(5)

  
  return (
    <div>
      <header>
        <h1>شمارنده من</h1>
      </header>
      <p>{count}</p>
      
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
