import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button";

export function Plans() {
  const plans = [
    {
      id: 0,
      logo: 'https://i.imgur.com/ujh5nXa.png',
      title: "Curso Luminous",
      plan: "Plano A",
      oldPrice: "200,00",
      price: "99,99",
      link: '',
    },
    {
      id: 1,
      logo: 'https://i.imgur.com/ujh5nXa.png',
      title: "Curso Luminous + Livro",
      plan: "Plano A",
      oldPrice: "359,90",
      price: "179,80",
      link: '',
    },
    {
      id: 2,
      logo: 'https://i.imgur.com/ujh5nXa.png',
      title: "Livro Luminous",
      plan: "Plano A",
      oldPrice: "159,90",
      price: "79,90",
      link: '',
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">

      <div className="flex items-center justify-center gap-2 py-8 w-full">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-white"></div>
        <p className="text-center text-2xl font-bold bg-gradient-to-r from-white via-purple-700 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient min-w-[120px] select-none">Planos</p>
        <div className="w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
      </div>
      
      <Carousel className="w-full max-w-[calc(100%_-_80px)]">
        <CarouselContent className="-ml-1">
          {plans.map((i) => (
            <CarouselItem key={i.id} className="pl-1 sm:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="flex flex-col gap-4 text-center">

                      <div className="flex flex-col gap-4 select-none">
                        <p className="text-2xl font-bold text-[#b200ff]">
                          {i.title}
                        </p>

                        <img src={i.logo} alt={i.title} />

                        {/* <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum est consectetur id similique culpa dolore, quis eos labore atque modi asperiores sequi adipisci sed aspernatur.
                        </p> */}
                      </div>

                      <ul className="text-left select-none">
                        <li className="flex gap-2 items-center">
                          <p className="font-bold text-green-600">&#x2713;</p>
                          <p>
                            Decodificação
                          </p>
                        </li>
                        <li className="flex gap-2 items-center">
                          <p className="font-bold text-green-600">&#x2713;</p>
                          <p>
                            Registro Assembly
                          </p>
                        </li>
                        <li className="flex gap-2 items-center">
                          <p className="font-bold text-green-600">&#x2713;</p>
                          <p>
                            Programação Para Cheats
                          </p>
                        </li>
                        <li className="flex gap-2 items-center">
                          <p className="font-bold text-green-600">&#x2713;</p>
                          <p>
                            Scripts, Forms, ImGui
                          </p>
                        </li>
                        <li className="flex gap-2 items-center">
                          <p className="font-bold text-green-600">&#x2713;</p>
                          <p>
                            Códigos prontos
                          </p>
                        </li>
                      </ul>

                      <div className="w-max m-auto select-none">
                        {/* <p className="text-red-600">
                          Oferta promocional
                        </p> */}
                        <div className="relative py-4">
                          <p className="absolute top-0 left-0 text-1xl font-bold max-w">
                            De: <span className="line-through font-normal text-red-600">R$ {i.oldPrice}</span>
                          </p>
                          <p className="text-2xl font-bold">
                            Por: <span className="font-bold text-[#b200ff]">R$ {i.price}</span>
                          </p>
                          <p className={`text-[12px] font-bold bg-red-600 rounded-full bg-opacity-75 py-1 ${i.id === 1 ? 'block' : 'hidden'}`}>
                            <span className="text-[12px]">🔥</span> O mais comprado
                          </p>
                        </div>
                      </div>

                      <Button variant={"outline"} className="py-6 transition duration-300 hover:scale-110 hover:bg-white">
                        <p className="bg-gradient-to-r from-white via-[#B200FF] to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient uppercase text-[18px] font-bold">
                          Comprar
                        </p>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}