import { Button } from "../ui/button";

export function NewDesktopHeader() {
  return (
    <>
      <div className="w-full max-lg:hidden">
        <div className="flex items-center justify-between">

          <div>
            <a href="#">
              <img src="https://i.imgur.com/eVfzS4A.png" alt="Luminous Academy" className="max-w-[140px] cursor-pointer relative z-20" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li className="uppercase cursor-pointer text-[14px] hover:text-purple-700 duration-300">
                <a href="#">
                  Início
                </a>
              </li>
              <li className="uppercase cursor-pointer text-[14px] hover:text-purple-700 duration-300">
                <a href="#">
                  Nossos cursos
                </a>
              </li>
              <li className="uppercase cursor-pointer text-[14px] hover:text-purple-700 duration-300">
                <a href="#">
                  Ensinamentos
                </a>
              </li>
              <li className="uppercase cursor-pointer text-[14px] hover:text-purple-700 duration-300">
                <a href="#">
                  Contato
                </a>
              </li>
            </ul>
            <Button variant={"secondary"} className="relative z-20">
              <p
                className="bg-gradient-to-r from-white via-[#B200FF] to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient uppercase text-[16px]">
                Ver cursos
              </p>
            </Button>
          </div>

        </div>
      </div>
    </>
  )
}