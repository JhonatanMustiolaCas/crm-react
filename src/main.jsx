import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente';
import Index from './pages/Index';
import EditarCliente from './pages/EditarCliente';
import { loader as clientesLoader } from "./loaders/clientesLoader";
import { loader as editarClienteLoader } from './loaders/editarClienteLoader';
import { action as editarClienteAction } from './actions/editarClienteAction';
import { action as nuevoClienteAction } from './actions/nuevoClienteAction';
import { action as eliminarClienteAction } from './actions/eliminarClienteAction';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
