import axios from "axios";

    export async function getStarred(
        setStarred: (e: number) => void,
        selected: string,
        userName: string,
        setRepositories: (e: any) => void){
        await axios(`https://api.github.com/search/repositories?q=user:${userName}+stars:>0&sort=stars&order=desc`, {
            headers: {
                'Authorization': `token ${import.meta.env.VITE_API_KEY}`
            }})
        .then((response) => {
            setStarred(response.data.total_count);

            let repo = response.data.items;

            if (selected === 'starred'){
                setRepositories(repo);
            }
        })
        .catch((error) => console.error("Erro ao buscar usuário:", error));
    }

    export const optionsType: string[] = ['Type'];
    export const optionsLanguage: string[] = ['Language'];

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

            repo.forEach((e: any) => {
                if (!optionsLanguage.includes(e.language) && e.language){
                    optionsLanguage.push(e.language);
                }

                if (!optionsType.includes(e.visibility) && e.visibility){
                    optionsType.push(e.visibility);
                }
            });

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
            setRepositories: (e: any) => void,
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

        export async function FilterLanguageRepositories(
            userName: string,
            setRepositories: (e: any) => void,
            language: string,
        ) {
            await axios(`https://api.github.com/search/repositories?q=language:${language}+user:${userName}`, {
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_API_KEY}`
                }
            })
            .then((response) =>{
                console.log(response)
                setRepositories(response.data.items);
            })
            .catch( (error) =>{
                if (error.status === 403){

                }
            })
        }

        export async function FilterTypeRepositories(
            userName: string,
            setRepositories: (e: any) => void,
            type: string,
        ) {
            await axios(`https://api.github.com/search/repositories?q=visibility:${type}+user:${userName}`, {
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_API_KEY}`
                }
            })
            .then((response) =>{
                console.log(response)
       
                setRepositories(response.data.items);
            })
            .catch( (error) =>{
                if (error.status === 403){

                }
            })
        }

        
        export async function GetCommits(
            userName: string,
            setCommits: (e: any) => void,
            repo?: string,
        ) {


            await axios(`https://api.github.com/repos/${userName}/${repo?.replace(`${userName}/`, '')}/commits`, {
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_API_KEY}`
                }
            })
            .then((response) =>{
                console.log(response.data)
                setCommits(response.data);
            })
            .catch( (error) =>{
                if (error.status === 403){

                }
            })
        }