import { Search } from "lucide-react";
import CustomSelect from "../../../library/select/select";
import { useState } from "react";
import { useAllRepositories, useFilterRepositories } from "../../../hooks/useFetch";
import { RepositorieStore } from "../../../zustandStore/CommitsStore";
import { optionsType, optionsLanguage } from "../../../pages/home";

interface SearchComponentProps{
    userName: string
}

export default function SearchRepositorie({
    userName
}: SearchComponentProps){
    const [localSearch, setLocalSearch] = useState('');

    const [selectedType, setSelectedType] = useState('Type');
    const [selectedLanguage, setSelectedLanguage] = useState('Language');

    const {setRepositories} = RepositorieStore();

    const {data: searchRepo} = useFilterRepositories(localSearch, userName);
    const {data: allRepositories} = useAllRepositories(userName);

    function FilterLanguage(value: any){
        let items: any = [];
            setSelectedType('Type');
            setLocalSearch('');
            allRepositories?.forEach((item: any) => {
                if (item.language === value) {
                    items.push(item);
                };
            })
            setRepositories(value !== 'Language' ? items : allRepositories);
            
    }

    function FilterType(value: any){
        let items: any = [];
        allRepositories?.forEach((item: any) => {
            setSelectedLanguage('Language');
            setLocalSearch('');
            if (item.visibility === value) {
                items.push(item);
            };
        })
        setRepositories(value !== 'Type' ? items : allRepositories);
    }

    function setSearchEnter(value: React.KeyboardEvent<HTMLInputElement>){
        if (value.key === 'Enter') {
            SearchAction();
        }
    };

    function SearchAction (){
        setRepositories(searchRepo ?  searchRepo.items : allRepositories);
        setSelectedLanguage('Language');
        setSelectedType('Type');
    }

    return (
        <div className="w-full flex justify-between gap-26 max-lg:gap-10 max-md:flex-row-reverse">
            <div className="flex items-center flex-1 border-b-1 border-off-white-input max-md:flex-row-reverse">
                <button onClick={()=> SearchAction()} className="cursor-pointer">
                    <Search size={24} color="#989898"/>
                </button>
                
                <input value={localSearch} onKeyDown={setSearchEnter} onChange={(e: any) => setLocalSearch(e.currentTarget.value)} className="flex flex-1 px-5 py-2 focus:outline-none max-lg: text-xs" placeholder="Pesquisar Repositório" type="text" />
            </div>
            
            <div className="flex w-64 gap-6 max-md:w-[60%]">
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