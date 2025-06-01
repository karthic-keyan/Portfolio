import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Alex Johnson</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `px-3 py-2 font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <NavLink 
              to="/" 
              className="block px-3 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="block px-3 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className="block px-3 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block px-3 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;