import React from "react";
import Girl from "../assets/girl.jpg";
// import Hand from "../assets/hand.jpg";
import Aya from "../assets/Aya_logo.jfif";
import Stellar from "../assets/stellar-logo.png";
import DFS from "../assets/dfs_lab.jpeg";
import Vogue from "../assets/div.png";
import CellPhone from "../assets/smiling.webp";
import Rixa from "../assets/Rixa.jpeg";
// import PartnersCarousel from "../components/PartnersCarousel";

function HomePage() {
  return (
    <>
      <div className="">
        {/* <PartnersCarousel></PartnersCarousel> */}

        {/* SECTION ONE */}
        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${Girl})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>{" "}
          {/* Blue overlay with transparency */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="sm:text-5xl hero-section  font-bold  mt-12">
                Empower Your Creativity:{" "}
                <span>Tokenize and Crowdfund Your Projects</span>
              </h1>
              <p className="text-lg mt-4 mb-4 hero-section1">
                Transform your creative works into digital assets and connect
                with supporters to fund your vision.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                <a href="marketplace"> Explore Creative Works</a>
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded">
                <a href="about">Learn More!!</a>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION */}

        <section class="bg-white py-16">
          <h2 class="text-4xl font-bold text-center mb-12 text-blue-900">
            Our Key Features
          </h2>
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* <!-- Feature 1: Tokenize Your Creativity --> */}
              <div class="shade1 p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 8v12m8-12h-2a2 2 0 01-2 2 2 2 0 01-2-2h-4a2 2 0 01-2 2 2 2 0 01-2-2H4m16 0H4"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold mb-2 text-blue-900">
                  Tokenize Your Creativity
                </h3>
                <p class="text-gray-600">
                  Easily convert your creative works into unique digital tokens
                  that your followers can mint, collect, and trade.
                </p>
              </div>
              {/* <!-- Feature 2: Crowdfund Your Projects --> */}
              <div class="shade1 p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v3m-4 0V4a2 2 0 00-2-2H7a2 2 0 00-2 2v3m16 4a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold mb-2 text-blue-900">
                  Crowdfund Your Projects
                </h3>
                <p class="text-gray-600">
                  Launch a crowdfunding campaign to raise funds for your next
                  big project. Offer exclusive rewards to your backers.
                </p>
              </div>
              {/* <!-- Feature 3: Connect with Your Audience --> */}
              <div class="shade1 p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h5m4 8l-4-4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold mb-2 text-blue-900">
                  Connect with Your Audience
                </h3>
                <p class="text-gray-600">
                  Engage with your followers, receive feedback, and build a
                  community around your creative journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        {/* <section className="py--0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="text-5xl font-bold">Tokenize Your Creativity</div>
              <p className="mt-8">
                Easily convert your creative works into unique digital tokens
                that your followers can mint, collect, and trade.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src={Hand} alt="some hand" className="w-full h-auto" />
            </div>
          </div>
        </section> */}
        {/* SECTION 4 */}

        {/* <section className="py-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="w-full md:w-1/2 p-4">
              <img src={Hand} alt="some thing" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="text-5xl font-bold">Crowdfund Your Projects</div>
              <p className="mt-8">
                Launch a crowdfunding campaign to raise funds for your next big
                project. Offer exclusive rewards to your backers
              </p>
            </div>
          </div>
        </section> */}

        {/* SECTION 5 */}

        {/* <section className="py--0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="text-5xl font-bold">Connect with Your Audience</div>
              <p className="mt-8">
              Engage with your followers, receive feedback, and build a community around your creative journey
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src={Hand} alt="some can" className="w-full h-auto" />
            </div>
          </div>
        </section> */}

        {/* SECTION */}

        <section class="bg-gray-100 py-16">
          <h2 class="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* <!-- Step 1 --> */}
              <div class="bg-white p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 21v-2a4 4 0 00-3.02-3.85 2 2 0 10-1.96 0A4 4 0 008 19v2m4-5a4 4 0 100-8 4 4 0 000 8z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Connect your wallet</h3>
                <p class="text-gray-600">
                  Connect your wallet to start your creative journey
                  on our platform.
                </p>
              </div>
              {/* <!-- Step 2 --> */}
              <div class="bg-white p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 7h16M4 11h16M4 15h16M4 19h16"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">
                  Tokenize and List Your Work
                </h3>
                <p class="text-gray-600">
                  Upload your creative works, set your terms, and tokenize them
                  for your followers to mint.
                </p>
              </div>
              {/* <!-- Step 3 --> */}
              <div class="bg-white p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">
                  Launch Your Crowdfunding Campaign
                </h3>
                <p class="text-gray-600">
                  Set your funding goals, offer exclusive rewards, and launch
                  your campaign to attract backers.
                </p>
              </div>
              {/* <!-- Step 4 --> */}
              <div class="bg-white p-8 rounded-lg shadow-md text-center">
                <div class="text-blue-500 mb-4">
                  <svg
                    class="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5v14"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Engage and Grow</h3>
                <p class="text-gray-600">
                  Engage with your audience, provide updates, and watch your
                  community and support grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION */}

        <section class="bg-white-50  py-16">
          <h2 class="text-3xl font-semibold mb-8 text-center">Our Partners</h2>
          <div class="container mx-auto px-6">
            <div class="flex grid-cols-2 md:grid-cols-1 gap-8 items-center justify-items-center">
              {/* <!-- Partner 1 --> */}
              <div class="partner-logo">
                <img
                  src={Aya}
                  alt="Partner 1"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 2 --> */}
              <div class="partner-logo">
                <img
                  src={Stellar}
                  alt="Partner 2"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 3 --> */}
              <div class="partner-logo">
                <img
                  src={DFS}
                  alt="Partner 3"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 4 --> */}
              <div class="partner-logo">
                <img
                  src={Vogue}
                  alt="Partner 4"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 5 --> */}
              <div class="partner-logo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Partner 5"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 6 --> */}
              <div class="partner-logo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Partner 6"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 7 --> */}
              <div class="partner-logo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Partner 7"
                  class="w-32 h-32 object-contain"
                />
              </div>
              {/* <!-- Partner 8 --> */}
              <div class="partner-logo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Partner 8"
                  class="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}

        <div class="shade1 text-black py-10">
          <h3 class="text-2xl font-semibold mb-8 text-center">
            What Our Users Say
          </h3>
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Testimonial 1 --> */}
              <div class="bg-gray-700 p-6 rounded-lg shadow-lg shade2">
                <p class="text-lg italic mb-4">
                  "Tokenizing my art on this platform has opened up new revenue
                  streams and brought me closer to my fans."
                </p>
                <div class="flex items-center">
                  <img
                    src={Rixa}
                    alt="User  1"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p class="font-semibold">Jane Doe</p>
                    <p class="text-gray-400">Visual Artist</p>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial 2 --> */}
              <div class="bg-gray-700 p-6 rounded-lg shadow-lg shade2">
                <p class="text-lg italic mb-4">
                  "Crowdfunding my project here was seamless and successful. The
                  community support was overwhelming!"
                </p>
                <div class="flex items-center">
                  <img
                    src={Rixa}
                    alt="User  2"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p class="font-semibold">John Smith</p>
                    <p class="text-gray-400">Musician</p>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial 3 --> */}
              <div class="bg-gray-700 p-6 rounded-lg shadow-lg shade2">
                <p class="text-lg italic mb-4">
                  "The platform is a game-changer for creatives looking to
                  tokenize their work and reach a wider audience."
                </p>
                <div class="flex items-center">
                  <img
                    src={Rixa}
                    alt="User  3"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p class="font-semibold">Alice Brown</p>
                    <p class="text-gray-400">Photographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}

        {/* <section class="bg-blue-900 text-white py-16">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Creativity?</h2>
    <p class="text-lg md:text-xl mb-8">Join our platform today and start your journey towards empowering your creativity and connecting with your audience.</p>
    <div class="flex justify-center gap-4">
      <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg font-semibold transition">Join Now</a>
      <a href="#" class="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded-lg font-semibold transition">Explore Projects</a>
      <a href="#" class="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition">Get Started</a>
    </div>
  </div>
</section> */}
        {/* SECTION 8 */}

        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${CellPhone})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>{" "}
          {/* Blue overlay with transparency */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="sm:text-5xl  font-bold  mt-12">
                Ready to Transform Your Creativity{" "}?
                {/* <span>Tokenize and Crowdfund Your Projects</span> */}
              </h1>
              <p className="text-lg mt-4 mb-4">
                Join our platform today and start your journey towards
                empowering your creativity and connecting with your audience.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                <a href="marketplace"> Explore Creative Works</a>
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded">
                <a href="about">Join Now!</a>
              </button>
            </div>
          </div>
        </section>
        {/* SECTION 9 */}
      </div>
    </>
  );
}

export default HomePage;
