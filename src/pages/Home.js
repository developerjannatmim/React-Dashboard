import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    fetch('http://127.0.0.1:8000/api/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setUsers(res.data?.users);
    })
    .catch((error) => {
      console.log(error);
      setUsers(null);
    });
  }
  return (
    <div>
      <h2>Users List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td></td>
          </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Home