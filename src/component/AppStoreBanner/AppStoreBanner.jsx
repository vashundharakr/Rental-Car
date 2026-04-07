import React from "react";

const AppStoreBanner = () => {
  return (
    <div
    data-aos="fade-up"
    data-aos-delay='500'
     className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl py-16 px-6 sm:px-12 text-center text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">

        {/* Decorative waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[200%] h-[200%] bg-white/20 rounded-full top-[-50%] left-[-50%] blur-3xl"></div>
          <div className="absolute w-[200%] h-[200%] bg-white/10 rounded-full bottom-[-50%] right-[-50%] blur-3xl"></div>
        </div>

        {/* Content */}
        <div data-aos="fade-up"
        data-aos-delay="500"
        className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Started with our app
          </h1>

          <p className="text-base sm:text-lg mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi neque
            nam sed quia!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;