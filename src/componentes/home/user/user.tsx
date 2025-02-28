import { Building2, Instagram, Link, MapPin } from "lucide-react";

interface UserProps {
    user?: string 
    name: string
    company?: string
    location?: string
    blog?: string
    bio?: string
}

export default function User({
    user,
    name,
    bio,
    company,
    location,
    blog
}: UserProps){
    return (
    <div className="flex flex-col items-center gap-6 max-w-[251px] p-5">
        <div className="w-4/5 overflow-hidden rounded-[100%]">
            <img src={user} alt="" />
        </div>

        <div className="w-full flex flex-col items-center">
            <h1 className="text-name-profile text-2xl font-bold text-center">{name}</h1>
            <p className="text-center text-off-white">{bio}</p>
        </div>

        <div className="w-full">
            <div className="flex flex-col max-w-[169px] text-blue-light gap-4">
                <div className="flex gap-2.5">
                    <Building2 className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs">
                        {company}
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <MapPin className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs">
                        {location}
                        
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Link className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs">
                        <a href={blog}>
                            {blog}
                        </a>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <Instagram className="shrink-0" size={16} color='#0587FF'/>

                    <div className="text-xs">
                        <a target="_blank">
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}