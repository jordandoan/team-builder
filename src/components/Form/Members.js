import React from "react";

const Members = (props) => {
    let handleClick = (member, index) => {
        props.setEdit({...member, ["index"]: index});
        props.history.push("/form");
    }
    return (
        <div>I am the members list.
            {props.members.map((member,index) => 
                <div key={index}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <button onClick={() => handleClick(member,index)}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default Members;