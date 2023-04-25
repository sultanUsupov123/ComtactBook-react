import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import EditUser from "./components/EditUser/EditUser";
import "./components/Style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [editUser, setEditUser] = useState({});
  const handleUser = (newObj) => {
    let newUsers = [...users];
    newUsers.push(newObj);
    setUsers(newUsers);
    // console.log(newUsers);
  };
  // console.log(editUser);
  //! delete
  const handleDelete = (id) => {
    let newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
  };
  //! edit
  const handleEdit = (userToEdit) => {
    setModal(true);
    setEditUser(userToEdit);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleSaveUser = (updatedUser) => {
    const newUsers = users.map((item) => {
      if (item.id === updatedUser.id) {
        return updatedUser;
      }
      return item;
    });
    setUsers(newUsers);
    handleCloseModal();
  };
  return (
    <div>
      <h1>CONTACTBOOK</h1>
      <AddUser handleUser={handleUser} />
      <UserList
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditUser
          editUser={editUser}
          handleCloseModal={handleCloseModal}
          handleSaveUser={handleSaveUser}
        />
      ) : null}
    </div>
  );
};

export default App;
