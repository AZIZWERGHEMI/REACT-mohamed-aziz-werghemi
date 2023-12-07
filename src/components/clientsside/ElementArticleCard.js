import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ElementsArticleCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    const target = {
      id: product.id,
      title: product.designation,
      image: product.imageartpetitf,
      price: product.prixVente,
      qtestock: product.qtestock,
      quantity: 1,
    };
    addItem(target);
    console.log('Item added to cart:', target);
  };

  const filteredArticles = props.articles.filter((product) =>
    product.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppBar position="static" color="default" className="mb-4">
        <Toolbar>
          <Button color="inherit">
            <Link to="/cart" className="text-decoration-none text-dark">
              <ShoppingCartIcon fontSize="large" />
              <span className="badge bg-secondary ms-2">{cartCount}</span>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <div className="container mt-4">
        <form className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search a book"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </form>

        <div className="row">
          {props.articles &&
            filteredArticles.map((product) => (
              <article className="col-sm-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.imageartpetitf}
                    className="card-img-top imagecontroleur"
                    alt={product.designation}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.designation.substr(0, 20)} ...</h5>
                    <p className="card-text">Price: {product.prixVente} TND</p>
                    <button
                      disabled={product.qtestock <= 1}
                      className="btn btn-warning"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </>
  );
};

export default ElementsArticleCard;
