import { useState, useRef, useEffect } from "react"
import TestimonialCard from "../card/TestimonialCard"
import { slides } from "~/data/testimonials"
import TestimonialModal from "~/components/modal/TestimonialModal"
import ArrowIcon from "~/components/icon/ArrowIcon"

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)
  const totalSlides = 3
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  // Pause videos when changing slides
  useEffect(() => {
    videoRefs.current.forEach((ref, index) => {
      if (ref && index !== activeSlide) {
        // This would work with actual YouTube embed
        const src = ref.src
        ref.src = src
      }
    })
  }, [activeSlide])

  return (
    <section id="customer-voice" className="py-10 bg-white">
      <div className="container max-w-7xl mx-auto overflow-visible px-[20px]">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-[28px] font-medium text-blue-500">お客様の声</h2>
          <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-1"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full h-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row mx-2 gap-5 px-5 md:px-0 pb-1">
                    <div className="flex-[1.2] min-h-full space-y-8">
                      <TestimonialCard
                        testimonial={slide.mainTestimonial}
                        onOpenModal={setSelectedTestimonial}
                      />
                    </div>

                    <div className="flex-1 flex flex-col min-h-full gap-6">
                      {slide.otherTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                          key={index}
                          testimonial={testimonial}
                          onOpenModal={setSelectedTestimonial}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-[10px] -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ArrowIcon direction="left" color="#007aff" className="w-12 h-12" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-[10px] -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ArrowIcon direction="right" color="#007aff" className="w-12 h-12" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 w-2 h-2 rounded-full focus:outline-none ${activeSlide === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </section>
  )
}

