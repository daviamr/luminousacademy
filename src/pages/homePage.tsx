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

          <div className="flex flex-col items-center gap-4">
            <div className="p-2 border-4 bg-[#383838]">
              <video height="auto" controls className="max-w-[700px] w-full">
                <source src="src\assets\luminouscheat.mp4" type="video/mp4" />
              </video>

            </div>
            <a href="#">
              <Button variant={"secondary"} className="bg-purple-700 px-12 w-max text-1xl rounded-full uppercase">
                Saiba mais
              </Button>
            </a>
          </div>

        </div>

      </div>
    </>
  )
}