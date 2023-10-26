import React from 'react'
import { NavLink } from 'react-router-dom'
// import Layout from '../Component/Layout'


function Projectongoing() {
  return (
    <div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-md-3 mt-3">

            <ul className="list-group">
              <h1 className='text-center'>Liaqat Ali</h1>
              <NavLink to='/' className="list-group-item">Dashboard</NavLink>
              <NavLink to='/pongoing' className="list-group-item">Projects</NavLink>
              <NavLink to='/analysis' className="list-group-item">Attendance</NavLink>
              <NavLink to='/export' className="list-group-item">KB information</NavLink>
              <NavLink to='/flex' className="list-group-item">Points</NavLink>
              <NavLink to='/theme' className="list-group-item">Feedback</NavLink>
            </ul>

          </div>
          <div className="col-md-9 projectmain">
            {/* <Layout> */}
              <div className='attendancemain read'>

                <h1 className='h1head'>Projects</h1>

                <div className='d-flex justify-content-around'>

                  <NavLink className='btn btn-primary projectbtn' to='/tp'>Total Projects (0)</NavLink>
                  <NavLink className='btn btn-primary projectbtn' to='/pongoing'>On-going</NavLink>
                  <NavLink className='btn btn-primary projectbtn' to='/pcompleted'>Completed</NavLink>

                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>

                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>online job portal</td>
                   
                        <td>80% done</td>
                   
                      </tr>
                      <tr>
                        <td>student management system</td>
                       
                        <td>70% done</td>
                   
                      </tr>
                    
</tbody>

                </table>
              </div>
            {/* </Layout> */}
          </div>
        </div>
      </div>




    </div>
  )
}

export default Projectongoing
