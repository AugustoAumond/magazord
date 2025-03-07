import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Profile from './pages/profile'
import Home from './pages/home'
import SearchUser from './pages/searchUser/searchUser'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/searchUser" element={<SearchUser />} />
      </Routes>
    </Router>
  )
}

export default App
