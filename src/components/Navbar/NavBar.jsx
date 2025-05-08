import { Link } from "react-router-dom";
import { useState } from "react";
import Heart from '/heart.png';
import Cart from '/cart.png';
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";

const NavBar = () => {

    const { cartItems } = useCart();
    const { favItems } = useFav();

    return (
        <>
            <Link to="/"><h1>food.</h1></Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
            </ul>

            <div className="nav-icons">
                <Link to="/favourites">
                    <img src={Heart} alt="Favourites" />
                    <span>{favItems.length}</span>
                </Link>
                <Link to="/checkout">
                    <img src={Cart} alt="Cart" />
                    <span>{cartItems.length}</span>
                </Link>
            </div>
        </>
    )
}

export default NavBar;