import { ReactNode } from "react";

type BtnProps = {
  dark: boolean;
  disabled: boolean;
  children: ReactNode;
  type: string;
  handleClick: () => void;
};

export default function Btn({
  children,
  type,
  dark,
  disabled,
  handleClick,
}: BtnProps) {
  return (
    <button
      className={`px-6 py-3 text-nowrap rounded-full font-bold 
      ${type === "p" && dark ? "bg-white" : ""} 
      ${type === "s" && dark ? "text-white border-solid border-2" : ""}
      ${type === "p" && !dark ? "bg-black text-white" : ""} 
      ${type === "s" && !dark ? "text-black border-solid border-2" : ""}
      ${type === "p" && disabled ? "bg-gray-400 text-white" : ""} 
      ${
        type === "s" && disabled
          ? "text-black border-solid border-2 border-gray-300"
          : ""
      }
      `}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
