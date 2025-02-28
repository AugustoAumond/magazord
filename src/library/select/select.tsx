import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
    options: string[]
    selected: string
    setSelected: (e: string) => void,
    setGetSelectedUse: (e: string) => void
    value: string

}

const CustomSelect = ({
    options,
    selected,
    setSelected,
    setGetSelectedUse,
    value
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    setGetSelectedUse(value);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected]);

  return (
    <div className="relative"  ref={dropdownRef}>
      {/* Botão do Select */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center gap-2 p-2 px-4 rounded-lg  text-sm cursor-pointer hover:border-[#0587FF] bg-gradient-to-r from-[#0056A6] to-[#0587FF] text-white"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${!isOpen ? "rotate-180" : ""}`}
        />
          {selected}
      </button>

      {/* Opções */}
      {isOpen && (
        <ul className="absolute flex flex-col right-0 w-[300%] mt-1 gap-[2px] p-2 px-4 text-white rounded-lg  text-sm cursor-pointer z-50">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="flex flex-col justify-center items-center w-full px-4 py-2 cursor-pointer bg-gradient-to-r from-[#0056A6] to-[#0587FF] rounded-lg hover:border-1 hover:border-off-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
