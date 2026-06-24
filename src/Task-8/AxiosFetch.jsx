import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AxiosFetch.css";

function AxiosFetch() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalUsers = users.length;

  const totalCities = new Set(
    users.map((user) => user.address.city)
  ).size;

  const totalCompanies = new Set(
    users.map((user) => user.company.name)
  ).size;


  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setTimeout(() => {
        setUsers(response.data);
        setLoading(false);
      }, 3000); // 3 seconds delay
    } catch (error) {
      console.log(error);
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  fetchData();
}, []);




if (loading) {
  return (
    <div className="axios-loader-container">
      <div className="axios-loader"></div>
      <h2>Loading Users...</h2>
    </div>
  );
}

  if (error) {
    return <h2 className="axios-error">{error}</h2>;
  }

 return (
  <div className="axios-container">
    <h1>Axios User Dashboard</h1>

    {/* Search */}
    <div className="axios-search-box">
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Statistics */}
    <div className="axios-stats">
      <div className="axios-stat-card">
        <h2>{totalUsers}</h2>
        <p>Total Users</p>
      </div>

      <div className="axios-stat-card">
        <h2>{totalCities}</h2>
        <p>Cities</p>
      </div>

      <div className="axios-stat-card">
        <h2>{totalCompanies}</h2>
        <p>Companies</p>
      </div>
    </div>

    {/* User Cards */}
    <div className="axios-grid">
      {filteredUsers.map((user) => (
        <div className="axios-card" key={user.id}>
          
          <img
            className="axios-avatar"
            src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
            alt={user.name}
          />

          <h2>{user.name}</h2>

          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Website:</strong> {user.website}
          </p>

          <button
            className="axios-details-btn"
            onClick={() => setSelectedUser(user)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>

    {/* Modal */}
    {selectedUser && (
      <div className="axios-modal-overlay">
        <div className="axios-modal">
          <h2>{selectedUser.name}</h2>

          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>

          <p>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>

          <p>
            <strong>Website:</strong> {selectedUser.website}
          </p>

          <p>
            <strong>City:</strong> {selectedUser.address.city}
          </p>

          <p>
            <strong>Street:</strong> {selectedUser.address.street}
          </p>

          <p>
            <strong>Company:</strong> {selectedUser.company.name}
          </p>

          <button
            className="axios-close-btn"
            onClick={() => setSelectedUser(null)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default AxiosFetch;