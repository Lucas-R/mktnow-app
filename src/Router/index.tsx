import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import { Home } from '../pages/Home';
import { Companies } from '../pages/Companies';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/relatorios',
        element: <Home />,
    },
    {
        path: '/empresas',
        element: <Companies />,
    },
]);

export const Router = () => <RouterProvider router={router} />