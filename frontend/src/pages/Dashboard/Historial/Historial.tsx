import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Buscador from "../../../components/Buscador";
import Solicitud from "../../../interfaces/Solicitud";
import ListaHistorial from "./ListaHistorial";
import ResumenHistorial from "./ResumenHistorial";

const initialState: Solicitud = {
  estado_solicitud: "",
  fecha_entrega_inventario: "",
  fecha_entrega_usuario: "",
  fecha_solicitud: "",
  id_expediente: 0,
  id_usuario: 0,
  motivo_admin: "",
  motivo_usuario: "",
  id_solicitud: 0,
};
const Historial: React.FC = () => {
  const [solicitudModal, setSolicitudModal] = useState<Solicitud>(initialState);
  const [trigguer, setTrigguer] = useState<number>(0);

  const [filtro, setFiltro] = useState<string>("");
  const [estado, setEstado] = useState<string>("TODO");
  const buscar = (text: string) => setFiltro(text);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstado(e.target.value);
  };
  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header">
                <h3 className="card-title"> Solicitudes de Expedientes</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#createSolicitud"
                    onClick={() => {
                        setSolicitudModal(initialState);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} color="#fff" size="1x" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <ResumenHistorial trigguer={trigguer} />
                </div>
                <div className="w-100 d-flex flex-lg-row flex-sm-column flex-column justify-content-around">
                  <div className="d-flex justify-content-center">
                    <div className="form-group flex-column flex-sm-row flex-md-row flex-lg-row d-flex align-items-center justify-content-between clearfix">
                      <div className="icheck-primary d-inline mx-3">
                        <input onChange={handleChange} type="radio" id="radioPrimary1" value="TODO" name="r1" defaultChecked />
                        <label htmlFor="radioPrimary1">TODO</label>
                      </div>
                      <div className="icheck-primary d-inline mx-3">
                        <input onChange={handleChange} type="radio" id="radioPrimary2" value="SOLICITADO" name="r1" />
                        <label htmlFor="radioPrimary2">SOLICITADO</label>
                      </div>
                      <div className="icheck-primary d-inline mx-3">
                        <input onChange={handleChange} type="radio" id="radioPrimary3" value="EN USO" name="r1" />
                        <label htmlFor="radioPrimary3">EN USO</label>
                      </div>
                      <div className="icheck-primary d-inline mx-3">
                        <input onChange={handleChange} type="radio" id="radioPrimary4" value="EN INVENTARIO" name="r1" />
                        <label htmlFor="radioPrimary4">EN INVENTARIO</label>
                      </div>
                      <div className="icheck-primary d-inline mx-3">
                        <input onChange={handleChange} type="radio" id="radioPrimary5" value="DENEGADO" name="r1" />
                        <label htmlFor="radioPrimary5">DENEGADO</label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mt-lg-0">
                    <Buscador placeholder="Buscar Solicitud" funcion={buscar} />
                  </div>
                </div>
                <div className="table-responsive mt-4">
                  <ListaHistorial estado={estado} setTrigguer={setTrigguer} trigguer={trigguer} filtro={filtro} solicitudModal={solicitudModal} setSolicitudModal={setSolicitudModal} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Historial;