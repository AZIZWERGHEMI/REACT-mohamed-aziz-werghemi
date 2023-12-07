import React, { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';
const Cart = () => {
    const { cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("login") === "0") {
            navigate("/")
        }
    })
    const [payment, setpayment] = React.useState(false);
    const imprimer = () => {
        navigate('/pdfCart');
    };


    const onToken = (token) => {
        // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
        console.log(token);
        //vider le cart
        clearCart();
        //naviguer vers la page d'accueil
        navigate('/');
    };

    const commander = async () => {

        setpayment(true);

    };

    const more = () => {
        navigate('/');
    };

    const clear = () => {
        clearCart();
    };

    if (cartCount === 0) return <h1>Cart Empty</h1>;

    return (
        <div className="container mt-4">
      {payment ? (
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51OD1wEIGT2XaNjZEZlvClb2Dks9XL5BBDyszAadTZHzeq64lB3U08plCm9ZtmwJ4i5d5RKi77aWzUkdIqTg5bAnf00e1JrV3uS"
          amount={totalPrice * 100} // Amount in cents
          currency="USD" // Currency
        />
      ) : null}

      <div className="row">
        <div className="col-md-8">
          {cartDetails &&
            Object.values(cartDetails).map((item) => (
              <div className="card mb-4" key={item.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      alt={item.title}
                      src={item.image}
                      className="img-fluid d-block"
                      style={{ margin: '0 auto', maxHeight: '100px' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Prix: {item.price} TND</p>
                      <p className="card-text">Qté: {item.quantity}</p>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => {
                          if (item.quantity < item.qtestock) {
                            incrementItem(item.id);
                          } else {
                            alert('Quantité stock indisponible');
                          }
                        }}
                      >
                        <Plus />
                      </button>
                      {item.quantity > 1 && (
                        <button className="btn btn-warning me-2" onClick={() => decrementItem(item.id)}>
                          <Minus />
                        </button>
                      )}
                      {item.quantity === 1 && (
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                          <Delete />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
              </div>
            ))}
        </div>
        <div className="col-md-4">
          <Button variant="outline-danger" onClick={more} className="mb-3">
            Ajouter des articles
          </Button>
          <div className="border p-3">
            <p className="mb-1">Total Articles</p>
            <h4>{cartCount}</h4>
            <p className="mb-1">Total Payement</p>
            <h3>{totalPrice.toFixed(3)} TND</h3>
          </div>
          <div className="mt-3">
            <Button variant="outline-success" onClick={imprimer} className="me-2">
              Imprimer PDF
            </Button>
            <Button variant="outline-warning" onClick={commander} className="me-2">
              Commander
            </Button>
            <Button variant="outline-info" onClick={clear}>
              Annuler
            </Button>
          </div>
        </div>
      </div>
    </div>
    );


};


export default Cart;
