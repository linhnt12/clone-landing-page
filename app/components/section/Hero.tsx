import { useState } from "react"
import { coreValues, statistics, certifications, awards, options } from "~/data/hero"
import { CustomCheckbox } from "../input/Checkbox"

export default function Hero() {
  const [agreed, setAgreed] = useState(false)
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

    const policyElement = document.querySelector("#contact-privacy-policy")

    if (policyElement) {
      policyElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })

      // Find and trigger the policy toggle in the contact section
      const policyToggle = document.querySelector("#contact-privacy-policy .underline")
      if (policyToggle) {
        policyToggle.click()
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value),
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
      e.target.style.border = "1px solid #f56c6c";
    } else {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...rest } = prevErrors
        return rest
      })
      e.target.style.border = "";
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

    setErrors(validationErrors);

    Object.keys(fieldNames).forEach((field) => {
      const inputElement = document.querySelector(`[name="${field}"]`);
      if (inputElement) {
        if (validationErrors[field]) {
          inputElement.style.border = "1px solid #f56c6c";
        } else {
          inputElement.style.border = "";
        }
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData)
    }
  }

  return (
    <>
      <section id="hero" className="bg-gray-100">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex flex-col xxl:flex-row justify-center">
            {/* Left Content */}
            <div className="w-full xxl:w-2/3 h-[750px] flex items-center justify-center gap-6">
              <div className="max-w-[800px] text-center xxl:text-start">
                <h1 className="text-[32px] xxl:text-5xl text-black-800">あなたのイノベーションを加速する</h1>
                <h2 className="text-5xl xxl:text-[70px] font-black text-blue-500 mb-6">となりのDXエキスパート</h2>

                <div className="mb-6 font-semibold">
                  <p className="text-[22px] text-black-800">ベトナムオフショア開発への不安を</p>
                  <p className="text-[22px] text-black-800">
                    <span className="text-blue-500">「技術力」</span>と
                    <span className="text-blue-500">「コミュニケーション力」</span>の高さで払拭
                  </p>
                </div>

                {/* Three Value Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[152px]">
                  {coreValues.map(({ title, description, bg }, index) => (
                    <div key={index} className={`${bg} text-white px-6 pt-8 pb-10 rounded-[16px] text-center`}>
                      <p className="text-lg font-semibold">{title}</p>
                      <p className="text-4xl font-bold">{description}</p>
                    </div>
                  ))}
                </div>

                {/* Certification Logos */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
                  {certifications.map((src, index) => (
                    <div key={index} className="w-[132px] h-[72px] flex items-center justify-center">
                      <img
                        src={src || "/placeholder.svg"}
                        alt={`Certification ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center mt-6">
                  {awards.map((src, index) => (
                    <div key={index} className="w-[132px] h-[72px] flex items-center justify-center">
                      <img
                        src={src || "/placeholder.svg"}
                        alt={`Certification ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="flex-1 min-w-[400px]">
              <div className="bg-blue-100 p-6 h-full">
                <h3 className="text-[28px] text-blue-500 text-center mb-8 font-bold">無料相談</h3>

                <form id="heroForm" className="text-black text-sm" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Company Name */}
                    <div className="relative">
                      <label className="block text-sm font-bold mb-2 flex items-center">
                        <span className="text-red-300 mr-1">*</span>
                        貴社名
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="i.e. Kaopiz"
                        className="w-full h-[30px] px-[11px] py-[1px] border border-gray-500 rounded-[4px] focus:outline-none focus:border-blue-500"
                      />
                      {errors.companyName && (
                        <p className="absolute top-full left-0 text-red-300 text-[12px] leading-none pt-0.5">{errors.companyName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-bold mb-2 flex items-center">
                        <span className="text-red-300 mr-1">*</span>
                        メールアドレス
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="i.e. john@mail.com"
                        className="w-full h-[30px] px-[11px] py-[1px] border border-gray-500 rounded-[4px] focus:outline-none focus:border-blue-500"
                      />
                      {errors.email && (
                        <p className="absolute top-full left-0 text-red-300 text-[12px] leading-none pt-0.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-sm font-bold mb-2 flex items-center">
                        <span className="text-red-300 mr-1">*</span>
                        お名前
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="i.e. 山田太郎"
                        className="w-full h-[30px] px-[11px] py-[1px] border border-gray-500 rounded-[4px] focus:outline-none focus:border-blue-500"
                      />
                      {errors.name && (
                        <p className="absolute top-full left-0 text-red-300 text-[12px] leading-none pt-0.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-sm font-bold mb-2 flex items-center">
                        <span className="text-red-300 mr-1">*</span>
                        電話番号
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="i.e. 123-456-7890"
                        className="w-full h-[30px] px-[11px] py-[1px] border border-gray-500 rounded-[4px] focus:outline-none focus:border-blue-500"
                      />
                      {errors.phone && (
                        <p className="absolute top-full left-0 text-red-300 text-[12px] leading-none pt-0.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="relative mb-[18px]">
                    <label className="block text-sm font-bold mb-2">
                      <span className="text-red-300 mr-1">*</span>
                      ご相談の種類
                    </label>

                    <div className="bg-gray-200 p-3 rounded-[4px] text-black-600 font-medium">
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center h-8">
                          <CustomCheckbox
                            id={`option${option.id}`}
                            value={option.id}
                            width="16px"
                            height="16px"
                            borderRadius="rounded-[3px]"
                            checked={agreed}
                            borderColor="border-black-400"
                            hoverBorderColor=""
                            onChange={handleCheckboxChange}
                            label={option.label}
                          />
                        </div>
                      ))}
                    </div>
                    {errors.inquiryTypes && (
                      <p className="absolute top-full left-0 text-red-300 text-[12px]">{errors.inquiryTypes}</p>
                    )}
                  </div>

                  {/* Privacy Policy Agreement */}
                  <div className="text-base mt-8">
                    <CustomCheckbox
                      id="privacy-policy"
                      width="16px"
                      height="16px"
                      borderRadius="rounded-[3px]"
                      flexItem="start"
                      borderColor="border-black-400"
                      hoverBorderColor="none"
                      onChange={() => setAgreed(!agreed)}
                      label={
                        <div className="block font-bold">
                          問い合わせにあたり、
                          <br />
                          <span className="underline cursor-pointer" onClick={handleShowPolicy}>
                            「個人情報の取り扱いについて」
                          </span>
                          に同意する
                        </div>}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-10 mb-8">
                    <button
                      type="submit"
                      className={`w-[400px] bg-blue-500 px-24 py-3 text-white rounded-full text-[22px] font-bold hover:bg-white 
                        border border-blue-500 hover:text-blue-500 transition ${agreed ? "" : "cursor-not-allowed"} transition-colors`}
                      disabled={!agreed}
                    >
                      送信
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="container max-w-6xl mx-auto flex justify-center items-center">
      <div className="w-full grid grid-cols-2 lg1:flex lg1:flex-wrap lg1:justify-between lg1:items-center py-2 px-8">
        {statistics.map(({ value, label }, index) => (
          <div key={index} className="flex justify-between items-center">
            {/* Content of each item */}
            <div className="text-center flex flex-col justify-center items-center py-2">
              <div className="text-[28px] xl2:text-4xl font-bold text-blue-500 mt-1">{value}</div>
              <div className="text-[18px] font-normal text-black-800">{label}</div>
            </div>

            {/* Add divider after each statistic except the last one */}
            {index < statistics.length - 1 && (
              <div className="bg-gray-500 w-[1px] h-auto self-stretch ml-4 mr-4 hidden lg1:block"></div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

