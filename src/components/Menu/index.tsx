import { Link } from 'react-router-dom';
import Brand from '/mktnow_logo.png';

export const Menu = () => {
    return (
        <div className="container ml-auto mr-auto px-4 py-7 mb-2 flex items-center justify-between">
            <Link to="/">
                <img src={Brand} alt="Agência de Performance Digital - Mktnow" />
            </Link>

            <nav className='flex items-center gap-4 sm:gap-8'>
                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/">Inicio</Link>

                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/tarefas">Tarefas</Link>

                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/">Relatórios</Link>

                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/empresas">Empresas</Link>
            </nav>
        </div>
    )
}