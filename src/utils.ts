import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const data = [
  {
    id: 1,
    thumbnail:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1",
    type: "Casa",
    phone: "+55 11 98765-4321",
    propretary: "João Silva",
    address: "Rua das Flores, 123, São Paulo, SP",
    planet: "Terra",
  },
  {
    id: 2,
    thumbnail:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1",
    type: "Apartamento",
    phone: "+55 21 99876-5432",
    propretary: "Maria Oliveira",
    address: "Avenida Atlântica, 456, Rio de Janeiro, RJ",
    planet: "Terra",
  },
  {
    id: 3,
    thumbnail:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1",
    type: "Escritório",
    phone: "+55 31 91234-5678",
    propretary: "Carlos Pereira",
    address: "Praça da Liberdade, 789, Belo Horizonte, MG",
    planet: "Marte",
  },
];

const colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-teal-200",
];

export const getColor = (id: number) => colors[id % colors.length];
