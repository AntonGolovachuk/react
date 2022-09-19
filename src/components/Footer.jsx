import React from "react"
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1140px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h2 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h2>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatem neque qui quasi architecto asperiores voluptatibus perferendis at reiciendis iusto facilis veniam laborum fugiat ea expedita ad, provident exercitationem laboriosam.</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookSquare size={30} className="cursor-pointer hover:text-gray-400"/>
                <FaInstagram size={30} className="cursor-pointer hover:text-gray-400"/>
                <FaTwitterSquare size={30} className="cursor-pointer hover:text-gray-400"/>
                <FaGithubSquare size={30} className="cursor-pointer hover:text-gray-400"/>
                <FaDribbbleSquare size={30} className="cursor-pointer hover:text-gray-400"/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="text-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Analytics</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Marketing</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Commerce</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Insights</a></li>
                </ul>
            </div>
            <div>
                <h6 className="text-medium text-gray-400">Support</h6>
                <ul>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Pricing</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Documentation</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Guides</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">API Status</a></li>
                </ul>
            </div>
            <div>
                <h6 className="text-medium text-gray-400">Company</h6>
                <ul>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">About</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Blog</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Jobs</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Press</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Careers</a></li>
                </ul>
            </div>
            <div>
                <h6 className="text-medium text-gray-400">Legal</h6>
                <ul>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Claim</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Policy</a></li>
                    <li className="py-2 text-sm"><a className="hover:text-gray-400 duration-300" href="/">Terms</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer