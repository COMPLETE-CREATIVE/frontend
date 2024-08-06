import React from "react";

function Footer() {
  return (
    <>
<footer class="bg-gray-800 text-white py-10">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* <!-- About Us --> */}
      <div>
        <h3 class="text-lg font-semibold mb-4">About Us</h3>
        <p class="text-gray-400">Our mission is to empower creativity by helping creatives tokenize their works and raise funds for their projects through our innovative platform.</p>
      </div>
      {/* <!-- Quick Links --> */}
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li class="mb-2"><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
          <li class="mb-2"><a href="marketplace" class="text-gray-400 hover:text-white">Explore Projects</a></li>
          <li class="mb-2"><a href="marketplace" class="text-gray-400 hover:text-white">Start Your Project</a></li>
          <li class="mb-2"><a href="about" class="text-gray-400 hover:text-white">About</a></li>
          <li class="mb-2"><a href="contact" class="text-gray-400 hover:text-white">Contact</a></li>
          <li class="mb-2"><a href="blog" class="text-gray-400 hover:text-white">Blog</a></li>
          <li class="mb-2"><a href="TnCs" class="text-gray-400 hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
      {/* <!-- Social Media Links --> */}
      <div>
        <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="contact" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6.03c-.77.34-1.61.57-2.49.68.89-.53 1.57-1.37 1.89-2.37-.83.5-1.75.86-2.72 1.06a4.29 4.29 0 0 0-7.3 3.9c-3.56-.18-6.73-1.88-8.85-4.47a4.27 4.27 0 0 0-.58 2.15 4.28 4.28 0 0 0 1.9 3.57 4.26 4.26 0 0 1-1.95-.54v.06a4.29 4.29 0 0 0 3.44 4.2 4.29 4.29 0 0 1-1.94.07 4.29 4.29 0 0 0 4.01 2.98 8.6 8.6 0 0 1-5.33 1.84c-.35 0-.7-.02-1.05-.06a12.14 12.14 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.17v-.55a8.65 8.65 0 0 0 2.13-2.22z"/>
            </svg>
          </a>
          <a href="contact" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.41 3.59 8.05 8 8.72v-6.2h-2.4v-2.52h2.4v-1.93c0-2.34 1.36-3.64 3.44-3.64.72 0 1.48.13 1.48.13v1.62h-.83c-.82 0-1.08.5-1.08 1.05v1.24h2.16l-.34 2.52h-1.82v6.2c4.41-.67 8-4.31 8-8.72 0-5.52-4.5-10-10-10z"/>
            </svg>
          </a>
          <a href="contact" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.22a7.55 7.55 0 0 1-2.17.59 3.78 3.78 0 0 0 1.65-2.08 7.55 7.55 0 0 1-2.4.92 3.77 3.77 0 0 0-6.45 3.44 10.71 10.71 0 0 1-7.77-3.94 3.76 3.76 0 0 0 1.16 5.03 3.78 3.78 0 0 1-1.71-.47v.05c0 1.77 1.25 3.24 2.92 3.58a3.78 3.78 0 0 1-1.7.07c.48 1.48 1.88 2.55 3.54 2.58a7.56 7.56 0 0 1-4.67 1.61c-.3 0-.6-.02-.89-.05a10.71 10.71 0 0 0 5.8 1.7c6.96 0 10.76-5.77 10.76-10.76 0-.16 0-.32-.01-.48a7.72 7.72 0 0 0 1.88-1.97z"/>
            </svg>
          </a>
          <a href="contact" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.42 2.91 8.15 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1.01.07 1.55 1.03 1.55 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-5a3.9 3.9 0 0 1 1.03-2.72c-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.04a9.51 9.51 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.37.2 2.38.1 2.63a3.9 3.9 0 0 1 1.03 2.72c0 3.89-2.34 4.75-4.56 5 .36.31.68.92.68 1.85v2.73c0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12z"/>
            </svg>
          </a>
        </div>
      </div>
      {/* <!-- Newsletter Signup --> */}
      <div>
        <h3 class="text-lg font-semibold mb-4">Newsletter Signup</h3>
        <p class="text-gray-400 mb-4">Stay updated with the latest news and projects. Sign up for our newsletter.</p>
        <form>
          <input type="email" placeholder="Your email" class="w-full p-2 mb-2 bg-gray-700 text-white rounded"/>
          <button class="w-full p-2 bg-blue-600 hover:bg-blue-500 rounded">Sign Up </button></form>
</div>
</div>
</div>
</footer>
    </>
  );
}

export default Footer;
