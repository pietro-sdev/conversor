"use client";
import { Nunito } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos desejados
});

export const HeroSection = () => {
  return (
  <section className={`${nunito.className} container w-full px-6 md:px-12 lg:px-20`}>
    <div className="grid lg:grid-cols-2 items-center lg:max-w-screen-xl gap-8 mx-auto md:py-20">
      {/* Coluna do texto */}
      <div className="text-center lg:text-left space-y-8">
        <div className="max-w-screen-md mx-auto lg:mx-0 text-center lg:text-left text-4xl md:text-6xl font-semibold">
          <h1 className="font-extrabold">
            Converta seus arquivos
            <span className="px-2 font-extrabold">em segundos</span> e sem
            complicações.
          </h1>
        </div>

        <p className="max-w-screen-sm lg:max-w-md mx-auto lg:mx-0 text-md text-muted-foreground">
          {`Simplifique sua rotina com um conversor que combina rapidez, segurança e facilidade de uso. Transforme seus arquivos em segundos, sem perda de qualidade, e com suporte para os formatos mais populares. Tudo isso em uma plataforma prática e intuitiva, pronta para atender às suas necessidades.`}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-6/6 md:w-auto font-bold group/arrow bg-[#2C3E50]">
            Comece Agora!
          </Button>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="relative group flex justify-center">
        <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-[#b6d0eb] rounded-full blur-3xl"></div>
        <Image
          width={500}
          height={500}
          className="w-full md:w-[500px] mx-auto rounded-lg relative leading-none flex items-center"
          src={"/image2.png"}
          alt="dashboard"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
      </div>
    </div>
  </section>
  );
};
