import { Button } from "../ui/button";
import { Plans } from "./n_offers";
import { ChevronsDown } from "lucide-react";
import { MobileTechGrid } from "./n_mobile_tech_grid";
import { DesktopTechGrid } from "./n_desktop_tech_grid";

export function NewHomePage() {
  return (
    <>
      <main className="pt-4 pb-8">
        <div className="flex flex-col gap-8 sm:gap-10">

          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center px-4 sm:px-8 max-w-[1280px] m-auto lg:py-16">
            <div className="lg:flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-semibold">Junte-se à comunidade de <span className="font-bold bg-gradient-to-r from-white via-[#B200FF] to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient">Game Hacking</span> que mais cresce!</h1>
              <p className="mt-2 sm:text-xl lg:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis modi corrupti laborum maiores quibusdam explicabo.
              </p>
              <div className="flex items-center gap-4 mt-4 max-lg:hidden">
                <Button variant={"secondary"} className="py-6 rounded-none clip-custom duration-300 bg-[#B200FF] hover:bg-[#7f25a5] text-[#ffffff]">
                  Ver planos
                  <ChevronsDown strokeWidth={3} className="animate-bounce" />
                </Button>
                <Button variant={"secondary"} className="py-6">
                  <img src="https://i.imgur.com/J5xjUV9.png" alt="Comunidade do discord" className="max-w-[32px]" />
                  Comunidade
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 sm:gap-10 lg:flex-1">
              <div className="relative pt-[56.25%] w-full max-w-[740px] bg-[#000000] overflow-hidden rounded-xl border-b border-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#B200FF] after:to-[hsl(189.18_100%_50%)] after:bg-[length:200%_100%] after:animate-text-gradient">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/380749/5c426b45-245d-497a-9f5a-0dc6b75f1e16?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Button className="w-full py-8 text-[18px] rounded-none uppercase font-bold clip-custom duration-300 bg-[#B200FF] hover:bg-[#7f25a5] text-[#ffffff] lg:hidden">
                Saiba mais
              </Button>
            </div>
          </div>

          {/*mobile grid*/}
          <MobileTechGrid />

          <div className="bg-[#120418] hidden lg:block">
            {/*desktop grid*/}
            <DesktopTechGrid />
          </div>

          <div className="px-4 sm:px-8 lg:max-w-[1280px] lg:m-auto">
            <Plans />
          </div>

        </div>
      </main>
    </>
  )
}