import AddressList from "../_components/address-list";
import Navbar from "../_components/navbar";

export default function Home() {
  return (
    <main className="w-full px-8 py-8 flex flex-col min-h-screen lg:mx-auto lg:max-w-screen-xl">
      <Navbar title={"Space Delivery"} />
      <AddressList />
      <section className="flex justify-center md:justify-end mt-14 gap-5">
        <button className=" py-3 px-4 ext-sm font-bold shadow-lg border rounded">
          Cancelar
        </button>
        <button className="py-3 px-4 text-sm font-bold bg-blue-600 border text-white rounded">
          Salvar mudanças
        </button>
      </section>
    </main>
  );
}
