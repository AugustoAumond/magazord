import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
    options: string[]
    selected: string
    setSelected: (e: string) => void
    filter: (e: string) => void
}

const CustomSelect = ({
    options,
    selected,
    setSelected,
    filter
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected]);

  return (
    <div className="relative"  ref={dropdownRef}>
      {/* Botão do Select */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center gap-2 p-2 px-4 rounded-2xl  text-sm cursor-pointer hover:border-[#0587FF] bg-gradient-to-r from-[#0056A6] to-[#0587FF] text-white max-lg:text-xs"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${!isOpen ? "rotate-180" : ""}`}
        />
          {selected}
      </button>

      {/* Opções */}
      {isOpen && (
        <ul className="absolute flex flex-col right-0 w-[300%] mt-1 gap-[2px] p-2 px-4 text-white rounded-lg  text-sm max-lg:text-xs cursor-pointer z-50 max-md:w-[150%]">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                filter(option);
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
