import React from 'react'
import '../Style.css'

const UserList = (props) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>*</th>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
     {props.users.map((item,index)=>(
                <tr key={item.id}>
                    <td>{index+1}.</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.number}</td>
                    <td>{item.email}</td>
                    <td><button className='tableBtnEdit' onClick={()=>props.handleEdit(item)}>Edit</button></td>
                    <td><button className='tableBtnDelete' onClick={()=>props.handleDelete(item.id)}>Delete</button></td>
                </tr>
     ))}

            </tbody>
        </table>
    </div>
  )
}

export default UserList