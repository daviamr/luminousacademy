import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const items = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Produto 1",
    description: "Descrição do produto 1",
    buttonText: "Saiba mais",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Produto 2",
    description: "Descrição do produto 2",
    buttonText: "Ver detalhes",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Produto 3",
    description: "Descrição do produto 3",
    buttonText: "Comprar agora",
  },
]

export function CarouselItems() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-3/3">
            <div className="p-2">
              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <Button className="mt-4">{item.buttonText}</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}