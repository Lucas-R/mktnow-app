import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu"

export const Task = () => {
    const { taskId } = useParams();

    return(
        <>
            <Menu />

            <div className="container m-auto px-4 py-10 rounded-lg bg-zinc-900">
                <h1 className="text-white text-4xl font-bold mb-8"> Task: { taskId } </h1>
            </div>
        </>
    )
}