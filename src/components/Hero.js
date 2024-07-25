import Heroimg from '../images/Illustration.png';
const Hero = () => {
    return(
        <section class="pt-12 pb-16 bg-gray-800 text-white">
  <div class="wrapper mx-auto px-4">
    <div class="flex flex-wrap items-center">
      <div class="w-full lg:w-1/2">
        <div class="hero-content">
          <h1 class="text-4xl font-bold mb-4">
            Building stellar websites for early startups
          </h1>
          <p class="text-opacity-75 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <div class="flex flex-wrap">
            <a href="#" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">View our work</a>
            <a href="#" class="bg-gray-600 text-white py-2 px-4 rounded-lg ml-3 flex items-center hover:bg-gray-700">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none" class="ml-2">
                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img src={Heroimg} alt="img" class="w-full h-auto"/>
      </div>
    </div>
  </div>
</section>
    )
};
export default Hero;