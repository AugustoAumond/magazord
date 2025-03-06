import { useCommits } from "../../../hooks/useFetch";

interface CommitsComponentProps {
    userName: string
    nameRepo: string
    CloseCommits: () => void
}

export default function CommitsComponent({
    CloseCommits,
    nameRepo,
    userName
}: CommitsComponentProps){
        const {data: commits} = useCommits(userName, nameRepo);

    return (
        <div className="fixed w-full h-full flex items-center justify-center z-10">
            <div onClick={() => CloseCommits()} className="absolute w-full h-full bg-white opacity-50">

            </div>

            <div className="flex flex-col z-10 border-1 border-off-white-100 w-[600px] h-[800px]  max-h-[90%] bg-white m-auto rounded-lg p-5 overflow-y-auto gap-7 scrollbar-thin scrollbar-thumb-off-white ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary">Commits</h1>

                    <a href={''}>
                        Repositório

                    </a>
                </div>
                
                { commits?.map((commit: any, index: number)=>(
                    <a className="hover:border-1 border-off-white-100 rounded-lg" href={commit.html_url} target="blank" key={index}>
                        <div className="p-2 gap-5">
                            <div className="w-full h-full flex justify-between items-center">
                                <div className="flex gap-2">
                                    <span className="font-bold">Autor:</span>{commit.commit.author.name}
                                </div>

                                <div className="flex gap-2">
                                    <span className="font-bold">Data:</span> {commit.commit.author.date}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <span className="font-bold">Hash: </span>{commit.commit.tree.sha}
                            </div>

                            <div className="flex gap-2">
                                <span className="font-bold">Mensagem: </span> {commit.commit.message}
                            </div>
                        </div> 
                    </a>
                ))}
                <div>

                </div>
            </div>
        </div>
    )
}