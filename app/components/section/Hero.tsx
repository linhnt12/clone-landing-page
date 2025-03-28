import { useState } from "react"
import { coreValues, statistics, logos_hero, options } from "~/data/hero"
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
        <div className="container max-w-[1440px] mx-auto flex flex-col xxl:flex-row justify-center items-center">
          {/* Left Content */}
          <div className="w-full h-full xxl:w-2/3 h-[750px] flex items-center justify-center">
            <div className="w-full xxl:max-w-[800px] p-6 xxl:p-0 text-center xxl:text-start flex flex-col justify-between items-center gap-12 xxl:items-start xxl:gap-6">
              <div className="flex flex-col gap-12 xxl:gap-3">
                <h1 className="text-[32px] xxl:text-5xl text-black-800">あなたのイノベーションを加速する</h1>
                <h2 className="text-5xl xxl:text-[70px] font-black text-blue-500">となりのDXエキスパート</h2>
              </div>

              <div className="text-sm xxl:text-[22px] xxl:font-semibold flex justify-center xxl:block leading-8">
                <p className=" text-black-800">ベトナムオフショア開発
                  <span className=" text-black-800">への不安を</span>
                </p>
                <p className="text-black-800">
                  <span className="font-bold text-blue-500">「技術力」</span>と
                  <span className="font-bold text-blue-500">「コミュニケーション力」</span>の高さで払拭
                </p>
              </div>

              {/* Three Value Boxes */}
              <div className="w-[80%] xxl:w-full flex-wrap flex flex-row justify-between gap-4">
                {coreValues.map(({ title, description, bg }, index) => (
                  <div key={index} className={`${bg} flex-1 min-w-[163px] text-white px-4 xxl:px-6 pt-4 xxl:pt-8 pb-6 xxl:pb-10 rounded-[16px] text-center`}>
                    <p className="text-sm xxl:text-lg font-semibold mb-2 xxl:mb-0">{title}</p>
                    <p className="text-2xl xxl:text-4xl font-bold">{description}</p>
                  </div>
                ))}
              </div>

              {/* Certification & Awards Logos */}
              <div className="flex justify-center mb-6 xxl:mb-0">
                <div className="w-[342px] sm2:w-[513px] xxl:w-full grid grid-cols-2 sm2:grid-cols-3 xxl:grid-cols-6 gap-6 items-center justify-center">
                  {logos_hero.map((src, index) => (
                    <div key={index} className="w-full h-[72px] flex items-center justify-center">
                      <img
                        src={src || "/placeholder.svg"}
                        alt={`Logo ${index + 1}`}
                        className="max-w-full max-h-[72px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-blue-100 w-full xxl:w-1/3 p-8 xxl:p-6 h-full">
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
              <div className="flex justify-center mt-10 xxl:mb-8">
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
      </section>

      {/* Statistics Bar */}
      <section className="container max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-2 lg1:flex justify-between items-center lg1:my-2">
          {statistics.map(({ value, label }, index) => (
            <div
              key={index}
              className={`w-full flex justify-between items-center py-[1.5rem] lg1:py-0 ${index < statistics.length - 2 ? 'border-b border-gray-500' : ''} lg1:border-b-0`}
            >
              <div key={index} className={`w-full flex justify-center items-center ${index < statistics.length - 1 ? 'lg1:border-r lg1:border-gray-500' : ''} ${index % 2 == 0 ? 'border-r border-gray-500' : ''}`}

              >
                {/* Content of each item */}
                <div className="text-center flex flex-col justify-between items-center leading-[2.25rem] xl2:leading-[2.75rem]">
                  <div className="sm2:text-[28px] text-4xl xl2:text-4xl font-bold text-blue-500 mt-1 lg1:mt-3">{value}</div>
                  <div className="text-[18px] font-normal text-black-800">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

