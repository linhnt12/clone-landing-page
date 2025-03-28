interface CheckIconProps {
	color?: string;
	strokeWidth?: number;
	className?: string;
}

export default function CheckIcon({
	color = '#3C9CD7',
	strokeWidth = 4,
	className = ''
}: CheckIconProps) {
	return (
		<svg
			width="28"
			height="21"
			viewBox="0 0 28 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M2 9.65708L9.76162 18L26 2"
				stroke={color}
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
			/>
		</svg>
	);
}