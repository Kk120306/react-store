import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const useFav = () => useContext(FavContext);

export const FavProvider = ({ children }) => {
    const [favItems, setFavItems] = useState([]);

    const addToFav = (product) => {
        setFavItems((prevItems) => {
            return [...prevItems, product];
        })
    };


    const removeFav = (id) => {
        setFavItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    }

    return (
        <FavContext.Provider value={{ favItems, addToFav, removeFav }}>
            {children}
        </FavContext.Provider>
    )
}

