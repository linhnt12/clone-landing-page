import RightArrow from "../icon/RightArrow";

export default function TestimonialCard({
  testimonial,
  onOpenModal
}: {
  testimonial: any;
  onOpenModal: (testimonial: any) => void;
}) {
  return (
    <div className="bg-white rounded-[10px] shadow-md relative h-full flex flex-col">
      {/* Video */}
      {testimonial.video && (
        <div className="aspect-video rounded-t-[10px] flex-1 overflow-hidden">
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

      {/* Nội dung */}
      <div className="p-6 flex flex-col flex-1 flex-grow">
        <div className="flex items-start mb-2">
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

        <p className="text-black-700 leading-relaxed pt-2 flex-grow">
          {testimonial.text}
        </p>

        {/* Link */}
        <div className="flex justify-end mt-2 items-center">
          <button
            className="text-blue-500 font-semibold cursor-pointer flex items-center"
            onClick={() => onOpenModal(testimonial)}
          >
            詳細を見る
            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-blue-500 text-blue-500 ml-1">
              <RightArrow className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </div >
  );
}
