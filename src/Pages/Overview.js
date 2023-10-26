import React from 'react'
import Main from './Main'
import Piechart from './Piechart'
import { NavLink } from 'react-router-dom'

import { ArcElement ,Chart as chartjs , BarController, LinearScale, CategoryScale, BarElement, LineElement, PointElement } from 'chart.js';
import { Bar, Line ,Pie} from 'react-chartjs-2'

// import Layout from '../Component/Layout';
chartjs.register(ArcElement,BarController, LinearScale, CategoryScale,BarElement,LineElement,PointElement);





function Overview() {
  
  const data = {
    labels: ['Monday', 'Tuesday','Wednesday','Thursday','Friday'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          'green',
          'blue',
          'purple',
          'red',
          'pink'
        ],
       
        data: [0,0,3,4,5],
      }
    ]
  }

  return (
    <div>
 
      <div className="container-fluid" >
       
        <div className="row">
          <div className="col-md-3  mt-3 " >
            <Main />
          </div>
          <div className="col-md-9 dashboard">
            {/* <Layout> */}
            <div className="marquee-container">
  <p className="marquee card-text">
    <span>14th Year Anniversary. <a href="https://ezitech.org">Ezitech Institute</a> has
      completed 14 years. 2530 interns have completed their internship. Thanks all for your  
      unconditional support.</span>
      
  </p>
</div>
            <div className='row'>
        


              <div className='col-md-8'>


                {/* ======================= ROW - 1 ========================================== */}

                <div className='row '>

                  <div className="col-md-4 mt-3" >
                    <div className="card" style={{ width: 'auto', backgroundColor: 'rgb(195, 55, 207)' }}>
                      <NavLink className='navlinks' to='/tp' >

                        <div className="card-body">
                          <i className="fa-solid fa-box-open" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>Total Projects</p>
                        </div>
                      </NavLink>

                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: 'salmon' }}>
                      <NavLink className='navlinks' to='/tp' >
                        <div className="card-body">
                          <i className="fa-solid fa-spinner" />       
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>In Progress</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: 'rgb(55, 103, 207)' }}>
                      <NavLink className='navlinks' to='/tp' >
                        <div className="card-body">
                          <i className="fa-solid fa-check-to-slot" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>Completed Projects</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                </div>

                {/* ======================= tasks ROW - 2 ==========================================  */}

                <div className='row '>
                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: 'rgb(93, 178, 204)' }}>
                      <NavLink className='navlinks' to='/analysis' >
                        <div className="card-body">
                          <i className="fa-solid fa-list-ul" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>Total Attendance</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: '#fe8f50' }}>
                      <NavLink className='navlinks' to='/analysis' >
                        <div className="card-body">
                          <i className="fa-solid fa-list-ul" />
                          <h5 className="card-title">2</h5>
                          <p className='card-text'>Holidays</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: '#28C76F' }}>
                      <NavLink className='navlinks' to='/analysis' >

                        <div className="card-body">
                          <i className="fa-solid fa-list-ul" />
                          <h5 className="card-title">1</h5>
                          <p className='card-text'>Leave</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                </div>


                {/* ====================================================== row -3 ======================================= */}

                <div className='row '>
                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: "#00CFE8" }}>
                      <NavLink className='navlinks' to='/' >
                        <div className="card-body">
                          <i className="fa-solid fa-layer-group" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>Total Tasks</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: "tomato" }}>
                      <NavLink className='navlinks' to='/' >
                        <div className="card-body">
                          <i className="fa-solid fa-spinner" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>on going</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="card" style={{ width: 'auto', backgroundColor: 'teal' }}>
                      <NavLink className='navlinks' to='/' >

                        <div className="card-body">
                          <i className="fa-solid fa-check-to-slot" />
                          <h5 className="card-title">20</h5>
                          <p className='card-text'>Completed</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                </div>

               
              </div>


              {/* =============================== Read Note ===================================== */}
              <div className='col-md-4 read mt-3' style={{backgroundColor:'white'}}>
                <div className='main'>
                  <h3 ><b>Read Note</b></h3>

                  <p className='notetext'>Hello, Liaqat Ali</p>
                  <div className='data'>
                    <h4 className='testapp'>Join Whatsapp Intern Group</h4>
                    <a className='testappa' href='#'>http://Whatsapp.com</a>

                    <h4 className='testapp msg'>Test Notification</h4>
                  </div>
                  <p className='notetext'>Thanks <br /> Manager : <b>Ibrahim Shah</b></p>
                </div>
              </div>


            </div>

          {/* =============================== Charts ===================================== */}

            <div className='row mt-3 mb-3'>
            <div className='col-md-6'>
              <Piechart />
            </div>
            <div className='col-md-6'>
            <Line data={data}  />


            </div>
          </div>
          {/* </Layout>     */}
                </div>




        </div>
      </div>

    </div>
  )
}

export default Overview
