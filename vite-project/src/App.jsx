import React from 'react'
import Images from './Images'
import Imgupload from './Imgupload'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Imgupload/>}/>
          <Route path="/img" element={<Images/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App