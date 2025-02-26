import { useEffect, useState } from "react";
import Header from "../../componentes/globals/header/header";
import { BookMarked, Building2, Instagram, Link, MapPin, Pin, Star } from "lucide-react";


export default function Home(){
    const [user, setUser] = useState<any>();
    const [selected, setSelected] = useState('repositories');

    useEffect(() => {
        fetch(`https://api.github.com/users/AugustoAumond`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setUser(data);
          })
          .catch((error) => console.error("Erro ao buscar usuário:", error));
      }, []);

    return (
        <div className="flex flex-col items-center w-full gap-20">
            <Header/>

            <div className="flex w-full max-w-[1080px] border-solid gap-16">
                <div className="flex flex-col items-center gap-6 max-w-[251px]">
                    <div className="w-3/5 overflow-hidden rounded-[100%]">
                        <img src={user?.avatar_url} alt="" />
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-name-profile text-2xl font-bold text-center">{user?.name}</h1>
                        <p className="text-center text-off-white">{user?.bio}</p>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-col max-w-[169px] text-blue-light gap-4">
                            <div className="flex gap-2.5">
                                <Building2 size={16} color='#0587FF'/>

                                <div className="text-xs">
                                    {user?.company}
                                </div>
                            </div>

                            <div className="flex gap-2.5">
                                <MapPin size={16} color='#0587FF'/>

                                <div className="text-xs">
                                    {user?.location}
                                    
                                </div>
                            </div>

                            <div className="flex gap-2.5">
                                <Link size={16} color='#0587FF'/>

                                <div className="text-xs">
                                    {user?.blog}
                                </div>
                            </div>

                            <div className="flex gap-2.5">
                                <Instagram size={16} color='#0587FF'/>

                                <div className="text-xs">
                                    <a target="_blank">
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full max-w-[814px] gap-16">
                    <button onClick={() => setSelected('repositories')} className={`flex  h-16 items-center gap-4 ${selected === 'repositories' ? 'border-underline border-b-2' : ''} p-2 max-w-50`}>
                        <BookMarked size={24}/>

                        <div className="text-lg">
                            Repositories
                        </div>

                        <div className="rounded-2xl border-1 border-off-white text-off-white px-2 text-sm bg-off-white-bgNumber">
                            {user?.public_repos}
                        </div>
                    </button>

                    <button onClick={() => setSelected('starred')} className={`flex  h-16 items-center gap-4  ${selected === 'starred' ? 'border-underline border-b-2' : ''} p-2 max-w-50`}>
                        <Star size={24} color="#DBDBDB"/>

                        <div className="text-lg text-off-white-100">
                            Starred
                        </div>

                        <div className="rounded-2xl border-1 border-off-white-100 text-off-white px-2 text-sm bg-off-white-bgNumber">
                            
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}