import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productName } = useParams();  
  return (
    <div>
      <h1>Product: {productName}</h1>
      <p>Details about the {productName} will go here.</p>
    </div>
  );
};

export default ProductPage;
