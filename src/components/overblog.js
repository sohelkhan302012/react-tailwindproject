import blog1 from '../images/arabic-businessman-standing-on-street-and-using-laptop-9623794.png';
import blog2 from '../images/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png';
import blog3 from '../images/apple-monitors-326518.png';
const Overblog = () => {
    return(
        <section class="w-full pt-24">
  <div class="wrapper mx-auto">
    <h2 class="mb-10 text-2xl font-semibold">Our blog</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <img
src={blog1}            class="w-full h-48 object-cover"
            alt="..."
          />
          <div class="p-4">
            <label class="block mb-2 text-gray-500 text-sm">19 Jan 2022</label>
            <h6 class="text-lg font-semibold mb-2">
              How one Webflow user grew his single person consultancy from $0-100K in 14 months
            </h6>
            <p class="text-gray-600 mb-4">
              See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
            </p>
            <a href="#" class="flex items-center text-blue-500 hover:text-blue-700">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                class="ml-2"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#282938"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <img
            src={blog2}
            class="w-full h-48 object-cover"
            alt="..."
          />
          <div class="p-4">
            <label class="block mb-2 text-gray-500 text-sm">19 Jan 2022</label>
            <h6 class="text-lg font-semibold mb-2">
              How one Webflow user grew his single person consultancy from $0-100K in 14 months
            </h6>
            <p class="text-gray-600 mb-4">
              See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
            </p>
            <a href="#" class="flex items-center text-blue-500 hover:text-blue-700">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                class="ml-2"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#282938"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <img
            src={blog3}
            class="w-full h-48 object-cover"
            alt="..."
          />
          <div class="p-4">
            <label class="block mb-2 text-gray-500 text-sm">19 Jan 2022</label>
            <h6 class="text-lg font-semibold mb-2">
              How one Webflow user grew his single person consultancy from $0-100K in 14 months
            </h6>
            <p class="text-gray-600 mb-4">
              See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
            </p>
            <a href="#" class="flex items-center text-blue-500 hover:text-blue-700">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                class="ml-2"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#282938"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
};
export default Overblog;