import React, { useState } from 'react'
import { Navlinks, SocialLinks } from '../../content.js';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {

     const [ActiveNavLink, SetActiveNavLink] = useState(0);
      const [IsToggleOpen, setIsToggleOpen] = useState(false)
      
    
      const handleNavLinkClick = (id) => {
        if(id == 'home'){
          location.reload()
        }
        SetActiveNavLink(id);
        setIsToggleOpen(!IsToggleOpen)
         const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
      };


  return (
    <div>
          <nav className="bg-gray-800 w-full fixed  text-white z-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
             <div className="text-2xl font-bold">
  <span className="ml-5 sm:ml-2 bg-gradient-to-r from-gray-400 to-green-500 bg-clip-text text-transparent">
    Sayed Seyab
  </span>
</div>



              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4">
                {Navlinks.map((item) => (
                  <a
                    onClick={() => handleNavLinkClick(item.id)}
                    key={item.id}
                    href={item.href}
                    className={
                      ActiveNavLink === item.id
                        ? 'text-green-300 transition delay-150 duration-300'
                        : ''
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Social Links (Desktop) */}
              <div className="hidden md:flex space-x-4 mr-2">
  <a
    href="https://www.linkedin.com/in/sayed-seyab/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-1 hover:text-purple-500 transition"
  >
    <FaLinkedin className="text-xl" />
    <span>Linkedin</span>
  </a>

  <a
    href="https://github.com/Sayyed-Seyab/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-1 hover:text-purple-500 transition"
  >
    <FaGithub className="text-xl" />
    <span>Github</span>
  </a>
</div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                 onClick={()=>{setIsToggleOpen(!IsToggleOpen)}}
                  className="focus:outline-none mr-2"
                >
                  {/* Hamburger Icon */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {IsToggleOpen && (
  <div className="md:hidden flex flex-col w-full items-center bg-gray-800">
    {Navlinks.map((item) => (
      <a
        onClick={() => handleNavLinkClick(item.id)}
        key={item.id}
        href={item.href}
        className={`w-full text-center py-3 border-b border-gray-600 ${
          ActiveNavLink === item.id
            ? 'text-green-300 transition delay-150 duration-300'
            : 'text-white'
        }`}
      >
        {item.label}
      </a>
    ))}

    {/* Social Links */}
    <div className="flex space-x-4 py-3 w-full justify-center">
      <a
    href="https://www.linkedin.com/in/sayed-seyab/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-1 hover:text-purple-500 transition"
  >
    <FaLinkedin className="text-xl" />
    <span>Linkedin</span>
  </a>

  <a
    href="https://github.com/Sayyed-Seyab/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-1 hover:text-purple-500 transition"
  >
    <FaGithub className="text-xl" />
    <span>Github</span>
  </a>
    </div>
  </div>
)}

     

        </nav>
    </div>
  )
}
