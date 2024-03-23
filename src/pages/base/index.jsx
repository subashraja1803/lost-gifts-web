import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard';


function RouteSwitch() {
  return (
    <Routes>
			<Route path='/' element={<Dashboard />} />
    </Routes>
  )
}

export default RouteSwitch;