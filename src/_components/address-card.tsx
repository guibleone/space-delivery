import { cn, getColor } from "../utils";
import {
  Link
} from "react-router-dom";

interface AddressCardProps {
  thumbnail: string;
  type: string;
  phone: string;
  propretary: string;
  id: number;
  address: string;
  isChosen: boolean;
  onClick: () => void;
}

export default function AddressCard({
  address,
  phone,
  thumbnail,
  isChosen,
  propretary,
  type,
  id,
  onClick,
}: AddressCardProps) {
  return (
    <div
      className={cn(
        "border-gray-200 border rounded-xl px-5 py-5 hover:cursor-pointer",
        isChosen ? "border-blue-600" : "hover:border-gray-300"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row w-full gap-5">
        <img
          className="w-full md:w-1/4 rounded-lg"
          src={thumbnail}
          alt={`${type} thumbnail`}
        />
        <div className="flex flex-col gap-3 w-3/4">
          <div className="flex justify-between w-full">
            <div
              className={cn(
                "w-fit px-3 py-1 rounded-lg font-medium text-sm",
                getColor(id)
              )}
            >
              {type}
            </div>
            <input
              className="h-5 w-5 text-blue-500 "
              type="checkbox"
              checked={isChosen}
            />
          </div>
          <h1 className="text-2xl font-bold">{propretary}</h1>
          <h2>{phone}</h2>
          <p>{address}</p>
            <div className=" flex gap-3">
              <Link
                to={`/editar/${id}`}
                className="border border-gray-200 text-sm rounded-lg py-3 px-4  font-bold"
              >
                Editar endereço
              </Link>
              <button className="border border-gray-200 text-sm rounded-lg py-3 px-4  font-bold">
                Deletar endereço
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
