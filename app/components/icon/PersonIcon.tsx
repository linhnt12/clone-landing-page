interface PersonIconProps {
	color?: string;
	className?: string;
}

export default function PersonIcon({
	color = 'white',
	className = ''
}: PersonIconProps) {
	return (
		<svg
			width="12"
			height="14"
			viewBox="0 0 12 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M0 14H12C12 10.7682 10.2972 8.03469 7.9374 7.03834C9.13069 6.38688 9.93515 5.17334 9.93515 3.76823C9.93515 1.68611 8.1653 0 5.97983 0C3.79436 0 2.02459 1.68611 2.02459 3.76823C2.02459 5.17334 2.82905 6.39965 4.02234 7.03834C1.70279 8.03469 0 10.7682 0 14Z"
				fill={color}
			/>
		</svg>
	);
}