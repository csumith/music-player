import React from 'react'
import { NavLink } from 'react-router-dom'

const Pnf = () => {
  return (
     <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-danger">Page Not found</h3>
                <NavLink to={'/'} className="btn btn-outline-warning">Return Home</NavLink>
            </div>
        </div>
     </div>
  )
}

export default Pnf
