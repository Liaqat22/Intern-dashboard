import React from 'react'
import Main from './Main' 
// import Layout from '../Component/Layout'


function Theme() {
  return (
    <div>

<div className="container-fluid ">
    <div className="row">
        <div className="col-md-3  mt-3">
            <Main/>
        </div>
        <div className="col-md-9">
          {/* <Layout> */}

<form className='attendancemain read'>
<h1><b><i className="fa-regular fa-message"/> Feedback</b></h1>
<div className="mb-3 col-lg-offset-1 col-lg-9">
<textarea className="form-control card-text" rows={4} name="feedback" placeholder="Your broken piece of words are very valueable for us... " style={{height: 223}} defaultValue={""} />

</div>

  <button type="submit" className="btn card-text" style={{backgroundColor:'#7367F0' , color:'white'}}>Submit</button>
</form>


{/* </Layout> */}
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Theme
