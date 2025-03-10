import { useEffect, useState } from "react";
import { useMostPopularUsers, useSearchUser } from "../../hooks/useFetch";
import { RepositorieStore } from "../../store/zustandStore/RepositorioStore";

import Header from "../../componentes/globals/header/header";
import Loading from "../../componentes/globals/loading/loading";
import UserContainer from "../../componentes/searchUser/userContainer/userContainer";

import {  Search } from "lucide-react";
import { SearchUsers } from "./actions";
import { UserProps } from "../../interfaces/interfaces";
import Button from "../../library/button/button";
import Input from "../../library/input/input";


export default function SearchUser(){
    const {setUserName} = RepositorieStore();

    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');

    //Validação do loading e da busca inicial;
    const [ validation, setValidation] = useState(false);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState<UserProps[]>();

    const {data: searchUser} = useSearchUser(search);
    const {data: popUsers} = useMostPopularUsers();

    useEffect(()=>{
        setTimeout(()=>{
            //FUNÇÃO QUE BUSCAS OS DADOS DO USUÁRIO QUE SERÃO MOSTRADOS EM TELA
            SearchUsers(popUsers, setLoading, setCount, setUsers)
        }, 1000)
        
    }, [count])

    useEffect(()=>{
        //VALIDAÇÃO PARA FAZER A REQUISIÇÃO APENAS APÓS O USUÁRIO TERMINAR DE DIGITAR, OU SEJA SÓ VAI ALTERAR O DADO DO SEARCH SE O USUÁRIO PARAR DE DIGITAR POR 400MS
        const timeout = setTimeout(() => {
            setSearch(searchText);
            setValidation(true);
        }, 400); 
    
        return () => {
            clearTimeout(timeout);
        };
    }, [searchText])

    //FUNÇÃO DE PESQUISAR COM A TECLA ENTER
    function setSearchEnter(value: React.KeyboardEvent<HTMLInputElement>){
        if (value.key === 'Enter') {
            SearchUsers(searchUser, setLoading, setCount, setUsers);
        }
    };

    return (
        <div className="flex items-centerflex flex-col items-center w-full gap-10 pb-10">
            <Header page="Buscar Usuário"/>

            <div className="flex flex-col gap-5 w-full max-w-[1080px] p-10 max-[400px]:p-5">
                <div className="flex flex-col  w-full justify-between gap-5">
                    <div className="font-bold text-lg">
                        BUSCAR USUÁRIO
                    </div>

                    <div className="flex w-full gap-10 text-off-white justify-between">
                        <div className="flex items-center w-full gap-5 max-md:w-full">
                            <Search className="max-md:hidden"/>

                            <Input 
                            value={searchText} 
                            setEnter={setSearchEnter} 
                            onChange={setSearchText} />

                            <div onClick={()=>  SearchUsers(searchUser, setLoading, setCount, setUsers)}>
                                <Button disable={validation} onClick={() => console.log('clicou')} text=" Buscar Usuário">

                                </Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                {(users && !loading )? users?.map((user: UserProps, index: number)=>(
                    <div className="flex items-center w-full max-w-[1080px] gap-5 p-10 border-off-white rounded-lg" key={index}>
                        <UserContainer 
                        user={user} 
                        setUserName={setUserName}
                        />
                    </div>
                            
                )) : (loading && <Loading/>)}
            </div>
        </div>
    )
}