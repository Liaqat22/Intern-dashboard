import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
  const x = '/tp'

  return (
    <div>
      <div >
   <ul className="list-group">
          <h1 className='text-center' style={{paddingBottom:'12px' , color:"#296fb3" , fontSize:'3rem'}}><b>Liaqat Ali</b></h1>

  <NavLink to = '/'  className="list-group-item"><i className="fa-solid fa-house"/> Dashboard</NavLink>
  <NavLink to = {x} className="list-group-item"><i className="fa-solid fa-box-open" /> Projects</NavLink>
  <NavLink to = '/analysis' className="list-group-item"><i className="fa-solid fa-list-ul" /> Attendance</NavLink>
  <NavLink to = '/export' className="list-group-item"><i className="fa-solid fa-circle-exclamation"/> KB information</NavLink>
  <NavLink to = '/flex' className="list-group-item"><i className="fa-solid fa-coins"/> Points</NavLink>
  <NavLink to = '/theme' className="list-group-item"> <i className="fa-regular fa-message"/> Feedback</NavLink>
</ul>
</div>
 
    </div>
  )
}

export default Main


