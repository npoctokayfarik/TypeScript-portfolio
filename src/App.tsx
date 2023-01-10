import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Layout, Portfolio, Error } from "./pages/index"
import "./main.css"

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
