'use client';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Nunito } from "next/font/google";

// Carregue a fonte Nunito no escopo do módulo
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  const [labelCode, setLabelCode] = useState(
    "^XA\n^FO50,50^ADN,36,20^FDHello, World!^FS\n^XZ"
  );

  return (
    <div className={`${nunito.className} p-8 min-h-screen`}>
      <header className="flex flex-col mb-10">
        <h1 className="text-4xl font-bold mb-2 text-start">
          Editor de Etiquetas
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Editor de Código */}
        <Card className="shadow-lg">
          <CardTitle className="text-2xl font-semibold mb-4 p-3">
            Código ZPL
          </CardTitle>
          <CardContent className="space-y-4">
            <Textarea
              className="w-full h-64 p-4 border rounded-lg"
              value={labelCode}
              onChange={(e) => setLabelCode(e.target.value)}
            />
            <Button className="bg-[#2C3E50] mt-4 w-full font-semibold">
              Atualizar Visualização
            </Button>
          </CardContent>
        </Card>

        {/* Visualização da Etiqueta */}
        <Card className="shadow-lg flex flex-col items-center justify-center">
          <CardContent className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">Pré-visualização da etiqueta</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
