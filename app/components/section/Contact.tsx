import { useState } from "react"
import { privacyPolicy } from "~/data/privacyPolicy"
import { CustomCheckbox } from "../input/Checkbox"

const options = [
	{ id: 1, label: "⽼朽化に伴うシステム⼊れ換え" },
	{ id: 2, label: "既存システムの改修" },
	{ id: 3, label: "パッケージソフトのクラウド化" },
	{ id: 4, label: "ベンダーを探している" },
	{ id: 5, label: "新規事業開発をしたい" },
	{ id: 6, label: "まずは話を聞きたい" },
	{ id: 7, label: "その他" },
]

export default function Contact() {
	const [agreed, setAgreed] = useState(false)
	const [showPolicy, setShowPolicy] = useState(false)
	const [formData, setFormData] = useState({
		companyName: "",
		email: "",
		name: "",
		phone: "",
		inquiryTypes: [],
	})
	const [errors, setErrors] = useState({})

	const handleShowPolicy = (e) => {
		e.preventDefault()
		setShowPolicy(!showPolicy)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: checked ? [...prevData[name], e.target.value] : prevData[name].filter((item) => item !== e.target.value),
		}))
	}

	const handleBlur = (e) => {
		const { name, value } = e.target
		if (!value.trim()) {
			const fieldNames = {
				companyName: "貴社名",
				email: "メールアドレス",
				name: "お名前",
				phone: "電話番号",
				inquiryTypes: "ご相談の種類",
			}

			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: `「${fieldNames[name] || name}」をご入力ください。`,
			}))
		} else {
			setErrors((prevErrors) => {
				const { [name]: removedError, ...rest } = prevErrors
				return rest
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const validationErrors = {}
		const fieldNames = {
			companyName: "貴社名",
			email: "メールアドレス",
			name: "お名前",
			phone: "電話番号",
			inquiryTypes: "ご相談の種類",
		}

		if (!formData.companyName) validationErrors.companyName = `「${fieldNames.companyName}」をご入力ください。`
		if (!formData.email) validationErrors.email = `「${fieldNames.email}」をご入力ください。`
		if (!formData.name) validationErrors.name = `「${fieldNames.name}」をご入力ください。`
		if (!formData.phone) validationErrors.phone = `「${fieldNames.phone}」をご入力ください。`
		if (formData.inquiryTypes.length === 0)
			validationErrors.inquiryTypes = `「${fieldNames.inquiryTypes}」をご選択ください。`

		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			console.log("Form submitted successfully", formData)
		}
	}

	return (
		<section
			id="contact"
			className="py-20 bg-blue-400 bg-cover bg-no-repeat"
			style={{ backgroundImage: "url('/images/contact_background.png')" }}
		>

			<div className="container max-w-7xl mx-auto z-10">
				<h2 className="text-[32px] xl2:text-[40px] font-bold text-white text-center">お問い合わせ</h2>

				<div className="w-full px-6 mt-6">
					<div className="bg-[#fffc] rounded-[1rem] px-12 py-6">
						<form
							id="contactForm"
							className="flex flex-col xxl:flex-row h-full text-black-800 xxl:gap-6 py-4 xxl:py-0"
							onSubmit={handleSubmit}
						>
							<div className="flex-1">
								<div className="relative mb-[18px]">
									<label className="block text-sm flex items-center mb-2">
										<span className="text-red-500 mr-1">*</span>
										貴社名
									</label>
									<input
										type="text"
										placeholder="i.e. Kaopiz"
										name="companyName"
										value={formData.companyName}
										onChange={handleChange}
										onBlur={handleBlur}
										className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
									/>
									{errors.companyName && <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.companyName}</p>}
								</div>

								<div className="relative mb-[18px]">
									<label className="block text-sm flex items-center mb-2">
										<span className="text-red-500 mr-1">*</span>
										メールアドレス
									</label>
									<input
										type="email"
										placeholder="i.e. john@mail.com"
										name="email"
										value={formData.email}
										onChange={handleChange}
										onBlur={handleBlur}
										className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
									/>
									{errors.email && <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.email}</p>}
								</div>

								<div className="relative mb-[18px]">
									<label className="block text-sm flex items-center mb-2">
										<span className="text-red-500 mr-1">*</span>
										お名前
									</label>
									<input
										type="text"
										placeholder="i.e. 山田太郎"
										name="name"
										value={formData.name}
										onChange={handleChange}
										onBlur={handleBlur}
										className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
									/>
									{errors.name && <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.name}</p>}
								</div>

								<div className="relative mb-[18px]">
									<label className="block text-sm flex items-center mb-2">
										<span className="text-red-500 mr-1">*</span>
										電話番号
									</label>
									<input
										type="tel"
										placeholder="i.e. 123-456-7890"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										onBlur={handleBlur}
										className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
									/>
									{errors.phone && <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.phone}</p>}
								</div>
							</div>

							<div className="flex-1 relative mb-[18px]">
								<label className="block text-sm mb-2 opacity-100">
									<span className="text-red-500 mr-1">*</span>
									ご相談の種類
								</label>

								<div className="bg-white py-3 px-4 border border-gray-300 rounded-lg flex flex-col gap-6">
									{options.map((option, index) => (
										<CustomCheckbox
											key={index}
											id={`option${index}`}
											value={option.id}
											onChange={handleCheckboxChange}
											label={option.label}
										/>
									))}
								</div>
								{errors.inquiryTypes && <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.inquiryTypes}</p>}
							</div>
						</form>
					</div>

					<div id="contact-privacy-policy" className="flex justify-center pb-4">
						<div className="flex items-center pt-4 rounded-lg">
							<CustomCheckbox
								id="privacy-policy"
								value="privacy-policy"
								onChange={() => setAgreed(!agreed)}
								label={
									<div className="ml-2 block text-[16px] text-white font-semibold">
										問い合わせにあたり、
										<span
											className="underline cursor-pointer"
											onClick={handleShowPolicy}
										>
											「個人情報の取り扱いについて」
										</span>
										に同意する
									</div>
								}
							/>
						</div>
					</div>

					{showPolicy && (
						<div className="bg-white max-w-[694px] mx-auto rounded-xl p-4 my-4 text-black-800">
							<p>【{privacyPolicy.title}】</p>
							<p>
								<b>{privacyPolicy.description}</b>
							</p>
							{privacyPolicy.sections.map((section, index) => (
								<div key={index}>
									<b>{section.title}</b>
									<br />
									{Array.isArray(section.content) ? (
										section.content.map((content, idx) => (
											<span key={idx} style={{ paddingLeft: content.paddingLeft }}>
												{content.text} {idx === section.content.length - 1 ? "" : <br />}
											</span>
										))
									) : (
										<span style={{ paddingLeft: section.paddingLeft }}>{section.content}</span>
									)}
									<br />
								</div>
							))}
						</div>
					)}

					<div className="flex justify-center mt-6">
						<button
							type="submit"
							form="contactForm"
							onClick={handleSubmit}
							className={`bg-blue-500 text-white px-24 py-3 rounded-sm text-[22px] font-semibold 
								${agreed ? "" : "cursor-not-allowed"} border border-blue-500 hover:bg-white hover:text-blue-500 transition`}
							disabled={!agreed}
						>
							送信
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

