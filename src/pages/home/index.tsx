import { useEffect, useState } from "react";
import Header from "../../componentes/globals/header/header";
import { BookMarked, Building2, ChevronDown, GitFork, Instagram, Link, MapPin,  Search, Star } from "lucide-react";


export default function Home(){
    const [user, setUser] = useState<any>();
    const [repositories, setRepositories] = useState<any>();
    const [starred, setStarred] = useState<number>(0);

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

      useEffect(() => {
        fetch(`https://api.github.com/users/AugustoAumond/repos?per_page=100`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setRepositories(data);
            let number: number = 0;

            data.forEach((e: any) => {
                if (e.stargazers_count === 1){
                    number = number + 1;
                }
            });

            setStarred(number)
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

                <div className="flex flex-col gap-14">
                    <div className="flex w-[814px] gap-16">
                        <button onClick={() => setSelected('repositories')} className={`flex  h-16 items-center gap-4 ${selected === 'repositories' ? 'border-underline border-b-2' : ''} p-2 max-w-50`}>
                            <BookMarked size={24}  color={selected === 'repositories' ? 'black' : '#DBDBDB'}/>

                            <div className={`text-lg ${selected === 'repositories' ? '' : 'text-off-white-100'}`}>
                                Repositories
                            </div>

                            <div className="rounded-2xl border-1 border-off-white text-off-white px-2 text-sm bg-off-white-bgNumber">
                                {user?.public_repos}
                            </div>
                        </button>

                        <button onClick={() => setSelected('starred')} className={`flex  h-16 items-center gap-4  ${selected === 'starred' ? 'border-underline border-b-2' : ''} p-2 max-w-50`}>
                            <Star size={24} color={selected === 'starred' ? 'black' : '#DBDBDB'}/>

                            <div className={`text-lg ${selected === 'starred' ? '' : 'text-off-white-100'}`}>
                                Starred
                            </div>

                            <div className="rounded-2xl border-1 border-off-white-100 text-off-white px-2 text-sm bg-off-white-bgNumber">
                                {starred}
                            </div>
                        </button>
                    </div>

                    <div className="w-full flex justify-between gap-26">
                        <div className="flex items-center flex-1 border-b-1 border-off-white-input">
                            <Search size={24} color="#989898"/>
                            <input className="flex flex-1 px-5 py-2 focus:outline-none" placeholder="Search here!" type="text" />
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

                    <div className="flex flex-col gap-12 w-full pb-10">
                        {repositories?.map((repo: any, index: number) => (
                        <div key={index} className="flex flex-col gap-2 w-[90%]">
                            <h1 className="text-lg">{repo.full_name} / <span className="font-bold text-[#0587FF]">Release</span></h1>

                            <p className="text-off-white">{repo.description ? repo.description : 'Nenhuma informação disponível para este repositório!'}</p>

                            <div>
                                <h1 className="text-sm text-off-white">Languages: <span >{repo.language ? repo.language : 'Nenhuma linguagem disponível!'}</span></h1>
                            </div>

                            <div className="flex gap-8">
                                <div className="flex items-center gap-2.5">
                                    <Star size={16} color="black"/>

                                    {repo.stargazers_count}
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <GitFork size={16} color="black"/>

                                    {repo.forks_count}
                                </div>

                            </div>
                        </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}