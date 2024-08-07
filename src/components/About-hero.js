import React, { useState } from 'react';
import hero_img from '../images/hero-img.jpg';
const About_hero = function()
{
  const [number ,setNumber] = useState(0)

  const increaseCount = () => {
    setNumber(number + 1)
  }
  const discreaseCount = () => {
    if(number > 0) setNumber(number - 1)

  }
  const [user, setUser] = useState({
    name: 'sohel khan',
    age:15 ,
    mobile_number: 89898989,
  });

  // Function to update the object
  const changefulldata = () => {
    setUser(prevState => ({
      ...prevState,
      name: "sohel sheikh",
      age: 20,
      mobile_number: 9079828177,
    }));
  };

  const changeNumber = () => {
    setUser(prevState => ({
      ...prevState,
      mobile_number: 9680030086, 
    }));
  };
    return (
        <section className="py-[50px] md:py-20 lg:py-[100px]">
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
          <div className="mt-5">
            <p>count: {number}</p>

            <div className='flex justify-start items-center gap-x-3 mt-5'><button className="block bg-black text-white px-4 py-2 rounded-3 mx-2" onClick={increaseCount}>Increase count</button>
            <button className="block bg-black text-white px-4 py-2 rounded-3 mx-2" onClick={discreaseCount}>discrease count</button></div>

          </div>
          <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h2>Age: {user.mobile_number}</h2>
      <div className='flex justify-start items-center gap-x-3 mt-5'>
      <button className="block bg-black text-white px-4 py-2 rounded-3 mx-2"  onClick={() => changefulldata()}>change data</button>
      <button className="block bg-black text-white px-4 py-2 rounded-3 mx-2"  onClick={() => changeNumber()}>change number</button>
      </div>
      
    </div>
        </div>
      </section>
    )
}
export default About_hero;