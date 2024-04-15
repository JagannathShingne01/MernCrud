import React from 'react'

const UpdateUser = () => {
  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <form>
            <h2>Update User</h2>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="ENter Nm" className="form-control" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="EMail" id="" className="form-control" />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" placeholder="Age" id="" className="form-control"/>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser