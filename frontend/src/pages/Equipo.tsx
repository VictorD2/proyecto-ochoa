import React, { useEffect } from "react";

// Componentes
import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";
import TeamSectionTeam from "../components/Equipo/TeamSectionTeam";

// Imagenes
import imagen1 from "../images/images-team/Equipo1.png";
import imagen4 from "../images/images-team/Equipo4.png";
import imagen5 from "../images/images-team/Equipo5.png";
import imagen6 from "../images/images-team/Equipo6.png";
import imagen7 from "../images/images-team/Equipo7.png";
import imagen8 from "../images/images-team/Equipo8.png";

const Equipo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesSectionRoad nameOption="Nuestro Equipo" numberRoad={2} nameRoadOne="Equipo" />
      <div className="container">
        <div className="row py-5">
          <div className="col-12 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Julio" image={imagen1} name="JULIO CÉSAR OCHOA MALDONADO" job="SOCIO FUNDADOR" />
          </div>
        </div>
        <div className="row pb-5 d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Mauricio" image={imagen8} name="MAURICIO ANDRE MATTA MORALES" job="STAFF" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Gino" image={imagen5} name="GINO MARTÍN NAVARRO RAMOS" job="STAFF" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Katerine" image={imagen4} name="KATERINE NOEMI GALLO DE LA CRUZ" job="STAFF" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Carlos" image={imagen6} name="CARLOS ENRIQUE HUAMANI CANTORAL" job="STAFF" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <TeamSectionTeam url="/Equipo/Ramiro" image={imagen7} name="RAMIRO DURAND CONTRERAS" job="STAFF" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipo;
