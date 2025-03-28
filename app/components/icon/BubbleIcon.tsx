interface BubbleIconProps {
	className?: string;
	color?: string;
	direction?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export default function BubbleIcon({
	className = '',
	color = 'white',
	direction = 'bottomRight'
}: BubbleIconProps) {
	// Define rotation and flip based on direction
	const transform = {
		topLeft: 'scale(1, 1) rotate(0deg)',
		topRight: 'scale(-1, 1) rotate(0deg)',
		bottomLeft: 'scale(1, -1) rotate(0deg)',
		bottomRight: 'scale(-1, -1) rotate(0deg)',
	};

	return (
		<svg
			width="167"
			height="120"
			viewBox="0 0 167 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={{ transform: transform[direction] }}
		>
			<path
				d="M80 120C124.183 120 160 93.1372 160 60.0001C160 26.863 124.183 6.10352e-05 80 6.10352e-05C35.8172 6.10352e-05 0 26.863 0 60.0001C0 93.1372 35.8172 120 80 120Z"
				fill={color}
			/>
			<path
				d="M129.165 90.6587L135.33 81L151.154 97.9135L166.967 114.816L144.978 107.572L123 100.318L129.165 90.6587Z"
				fill={color}
			/>
		</svg>
	);
}