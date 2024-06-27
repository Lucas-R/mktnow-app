import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import { Home } from '../pages/Home';
import { Companies } from '../pages/Companies';
import { Tasks } from '../pages/Tasks';
import { Task } from '../pages/Tasks/Task';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/tarefas',
        element: <Tasks />,
    },
    {
        path: '/tarefa/:taskId',
        element: <Task />,
    },
    {
        path: '/empresas',
        element: <Companies />,
    },
]);

export const Router = () => <RouterProvider router={router} />