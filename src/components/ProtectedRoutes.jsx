import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
  const user = useSelector(state => state.auth.user)

  return (
    !(user === 'no user') ? <Outlet /> : <Navigate to={'/auth'} />
  )
}

// warning solved: if user try to explicitly  enter the url of test page also then it is not taken there it will generate a new session of url.

export default ProtectedRoutes