import { Link } from "react-router-dom"

interface LiProps {
    children: React.ReactElement;
}

const Li = ({children}: LiProps) => <li className="text-white text-xs font-semibold uppercase hover:underline">{ children }</li>

export const Menu = () => {
    return (
        <div className="w-full h-auto py-6 bg-pink-700">
            <div className="container h-full m-auto flex items-center justify-between">
                <Link className="font-bold text-2xl text-white" to="/"> MKT|Now </Link>

                <nav>
                    <ul className="flex gap-4">
                        <Li>
                            <Link to="/relatorios">Relatórios</Link>
                        </Li>
                        <Li>
                            <Link to="/tarefas">Tarefas</Link>
                        </Li>
                        <Li>
                            <Link to="/empresas">Empresas</Link>
                        </Li>
                        <Li>
                            <Link to="">Lucas</Link>
                        </Li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}