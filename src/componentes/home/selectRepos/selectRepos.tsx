import { BookMarked, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useAllRepositories, useUserStarred } from "../../../hooks/useFetch"
import { RepositorieStore } from "../../../zustandStore/CommitsStore"

interface SelectReposProps{
    userName: string
    public_repos?: number
}

export default function SelectRepos({
    userName,
    public_repos,
}: SelectReposProps){
    const [starred, setStarred] = useState(0);
    const [selected, setSelected] = useState('repositories');
    const {setRepositories} = RepositorieStore();

    const {data: allRepositories} = useAllRepositories(userName);
    const {data: searchRepo} = useUserStarred( userName);


    useEffect(()=>{
        setStarred(searchRepo?.total_count);     
    }, [searchRepo])

    function setAllRepo(){
        setRepositories(allRepositories);
        setSelected('repositories');
    }

    function setRepoStarred(){
        setRepositories(searchRepo.items);
        setSelected('starred');
    }



    return (
        <div className="flex gap-16 max-md:justify-evenly">
            <button onClick={() => setAllRepo()} className={`flex  h-16 items-center gap-4 ${selected === 'repositories' ? 'border-underline border-b-2' : ''} p-2 max-w-50 cursor-pointer`}>
                <BookMarked size={24}  color={selected === 'repositories' ? 'black' : '#DBDBDB'}/>

                <div className={`text-lg ${selected === 'repositories' ? '' : 'text-off-white-100'} max-lg:text-sm`}>
                    Repositories
                </div>

                <div className="rounded-2xl border-1 border-off-white text-off-white px-2 text-sm max-lg:text-xs bg-off-white-bgNumber">
                    {public_repos}
                </div>
            </button>

            <button onClick={() => setRepoStarred()} className={`flex  h-16 items-center gap-4  ${selected === 'starred' ? 'border-underline border-b-2' : ''} p-2 max-w-50 cursor-pointer`}>
                <Star size={24} color={selected === 'starred' ? 'black' : '#DBDBDB'}/>

                <div className={`text-lg ${selected === 'starred' ? '' : 'text-off-white-100'} max-lg:text-sm`}>
                    Starred
                </div>

                <div className="rounded-2xl border-1 border-off-white-100 text-off-white px-2 text-sm bg-off-white-bgNumber  max-lg:text-xs">
                    {starred}
                </div>
            </button>
        </div>
    )
}