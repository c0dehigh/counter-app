import Counter from "./components/Counter";

import './Toplearn.css'
const Toplearn = () => {
    return (
        <div className="Toplearn">
            <h1>شمارنده من</h1>
            <br/>
            <Counter count={3}/>
        </div>
    )
}

export default Toplearn
