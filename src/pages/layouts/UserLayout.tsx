import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const UserLayout = (props: Props) => {
  return (
    <div>
        <header>Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Foter</footer>
    </div>
  )
}

export default UserLayout