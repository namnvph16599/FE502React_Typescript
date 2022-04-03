import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CategoryTypes } from '../../types/category'

type Props = {
  category : CategoryTypes[]
}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header category={props.category} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout