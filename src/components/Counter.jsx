import {Component} from "react";


const Counter = (props) => {
    const {count} = props
    return (
        <div>
            <p>
                شمارنده :    {count}
            </p>
        </div>
    )
}

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


export default Counter