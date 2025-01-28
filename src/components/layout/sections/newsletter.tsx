"use client";

import { Nunito } from "next/font/google";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Número enviado!");
  };

  return (
    <section id="newsletter" className={`${nunito.className} bg-gray-900 text-white rounded-2xl mx-auto w-11/12 lg:w-[80%] p-10`}>
      <div className="container text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Ficou com alguma dúvida? Entre em contato conosco
        </h3>
        <p className="text-md text-gray-300 mt-2">
          Não hesite em nos deixar seu número de telefone. Entraremos em contato para esclarecer quaisquer dúvidas que você possa ter.
        </p>

        <form
          className="flex flex-col md:flex-row w-full md:w-6/12 lg:w-4/12 mx-auto gap-3 mt-6"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Digite seu número de telefone"
            className="bg-gray-800 text-white placeholder-gray-400 border-none rounded-md px-4 py-2"
            aria-label="Telefone"
          />
          <Button type="submit" className="bg-white text-black font-bold rounded-md px-6 py-2">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};
