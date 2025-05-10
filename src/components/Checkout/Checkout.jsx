import BackArrow from '/back-arrow.png';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Checkout = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalQuantity, getTotalPrice } = useCart();

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
            <Link to="/store" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition">
                <img src={BackArrow} alt="Back" className="w-5 h-5" />
                <span className="text-sm">Back to Store</span>
            </Link>

            <h1 className="text-3xl font-semibold mt-4 mb-8 text-gray-900">Shopping Bag</h1>

            <div className="flex flex-col lg:flex-row gap-12">

                <div className="flex-1">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-sm">No items in your cart.</p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover"
                                        />
                                        <div>
                                            <h2 className="text-base font-medium text-gray-900">{item.name}</h2>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="text-sm bg-gray-200 hover:bg-gray-300 rounded px-2"
                                        >+</button>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="text-sm bg-gray-200 hover:bg-gray-300 rounded px-2"
                                        >-</button>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm text-red-500 hover:underline"
                                        >Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                    <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex justify-between">
                            <span>{`Subtotal (${getTotalQuantity()} items)`}</span>
                            <span>${getTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>VAT (20%)</span>
                            <span>${Math.round((getTotalPrice() * 0.2) * 100) / 100}</span>
                        </div>
                        <hr className="my-2 border-gray-200" />
                        <div className="flex justify-between font-semibold text-gray-900">
                            <span>Total</span>
                            <span>${Math.round((getTotalPrice() * 1.2) * 100) / 100}</span>
                        </div>
                    </div>
                    <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                            onClick={() => alert('Proceeding to checkout...This is just a demo, no actual payment will be processed.')}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
