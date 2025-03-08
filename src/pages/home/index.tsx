import { useEffect, useState } from "react";
import Repositories from "../../componentes/globals/repositories/repositories";
import { useMostPopular } from "../../hooks/useFetch";

import Header from "../../componentes/globals/header/header";

import CustomSelect from "../../library/select/select";
import Loading from "../../componentes/globals/loading/loading";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AllRepositoriesProps } from "../../interfaces/interfaces";


export default function Home(){
    const [select, setSelect] = useState('Javascript');
    const [pageNumber, setPageNumber] = useState(1);

    const {data: popular} = useMostPopular(select, pageNumber);

    //OBJETO USADO PARA ADICIONAR NO DROPDOWN DE FILTROS DOS REPOSITÓRIOS RELEVANTES
    const obj = [
        'Javascript',
        'Kotlin',
        'Java',
        'C',
        'Python',
        'Rust',
        'SQL',
    ]

    useEffect(()=>{
        setPageNumber(1);

        document.documentElement.classList.add("dark");
    }, [select])

    return (
        <div className="flex flex-col items-center w-full gap-10">
            <Header page="Homepage"/>


            <div className="flex flex-col gap-5 w-full max-w-[1080px] p-10">
                <div className="flex items-center w-full justify-between max-[500px]:flex-col gap-5">
                    <div className="font-bold text-lg">
                        REPOSITÓRIOS MAIS POPULARES
                    </div>

                    <div className="flex items-center gap-5">
                        <CustomSelect options={obj} selected={select} filter={() => console.log('asd')} setSelected={setSelect}/>

                        <div className="flex items-center gap-3 p-1.5 b-2 bg-gradient-to-r from-[#0056A6] to-[#0587FF] rounded-2xl">
                            <ChevronLeft  onClick={() => setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1)} color="white" className="cursor-pointer"/>
                            <span className="text-white cursor-pointer">{pageNumber}</span>
                            <ChevronRight onClick={() => setPageNumber(pageNumber + 1)} color="white" className="cursor-pointer"/>
                        </div>
                        
                    </div>
                </div>

                {popular ? popular?.items.map((repo : AllRepositoriesProps, index: number)=>(
                    <a key={index} href={repo.git_url.replace('git', 'https')} target="blank">
                        <Repositories
                        description={repo?.description}
                        forks_count={repo?.forks_count}
                        full_name={repo?.full_name}
                        language={repo?.language}
                        stargazers_count={repo?.stargazers_count}
                        topics={repo.topics}
                        />
                    </a>
                )): 

                    <Loading/>
                }
            </div>
        




        </div>
    )
}