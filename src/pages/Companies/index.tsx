import { ArrowCounterClockwise, CaretRight, CaretLeft, DotsThree, Plus, SlidersHorizontal, Share } from "@phosphor-icons/react"
import { Button } from "../../components/Button"
import { Menu } from "../../components/Menu"
import { Input } from "../../components/Input"

export const Companies = () => {
    return (
        <>
            <Menu />

            <div className="container ml-auto mr-auto mb-2 p-4 rounded-lg flex items-center justify-between gap-4 bg-zinc-900">
                <div className="w-full max-w-96 flex items-center gap-2">
                    <Input color="gray" placeholder="ID or Name"/>
                    <Button color="gray"><SlidersHorizontal /></Button>
                </div>
                
                <div className="flex items-center gap-2">
                    <Button color="violet">Atualizar<ArrowCounterClockwise /></Button>
                    <Button color="pink">Novo<Plus /></Button>
                </div>
            </div>

            <div className="container m-auto px-4 py-10 rounded-lg bg-zinc-900">
                <h1 className="text-white text-4xl font-bold mb-8"> Companies </h1>
                <table className="w-full mb-8">
                    <thead>
                        <tr className="grid grid-cols-12">
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-1">#ID</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2 xl:col-span-4">Nome</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Data</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Mktnow</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2">Status</th>
                            <th className="px-2 py-4 text-white text-left font-normal uppercase border-b border-zinc-700 col-span-2 xl:col-span-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid grid-cols-12">
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-1">#0001</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2 xl:col-span-4">Jardins & Co</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">06, Mar 2024</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">Itu - SP</td>
                            <td className="p-2 text-white text-left text-base leading-4 font-normal border-b border-zinc-700 flex items-center col-span-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> ativo
                            </td>
                            <td className="p-2 flex items-center gap-2 justify-end border-b border-zinc-700 col-span-2 xl:col-span-1">
                                <Button size="sm" color="gray"><Share /></Button>
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