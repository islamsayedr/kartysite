import { User } from "../atoms/icons";

export default function Header() {
  return (
    <header className="flex items-center sm:px-20 px-4 h-20 bg-black ">
      <div className="container flex m-auto gap-8">
        <div className="flex flex-1 gap-4">
          <div className="flex text-white items-center gap-2 text-2xl font-extrabold ">
            <span>كارتى</span>
          </div>
        </div>

        <User stroke="white" />
      </div>
    </header>
  );
}
