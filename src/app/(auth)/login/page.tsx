import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import LoginForm from "./_components/login-form";

export default function Page() {

  return (
    <main className="h-screen flex w-full font-[family-name:var(--font-nunito)] antialiased font-semibold">
      <div className="bg-[#F5FAFC] w-full h-full sm:flex items-center justify-center hidden p-16">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/ilustration one.svg" alt="aluguel de carro" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/ilustration two.svg" alt="aluguel de carro" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <LoginForm/>
      </section>
    </main>
  );
}
