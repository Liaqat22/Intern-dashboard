import React from 'react'
import Main from './Main'
// import Layout from '../Component/Layout'


function Exports() {
  return (
    <div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3  mt-3">
            <Main />
          </div>
          <div className="col-md-9">
            {/* <Layout> */}

              <div className="container">
                <div className="row attendancemain read"><h2><b>Information</b></h2></div>
                <div className="row  mt-3">
                  {/* =================================================== 1st =============================================== */}
                  <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/internship_test_1661408218.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Internship Test  (Mandatory)</h5>
                        <p className="card-text">Mandatory Test for Intern: </p>

                      </div>
                    </div>
                  </div>

                  {/* =================================================== 2nd =============================================== */}

                  <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/Screenshot (11)_1661408426.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Internship Agreement</h5>
                        <p className="card-text"><strong>Eziline Software House
                        </strong></p>

                      </div>
                    </div>
                  </div>

                  {/* =================================================== 3rd =============================================== */}

                  <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/10492_1661408751.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Code of Conduct For Interns</h5>
                        <p className='card-text'><strong>Rules &amp; Regulations for Interns:&nbsp;</strong></p>

                      </div>
                    </div>
                  </div>

                   {/* =================================================== 4st =============================================== */}
                   <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/project_delivery_4_1661408790.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Project submission criteria</h5>
<p className='card-text'><strong>Project submission criteria</strong></p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================== 5nd =============================================== */}

                  <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/Screenshot (12)_1661408982.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Policies of Eziline for interns</h5>
                        <p className="card-text"><strong>polices of Eziline for interns:</strong></p>

                      </div>
                    </div>
                  </div>

                  {/* =================================================== 6rd =============================================== */}

                  <div className="col-md-4  mt-3">
                    <div className="card text-dark  attendancemain read" >
                      <img src="https://ezitech.org/cp/dist/img/kbinfo/maxresdefault_1661409061.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Internship Certificate Criteria</h5>
                        <p className="card-text"> <strong>To get Internship certificate..... </strong></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            {/* </Layout> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Exports
