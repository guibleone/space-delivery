import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../_components/navbar";

export default function AddressRegister() {
  const [planet, setPlanet] = useState("Terra");

  const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanet(event.target.value);
  };

  return (
    <main className="w-full px-8 py-8 flex flex-col min-h-screen lg:mx-auto lg:max-w-screen-xl">
      <Navbar button title={"Cadastro"} />
      <div className="flex flex-col mt-14 gap-3">
        <h1 className="text-lg font-medium">Planeta *</h1>
        <select
          className="border border-gray-300 rounded-lg p-2 md:py-4"
          value={planet}
          onChange={handlePlanetChange}
        >
          <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
            Terra
          </option>
          <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
            Marte
          </option>
        </select>
      </div>
      <div className="flex flex-col mt-10 gap-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">Localização pin</h1>
          <h1 className="text-lg text-blue-600 font-medium">
            Mudar localização pin
          </h1>
        </div>
        <img
          src="https://developers.arcgis.com/documentation/static/change-the-place-label-language-67a7240aeafa12440103a7b5c0d1b1f8.png"
          className="h-20 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col mt-14 gap-3 w-full">
        <h1 className="text-lg font-medium">Nome completo *</h1>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            className="border w-full md:w-1/2 border-gray-300 rounded-lg p-2 md:py-4"
          />
          <input
            type="text"
            className="border w-full md:w-1/2 border-gray-300 rounded-lg p-2 md:py-4"
          />
        </div>
      </div>
      {planet === "Terra" && (
        <>
          <div className="flex flex-col mt-14 gap-3 w-full">
            <h1 className="text-lg font-medium">Endereço *</h1>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 md:py-4"
            />
          </div>
          <div className="flex flex-col md:flex-row mt-14 gap-5 w-full">
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              <h1 className="text-lg font-medium">Cidade *</h1>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 md:py-4"
              />
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              <h1 className="text-lg font-medium">CEP *</h1>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 md:py-4"
              />
            </div>
          </div>
        </>
      )}
      {planet === "Marte" && (
        <div className="flex flex-col mt-14 gap-3 w-full">
          <h1 className="text-lg font-medium">Lote *</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 md:py-4"
          />
        </div>
      )}
      <div className="flex flex-col md:flex-row mt-14 w-full gap-5">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <h1 className="text-lg font-medium">Etiqueta</h1>
          <select className="border border-gray-300 rounded-lg p-2 md:py-4 w-full">
            <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
              Apartamento
            </option>
            <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
              Casa
            </option>
            <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
              Fábrica
            </option>
            <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
              Armazém
            </option>
          </select>
        </div>
        {planet === "Terra" && (
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <h1 className="text-lg font-medium">Província *</h1>
            <select className="border border-gray-300 rounded-lg p-2 md:py-4">
              <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
                São Paulo
              </option>
              <option className="border bg-gray-300 rounded-lg p-2 md:py-4 w-full">
                Garzupalop
              </option>
            </select>
          </div>
        )}
      </div>
      <section className="flex items-center justify-center md:justify-end mt-14 gap-5">
        <Link
          to={"/"}
          className="px-6 py-4 font-bold shadow-lg border rounded-xl"
        >
          Cancelar
        </Link>
        <Link
          to={"/"}
          className="py-3 px-4 text-sm font-bold bg-blue-600 border text-white rounded"
        >
          Salvar mudanças
        </Link>
      </section>
    </main>
  );
}
