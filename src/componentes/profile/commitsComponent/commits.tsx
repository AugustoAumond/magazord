import { useCommits } from "../../../hooks/useFetch";

interface CommitsComponentProps {
    userName: string
    nameRepo: string
    CloseCommits: () => void
}

interface CommitsProps {
    html_url: string, 
    commit: {
        author: {
            name: string,
            date: string
        },
        tree: {
            sha: string
        },
        message: string
    }
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

            <div className="flex flex-col z-10 border-1 border-off-white-100 w-[90%] max-w-[600px] h-[800px]  max-h-[90%] bg-white m-auto rounded-lg p-5 overflow-y-auto gap-7 scrollbar-thin scrollbar-thumb-off-white ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary">Commits</h1>

                    <a className="underline" href={commits && commits[0]?.html_url.split("/commit")[0]} target="blank">
                        Repositório
                    </a>
                </div>

                <div>
                    <h2 className="text-lg font-bold">Projeto: <span className="font-normal"> {nameRepo.replace(`${userName}/`, '')} </span> </h2>
                </div>
                
                { commits?.map((commit: CommitsProps, index: number)=>(
                    <a className="hover:border-1 border-off-white-100 rounded-lg max-md:bg-off-white-bgNumber" href={commit.html_url} target="blank" key={index}>
                        <div className="flex flex-col p-2 max-md:text-xs">
                            <div className="w-full h-full flex justify-between items-center">
                                <div className="flex gap-2 truncate w-[47%]">
                                    <span className="font-bold">Autor:</span>{commit.commit.author.name}
                                </div>

                                <div className="flex gap-2 truncate  w-[47%]">
                                    <span className="font-bold">Data:</span> {commit.commit.author.date}
                                </div>
                            </div>

                            <div className="flex gap-2 truncate">
                                <span className="font-bold">Hash: </span>{commit.commit.tree.sha}
                            </div>

                            <div className="flex gap-2">
                                <strong >Mensagem: </strong> {commit.commit.message}
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