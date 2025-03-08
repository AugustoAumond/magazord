import { Search } from "lucide-react";
import CustomSelect from "../../../library/select/select";
import { useState } from "react";
import { useAllRepositories, } from "../../../hooks/useFetch";
import { RepositorieStore } from "../../../store/zustandStore/RepositorioStore";
import { AllRepositoriesProps } from "../../../interfaces/interfaces";
import Input from "../../../library/input/input";

interface SearchComponentProps{
    userName: string
    optionsLanguage: string[]
    optionsType: string[]
}

export default function SearchRepositorie({
    userName,
    optionsLanguage,
    optionsType
}: SearchComponentProps){
    const [search, setSearch] = useState('');

    const [selectedType, setSelectedType] = useState('Type');
    const [selectedLanguage, setSelectedLanguage] = useState('Language');

    const {setRepositories} = RepositorieStore();

    const {data: allRepositories} = useAllRepositories(userName);

    //FUNÇÃO PARA FILTRAR OS TIPOS
    function FilterLanguage(value: string){
        let items: any = [];
            setSelectedType('Type');
            setSearch('');
            allRepositories?.forEach((item: AllRepositoriesProps) => {
                if (item.language === value) {
                    items.push(item);
                };
            })

            setRepositories(value !== 'Language' ? items : allRepositories);
            
    }

    //FUNÇÃO PARA FILTRAR AS LINGUAGENS DE PROGRAMAÇÃO
    function FilterType(value: string){
        let items: any = [];
        allRepositories?.forEach((item: AllRepositoriesProps) => {
            setSelectedLanguage('Language');
            setSearch('');
            if (item.owner.type === value) {
                items.push(item);
            };
        })
        setRepositories(value !== 'Type' ? items : allRepositories);
    }

    //BUSCAR COM A TECLA ENTER
    function setSearchEnter(value: React.KeyboardEvent<HTMLInputElement>){
        if (value.key === 'Enter') {
            SearchAction();
        }
    };

    //FILTRO PARA BUSCAR OS REPOSITÓRIOS DIGITADOS NO INPUT
    function SearchAction (){
        let items: any = [];
        allRepositories.forEach((item: AllRepositoriesProps)=>{
            if (item.full_name?.replace(`${userName}/`, '').toUpperCase().includes(search.toUpperCase())){
                items.push(item);
            }
        })

        setSelectedLanguage('Language');
        setSelectedType('Type');

        setRepositories(items);
    }

    return (
        <div className="w-full flex justify-between gap-26 max-lg:gap-10 max-md:flex-col-reverse max-md:justify-center max-md:items-center">
            <div className="flex items-center flex-1 border-b-1 border-off-white-input max-md:flex-row-reverse max-md:w-[80%]">
                <button onClick={()=> SearchAction()} className="cursor-pointer">
                    <Search size={24} color="#989898"/>
                </button>
                
                <Input value={search} setEnter={setSearchEnter} onChange={setSearch}/>
            </div>
            
            <div className="flex w-64 gap-6 max-md:w-[60%] max-md:justify-center">
                <div >
                    <CustomSelect options={optionsType} setSelected={setSelectedType} filter={FilterType} selected={selectedType}/>
                </div>

                <div >
                    <CustomSelect options={optionsLanguage} setSelected={setSelectedLanguage} filter={FilterLanguage} selected={selectedLanguage}/>
                </div>
            </div>
        </div>
    )
}