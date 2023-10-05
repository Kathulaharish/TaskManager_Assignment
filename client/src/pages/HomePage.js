import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useAuth } from '../context/auth'
import Layout from '../components/Layout.js'
import TaskList from './tasks'

function HomePage() {
  const [auth, setAuth] = useAuth()
  
  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth')

  }
  return (
    

    <Layout>
        {
          !auth.user ? (
            <>
                <h2 className='form-container'>Please Login to use Task Manager</h2>
            </>
          ) : (
            <>
              <li className="m-3 p-4">
                <TaskList/>
              </li>
            </>
          )
        }
    </Layout>
  )
}

export default HomePage







/*
import React from 'react'
import Layout from '../components/Layout.js'
import { useAuth } from '../context/auth.js'
function HomePage() {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
        <h1>HomePage</h1>
    </Layout>
  )
}

export default HomePage

*/