import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
<<<<<<< HEAD
import AlterarProduto from './componentes/cadastroproduto/alterarproduto/AlterarProduto.tsx';

=======
>>>>>>> f29e65c38dabb8211f9d17829b61304d2f8e839f
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto/>,
  },
<<<<<<< HEAD
  {
    path: "/alterar-produto/:id",
    element: <AlterarProduto/>,
  },
=======
>>>>>>> f29e65c38dabb8211f9d17829b61304d2f8e839f
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)