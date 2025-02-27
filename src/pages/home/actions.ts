import axios from "axios";

    export async function getStarred(
        setStarred: (e: number) => void,
        starred: number, 
        selected: string,
        userName: string,
        setRepositories: (e: any) => void){
        await axios(`https://api.github.com/search/repositories?q=user:${userName}+stars:>0&sort=stars&order=desc`, {
            headers: {
                'Authorization': `token ${import.meta.env.VITE_API_KEY}`
            }})
        .then((response) => {
            setStarred(response.data.total_count);
            console.log(starred)
            let repo = response.data.items;

            if (selected === 'starred'){
                setRepositories(repo);
            }
        })
        .catch((error) => console.error("Erro ao buscar usuário:", error));
    }

    export async function getAllRepositories(
        userName: string,
        selected: string,
        setRepositories: (e: any) => void
    ){
        await axios(`https://api.github.com/users/${userName}/repos?per_page=500`, {
            headers: {
                'Authorization': `token ${import.meta.env.VITE_API_KEY}`
            }})
        .then((response) => {
            let repo = response.data;

            if (selected === 'repositories'){
                setRepositories(repo);
            }
        })
        .catch((error) => console.error("Erro ao buscar usuário:", error));
    }

        export async function getUser(
            userName: string,
            setDatasUser: (e: any) => void
        ){
            await axios(`https://api.github.com/users/${userName}`, {
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_API_KEY}`
                }
            })
            .then( (response) => {
                console.log(response.data)
                setDatasUser(response.data);
            })
            .catch( (error) =>{
                if (error.status === 403){

                }
            })
        }

        export async function FilterRepositories(
            searchRepo: string,
            userName: string,
            setRepositories: (e: any) => void
        ) {
            await axios(`https://api.github.com/search/repositories?q=${searchRepo}+user:${userName}`, {
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_API_KEY}`
                }
            })
            .then((response) =>{
                setRepositories(response.data.items);
            })
            .catch( (error) =>{
                if (error.status === 403){

                }
            })
        }