import { useState, useEffect } from 'react';
import { FRUITS } from '../Constants.js';
import Sidebar from './Sidebar/Sidebar';
import ShopIn from '/shop-in.png';
import ShopOut from '/shop-out.png';
import Liked from '/liked.png';
import Unliked from '/heart.png';
import { useCart } from '../../context/CartContext.jsx';
import { useFav } from '../../context/FavContext.jsx';

const Store = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedFamily, setSelectedFamily] = useState([]);
    const [selectedVitamins, setSelectedVitamins] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState(FRUITS);

    const { cartItems, addToCart, removeFromCart } = useCart();
    const { favItems, addToFav, removeFav } = useFav();


    useEffect(() => {
        const filtered = FRUITS.filter(fruit => {
            const matchesColor = fruit.colors.includes(selectedColor) || selectedColor === null;
            const matchesFamily = selectedFamily.length > 0 ? selectedFamily.includes(fruit.family) : true;
            const matchesVitamins = selectedVitamins.length > 0 ? selectedVitamins.every(v => fruit.vitamins.includes(v)) : true;

            return matchesColor && matchesFamily && matchesVitamins;
        });
        setFilteredProducts(filtered);
    }, [selectedColor, selectedFamily, selectedVitamins]);

    const inCart = (id) => cartItems.some(item => item.id === id);

    const toggleCart = (product) => {
        if (inCart(product.id)) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    const inFav = (id) => favItems.some(item => item.id === id);

    const toggleLike = (product) => {
        if (inFav(product.id)) {
            removeFav(product.id);
        } else {
            addToFav(product);
        }
    }

    return (
        <div className="flex flex-col md:flex-row mt-5 gap-4">
            <Sidebar
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedFamily={selectedFamily}
                setSelectedFamily={setSelectedFamily}
                selectedVitamins={selectedVitamins}
                setSelectedVitamins={setSelectedVitamins}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-[380px]">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white h-[280px] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 
                        flex flex-col justify-between items-center text-left"
                    >
                        <img
                            src={product.src}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded mb-4 mt-5"
                        />

                        <div className="w-full flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold">{product.name}</h2>
                                <p className="text-gray-600 text-sm">{product.family} family</p>
                                <p className="text-gray-600 text-sm">${product.price}</p>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <img
                                    src={inCart(product.id) ? ShopIn : ShopOut}
                                    alt={inCart(product.id) ? 'Remove from cart' : 'Add to cart'}
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={() => toggleCart(product)}
                                />
                                <img
                                    src={inFav(product.id) ? Liked : Unliked}
                                    alt="Like icon"
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={() => toggleLike(product)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
