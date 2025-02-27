import { ChevronDown, Search } from "lucide-react";

interface SearchComponentProps{
    searchUser?: string
    SearchAction: () => void
    setSearchUser: (e: string) => void
}

export default function SearchRepositorie({
    SearchAction,
    setSearchUser,
    searchUser
}: SearchComponentProps){
    return (
        <div className="w-full flex justify-between gap-26">
            <div className="flex items-center flex-1 border-b-1 border-off-white-input">
                <button onClick={()=> SearchAction()} className="cursor-pointer">
                    <Search size={24} color="#989898"/>
                </button>
                
                <input value={searchUser} onChange={(e: any) => setSearchUser(e.currentTarget.value)} className="flex flex-1 px-5 py-2 focus:outline-none" placeholder="Pesquisar Usuário" type="text" />
            </div>
            
            <div className="flex w-64 gap-6">
                <button className="flex items-center justify-center gap-2 px-4 bg-gradient-to-r from-[#0056A6] to-[#0587FF] text-white rounded-4xl text-sm cursor-pointer hover:border-[#0587FF]">
                    <ChevronDown/>

                    Type
                </button>

                <button className="flex items-center justify-center gap-2 px-4 bg-gradient-to-r border-1 from-[#0056A6] to-[#0587FF] text-white rounded-4xl text-sm cursor-pointer hover:border-[#0587FF]">
                    <ChevronDown/>

                    Language
                </button>
            </div>
        </div>
    )
}