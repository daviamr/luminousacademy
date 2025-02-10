import { useState } from "react"
import { motion } from 'framer-motion';
import { ChevronsDown } from "lucide-react";

export function DesktopTechGrid() {
  const [tech, setTech] = useState<string>('Mecânicas de Jogo');
  const techs = [
    {
      id: 0,
      tech: 'Aimbot',
      category: 'Manipulação de Mira',
      color: '#6800ff',
    },
    {
      id: 1,
      tech: 'Aim Assist',
      category: 'Manipulação de Mira',
      color: '#6800ff',
    },
    {
      id: 2,
      tech: 'Godmode',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 3,
      tech: 'Speedhack',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 4,
      tech: 'Jumphack',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 5,
      tech: 'One Hit Kill',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 6,
      tech: 'Kill All Enemys',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 7,
      tech: 'Freeze All Enemys',
      category: 'Mecânicas de Jogo',
      color: '#b200ff',
    },
    {
      id: 8,
      tech: 'Wallhack',
      category: 'Visibilidade',
      color: '#ff00e6',
    },
    {
      id: 9,
      tech: 'Esp Line',
      category: 'Visibilidade',
      color: '#ff00e6',
    },
    {
      id: 10,
      tech: 'Esp Box',
      category: 'Visibilidade',
      color: '#ff00e6',
    },
    {
      id: 11,
      tech: 'Recurso Infinito',
      category: 'Manipulação de Recursos',
      color: '#7a00b2',
    },
    {
      id: 12,
      tech: 'Dinheiro Infinito',
      category: 'Manipulação de Recursos',
      color: '#7a00b2',
    },
    {
      id: 13,
      tech: 'Dupe de Itens',
      category: 'Manipulação de Recursos',
      color: '#7a00b2',
    },
    {
      id: 14,
      tech: 'Bypass',
      category: 'Evasão de Anticheat',
      color: '#d280ff',
    },
    {
      id: 15,
      tech: 'Hack Externo',
      category: 'Tipos de Hack',
      color: '#e5b3ff',
    },
    {
      id: 16,
      tech: 'Hack Interno',
      category: 'Tipos de Hack',
      color: '#e5b3ff',
    },
    {
      id: 17,
      tech: 'Hack Vip',
      category: 'Tipos de Hack',
      color: '#e5b3ff',
    },
    {
      id: 18,
      tech: 'Cheats',
      category: 'Programação',
      color: '#ffb200',
    },
    {
      id: 19,
      tech: 'Executáveis Hack',
      category: 'Programação',
      color: '#ffb200',
    },

  ]

  return (
    <>
      <div className="max-w-[1280px] m-auto px-4 sm:px-8">
        <div className="flex justify-between gap-8">

          <div className="py-12 text-nowrap">
            <ul className="flex flex-col">
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#b200ff]
                  ${tech === "Mecânicas de Jogo" ?
                      'bg-gradient-to-r from-[#b200ff] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Mecânicas de Jogo') }}>
                  Mecânicas de Jogo
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#6800ff]
                  ${tech === "Manipulação de Mira" ?
                      'bg-gradient-to-r from-[#6800ff] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Manipulação de Mira') }}>
                  Manipulação de Mira
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#ff00e6]
                  ${tech === "Visibilidade" ?
                      'bg-gradient-to-r from-[#ff00e6] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Visibilidade') }}>
                  Visibilidade
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#7a00b2]
                  ${tech === "Manipulação de Recursos" ?
                      'bg-gradient-to-r from-[#7a00b2] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Manipulação de Recursos') }}>
                  Manipulação de Recursos
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#d280ff]
                  ${tech === "Evasão de Anticheat" ?
                      'bg-gradient-to-r from-[#d280ff] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Evasão de Anticheat') }}>
                  Evasão de Anticheat
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#e5b3ff]
                  ${tech === "Tipos de Hack" ?
                      'bg-gradient-to-r from-[#e5b3ff] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Tipos de Hack') }}>
                  Tipos de Hack
                </button>
              </li>
              <li>
                <button
                  className={`px-4 w-full text-left py-4 border-l-2 border-[#ffb200]
                  ${tech === "Programação" ?
                      'bg-gradient-to-r from-[#ffb200] to-transparent font-semibold'
                      :
                      ''
                    }`}
                  onClick={() => { setTech('Programação') }}>
                  Programação
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full relative">
            <div className="grid grid-cols-3 gap-4 px-4 sm:px-8 py-12">
              {techs.map((i) => (
                <>
                  {
                    i.category === tech ?

                      <motion.div
                        className={`bg-white bg-opacity-10 border-[1px] py-4 px-2 clip-custom`}
                        style={{ borderColor: i.color }}
                        key={i.id}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <span
                          className="font-bold uppercase">
                          {i.tech}
                        </span>
                        <p
                          className={`text-[12px]`}
                          style={{ color: i.color }}>
                          {i.category}
                        </p>
                      </motion.div>
                      :
                      ''
                  }
                </>
              ))}
            </div>
            <ChevronsDown strokeWidth={2} size={40}
            className="absolute -bottom-6 right-0 animate-bounce text-[#B200FF]" />
          </div>

        </div>
      </div>
    </>
  )
}