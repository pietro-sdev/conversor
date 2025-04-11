'use client'
import { useState, useEffect } from "react";
import { Nunito } from "next/font/google";

// Importação dos componentes do shadcn/ui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Carregue a fonte Nunito no escopo do módulo
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function GestaoCliente() {
  const [cliente, setCliente] = useState<any>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Tenta recuperar o e-mail do usuário no localStorage
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
      // Busca os dados do cliente utilizando o e-mail
      fetch(`/api/cliente?email=${encodeURIComponent(email)}`)
        .then((res) => res.json())
        .then((data) => {
          setCliente(data);
          setLoadingData(false);
        })
        .catch((error) => {
          console.error("Erro ao carregar os dados do cliente:", error);
          setLoadingData(false);
        });
    } else {
      setLoadingData(false);
    }
  }, []);

  if (loadingData) {
    return (
      <div className={`${nunito.className} flex items-center justify-center h-screen bg-gray-50`}>
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  if (!userEmail) {
    return (
      <div className={`${nunito.className} flex items-center justify-center h-screen bg-gray-50`}>
        <p className="text-lg">Por favor, faça login para acessar a gestão de clientes.</p>
      </div>
    );
  }

  return (
    <div className={`${nunito.className} p-8 min-h-screen`}>
      <header className="flex flex-col items-center mb-10">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="/avatar-placeholder.png" alt="Avatar do Cliente" />
          <AvatarFallback>{cliente?.name ? cliente.name[0].toUpperCase() : "U"}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2 text-center">Minha Conta</h1>
        {cliente && (
          <Badge variant="secondary" className="text-lg">
            {cliente.name || "Usuário"}
          </Badge>
        )}
      </header>

      {cliente ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Dados de Cadastro</CardTitle>
            </CardHeader>
            <Separator className="my-4" />
            <CardContent className="space-y-4 text-lg">
              <p>
                <strong>Nome:</strong> {cliente.name || "Não informado"}
              </p>
              <p>
                <strong>Email:</strong> {cliente.email}
              </p>
              <p>
                <strong>Conta criada em:</strong>{" "}
                {new Date(cliente.createdAt).toLocaleDateString()}
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                Editar Perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Assinatura</CardTitle>
            </CardHeader>
            <Separator className="my-4" />
            <CardContent className="space-y-4 text-lg">
              <p>
                <strong>Plano contratado:</strong>{" "}
                {cliente.assinatura?.plano || "Básico"}
              </p>
              <p>
                <strong>Data de expiração:</strong>{" "}
                {cliente.assinatura?.expiraEm
                  ? new Date(cliente.assinatura.expiraEm).toLocaleDateString()
                  : "Sem assinatura ativa"}
              </p>
              <div className="justify-between">
                <Button variant="outline" size="sm" className="mt-2 mr-2">
                  Renovar Assinatura
                </Button>
                <Button className="mt-2" size={"sm"} variant="destructive">Cancelar Assinatura</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg">Não foi possível carregar os dados do cliente.</p>
        </div>
      )}
    </div>
  );
}
