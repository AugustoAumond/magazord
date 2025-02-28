import { useEffect, useState } from "react";
import Header from "../../componentes/globals/header/header";

import User from "../../componentes/home/user/user";
import Repositories from "../../componentes/home/repositories/repositories";
import SelectRepos from "../../componentes/home/selectRepos/selectRepos";
import SearchRepositorie from "../../componentes/home/searchRepositories/searchRepositories";
import { FilterRepositories, getAllRepositories, GetCommits, getStarred, getUser } from "./actions";
import { useAllRepositories, useCommits, useUser } from "../../hooks/useFetch";

export default function Home(){
    const [searchRepositorie, setSearchRepositorie] = useState<any>('');
    const [repositories, setRepositories] = useState<any>();
    const [starred, setStarred] = useState<number>(0);

    const [nameRepo, setNameRepo] = useState('');

    const [selected, setSelected] = useState('repositories');

    const [openCommits, setOpenCommits] = useState(false);

    const userName = 'AugustoAumond';

    const {data: user} = useUser(userName);
    const {data: allRepositories} = useAllRepositories(userName);
    const {data: commits} = useCommits(userName, nameRepo);
    

 

    // if (selected === 'starred'){
    //     setStarred(data.total_count);

    //     let repo = data.items;

    //     if (selected === 'starred'){
    //         setRepositories(repo);
    //     }
    // }
       



    // useEffect(() => {
    //     getUser(userName, setDatasUser);

    //     getStarred(setStarred, selected, userName, setRepositories);

    //     getAllRepositories(userName, selected, setRepositories);

       

    // }, [selected]);

    function getCommits(value: string){
        setOpenCommits(true);
        setNameRepo(value);
    }

    async function SearchAction(){
        FilterRepositories(searchRepositorie, userName, setRepositories)

        setSearchRepositorie('');
    }

    function CloseCommits(){
        setOpenCommits(false);
    }
    
    return (
        <div className="flex flex-col items-center w-full gap-20">
            <Header/>

            {openCommits && 
            <div className="fixed w-full h-full flex items-center justify-center z-10">
                <div onClick={() => CloseCommits()} className="absolute w-full h-full bg-white opacity-50">

                </div>

                <div className="flex flex-col z-10 border-1 border-off-white-100 w-[600px] h-[800px] bg-white m-auto rounded-lg p-5 overflow-y-auto gap-7 scrollbar-thin scrollbar-thumb-off-white ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-primary">Commits</h1>

                        <a href={''}>
                            Repositório

                        </a>
                    </div>
                    
                    {commits ? commits.itens?.map((commit: any, index: number)=>(
                        <a className="hover:border-1 border-off-white-100 rounded-lg" href={commit.html_url} target="blank" key={index}>
                            <div className="p-2 gap-5">
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <span className="font-bold">Autor:</span>{commit.commit.author.name}
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="font-bold">Data:</span> {commit.commit.author.date}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="font-bold">Hash: </span>{commit.commit.tree.sha}
                                </div>

                                <div className="flex gap-2">
                                    <span className="font-bold">Mensagem: </span> {commit.commit.message}
                                </div>
                            </div>
                        </a>
                    )) : <>Carregando!</>}
                    <div>

                    </div>
                </div>
            </div>
            }
           

            <div className="flex w-full max-w-[1080px] border-solid gap-16">
                <User
                userName={userName}
               />

                <div className="flex flex-col gap-14  w-[814px] ">
                    <SelectRepos
                    setSelected={setSelected}
                    public_repos={user?.public_repos}
                    selected={selected}
                    starred={starred}/>

                    <SearchRepositorie
                    userName={userName}
                    setRepositories={setRepositories}
                    SearchAction={SearchAction}
                    setSearchUser={setSearchRepositorie}
                    searchUser={searchRepositorie}/>

                    {(repositories !== undefined && repositories[0] === undefined) && <div className="text-lg text-off-white">Nenhum repositório encontrado</div>}

                    <div className="flex flex-col gap-12 w-full pb-10">
                        {allRepositories?.map((repo: any, index: number) => (
                        <div key={index}>

                            <Repositories
                            description={repo?.description}
                            forks_count={repo?.forks_count}
                            full_name={repo?.full_name}
                            language={repo?.language}
                            stargazers_count={repo?.stargazers_count}
                            user={userName}
                            getCommits={getCommits}
                            />
                        </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}