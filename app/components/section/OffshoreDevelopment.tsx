import CheckIcon from "~/components/icon/CheckIcon";

const cards = [
  {
    title: "老朽化システムを",
    subtitle: "最新技術で作り直したい",
    text1: "仕様書なし",
    text2: "対応可",
  },
  {
    title: "既存サービスへ",
    subtitle: "機能を柔軟に追加したい",
    text1: "開発体制",
    text2: "自由自在",
  },
  {
    title: "既存ソフトを",
    subtitle: "クラウドで展開したい",
    text1: "AWS利用料",
    text2: "5%OFF",
  },
  {
    title: "開発・保守の",
    subtitle: "コストを抑えたい",
    text1: "開発・保守コスト",
    text2: "30%減",
    text3: "※目安",
  },
];

export default function OffshoreDevelopment() {
  return (
    <section
      id="problem-container"
      className="relative overflow-hidden
        [background-image:linear-gradient(to_top_left,white_49.75%,transparent_50.25%),url('/images/offshore_background.jfif')] 
        bg-[position:bottom,center] 
        bg-[size:100%_min(13vw,240px),cover] 
        bg-no-repeat
        
        xl2:[background-image:linear-gradient(to_top_left,white_49.75%,transparent_50.25%),url('/images/offshore_background.jfif')] 
        xl2:bg-[position:bottom,center] xl2:bg-[size:100%_min(13vw,240px),cover] xl2:bg-no-repeat
        
        xxl:[background-image:url('/images/offshore_background.jfif')] 
        xxl:bg-center 
        xxl:bg-cover 
        xxl:bg-no-repeat"
    >

      {/* Content Container */}
      <div className="relative z-10 py-4 xl2:pt-24 xl2:pb-10 max-w-7xl xl2:h-[1072px] mx-auto px-6 xl2:px-0">
        {/* Headings */}
        <div className="text-center text-white leading-[48px]">
          <h2 className="font-bold text-[28px] sm2:text-[32px] xxl:text-[40px]">カオピーズのオフショア開発</h2>
          <h3 className="font-bold sm2:font-normal sm2:mt-12 text-[24px] sm2:text-[32px] xl2:text-[40px]">システム開発のお悩み、一緒に解決します！</h3>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-4 gap-6 text-black-800 mt-11">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-[4px] shadow-lg relative p-6">
              {/* Icon Check */}
              <div className="absolute top-4 right-4 w-6 h-6 text-blue-500 bg-[#edf8ff]">
                <CheckIcon color="#3C9CD7" />
              </div>

              {/* Title & Subtitle */}
              <div>
                <p className="text-base sm2:text-[.8rem] xl2:font-medium xl2:text-base">{card.title}</p>
                <p className="font-bold text-[22px] mt-1 xl2:text-[22px] sm2:text-[18px]">{card.subtitle}</p>
              </div>

              {/* Rounded Info Box */}
              <div className="flex justify-center mt-[26px]">
                <div className={`bg-blue-500 text-white rounded-full aspect-square flex flex-col items-center justify-center text-center w-[200px] ${card.text3 ? "pt-[1.5rem]" : ""}`}>
                  <p className="text-lg font-normal">{card.text1}</p>
                  <p className="text-[34px] sm2:text-3xl xl2:text-[34px] mt-2 font-bold">{card.text2}</p>
                  {card.text3 && <p className="text-lg">{card.text3}</p>}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Text Overlay */}
        <div className="container max-w-7xl mx-auto mt-8">
          <div className="bg-white shadow-md xl2:bg-opacity-80 xl2:shadow-none py-12 px-6 text-center rounded-lg">
            <p className="text-black mt-6 font-normal">カオピーズには日本語堪能なBrSE（ブリッジSE）が多数在籍。</p>
            <p className="text-blue-500 text-[34px] sm2:text-3xl xl2:text-[34px] font-bold mt-4">「言葉が伝わらない」不安とは無縁です。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
