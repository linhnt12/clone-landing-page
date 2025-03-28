import BubbleIcon from "../icon/BubbleIcon";
import DotsIconTop from "../icon/DotsIconTop";
import DotsIconBottom from "../icon/DotsIconBottom";
import PersonIcon from "../icon/PersonIcon";

export default function DevelopmentStepCard({ step, index }) {
	return (
		<div
			className={`relative w-3/4 lg:w-1/4`}
			style={{ zIndex: 4 - index }}
		>
			{/* Speech Bubbles */}
			{step.bubbles && step.bubbles.map((bubble, bubbleIndex) => (
				<div
					key={bubbleIndex}
					className={`hidden absolute z-20 ${index === 1 ? "lg:hidden" : "lg:block"}`}
					style={{
						top: bubble.top,
						left: bubble.left,
						right: bubble.right,
						bottom: bubble.bottom,
					}}
				>
					<BubbleIcon className="absolute" direction={bubble.direction} />
					<p
						className="absolute text-blue-500 text-[18px] w-[167px] h-[120px] p-6 flex items-center justify-center"
						dangerouslySetInnerHTML={{
							__html: bubble.text.replace(/\n/g, "<br />"),
						}}
					/>
				</div>
			))}

			{step.bubbles && step.bubbles.map((bubble, bubbleIndex) => (
				<div
					key={bubbleIndex}
					className="block lg:hidden absolute z-20 top-[-1rem] right-[-2rem]"
				>
					<BubbleIcon className="absolute" direction="topRight" />
					<p
						className="absolute text-blue-500 text-[18px] w-[167px] h-[120px] p-6 flex items-center justify-center"
						dangerouslySetInnerHTML={{
							__html: bubble.text.replace(/\n/g, "<br />"),
						}}
					/>
				</div>
			))}

			{/* Main Card Content */}
			<div
				className={`relative ${step.bg} h-full w-[calc(100%+180px)] lg:w-[calc(100%+80px)] pt-8 pb-8 lg:pb-3 pl-12 flex ${index === 0 ? "lg:pl-[30px]" : "lg:pl-[43%]"
					} flex-col text-left
				[clip-path:polygon(0_0,calc(100%-180px)_0,100%_50%,calc(100%-180px)_100%,0_100%)]
				lg:[clip-path:polygon(0_0,calc(100%-80px)_0,100%_50%,calc(100%-80px)_100%,0_100%)]`}
			>
				{/* Content */}
				<div className="flex gap-2">
					<div className="grid w-fit grid-rows-5 grid-flow-col gap-1">
						{Array.from({ length: Math.ceil(step.num) }).map((_, i) => (
							<PersonIcon key={i} color="white" />
						))}
					</div>
					{step.icon_top && <DotsIconTop color="white" />}
				</div>


				<p className="text-white font-bold text-[22px] mt-6">{step.title}</p>
				<div className="flex gap-4">
					<p className="text-black mt-2">
						{step.type} <br />
						{step.effort} <br />
						{step.tech && <p>{step.tech}</p>}
					</p>
					{step.icon_bottom &&
						<div className="mt-4">
							<DotsIconBottom color="white" />
						</div>
					}
				</div>

			</div>
		</div>
	);
}
