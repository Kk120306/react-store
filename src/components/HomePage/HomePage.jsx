import { Link } from "react-router-dom";
import Collage from './Collage';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center bg-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                Welcome to <span className="text-blue-500">food.</span>
            </h1>
            <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-6">
                Discover our selection of fresh fruits, bursting with flavor and vitality. Delivered straight from the farm to your table.
            </p>
            <Link to="/store">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md hover:bg-green-700 transition duration-300">
                    Shop Now
                </button>
            </Link>
            <div className="mt-10 w-full">
                <Collage />
            </div>
        </div>
    );
}

export default HomePage;
