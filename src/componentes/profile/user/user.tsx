import { Building2, ChevronDown, ChevronUp, Instagram, Link, MapPin } from "lucide-react";
import { useUser } from "../../../hooks/useFetch";
import { useState } from "react";

interface UserProps {
    userName: string
}

export default function User({
    userName
}: UserProps){
    const {data: user} = useUser(userName);
    const [open, setOpen] = useState(false);


    window.addEventListener('resize',(()=>{
        if (document.body.clientWidth > 768){
            setOpen(true);
        } else if (document.body.clientWidth < 768 && document.body.clientWidth > 668) {
            setOpen(false);
        }
    }))

    return (
    <div className="flex flex-col w-full items-center gap-6 min-w-[185px] max-w-[251px] p-5 max-md:max-w-full">
        <div className="w-4/5 overflow-hidden rounded-[100%] max-md:max-w-[251px]">
            <img src={user?.avatar_url} alt="" />
        </div>

        <div className="w-full flex flex-col items-center">
            <h1 className="text-name-profile text-2xl font-bold text-center max-lg:text-base max-md:text-2xl">{user?.name}</h1>
            <p className="text-center text-off-white max-lg:text-xs max-md:text-base">{user?.bio}</p>
        </div>

        <div className="flex flex-col w-full px-5 gap-5">
            <div className="hidden flex-col gap-2 w-full justify-center max-md:flex">
                <p className="text-blue-light text-center">Informações Adicionais</p>

                <div className="w-full flex justify-center">
                    {!open ? 
                        <ChevronUp onClick={() => setOpen(true)} className={`w-6 h-6 transition-transform cursor-pointer`} color="#0587FF"/> :
                        <ChevronDown onClick={() => setOpen(false)} className={`w-6 h-6 transition-transform cursor-pointer`} color="#0587FF" size={30}/>
                    }
                </div>
            </div>

            {open && 
            <div className="flex flex-col max-w-[169px] text-blue-light gap-4 max-md:bg-off-white-bgNumber max-md:p-4 max-md:max-w-full">
                <div className="flex gap-2.5">
                    <Building2 className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px] max-md:text-xs">
                        {user?.company}
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <MapPin className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px] max-md:text-xs">
                        {user?.location}
                        
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Link className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px] max-md:text-xs">
                        <a href={user?.blog}>
                            {user?.blog}
                        </a>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Instagram className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs max-lg:text-[10px] max-md:text-xs">
                        <a target="_blank">
                            
                        </a>
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
    )
}