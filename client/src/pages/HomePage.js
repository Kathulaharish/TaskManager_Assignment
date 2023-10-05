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