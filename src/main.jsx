import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './index.css'
import routes from './routes'
import { CartProvider } from './context/CartContext'
import { FavProvider } from './context/FavContext'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <FavProvider>
            <RouterProvider router={router} />
        </FavProvider>
    </CartProvider>
  </StrictMode>,
)
