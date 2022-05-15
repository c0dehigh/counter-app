import { Component } from "react";

const Counter = (props) => {
  const { count, firstname, children } = props;
  console.log(props);
  return (
    <div>
      <p>
        شمارنده : {count}
        <br />
        نام : {firstname}
      </p>
      <br />
      <p>{children}</p>
    </div>
  );
};

// class Counter extends Component {
//     render() {

//         const {count} = this.props
//         return(
//                      <div>
//              <p>
//                  شمارنده :    {count}
//             </p>
//          </div>
//         )
//     }
// }

export default Counter;
