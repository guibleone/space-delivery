import { useState } from "react";
import { data } from "../utils";
import AddressCard from "./address-card";
import SearchBar from "./search-bar";
import Button from "./button";

export default function AddressList() {
  const [addresses, setAddresses] = useState(
    data.map((address) => ({ ...address, isChosen: false }))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("Terra");

  const selectAddress = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id
          ? { ...address, isChosen: !address.isChosen }
          : { ...address, isChosen: false }
      )
    );
  };

  const filteredAddresses = addresses.filter(
    (address) =>
      (address.propretary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        address.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
      address.planet === selectedPlanet
  );

  return (
    <section className="mt-10 flex flex-col gap-5">
      <div className="flex gap-2 mb-4">
        <Button
          isEnabled={selectedPlanet === "Terra"}
          text="Terra"
          onClick={() => setSelectedPlanet("Terra")}
        />
        <Button
          isEnabled={selectedPlanet === "Marte"}
          text="Marte"
          onClick={() => setSelectedPlanet("Marte")}
        />
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h1 className="font-bold text-xl">Lista de endereços</h1>
      <div className="flex flex-col gap-3">
        {filteredAddresses.map((address) => (
          <AddressCard
            address={address.address}
            phone={address.phone}
            propretary={address.propretary}
            thumbnail={address.thumbnail}
            type={address.type}
            key={address.id}
            id={address.id}
            isChosen={address.isChosen}
            onClick={() => selectAddress(address.id)}
          />
        ))}
      </div>
    </section>
  );
}
