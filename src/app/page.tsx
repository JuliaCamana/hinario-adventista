'use client'
import React from "react";
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ContentSearchHinos, ContentSearchListHinos } from "./styles";
import { FaSearch } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end"  id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Sobre</a>
              <a className="nav-link" href="#">Contacto</a>
              <a className="nav-link" href="#">Credito</a>
            </div>
          </div>
        </div>
      </nav>

      <ContentSearchHinos>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Procurar por titulo ou numero" aria-label="searchHino" aria-describedby="basic-addon1" />
        <span className="input-group-text" id="basic-addon1"><button type="button" className="btn"><FaSearch/></button></span>
      </div>
      <ContentSearchListHinos>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">1 . oh Deus de amor </li>
        <li className="list-group-item">2 . Quao Grande es tu</li>
        <li className="list-group-item">3 . Rocha Eterna</li>
        <li className="list-group-item">4. A ultima hora</li>
        <li className="list-group-item">5. Bendita Seguranca</li>
      </ul>
      </ContentSearchListHinos>
      </ContentSearchHinos>

    </div>

  );
}
