import { GitFork, Star } from "lucide-react";

interface RepositoriesProps {
    full_name?: string
    description?: string
    language?: string
    stargazers_count?: number
    forks_count?: number
    user?: string
    getCommits?: (e: string) => void
    topics?: string[]
}

export default function Repositories({
    description,
    forks_count,
    full_name,
    language,
    stargazers_count,
    user,
    getCommits,
    topics
}: RepositoriesProps){

    return (
    <div onClick={(()=> getCommits && getCommits(full_name ? full_name : ''))} className="flex flex-col gap-2 w-full cursor-pointer rounded-lg p-5 hover:border-1 border-off-white-100 max-md:bg-off-white-bgNumber">
        <h1 className="text-lg max-md:text-base">{full_name?.replace(`${user}/`, '')}</h1>

        <p className="text-off-white max-md:text-xs">{description ? description : 'Nenhuma informação disponível para este repositório!'}</p>

        <div className="flex flex-col gap-2">
            <h1 className="max-md:text-xs text-off-white">Languages: <span >{language ? language : 'Nenhuma linguagem disponível!'}</span></h1>

            {topics &&
            <h2 className="flex gap-2 text-off-white max-md:text-xs flex-wrap">Stack: 
                {topics.map((item, index) => (
                    <div className="flex" key={index}>
                        {item}
                    </div>
                ))}
            </h2>
            }
        </div>

        <div className="flex gap-8 max-md:text-xs">
            <div className="flex items-center gap-2.5">
                <Star fill="black" size={16} color="black"/>

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