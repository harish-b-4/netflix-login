import React from "react"
import Moviecollections from "./Moviecollections"
import { FaSearch, FaUser } from "react-icons/fa"


const Landing = () => {
    return (
        <div className="bg-gradient-to-r from-[#672225] to-[#ff050e] min-h-screen">

            <div className="bg-black z-10 flex items-center justify-between px-6 md:px-10 py-3">

                <h1 className="text-[#e91a21] text-3xl md:text-5xl font-semibold">Netflix</h1>

                <div>
                    <ul className="text-white  text-xl font-semibold gap-20 hover:cursor-pointer hidden md:flex">
                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li>Cartoons</li>
                    </ul>
                </div>

                <div className="text-white flex gap-10 md:gap-20">
                    <FaSearch className="hover:cursor-pointer" />
                    <FaUser className="hover:cursor-pointer" />
                </div>

            </div>

            <Moviecollections />

        </div>
    )
}

export default Landing
