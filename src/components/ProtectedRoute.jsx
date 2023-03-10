import React from 'react'
import { Route, redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
    // const {user} = useAuth()
    const user = localStorage.getItem('studentTestApp')
    if(!user.name){
        redirect('/')
    }
  return (
    <Route {...props}></Route>
  )
}

export default ProtectedRoute