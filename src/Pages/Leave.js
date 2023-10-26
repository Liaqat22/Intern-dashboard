import React from 'react'
// import { NavLink } from 'react-router-dom'

function Leave() {
  return (
    <div>
<div>
  <button type="button" className='btn btn-info card-text' data-bs-toggle="modal" data-bs-target="#exampleModal" >+ Leave</button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 " id="exampleModalLabel"><b>Add leave</b></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>

<div className='container'>
    <div className='row'>
        <div className='col-md-6'> <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label card-text">From date:</label>
              <input type="date" className="form-control card-text" id="recipient-name" />
            </div></div>

        <div className='col-md-6'> <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label card-text">To date:</label>
              <input type="date" className="form-control card-text" id="recipient-name" />
            </div></div>
    </div>
</div>
            <div className="mb-3">
              <label htmlFor="message-text " className="col-form-label card-text">Reason:</label>
              <textarea className="form-control card-text" id="message-text" rows={6} defaultValue={""} />
            </div>
            <button type="submit"  className="btn card-text" style={{backgroundColor:'#7367F0' , color:'white'}}>Submit</button>

          </form>
        </div>
       
    


      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Leave
