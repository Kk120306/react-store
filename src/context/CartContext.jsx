import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };


    const removeFromCart = (id, quantityToRemove = 1) => {
        setCartItems(prevItems =>
            prevItems.flatMap(item => {
                if (item.id === id) {
                    if (item.quantity > quantityToRemove) {
                        return { ...item, quantity: item.quantity - quantityToRemove };
                    } else {
                        return [];
                    }
                }
                return item;
            })
        );
    };


    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
