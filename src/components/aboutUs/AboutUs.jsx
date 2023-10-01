import React from 'react';
import Missionimg from "../../assets/images/photo-1485965120184-e220f721d03e.avif";
import Vissionimg from "../../assets/images/photo-1602148740250-0a4750e232e9.avif";

function AboutUs(props) {
    const features = [
        {
            order: 'first',
            img: Missionimg,
            title: 'Our Vision',
            para: "Our mission is to provide a seamless and enjoyable e-bike rental experience for everyone. We strive to make your journey not only convenient but also memorable, allowing you to explore new horizons with confidence and ease. With our user-friendly platform and top-notch customer service, we aim to exceed your expectations at every step."
        },
        {
            order: 'last',
            img: Vissionimg,
            title: 'Our Mission',
            para: "We envision a world where eco-friendly commuting and exploration are accessible to all. By offering a wide range of high-quality electric bicycles, we aim to inspire people to embrace the power of electric mobility and create positive change for our environment."
        },
    ];

    return (
        <div>
            <h1 className="mt-20 text-center text-orange-500 text-3xl md:text-5xl font-quicksand font-bold">About Us</h1>
            <div className="grid grid-cols-1 gap-24">
                {features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-5 md:gap-20 mt-24">
                       <div className={`col-span-1 md:col-span-2 ${feature.order === 'last' ? 'order-last' : ''}`}>
                            <img className="w-full rounded-lg border-4 border-orange-500 p-2 " src={feature.img} alt="" />
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <h1 className="mt-6 md:mt-14 text-orange-500 text-3xl md:text-5xl font-quicksand font-bold">{feature.title}</h1>
                            <p className="mt-3 md:mt-6 text-black text-lg md:text-2xl font-roboto font-normal">{feature.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
