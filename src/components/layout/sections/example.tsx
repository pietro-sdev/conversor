'use client'
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const ExampleSection = () => {
  const [labelCode, setLabelCode] = useState("^XA\n^FO50,50^ADN,36,20^FDHello, World!^FS\n^XZ");

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-[#2C3E50] tracking-wider">
          Editor de Etiquetas
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Crie e visualize suas etiquetas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:pl-12 sm:ml-10">
        {/* Editor de Código */}
        <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
          <CardTitle className="text-lg font-semibold mb-4">Código ZPL</CardTitle>
          <CardContent>
            <Textarea
              className="w-full h-64 p-4 border rounded-lg"
              value={labelCode}
              onChange={(e) => setLabelCode(e.target.value)}
            />
            <Button className=" bg-[#2C3E50] mt-4 w-full font-semibold">Atualizar Visualização</Button>
          </CardContent>
        </Card>

        {/* Visualização da Etiqueta */}
        <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
          <CardTitle className="text-lg font-semibold mb-4">Visualização</CardTitle>
          <CardContent className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">Pré-visualização da etiqueta</span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
