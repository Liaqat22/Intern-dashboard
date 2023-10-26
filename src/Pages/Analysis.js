import React from 'react'
import Main from './Main'
// import Layout from '../Component/Layout'
import Leave from './Leave'
import { NavLink } from 'react-router-dom'


function Analysis() {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3  mt-3">
            <Main />
          </div>
          <div className="col-md-9">
            {/* <Layout > */}

              <div className='attendancemain read'>
                <div className="container">
                  <div className="row">
                    <div className="col-md-10">
                      <NavLink className='btn btn-info card-text m-1'>Attendance</NavLink><span><NavLink className='btn btn-info card-text  m-1'>Leave</NavLink></span>
                    </div>
                    <div className="col-md-2">
                      {/* <button className='btn btn-info card-text' >+ Leave</button> */}
                      <Leave/>
                    </div>
                  </div>

                  <table className="table tablewrap">
                    <thead >
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">In-Time</th>
                        <th scope="col">Off-Time</th>
                        <th scope="col">Hours worked</th>
                        <th scope="col">Work</th>
                        <th scope="col">Holiday reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>	2023-07-17</td>
                        <td>9:00 am</td>
                        <td>6:00 pm</td>
                        <td>8 hours</td>
                        <td>pending</td>
                        <td>-</td>
                      </tr>
                    
                      <tr>
                      <td>	2023-08-17</td>
                        <td>9:00 am</td>
                        <td>6:00 pm</td>
                        <td>8 hours</td>
                        <td>pending</td>
                        <td>-</td>
                      </tr>
                    
                      <tr>
                      <td>	2023-09-17</td>
                        <td>9:00 am</td>
                        <td>6:00 pm</td>
                        <td>8 hours</td>
                        <td>Completed</td>
                        <td>-</td>
                      </tr>
                    

                    </tbody>
                  </table>
                </div>



              </div>

            {/* </Layout> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analysis
