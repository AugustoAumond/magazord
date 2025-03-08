import { useEffect, useState } from "react";
import { RepositorieStore } from "../../store/zustandStore/RepositorioStore";
import { useAllRepositories, useUser } from "../../hooks/useFetch";

import Header from "../../componentes/globals/header/header";
import User from "../../componentes/profile/user/user";
import SelectRepos from "../../componentes/profile/selectRepos/selectRepos";
import SearchRepositorie from "../../componentes/profile/searchRepositories/searchRepositories";
import Repositories from "../../componentes/globals/repositories/repositories";
import CommitsComponent from "../../componentes/profile/commitsComponent/commits";
import Loading from "../../componentes/globals/loading/loading";
import { AllRepositoriesProps } from "../../interfaces/interfaces";
import { getUserStorage, setUserStorage } from "../../store/localStorage/userLocalStorage/userLocalStorage";



export default function Profile(){
    const {setRepositories, repositories, userName, setUserName} = RepositorieStore();
    const [optionsType, setOptionsType] = useState<string[]>([]);
    const [optionsLanguage, setOptionsLanguage] = useState<string[]>([]);

    const [nameRepo, setNameRepo] = useState('');

    const [openCommits, setOpenCommits] = useState(false);

    const {data: user} = useUser(userName);
    const {data: allRepositories} = useAllRepositories(userName);
    
    useEffect(()=>{
        //CÓDIGO PARA CORRIGIR UM BUG, SE O USUÁRIO ATUALIZASSE A PÁGINA DE PERFIL FICAVA EM LOOP POIS NÃO HAVIA O USERNAME
        if (userName){
            setUserStorage(userName);
        } else {
            let name: string | null = getUserStorage();
            setUserName(JSON.parse(name ? name : ''))
        }
    }, [])

    useEffect(() => {
        setRepositories(allRepositories);     
        let language = ['Language'];
        let type = ['Type'];

        allRepositories?.forEach((e: AllRepositoriesProps) => {
            //BUSCA APENAS AS LINGUAGEM DE PROGRAMAÇÃO DO USUÁRIO
            if (!language.includes(e.language) && e.language){
                language.push(e.language);
                
            }

            //BUSCA APENAS OS TYPES EXISTENTES NOS PROJETOS DO USUÁRIO
            if (!type.includes(e.owner.type) && e.owner.type){
                type.push(e.owner.type);
            }

            setOptionsType(type);
            setOptionsLanguage(language);

        });

    }, [allRepositories]);

    //ABRE A DIALOG DE COMMITS
    function getCommits(value: string){
        setOpenCommits(true);
        setNameRepo(value);
    }

    function CloseCommits(){
        setOpenCommits(false);
    }

    return (
        <div className="flex flex-col items-center w-full gap-20">
            <Header page={user?.name}/>

            {openCommits && 
                <CommitsComponent
                CloseCommits={CloseCommits}
                nameRepo={nameRepo}
                userName={userName}/>
            }

            <div className="flex w-full max-w-[1080px] border-solid gap-16 max-md:flex-col max-md:items-center max-md:gap-8">
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
                    optionsType={optionsType}
                    optionsLanguage={optionsLanguage}
                    />

                    {(repositories !== undefined && repositories[0] === undefined) && <div className="text-lg text-off-white">Nenhum repositório encontrado</div>}

                    <div className="flex flex-col gap-12 w-full pb-10">
                        {repositories ? repositories?.map((repo: AllRepositoriesProps, index: number) => (
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
                        )): <Loading/>}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}