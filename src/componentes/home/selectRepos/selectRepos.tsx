import { BookMarked, Star } from "lucide-react"

interface SelectReposProps{
    selected?: string
    setSelected: (e: string) => void
    public_repos?: number
    starred?: number

}

export default function SelectRepos({
    setSelected,
    public_repos,
    selected,
    starred
}: SelectReposProps){
    return (
        <div className="flex gap-16">
            <button onClick={() => setSelected('repositories')} className={`flex  h-16 items-center gap-4 ${selected === 'repositories' ? 'border-underline border-b-2' : ''} p-2 max-w-50 cursor-pointer`}>
                <BookMarked size={24}  color={selected === 'repositories' ? 'black' : '#DBDBDB'}/>

                <div className={`text-lg ${selected === 'repositories' ? '' : 'text-off-white-100'}`}>
                    Repositories
                </div>

                <div className="rounded-2xl border-1 border-off-white text-off-white px-2 text-sm bg-off-white-bgNumber">
                    {public_repos}
                </div>
            </button>

            <button onClick={() => setSelected('starred')} className={`flex  h-16 items-center gap-4  ${selected === 'starred' ? 'border-underline border-b-2' : ''} p-2 max-w-50 cursor-pointer`}>
                <Star size={24} color={selected === 'starred' ? 'black' : '#DBDBDB'}/>

                <div className={`text-lg ${selected === 'starred' ? '' : 'text-off-white-100'}`}>
                    Starred
                </div>

                <div className="rounded-2xl border-1 border-off-white-100 text-off-white px-2 text-sm bg-off-white-bgNumber">
                    {starred}
                </div>
            </button>
        </div>
    )
}