import { useState } from "react";

const CustomInput = ({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  classes,
  inputClass,
  onChange,
  onBlur,
  handleKeyPress,
  length,
  readOnly,
  min,
  autoComplete,
  inputMode,
}: {
  id?: string;
  label?: string;
  type: string;
  name: string;
  readOnly?: boolean;
  classes?: string;
  inputClass?: string;
  value?: string | number;
  placeholder: string;
  length?: number;
  min?: number;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  handleKeyPress?: (event: React.KeyboardEvent) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: (e: React.BaseSyntheticEvent) => void | any;
  autoComplete?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordType = showPassword ? "text" : "password";

  return (
    <div className={`${classes ?? ""}   relative`}>
      <label
        htmlFor={id}
        className="text-[#303030] font-light text-sm flex gap-2 items-center"
      >
        {label}
      </label>
      <input
        id={id}
        type={type === "password" ? passwordType : type}
        name={name}
        maxLength={length}
        min={min}
        inputMode={inputMode}
        className={`${
          inputClass ?? ""
        } block relative  focus:outline-none font-light  bg-[#F6F6F6] w-full h-[3.5rem] sm:h-14 rounded mt-1.5 pl-5 text-[0.875rem] `}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={handleKeyPress}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default CustomInput;
