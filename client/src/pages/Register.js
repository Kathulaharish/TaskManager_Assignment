import React, {useState} from 'react'
import Layout from '../components/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    

    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
          const res = await axios.post(
            '/api/v1/auth/register', 
            {name, email, password, phone, address}
          )
          if(res && res.data.success){
            toast.success(res.data.message)
            navigate('/login')
          }
          else{
            toast.error(res.data.message)
          }
        }catch(error){
          console.log(error)
          toast.error("Something went wrong")
        }
    }
  return (
    <Layout>
      <div className='register'>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input 
        type="name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="form-control" 
        id="exampleInputName" 
        placeholder='Enter Your Name'
        required
    />
  </div>
  <div className="mb-3">
    <input 
        type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="form-control" 
        id="exampleInputEmail1" 
        placeholder='Enter your Email'
        required
    />
  </div>
  <div className="mb-3">
    <input 
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="form-control" 
        id="exampleInputPassword1" 
        placeholder='Enter your password'
        required
    />
  </div>
  <div className="mb-3">
    <input 
        type="name" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="form-control" 
        id="exampleInputName" 
        placeholder='Enter Your Phone'
        required
    />
  </div>
  <div className="mb-3">
    <input 
        type="name" 
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        className="form-control" 
        id="exampleInputName" 
        placeholder='Enter Your Address'
        required
    />
  </div>
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

      </div>
    </Layout>
  )
}

export default Register
