import { useEffect, useState } from "react";
import Header from "../../componentes/globals/header/header";

import User from "../../componentes/home/user/user";
import Repositories from "../../componentes/home/repositories/repositories";
import SelectRepos from "../../componentes/home/selectRepos/selectRepos";
import SearchRepositorie from "../../componentes/home/search/search";
import { FilterRepositories, getAllRepositories, getStarred, getUser } from "./actions";


export default function Home(){
    const [datasUser, setDatasUser] = useState<any>();
    const [searchRepositorie, setSearchRepositorie] = useState<any>();
    const [repositories, setRepositories] = useState<any>();
    const [starred, setStarred] = useState<number>(0);

    const [selected, setSelected] = useState('repositories');

    const userName = 'AugustoAumond';


    useEffect(() => {
        getUser(userName, setDatasUser);

        getStarred(setStarred, starred, selected, userName, setRepositories);

        getAllRepositories(userName, selected, setRepositories);
    }, [selected]);



    async function SearchAction(){
        FilterRepositories(searchRepositorie, userName, setRepositories)

        setSearchRepositorie('');
    }
    
    return (
        <div className="flex flex-col items-center w-full gap-20">
            <Header/>

            {/* <div className="fixed w-full h-full flex items-center justify-center">
                <div className="border-1 w-[500px] h-[300px] bg-white m-auto">

                </div>
            </div> */}

            <div className="flex w-full max-w-[1080px] border-solid gap-16">
                <User
                name={datasUser?.name}
                bio={datasUser?.bio}
                blog={datasUser?.blog}
                company={datasUser?.company}
                location={datasUser?.location}
                user={datasUser?.avatar_url}/>

                <div className="flex flex-col gap-14  w-[814px] ">
                    <SelectRepos
                    setSelected={setSelected}
                    public_repos={datasUser?.public_repos}
                    selected={selected}
                    starred={starred}/>

                    <SearchRepositorie
                    SearchAction={SearchAction}
                    setSearchUser={setSearchRepositorie}
                    searchUser={searchRepositorie}/>

                    <div className="flex flex-col gap-12 w-full pb-10">
                        {repositories?.map((repo: any, index: number) => (
                        <div key={index}>
                            <Repositories
                            description={repo?.description}
                            forks_count={repo?.forks_count}
                            full_name={repo?.full_name}
                            language={repo?.language}
                            stargazers_count={repo?.stargazers_count}
                            user={userName}/>
                        </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}