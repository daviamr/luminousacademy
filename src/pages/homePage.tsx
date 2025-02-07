import { AccordionItems } from "@/components/accordionItems";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <>
      <div className="py-8">

        <div className="flex flex-col gap-8">

          <div>
            <h1 className="text-4xl font-semibold">Junte-se à comunidade de <span className="font-bold bg-gradient-to-r from-white via-purple-700 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient">Game Hacking</span> que mais cresce!</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis modi corrupti laborum maiores quibusdam explicabo, esse in aliquid optio non illum voluptatibus quam consequatur dolores, error, omnis culpa?
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">

            <div className="relative pt-[56.25%] w-full max-w-[740px] bg-[#000000] overflow-hidden rounded-xl border-b border-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-700 after:to-[hsl(189.18_100%_50%)] after:bg-[length:200%_100%] after:animate-text-gradient">
              <iframe
                src="https://iframe.mediadelivery.net/embed/380749/5c426b45-245d-497a-9f5a-0dc6b75f1e16?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>


            <a href="#">
              <Button variant={"secondary"} className="bg-purple-700 px-16 py-5 w-max text-1xl rounded-full uppercase font-semibold">
                Saiba mais
              </Button>
            </a>
          </div>

        </div>

        <div className="mt-8">
          <div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <p className="text-center text-2xl font-bold bg-gradient-to-r from-white via-purple-700 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient min-w-[180px]">O que você vai aprender?</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
            </div>

            <p className="text-center mt-2 mb-4">Descubra as habilidades que você será capaz de desenvolver após concluir o curso.</p>

            <ul className="grid grid-cols-1 justify-between gap-2 mt-4">
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Aimbot
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Aim Assist
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Speedhack
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Godmode
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Wallhack
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; ESP Line
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; ESP Box
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Jumpack
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; One Hit Kill
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Bypass
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Hack Externo
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Hack Interno
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Hack VIP
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Kill All Enemies
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Freeze All Enemies
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Recursos Infinitos
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Dinheiro Infinito
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Duplicação de Itens
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Programação de Cheats
              </li>
              <li className="font-bold bg-gradient-to-r from-purple-700 to-transparent  px-4 py-2 rounded-tl-xl rounded-bl-xl hover:scale-[1.02] duration-300 cursor-pointer">
                &bull; Criar Executáveis Hack
              </li>
              <li className="text-center mt-4">
                <p>E muito mais, está esperando o que?</p>
                <p><strong>Faça parte</strong> da Luminous Academy!</p>
              </li>
              <li className="text-center mt-4">
                <Button variant={"secondary"} className="bg-purple-700 px-16 py-5 w-max text-1xl rounded-full uppercase font-semibold">
                  Saiba mais
                </Button>
              </li>
            </ul>

          </div>

          <div className="mt-8">
            <AccordionItems />
          </div>

        </div>


      </div>
    </>
  )
}