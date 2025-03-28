export function CustomCheckbox({
  id,
  value,
  width = "22px",
  height = "22px",
  onChange,
  label,
  flexItem = "center",
  borderColor = "border-gray-300",
  hoverBorderColor = "hover:border-blue-500",
  checkedBorderColor = "checked:border-transparent",
  borderRadius = "rounded-sm"
}) {
  return (
    <div className={`flex items-${flexItem}`}>
      <div className="relative" style={{ width, height }}>
        {/* Checkbox */}
        <input
          id={id}
          type="checkbox"
          name="inquiryTypes"
          value={value}
          onChange={onChange}
          className={`peer w-full h-full appearance-none ${borderRadius} bg-white 
                     border ${borderColor} 
                     ${hoverBorderColor} 
                     checked:bg-blue-500 ${checkedBorderColor}`}
        />
        {/* SVG Icon Tick */}
        <svg
          className="absolute inset-0 m-auto pointer-events-none hidden peer-checked:block"
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="white"
        >
          <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 
                   L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 
                   A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 
                   A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
        </svg>
      </div>
      <label htmlFor={id} className="ml-2 block flex-1">
        {label}
      </label>
    </div>
  );
}
