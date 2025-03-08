import { Book, UserCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { UserProps } from "../../../interfaces/interfaces";

interface userContainerProps {
    setUserName: (e: string) => void
    user: UserProps
}

export default function UserContainer({
    setUserName,
    user
}: userContainerProps){
    return (
        <div className="flex items-center w-[100%] max-w-[1080px] gap-5 hover:border-1 border-off-white rounded-lg  max-md:bg-off-white-bgNumber">
        <Link to={'/profile'} onClick={()=> setUserName(user.login)} className="flex items-center w-full gap-5 p-5 max-md:flex-col max-md:" >
            <div className="flex gap-5 justify-between w-full max-md:flex-col max-md:items-center">
                <div className="w-32 h-32">
                    <img className="rounded-[50%]" src={user.avatar_url}/>
                </div>
                
                <div className="flex w-full flex-1 justify-between max-md:justify-center">
                    <div >
                        <div>
                            Nome: <span className="text-off-white">{user.name}</span>
                        </div>

                        <div>
                            Localização: <span className="text-off-white">{user.location}</span>
                        </div>

                        <div>
                            Bio: <span className="text-off-white">{user.bio}</span>
                        </div>

                        <div>
                            Empresa: <span className="text-off-white">{user.company ? user.company : 'Nenhum dado encontrado!'}</span>
                        </div>

                        <div>
                            Email: <span className="text-off-white">{user.email ? user.email : 'Nenhum email encontrado!'}</span> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-5 max-md:flex-row">
                <div className="flex gap-2">
                    <Users/> {user.followers}
                </div>

                <div className="flex gap-2">
                    <UserCheck/> {user.following}
                </div>

                <div className="flex gap-2">
                    <Book/> {user.public_repos}
                </div>
            </div>
        </Link>
    </div>
    )
}