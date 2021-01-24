import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest"
          >
            Khoi
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 mr-2 rounded text-red-200 hover:text-white hover:bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 mr-2 rounded text-red-200 hover:text-white hover:bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 mr-2 rounded text-red-200 hover:text-white hover:bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex items-center">
          <SocialIcon
            url="https://twitter.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://facebook.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
