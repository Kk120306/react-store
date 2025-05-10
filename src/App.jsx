import NavBar from './components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

    return (
        <div className="p-4 md:p-8 font-sans">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default App
