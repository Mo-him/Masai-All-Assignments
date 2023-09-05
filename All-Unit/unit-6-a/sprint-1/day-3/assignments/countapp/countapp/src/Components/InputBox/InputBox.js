import {useState} from "react"

function InputBox(){

    const [state, setState] = useState("No Data");

    const add = () =>{
        setState(document.getElementById("input").value)
    }


    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>TODO COMPONENTS</h1>
            <input id="input" type = "text" placeholder="Enter contents" />
            <button onClick={add}>ADD</button>
            <p>{state}</p>
        </div>
    )
}

export default InputBox