import { useEffect, useState } from "react";
import "../Styles/FetchAPI.css";

function FetchAPI() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

 
  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }
   useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE
  function addUser() {
    if (!newUser.trim()) return;

    const user = {
      id: Date.now(),
      name: newUser,
      email: `${newUser}@gmail.com`,
    };

  setUsers((prevUsers) => [...prevUsers, user]);
    setNewUser("");
  }

  // DELETE
  function deleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  }

  // UPDATE
  function updateUser(id) {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, name: user.name + " Updated" }
        : user
    );

    setUsers(updatedUsers);
  }
  

  return (
 <div className="fetch-api-container">
  <h1>Users CRUD App</h1>

  <div className="fetch-api-input-section">
    <input
      type="text"
      placeholder="Enter user name"
      value={newUser}
      onChange={(e) => setNewUser(e.target.value)}
    />

    <button onClick={addUser}>
      Add User
    </button>
  </div>

  <div className="fetch-api-users-grid">
    {users.map((user) => (
      <div className="fetch-api-card" key={user.id}>
       <h3>{user.name}</h3>
<p>Username: {user.username || "N/A"}</p>
<p>Email: {user.email}</p>
<p>Street: {user.address?.street || "N/A"}</p>

        <div className="fetch-api-btn-group">
          <button
           className="fetch-api-edit-btn"
            onClick={() => updateUser(user.id)}
          >
            Update
          </button>

          <button
           className="fetch-api-delete-btn"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default FetchAPI;