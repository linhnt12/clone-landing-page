import { useEffect } from "react";

interface TestimonialModalProps {
  testimonial: {
    logo: string;
    company: string;
    position: string;
    video?: string;
    full_text: string;
  } | null;
  onClose: () => void;
}

export default function TestimonialModal({ testimonial, onClose }: TestimonialModalProps) {
  useEffect(() => {
    if (testimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [testimonial]);

  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 bg-[#00000080] transition-opacity duration-300 z-[2007] flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded-[10px] w-[600px] relative shadow-lg scale-95 transition-transform duration-300">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-[#7a7f82] text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-start p-6 pb-2">
            <img
              src={testimonial.logo}
              alt={`${testimonial.company} logo`}
              className="w-[60px] h-[60px] mr-4 object-contain"
            />
            <div>
              <h2 className="font-bold text-[20px] text-black-800 mb-1">
                {testimonial.company}
              </h2>
              <p className="font-medium text-black-500">{testimonial.position}</p>
            </div>
          </div>

          {testimonial.video && (
            <div className="aspect-video overflow-hidden">
              <iframe
                src={testimonial.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}

          <p
            className="text-black-700 leading-relaxed flex-grow"
            dangerouslySetInnerHTML={{
              __html: testimonial.full_text.replace(/\n/g, "<br />")
            }} />
        </div>
      </div>
    </div>
  );
}