import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './fireConfig';
import { onAuthStateChanged } from 'firebase/auth';

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signOut');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BOUTIQUE PC 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {localStorage.getItem('type') === 'user' ? (
                <Link className="nav-link" to="/">
                  Liste article
                </Link>
              ) : (
                ''
              )}
            </li>
            <li className="nav-item">
              {localStorage.getItem('type') === 'admin' ? (
                <Link className="nav-link" to="/articles">
                  Liste article
                </Link>
              ) : (
                ''
              )}
            </li>
            <li className="nav-item">
              {localStorage.getItem('type') === 'admin' ? (
                <Link className="nav-link" to="/addArticle">
                  Ajout articles
                </Link>
              ) : (
                ''
              )}
            </li>
          </ul>
          {!isLoggedIn ? (
            <Link className="btn btn-outline-primary" to="/loginclient">
              Log In
            </Link>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                localStorage.setItem('login', '0');
                localStorage.removeItem('type');
                logOut();
              }}
            >
              Log Out
            </button>
          )}

          
        </div>
      </div>
    </nav>
  );
}

export default Menu;
