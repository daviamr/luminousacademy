import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function MobileTechGrid() {
  return (
    <>
      <div className='lg:hidden px-4 sm:px-8'>
        <div className="flex items-center justify-center gap-2 py-8">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-white"></div>
          <p className="text-center text-2xl font-bold bg-gradient-to-r from-white via-purple-700 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient min-w-[280px] select-none">Quais habilidades você vai desenvolver?</p>
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">

          {/*grid mobile/tablet*/}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {/*Categoria 1*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#6800FF] py-4 px-2 clip-custom sm:hidden"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Aimbot</span>
              <p className="text-[12px] text-[#6800FF]">Manipulação de mira</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#6800FF] py-4 px-2 clip-custom sm:hidden"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Aim Assist</span>
              <p className="text-[12px] text-[#6800FF]">Manipulação de Mira</p>
            </motion.div>

            {/*Categoria 2*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Godmode</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Speedhack</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Jumphack</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">One Hit Kill</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Kill All Enemys</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#B200FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Freeze all Enemys</span>
              <p className="text-[12px] text-[#B200FF]">Mecânicas de Jogo</p>
            </motion.div>

            {/*Categoria 3*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#FF00E6] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Wallhack</span>
              <p className="text-[12px] text-[#FF00E6]">Visibilidade</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#FF00E6] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Esp Line</span>
              <p className="text-[12px] text-[#FF00E6]">Visibilidade</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#FF00E6] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Esp Box</span>
              <p className="text-[12px] text-[#FF00E6]">Visibilidade</p>
            </motion.div>

            {/*Categoria 4*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#7A00B2] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Recurso Infinito</span>
              <p className="text-[12px] text-[#7A00B2]">Manipulação de Recursos</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#7A00B2] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Dinheiro Infinito</span>
              <p className="text-[12px] text-[#7A00B2]">Manipulação de Recursos</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#7A00B2] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Dupe de itens</span>
              <p className="text-[12px] text-[#7A00B2]">Manipulação de Recursos</p>
            </motion.div>

            {/*Categoria 5*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#D280FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Bypass</span>
              <p className="text-[12px] text-[#D280FF]">Evasão de Anticheat</p>
            </motion.div>

            {/*Categoria 6*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#E5B3FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Hack Externo</span>
              <p className="text-[12px] text-[#E5B3FF]">Tipos de Hack</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#E5B3FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Hack Interno</span>
              <p className="text-[12px] text-[#E5B3FF]">Tipos de Hack</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#E5B3FF] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Hack VIP</span>
              <p className="text-[12px] text-[#E5B3FF]">Tipos de Hack</p>
            </motion.div>

            {/*Categoria 7*/}
            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#FFB200] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Cheats</span>
              <p className="text-[12px] text-[#FFB200]">Programação</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 border-[1px] border-[#FFB200] py-4 px-2 clip-custom"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <span className="font-bold uppercase">Executáveis Hack</span>
              <p className="text-[12px] text-[#FFB200]">Programação</p>
            </motion.div>


          </div>

          <div className="text-center lg:hidden">
            <p>E muito mais, está esperando o que?</p>
            <p><strong>Faça parte</strong> da Luminous Academy!</p>
          </div>

          <Button className="w-full max-w-[260px] m-auto py-8 text-[18px] rounded-none uppercase font-bold clip-custom duration-300 bg-[#B200FF] hover:bg-[#7f25a5] text-[#ffffff] lg:hidden">
            Saiba mais
          </Button>

        </div>
      </div>
    </>
  )
}