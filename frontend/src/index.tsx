import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";

import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "react-toastify/dist/ReactToastify.css";

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "admin-lte/dist/js/adminlte.min.js";

const App = lazy(() => import('./app/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
