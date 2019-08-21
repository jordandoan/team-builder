import React, {useState} from "react";

const Form = (props) => {
    let initial = {
        name: "",
        email: "",
        role: "",
    }

    let [formData, setForm] = useState(initial);
    let handleSubmit = (event) => {
        event.preventDefault();
        props.setMembers([...props.members, formData]);
        props.history.push("/");
    }
    
    let handleChange = (event) => {
        setForm({...formData, [event.target.name]: event.target.value})
        console.log(formData);
    }
    return (
        <div>
            I am the forms page
            <form onSubmit={handleSubmit}>
                <label> Name
                 <input type="text" name="name" value={formData.name} onChange={(event) => handleChange(event)}/>
                </label>
                <label> Email
                 <input type="text" name="email" value={formData.email} onChange={(event) => handleChange(event)}/>
                </label>
                <label> Role
                 <input type="text" name="role" value={formData.role} onChange={(event) => handleChange(event)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form;