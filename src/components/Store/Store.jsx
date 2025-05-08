import { FRUITS } from '../Constants.js';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';




const Store = () => {

    const [filteredProducts, setFilteredProducts] = useState(FRUITS);

    return (
        <>
            <div>
                <h1>Store</h1>
                <p>Welcome to the store!</p>
                {FRUITS.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.src} alt={product.name} />
                    </div>
                ))}
            </div>
            <Sidebar />
        </>
    )
}

export default Store;