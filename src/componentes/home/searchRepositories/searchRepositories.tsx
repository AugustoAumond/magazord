import { Search } from "lucide-react";
import CustomSelect from "../../../library/select/select";
import { useEffect, useState } from "react";
import { FilterLanguageRepositories, FilterTypeRepositories, optionsLanguage, optionsType } from "../../../pages/home/actions";

interface SearchComponentProps{
    searchUser: string
    SearchAction: () => void
    setSearchUser: (e: string) => void
    userName: string
    setRepositories: (e: any) => void
}

export default function SearchRepositorie({
    SearchAction,
    setSearchUser,
    searchUser,
    userName,
    setRepositories
}: SearchComponentProps){
    const [selectedType, setSelectedType] = useState('Type');
    const [selectedLanguage, setSelectedLanguage] = useState('Language');
    const [getSelectedUse, setGetSelectedUse] = useState('');

    useEffect(()=>{
        if (getSelectedUse === 'Type' && selectedType !== 'Type'){
            FilterTypeRepositories(userName, setRepositories, selectedType, setSelectedLanguage );
            setSelectedLanguage('Language')
            console.log(getSelectedUse)
        } 
    
    }, [selectedType, getSelectedUse === 'Type'])

    useEffect(()=>{
        if (getSelectedUse === 'Language' && selectedLanguage !== 'Language') {
            FilterLanguageRepositories(userName, setRepositories, selectedLanguage );
            setSelectedType('Type')
            console.log(getSelectedUse)
        }
    }, [selectedLanguage, getSelectedUse === 'Language'])

    function setSearchEnter(value: React.KeyboardEvent<HTMLInputElement>){
        if (value.key === 'Enter') {
            SearchAction()
        }
    };

    return (
        <div className="w-full flex justify-between gap-26">
            <div className="flex items-center flex-1 border-b-1 border-off-white-input">
                <button onClick={()=> SearchAction()} className="cursor-pointer">
                    <Search size={24} color="#989898"/>
                </button>
                
                <input value={searchUser} onKeyDown={setSearchEnter} onChange={(e: any) => setSearchUser(e.currentTarget.value)} className="flex flex-1 px-5 py-2 focus:outline-none" placeholder="Pesquisar Repositório" type="text" />
            </div>
            
            <div className="flex w-64 gap-6">
                <div >
                    <CustomSelect options={optionsType} setSelected={setSelectedType} selected={selectedType}  setGetSelectedUse={setGetSelectedUse} value="Type"/>
                </div>

                <div >
                    <CustomSelect options={optionsLanguage} setSelected={setSelectedLanguage} selected={selectedLanguage}  setGetSelectedUse={setGetSelectedUse} value="Language"/>
                </div>
            </div>
        </div>
    )
}