"use client";
import { Nunito } from "next/font/google";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ReviewProps {
  name: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    name: "Pietro Menezes",
    comment:
      "Simplesmente incrível! Converteu meus arquivos em segundos, sem complicação. Recomendo demais!",
    rating: 5.0,
  },
  {
    name: "Jeferson",
    comment:
      "Finalmente encontrei uma ferramenta fácil e confiável. Salvou meu tempo e funciona perfeitamente!",
    rating: 5.0,
  },
  {
    name: "Guilherme",
    comment:
      "Finalmente encontrei uma ferramenta fácil e confiável. Salvou meu tempo e funciona perfeitamente!",
    rating: 5.0,
  },
  {
    name: "Paulo",
    comment:
      "Finalmente encontrei uma ferramenta fácil e confiável. Salvou meu tempo e funciona perfeitamente!",
    rating: 5.0,
  },
  {
    name: "José",
    comment:
      "Finalmente encontrei uma ferramenta fácil e confiável. Salvou meu tempo e funciona perfeitamente!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className={`${nunito.className} container py-24 sm:py-32`}
    >
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-[#2C3E50] text-center mb-2 tracking-wider">
          Testemunhos
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          O que nossos clientes dizem
        </h2>
      </div>

      <Carousel
        opts={{
          align: "center",
        }}
        className="relative w-[90%] lg:max-w-screen-lg mx-auto lg:ml-36"
      >
        <CarouselContent className="flex items-center">
          {reviewList.map((review, index) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center max-w-[400px]">
                <CardContent className="pt-6 pb-0 flex flex-col items-center">
                  {/* Avatar com cor dinâmica */}
                  <Avatar className={`w-12 h-12`}>
                    <AvatarFallback className="text-black text-xl font-semibold">
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Nome do usuário */}
                  <CardTitle className="text-lg font-semibold mt-4">
                    {review.name}
                  </CardTitle>

                  {/* Estrelas */}
                  <div className="flex gap-1 py-2 justify-center">
                    {Array.from({ length: Math.round(review.rating) }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="size-5 fill-yellow-500 text-yellow-500"
                        />
                      )
                    )}
                  </div>

                  {/* Comentário */}
                  <CardDescription className="text-gray-600 text-md mt-2">
                    {review.comment}
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
