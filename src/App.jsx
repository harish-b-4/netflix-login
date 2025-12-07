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

    axios.post("https://netflix-backend-og72.onrender.com/login",{ "username": user, "password": pass } )
      .then(function (res) {

        if (res.data === true) {
          navigate("/landing")
        }
        else {
          setError("Enter correct Email or Password")
        }

      })
      .catch(() => {
        setError("Server error. Try again later")
      })
  }

  return (
    <div>

      <div className='relative flex justify-center'>

        <img
          src={netflix}
          alt="Background Image"
          className='min-w-full min-h-screen hidden md:flex'
        />

        <h1 className="text-3xl md:text-5xl text-[#e91a21] font-semibold absolute top-5 left-5 md:left-40 z-20">NETFLIX</h1>

        <div className="mt-20 z-10 bg-black md:bg-transparent/80 flex flex-col p-4 md:p-14 gap-10 w-full h-fit md:h-auto md:w-[31%] absolute">

          <h1 className="font-bold text-3xl md:text-4xl text-white">Sign In</h1>

          <div className="flex flex-col gap-5 mt-3 md:mt-5">

            <input
              onChange={handleUser}
              placeholder="Email or mobile number"
              className="border border-gray-500 px-3 py-3 rounded bg-transparent/50 text-white"
            />

            <input
              onChange={handlePass}
              placeholder="Password"
              type="password"
              className="border border-gray-500 px-3 py-3 rounded bg-transparent/50 text-white"
            />

            {error && (
              <p className="text-red-500 text-sm font-semibold">{error}</p>
            )}

            <button
              onClick={check}
              className="bg-[#e91a21] hover:bg-[#c70209] duration-200 text-white py-1 md:py-2 font-medium text-lg rounded">
              Sign In
            </button>

            <p className="text-gray-400 font-medium text-center text-lg">OR</p>

            <button className="bg-[#555353] hover:bg-[#3e3d3d] text-white py-1 md:py-2 font-medium text-lg rounded">
              Use a sign-in code
            </button>

            <a href="#" className="text-white underline text-center text-lg">Forgot password?</a>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 accent-white" />
              <span className="text-white text-lg">Remember me</span>
            </label>

            <p className="text-gray-400 text-lg">
              New to Netflix?
              <a href="#" className="text-white text-base font-bold"> Sign up now.</a>
            </p>

            <p className="text-gray-400 text-xs md:text-sm font-semibold">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>

            <a href="#" className="text-blue-500 underline text-sm">Learn more.</a>

          </div>

        </div>

      </div>


      {/* Footer */}
      <footer className='bg-[#252424] z-30 min-w-screen h-fit px-4 py-8 md:px-20 md:py-12 space-y-5 mt-[210%] md:mt-0'>

        <p className='text-white text-base'>Questions? Call 000-800-919-1743 (Toll-Free)</p>

        <div className='text-white grid grid-cols-2 md:grid-cols-4 underline gap-3'>
          <a href="">FAQ</a>
          <a href="">Help Center</a>
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
          <a href="">Cookie Preferences</a>
          <a href="">Corporate Information</a>
        </div>

        <select className='bg-[#252424] border border-gray-200 w-fit px-2 py-1 text-white'>
          <option>English</option>
        </select>

      </footer>

    </div>
  )
}

export default App
