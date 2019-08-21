import React from "react";

const Members = (props) => {
    return (
        <div>I am the members list.
            {props.members.map(member => 
                <div>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            )}
        </div>
    )
}

export default Members;