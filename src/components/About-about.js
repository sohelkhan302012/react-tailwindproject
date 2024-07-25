import secondimg from '../images/vetical-img.jpg';

const About_about = () => {
    return(
        <section class="pb-[50px] md:pb-20 lg:pb-[100px]">
        <div class="wrapper">
          <div class="bg-[#F4F5F5] md:p-20 sm:p-15 p-4">
            <div
              class="flex flex-wrap -mx-4 justify-between gap-y-4 md:gap-y-0"
            >
              <div class="px-4 lg:w-1/2 md:w-1/2 sm:w-full w-full">
                <p class="font-medium text-base lg:text-lg text-[#282938] mb-1">
                  Who we are
                </p>
                <h3
                  class="font-semibold text-[27px] xl:text-[36px] text-[#282938] pb-4"
                >
                  Goal focussed
                </h3>
                <p class="leading-7 text-base font-normal text-[rgba(40,41,56,.7)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div class="px-4 lg:w-1/2 md:w-1/2 sm:w-full w-full">
                <h3
                  class="font-semibold text-[27px] xl:text-[38px] text-[#282938] pb-4 mt-[28px]"
                >
                  Continuous improvement
                </h3>
                <p class="leading-7 text-base font-normal text-[rgba(40,41,56,.7)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <img src={secondimg} alt="vertical-img" />
        </div>
      </section>
)
};
export default About_about;