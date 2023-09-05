import React from "react";
var initState = {
    name: "",
    age:"",
    address:"",
    department:"",
    salary:"",
    martialStatus:"",
}

function Form() {
    const [formData, setFormData] = React.useState(initState);
    const {name,age,address,department,salary,maritalStatus} = formData;
    const [data,setData] = React.useState([]);

    const handleChange= (e)=>{
        let {name, value, checked, type} = e.target;
        value = type === "checkbox" ? checked:value;
        setFormData((prev)=>({...prev,[name]: value}))
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        let z = [...data,formData];
        setData(z);
        console.log(z);
        addData();
        async function addData(){
        let res=await fetch(`http://localhost:8000/profile`,{
        method:"POST",
        body : JSON.stringify(formData),
        headers : {
            "Content-Type" : "application/json",
        }});
        console.log("ckajb");
        }

    }
    return <div>
        <h2>Form</h2>
        <form onSubmit={onSubmit}>
        <label>
            Name
            <input name="name" placeholder='Enter Your Name' onChange={handleChange} type="text" value={name}/>
        </label>
        <br/>
        <label>
            Age
            <input name="age" placeholder='Enter Your Name' onChange={handleChange} type="text" value={age}/>
        </label>
        <br/>
        <label>
            Address
            <input name="address" placeholder='Enter Your Name' onChange={handleChange} type="text" value={address}/>
        </label>
        <br/>
        <select name='department'value={department} onChange={handleChange}>
            <option value="IT">IT</option>
            <option value="BPO">BPO</option>
        </select><br/>
        <label>
            Salary
            <input name="salary" placeholder='Enter Your Name' onChange={handleChange} type="text" value={salary}/>
        </label>
        <br/>
        <label>
            Marital Status
            <input type="checkbox" name='maritalStatus' checked={maritalStatus} onChange={handleChange}/>
        </label><br/>
        <input type="submit"/>
        </form>
    </div>
}

export default Form;