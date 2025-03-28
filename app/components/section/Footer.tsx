const socialLinks = [
	{ href: "https://x.com/kaopizofficial", icon: "fab fa-twitter", bg: "bg-[#1DA1F2]" },
	{ href: "https://www.facebook.com/com.kaopiz", icon: "fab fa-facebook-f", bg: "bg-[#4267B2]" },
	{ href: "https://www.linkedin.com/company/kaopiz/", icon: "fab fa-linkedin-in", bg: "bg-[#0A66C2]" },
	{ href: "https://www.instagram.com/kaopiz", icon: "fab fa-instagram", bg: "bg-gradient-to-r from-purple-500 to-pink-500" },
	{ href: "https://www.youtube.com/@kaopizprnoibo9707/about", icon: "fab fa-youtube", bg: "bg-[#FF0000]" },
];

const certifications = [
	"/images/cert_1.webp",
	"/images/cert_2.webp",
	"/images/cert_3.webp",
	"/images/cert_4.webp",
	"/images/cert_5.png",
	"/images/cert_6.png",
];

const offices = [
	{
		name: "株式会社カオピーズ",
		locations: ["〒171-0022\n東京都豊島区南池袋3-8-8\nTHE CORNER 池袋3F"],
	},
	{
		name: "Kaopiz Software., JSC",
		locations: [
			"4F - 5F, CT1 - C14 Bac Ha building, To Huu street, Nam Tu Liem district, Hanoi",
			"12F, SHB Building, 206 Phan Chau Trinh, Phuoc Ninh, Hai Chau, Da Nang",
		],
	},
	{
		name: "Kaopiz Holdings., JSC",
		locations: [
			"4F - 5F, CT1 - C14 Bac Ha building, To Huu street, Nam Tu Liem district, Hanoi",
		],
	},
];

export default function Footer() {
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const element = document.getElementById('contact');
		if (element) {
			const yOffset = -96; // header height
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({
				top: y,
				behavior: 'smooth',
			});
		}
	};

	return (
		<footer className="bg-white text-sm">
			<div className="max-w-[1400px] mx-auto pt-8 px-5 xl2:px-0">
				<div className="flex flex-col space-y-4 mb-10  text-black-800">
					<p className="mb-2 font-semibold">
						私たちカオピースは
						<br />
						お客様のビジネスの成功と、その先にある感動を創造します。
					</p>

					{/* Logo and Social Media */}
					<div className="flex flex-wrap gap-6 items-center space-x-1">
						<img src="/images/logo.png" alt="Logo" className="h-10 mr-10" />
						<div className="flex space-x-3">
							{socialLinks.map(({ href, icon, bg }, index) => (
								<a
									key={index}
									href={href}
									className={`${bg} text-white w-10 h-10 flex items-center justify-center rounded-full text-[16px] hover:opacity-80 transition`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className={icon}></i>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-8 p-6 text-black-700">
					<div className="col-span-2">
						<h3 className="mb-[15px]">株式会社カオピーズ</h3>
						<div className="flex items-start space-x-2 mb-2">
							<img src="/images/position.png" className="h-5" />
							<p className=" 992:block hidden">
								〒171-0022
								<br />
								東京都豊島区南池袋3-8-8
								<br />
								THE CORNER 池袋3F
							</p>
							<p className="992:hidden block">
								〒171-0022 東京都豊島区南池袋3-8-8 THE CORNER 池袋3F
							</p>
						</div>
					</div>

					<div className="col-span-5">
						<h3 className="mb-3">Kaopiz Software., JSC</h3>
						<div className="flex items-start space-x-2 mb-4">
							<img src="/images/position.png" className="h-5" />
							<p>4F - 5F, CT1 - C14 Bac Ha building, To Huu street, Nam Tu Liem district, Hanoi</p>
						</div>
						<div className="flex items-start space-x-2">
							<img src="/images/position.png" className="h-5" />
							<p>12F, SHB Building, 206 Phan Chau Trinh, Phuoc Ninh, Hai Chau, Da Nang</p>
						</div>
					</div>

					<div className="col-span-5">
						<h3 className="mb-3">Kaopiz Holdings., JSC</h3>
						<div className="flex items-start space-x-2">
							<img src="/images/position.png" className="h-5" />
							<p>4F - 5F, CT1 - C14 Bac Ha building, To Huu street, Nam Tu Liem district, Hanoi</p>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="flex flex-wrap items-center justify-between flex-col gap-6 md:flex-row mt-8 pt-6 border-t border-gray-200 text-black-800">
					{/* Certifications */}
					<div className="flex flex-wrap items-center gap-4">
						{certifications.map((cert, index) => (
							<img key={index} src={cert} alt={`Certification ${index + 1}`} className="h-10" loading="lazy" />
						))}
					</div>

					<div className="flex md:mt-0">
						<a
							href="#contact"
							onClick={handleSmoothScroll}
							className="hover:underline mr-1"
						>
							お問い合わせ
						</a> |
						<a
							href="https://kaopiz.com/ja-privacy-policy/"
							target="_blank"
							className="hover:underline ml-1"
						>
							個人情報保護方針
						</a>
					</div>
				</div>
			</div>

			{/* Blue Bottom Border */}
			<div className="h-5 md:mt-8 bg-blue-500"></div>
		</footer >
	)
}