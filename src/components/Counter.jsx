import {Component} from "react";


// const Counter = () => {
//     return (
//         <div>
//             <p>
//                 شمارنده :    {Math.floor(Math.random() * 1000)}
//             </p>
//         </div>
//     )
// }

class Counter extends Component {
    render() {
        return(
                     <div>
             <p>
                 شمارنده :    {Math.floor(Math.random() * 1000)}
            </p>
         </div>
        )
    }
}


export default Counter