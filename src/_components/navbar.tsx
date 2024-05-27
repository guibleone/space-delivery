import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="flex gap-5 md:gap-7 items-center">
      <button className="rounded-md border px-2 py-2 hover:cursor-pointer">
        <Link to={"/"}>
          <IoChevronBack size={30} />
        </Link>
      </button>
      <h1 className="font-semibold text-2xl md:text-4xl">{title}</h1>
    </nav>
  );
}
