import React from 'react';

const initState={
    name : "",
    gender : "",
    role : "",
    maritalStatus : ""
}
function Form(){
    const [formData, setFormData] = React.useState(initState);
    const {name,gender,role,maritalStatus} = formData;

    const handleChange= (e)=>{
        let {name, value, checked, type} = e.target;
        value = type === "checkbox" ? checked:value;
        setFormData((prev)=>({...prev,[name]: value}))
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }

    return (<div>
        <h2>Form</h2>
        <form onSubmit={onSubmit}>
        <label>
            Name
            <input name="name" placeholder='Enter Your Name' onChange={handleChange} type="text" value={name}/>
        </label>
        <br/>
        <select name='gender' value={gender} onChange={handleChange}>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select><br/>
        <select name='role' value={role} onChange={handleChange}>
            <option value="Sr">Sr. Dev</option>
            <option value="Jr">Jr. Dev</option>
        </select><br/>
        <label>
            Marital Status
            <input type="checkbox" name='maritalStatus' checked={maritalStatus} onChange={handleChange}/>
        </label><br/>
        <input type="submit"/>
        </form>
    </div>)
}

export default Form;