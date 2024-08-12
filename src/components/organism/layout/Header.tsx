import Link from "next/link";
import { User } from "../../atoms/icons";
import { Logo } from "@/components/atoms/brand/Logo";

export default function Header() {
  return (
    <header className="flex items-center sm:px-20 px-4 h-20 bg-black ">
      <div className="container flex m-auto gap-8">
        <div className="flex text-white items-center gap-2 text-2xl font-extrabold ">
          <Logo fill="white" />
          <span>كارتى</span>
        </div>
        <div className="flex flex-1 justify-center items-center gap-4 text-white">
          <Link href={"/"}>الرئيسية</Link>
          <Link href={"cards"}>قائمة البطاقات</Link>
        </div>

        <User stroke="white" />
      </div>
    </header>
  );
}
