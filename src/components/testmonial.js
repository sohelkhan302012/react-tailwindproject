const testmonial = () => {
    return(
        <section class="py-24 bg-gray-100">
    <div class="container mx-auto px-6">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-5/12 mb-12 lg:mb-0">
          <h2 class="text-2xl font-bold mb-4">What our clients say about us</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div class="w-full lg:w-7/12">
          <div id="carouselExample" class="relative" data-carousel="static">
            <div class="carousel-inner relative overflow-hidden w-full">
              <div class="carousel-item active">
                <h5 class="text-lg mb-4">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                </h5>
                <div class="flex items-center mt-5 gap-4">
                  <a href="#">
                    <img src="images/woman-in-collared-shirt-774909.png" alt="profile" class="rounded-full w-12 h-12" />
html
Copy code
                  </a>
                  <div>
                    <label class="font-semibold text-gray-800">Jenny Wilson</label>
                    <p class="text-gray-600">Vice President</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <h5 class="text-lg mb-4">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                </h5>
                <div class="flex items-center mt-5 gap-4">
                  <a href="#">
                    <img src="images/woman-in-collared-shirt-774909.png" alt="profile" class="rounded-full w-12 h-12" />
                  </a>
                  <div>
                    <label class="font-semibold text-gray-800">Jenny Wilson</label>
                    <p class="text-gray-600">Vice President</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <h5 class="text-lg mb-4">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                </h5>
                <div class="flex items-center mt-5 gap-4">
                  <a href="#">
                    <img src="images/woman-in-collared-shirt-774909.png" alt="profile" class="rounded-full w-12 h-12" />
                  </a>
                  <div>
                    <label class="font-semibold text-gray-800">Jenny Wilson</label>
                    <p class="text-gray-600">Vice President</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="absolute top-1/2 left-4 transform -translate-y-1/2" type="button" data-carousel-prev>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="20 0 10 48" fill="none">
                <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.0995 24)" fill="white"/>
                <path opacity="0.6" d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z" fill="#282938"/>
              </svg>
            </button>
            <button class="absolute top-1/2 right-4 transform -translate-y-1/2" type="button" data-carousel-next>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="58 0 50 48" fill="none">
                <ellipse cx="83.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA"/>
                <path d="M77.4141 35L76 31.7805L85.0305 24.0894L76 16.2195L77.4141 13L89 23.374V25.1626L77.4141 35Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
};
export default testmonial;