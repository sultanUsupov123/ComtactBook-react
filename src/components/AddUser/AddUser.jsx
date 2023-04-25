import React, { useState } from 'react';
import '../Style.css'

const AddUser = (props) => {
    // хранение данных usera, которую хотим добавить
    const[name,setName]=useState('')
    const[surname,setSurname]=useState('')
    const[number,setNumber]=useState('')
    const[email,setEmail]=useState('')

    const handleAdd = ()=>{
        if(!name || !surname || !number || !email){
            alert('input is empty');
            return;
        }
        const newUser={
            name:name,
            surname:surname,
            number:number,
            email:email,
            id:Date.now(),
        }
        props.handleUser(newUser);
        setName('');
        setSurname('');
        setNumber('');
        setEmail('');
    }
  return (
    <div className='addUserBlock'>
        <input placeholder='Enter name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='Enter surname' type='text' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
        <input placeholder='Enter number' type='text' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <input placeholder='Enter email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button className='addBtn' onClick={handleAdd}>add</button>
    </div>
  )
}

export default AddUser