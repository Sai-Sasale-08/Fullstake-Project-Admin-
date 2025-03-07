import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailed, signInRequest, signInSuccess } from '../redux/auth/authSlice';
import axios from "axios"
export default function SignIn() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
const navigate=useNavigate()
  const {currentUser,loading
  }=useSelector((state)=>state.auth)


  const dispatch=useDispatch()
  const handlesubmit=(e)=>{
    e.preventDefault()
     dispatch(signInRequest())
    axios.post(`${import.meta.env.VITE_BASEURL}/user/singin`,{email,password},{
      withCredentials: true,
    }).then((res)=>{
      console.log(res.data)
      alert(res.data.message)
       dispatch(signInSuccess(res.data.user))
       navigate("/")
    }).catch((err)=>{
      console.log(err)
      dispatch(signInFailed(err?.response?.data?.error));
    })

  }
  return loading ? <h1>Loading...</h1> : (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1710162734135-8dc148f53abe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your preferred image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container p-4 bg-white rounded shadow-lg d-flex flex-column align-items-center gap-4" style={{ maxWidth: '400px', opacity: 0.95 }}>
        
        <div className="text-center mb-4">
          <h2 className="font-weight-bold text-dark">Sign In</h2>
          <p className="text-muted">Access your account</p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-100">
          <form className="d-flex flex-column gap-3" onSubmit={handlesubmit}>
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e)=>setemail(e.target.value)}
                placeholder="name@company.com"
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Your password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e)=>setpassword(e.target.value)}
                id="password"
                placeholder="**********"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>

          {/* Sign-Up Link */}
          <div className="text-center small mt-3">
            <span>Don't have an account? </span>
            <Link to="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
