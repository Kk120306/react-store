import { Link } from "react-router-dom";
import Collage from './Collage';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to food.</h1>
            <p>Discover our selection of fresh fruits, bursting with flavor and vitality. Delivered straight from the farm to your table.</p>
            <Link to="/store"><button>Shop Now</button></Link>
            <Collage />
        </div>
    );
}

export default HomePage;