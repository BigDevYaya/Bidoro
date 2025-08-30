// src/components/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = Array(8).fill({
  name: 'Amaka Okafor',
  role: 'Customer',
  image: '/images/Image.png',
  text: `I love how easy it is to set my budget and get multiple offers. The escrow payment system gives me peace of mind, and I’ve discovered amazing deals from sellers near me.`,
});

export default function Testimonials() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
      <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
        See how buyers, sellers, and artisans are using our platform to shop smarter,
        sell faster, and connect with trust
      </p>

      <div className="mt-10 space-y-5">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 2.3 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-between">
                <p className="text-gray-700 text-sm mb-4">"{t.text}"</p>
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.2 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-between">
                <p className="text-gray-700 text-sm mb-4">"{t.text}"</p>
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
