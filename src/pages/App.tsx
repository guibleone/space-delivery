import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddressEdit from "./AddressEdit";
import Home from "./Home";
import AddressRegister from "./AddressRegister";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}  />
        <Route path={`/cadastro`} element={<AddressRegister />} />
        <Route path={`/editar/:id`} element={<AddressEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
