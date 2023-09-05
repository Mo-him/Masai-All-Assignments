import {useState} from "react"

function Count(){

    let [state, setState] = useState(0);

    const IncreaseCount =()=> {
        setState(state + 1);
    }

    return(
        <div>
            <h1>Count is {state}</h1>
            <button onClick={IncreaseCount}>Increase Count</button>
        </div>
    )
}

export default Count;