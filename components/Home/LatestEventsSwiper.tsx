"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { latestEvents } from "@/data/events";
import EventCard from "../EventCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
export default function LatestEventsSwiper() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            loop
            autoplay={{delay:3000,disableOnInteraction:false}}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
            }}
            className="pb-12"
        >
            {latestEvents.map((event) => (
                <SwiperSlide key={event.id}>
                    <EventCard event={event} />
                </SwiperSlide>
            ))}
        </Swiper>
    );

}