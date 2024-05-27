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
    planet: "Terra",
  },
  {
    id: 4,
    thumbnail:
      "https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars_3D-illustration_1600x900.jpg?itok=iAJOaL3A",
    type: "Fábrica",
    phone: "+78 1011 1234",
    propretary: "Xandar Quor",
    address: "Lote 1024",
    planet: "Marte",
  },
  {
    id: 5,
    thumbnail:
      "https://static.lpnt.fr/images/2020/01/10/19931967lpw-19931997-article-mars-astronomie-jpg_6825794_1250x625.jpg",
    type: "Armazém",
    phone: "+78 2022 2345",
    propretary: "Zara Vex",
    address: "Lote 2048",
    planet: "Marte",
  },
  {
    id: 6,
    thumbnail:
      "https://media2.ledevoir.com/images_galerie/nwd_1449110_1112344/image.jpg",
    type: "Fábrica",
    phone: "+78 3033 3456",
    propretary: "Thane Jor",
    address: "Lote 4096",
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
