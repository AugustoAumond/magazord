import axios from "axios";
import { UserProps } from "../../interfaces/interfaces";

interface valueProps {
    items: [login: string]
}

export async function SearchUsers(
    value: valueProps , 
    setLoading: (e: boolean) => void, 
    setCount: (e: number) => void,
    setUsers: (e: UserProps[]) => void
){
    const token = import.meta.env.VITE_API_KEY;
    
    setLoading(true);
    setCount(1);

    const userPromises = value?.items.map(async (user: any) => {
        const response = await axios.get(`https://api.github.com/users/${user.login}`, {
            headers: { Authorization: `token ${token}` }
        });
        return response.data;
    });

    setTimeout(()=>{
        setLoading(false);
    }, 10000)

    // Aguarde todas as promessas e armazene os resultados em listOfUsers
    Promise.all(userPromises)
    .then((usersData) => {
        setLoading(false);
        return setUsers([...usersData]);
    })
    .catch(() => {
        setLoading(false);
        //console.error("Erro ao buscar dados do usuário:", error);
    });
}