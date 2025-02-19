// app/api/cliente/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Instancie o PrismaClient fora da função para aproveitar a conexão
const prisma = new PrismaClient();

export async function GET(request: Request) {
  // Extrai os parâmetros da URL
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  // Validação: email é obrigatório
  if (!email) {
    return NextResponse.json(
      { error: "Email é obrigatório" },
      { status: 400 }
    );
  }

  try {
    // Busca o usuário no banco de dados com base no e-mail
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        // Adicione outros campos, se necessário
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    // Simulação dos dados de assinatura (adapte conforme sua necessidade)
    const subscriptionData = {
      plano: "Premium",
      // Define a data de expiração para 1 mês a partir da data atual
      expiraEm: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    };

    // Retorna os dados do usuário junto com as informações da assinatura
    return NextResponse.json(
      {
        ...user,
        assinatura: subscriptionData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar dados do cliente:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
