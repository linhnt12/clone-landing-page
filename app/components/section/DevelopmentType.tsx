import DevelopmentStepCard from "../card/DevelopmentStepCard";
import { steps } from "~/data/development_type";

export default function DevelopmentType() {
  return (
    <section id="development-type" className="py-12">
      <div className="container max-w-7xl mx-auto flex justify-center">
        {/* Heading Section */}
        <div className="w-full px-[20px] lg1:w-3/4 lg1:px-0 mb-12 text-black-800">
          <h2 className="text-[40px] sm2:text-[32px] xl2:text-[40px] font-bold leading-[3rem]">
            カオピーズなら、<br />
            <span className="text-blue-500">開発体制の見直しが自由自在</span>！
          </h2>
          <p className="mt-6">
            お客様専任のチームをつくる「準委任開発（ラボ型開発）」と
            <br />
            従来型の「請負開発」を柔軟に組み合わせることによって、
            <br />
            アジャイルな開発体制を維持しながら、現場のコストカットを実現できます。
          </p>
        </div>
      </div>

      {/* Blue Background Section */}
      <div className="bg-blue-100 py-20" >
        <div className="container max-w-7xl mx-auto px-[20px] xl2:px-0">
          <div>
            <p className="text-black-800 text-lg">開発体制例</p>
            <h3 className="text-4xl font-bold text-blue-500">要件定義書・仕様書がない場合</h3>
          </div>

          {/* Development Process Flow */}
          <div className="relative max-w-7xl mx-auto mt-[72px] flex justify-center">
            <div className="w-full lg1:w-3/4 flex flex-col gap-6 relative lg:flex-row lg:gap-0">
              {steps.map((step, index) => (
                <DevelopmentStepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-14 lg:mt-20">
            <a href="https://kaopiz.com/ja-technology/" target="_blank">
              <button className="bg-blue-500 w-[380px] py-3 text-white rounded-full font-bold 
                  border border-blue-500 hover:bg-white hover:text-blue-500 transition">
                カオピーズの技術力を今すぐ確認
              </button>
            </a>
          </div>
        </div>
      </div >
    </section >
  );
}