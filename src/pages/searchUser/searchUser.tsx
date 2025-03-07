import { Book, ChevronLeft, ChevronRight, Search, UserCheck, Users } from "lucide-react";
import Header from "../../componentes/globals/header/header";
import { useState } from "react";
import { useSearchUser } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { RepositorieStore } from "../../zustandStore/RepositorioStore";

export default function SearchUser(){
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');

    const {setUserName} = RepositorieStore();


    const {data: searchUser} = useSearchUser(search, pageNumber);
    

    return (
        <div className="flex items-centerflex flex-col items-center w-full gap-20">
            <Header page="Buscar Usuário"/>

            <div className="flex flex-col gap-5 w-full max-w-[1080px] p-10">
                <div className="flex flex-col  w-full justify-between gap-5">
                    <div className="font-bold text-lg">
                        BUSCAR USUÁRIO
                    </div>

                    <div className="flex w-full gap-10 text-off-white justify-between">
                        <div className="flex items-center w-[80%] gap-2">
                            <Search/>
                            <input value={search} onChange={(e: any) => setSearch(e.currentTarget.value)} placeholder="Buscar usuário" className="p-2 flex-1 border-b-2" type="text" />
                        </div>


                        <div className="flex items-center gap-3 p-1.5 b-2 bg-[#0587FF] rounded-2xl">
                            <ChevronLeft  onClick={() => setPageNumber(pageNumber - 1)} color="white" className="cursor-pointer"/>
                            <span className="text-white cursor-pointer">{pageNumber}</span>
                            <ChevronRight onClick={() => setPageNumber(pageNumber + 1)} color="white" className="cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>

            {searchUser?.items.map((user: any, index: number)=>(
                <Link to={'/profile'} onClick={()=> setUserName(user.login)} className="flex items-center w-[90%] max-w-[1080px] gap-5 p-5 hover:border-2 rounded-lg" key={index}>
                    <div className="w-32 h-32">
                        <img className="rounded-[50%]" src={user.avatar_url}/>
                    </div>
                    
                    <div className="flex flex-1 justify-between">
                        <div>
                            <div>
                                Nome: <span className="text-off-white">{user.name}</span>
                            </div>

                            <div>
                                Localização: <span className="text-off-white">{user.location}</span>
                            </div>

                            <div>
                                Bio: <span className="text-off-white">{user.bio}</span>
                            </div>

                            <div>
                                Empresa: <span className="text-off-white">{user.company ? user.company : 'Nenhum dado encontrado!'}</span>
                            </div>

                            <div>
                                Email: <span className="text-off-white">{user.email ? user.email : 'Nenhum email encontrado!'}</span> 
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-5">
                        <div className="flex gap-2">
                            <Users/> {user.followers}
                        </div>

                        <div className="flex gap-2">
                            <UserCheck/> {user.following}
                        </div>

                        <div className="flex gap-2">
                            <Book/> {user.public_repos}
                        </div>
                    </div>
                    
                    
                </Link>
            ))}
        </div>
    )
}