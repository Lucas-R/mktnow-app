import { Link } from 'react-router-dom';
import Brand from '/mktnow_logo.png';

export const Menu = () => {
    return (
        <div className="mx-auto px-4 pb-5 pt-7 mb-2 flex items-center justify-between lg:max-w-7xl">
            <Link to="/">
                <img src={Brand} alt="Agência de Performance Digital - Mktnow" />
            </Link>

            <nav className='flex items-center gap-4 sm:gap-8'>
                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/">Inicio</Link>

                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/">Tarefas</Link>

                <Link className="text-sm/6 font-medium text-zinc-300 hover:text-white" to="/">Relatórios</Link>
            </nav>
        </div>
    )
}