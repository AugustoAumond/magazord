import { Building2, Instagram, Link, MapPin } from "lucide-react";
import { useUser } from "../../../hooks/useFetch";

interface UserProps {
    userName: string
}

export default function User({
    userName
}: UserProps){
    const {data: user} = useUser(userName);

    return (
    <div className="flex flex-col items-center gap-6 min-w-[185px] max-w-[251px] p-5">
        <div className="w-4/5 overflow-hidden rounded-[100%]">
            <img src={user?.avatar_url} alt="" />
        </div>

        <div className="w-full flex flex-col items-center">
            <h1 className="text-name-profile text-2xl font-bold text-center max-lg:text-base">{user?.name}</h1>
            <p className="text-center text-off-white max-lg:text-xs">{user?.bio}</p>
        </div>

        <div className="w-full">
            <div className="flex flex-col max-w-[169px] text-blue-light gap-4">
                <div className="flex gap-2.5">
                    <Building2 className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px]">
                        {user?.company}
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <MapPin className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px]">
                        {user?.location}
                        
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Link className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px]">
                        <a href={user?.blog}>
                            {user?.blog}
                        </a>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Instagram className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px]">
                        <a target="_blank">
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}