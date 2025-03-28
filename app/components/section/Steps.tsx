const steps = [
  { number: 1, title: "お問い合わせ", description: "まずは課題や開発のかんたんな概要をお送りください。\n2営業⽇以内に担当よりご連絡いたします。" },
  { number: 2, title: "ヒアリング", description: "ご状況や開発の詳細を丁寧にヒアリングいたします。\nご不明点は何でもご質問ください。" },
  { number: 3, title: "ご提案", description: "ご契約期間・⼈員体制をカスタマイズし、\nコストメリットのある最適なご提案をいたします。" },
  { number: 4, title: "ご契約", description: "日本法人と、日本語でのご契約となります。\nお取引はもちろん日本円にて行います。" },
  { number: 5, title: "開発", description: "⽇本語が堪能なBrSEが開発チームとの間に⼊り、\n円滑に進⾏します。" },
];

const images = [
  { src: "/images/timeline_image_3.webp", alt: "Development process 3", style: "top-[36%] left-[11%] w-[78%] aspect-[32/42] rounded-b-[50vh]", objectPos: "object-[25%_40px]" },
  { src: "/images/timeline_image_1.webp", alt: "Development process 1", style: "top-0 left-0 w-[62%] aspect-[26/38] rounded-[50vh] border-[15px] border-white", objectPos: "object-[15%_0]" },
  { src: "/images/timeline_image_2.webp", alt: "Development process 2", style: "top-[16%] right-0 w-[57%] aspect-[24/30] rounded-[50vh] border-[15px] border-white", objectPos: "object-[50%_0]" },
];

function StepItem({ step }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[5rem] leading-tight aspect-square rounded-full bg-blue-500 flex flex-col items-center justify-center text-white">
          <div>STEP</div>
          <div className="text-[22px] font-bold">{step.number}</div>
        </div>
        <div className={`w-[2px] h-16 bg-blue-500  ${step.number === 5 ? 'invisible' : ''}`} />
      </div>

      <div>
        <h3 className="text-[30px] font-bold text-blue-500">{step.title}</h3>
        <p className="text-sm whitespace-pre-line">{step.description}</p>
      </div>
    </div>
  );
}


export default function DevelopmentSteps() {
  return (
    <section id="steps-of-implementation" className="pt-20 bg-white">
      <div className="container max-w-7xl mx-auto text-black-800">
        <div className="w-full px-5 lg1:px-0 lg1:w-3/4 mx-auto">
          <div className="w-[min(100%,676px)] lg1:w-[min(75%,676px)] mb-16">
            <h2 className="text-[40px] sm2:text-[32px] xl2:text-[40px] font-bold leading-[3rem]">
              カオピーズなら、
              <br />
              <span className="text-blue-500">5ステップ</span>
              で迅速に開発
            </h2>
            <p className="mt-6">
              カオピーズなら、お問い合わせからたったの5ステップで開発します。ヒアリングや現状調査も徹底して⾏うため、完成したシステムが「想定と違う」といったトラブルも起きません。
            </p>
          </div>

          <div className="flex 992:flex-row flex-col">
            {/* Left side: Steps */}
            <div className="flex-1">
              <div className="flex-1 flex flex-col">
                {steps.map((step) => (
                  <StepItem key={step.number} step={step} />
                ))}
              </div>
              <p className="text-sm mb-4">
                ※上記は一例です。実際の進⾏はヒアリングをもとに決定いたします。
              </p>
            </div>

            {/* Right side: Images */}
            <div className="flex-1 relative aspect-[410/722]">
              <div className="absolute inset-0">
                {images.map((image, index) => (
                  <div key={index} className={`absolute overflow-hidden ${image.style}`}>
                    <img src={image.src} alt={image.alt} className={`w-full h-full object-cover ${image.objectPos}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
