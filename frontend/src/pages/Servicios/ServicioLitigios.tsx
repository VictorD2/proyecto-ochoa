import React from "react";
import { Link } from "react-router-dom";

import imagen10 from "../../images/images-services/SERVICIO_2.10.png";

const ServicioLitigios = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5 className="text-center fw-bold my-4">LITIGIOS</h5>
          <p className="text-justify">
            Nuestro Estudio se encarga de patrocinar a nuestros clientes en sus
            procesos judiciales, incluyendo los de materia penal mediante la
            litigación oral, y arbitrales relacionados a las distintas áreas del
            derecho.
          </p>
          <Link
            to="/Contacto"
            style={{ background: "#c17743", color: "#fff" }}
            className="btn my-5 w-50 d-block mx-auto"
          >
            Contáctanos
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <div className="mx-4">
            <img
              className="w-100 shadow rounded"
              src={imagen10}
              alt="Imagen de servicio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioLitigios;
