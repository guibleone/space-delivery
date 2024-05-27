import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  button?: boolean;
}

export default function Navbar({ title, button }: NavbarProps) {
  return (
    <nav className="flex justify-between w-full gap-5 md:gap-7 items-center">
      {button && (
        <button className="rounded-md border px-2 py-2 hover:cursor-pointer">
          <Link to={"/"}>
            {" "}
            <IoChevronBack size={30} />
          </Link>
        </button>
      )}
      <h1 className="font-semibold text-2xl md:text-4xl text-gray-900">{title}</h1>

      <img className="self-end h-12 w-12" src="/favicon.ico" />
    </nav>
  );
}
