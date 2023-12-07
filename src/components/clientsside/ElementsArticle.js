import React from 'react';
import {Link } from "react-router-dom";

function ElementsArticle(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Référence</th>
                <th>Désignation</th>
                <th>Marque</th>
                <th>Prix Achat</th>
                <th>Prix Vente</th>
                <th>Quantité</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {props.articles.map((article) => (
                <tr key={article.id}>

                  <td>
                    <img
                      src={article.imageartpetitf}
                      width="150px"
                      height="150px"
                      alt={article.designation}
                    />
                  </td>
                  <td>{article.reference}</td>
                  <td>{article.designation}</td>
                  <td>{article.marque}</td>
                  <td>{article.prixAchat}</td>
                  <td>{article.prixVente}</td>
                  <td>{article.qtestock}</td>
                  <td>
                  <Link exact to={`/editArticle/${article.id}`} className="btn btn-primary">Modifier</Link>
                  </td>
                  <td>
                  <button onClick={()=>{props.deleteProd(article.id)}} className="btn btn-danger">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ElementsArticle;
