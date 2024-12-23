import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import Lottie from "lottie-react";

// Import your Lottie JSON files
import welcomeAnimation from "./welcome.json";
import gearAnimation from "./gear.json";
import performanceAnimation from "./performance.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";






const Banner = () => {
    return (
        <div className="w-full h-[500px] bg-gray-100 " >
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="h-full bg-blue-500 text-white flex flex-col justify-center items-center text-center px-4"style={{ backgroundImage: "url('https://i.ibb.co.com/1KbFFvg/pngtree-food-seasoning-food-banner-picture-image-1105676.png')" }}>
                        <div className="w-72">
                            <Lottie animationData={welcomeAnimation} loop={true} />
                        </div>
                        <h2 className="text-4xl font-bold mt-4">Welcome to Sports Store</h2>
                        <p className="mt-2 text-lg">Discover top-quality equipment for every sport.</p>
                        <Link to={"/AllFoods/:id"} className="btn btn-primary mt-6">Shop Now</Link >
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="h-full bg-green-500 text-white flex flex-col justify-center items-center text-center px-4"
                    style={{ backgroundImage: "url('https://i.ibb.co.com/z5LP8p6/istockphoto-530581630-612x612.jpg')" }}>
                        <div className="w-72">
                            <Lottie animationData={gearAnimation} loop={true} />
                        </div>
                        <h2 className="text-4xl font-bold mt-4">Your Game, Your Gear</h2>
                        <p className="mt-2 text-lg">Customize your equipment to match your unique style.</p>
                        <Link to={"/AllFoods/:id"}  className="btn btn-secondary mt-6">Explore Customization</Link >
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="h-full bg-red-500 text-white flex flex-col justify-center items-center text-center px-4"
                     style={{ backgroundImage: "url('https://i.ibb.co.com/L1trtDn/istockphoto-1448720788-612x612.jpg')" }}>
                        <div className="w-72">
                            <Lottie animationData={performanceAnimation} loop={true} />
                        </div>
                        <h2 className="text-4xl font-bold mt-4">Unleash Your Potential</h2>
                        <p className="mt-2 text-lg">Find gear that boosts your performance and confidence.</p>
                        <Link to={"/AllFoods/:id"} className="btn btn-accent mt-6">Learn More</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
