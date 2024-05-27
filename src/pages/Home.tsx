import AddressList from "../_components/address-list";
import Navbar from "../_components/navbar";

export default function Home() {
  return (
    <main className="w-full px-8 py-8 flex flex-col min-h-screen lg:mx-auto lg:max-w-screen-xl">
      <Navbar title={"Endereço"} />
      <AddressList />
      <section className="flex justify-center md:justify-end mt-14 gap-5">
        <button className="px-6 py-4 font-bold shadow-lg border rounded-xl">
          Cancelar
        </button>
        <button className="px-6 py-4 font-bold bg-blue-600 border text-white rounded-xl">
          Salvar mudanças
        </button>
      </section>
    </main>
  );
}
