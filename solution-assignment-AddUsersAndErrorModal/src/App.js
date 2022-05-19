import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

const STARTING_USERS = [
  { id: Math.random().toString(), name: "Bob", age: 70 },
  { id: Math.random().toString(), name: "Anne", age: 55 },
];

function App() {
  const [users, setUsers] = useState(STARTING_USERS);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onUserAdd={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
