import { GitFork, Star } from "lucide-react";

interface RepositoriesProps {
    full_name?: string
    description?: string
    language?: string
    stargazers_count?: number
    forks_count?: number
    user?: string
    getCommits: (e: string) => void
}

export default function Repositories({
    description,
    forks_count,
    full_name,
    language,
    stargazers_count,
    user,
    getCommits
}: RepositoriesProps){

    return (
    <div onClick={(()=> getCommits(full_name ? full_name : ''))} className="flex flex-col gap-2 w-[90%] cursor-pointer rounded-lg p-5 hover:border-1 border-off-white-100">
        <h1 className="text-lg">{full_name?.replace(`${user}/`, '')}</h1>

        <p className="text-off-white">{description ? description : 'Nenhuma informação disponível para este repositório!'}</p>

        <div>
            <h1 className="text-sm text-off-white">Languages: <span >{language ? language : 'Nenhuma linguagem disponível!'}</span></h1>
        </div>

        <div className="flex gap-8">
            <div className="flex items-center gap-2.5">
                <Star size={16} color="black"/>

                {stargazers_count}
            </div>

            <div className="flex items-center gap-2.5">
                <GitFork size={16} color="black"/>

                {forks_count}
            </div>

        </div>
    </div>
    )
}