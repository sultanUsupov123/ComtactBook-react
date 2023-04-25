import React from 'react'

const EditUser = (props) => {
    const item = props.editUser;
  return (
    <div className='bigModal'>
        <div className='modal'>
            <div onClick={props.handleCloseModal} className='close'>X</div>
            <input type="text" onChange={(e)=>{item.name=e.target.value;}}  defaultValue={item.name}/>
            <input type="text"  defaultValue={item.surname} onChange={(e)=>{item.surname=e.target.value;}}/>
            <input type="text" defaultValue={item.number} onChange={(e)=>{item.number=e.target.value;}}/>
            <input type="text" defaultValue={item.email} onChange={(e)=>{
            item.email=e.target.value;}}/>
            <button onClick={()=>props.handleSaveUser(item)}>save</button>
        </div>
    </div>
  )
}

export default EditUser