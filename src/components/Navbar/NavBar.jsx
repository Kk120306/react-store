import { Link } from "react-router-dom";
import Heart from '/heart.png';
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";
import { useState } from 'react';

const NavBar = () => {
    const { cartItems } = useCart();
    const { favItems } = useFav();
    const [showFavs, setShowFavs] = useState(false); 
    const toggleFavs = () => {
        const newShowFavs = !showFavs; 
        setShowFavs(newShowFavs);
    }

    return (
        <nav className="flex flex-wrap items-center justify-between text-black bg-white">
            <Link to="/" className="text-2xl md:text-3xl font-extrabold text-blue-500">food.</Link>

            <ul className="flex flex-wrap gap-4 md:gap-6 mt-2 md:mt-0">
                <li>
                    <Link to="/" className="hover:text-gray-500 font-semibold text-sm md:text-base">Home</Link>
                </li>
                <li>
                    <Link to="/store" className="hover:text-gray-500 font-semibold text-sm md:text-base">Store</Link>
                </li>
            </ul>

            <div className="flex items-center gap-4 mt-2 md:mt-0">
                <Link
                    to={`/store?showFavs=${showFavs}`}
                    className="relative cursor-pointer"
                    onClick={toggleFavs}
                >
                    <img src={Heart} alt="Favourites" className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                        {favItems.length}
                    </span>
                </Link>
                <Link to="/checkout" className="relative">
                    <img src="/cart.png" alt="Cart" className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                        {cartItems.length}
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
