import { useState } from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  handleValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  err: string;
}
export function InputField({
  name,
  label,
  type,
  placeholder,
  value,
  handleValueChange,
  err,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const isPasswordField = type === "password";
  return (
    <div className="flex flex-col gap-2 flex-1 w-full">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          name={name}
          id={name}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={handleValueChange}
          className="flex-1 min-h-[48px] w-full px-6 rounded-xl bg-white border-[1px] focus:border-[2px] border-solid focus:border-violet-500  border-gray-300"
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute left-3 top-[12px] bg-transparent border-none cursor-pointer text-md font-bold"
          >
            {showPassword ? "اخفاء" : "عرض"}
          </button>
        )}
      </div>
      <span className="text-sm text-red-500">{err}</span>
    </div>
  );
}
