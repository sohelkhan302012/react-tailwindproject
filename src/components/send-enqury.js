import enquaryimg from '../images/woman-writing-on-paper-3228878.png'
const Sendenqury = () => {
    return(
        <section class="py-24 bg-gray-200">
        <div class="wrapper mx-auto px-6">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              <img src={enquaryimg} alt="#" class="w-full h-full object-cover rounded-md"/>
              <div class="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black to-transparent">
                <h2 class="text-white text-3xl font-bold mb-4">Building stellar websites for early startups</h2>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="bg-white p-8 rounded-md shadow-lg">
                <h5 class="text-2xl font-bold text-gray-800 mb-4">Send inquiry</h5>
                <p class="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input type="text" class="p-4 border border-gray-300 rounded-md w-full" placeholder="Your Name" required/>
                    <input type="email" class="p-4 border border-gray-300 rounded-md w-full" placeholder="Your Email" required/>
                  </div>
                  <input type="text" class="p-4 border border-gray-300 rounded-md w-full mb-6" placeholder="Subject" required/>
                  <textarea class="p-4 border border-gray-300 rounded-md w-full mb-6" rows="4" placeholder="Message" required></textarea>
                  <button type="submit" class="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};
export default Sendenqury;