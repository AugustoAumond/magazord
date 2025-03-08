
export default function Loading(){
    return (
        <div className="absolute top-0 left-0 flex w-full h-screen flex-1 items-center justify-center gap-5"> 
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>

            <div className="flex gap-5 justify-center items-center min-h-screen">
                <div className="text-blue-light animate-pulse delay-1000 text-2xl">Carregando </div>
                <div className="flex space-x-2">
                    <div className="w-10 h-10 border-2 border-t-transparent border-blue-light border-solid rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    )
}