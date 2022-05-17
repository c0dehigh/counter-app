import propTypes from 'prop-types'

const Counter = ({inc,dec,reset,count}) => {

  return(

      <div>
        <h1 style={{color: count ===0? 'red' : 'green'}}>{count}</h1>
        <button onClick={inc}>+</button>
        <button style={{backgroundColor: count === 0 ? 'red' : 'teal'}} onClick={dec} disabled={count === 0}>-</button>
        <br/>
        <button onClick={reset}>Reset</button>
      </div>
  )
}


Counter.propTypes = {
    inc:propTypes.func,
    dec:propTypes.func,
    reset:propTypes.func,
    count: propTypes.number
}
export default Counter;
