import React, {useState} from "react";

const Form = (props) => {
    let initial = {
        name: "",
        email: "",
        role: "",
    }
    if (props.memberToEdit){
        initial = props.memberToEdit;
    }

    let [formData, setForm] = useState(initial);
    let handleSubmit = (event) => {
        if (props.memberToEdit) {
            props.editMember(formData);
        } else {
            props.setMembers([...props.members, formData]);
        }
        props.history.push("/");
    }
    let handleChange = (event) => {
        setForm({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div>
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