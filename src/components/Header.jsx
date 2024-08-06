import React from "react";
import Logo from '../assets/logo.png'
// import Rixa from "../assets/Rixa.jpeg";


function Header() {
  document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.md:hidden');
    var mobileMenu = document.querySelector('.md:hidden + .hidden');

    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });

  return (
    <>
<nav class="shade1 text-white py-4">
  <div class="container mx-auto px-6 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      {/* <!-- Logo --> */}
      <img
                    // src={Rixa}
                    src={Logo}
                    alt="User photo"
                    class="w-12 h-12 rounded-full mr-2"
                  />      {/* <!-- Links (Hidden on small screens) --> */}
      <div class="hidden md:flex space-x-4">
        {/* <a href="#" class="hover:text-gray-300">Home</a> */}
        <a href="marketplace" class="hover:text-gray-300 hover:underline">Marketplace</a>
        <a href="#" class="hover:text-gray-300">Start a Project</a>
        <a href="about" class="hover:text-gray-300">About</a>
        <a href="blog" class="hover:text-gray-300">Blog</a>
      </div>
    </div>
    {/* <!-- Connect Wallet Button --> */}
    <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
    {/* <!-- Mobile Menu Button (visible on small screens) --> */}
    <button class="md:hidden flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/>
      </svg>
    </button>
  </div>
  {/* <!-- Mobile Menu (hidden by default) --> */}
  <div class="hidden md:hidden">
    <a href="/" class="block px-4 py-2 text-sm hover:bg-gray-700">Home</a>
    <a href="marketplace" class="block px-4 py-2 text-sm hover:bg-gray-700">Explore</a>
    <a href="marketplace" class="block px-4 py-2 text-sm hover:bg-gray-700">Start a Project</a>
    <a href="about" class="block px-4 py-2 text-sm hover:bg-gray-700">About</a>
    <a href="contact" class="block px-4 py-2 text-sm hover:bg-gray-700">Contact</a>
  </div>
</nav>

    </>
  );
}

export default Header;
