import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [check, setCheck] = useState('check in')
  const [bgcolor, setbgcolor] = useState('success')

  const handleCheck = () => {


    if (check == 'check in') {
      setCheck('check out')
      setbgcolor('danger')

    }
    if (check == 'check out') {
      setCheck('attandance marked already')
      setbgcolor('success')

    }
  }

  return (
    <div>



      <nav className="navbar navbar-expand-lg bg-light   head" >
        <div className="container-fluid d-flex flex-nowrap navb">

          <li className="nav-item dropdown listitems" style={{ paddingBottom: '8px' }}>

            <NavLink className="nav-link dropdown-toggle btun" data-bs-toggle="dropdown" aria-expanded="false" style={{
              color: 'transparent', fontSize: '25px'
            }}>

              <i className='fa-solid fa-bars' style={{
                color: 'black'
              }} />
            </NavLink>
            <ul className="dropdown-menu dropdown-menu dropdownitems" style={{ margin: '5px 0rem 0rem -15px' }}>
              <h1 className='text-center' style={{ paddingBottom: '6px', color: "#296fb3" }}><b>Liaqat Ali</b></h1>

              <li><NavLink className="dropdown-item " to="/"><i className="fa-solid fa-house" /> dashboard</NavLink></li>
              <li><NavLink className="dropdown-item " to="/tp"><i className="fa-solid fa-box-open" /> Projects</NavLink></li>
              <li><NavLink className="dropdown-item " to="/analysis"><i className="fa-solid fa-list-ul" /> Attendance</NavLink></li>
              <li><NavLink className="dropdown-item " to="/export"><i className="fa-solid fa-circle-exclamation" /> KB information</NavLink></li>
              <li><NavLink className="dropdown-item " to="/flex"><i className="fa-solid fa-coins" /> Points</NavLink></li>
              <li><NavLink className="dropdown-item " to="/theme"><i className="fa-regular fa-message" /> Feedback</NavLink></li>
            </ul>
          </li>


          <span><img src="https://ezitech.org/iportal/public/certificates/coin.png" style={{ width: '30px', height: '30px' }} alt="Coin" />
          </span>
          <NavLink className="navbar-brand card-text" to="/flex"> 100 Points</NavLink>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className={`nav-link btn btn-${bgcolor} card-text`} style={{
                border: 'none', color: 'white'

              }} onClick={handleCheck} >{check}</button>
            </li>

          </ul>
          <span className="navbar-text">
            <h4 className='card-text navtext'><b>Liaqat Ali</b></h4>
            <h5 className='navtext'>intern</h5>
            <h4 className='card-text navtext'>103.107.179.203</h4>
          </span>
          <span>

            <li className="nav-item dropdown" style={{ paddingBottom: '8px' }}>
              <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                color: 'transparent'
              }}>
                <img className='round' src='https://ezitech.org/cp/dist/img/intern/2023-06-26-22-56-50-026_2_1689581587.jpg' alt='dp' style={{ width: '40px', height: '40px', borderRadius: "50%" }} />

              </NavLink>
              <ul className="dropdown-menu dropdown-menu" style={{
                margin: ' 0px 0px 0px -110px'
              }}>
                <li><a className="dropdown-item card-text" href="#">Ezi-intern-17/07/232726</a></li>
                <li><a className="dropdown-item card-text" href="#">supervisor:Ibrahim Shah</a></li>
                <li><a className="dropdown-item card-text" href="#">Duration: 2 Months</a></li>
              </ul>
            </li>

          </span>
        </div>
      </nav>


    </div>
  )
}

export default Header
