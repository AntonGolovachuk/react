import React, { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-26 max-w-[1140px] mx-auto px-4 text-white">
        <h2 className="w-full text-3xl text-[#00df9a]">REACT.</h2>
        <ul className="hidden md:flex">
            <li className="p-4"><a className="hover:text-gray-400 duration-300" href="/">Company</a></li>
            <li className="p-4"><a className="hover:text-gray-400 duration-300" href="/">Home</a></li>
            <li className="p-4"><a className="hover:text-gray-400 duration-300" href="/">Resources</a> </li>
            <li className="p-4"><a className="hover:text-gray-400 duration-300" href="/">About</a></li>
            <li className="p-4"><a className="hover:text-gray-400 duration-300" href="/">Contact</a></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={18}/> : <AiOutlineMenu size={18}/>}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h2 className="w-full text-3xl text-[#00df9a] m-4">REACT.</h2>
            <ul className="uppercase p-4">
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar