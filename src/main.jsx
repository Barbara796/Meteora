import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Carrinho from './pages/Carrinho/index.jsx';
import { CarrinhoProvider } from './contexto/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/carrinho",
    element: <Carrinho/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoProvider>
    <RouterProvider router={router} />
    </CarrinhoProvider>
  </React.StrictMode>,
)
