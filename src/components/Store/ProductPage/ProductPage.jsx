import { useParams } from 'react-router-dom';
import BackArrow from '/back-arrow.png';
import { Link } from 'react-router-dom';
import { FRUITS } from '../../Constants';
import { useCart } from '../../../context/CartContext';
import { useState } from 'react';

const ProductPage = () => {
    const { productName } = useParams();
    const fruit = FRUITS.find(fruit => fruit.name === decodeURIComponent(productName));

    const { cartItems, addToCart, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const inCart = (id) => cartItems.some(item => item.id === id);

    return (
        <div className="max-w-5xl mx-auto px-4 mt-10 text-gray-800">
            <Link to="/store" className="w-8 h-8 cursor-pointer">
                <img
                    src={BackArrow}
                    alt="Back Arrow"
                    className="w-8 h-8 cursor-pointer hover:scale-130 transition-transform duration-200"
                />
            </Link>

            <div className="flex flex-col lg:flex-row gap-x-10">
                <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                    <div className="w-64 h-64 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <img
                            src={fruit.src}
                            alt={fruit.name}
                            className="w-24 h-24 object-contain"
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {fruit.colors.map((color, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                                style={{ backgroundColor: color.toLowerCase() }}
                            >
                                {color}
                            </span>
                        ))}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {fruit.vitamins.map((vitamin, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold"
                            >
                                Vitamin {vitamin}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-900">{fruit.name}</h1>
                    <p className="text-sm text-gray-500 mt-1">{fruit.family}</p>
                    <p className="text-sm text-green-600 mt-1">In stock</p>
                    <p className="text-2xl font-semibold mt-3">${fruit.price}</p>

                    <div className="mt-6">
                        <p className="text-sm font-medium mb-1">Quantity</p>
                        <div className="flex items-center w-max border border-gray-300 rounded-lg px-3 py-1 shadow-sm">
                            <button
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                className="text-lg px-2 text-gray-600 hover:text-black  hover:scale-125 transition-transform duration-200"
                            >
                                −
                            </button>
                            <span className="mx-4 w-6 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(prev => prev + 1)}
                                className="text-lg px-2 text-gray-600 hover:text-black hover:scale-125 transition-transform duration-200"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 space-x-3">
                        <button
                            onClick={() => addToCart(fruit, quantity)}
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Add to Cart
                        </button>
                        {inCart(fruit.id) && (
                            <button
                                onClick={() => removeFromCart(fruit.id, quantity)}
                                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition mt-2"
                            >
                                Remove from Cart
                            </button>
                        )}
                    </div>

                    <p className="mt-6 text-gray-700 text-sm leading-relaxed">{fruit.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
