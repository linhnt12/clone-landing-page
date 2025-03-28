import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { useState } from "react"
import TestimonialCard from "../card/TestimonialCard"
import { slides } from "~/data/testimonials"
import TestimonialModal from "~/components/modal/TestimonialModal"
import ArrowIcon from "~/components/icon/ArrowIcon"

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  return (
    <section id="customer-voice" className="pt-10 bg-white">
      <div className="container max-w-7xl mx-auto px-[20px]">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-[28px] font-medium text-blue-500">お客様の声</h2>
          <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-1"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row mx-2 gap-5 px-5 pb-[50px] md:px-0">
                <div className="flex-[1.2] space-y-8">
                  <TestimonialCard
                    testimonial={slide.mainTestimonial}
                    onOpenModal={setSelectedTestimonial}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  {slide.otherTestimonials.map((testimonial, i) => (
                    <TestimonialCard
                      key={i}
                      testimonial={testimonial}
                      onOpenModal={setSelectedTestimonial}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="swiper-prev absolute top-1/2 left-[10px] -translate-y-1/2 -translate-x-4 z-10 cursor-pointer">
            <ArrowIcon direction="left" color="#007aff" className="w-12 h-12" />
          </div>
          <div className="swiper-next absolute top-1/2 right-[10px] -translate-y-1/2 translate-x-4 z-10 cursor-pointer">
            <ArrowIcon direction="right" color="#007aff" className="w-12 h-12" />
          </div>
        </Swiper>
        
        {/* Dots Indicator with margin */}
        <div className="swiper-pagination mt-[40px] !flex justify-center"></div>
      </div>

      {/* Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </section>
  )
}