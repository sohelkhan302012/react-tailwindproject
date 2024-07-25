import manimg from '../images/man img.jpg';
import womanimg from '../images/female group.jpg';
const About_mission = (function () {
    return function About_mission() {
      return (
        <section className="py-[50px] md:py-20 lg:py-[100px] bg-[#EEF4FA]">
          <div className="wrapper">
            <div className="flex flex-wrap -mx-4 gap-y-6 md:gap-y-24 justify-between">
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full px-4">
                <p className="font-medium text-base lg:text-lg text-[#282938]">
                  Our Mission
                </p>
                <h3 className="font-semibold text-[27px] xl:text-[38px] text-[#282938] py-4">
                  Inspire, Innovate, Share
                </h3>
                <p className="leading-7 text-base font-normal text-[rgba(40,41,56,.7)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 sm:w-full w-full px-4">
                <img src={manimg} alt="#" className="" />
              </div>
              <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 sm:w-full w-full px-4 order-2 md:order-1">
                <img src={womanimg} alt="#" className="" />
              </div>
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full px-4 order-1 md:order-2">
                <p className="font-medium text-base lg:text-lg text-[#282938]">
                  Our Vision
                </p>
                <h3 className="font-semibold text-[27px] xl:text-[38px] text-[#282938] py-4">
                  Laser focus
                </h3>
                <p className="leading-7 text-base font-normal text-[rgba(40,41,56,.7)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };
  })();
  
  export default About_mission;
  