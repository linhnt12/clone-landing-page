export default function Contact() {
	return (
		<section id="contact" className="py-20 bg-gray-100 text-center">
			<h2 className="text-3xl font-bold text-gray-800">Liên hệ chúng tôi</h2>
			<p className="mt-4 text-gray-600">Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất!</p>
			<form className="mt-6 max-w-lg mx-auto">
				<input
					type="text"
					placeholder="Tên của bạn"
					className="w-full p-3 border border-gray-300 rounded-md mb-4"
				/>
				<input
					type="email"
					placeholder="Email của bạn"
					className="w-full p-3 border border-gray-300 rounded-md mb-4"
				/>
				<textarea
					placeholder="Tin nhắn của bạn"
					className="w-full p-3 border border-gray-300 rounded-md mb-4"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
				>
					Gửi đi
				</button>
			</form>
		</section>
	);
}
