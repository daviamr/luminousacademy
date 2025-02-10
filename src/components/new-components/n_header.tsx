import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { NewDesktopHeader } from "./n_desktop_header";

export function NewHeader() {
  const [openMenu, isOpenMenu] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div className={`bg-background flex items-centers justify-between py-8 px-4 sm:px-8 lg:py-10 relative max-w-[1280px] m-auto`}>

          {/*mobile*/}
          <div className="flex justify-between items-center gap-4 lg:hidden w-full">
            <div className="flex items-center gap-4">
              <button
                className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] p-1 z-20"
                onClick={() => isOpenMenu(!openMenu)}>
                {
                  !openMenu ?
                    <Menu size={30} /> :
                    <X size={30} />
                }
              </button>

              <a href="#">
                <img src="https://i.imgur.com/eVfzS4A.png" alt="Luminous Academy" className="max-w-[120px] cursor-pointer relative z-20" />
              </a>
            </div>

            <Button variant={"ghost"} className="relative z-20">
              <p
                className="bg-gradient-to-r from-white via-[#B200FF] to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient uppercase">
                Ver cursos
              </p>
            </Button>
          </div>

          {/*desktop*/}
          <NewDesktopHeader/>

        </div>

        {/*nav mobile*/}
        <nav className={`absolute top-0 left-0 w-full h-max bg-[rgba(1,8,14,0.9)] px-4 sm:px-8 z-10 pt-[104px] duration-300 ${openMenu ? 'opacity-100' : 'opacity-0 '} lg:hidden`}>
          <ul className="py-6">
            <div className="flex flex-col gap-2">

              <li className="uppercase text-[14px] cursor-pointer hover:text-purple-700 duration-300">
                Início
              </li>
              <li className="uppercase text-[14px] cursor-pointer hover:text-purple-700 duration-300">
                Nossos cursos
              </li>
              <li className="uppercase text-[14px] cursor-pointer hover:text-purple-700 duration-300">
                Ensinamentos
              </li>
              <li className="uppercase text-[14px] cursor-pointer hover:text-purple-700 duration-300">
                Contato
              </li>
            </div>

            <li>
              <div className="flex flex-col items-center gap-4 py-4 w-max m-auto">
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
            </li>

          </ul>
        </nav>

      </div>
    </>
  )
}