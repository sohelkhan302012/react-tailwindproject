const FAQ = () => {
    return(
        <section class="py-24 bg-white">
    <div class="wrapper mx-auto px-6">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3 mb-12 lg:mb-0">
          <h3 class="text-xl font-bold mb-4">Frequently asked questions</h3>
          <a href="#" class="text-blue-500 hover:underline">Contact us for more info</a>
        </div>
        <div class="w-full lg:w-2/3">
          <div id="accordionExample" class="accordion">
            <div class="accordion-item border border-gray-200 rounded mb-2">
              <h6 class="accordion-header">
                <button class="accordion-button text-left w-full py-4 px-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  <span class="font-semibold text-gray-800 mr-4">01</span> How much time does it take?
                </button>
              </h6>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="accordion-item border border-gray-200 rounded mb-2">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed text-left w-full py-4 px-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  <span class="font-semibold text-gray-800 mr-4">02</span> What is your class naming convention?
                </button>
              </h6>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="accordion-item border border-gray-200 rounded mb-2">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed text-left w-full py-4 px-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  <span class="font-semibold text-gray-800 mr-4">03</span> How do you communicate?
                </button>
              </h6>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="accordion-item border border-gray-200 rounded mb-2">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed text-left w-full py-4 px-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  <span class="font-semibold text-gray-800 mr-4">04</span> I have a bigger project. Can you handle it?
                </button>
              </h6>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="accordion-item border border-gray-200 rounded mb-2">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed text-left w-full py-4 px-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  <span class="font-semibold text-gray-800 mr-4">05</span> What is your class naming convention?
                </button>
              </h6>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
};
export default FAQ;