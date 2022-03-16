import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>ADmin</header>
        <div className="row">
            <div className="col-2">
                Sidebar
            </div>
            <div className="col-10">
               <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AdminLayout