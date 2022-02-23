
import React from "react";

const Form = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value)
    }

   const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label name="name">Name</label>
            <input
                placeholder="Enter new member's name"
                value={props.member.name}
                name = "name"
                onChange={handleChange}
            />
            <label name="email">Email</label>
            <input 
                placeholder="Enter new member's email"
                value={props.member.email}
                name="email"
                onChange={handleChange}
            />
            <label name= "role">Role</label>
            <input
                placeholder="Enter new member's role"
                value={props.member.role}
                name="role"
                onChange={handleChange}
            />
            <input type="submit" value="Create new team." />
        </form>

    )

}

export default Form;