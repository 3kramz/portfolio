import React from 'react';

const Banner = () => {
    return (
        <div id="banner" class="hero lg:h-screen bg-base-200 overflow-hidden">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" class="w-[665px]"  />
          <div>
            <h1 class="text-[60px] font-bold font-cormor text-white">Hello! I'm</h1>
            <h1 class="text-[90px] font-bold font-cormor text-white">Sultan Ekram   </h1>
          
            <a href="https://drive.google.com/file/d/1BcUrl3prtbEEu3RCd8LTB0BqXGCS82xW/view?usp=sharing" download class="btn hover:btn-base-100">Get Resume</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;