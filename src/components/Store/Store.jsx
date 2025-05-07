import { FRUITS } from '../Constants.js';

const Store = () => {

    return (
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
    )
}

export default Store;