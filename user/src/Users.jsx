import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const[users, setUsers] = useState([{
        Name: "jas",
        Email: "js@gmail.ai",
        Age: "20"
    }])
  return (
    <div className='d-flex bg-primay justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success' > Add +</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>[
                        <tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td>
                            <Link to="/update" className='btn btn-success' > update  +</Link>
                                <button>Delete </button></td>
                        </tr>
                    ])}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users