import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Menu } from "../../components/Menu"
import { Status } from "../../components/Status"
import { 
    ArrowCounterClockwise, 
    CaretLeft, 
    CaretRight, 
    DotsThree, 
    Play, 
    Share, 
    SlidersHorizontal 
} from "@phosphor-icons/react"

export const Tasks = () => {
    const navigate = useNavigate();

    const handleNavigate = (taskId: number) => {
        navigate(`/tarefa/${taskId}`);
    }

    return(
        <>
            <Menu />

            <div className="container ml-auto mr-auto mb-2 p-4 rounded-lg flex items-center justify-between gap-4 bg-zinc-900">
                <div className="w-full max-w-96 flex items-center gap-2">
                    <Input color="gray" placeholder="ID or Name"/>
                    <Button color="gray"><SlidersHorizontal /></Button>
                </div>
                
                <div className="flex items-center gap-2">
                    <Button color="violet">Atualizar<ArrowCounterClockwise /></Button>
                </div>
            </div>

            <div className="container m-auto px-4 py-10 rounded-lg bg-zinc-900">
                <h1 className="text-white text-4xl font-bold mb-8"> Tasks </h1>
                <table className="w-full mb-8">
                    <thead>
                        <tr className="grid grid-cols-12">
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-1">#ID</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2 xl:col-span-4">Tarefa</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Criado</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Horas</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Status</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2 xl:col-span-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid grid-cols-12">
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-1">#0001</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2 xl:col-span-4">Novo site</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">06, Mar 2024</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center gap-2 col-span-2">
                                <p>00:00:00</p><Button color="gray" size="xs"><Play /></Button>
                            </td>
                            <td className="p-2 border-b border-zinc-700 flex items-center col-span-2">
                                <Status type="high" size="xs">alto</Status>
                            </td>
                            <td className="p-2 flex items-center gap-2 justify-end border-b border-zinc-700 col-span-2 xl:col-span-1">
                                <Button size="sm" color="gray" fn={() => handleNavigate(100)}><Share /></Button>
                                <Button size="sm" color="gray"><DotsThree /></Button>
                            </td>
                        </tr>

                        <tr className="grid grid-cols-12">
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-1">#0002</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2 xl:col-span-4">Adicionar video</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">01, Fev 2024</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center gap-2 col-span-2">
                                <p>00:00:00</p><Button color="gray" size="xs"><Play /></Button>
                            </td>
                            <td className="p-2 border-b border-zinc-700 flex items-center col-span-2">
                                <Status type="medium" size="xs">média</Status>
                            </td>
                            <td className="p-2 flex items-center gap-2 justify-end border-b border-zinc-700 col-span-2 xl:col-span-1">
                                <Button size="sm" color="gray" fn={() => handleNavigate(200)}><Share /></Button>
                                <Button size="sm" color="gray"><DotsThree /></Button>
                            </td>
                        </tr>

                        <tr className="grid grid-cols-12">
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-1">#0003</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2 xl:col-span-4">Novo conteúdo</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">03, Nov 2024</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center gap-2 col-span-2">
                                <p>00:00:00</p><Button color="gray" size="xs"><Play /></Button>
                            </td>
                            <td className="p-2 border-b border-zinc-700 flex items-center col-span-2">
                                <Status type="low" size="xs">baixa</Status>
                            </td>
                            <td className="p-2 flex items-center gap-2 justify-end border-b border-zinc-700 col-span-2 xl:col-span-1">
                                <Button size="sm" color="gray" fn={() => handleNavigate(300)}><Share /></Button>
                                <Button size="sm" color="gray"><DotsThree /></Button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="w-full flex items-center justify-center gap-2">
                    <Button size="sm" disabled={true}><CaretLeft /></Button>
                    <p className="text-white">1 de 1</p>
                    <Button size="sm" disabled={true}><CaretRight /></Button>
                </div>
            </div>
        </>
    )
}