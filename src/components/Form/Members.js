import React from "react";
import styled from "styled-components";

const Members = (props) => {
    let handleClick = (member, index) => {
        props.setEdit({...member, ["index"]: index});
        props.history.push("/form");
    }
    let Container = styled.div`
        display:flex;
        width:1000px;
        justify-content:center;
        margin:auto;
        flex-wrap:wrap;
    `
    let Card = styled.div`
        background-color:lightblue;
        width:300px;
        height:200px;
        border-radius:10px;
        margin:5px;
    `
    return (
        <div>
            <h2>Members</h2>
            <Container>
            {props.members.map((member,index) => 
                <Card key={index}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <button onClick={() => handleClick(member,index)}>Edit</button>
                </Card>
            )}
            </Container>
        </div>
    )
}

export default Members;