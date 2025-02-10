import { AccordionItems } from "../accordionItems";

export function NewFooter() {
  return (
    <>
      <div className="pt-8 bg-[#120418]">

        <div className="pb-10 px-4 sm:px-8 max-w-[1280px] m-auto">
          <AccordionItems />
        </div>

        <div className="px-4 py-8 sm:px-8 bg-[#23092e]">
          <div className="flex flex-col items-center justify-center w-full gap-8">

            <div className="flex flex-col items-center gap-6">
              <img src="https://i.imgur.com/eVfzS4A.png" alt="Luminous Academy" className="max-w-[180px] cursor-pointer relative z-20" />

              <div className="flex flex-col items-center gap-2">
                <p>Conheça nossas redes</p>
                <ul className="flex gap-4">
                  <li>
                    <a href="#">
                      <img src="https://i.imgur.com/u82QYC1.png" alt="Luminouse Academy Youtube" className="max-w-[24px]" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://i.imgur.com/J5xjUV9.png" alt="Comunidade do discord" className="max-w-[24px]" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://i.imgur.com/V54CWWp.png" alt="Luminouse Academy Instagram" className="max-w-[24px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="opacity-50 text-[14px]">
                <strong>&copy; 2025</strong> Luminous Academy - mrDarkness
              </p>
              <p className="opacity-50 text-[10px] uppercase underline">
                <a href="https://github.com/daviamr" target="_blank">Developed by: Daviamr</a>
              </p>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}