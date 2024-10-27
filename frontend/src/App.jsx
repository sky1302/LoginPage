import { useState } from 'react'
import './App.css'
import axios from 'axios'
import logo from './assets/images/sastra-logo.png';

function App() {
  const[emp_id, setEmd_id] = useState("")
  const[email, setEmail] = useState("")
  const[data, setData] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/v1/login/user/data", {
        "emp_id" : emp_id,
        "email" : email
      })
      console.log(response.data);
      setData(response.data)
    }catch(error) {
      alert(`Login failed : ${error}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='outer'>
          <img src={logo} alt="logo" />
          <div className='inner'>
            <h2>Login</h2>
            <div className='input-box , input-box1'>
            <i class="fa-solid fa-user"></i>
              <input 
              type="text" 
              placeholder='Emp_ID'
              onChange={(e)=>setEmd_id(e.target.value)}
              />
            </div>
            <div className='input-box'>
            <i class="fa-solid fa-envelope"></i>
              <input 
              type="email"
              placeholder='Emp@tcs.com' 
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="basic-field">
              <div className="rem-input"><input type="checkbox" /> Remember me</div>
              <div className="a-div"><a href="#">Forgot Password ?</a></div>
            </div>
            <div className='btn'>
              <button>
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
          {data && (
            <h1>{data.email}</h1>
          )}
    </>
  )
}

export default App
