interface ArrowIconProps {
	direction?: 'left' | 'right';
	color?: string;
	className?: string;
}

export default function ArrowIcon({
	direction = 'right',
	color = '#007aff',
	className = ''
}: ArrowIconProps) {
	const rotation = direction === 'left' ? 180 : 0;

	return (
		<svg
			width="11"
			height="20"
			viewBox="0 0 11 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={{ transform: `rotate(${rotation}deg)` }}
		>
			<path
				d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
				fill={color}
			/>
		</svg>
	);
}