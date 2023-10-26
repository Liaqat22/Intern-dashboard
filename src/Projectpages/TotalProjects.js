import React from 'react'
import { NavLink } from 'react-router-dom'
import Main from '../Pages/Main'
import Layout from '../Component/Layout'

function TotalProjects() {
  return (
    <div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3  mt-3">
            <Main />
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

                <table className="table tablewrap">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>online job portal</td>
                        <td>	2023-07-17</td>
                        <td>3 days</td>
                        <td>completed</td>
                   
                      </tr>
                      <tr>
                        <td>student management system</td>
                        <td>	2023-17-17</td>
                        <td>5 days</td>
                        <td>completed</td>
                   
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

export default TotalProjects
