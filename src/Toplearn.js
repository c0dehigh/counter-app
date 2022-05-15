import Counter from "./components/Counter";

import './Toplearn.css'
const Toplearn = () => {
    return (
        <div className="Toplearn">
            <h1>شمارنده من</h1>
            <br/>
            <Counter count={3} firstname= "Hamed"/>
            <Counter count={10}>
                این شمارنده من است
            </Counter>
        </div>
    )
}

export default Toplearn
