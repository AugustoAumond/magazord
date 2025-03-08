import { ChangeEvent } from "react"

interface InputProps {
    value?: string
    onChange: (e: string ) => void
    setEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function Input({
    setEnter,
    onChange,
    value
}: InputProps){
    return (
        <input value={value} onKeyDown={setEnter} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)} placeholder="Buscar usuário" className="p-2 flex flex-1 border-0 border-b-2" type="text" />
    )
}