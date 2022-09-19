import React from "react"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1140px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
                <img className="w-16 mx-auto mt-[-3rem] bg-white" src={one} alt="Card" />
                <h2 className="text-2xl font-bold text-center py-8">One User</h2>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="bg-[#00df9a] text-black w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
            </div>

            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500">
                <img className="w-16 mx-auto mt-[-3rem] bg-transperent" src={two} alt="Card" />
                <h2 className="text-2xl font-bold text-center py-8">One User</h2>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="text-[#00df9a] bg-black w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
                <img className="w-16 mx-auto mt-[-3rem] bg-white" src={three} alt="Card" />
                <h2 className="text-2xl font-bold text-center py-8">One User</h2>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="bg-[#00df9a] text-black w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards