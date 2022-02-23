import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';


function App() {

  const [members, setMembers] = useState([]);
  const [data, setData] = useState({name: '', email: '', role: ''});

  const onSubmit = () => {
    setMembers([data, ...members]);
    setData({name: '', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setData({...data, [name]: value});
  }
  return (
    <div className="App">

     <Form member={data} change={onChange} submit={onSubmit}/>
      
     {members.map((member, idx) => {
       return (
         <div key={idx}>
           {member.name}, {member.role}, {member.email}
           </div>
       )
     })}

    </div>
  );
}

export default App;
