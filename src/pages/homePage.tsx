import { CarouselItems } from "@/components/carousel";

export function HomePage() {
  return (
    <>
      <div className="py-8">

        <div className="flex flex-col gap-8">

          <div>
            <h1 className="text-4xl font-semibold">Junte-se à comunidade de <span className="font-bold bg-gradient-to-r from-white via-purple-500 to-[hsl(189.18_100%_50%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-text-gradient">Game Hacking</span> que mais cresce!</h1>
          </div>

          <div className="p-2 border-4 bg-[#383838]">
            <video height="auto" controls className="max-w-[700px] w-full">
              <source src="src\assets\luminouscheat.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

        <div className="mt-8">
          <p>Compre hoje com <span>50% de desconto</span> e receba de brinde um outro curso!</p>
          <CarouselItems/>
        </div>

      </div>
    </>
  )
}