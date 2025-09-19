import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'

import React from 'react'

const Home = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Home
