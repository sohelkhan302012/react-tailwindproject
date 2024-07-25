import hero_img from '../images/hero-img.jpg';
const About_hero = function(){
    return (
        <section class="py-[50px] md:py-20 lg:py-[100px]">
        <div class="wrapper">
          <div
            class="flex flex-wrap -mx-4 justify-between gap-y-4 md:gap-y-0"
          >
            <div class="px-4 lg:w-1/2 md:w-1/2 sm:w-full w-full">
              <p
                class="font-medium text-base lg:text-lg text-[#282938] mb-2 leading-8"
              >
                About us
              </p>
              <h1
                class="font-semibold text-4xl lg:text-[54px] text-[#282938] pb-[31px] leading-[45px] lg:leading-[74px]"
              >
                Our designs solve problems
              </h1>
              <p class="leading-7 text-base font-normal text-[rgba(40,41,56,.7)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div class="px-4 lg:w-5/12 md:w-5/12 sm:w-full w-full">
              <img
                src={hero_img}
                alt="#"
               
              />
            </div>
          </div>
        </div>
      </section>
    )
}
export default About_hero;