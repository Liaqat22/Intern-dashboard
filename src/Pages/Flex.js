import React from 'react'
import Main from './Main'
// import Layout from '../Component/Layout'


function Flex() {
  return (
    <div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3  mt-3">
            <Main />
          </div>
          <div className="col-md-9">
            {/* <Layout> */}
              <div className='attendancemain read'>
                <h1 className='h1head'>Points Ledger </h1>

                <table className="table tablewrap">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Date</th>
                      <th scope="col">Description</th>
                      <th scope="col">Earn</th>
                      <th scope="col">Deduct</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>	2023-07-17</td>
                      <td>Signup</td>
                      <td>	100</td>
                      <td>-</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td></td>
                      <td>Earn : 100</td>
                      <td>Deduct : 0</td>
                      <td>Total Balance : 100</td>
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

export default Flex
