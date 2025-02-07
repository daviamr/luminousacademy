import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react"
import { Button } from "./ui/button";
import '@/global.css'

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <div className="relative bg-[#383838] w-full py-4 rounded-full mt-3 z-20">
        <div className="relative flex items-center justify-between px-5">
          <a href="#">
            <img src="https://i.imgur.com/ObiQYXy.png" alt="Luminous Academy" className="max-w-[34px] rounded-full select-none" />
          </a>
          {isOpen ? <MenuIcon size={28} className="text-[#ffffff] cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} /> : <XIcon size={28} className="text-[#ffffff] cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} />}
        </div>
      </div>

      <nav className={`absolute z-10 -top-3 left-0 w-full bg-[#2b2b2b] overflow-hidden duration-200 ${!isOpen ? 'h-[calc(100%+12px)] pt-16' : 'h-0 pt-0'}`}>
        <ul className="flex flex-col items-left pt-20">
          <div className="w-max m-auto flex flex-col items-center gap-2">
            <li className="hover:text-purple-700 duration-300">
              <a href="#" className="flex items-center gap-2">
                Início
              </a>
            </li>
            <li className="hover:text-purple-700 duration-300">
              <a href="#">Contato</a>
            </li>
            <li className="hover:text-purple-700 duration-300">
              <a href="#">Nossos cursos</a>
            </li>
          </div>
        </ul>
        <div className="flex flex-col items-center gap-4 py-8 w-max m-auto">
          <div className="flex items-center gap-2">
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-white"></div>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-purple-500 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient">Comunidade</p>
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-white to-transparent"></div>
          </div>
          <Button variant={"ghost"} className="bg-purple-700 text-xl py-6 px-8 rounded-full">
            <img src="https://i.imgur.com/J5xjUV9.png" alt="Comunidade do discord" className="max-w-[32px]" />
            Discord
          </Button>
        </div>
      </nav>
    </>
  )
}