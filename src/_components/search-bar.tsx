import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <section className="flex flex-col md:flex-row gap-5 mt-10">
      <div className="md:w-2/3 flex justify-end items-center relative">
        <BiSearch size={25} className="absolute mr-2 w-10 text-gray-400" />
        <input
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-4 w-full"
        />
      </div>
      <button className="md:w-1/3 py-3 border border-blue-700 rounded-lg text-blue-700">
        Adicionar endereço
      </button>
    </section>
  );
}
