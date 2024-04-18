import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { LibCrear } from "../../componentes/libros/LibCrear";
import { LibListar } from "../../componentes/libros/LibListar";
import { LibAdmin } from "../../componentes/libros/LibAdmin";
import { LibActualizar } from "../../componentes/libros/LibActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/libcre" element={<LibCrear />} />
      <Route path="/liblis" element={<LibListar />} />
      <Route path="/libadm" element={<LibAdmin />} />

      <Route path="/libactual/:codigo" element={<LibActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
