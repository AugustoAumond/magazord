import { useEffect, useState } from "react";
import Header from "../../componentes/globals/header/header";

import User from "../../componentes/home/user/user";
import Repositories from "../../componentes/home/repositories/repositories";
import SelectRepos from "../../componentes/home/selectRepos/selectRepos";
import SearchRepositorie from "../../componentes/home/searchRepositories/searchRepositories";
import { useAllRepositories, useUser } from "../../hooks/useFetch";
import { RepositorieStore } from "../../zustandStore/CommitsStore";
import CommitsComponent from "../../componentes/home/commitsComponent/commits";

export const optionsType: string[] = ['Type'];
export const optionsLanguage: string[] = ['Language'];

export default function Home(){
    const {setRepositories, repositories} = RepositorieStore();

    const [nameRepo, setNameRepo] = useState('');

    const [openCommits, setOpenCommits] = useState(false);

    const userName = 'AugustoAumond';

    const {data: user} = useUser(userName);
    const {data: allRepositories} = useAllRepositories(userName);
    

    useEffect(() => {
        setRepositories(allRepositories);     
        
        allRepositories?.forEach((e: any) => {
            if (!optionsLanguage.includes(e.language) && e.language){
                optionsLanguage.push(e.language);
                console.log(e.language)
            }

            if (!optionsType.includes(e.visibility) && e.visibility){
                optionsType.push(e.visibility);
            }

        });

    }, [allRepositories]);

    function getCommits(value: string){
        setOpenCommits(true);
        setNameRepo(value);
    }

    function CloseCommits(){
        setOpenCommits(false);
    }

    return (
        <div className="flex flex-col items-center w-full gap-20">
            <Header/>

            {openCommits && 
                <CommitsComponent
                CloseCommits={CloseCommits}
                nameRepo={nameRepo}
                userName={userName}/>
            }

            <div className="flex w-full max-w-[1080px] border-solid gap-16 max-md:flex-col max-md:items-center">
                <User
                userName={userName}
                />

                <div className="flex flex-col p-5 gap-14 w-full max-w-[814px]  max-md:p-5 max-md:w-[100%]">
                    <SelectRepos
                    userName={userName}
                    public_repos={user?.public_repos}
                    />

                    <SearchRepositorie
                    userName={userName}
                    />

                    {(repositories !== undefined && repositories[0] === undefined) && <div className="text-lg text-off-white">Nenhum repositório encontrado</div>}

                    <div className="flex flex-col gap-12 w-full pb-10">
                        {repositories?.map((repo: any, index: number) => (
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