
interface ButtonProps{
    disable?: boolean
    onClick: () => void 
    text: string
}

export default function Button(
    {
        text,
        onClick,
        disable
    }: ButtonProps
){
    return (
        <button disabled={!disable} onClick={() => onClick} className="p-2 px-4 text-sm bg-gradient-to-r from-[#0056A6] to-[#0587FF] rounded-2xl text-white hover:opacity-80 cursor-pointer min-w-[125px] ">
            {text}
        </button>
    )
}