import { UserSearch } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
    page: string
}

export default function Header({
    page
}: HeaderProps){
    return (
        <div className="w-full h-18 bg-primary flex items-center justify-center">
            <div className="flex w-full items-center justify-between max-w-[1080px] p-5">
                <div className="h-full flex items-center gap-11 text-white">
                    <Link to={'/'}>
                        <div className="w-32">
                            <img  src="/github.png"></img>
                        </div>
                    </Link>

                    <div>/</div>

                    <div className="flex">{page}</div>
                </div>

                <Link to={'/searchUser'}>
                    <div className={`flex flex-col items-center text-off-white-100 ${page === 'Buscar Usuário' && 'underline'}`}>
                        <UserSearch size={20}/>
                        Buscar Usuário                    
                    </div>
                </Link>
            </div>
            
        </div>
    )
}